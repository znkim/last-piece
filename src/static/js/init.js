const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
if (isMobile) {
  console.log("Redirecting to mobile version");
  window.location.href = "/mobile";
}