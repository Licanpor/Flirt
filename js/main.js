// console.log('\'Allo \'Allo!');

$(document).ready(function(){
	$('.features__graphicCol').height($(window).height());
	console.log($('.features__graphicCol').height());
	$('.onoffswitch-label').click(function(){
		$('#prod__packages').slideToggle(800);
		$('#serv__packages').slideToggle(800);
	});	

	$(".features__container--icon a").on("click", function() {
		$(".features__container--icon a").removeClass("features__active");
		$(this).toggleClass("features__active");
	});

	// ----- TweenMax Animations
	var benefits = $('#benefits');
	var divider1 = $('#divider1');
	var features = $('#features');
	var features__mainRow = $('#features__mainRow');
	var tl = new TimelineMax({});

	var allArrws = [$('#features__active1'), $('#features__active2'), $('#features__active3')];
	var tween = TweenMax.fromTo(allArrws, 0.9, {x: -8},	{x: 8, repeat: -1, yoyo:true, ease: Power1.easeIn});

	tl
		.play(tween)

		.to('#benefits__text', 0.2, {y:'-110%'})
		.fromTo('#benefits', 0.2,{position:'relative', zIndex: 0, opacity: 1}, { width: '100%',	position:'absolute', zIndex: -1, opacity: 0}, '-=0.15')	
		.fromTo('#features', 0.2, {position: 'absolute', top: 0, opacity: 0}, { position: 'relative',	opacity: 1, overflow: 'hidden'}, '-=0.1')

		.fromTo('#features__active1', 0.03, {css: {display:'none'}}, {css: {display:'inline-block'}}) 				
		.from('#features__graphic__1', 0.15, {y:'110%'}, '-=0.06')
		.to('#features__graphic__1', 0.12, {y:0}, '-=0.09')
		.to('#features__graphic__1', 0.18, {y:'-110%'}, '+=0.06')
		.to('#features__active1', 0.018, {display: 'none'}, '-=0.09')


	  .fromTo('#features__active2', 0.015, {css: {display:'none'}}, {css: {display: 'inline-block'}},'-=0.045')
	  .to('#features__graphic__2', 0.15, {y:'-100%'}, '-=0.09')
	  .to('#features__graphic__2', 0.18, {y:'-210%'}, '+=0.09')
	  .to('#features__active2', 0.018, {display: 'none'}, '-=0.09')


	  .fromTo('#features__active3', 0.03, {css: {display:'none'}}, {css: {display: 'inline-block'}},'-=0.03')
	  .to('#features__graphic__3', 0.15, {y:'-200%'}, '-=0.09')
		


	// ----- Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// ----- pin #pin__content
	var pinContent = new ScrollMagic.Scene({
		triggerElement: '#pin__content',
		triggerHook: 0,
		duration: $(window).height() * 7
	})
	.setPin('#pin__content').setTween(tl)
	.addIndicators({
		name: 'pin1',
		colorTrigger: 'pink',
		colorStart: 'aqua',
		colorEnd: 'orange'
	})
	.addTo(controller);
});