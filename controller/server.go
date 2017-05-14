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
