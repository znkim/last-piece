document.addEventListener("DOMContentLoaded", function(){
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");
    console.log(id);
});
