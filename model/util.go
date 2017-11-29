package model

import "os"
import "net/smtp"
import "fmt"

// Gets the port for releasing the server
func GetPort() string {
    port := os.Getenv("PORT")

    if len(port) == 0 {
        port = "8000"
    }

    return ":" + port
}

// Sends a simple email
func SendSimpleMail(recipient, message string) error {
    mail := []byte("From: " + os.Getenv("USERNAME") + "\r\n" +
                   "To: " + recipient + "\r\n" +
                   "Subject: Automatic Mail\r\n\r\n" +
                   message + "\r\n")
    auth := smtp.PlainAuth("",
                           os.Getenv("USERNAME"),
                           os.Getenv("PASSWORD"),
                           "smtp.gmail.com")
    oops := smtp.SendMail("smtp.gmail.com:465",
                          auth,
                          os.Getenv("USERNAME"),
                          []string{
                              recipient,
                          },
                          mail)
    fmt.Printf("%v\n", string(mail))

    return oops
}
