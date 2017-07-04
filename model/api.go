package model

import (
    "net/http"
    "io/ioutil"
    "errors"
    "math/rand"
    "strings"
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
