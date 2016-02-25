$(function(){
   
    function getSpotify(){
        $.ajax("https://api.spotify.com/v1/tracks/08mG3Y1vljYA6bvDt4Wqkj")
            .done(function( data ) {
                var song = data;
                console.log(song);
            });
    }
    
    
    
    $('.music4x2').on('click', function(){
        // getSpotify();
        var player = $('#player')[0]
          if (player.paused == false) {
              player.pause();
          } else {
              player.play();
          }
    });
    
});