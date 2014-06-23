function Controller() {
    function myOurchive() {
        Alloy.createController("myOurchive").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "homeView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.homeView = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "homeView"
    });
    $.__views.homeView && $.addTopLevelView($.__views.homeView);
    $.__views.addView = Ti.UI.createView({
        height: "706px",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white",
        id: "addView"
    });
    $.__views.homeView.add($.__views.addView);
    $.__views.row1 = Ti.UI.createView({
        layout: "absolute",
        height: "236px",
        backgroundColor: "white",
        id: "row1"
    });
    $.__views.addView.add($.__views.row1);
    $.__views.addPhoto = Ti.UI.createImageView({
        top: "30px",
        left: "15%",
        height: "176px",
        width: "176px",
        image: "images/icon-photos.png",
        id: "addPhoto"
    });
    $.__views.row1.add($.__views.addPhoto);
    $.__views.addVideo = Ti.UI.createImageView({
        top: "30px",
        right: "15%",
        height: "176px",
        width: "176px",
        image: "images/icon-video.png",
        id: "addVideo"
    });
    $.__views.row1.add($.__views.addVideo);
    $.__views.row2 = Ti.UI.createView({
        layout: "absolute",
        height: "236px",
        backgroundColor: "white",
        id: "row2"
    });
    $.__views.addView.add($.__views.row2);
    $.__views.addText = Ti.UI.createImageView({
        top: "30px",
        left: "15%",
        height: "176px",
        width: "176px",
        image: "images/icon-text.png",
        id: "addText"
    });
    $.__views.row2.add($.__views.addText);
    $.__views.__alloyId34 = Ti.UI.createImageView({
        top: "30px",
        right: "15%",
        height: "176px",
        width: "176px",
        image: "images/icon-audio.png",
        id: "__alloyId34"
    });
    $.__views.row2.add($.__views.__alloyId34);
