$(function(){
   
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
        var img = this.getAttribute('data-img');
        $('.power').html('');
        $(this).html('<img src="img/elmts/car_interfaces/icones/' + img + '" draggable="false">');
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