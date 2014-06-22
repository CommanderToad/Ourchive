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
<<<<<<< HEAD
    var __alloyId28 = [];
=======
    var __alloyId38 = [];
>>>>>>> FETCH_HEAD
    $.__views.sectionFruit = Ti.UI.createTableViewSection({
        id: "sectionFruit",
        headerTitle: "Fruit"
    });
<<<<<<< HEAD
    __alloyId28.push($.__views.sectionFruit);
    $.__views.__alloyId29 = Ti.UI.createTableViewRow({
        title: "Apple",
        id: "__alloyId29"
    });
    $.__views.sectionFruit.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        title: "Bananas",
        id: "__alloyId30"
    });
    $.__views.sectionFruit.add($.__views.__alloyId30);
=======
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
>>>>>>> FETCH_HEAD
    $.__views.sectionVeg = Ti.UI.createTableViewSection({
        id: "sectionVeg",
        headerTitle: "Vegetables"
    });
<<<<<<< HEAD
    __alloyId28.push($.__views.sectionVeg);
    $.__views.__alloyId31 = Ti.UI.createTableViewRow({
        title: "Carrots",
        id: "__alloyId31"
    });
    $.__views.sectionVeg.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createTableViewRow({
        title: "Potatoes",
        id: "__alloyId32"
    });
    $.__views.sectionVeg.add($.__views.__alloyId32);
=======
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
>>>>>>> FETCH_HEAD
    $.__views.sectionFish = Ti.UI.createTableViewSection({
        id: "sectionFish",
        headerTitle: "Fish"
    });
<<<<<<< HEAD
    __alloyId28.push($.__views.sectionFish);
    $.__views.__alloyId33 = Ti.UI.createTableViewRow({
        title: "Cod",
        id: "__alloyId33"
    });
    $.__views.sectionFish.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        title: "Haddock",
        id: "__alloyId34"
    });
    $.__views.sectionFish.add($.__views.__alloyId34);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId28,
=======
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
>>>>>>> FETCH_HEAD
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