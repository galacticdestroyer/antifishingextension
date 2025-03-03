const phishingSites = [
  "example-phishing.com",
  "fake-login.net",
  "malicious-site.org"
];

if (phishingSites.includes(window.location.hostname)) {
  const warningBanner = document.createElement("div");
  warningBanner.style.position = "fixed";
  warningBanner.style.top = "0";
  warningBanner.style.left = "0";
  warningBanner.style.width = "100%";
  warningBanner.style.backgroundColor = "red";
  warningBanner.style.color = "white";
  warningBanner.style.padding = "10px";
  warningBanner.style.textAlign = "center";
  warningBanner.style.fontSize = "18px";
  warningBanner.innerText = "WARNING: This site is flagged as phishing!";
  document.body.prepend(warningBanner);
}
