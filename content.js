
// chrome://extensions
// enabel "devloper mode"

console.log("running")
let alarmResponse 


chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    if (message.txt == "break") {
        alert("break")
    }
}

// Function to put up window

//let paragraphs = document.getElementsByTagName("p");
// for (var elt of paragraphs) {
//     elt.style['background-color'] = '#551a8b'
// }
