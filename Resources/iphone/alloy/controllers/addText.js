function Controller() {
    function focusTextField() {
        $.itemField.focus();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addText";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addTextWin = Ti.UI.createView({
        id: "addTextWin"
    });
    $.__views.addTextWin && $.addTopLevelView($.__views.addTextWin);
    focusTextField ? $.__views.addTextWin.addEventListener("open", focusTextField) : __defers["$.__views.addTextWin!open!focusTextField"] = true;
    $.__views.addTextView = Ti.UI.createView({
        backgroundColor: "gray",
        layout: "vertical",
        id: "addTextView"
    });
    $.__views.addTextWin.add($.__views.addTextView);
    $.__views.itemField = Ti.UI.createTextArea({
        left: "10px",
        right: "10px",
        top: "10px",
        width: "620px",
        height: "300px",
        id: "itemField",
        hintText: "New Moment"
    });
    $.__views.addTextView.add($.__views.itemField);
    $.__views.submitBtn = Ti.UI.createButton({
        top: "50px",
        width: "50%",
        backgroundColor: "green",
        title: "Submit",
        id: "submitBtn"
    });
    $.__views.addTextView.add($.__views.submitBtn);
    $.__views.cancelBtn = Ti.UI.createButton({
        top: "50px",
        width: "50%",
        backgroundColor: "red",
        title: "Cancel",
        id: "cancelBtn"
    });
    $.__views.addTextView.add($.__views.cancelBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    focusTextField();
    __defers["$.__views.addTextWin!open!focusTextField"] && $.__views.addTextWin.addEventListener("open", focusTextField);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;