<<<<<<< HEAD
    $.__views.__alloyId35 = Ti.UI.createView({
        layout: "absolute",
=======
    $.__views.row3 = Ti.UI.createView({
        layout: "horizontal",
>>>>>>> FETCH_HEAD
        height: "236px",
        backgroundColor: "white",
        id: "__alloyId35"
    });
    $.__views.addView.add($.__views.__alloyId35);
    $.__views.myOurchiveBtn = Ti.UI.createImageView({
        left: "19%",
        top: "40px",
        height: "90px",
        width: "220px",
        id: "myOurchiveBtn",
        image: "images/icon-mystream.png"
    });
    $.__views.__alloyId35.add($.__views.myOurchiveBtn);
    myOurchive ? $.__views.myOurchiveBtn.addEventListener("click", myOurchive) : __defers["$.__views.myOurchiveBtn!click!myOurchive"] = true;
    $.__views.streamFollowers = Ti.UI.createLabel({
        right: "19%",
        top: "65px",
        color: "#333333",
        font: {
            fontFamily: "Helvetica",
            fontSize: "13dp",
            fontStyle: "italic",
            fontWeight: "normal"
        },
        text: "43 members",
        id: "streamFollowers"
    });
    $.__views.__alloyId35.add($.__views.streamFollowers);
    $.__views.bottomTable = Ti.UI.createView({
        layout: "vertical",
        bottom: "4px",
        width: "96%",
        backgroundColor: "#555555",
        id: "bottomTable"
    });
    $.__views.homeView.add($.__views.bottomTable);
    $.__views.tableHeader = Ti.UI.createView({
        layout: "absolute",
        width: "100%",
        height: "70px",
        id: "tableHeader"
    });
    $.__views.bottomTable.add($.__views.tableHeader);
    $.__views.titleNewEvent = Ti.UI.createLabel({
        left: "2%",
        color: "white",
        font: {
            fontFamily: "Helvetica",
            fontSize: "15dp",
            fontStyle: "italic",
            fontWeight: "normal"
        },
        text: "Events",
        id: "titleNewEvent"
    });
    $.__views.tableHeader.add($.__views.titleNewEvent);
    $.__views.newEvent = Ti.UI.createButton({
        right: "2%",
        color: "white",
        font: {
            fontFamily: "Helvetica",
            fontSize: "15dp",
            fontStyle: "italic",
            fontWeight: "normal"
        },
        title: "New +",
        id: "newEvent"
    });
    $.__views.tableHeader.add($.__views.newEvent);
    var __alloyId36 = [];
    $.__views.__alloyId37 = Ti.UI.createTableViewRow({
        layout: "absolute",
        width: "100%",
        height: "70px",
        top: "10px",
        backgroundColor: "#3C3C3C",
        id: "__alloyId37"
    });
    __alloyId36.push($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        left: "2%",
        color: "white",
        font: {
            fontFamily: "Helvetica",
            fontSize: "15dp",
            fontWeight: "normal"
        },
        text: "European Vacation",
        id: "__alloyId38"
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        right: "20%",
        color: "white",
        font: {
            fontFamily: "Helvetica",
            fontSize: "9dp",
            fontWeight: "normal"
        },
        text: "3d 5h",
        id: "__alloyId39"
    });
    $.__views.__alloyId37.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createButton({
        right: "2%",
        color: "white",
        font: {
            fontFamily: "Helvetica",
            fontSize: "15dp",
            fontWeight: "normal"
        },
        title: "Stop X",
        id: "__alloyId40"
    });
    $.__views.__alloyId37.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createTableViewRow({
        layout: "absolute",
        width: "100%",
        height: "70px",
        top: "10px",
        backgroundColor: "#3C3C3C",
        id: "__alloyId41"
    });
    __alloyId36.push($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createLabel({
        left: "2%",
        color: "white",
        font: {
            fontFamily: "Helvetica",
            fontSize: "15dp",
            fontWeight: "normal"
        },
        text: "Jeff's Wedding",
        id: "__alloyId42"
    });
    $.__views.__alloyId41.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        right: "20%",
        color: "white",
        font: {
            fontFamily: "Helvetica",
            fontSize: "9dp",
            fontWeight: "normal"
        },
        text: "3h 26m",
        id: "__alloyId43"
    });
    $.__views.__alloyId41.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createButton({
        right: "2%",
        color: "white",
        font: {
            fontFamily: "Helvetica",
            fontSize: "15dp",
            fontWeight: "normal"
        },
        title: "Start X",
        id: "__alloyId44"
    });
    $.__views.__alloyId41.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createTableViewRow({
        layout: "absolute",
        width: "100%",
        height: "70px",
        top: "10px",
        backgroundColor: "#3C3C3C",
        id: "__alloyId45"
    });
    __alloyId36.push($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createLabel({
        left: "2%",
        color: "white",
        font: {
            fontFamily: "Helvetica",
            fontSize: "15dp",
            fontWeight: "normal"
        },
        text: "Koles's Bar Mitzvah",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        right: "20%",
        color: "white",
        font: {
            fontFamily: "Helvetica",
            fontSize: "9dp",
            fontWeight: "normal"
        },
        text: "2h 16m",
        id: "__alloyId47"
    });
    $.__views.__alloyId45.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createButton({
        right: "2%",
        color: "white",
        font: {
            fontFamily: "Helvetica",
            fontSize: "15dp",
            fontWeight: "normal"
        },
        title: "Start X",
        id: "__alloyId48"
    });
    $.__views.__alloyId45.add($.__views.__alloyId48);
    $.__views.recentEvents = Ti.UI.createTableView({
        layout: "vertical",
        width: "100%",
        separatorColor: "#555555",
        data: __alloyId36,
        id: "recentEvents"
    });
    $.__views.bottomTable.add($.__views.recentEvents);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.myOurchiveBtn!click!myOurchive"] && $.__views.myOurchiveBtn.addEventListener("click", myOurchive);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;