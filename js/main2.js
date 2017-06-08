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
	var tl = new TimelineMax();
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
	.fromTo('#benefits', 0.1, 
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
	.from('#features__mainRow', 0.1, 
		{css: {
			y: '80%'
		}
	})
	.call(menu_active, this, "+=0.5");

	function menu_active() {
		var tl__active = new TimelineMax();

		tl__active.call(active_click);

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

		new ScrollMagic.Scene({
			triggerElement: '#features__mainRow',
			triggerHook: 0,
			duration: $(window).height() * 3
		})
		.setPin('#features__mainRow').setTween(tl__active).addTo(controller);
	}
	

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


