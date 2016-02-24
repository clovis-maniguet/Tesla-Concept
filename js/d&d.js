var gridHeight = 400;
var gridWidth = 600;
var X, Y;
$(function() {
    $("body").mousemove(function(e) {
        X = e.pageX;
        Y = e.pageY
    });
});


Draggable.create(".draggable", {
    bounds: '.body',
    type:"x,y",
    edgeResistance:0.35,
    revert:true,
    onDragStart: function() {
        con.from = con.getWhich();
    },
    onDragEnd:function() {
        con.to = con.getWhich();
        con.swap();
    }
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
    if (Y < gridHeight) {
        if (X < gridWidth) {
            return this.one;
        } else {
            return this.two;
        }
    } else if (Y > (gridHeight*3) ) {
        if (X < gridWidth) {
            return this.three;
        } else {
            return this.four;
        }
    } else if (Y > gridHeight && Y < (gridHeight*3) ) {
        return this.full;
    }
};

Controller.prototype.swap = function() {
    var fromContent = this.from.children();
    var toContent = this.to.children();
    this.from.empty();
    this.to.empty();
    this.from.append(toContent);
    this.to.append(fromContent);
    TweenLite.set(this.to.children(), {clearProps:"transform"});
};

Controller.prototype.makeDraggable = function() {
    Draggable.create(".draggable", {
        bounds:window,
        type:"x,y",

        onDragStart: function() {
            con.from = con.getWhich();
        },
        onDragEnd:function() {
            con.to = con.getWhich();
            con.swap();
        }
    });
};

var con = new Controller();