const blacklist = [
  "example-phishing.com",
  "fake-login.net",
  "malicious-site.org"
];

chrome.webNavigation.onCompleted.addListener((details) => {
  const url = new URL(details.url);
  if (blacklist.includes(url.hostname)) {
    alert("Warning! This website is flagged as a phishing site.");
  }
});
