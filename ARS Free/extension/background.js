chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url && tab.url.startsWith("https://stake.com/")) {
        try {
            await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ["content.js"]
            });
        } catch (error) {
        }
    }
});
