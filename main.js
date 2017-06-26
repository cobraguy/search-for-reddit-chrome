var searchMenuItem = chrome.contextMenus.create({"title": "Search link", "contexts": ["link", "page"], "onclick": onSearch});

function onSearch(info, tab){
	var toSearch = info.linkUrl || info.pageUrl;
	chrome.tabs.create({url: "https://reddit.com/submit?url=" + encodeURIComponent(toSearch)});
}