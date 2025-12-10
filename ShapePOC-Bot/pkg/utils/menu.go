package utils

import (
	"fmt"
	"github.com/manifoldco/promptui"
)

func HomeMenu() string {
	prompt := promptui.Select{
		Label: "Select Site",
		Items: []string{"1. END. Clothing", "2. JD Sports", "3. FootPatrol", "4. Size?", "5. Adidas Confirmed",
			"6. Adidas Confirmed", "7. Nike"},
	}

	_, result, err := prompt.Run()

	if err != nil {
		fmt.Printf("Selection failed %v\n", err)

	}
	return result
}

func EndMenu() string {
	prompt := promptui.Select{
		Label: "Select Mode",
		Items: []string{"1. Entry", "2. Account Gen", "3. Address Changer"},
	}

	_, result, err := prompt.Run()

	if err != nil {
		fmt.Printf("Selection failed %v\n", err)

	}
	return result
}
