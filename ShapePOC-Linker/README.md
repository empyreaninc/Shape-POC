# ShapePOC-Linker

This Chrome extension intercepts and analyzes network traffic to harvest proprietary headers from `api.endclothing.com`.

## Features

-   **Header Harvesting:** Captures headers prefixed with `Sh*pe` or `exj5WzXnUF-` from requests to `api.endclothing.com`.
-   **Contextual Information:** Gathers browser information such as the coordinates of input fields and the browser window's position.
-   **Local Server Communication:** Transmits all captured data to a local server running on `http://127.0.0.1:3000`.

## Running the Extension

1.  Start the local server application.
2.  Load the extension in Chrome:
    -   Navigate to `chrome://extensions`.
    -   Enable "Developer mode".
    -   Click "Load unpacked" and select the `ShapePOC-Linker` directory.
