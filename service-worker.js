function changeEvent(selector, timeout) {
  setTimeout(() => {
    document.querySelector(selector).addEventListener("click", (event) => {
      const mp3Url = chrome.runtime.getURL("./jef.mp3");
      const audio = new Audio(mp3Url);
      audio.play();
      event.stopImmediatePropagation();
    });
  }, timeout);
}
changeEvent(".fAwxxf.TzAKVc", 0);
changeEvent("#tw-spkr-button", 5000);
