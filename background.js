"use strict";

/* var activeTabs = false;
chrome.browserAction.onClicked.addListener(function(tab) {
    if(activeTabs === false){
        chrome.tabs.executeScript(tab.id, {file:"js/jspdf.js"}, function(){
			chrome.tabs.executeScript(tab.id, {file: "js/action.js"}, function(){
			});
		});
        chrome.browserAction.setIcon({path: "icons/icon_on_16.png", tabId:tab.id});
		activeTabs = true
    } else {
		chrome.tabs.executeScript(tab.id, {file:"js/no-action.js"});
        chrome.browserAction.setIcon({path: "icons/icon_16.png", tabId:tab.id});
		activeTabs = false
    }
}); */

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});