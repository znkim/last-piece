const ROOT = new URL('.', location).pathname;
let isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
if (isMobile) {
  console.log("Redirecting to mobile version");
  window.location.href = ROOT + "/mobile";
}