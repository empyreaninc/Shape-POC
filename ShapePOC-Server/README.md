# ShapePOC-Server

This Node.js server works with a browser extension to harvest Shape headers from websites. It automates browser actions, manages proxies, and serves headers to a client application.

## Features

-   **Local Server:** Runs a local server to handle `GET` and `POST` requests.
-   **Browser Automation:** Uses `@nut-tree/nut-js` and `ghost-cursor` to simulate human-like mouse movements.
-   **Proxy Management:** Anonymizes requests through a list of proxies.
-   **Header Harvesting:** Receives headers from the browser extension and serves them to the main bot module.
-   **VPN Control:** Uses AppleScript to control the TunnelBear VPN client.

## Running the Project

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the server:
    ```bash
    node main.js
    ```