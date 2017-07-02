package controller

import (
    "net/http"
    "github.com/ishiikurisu/crisjr-eng-br/model"
    "github.com/ishiikurisu/crisjr-eng-br/view"
)

/*********************
 * SERVER DEFINITION *
 *********************/

 type Server struct {
     Port string
 }

 // Create a webserver for this app.
func NewServer() Server {
    server := Server {
        Port: model.GetPort(),
    }
    http.HandleFunc("/", server.SayHello)
    http.HandleFunc("/office", server.TalkAboutOffice)
    http.HandleFunc("/garage", server.TalkAboutGarage)
    http.HandleFunc("/cat", server.DisplayCat)
    return server
}

// Puts the webserver to, well, serve.
func (server *Server) Serve() {
    http.ListenAndServe(server.Port, nil)
}

// Displays the main page
func (server *Server) SayHello(w http.ResponseWriter, r *http.Request) {
    view.SayHello(w)
}

// Displays the office page
func (server *Server) TalkAboutOffice(w http.ResponseWriter, r *http.Request) {
    view.TalkAboutOffice(w)
}

// Displays the garage page
func (server *Server) TalkAboutGarage(w http.ResponseWriter, r *http.Request) {
    view.TalkAboutGarage(w)
}

// Shows a picture of a cat. WARNING: THIS IS EXPERIMENTAL
func (server *Server) DisplayCat(w http.ResponseWriter, r *http.Request) {
    w.Header().Add("Access-Control-Allow-Origin", "http://www.crisjr.eng.br")
    catDir := view.GetPwd() + "assets/neko"
    jpg, oops := model.RandomJpg(catDir)
    if oops != nil {
        panic(oops)
    }
    w.Write([]byte(jpg))
}
