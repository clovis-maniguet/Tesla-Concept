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


/* Animation of boxes */
TweenMax.fromTo('.box1', 20, {left: "-80px", repeat:-1, ease:Linear.easeNone}, {left: "100%", repeat:-1, ease:Linear.easeNone});
TweenMax.fromTo('.box2', 15, {left: "-40px", repeat:-1, ease:Linear.easeNone}, {left: "100%", repeat:-1, ease:Linear.easeNone});
TweenMax.fromTo('.box3', 25, {left: "-40px", repeat:-1, ease:Linear.easeNone}, {left: "100%", repeat:-1, ease:Linear.easeNone});

TweenMax.fromTo('.circleMicBottombar1', 60, {rotation:"0", repeat:-1, ease:Linear.easeNone}, {rotation:"360", repeat:-1, ease:Linear.easeNone});
TweenMax.fromTo('.circleMicBottombar2', 30, {rotation:"0", repeat:-1, ease:Linear.easeNone}, {rotation:"360", repeat:-1, ease:Linear.easeNone});
TweenMax.fromTo('.circleMicBottombar3', 45, {rotation:"0", repeat:-1, ease:Linear.easeNone}, {rotation:"360", repeat:-1, ease:Linear.easeNone});
TweenMax.fromTo('.circleMicBottombar4', 50, {rotation:"0", repeat:-1, ease:Linear.easeNone}, {rotation:"360", repeat:-1, ease:Linear.easeNone});

TweenMax.fromTo('.MoveButtonCircle1', 30, {rotation:"0", repeat:-1, ease:Linear.easeNone}, {rotation:"360", repeat:-1, ease:Linear.easeNone});
TweenMax.fromTo('.MoveButtonCircle2', 20, {rotation:"0", repeat:-1, ease:Linear.easeNone}, {rotation:"360", repeat:-1, ease:Linear.easeNone});
TweenMax.fromTo('.MoveButtonCircle3', 15, {rotation:"0", repeat:-1, ease:Linear.easeNone}, {rotation:"-360", repeat:-1, ease:Linear.easeNone});
TweenMax.fromTo('.MoveButtonCircle4', 40, {rotation:"0", repeat:-1, ease:Linear.easeNone}, {rotation:"360", repeat:-1, ease:Linear.easeNone});