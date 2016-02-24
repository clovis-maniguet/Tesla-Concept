var gridHeight = 400;
var gridWidth = 600;
var X, Y;
$(function() {
    $("body").mousemove(function(e) {
        X = e.pageX;
        Y = e.pageY
    });
});


$(".draggable").each(function(i, element) {
    Draggable.create(this, {
        trigger: $(this).find(".moveButton"),
        type: "x,y",
        edgeResistance: 0.35,
        onDragStart: function () {
            con.from = con.getWhich();
        },
        onDragEnd: function () {
            con.to = con.getWhich();
            con.swap();
        }
    })
});

var Controller = function() {
    this.init();
};

Controller.prototype.init = function() {
    this.full = $('.full');
    this.one = $('.one');
    this.two = $('.two');
    this.three = $('.three');
    this.four = $('.four');
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
    var fromContent = this.from.children();
    var toContent = this.to.children();
    console.log(this.from);
    this.from.empty();
    this.to.empty();
    this.from.append(toContent);
    this.to.append(fromContent);
    TweenLite.set(this.from.children(), {clearProps:"transform"});
    TweenLite.set(this.to.children(), {clearProps:"transform"});
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
            },
            onDragEnd: function () {
                con.to = con.getWhich();
                con.swap();
            }
        })
    });
};

var con = new Controller();