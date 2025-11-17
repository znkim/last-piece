import {getRootPath} from "./header-event.js";

let urlIsMobile = window.location.pathname.includes("/mobile");
let isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
if (!urlIsMobile && isMobile) {
  console.log("Redirecting to mobile version");
  const ROOT = getRootPath();
  window.location.href = ROOT + "mobile";
} else if (urlIsMobile && !isMobile) {
  console.log("Redirecting to web version");
  const ROOT = getRootPath();
  window.location.href = ROOT + "web";
}