var view = require("ui/core/view");
var uiaction_bar = require("ui/action-bar");

var frameModule = require("ui/frame");
var topmost = null;

// views
var tvConsole = null;

/**var alert = new UIAlertView();
    alert.message = "Hello world!";
    alert.addButtonWithTitle( "OK" );
    alert.show();*/



function onLoad(args) {
    
    var page = args.object;
    tvConsole = view.getViewById(page, "console");
    log(explore(args), "--- args ---");
    log(explore(page), "--- page ---");
    
		topmost = frameModule.topmost();
    
    /**var dialogs = require("ui/dialogs");
    dialogs.alert("hello").then(function() {
      
    });*/
}

function loadClientsPage() {
	topmost.navigate("clients");    
}

function explore(item) {
    var output = "";
    
    if(typeof item !== "object") {
    	output += ">" + item + "(" + typeof(item) + ")\n";    
    } else {
    	for(var prop in item) {
            output += ">" + prop + "(" + typeof(item[prop]) + ")\n";    
        }    
    }
    
    return output;
}

function log(msg, label) {
    if(label) {
    	tvConsole.text += "\n" + label;      
    }
	tvConsole.text += "\n" + msg;    
}

function clearConsole() {
    tvConsole.text = "";
}
 
exports.onLoad = onLoad;
exports.clearConsole = clearConsole;
exports.loadClientsPage = loadClientsPage;
/**-----------
var web = 
    var textViewModule = require("ui/text-view");
    */
    