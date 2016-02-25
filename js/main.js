$(function(){
   
    var power = 0;
    
    $('.light1').on('click', function(e){
        var img = this.getAttribute('data-img');
        $('.light1').html('');
        $(this).html('<img src="img/elmts/car_interfaces/icones/' + img + '" draggable="false">');
    });
    
    $('.light2').on('click', function(e){
        var img = this.getAttribute('data-img');
        $('.light2').html('');
        $(this).html('<img src="img/elmts/car_interfaces/icones/' + img + '" draggable="false">');
    });
    
    $('.power').on('click', function(){
        if(power == 0 ){
            power = 1;
           $('.power').html('').html('<img src="img/elmts/car_interfaces/icones/power_on.png" data-img="power_on.png" draggable="false">');
       }else{
            power = 0;
            $('.power').html('').html('<img src="img/elmts/car_interfaces/icones/power_off.png" data-img="power_off.png" draggable="false">');
       }
    })

    
    $('.controlSettings > div').on('click', function(){
        var img = this.getAttribute('data-img');
        $('.controlSettings > div').html('');
        $(this).html('<img src="img/elmts/car_interfaces/icones/' + img + '" draggable="false">');
    })
    
    $('.lockedCar').on('click', function(){
        if($(this).html() == ''){
            var img = this.getAttribute('data-img');
            $(this).html('<img src="img/elmts/car_interfaces/icones/' + img + '" draggable="false">');
        }else{
            $(this).html('');
        }
    })
    
});