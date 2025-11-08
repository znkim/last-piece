let isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
if (isMobile) {
  console.log("Redirecting to mobile version");
  const ROOT = getRootPath();
  window.location.href = ROOT + "mobile";
}