# ShapePOC: A Proof-of-Concept Suite for Web Automation

This project is a multi-component system designed to demonstrate a proof-of-concept for automating interactions with a website. It consists of three main parts: a Go-based bot (`ShapePOC-Bot`), a Node.js server (`ShapePOC-Server`), and a Chrome browser extension (`ShapePOC-Linker`).

## System Architecture

The three components work together to automate tasks on a target website.

1.  **`ShapePOC-Linker` (Chrome Extension):** This extension runs in the browser and is responsible for intercepting network traffic and harvesting proprietary headers from the target website.

2.  **`ShapePOC-Server` (Node.js Server):** This server runs locally and receives the headers and other contextual information from the `ShapePOC-Linker` extension. It processes this data, manages proxies, and uses browser automation to generate and serve the necessary headers to the `ShapePOC-Bot`. It also controls a VPN client to change the IP address between cycles.

3.  **`ShapePOC-Bot` (Go Application):** This is the main application that uses the headers from the `ShapePOC-Server` to bypass anti-bot measures on the target website and automate tasks.

## Features

*   **Modular Architecture:** The system is divided into three distinct components, each with its own set of responsibilities.
*   **Browser Automation:** The server uses browser automation to simulate human-like interactions with the target website.
*   **Header Harvesting:** The Chrome extension intercepts and harvests proprietary headers from the target website.
*   **Proxy and VPN Management:** The server uses proxies and a VPN to anonymize requests and change the IP address.
*   **Inter-Process Communication:** The bot and server communicate with each other to ensure proper synchronization and to exchange data.

## Getting Started

To run the entire system, you will need to have the following prerequisites installed:

*   Node.js
*   Go
*   Google Chrome or another Chromium-based browser
*   TunnelBear VPN Client (for macOS)

### Installation and Running

1.  **Start `ShapePOC-Server`:**
    ```bash
    cd ShapePOC-Server
    npm install
    node main.js
    ```
2.  **Load `ShapePOC-Linker` in Chrome:**
    -   Open Chrome and navigate to `chrome://extensions`.
    -   Enable "Developer mode".
    -   Click "Load unpacked" and select the `ShapePOC-Linker` directory.
3.  **Run `ShapePOC-Bot`:**
    ```bash
    cd ShapePOC-Bot
    go run main.go
    ```

## Directory Structure

```
.
├── ShapePOC-Bot
├── ShapePOC-Linker
└── ShapePOC-Server
```

Each of the subdirectories contains a separate project with its own `README.md` file that provides more detailed information about that specific component.
