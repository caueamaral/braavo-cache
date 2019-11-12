const limparCache = () => {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tab) {
    const url = tab[0].url

    if (url.endsWith('cache')) {
      chrome.browserAction.setIcon({path: 'icon.png'}) 

      return chrome.tabs.update(tab[0].id, {url: url.replace('cache', '')})
    }
    
    const pattern = /https:\/\/www.\w+-?\w+.\w+.\w+/
    
    chrome.browserAction.setIcon({path: 'icon_black_and_white.png'})
    
    chrome.tabs.update(tab[0].id, {url: url.match(pattern)[0] + '/cache'})
  })
}

chrome.browserAction.onClicked.addListener(limparCache)