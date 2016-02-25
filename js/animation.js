// Click

$('.bottombar').on('click', '.control', function(e){
    TweenMax.from('.controlsCar', 0, {top: "-1920px", display: "block", opacity:"0", ease:Linear.easeNone});
    TweenMax.to('.controlsCar', 0.6, {top: "0px", display: "block", opacity:"1"});
});

$('body').on('click', '.crossClose', function(e){
    TweenMax.from('.controlsCar', 0, {top: "0px", display: "block", opacity:"1"});
    TweenMax.to('.controlsCar', 0.6, {top: "-1920px", display: "none", opacity:"0", ease:Linear.easeNone});
});

$('body').on('click', '.micBottombar', function(e){
    TweenMax.from('.globalMic', 0, {top: "-1920px", display: "block", opacity:"0", ease:Linear.easeNone});
    TweenMax.to('.globalMic', 0.6, {top: "0px", display: "block", opacity:"1"});
});

$('body').on('click', '.crossCloseMic', function(e){
    TweenMax.from('.globalMic', 0, {top: "0px", display: "block", opacity:"1"});
    TweenMax.to('.globalMic', 0.6, {top: "-1920px", display: "none", opacity:"0", ease:Linear.easeNone});
});

var time;

 $(window).on('keydown', function(e){
    if(e.keyCode == 38){
        $('.volume').fadeIn();
        clearTimeout(time);
        time = setTimeout(function(){ hideVolume(); }, 2000);
    }else if(e.keyCode == 40){
        $('.volume').fadeIn();
        clearTimeout(time);
        setTimeout(function(){ hideVolume(); }, 2000);
    }   
});

function hideVolume(){
    console.log('ok');
    $('.volume').fadeOut();
}


/* Animation of boxes */
TweenMax.fromTo('.box1', 20, {left: "-80px", repeat:-1, ease:Linear.easeNone}, {left: "110%", repeat:-1, ease:Linear.easeNone});
TweenMax.fromTo('.box2', 15, {left: "-40px", repeat:-1, ease:Linear.easeNone}, {left: "110%", repeat:-1, ease:Linear.easeNone});
TweenMax.fromTo('.box3', 25, {left: "-40px", repeat:-1, ease:Linear.easeNone}, {left: "110%", repeat:-1, ease:Linear.easeNone});

TweenMax.fromTo('.box1V', 40, {bottom: "-40px", repeat:-1, ease:Linear.easeNone}, {bottom: "110%", repeat:-1, ease:Linear.easeNone});

TweenMax.fromTo('.circleMicBottombar1', 60, {rotation:"0", repeat:-1, ease:Linear.easeNone}, {rotation:"360", repeat:-1, ease:Linear.easeNone});
TweenMax.fromTo('.circleMicBottombar2', 30, {rotation:"0", repeat:-1, ease:Linear.easeNone}, {rotation:"360", repeat:-1, ease:Linear.easeNone});
TweenMax.fromTo('.circleMicBottombar3', 45, {rotation:"0", repeat:-1, ease:Linear.easeNone}, {rotation:"360", repeat:-1, ease:Linear.easeNone});
TweenMax.fromTo('.circleMicBottombar4', 50, {rotation:"0", repeat:-1, ease:Linear.easeNone}, {rotation:"360", repeat:-1, ease:Linear.easeNone});

TweenMax.fromTo('.MoveButtonCircle1', 30, {rotation:"0", repeat:-1, ease:Linear.easeNone}, {rotation:"360", repeat:-1, ease:Linear.easeNone});
TweenMax.fromTo('.MoveButtonCircle2', 20, {rotation:"0", repeat:-1, ease:Linear.easeNone}, {rotation:"360", repeat:-1, ease:Linear.easeNone});
TweenMax.fromTo('.MoveButtonCircle3', 15, {rotation:"0", repeat:-1, ease:Linear.easeNone}, {rotation:"-360", repeat:-1, ease:Linear.easeNone});
TweenMax.fromTo('.MoveButtonCircle4', 40, {rotation:"0", repeat:-1, ease:Linear.easeNone}, {rotation:"360", repeat:-1, ease:Linear.easeNone});