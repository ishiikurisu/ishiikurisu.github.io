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

    // Main pages
    http.HandleFunc("/", server.SayHello)
    http.HandleFunc("/office", server.TalkAboutOffice)
    http.HandleFunc("/garage", server.TalkAboutGarage)

    // API functions
    http.HandleFunc("/api/cat", server.DisplayCat)
    http.HandleFunc("/api/edf/csv", server.ConvertEdf2Csv)
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
    jpg := model.DisplayCat(view.GetPwd())
    w.Write([]byte(jpg))
}

// Converts an EDF file to CSV.
// TODO Implement this monster.
func (server *Server) ConvertEdf2Csv(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte("NOT WORKING YET"))
}
