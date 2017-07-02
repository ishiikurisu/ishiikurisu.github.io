package model

import "os"
import "io/ioutil"
import "errors"
import "math/rand"

// Gets the port for releasing the server
func GetPort() string {
    port := os.Getenv("PORT")

    if len(port) == 0 {
        port = "8000"
    }

    return ":" + port
}

// Chooses a random jpeg file in a directory
func RandomJpg(dir string) (string, error) {
    var cat string = ""
    var oops error = nil
    files, _ := ioutil.ReadDir(dir)

    if len(files) > 0 {
        chosenFile := files[rand.Int() % len(files)]
        cat = dir + chosenFile.Name()
    } else {
        oops = errors.New("no cat")
    }

    return cat, oops
}
