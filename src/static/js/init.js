import {getRootPath} from "./header-event.js";

let urlIsWeb = window.location.pathname.includes("/web");
let urlIsMobile = window.location.pathname.includes("/mobile");
let isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

if (urlIsMobile || urlIsWeb) {
  console.log(window.location.href);
  if (urlIsWeb && isMobile) {
    window.location.href = window.location.href.replace("/web", "/mobile");
  } else if (urlIsMobile && !isMobile) {
    window.location.href = window.location.href.replace("/mobile", "/web");
  }
} else {
  // root page
  if (isMobile) {
    window.location.href = getRootPath() + "mobile/mobile.html";
  } else {
    if (window.location.pathname !== "/") {
      window.location.href = getRootPath();
      console.log("redirect to root");
    }
  }
}

