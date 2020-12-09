https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt
[SwitchyOmega Conditions]
; Require: SwitchyOmega >= 2.3.2
; Date: 2020/12/9
; Usage: https://github.com/FelisCatus/SwitchyOmega/wiki/RuleListUsage

*.google.com
*.youtube.com
*.inoreader.com
*.github.com
*.1password.com
*.similarweb.com
*.uxfeng.com
*.pujunba.com
*.mingyue1024.com
*.duyaoss.com
*.easylinkservice.net
*.lynnconway.me
*.stackoverflow.com
*.briian.com
*.technews.tw
*.telegram.org
*.itsxmooc.com
*.icloud.com
*.apple.co
*.apache.org
*.axuer.com
*.ankiweb.net
*.810ee.com
*.id97.com
*.adblockplus.org
*.visualstudio.com
*.suiahae.me
*.wakatime.com
*.91porn.com
*.monocloud.me
*.2gua.info
*.raw.githubusercontent.com
*.ikeepstudying.com
*.gstatic.com
*.disqus.com
*.googletagmanager.com
*.wordpress.com
*.facebook.com
*.runkit.com
*.runkitcdn.com
*.nodejs.org
*.vuejs.org
*.githubapp.com
*.hellosean1025.github.io
*.mdn.github.io
*.ppweb.com.cn
*.archive.org
*.codesandbox.io
*.sourcegraph.com
*.buysellads.net
*.speedcurve.com
*.codepen.io
*.stripe.com
*.pusherapp.com
*.travis-ci.org
*.npmjs.com
*.phncdn.com
*.pornhubpremium.com
*.cdpn.io
*.unpkg.com
*.buysellads.com
*.chongbuluo.com
*.chrome-extension-downloader.com
*.addthis.com
*.totoro.asia
*.user-images.githubusercontent.com
*.avatars2.githubusercontent.com
*.mega.co.nz
*.paoluz.com
*.80ss.xyz
*.azureedge.net
*.live.com
*.skype.com
*.skypeassets.com
*.gmw.cn
*.msauth.net
*.utorrent.com
*.scto03.xyz
*.aspnetcdn.com
*.avatars0.githubusercontent.com
*.avatars3.githubusercontent.com
*.avatars1.githubusercontent.com
*.camo.githubusercontent.com
*.githubassets.com
*.r3sub.com
*.media-amazon.com
!*.amazon.com
*.imdb.com
*.telegra.ph
*.allssr.top
*.nassr.top
*.qq360.ml
*.flyzy2005.com


javascript: (function() { var elements = document.body.getElementsByTagName('*'); var items = []; for (var i = 0; i < elements.length; i++) { if (elements[i].innerHTML.indexOf('html * { outline: 1px solid red }') != -1) { items.push(elements[i]); } } if (items.length > 0) { for (var i = 0; i < items.length; i++) { items[i].innerHTML = ''; } } else { document.body.innerHTML += '<style>html * { outline: 1px solid red }</style>'; } })();


javascript: (function () {
  var elements = document.body.getElementsByTagName("*");
  var items = [];
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].innerHTML.indexOf("html * { outline: 1px solid red }") != -1) {
      items.push(elements[i]);
    }
  }
  if (items.length > 0) {
    for (var i = 0; i < items.length; i++) {
      items[i].innerHTML = "";
    }
  } else {
    document.body.innerHTML += "<style>html * { outline: 1px solid red }</style>";
  }
})();
