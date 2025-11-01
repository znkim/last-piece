const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
const BASE_URL = new URL('.', import.meta.url).pathname
if (isMobile) {
  console.log("Redirecting to mobile version");
  window.location.href = BASE_URL + "/mobile";
}