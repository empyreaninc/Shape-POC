package utils

import (
	"encoding/json"
	"io/ioutil"
	"log"
)

type Settings struct {
	RaffleID int `json:"raffle_id"`
}

func ReadRaffleID() int {
	file, err := ioutil.ReadFile("../../settings.json")
	if err != nil {
		log.Fatal(err)
	}

	var settings Settings
	err = json.Unmarshal(file, &settings)
	if err != nil {
		log.Fatal(err)
	}

	return settings.RaffleID
}