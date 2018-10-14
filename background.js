

console.log("background running");




chrome.alarms.create('arbitrary', {
    when: 1000, 
    periodInMinutes: 15 // interval
});

chrome.alarms.onAlarm.addListener(function (alarm) {
    console.log(alarm);
    let msg = {
        txt: "break"
    };
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, msg, function(response) {
          console.log(response.farewell);
        });
      });
});



  
chrome.browserAction.onClicked.addListener(buttonClicked);
// Sends a message to content.js
function buttonClicked(tab) {
    console.log("button clicked!");
    let msg = {
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}
