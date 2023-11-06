function createContextMenuItem() {
    chrome.contextMenus.create({
      id: "sift-search",
      title: "Search with sift!",
      contexts: ["all"]
    })
}

// Create the context menu item when the extension is loaded
chrome.runtime.onInstalled.addListener(createContextMenuItem);

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    const selectedText = info.selectionText;
    console.log(selectedText);
    // chrome.browserAction.openPopup();

    // Send a message to the popup script with the selected text
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            function: function (selectedText) {
                // This function runs in the content script of the active tab
                chrome.runtime.sendMessage({ action: "showPopup", selectedText });
            },
            args: [selectedText],
        });
    });
});
  