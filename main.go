package main

import "github.com/ishiikurisu/crisjr-eng-br/controller"

func main() {
    server := controller.NewServer()
    server.Serve()
}
