// console.log('\'Allo \'Allo!');

$(document).ready(function(){
	var rowHeight = $('#features__mainRow').height();
	$('.features__graphicCol').height(rowHeight);
	$('.onoffswitch-label').click(function(){
		$('#prod__packages').slideToggle(800);
		$('#serv__packages').slideToggle(800);
	});	


	// ----- TweenMax Animations
	var benefits = $('#benefits');
	var divider1 = $('#divider1');
	var features = $('#features');
	var features__mainRow = $('#features__mainRow');
	var tl = new TimelineMax({});
	// var tl_featuresMenu = new TimelineMAx();


	TweenMax.set('#features', {
		position: 'absolute',
		top: 0,	
		opacity: 0
	});
	TweenMax.set('#features__mainRow', {	
		opacity: 1
	});

	tl
		.to('#benefits__text', 0.2, {
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
		}, '-=0.2')	
		.to('#features', 0, {
			position: 'relative',
			opacity: 1,
			overflow: 'hidden'
		})
		.from('#features__mainRow', 0.2, 
			{css: {
				y: '120%'
			}});

	// ----- Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// ----- pin #pin__content
	var pinContent = new ScrollMagic.Scene({
		triggerElement: '#pin__content',
		triggerHook: 0,
		duration: $(window).height() * 6
	})
	.setPin('#pin__content').setTween(tl)
	.addIndicators({
		name: '_',
		colorTrigger: 'transparent',
		colorStart: 'transparent',
		colorEnd: 'transparent'
	})
	.addTo(controller);


	


});


