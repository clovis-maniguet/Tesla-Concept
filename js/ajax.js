$(function(){
   
    function getSpotify(){
        $.ajax("https://api.spotify.com/v1/tracks/08mG3Y1vljYA6bvDt4Wqkj")
            .done(function( data ) {
                var song = data;
                console.log(song);
            });
    }
    
    
    
    $('html').on('click', '.music4x2', function(){
        // getSpotify();
        var player = $('#player')[0]
          if (player.paused == false) {
              logo = $(this).find(':last-child')[0];
              $(logo).attr('src', 'img/elmts/music/play.png');
              player.pause();
              
          } else {
              logo = $(this).find(':last-child')[0];
              $(logo).attr('src', 'img/elmts/music/pause.png');
              player.play();
          }
    });
    
});