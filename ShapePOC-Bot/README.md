# ShapePOC-Bot

This Go-based command-line application automates interactions with the "END. Clothing" website, specifically for entering raffles and generating accounts.

## Features

-   **Raffle Entry:** Automates the process of entering product raffles.
-   **Account Generation:** Can generate new accounts on the website.
-   **Header Management:** Relies on a local server to provide the necessary headers to bypass anti-bot protection.
-   **VPN Check:** Checks for a VPN connection through the local server before making requests.

## Running the Application

1.  Start the local header server.
2.  Run the bot:
    ```sh
    go run main.go
    ```

## Configuration

-   Account information is read from a `sites/END/END.csv` file.
-   The raffle ID is currently hardcoded and needs to be set to the active raffle's ID.