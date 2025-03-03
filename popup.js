const blacklist = ["example-phishing.com", "fake-login.net", "malicious-site.org"];

document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = new URL(tabs[0].url);
    const domain = url.hostname;

    const statusElement = document.getElementById("status");
    if (blacklist.includes(domain)) {
      statusElement.textContent = "⚠️ This site is flagged as phishing!";
      statusElement.style.color = "red";
    } else {
      statusElement.textContent = "✅ This site is safe.";
      statusElement.style.color = "green";
    }
  });

  document.getElementById("report").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = new URL(tabs[0].url);
      alert(`Reported: ${url.hostname}`);
    });
  });
});
