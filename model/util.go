package model

import "os"
import "os/exec"
import "fmt"
import "errors"

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
    mailgunApi := fmt.Sprintf("'%s'", os.Getenv("MAILGUN_API"))
    mailgunHttp := os.Getenv("MAILGUN_HTTP")
    mailgunUser := fmt.Sprintf("from='Mailgun Sandbox <%s>'", os.Getenv("MAILGUN_USER"))
    to := fmt.Sprintf("to='Liberdade Organização <%s>'", recipient)
    text := fmt.Sprintf("text='%s'", message)

    cmd := exec.Command("curl",
                        "-s",
                        "--user", mailgunApi,
                        mailgunHttp,
                        "-F", mailgunUser,
                        "-F", to,
                        "-F", "subject='Automatic Email'",
                        "-F", text)
    output, oops := cmd.Output()
    if string(output) == "Forbidden" {
        oops = errors.New(string(output))
    }

    return oops
}
