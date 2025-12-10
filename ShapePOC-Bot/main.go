package main

import (
	"ShapePOC-Bot/app"
	"os"
	"os/exec"
)

func main() {
	c := exec.Command("clear")
	c.Stdout = os.Stdout
	c.Run()
	app.Run()

}
