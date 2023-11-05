chrome.contextMenus.create({
    id: "sift-search",
    title: "Search with sift!",
    contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "sift-search") {
        console.log("yay!");
    }
});
  