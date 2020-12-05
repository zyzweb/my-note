# project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

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
