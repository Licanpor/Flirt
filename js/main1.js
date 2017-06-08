$(document).ready(function(){
  var rowHeight = $('#features__mainRow').height();
  $('.features__graphicCol').height(rowHeight);

  // Init controller
  var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: $('.features--graphic-content').height(),
    triggerHook: .025,
    reverse: true
  }
  });


  /*
  object to hold href values of links inside our nav with
  the class '.anchor-nav'

  scene_object = {
  '[scene-name]' : {
    '[target-scene-id]' : '[anchor-href-value]'
  }
  }
  */
  var features__menu = {
    'item1': {
      'features__graphic__1': 'features__menu--item1',
    },
    'item2': {
      'features__graphic__2': 'features__menu--item2',
    },
    'item3': {
      'features__graphic__3': 'features__menu--item3',
    }
  }

  for(var key in features__menu) {
    // skip loop if the property is from prototype
    if (!features__menu.hasOwnProperty(key)) continue;

    var obj = features__menu[key];

    for (var prop in obj) {
      // skip loop if the property is from prototype
      if(!obj.hasOwnProperty(prop)) continue;

      new ScrollMagic.Scene({ triggerElement: '#' + prop })
          .setClassToggle('#' + obj[prop], 'feature__active')
          .addTo(controller);
    }
  }


  // Change behaviour of controller
  // to animate scroll instead of jump
  controller.scrollTo(function(target) {

    TweenMax.to(window, 0.5, {
      scrollTo : {
        y : $('#features'),
        autoKill : true // Allow scroll position to change outside itself
      },
      ease : Cubic.easeInOut
    });

  });


  //  Bind scroll to anchor links using Vanilla JavaScript
  var features__menu__container = document.querySelector('#features__menu__container');

  features__menu__container.addEventListener('click', function(e) {
    var target = e.target,
        id     = target.getAttribute('href');

    if(id !== null) {
      if(id.length > 0) {
        e.preventDefault();
        controller.scrollTo('#features');

        if(window.history && window.history.pushState) {
          history.pushState("", document.title, id);
        }
      }
    }
  });
})



/* 
 * Bind scroll to anchor links using jQuery

$(document).on("click", "a[href^=#]", function(e) {
  var id = $(this).attr("href");

  if($(id).length > 0) {
    e.preventDefault();

    // trigger scroll
    controller.scrollTo(id);

    // If supported by the browser we can also update the URL
    if (window.history && window.history.pushState) {
      history.pushState("", document.title, id);
    }
  }

});

*/