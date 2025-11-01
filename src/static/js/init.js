let isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
if (isMobile) {
  console.log("Redirecting to mobile version");
  const ROOT = new URL('.', location).pathname;
  window.location.href = ROOT + "mobile";
}