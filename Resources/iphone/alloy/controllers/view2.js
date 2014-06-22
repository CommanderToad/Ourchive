function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "view2";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.view2 = Ti.UI.createView({
        id: "view2"
    });
    $.__views.view2 && $.addTopLevelView($.__views.view2);
    var __alloyId38 = [];
    $.__views.sectionFruit = Ti.UI.createTableViewSection({
        id: "sectionFruit",
        headerTitle: "Fruit"
    });
    __alloyId38.push($.__views.sectionFruit);
    $.__views.__alloyId39 = Ti.UI.createTableViewRow({
        title: "Apple",
        id: "__alloyId39"
    });
    $.__views.sectionFruit.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createTableViewRow({
        title: "Bananas",
        id: "__alloyId40"
    });
    $.__views.sectionFruit.add($.__views.__alloyId40);
    $.__views.sectionVeg = Ti.UI.createTableViewSection({
        id: "sectionVeg",
        headerTitle: "Vegetables"
    });
    __alloyId38.push($.__views.sectionVeg);
    $.__views.__alloyId41 = Ti.UI.createTableViewRow({
        title: "Carrots",
        id: "__alloyId41"
    });
    $.__views.sectionVeg.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createTableViewRow({
        title: "Potatoes",
        id: "__alloyId42"
    });
    $.__views.sectionVeg.add($.__views.__alloyId42);
    $.__views.sectionFish = Ti.UI.createTableViewSection({
        id: "sectionFish",
        headerTitle: "Fish"
    });
    __alloyId38.push($.__views.sectionFish);
    $.__views.__alloyId43 = Ti.UI.createTableViewRow({
        title: "Cod",
        id: "__alloyId43"
    });
    $.__views.sectionFish.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createTableViewRow({
        title: "Haddock",
        id: "__alloyId44"
    });
    $.__views.sectionFish.add($.__views.__alloyId44);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId38,
        id: "table"
    });
    $.__views.view2.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.App.addEventListener("sliderToggled", function(e) {
        $.table.touchEnabled = e.hasSlided ? false : true;
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;