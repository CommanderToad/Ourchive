function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "ds.slideMenu/" + s : s.substring(0, index) + "/ds.slideMenu/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0009,
    key: "Label",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000"
    }
}, {
    isClass: true,
    priority: 10000.0014,
    key: "Btn",
    style: {
        height: "7%",
        width: "90%",
        backgroundColor: "#424242",
        top: "1%"
    }
}, {
    isClass: true,
    priority: 10000.0015,
    key: "menuText",
    style: {
        left: "3%",
        color: "white",
        font: {
            fontFamily: "Helvetica",
            fontSize: "14dp",
            fontWeight: "normal"
        }
    }
}, {
    isId: true,
    priority: 100000.0002,
    key: "containerview",
    style: {}
}, {
    isId: true,
    priority: 100000.0003,
    key: "leftMenu",
    style: {
        layout: "vertical",
        top: 0,
        left: 0,
        width: 270,
        zIndex: "2",
        backgroundColor: "#FFF"
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "navview",
    style: {
        top: 0,
        left: 0,
        right: 0,
        width: 320,
        height: "135px",
        backgroundColor: "#BDBDBD"
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "movableview",
    style: {
        top: 0,
        left: 0,
        right: 0,
        width: 320,
        zIndex: "3"
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "contentview",
    style: {
        top: "135px",
        right: 0,
        width: 320,
        height: Ti.UI.Fill,
        backgroundColor: "white"
    }
}, {
    isId: true,
    priority: 100000.0007,
    key: "shadowview",
    style: {
        backgroundColor: "white"
    }
}, {
    isId: true,
    priority: 100000.0008,
    key: "leftButton",
    style: {
        backgroundImage: "none",
        image: "/ds.slideMenu/ButtonMenu.png",
        left: 0,
        top: "40px",
        width: 44,
        height: 44,
        style: "none"
    }
}, {
    isId: true,
    priority: 100000.001,
    key: "title",
    style: {
        left: "160px",
        top: "60px",
        font: {
            fontFamily: "Helvetica",
            fontSize: "25dp",
            fontStyle: "italic",
            fontWeight: "normal"
        }
    }
}, {
    isId: true,
    priority: 100000.0011,
    key: "menuView",
    style: {
        layout: "vertical",
        backgroundColor: "gray"
    }
}, {
    isId: true,
    priority: 100000.0012,
    key: "menuTitle",
    style: {
        top: "60px"
    }
}, {
    isId: true,
    priority: 100000.0013,
    key: "titleView",
    style: {
        layout: "horizontal",
        height: "135px",
        width: "90%",
        left: "20px"
    }
} ];