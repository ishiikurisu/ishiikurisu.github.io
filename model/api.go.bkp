package model

import (
    "net/http"
    "io/ioutil"
    "errors"
    "math/rand"
    "strings"
    "github.com/ishiikurisu/edf"
    "io"
    "bytes"
    "os"
)

// Tries to post a cat to a Rocket.Chat. Also, gives an URL with a picture from Neko Atsume.
func DisplayCat(pwd string) string {
    rocketChatUrl := "https://ieee.rocket.chat/hooks/SRK3bM3v7ZvSh8x86/NP9ENisDecANcTbco4wtBXWd7qijouiwL7eQYvn7esvFbz3S"
    jpg, err := randomJpg(pwd + "assets/neko/")
    Check(err)
    data := "{\"text\":\"Cats!\",\"attachments\":[{\"title\":\"Neko Atsume\",\"title_link\":\"https://www.crisjr.eng.br\",\"text\":\"Neko atsume\",\"image_url\":" + jpg + ",\"color\":\"#764FA5\"}]}"
    http.Post(rocketChatUrl, "application/json", strings.NewReader(data))
    return jpg
}

// Chooses a random jpeg file in a directory
func randomJpg(dir string) (string, error) {
    var cat string = ""
    var oops error = nil
    files, _ := ioutil.ReadDir(dir)

    if len(files) > 0 {
        chosenFile := files[rand.Int() % len(files)]
        // cat = dir + chosenFile.Name()
        cat = "https://raw.githubusercontent.com/ishiikurisu/crisjr-eng-br/master/assets/neko/" + chosenFile.Name()
    } else {
        oops = errors.New("no cat")
    }

    return cat, oops
}

// Checks for errors
func Check(e error) {
    if e != nil {
        panic(e)
    }
}

// Converts an EDF file to CSV
func ConvertEdf2Csv(w http.ResponseWriter, r *http.Request) {
    edfFile := "temp.edf"
    csvFile := "output.csv"

    // Reading
    var buffer bytes.Buffer
    // file, header, err := r.FormFile("edffile")
    file, _, _ := r.FormFile("edffile")
    defer file.Close()
    // TODO Name csv file to this file name
    // name := strings.Split(header.Filename, ".")
    io.Copy(&buffer, file)
    tempFile, _ := os.Create(edfFile)
    tempFile.Write(buffer.Bytes())
    tempFile.Close()

    // Converting
    // TODO Complete repo with EDF package dependency
    edfContents := edf.ReadFile(edfFile)
    tempFile, _ = os.Create(csvFile)
    tempFile.WriteString(edfContents.WriteCSV())
    tempFile.Close()

    // Writting
    w.Header().Set("Content-Disposition", "attachment; filename=" + csvFile)
    w.Header().Set("Content-Type", r.Header.Get("Content-Type"))
    io.Copy(w, r.Body)

    // Cleaning memory
    os.Remove(edfFile)
}
