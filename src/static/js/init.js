import {getRootPath} from "./header-event.js";

let isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
if (isMobile) {
  console.log("Redirecting to mobile version");
  const ROOT = getRootPath();
  window.location.href = ROOT + "mobile";
}