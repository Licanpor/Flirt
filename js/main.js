// console.log('\'Allo \'Allo!');

$(document).ready(function(){
	var colHeight = $('#features__menu__container').height();
	$('.features__graphicCol').height(colHeight);
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
	// var tl_featuresMenu = new TimelineMAx();

	// TweenMax.set('#features__mainRow', {	
	// 	opacity: 1
	// });

	tl
		.to('#benefits__text', 0.4, {
			y:'-110%'
		})
		.fromTo('#benefits', 0.2, 
			{css: {
				position:'relative',
				zIndex: 0,
				opacity: 1
			}}, 
			{css: {
				width: '100%',
				position:'absolute',
				zIndex: -1,
				opacity: 0}
		}, '-=0.3')	
		.fromTo('#features', 0.2, 
			{css:{
				position: 'absolute',
				top: 0,	
				opacity: 0
			}},
			{css:{
			position: 'relative',
			opacity: 1,
			overflow: 'hidden'
		}}, '-=0.2')
		.fromTo('#features__active1', 0.2, {css: {display:'inline-block'}}, {css: {display: 'none'}})		
		.to('#features__graphic__1', 0.2, {y:'-50%'}, '-=0.2')

	  .fromTo('#features__active2', 0.2, {css: {display:'none'}}, {css: {display: 'inline-block'}})
	  .to('#features__graphic__2', 0.2, {y:'-50%'}, '-=0.2')

	  .to('#features__active2', 0.2, {display: 'none'})

	  .fromTo('#features__active3', 0.2, {css: {display:'none'}}, {css: {display: 'inline-block'}})
	  .to('#features__graphic__3', 0.2, {y:'-50%'}, '-=0.2')
		
	// ----- Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// ----- pin #pin__content
	var pinContent = new ScrollMagic.Scene({
		triggerElement: '#pin__content',
		triggerHook: 0,
		duration: $(window).height() * 10
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


