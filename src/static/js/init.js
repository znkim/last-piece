const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
if (isMobile) {
  window.location.href = "/mobile";
}