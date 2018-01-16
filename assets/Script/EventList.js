const EventListtener=function (obj) {
    let Register = {};
    obj.on=function (name,mouth) {
        if(!Register.hasOwnProperty(name))
        {
            Register[name]=[];
        }
        Register[name].push(mouth);
    };
    obj.fire=function (name) {
        console.log("fire " + name);
        if (Register.hasOwnProperty(name)) {
            var handlist = Register[name];
            for (var i = 0; i < handlist.length; i++) {
                var hand = handlist[i];
                var args = [];
                for (var j = 1; j < arguments.length; j++) {
                    args.push(arguments[j]);
                }
                hand.apply(this, args);
            }
        }
    };
    obj.off=function (name,mouth) {
        if (Register.hasOwnProperty(name)){
            var handlerList = Register[name];
            for (var i = 0 ; i < handlerList.length ; i ++){
                if (handlerList[i] === method){
                    handlerList.splice(i , 1);
                }
            }
        }
    };
    obj.destroy = function () {
        Register = {};
    };
    return obj;
};
module.exports = EventListtener;