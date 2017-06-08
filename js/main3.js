$(document).ready(function(){
  var rowHeight = $('#features__mainRow').height();
  $('.features__graphicCol').height(rowHeight);
  $('.onoffswitch-label').click(function(){
    $('#prod__packages').slideToggle(800);
    $('#serv__packages').slideToggle(800);
  }); 


function active_click() {
			$("#features__menu--item1").bind('click', { id: '#features__graphic__1' }, scroller);
			$("#features__menu--item2").bind('click', { id: '#features__graphic__2' }, scroller);
			$("#features__menu--item3").bind('click', { id: '#features__graphic__3' }, scroller);
			
			function scroller(event){
				var scrollYPos = $(event.data.id).offset().top;
				event.preventDefault();
				TweenLite.to(window, 2, {scrollTo:{y:scrollYPos, x:0}, ease:Power4.easeOut})
			}
		}
		$(".features__container--icon a").click(function() {
			$(".features__container--icon a").removeClass("features__active");
			$(this).toggleClass("features__active");
		});	



$(function() {
    $("#click_home").bind('click', { id: '#home' }, scroller);
    $("#click_aboutme").bind('click', { id: '#about_me' }, scroller);
    $("#click_process").bind('click', { id: '#process' }, scroller);
    $("#click_cases").bind('click', { id: '#cases' }, scroller);
    $("#click_contact").bind('click', { id: '#contact' }, scroller);
    
    function scroller(event){
        var scrollYPos = $(event.data.id).offset().top;
        event.preventDefault();
        TweenLite.to(window, 2, {scrollTo:{y:scrollYPos, x:0}, ease:Power4.easeOut})
    }
});
$("ul#menu li a").click(function() {
    $("ul#menu li a").removeClass("active");
    $(this).toggleClass("active");
});