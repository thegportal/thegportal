function executeOnCombo() {
  window.location.replace("about:blank");
  window.open("https://classroom.google.com/", "_parent");
  return;
}

const pressedKeys = new Set();
         
document.addEventListener("keydown", function(event) {
  pressedKeys.add(event.key);
             
    if (pressedKeys.has("z") && pressedKeys.has("Alt")) {
      executeOnCombo();
  }
});

document.addEventListener("keyup", function(event) {
  pressedKeys.delete(event.key);
});

function setFavicon(url) {
  let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = url;
  document.getElementsByTagName('head')[0].appendChild(link);
}

setFavicon('https://ssl.gstatic.com/classroom/favicon.png'); 

document.getElementsByClassName("key").innerHTML = "Sigma";

function emergency() { 
  window.location.replace("about:blank");
  window.open("https://classroom.google.com/", "_parent");
  return;
}

function ukey(url) {
  var ub = window.open('/');
  ub.document.write(`<frameset><frame src="` + url + `" style="background: black;"></frameset>`);
  ub.document.title = 'New Tab';
}

function ukeyW(url) {
  var ub = window.open('/');
  ub.document.write(`<frameset><frame src="` + url + `" style="background: white;"></frameset>`);
  ub.document.title = 'New Tab';
}