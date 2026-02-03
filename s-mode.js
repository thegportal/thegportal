var op = 0;

function sma() {
  if (op == 0) {
  smc.innerHTML = '<div style="position: static; z-index: 9999;"><p style="font-size: 18; padding: 0 0; margin: 0;">Enable/Disable S-Mode</p>' + '<p style="display: block; padding: 0 0; margin: 6;">S-Mode has been temporarily disabled :(</p>' + '<textarea spellcheck="false" id="input" style="width: 400; resize: none; border-radius: 5px; height: 20px; margin: 0; border: none; display: block;" placeholder="Enter one of the correct passcodes to enable S-Mode"></textarea>' + '<button class="c sbtn" onclick="submit()"><p style="font-family: oxanium; margin: 0; color: white;">Submit</p></button>' + '<button class="c sbtn" onclick="reset()"><p style="font-family: oxanium; margin: 0; color: white;">Reset</p></button>' + '<button class="c sbtn" onclick="disableS()"><p style="font-family: oxanium; margin: 0; color: white;">Disable S-Mode</p></button>' + '<div style="margin-top: 6; display: none;" id="chanc"></div><div id="result"></div></div>';
  smc.style.display = "block";
  op = op + 1;
  document.getElementById('chance').innerHTML = '1 in ' + codes.length * numberv + ' chance.';
  } else {
    smc.innerHTML = '';
    smc.style.display = "none";
    op = 0;
  }
}

var con = `<a class="hyperlink link txt c" href="proxy-list.html"><p>Proxy List</p></a>
<hr>
<a class="hyperlink link txt c" href="mathisfun.html"><p>Astroid/MathIsFun Proxy</p></a>
<a class="hyperlink link txt c" href="croxy-proxy.html"><p>Croxy Proxy</p></a>
<a class="hyperlink link txt c" href="proxysite.html"><p>Proxysite Proxy</p></a>
<a class="hyperlink link txt c" href="rammerhead.html"><p>Rammerhead Proxy</p></a>`;

var passc;

var numberv = 10;

var ch = Math.floor(Math.random() * 10);

var bc = 0;

var bp = 0;

//13
var codes = Array(
'pineapple',
'watermelon',
'apple',
'kiwi',
'orange',
'banana',
'grape',
'starfruit',
'dragonfruit',
'grapefruit',
'blueberry',
'strawberry',
'stop-looking-at-my-code',
);

document.getElementById("pcodes").innerHTML = 'Possible codes are: ' + codes.join(', ');

passc = codes[Math.floor(Math.random()*codes.length)];

function submit() {
  if (bc == 0) {
    bc = bc + 1;
    var a = document.getElementById('input');
    var att = a.value;
    if (att == passc && ch == 1 && bp > 199) {
      document.getElementById('result').innerHTML = '<p style="margin: 6; margin-bottom: 0;">Success! :)</p> <a class="hyperlink link txt c" href="#sm" style="width: 200; height: 30; display: block;"><p style="font-family: oxanium; margin: auto;">S-Mode Tools</p></a>';
      
      smco.innerHTML = con;
      passc = codes[Math.floor(Math.random()*codes.length)];
    } else {
      document.getElementById('result').innerHTML = '<p style="margin: 6; margin-bottom: 0;">Fail! :(</p>';
      passc = codes[Math.floor(Math.random()*codes.length)];
      ch = Math.floor(Math.random() * 10);
      bc = 0;
      bp = bp + 1;
    }
  }
}

function reset() {
  bc = 0;
  bp = 0;
  ch = Math.floor(Math.random() * 3);
  result.innerHTML = '';
}

function disableS() {
  smco.innerHTML = 'S-Mode is disabled.';
  document.getElementById('result').innerHTML = '';
}