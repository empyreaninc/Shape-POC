
const filter = { urls: ["https://api.endclothing.com/customer/rest/v2/gb/email-availability"] };

const opt_extraInfoSpec = "";
let ShapeHeaderA = ""
let ShapeHeaderA0 = ""
let ShapeHeaderB = ""
let ShapeHeaderC = ""
let ShapeHeaderD = ""
let ShapeHeaderF = ""
let ShapeHeaderZ = ""
let results2Sent = false
let resultsSent = false
let resultsSentThree = false
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}



let aString = ""
chrome.webNavigation.onCompleted.addListener(function (tabId, changeInfo, tab) {
    //  if (changeInfo.status == 'complete')
    setTimeout(function () {
        {
            // delay(5000)

            chrome.tabs.executeScript(null, { code: `var targetCoordEl = document.querySelector('#email'); if (targetCoordEl) { var result = JSON.stringify(targetCoordEl.getClientRects()); result; }` },
                function (results) {
                    if (resultsSent != true) {
                        console.log(results); var xhrRect = new XMLHttpRequest();
                        xhrRect.open("POST", "http://127.0.0.1:3000/clientRect", true);
                        xhrRect.setRequestHeader('Content-Type', 'application/json');
                        xhrRect.send(JSON.stringify({
                            results
                        }));
                        resultsSent = true
                    }
                });

            chrome.tabs.executeScript(null, { code: `screenPos = JSON.stringify({offsetY: window.screen.height - window.innerHeight, offsetX: window.screen.width - window.innerWidth}); let offsetScreen = JSON.parse(screenPos); screenPos` },
                function (results2) {
                    if (results2Sent != true) {
                        var xhrOffset = new XMLHttpRequest();
                        xhrOffset.open("POST", "http://127.0.0.1:3000/offset", true);
                        xhrOffset.setRequestHeader('Content-Type', 'application/json');
                        xhrOffset.send(JSON.stringify({
                            results2
                        }));

                        results2Sent = true
                    }
                });
            chrome.tabs.executeScript(null, { code: `var targetCoordElButton = document.querySelector('#app-container > div.sc-1eymrxb-0.eqfGZp > div > div > div > div > form > div:nth-child(3) > button > div'); if (targetCoordElButton) { var result2 = JSON.stringify(targetCoordElButton.getClientRects()); result2; }` },
                function (results3) {
                    if (resultsSentThree != true) {
                        console.log(results3);
                        var xhrRectButton = new XMLHttpRequest();
                        xhrRectButton.open("POST", "http://127.0.0.1:3000/buttonLocation", true);
                        xhrRectButton.setRequestHeader('Content-Type', 'application/json');
                        xhrRectButton.send(JSON.stringify({
                            results3
                        }));
                        resultsSentThree = true
                    }
                });



        }
    }, 10000); // 10 seconds in milliseconds
});

;

chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        let shapeHeaders = {};
        for (const header of details.requestHeaders) {
            switch (header.name) {
                case "exj5WzXnUF-a":
                    shapeHeaders.headerA = header.value;
                    break;
                case "exj5WzXnUF-a0":
                    shapeHeaders.headerA0 = header.value;
                    break;
                case "exj5WzXnUF-b":
                    shapeHeaders.headerB = header.value;
                    break;
                case "exj5WzXnUF-c":
                    shapeHeaders.headerC = header.value;
                    break;
                case "exj5WzXnUF-d":
                    shapeHeaders.headerD = header.value;
                    break;
                case "exj5WzXnUF-f":
                    shapeHeaders.headerF = header.value;
                    break;
                case "exj5WzXnUF-z":
                    shapeHeaders.headerZ = header.value;
                    break;
            }
        }

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1:3000/headers", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(shapeHeaders));

        return { cancel: true };
    },
    { urls: ["https://api.endclothing.com/customer/rest/v2/gb/email-availability"] },
    ["blocking", "requestHeaders"]
);
