var EventListtener = require("./EventList");
// var global = require("./globle");
cc.Class({
    extends: cc.Component,

    properties: {

        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        global.listener=EventListtener({});
        global.listener.on("asdasd",function () {
           console.log("1111111111");
        });
    },
    Click:function () {
        global.listener.fire("asdasd");
    },
    // called every frame
    // update: function (dt) {
    //
    // },
});
