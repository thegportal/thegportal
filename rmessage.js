//Custom message (If specified)
var cm = '';
if (cm == '') {
var m;
//Characters for the glitchy splash message
var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-=_+[]{};:,./?`~';
var alpha2 = '@#$%&_=+QWERTYUIOPASDFGHJKLZXCVBNM';
//Splash messages
var items = Array(
'Skibidi Toilet in Fortnite',
'Oi Oi Oi... BAKA!',
'Guys... Please take a shower... &#128552;	&#129314;',
'I like my cheese drippy, bruh 	&#129472;',
'When the weather outside is rizzy',
'Do your homework!',
'Pro Tip: Touch some grass!',
'Imagine if the principal got a low taper fade &#128135;',
'Making school IT teams angy since 2024 &#129324;&#129402;&#129322;',
'GET OUT!! &#128682;&#128694;',
'Made using <a href="https://neocities.org" target="_blank" style="text-decoration: underline; color: yellow;">Neocities</a>!',
'You are now blinking & breathing manually. You&#39;re welcome! &#128541;&#128541;',
'Join da Discord <a href="https://discord.gg/rAwrBrA3yT" target="_blank" style="text-decoration: underline; color: yellow;">https://discord.gg/rAwrBrA3yT</a>',
'"Ur brain makes you touch! &#129504;&#129322;&#129322;"',
'They call me "The plug of unblocked games" for a reason &#129297;&#127918;',
'Add me on Snap &#129297; <a href="https://www.snapchat.com/add/jer_powell2024?share_id=eKGXzsvSRqI&locale=en-US" target="_blank" style="text-decoration: underline; color: yellow;">jer_powell2024</a>',
'[Insert Funny Splash Message Here]',
'Go outside!!',
'You know what else is massive?... LOOOWWW TAPERRR FAADDDDEEEE!!',
'Made with love &#10084;&#65039;',
'JavaScript is so [object Object]',
'I\'m in the thick of it, everybody knows',
'U don\'t wanna see me when I\'m silly >:3',
'Made by Hand!',
'School\'s just mad at me cause I\'m sigma &#128483;&#65039;&#128293;&#129398;',
'My tummy hurts :(', 'This was the 27th splash message added :)', 'Hi! :)',
'Can\'t add proxies rn, mommy said no &#128553;&#128553;',
'On my revenge arc fr &#128520;&#128520;',
'Do you have the skibidi toilet meal? &#128540;',
'I-I-I HAVE NOTINGG!! &#128148;&#128148;&#128483;&#65039;&#128293;&#128557;&#128591;',
'Fun fact: GHub was originally a <a href="https://sites.google.com/view/perrymissouri/" target="_blank" style="text-decoration: underline; color: yellow;">Google Site</a>!',
'Good boyy~~ &#128021;&#128021;',
'Thanks for 1,730,000 visits! &#129297;&#128200;&#9786;&#65039;',
'"if u can\'t do the time, don\'t do the crime"',
'Made by Jeremy Powell!',
'Beware of impostors &#128064;&#128064;',
'<a href="https://thegportal.neocities.org" target="_blank" style="text-decoration: underline; color: yellow">thegportal.neocities.org</a>',
'Imagine if GHub got an 𝓾𝓹𝓭𝓪𝓽𝓮<em>...</em> &#128069;',
'"GYAAATTTTTT!!" -Kai Cenat',
'Beware of teachers &#128064;&#128064;',
'Thousands of users!',
'Kyan is so sigma!',
'Incredible!',
'No malicious ads!',
'You just lost the game :(',
'Woah!',
'Look what I can do, mom!',
'So popular!',
'Part of the <a href="https://ubgameunion.neocities.org/" style="text-decoration: underline; color: yellow;">UBGU</a>!',
'The epitome of awesome sauce!',
'Chromebook! Chromebook Chromebook Chromebook!! &#127926;&#127926;&#127926;',
'This site will be updated eventually!',
'Learning everyday!',
'4th of March, 2024 @ 6:25 PM!',
'I... AM STEVE! &#128483;&#65039;&#128293;&#128293;',
'"I am Steve" &#128128;	&#128148;&#129344;',
'CHICKEN JOCKEY! &#128483;&#65039;&#128293;&#128293;',
'MINECRAFT MOVIE HAPPY MEAL!',
'ts so tuff',
'WE\'RE SO BACK!!',
'Tung tung tung tung tung tung tung tung tung sahur!',
'var i = 0; if (i === 0) {document.write(\'Hello!\');}',
'Anthony Hernandez for President!',
'Feet reveal at 2,000,000 views! /s',
'Jeremy\'s such a lazy little boy!',
'Wassup!',
'NOOOOOO CHATGPT!!! <em>&#128557;&#128557;&#128557;</em>',
'$10 Bacon Egg & Cheese &#128184;&#129363;&#129370;&#129472;&#129327;',
'icl ts pmo &#128148;&#129344;',
'*yuo\'r\'ue',
'Also try <a href="https://burgerv2.neocities.org/" style="text-decoration: underline; color: yellow;">BurgerV2</a>!',
'Also try <a href="https://glseries.net/" style="text-decoration: underline; color: yellow;">Geometry Learn</a>!',
'Cappu-Cappu-Cappuccino Assassino!!',
'1709599500',
'Do your work!',
'"17 missing assignments"',
'Hehehehehe...',
'BAD BOY! &#128545;&#10060;',
'"rolly polly guacamole" &#128532;&#129344;',
'<a href="https://dasgames.neocities.org/" style="text-decoration: underline; color: yellow;">DasGames is dasgood!</a>',
'Dozens of users!',
'So many games!',
'Cool!',
'Amazing!',
'Absolutely atrocious!',
'Disgusting!! &#129326;&#129326;',
'There\'s no more splash messages left. This is the last one!',
'Nevermind!',
'There are [] splashes to collect! (This included!)',
'It\'s not a phase, mom!',
'That\'s deep bro...',
'It\'s deep bro...',
'Peekaboo!',
'3... 2... 1!',
'Ready or not, here I come!',
'Also try <a href="https://thegportal.neocities.org/" style="text-decoration: underline; color: yellow;">GHub</a>!',
'Also try <a href="https://thegportal.neocities.org/ghub-v2/" style="text-decoration: underline; color: yellow;">GHub v2</a>!',
'98th!',
'99th!',
'This is the 100th splash message!',
'F̶̘̤̃̇̕ŕ̵͕̮̱͒ȩ̶̼̜̎͌̂̈́͘à̵̪͇͖̋k̷̻̦̖̰͎͠ý̶͈̦̘͇͐͜',
'!!!',
'Make sure to - your -!',
'Guess how much moneys I have? 13! (6,227,020,800)',
'My dad could beat up your dad!',
'01010010 01101001 01111010 01111010 00100001',
'School approved!',
'<a href="https://www.aprilhenry.com/" style="text-decoration: underline; color: yellow;">April Henry! April April Henry!</a>',
'Wearin\' number 23! &#128293;&#128293;',
'We are diamonds taking shape!',
'It\'s the hub!',
'The next message is true',
'The next message is !true',
'The next message is false',
'The next message is !false',
'setInterval(() => {var w = window.open(); w.document.write(`rizz!`);}, 1);',
'Don\'t copy my flow!',
'___',
'Uh oh!',
'Professional!',
'Congratulations!',
'supercalifragilisticexpialidocious!',
'<div style="transform: scale(1.5, 0.8)">CAT</div>',
'Cute!',
'<div style="transform: scale(2.0, 0.6)">Ligma...</div>',
'<div style="transform: scale(0.5, 1.0)">Squished!</div>',
'<div style="transform: scale(5.0, 1.0)">SUS</div>',
'BOO!',
'chikn joky',
'Scrambled!',
'cabe!',
'Cuddles!',
'<div style="transform: scale(8.0, 2.0)">HELLO</div>',
'for (var i = 0; i < Infinity; i++) {document.body.innerHTML += `&lt;embed src="https://thegportal.net"&gt;`;}',
'<div style="transform: scale(-1.0, 1.0)">If you can read this, you\'re cool! :)</div>',
'You dropped this &#128081;',
'Wild Strawberry Alligator Ice &#127827;&#129482;&#128525;',
'<a href="https://www.alligatorice.com/" style="text-decoration: underline; color: yellow;">Alligator Ice! &#129482;</a>',
'Jeremy has bGlnbWE=',
'<p style="font-family: monospace; margin: 0; font-size: 18px;">404 Not Found</p>',
'BREAKING NEWS: GHub is Illegal!',
'qwertyuiopasdfghjklzxcvbnm',
'mnbvcxzlkjhgfdsapoiuytrewq',
'I can see colors & hear sounds!',
'Job had one bro &#129344;&#129344;',
'jeremy is on low battery	&#129315;&#129315;',
'If you can\'t do the crime, don\'t do the time.',
'blah blah blah',
'&lt;!DOCTYPE html&gt;',
'Special!',
'Limited Edition!',
'<i>Hello...</i>',
'Shout out to Adam!',
'Shout out to Krish!',
'Chevy is daddy',
'Jeremiah!',
'Femboy dih &#129401;&#9996;&#65039;&#129316;',
'You\'ll never be this young again.',
'I have good vibes. Very respect.',
'Justice 4 Conrad!',
'<a href="https://thegportaln.neocities.org/" style="text-decoration: underline; color: yellow;">thegportaln.neocities.org</a>',
'Ready for school?',
'Ready for school! :)',
'Not ready for school... :(',
'Just kidding!',
);

//Choose a random splash message & apply it to a div with the id of "rmessage"
m = items[Math.floor(Math.random()*items.length)];
  document.getElementById("rmessage").innerHTML = m;
} else {
  document.getElementById("rmessage").innerHTML = cm;
}

function checkM() {
if (m === 'Make sure to - your -!') {
  document.getElementById("rmessage").innerHTML = '&nbsp;';
  if (!m.includes('Make sure to')) {
      document.getElementById("rmessage").innerHTML = m;
      return;
  } else {
  setInterval(() => {
    document.getElementById("rmessage").innerHTML = m.replaceAll('-', alpha2.charAt(Math.floor(Math.random()*alpha2.length)) + alpha2.charAt(Math.floor(Math.random()*alpha2.length)) + alpha2.charAt(Math.floor(Math.random()*alpha2.length)) + alpha2.charAt(Math.floor(Math.random()*alpha2.length)));
  }, 50);
  }
}

if (m === 'There are [] splashes to collect! (This included!)') {
  setInterval(() => {
    document.getElementById("rmessage").innerHTML = `There are ${items.length - 2} splashes to collect! (This included!)`;
    if (!m.includes('splashes to collect! (This included!)')) {
      document.getElementById("rmessage").innerHTML = m;
      return;
    }
  }, 1);
}

if (m === 'Scrambled!') {
  setTimeout(() => {
    document.getElementById("rmessage").innerHTML = scramble(m);
  }, 50)
}
}

function scramble(str) {
  const charArray = str.split('');
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledArray = shuffleArray(charArray);
  return shuffledArray.join('');
}

function makeM() {
  m = items[Math.floor(Math.random()*items.length)];
  document.getElementById("rmessage").innerHTML = m;
  checkM();
}

makeM();

document.getElementById('vbtnl').innerHTML = 'Download Latest Version (1.1.1)';

function openLink() {
  window.open('https://drive.google.com/file/d/1dCbayR4uXbsChCSU3JHkZ18fCjsaCiZD/view?usp=sharing');
}

function openLinkM() {
  window.open('https://drive.google.com/file/d/1F0RkqZbcBJNVjmSQXgppeiH5Hd20CFsz/view?usp=sharing');
}

function openLV() {
  window.open('https://drive.google.com/file/d/1YOZFBI9UmrvE0uE8iBrxSJuPrFiQ1uaH/view?usp=sharing');
}

document.getElementById('vbtn').innerHTML = 'Download Latest Version (1.0.6)';

function getInfo() {
document.getElementById('linkinfo').innerHTML = '<center><div class="c sect" style="padding: 6 0; margin: 6;"><p style="font-size: 25; margin: 6;"><a href="https://neocities.org/" style="display: inline-block;">Neocities</a>&nbsp;Link</p><a class="bg" href="https://thegportal.neocities.org/" target="_blank">https://thegportal.neocities.org/</a><p style="font-size: 25; margin: 6;"><a href="https://nekoweb.org/" style="display: inline-block;">Nekoweb</a>&nbsp;Link</p><a class="bg" href="https://thegportal.nekoweb.org/" target="_blank">https://thegportal.nekoweb.org/</a><p style="font-size: 25; margin: 6;"><a href="https://freedns.afraid.org/" style="display: inline-block;">FreeDNS</a>&nbsp;Links</p><p style="font-size: 14; margin: 3;">9 current links, newest ones are on the bottom</p><a class="bg" href="http://schoolisfun.spacetechnology.net/" target="_blank">http://schoolisfun.spacetechnology.net/</a><a class="bg" href="http://scienceverse.info.gf/" target="_blank">http://scienceverse.info.gf/</a><a class="bg" href="http://drive.xxxxx.tw/" target="_blank">http://drive.xxxxx.tw/</a><a class="bg" href="http://schoolhelp.home.kg/" target="_blank">http://schoolhelp.home.kg/</a><a class="bg" href="http://mental-health.happyforever.com/" target="_blank">http://mental-health.happyforever.com/</a><a class="bg" href="http://lofi-tracks.ourspacemusic.com/" target="_blank">http://lofi-tracks.ourspacemusic.com/</a><a class="bg" href="http://mathematics.tipsntricks.ca/" target="_blank">http://mathematics.tipsntricks.ca/</a><a class="bg" href="http://technology.360technologies.ca/" target="_blank">http://technology.360technologies.ca/</a><a class="bg" href="http://blog.homeonthewater.com/" target="_blank">http://blog.homeonthewater.com/</a></div></center>';
}

function getBlogInfo() {
  document.getElementById('bloginfo').innerHTML = `<center>
  <div class="c sect" style="margin: 6; padding: 6 0;">
  <h2 style="margin: 0;">More Games Soon</h2>
  <p style="margin: 0;">Aug. 25th, 2025</p>
  <p style="margin: 0;">Since school is starting back up, I'm probably gonna start adding games tomorrow on both v1 & v2 :)</p>
  </div>
  <div class="c sect" style="margin: 6; padding: 6 0;">
  <h2 style="margin: 0;">New Site</h2>
  <p style="margin: 0;">Jun. 5th, 2025</p>
  <p style="margin: 0;">I made a new personal site. It has a new blog, but I might still use this one from time to time :)</p>
  <a href="https://jeremy.thegportal.net" style="color: yellow;">https://jeremy.thegportal.net</a>
  </div>
  <div class="c sect" style="margin: 6; padding: 6 0;">
  <h2 style="margin: 0;">Face Reveal</h2>
  <p style="margin: 0;">Apr. 22nd, 2025</p>
  <p style="margin: 0;">I'm back. Here's my face! There will be a short video soon, probably tomorrow :)</p>
  <div class="sect" style="display: inline-block; width: 40%;" title="My face">
  <img src="facereveal.jpg" height="300">
  <button class="btn button c" onclick="window.open('https://drive.google.com/file/d/1eliJeHJ8BFIOIsT6W1lT8QFmZ1Y22dqJ/view?usp=sharing', '_blank')" style="width: 80%; margin: 6;"><p style="font-family: oxanium;">Download/Comment</p></button>
  </div>
  </div>
  <div class="c sect" style="margin: 6; padding: 6 0;">
  <h2 style="margin: 0;">Thanks for 1 Million Views!</h2>
  <p style="margin: 0;">Apr. 13th, 2025</p>
  <p style="margin: 0;">Thank you guys so much for 1,000,000 views! I honestly don't know what to do, so you can tell me what I can do in the form below! (No game requests!) :)</p>
  <button class="btn button c" onclick="window.open('https://forms.gle/x6QKs1RKPoavLrCTA', '_blank')" style="width: 80%; margin: 6;"><p style="font-family: oxanium;">Open Form</p></button>
  </div>
  <div class="c sect" style="margin: 6; padding: 6 0;">
  <h2 style="margin: 0;">My School District got Destroyed - Update 2</h2>
  <p style="margin: 0;">Apr. 1st, 2025</p>
  <p style="margin: 0;">Forgot to update you guys, sorry! We went back to school on Friday. The high schoolers are coming back tomorrow on Wednesday. They're gonna be spread out in buildings across the district (ex. the Elementary & Middle schools). The high school has been very damaged, & asbestos has been found in the building. Everything else is alright (for me, at least) :)</p>
  </div>
  <div class="c sect" style="margin: 6; padding: 6 0;">
  <h2 style="margin: 0;">My School District got Destroyed - Update</h2>
  <p style="margin: 0;">Mar. 16th, 2025</p>
  <p style="margin: 0;">We're gonna have school off the entirety of next week, yippee! I don't know what's gonna happen when we go back, though :)</p>
  </div>
  <div class="c sect" style="margin: 6; padding: 6 0;">
  <h2 style="margin: 0;">My School District got Destroyed &#128128;&#128591;</h2>
  <p style="margin: 0;">Mar. 15th, 2025</p>
  <p style="margin: 0;">Perryville (the town that I live in) just got swept with a tornado. Many buildings were destroyed & almost 1,300 are left without power. Almost all of the buildings in my district sustained roof damage. The high school, old senior high, & the building that houses the maitenence & IT departments experienced major damage. The buses, transportation shed, & career center remained relatively undamaged. I don't know whether they'll host online school, or if they'll cancel school completely. Fortunately, my parents are alright; our house didn't get hit. I feel deep sympathy & sorrow for those who have lost their homes due to the accident. Stay safe guys, love you all :)</p>
  <div class="sect" style="display: inline-block; width: 40%;" title="Damage to my high school">
  <img src="https://files.catbox.moe/qj2mjj.jpeg" height="200">
  </div>
  <div class="sect" style="display: inline-block; width: 40%;" title="Damage to the old senior high">
  <img src="https://files.catbox.moe/0m2yhj.avif" height="200">
  </div>
  </div>
  <div class="c sect" style="margin: 6; padding: 6 0;"><h2 style="margin: 0;">I'll Work on this Site Soon :)</h2><p style="margin: 0;">Mar. 11th, 2025</p><p style="margin: 0;">Sorry I haven't been updating this site recently, I'm just busy with school :)</p>
  </div>
  
  <div class="c sect" style="margin: 6; padding: 6 0;"><h2 style="margin: 0;">My High School Elective Classes</h2><p style="margin: 0;">Mar. 6th, 2025</p><p style="margin: 0;">Today, I chose the elective classes that I will be having in High School. I chose Computer Applications, Computer Science Essentials & Principals (of course), Human Anatomy, Biology II, Chemistry, Graphic Design, Art, Advertisement, & Personal Financing. I'm very excited for High School & I hope to build a future career in the field of technology or science :)</p>
  </div>
  
  <div class="c sect" style="margin: 6; padding: 6 0;"><h2 style="margin: 0;">Happy Birthday GHub!! Thanks for 500,000 Views!! &lt;3</h2><p style="margin: 0;">Mar. 4th, 2025</p><p style="margin: 0;">Today, 1 year ago, the <a href="https://sites.google.com/view/perrymissouri/" style="color: yellow;">first version of GHub</a> was made on Google Sites. Today is also the day that I celebrate 500,000 views on the <a href="https://thegportal.neocities.org/" style="color: yellow;">Neocities version</a>. I\'ve already made so much progress over a year & I hope to make even more over the next few years. Thank you all &lt;3</p>
  </div>
  
  <div class="c sect" style="margin: 6; padding: 6 0;"><h2 style="margin: 0;">Happy Valentine\'s Day :)</h2><p style="margin: 0;">Feb. 14th, 2025</p><p style="margin: 0;">Happy Valentine\'s Day guys! I don\'t have a valentine this year, but that\'s okay. Love you all :)</p></div>
  <div class="c sect" style="margin: 6; padding: 6 0;"><h2 style="margin: 0;">First Post :)</h2><p style="margin: 0;">Feb. 9th, 2025</p><p style="margin: 0;">This is the first post on my blog! I might post on here every once in a while, but probably not very much.</p>
  </div>
  </center>`;
}