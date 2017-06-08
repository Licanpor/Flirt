$(document).ready(function(){
  var rowHeight = $('#features__mainRow').height();
  $('.features__graphicCol').height(rowHeight);
  $('.onoffswitch-label').click(function(){
    $('#prod__packages').slideToggle(800);
    $('#serv__packages').slideToggle(800);
  }); 

  $(function() {
  $("#features__menu--item1").bind('click', { id: '#features__graphic__1' }, scroller);
  $("#features__menu--item2").bind('click', { id: '#features__graphic__2' }, scroller);
  $("#features__menu--item3").bind('click', { id: '#features__graphic__3' }, scroller);
  
  function scroller(event){
    var scrollYPos = $('#features__mainRow').offset().top; //event.data.id
    event.preventDefault();
    TweenLite.to(window, 2, {scrollTo:{y:scrollYPos, x:0}, ease:Power4.easeOut})
    }
  });
  $(".features__container--icon a").click(function() {
    $(".features__container--icon a").removeClass("features__active");
    $(this).toggleClass("features__active");
  }); 
});


