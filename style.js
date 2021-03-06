$(".goo").on("click" , function randomResult() {
    var images = ['img/goo.jpg', 'img/choki.jpg', 'img/paa.jpg'];
        

    var randImg = images[Math.floor( Math.random() * images.length)];
    $('.aitejpg').attr('src', randImg);

　　　});

$(".choki").on("click" , function randomResult() {
    var images = ['img/goo.jpg', 'img/choki.jpg', 'img/paa.jpg'];
        

    var randImg = images[Math.floor( Math.random() * images.length)];
    $('.aitejpg').attr('src', randImg);
    

　　　});

 $(".paa").on("click" , function randomResult(){
    var images = ['img/goo.jpg', 'img/choki.jpg', 'img/paa.jpg'];
        

    var randImg = images[Math.floor( Math.random() * images.length)];
    $('.aitejpg').attr('src', randImg);

     
   
     

　　});