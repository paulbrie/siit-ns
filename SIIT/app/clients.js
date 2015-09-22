var frameModule = require("ui/frame");
var topmost = null;

function onLoad(args) {
  // helloS  
  topmost =S frameModule.topmost();
}

function goBack() {
  topmost.goBack();
}

exports.onLoad = onLoad;
exports.goBack = goBack;