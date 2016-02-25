var gridHeight = 420;
var gridWidth = 600;
var X, Y;
$(function() {
    $("body").mousemove(function(e) {
        X = e.pageX;
        Y = e.pageY
    });
});

var Controller = function() {
    this.init();
};

Controller.prototype.init = function() {
    this.full = [$('.full'), "full", "musique"];
    this.one = [$('.one'), "one", "navigation"];
    this.two = [$('.two'), "two", "phone"];
    this.three = [$('.three'), "three", "browser"];
    this.four = [$('.four'), "four", "phoneFavorite"];

    this.img = [];
    this.img["musique"] = {"full": "img/elmts/home_interfaces/musique_4x4.png", "half": "img/elmts/home_interfaces/musique_4x2.png"};
    this.img["phone"] = {"full": "img/elmts/home_interfaces/phone_4x4_calls.png", "half": "img/elmts/home_interfaces/phone_4x2_calls.png"};
    this.img["navigation"] = {"full": "img/elmts/home_interfaces/navigation_4x4.png", "half": "img/elmts/home_interfaces/navigation_4x2.png"};
    this.img["browser"] = {"full": "img/elmts/home_interfaces/browser_4x4_history.png", "half": "img/elmts/home_interfaces/browser_4x2_history.png"};
    this.img["phoneFavorite"] = {"full": "img/elmts/home_interfaces/phone_4x4_favorite.png", "half": "img/elmts/home_interfaces/browser_4x2_history.png"};

    this.makeDraggable();
};


Controller.prototype.getWhich = function() {
    if (Y <= gridHeight + 65) {
        if (X <= gridWidth) {
            return this.one;
        } else {
            return this.two;
        }
    } else if (Y >= (gridHeight*3) + 65) {
        if (X <= gridWidth) {
            return this.three;
        } else {
            return this.four;
        }
    } else if (Y >= gridHeight && Y <= (gridHeight*3) + 65) {
        return this.full;
    }
};

Controller.prototype.swap = function() {
    var fromContent = this.from[0].children();
    var toContent = this.to[0].children();
    this.from[0].empty();
    this.to[0].empty();
    this.from[0].append(toContent);
    this.to[0].append(fromContent);

    var tmp = this.from[2];
    this.from[2] = this.to[2];
    this.to[2] = tmp;

    TweenLite.set(this.from[0].children(), {clearProps:"transform"});
    TweenLite.set(this.to[0].children(), {clearProps:"transform"});
    this.makeDraggable();
};

Controller.prototype.makeDraggable = function() {
    $(".draggable").each(function(i, element) {
        Draggable.create(this, {
            trigger: $(this).find(".moveButton"),
            type: "x,y",
            edgeResistance: 0.35,
            onDragStart: function () {
                con.from = con.getWhich();
                TweenLite.set(con.from[0], {css:{zIndex:1110}});
            },
            onDragEnd: function () {
                TweenLite.set(con.from[0], {css:{zIndex:1000}});
                con.to = con.getWhich();

                if (con.from[1] == "full") {
                    con.from[0].find(".img").attr("src", con.img[con.to[2]].half);
                    con.to[0].find(".img").attr("src", con.img[con.from[2]].full);
                } else if (con.to[1] == "full") {
                    con.from[0].find(".img").attr("src", con.img[con.to[2]].full);
                    con.to[0].find(".img").attr("src", con.img[con.from[2]].half);
                }

                con.swap();
            }
        })
    });
};

var con = new Controller();