var marketContent = `<center style="margin-top: 26px;">
<div>
<div style="background: linear-gradient(70deg, #e34949, #4958e3); border-radius: 10px; margin: 6px; display: flex; justify-content: center; align-items: center; min-height: 60px;">
<h1 style="width: 300px; display: inline-block; margin: 0;">Request an App</h1>
<p style="width: 600px; display: inline-block; margin: 0;">Request an app for the gOS Marketplace.</p>
</div>
<embed src="https://docs.google.com/forms/d/e/1FAIpQLSeFqFDnyWZxdMm-djrlzyvvNLQKlTbgl8IqwzJRV8dehLzEmw/viewform?embedded=true" width="90%" height="300" frameborder="0" marginheight="0" marginwidth="0" style="zoom: 90%; background: white; border: 1px solid white; border-radius: 10px;">
<textarea spellcheck="false" type="text" autocomplete="off" style="border-radius: 10px; border: none; width: 90%; height: 20px; margin-top: 6px; resize: none; display: inline-block;">https://docs.google.com/forms/d/e/1FAIpQLSeFqFDnyWZxdMm-djrlzyvvNLQKlTbgl8IqwzJRV8dehLzEmw/viewform</textarea>
<button class="moreb" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLSeFqFDnyWZxdMm-djrlzyvvNLQKlTbgl8IqwzJRV8dehLzEmw/viewform', '_blank')" style="width: 45%; height: 20px; margin-top: 6px; display: inline-block;"><p style="margin: 0;">Open URL in New Tab</p></button>
<button class="moreb" onclick="openAB('https://docs.google.com/forms/d/e/1FAIpQLSeFqFDnyWZxdMm-djrlzyvvNLQKlTbgl8IqwzJRV8dehLzEmw/viewform?embedded=true')" style="width: 45%; height: 20px; margin-top: 6px; display: inline-block;"><p style="margin: 0;">Open URL in about:blank</p></button>
</div>

<hr style="background: white; height: 1px; margin: 0;">

<h2 style="margin: 5px;">Apps</h2>

<div id="appSelection">
</div>

<hr style="background: white; height: 1px; margin: 0;">

<h2 style="margin: 5px;">Proxy Links</h2>

<div id="proxyLinks">
</div>

<hr style="background: white; height: 1px; margin: 0;">

</center>
<div id="appInfo" style="position: fixed; width: 100%; height: 100%; left: 0; top: 0; background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(5px); z-index: 0; display: none;">
</div>`;
document.getElementById('market').style.marginTop = '20px';
document.getElementById('market').innerHTML = marketContent;

function addApp(Location, Name, Url, IconData, Description, ab) {
  if (ab === 1) {
    document.getElementById(Location).innerHTML += `<div class="iapp-section app-section">
    <div class="appi" title="${Name}" onclick="openInfo('${Name}', '${Url}', '${IconData}', \`${Description}\`)"><img class="aimg" src="${IconData}" style="border-radius: 9px;">
    </div>
    <p style="margin: 3px;">${Name}</p>
    <button class="delabtn" onclick="installApp('${Name}', '${Url}', '${IconData}')">Install</button>
    </div>`;
  } if (ab === 0) {
    document.getElementById(Location).innerHTML += `<div class="iapp-section app-section">
    <div class="appi" title="${Name} (a:b)" onclick="openInfo('${Name}', '${Url}', '${IconData}', \`${Description}\`)"><img class="aimg" src="${IconData}" style="border-radius: 9px;">
    </div>
    <p style="margin: 3px;">${Name} (a:b)</p>
    <button class="delabtn" onclick="installAppNW('${Name}', '${Url}', '${IconData}')">Install</button>
    </div>`;
  }
}

function openInfo(Name, Url, IconData, Description) {
  document.getElementById('appInfo').style.display = 'block';
  document.getElementById('appInfo').innerHTML = `<div style="margin: 26px;">
  <button class="moreb" onclick="back()" id="cbtn" style="position: fixed; width: 100px;">Back</button>
  <center>
  <img style="border-radius: 20px; width: 100px; height: 100px; background: rgba(255, 255, 255, 0.3);" src="${IconData}">
  <p style="font-size: 20px;">${Name}</p>
  <button class="moreb" onclick="installApp('${Name}', '${Url}', '${IconData}')" id="cbtn">Install ${Name}</button>
  <p style="font-size: 14px;">${Description}</p>
  </center>
  </div>`;
}

function back() {
  document.getElementById('appInfo').style.display = 'none';
}

addApp('appSelection', 'UBGU', 'https://ubgameunion.neocities.org', 'https://ubgameunion.neocities.org/UBGU%20Favicon.svg', `The UBGU is a website where unblocked site creators can discuss, partner, & create.`, 1);
addApp('appSelection', 'The Pizza Edition', 'https://pizzaedition.win/index.html', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVfslQoW2mukrpbWoL1-y6bLVplJFTbrn6w&s', `The Pizza Edition is a popular unblocked games site with over 200 games.`, 1);
addApp('appSelection', 'StrongDog XP', 'https://strongdog.com/index.html', 'https://strongdog.com/strongdog.webp', `StrongDog XP is an unblocked games site with free movies & over 900 games.`, 1);
addApp('proxyLinks', 'Doge Link 1', 'https://mrjohnjohn.follobusiness.com/', 'https://mrjohnjohn.follobusiness.com/assets/img/doge2.jpg', `This is a link for Doge Unblocker.`, 1);
addApp('appSelection', 'NoPlay', 'https://bamboo-mackerel-9mjz.squarespace.com/', 'https://images.squarespace-cdn.com/content/v1/6808d2738e139a6ba0d44ece/1d3c9644-f9aa-4c0d-bfe4-13e080f25ab7/favicon.ico?format=100w', `NoPlay is a site with a list of other unblocked games sites.`, 0);
addApp('appSelection', '1v1.LOL', 'https://1v1-lol-online.github.io/1v1-lol-2/', 'https://cdn6.aptoide.com/imgs/f/f/7/ff7ceb038d8232bfd443077e73e2044d_icon.png', `[No description]`, 1);
addApp('appSelection', 'Labyrinth', 'https://ander55555.github.io/index2.html', 'https://files.catbox.moe/0r0udf.png', `Fun games website`, 1);