/*JQuery Way of Hide and Show in FAQ section*/
$(document).ready(function()
{
    $(".answer").hide();
    $(".faq h5").click(function(){
        var $answer=$(this).next(".answer");
        if($answer.is(":hidden"))
        {
             $answer.fadeIn();
             $(this).addClass("close");
        }
        else
        {
         $(this).next(".answer").fadeOut();
         $(this).removeClass("close");
        }
        });//FAQs toggle ends here
 });//ready ends here
 

  /* DOM method of Hide and Show in FAQ Section 
  window.onload = function(){

// Show an element
  var show = function (elem) {
	elem.classList.add('isVisible');
};

// Hide an element
var hide = function (elem) {
	elem.classList.remove('isVisible');
};

// Toggle element visibility
var toggle = function (elem) {
	elem.classList.toggle('isVisible');
};

// Listen for click events
document.addEventListener('click', function (myEvent) {
  // Make sure clicked element is our toggle
//	if (!event.target.classList.contains('question')) return;

	// Prevent default link behavior
	  myEvent.preventDefault();

	// Get the content
  console.log(myEvent.target);

	var content = myEvent.target.classList.add("toggle");
  //  console.log(content);
	//if (!content) return;

	// Toggle the content
	

}, false);

}
///////////////////////////////
/*FadeIn Function*/
function fadeIn(el) {
    var opacity = 0;
  
    el.style.opacity = 0;
    el.style.filter = '';
  
    var last = +new Date();
    var tick = function() {
      opacity += (new Date() - last) / 400;
      el.style.opacity = opacity;
      el.style.filter = 'alpha(opacity=' + (100 * opacity)|0 + ')';
  
      last = +new Date();
  
      if (opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
  }
  
  /*Fade Out function*/ 
  function fadeOut(el) {
    var opacity = 1;
  
    el.style.opacity = 1;
    el.style.filter = '';
  
    var last = +new Date();
    var tick = function() {
      opacity -= (new Date() - last) / 400;
      el.style.opacity = opacity;
      el.style.filter = 'alpha(opacity=' + (100 * opacity)|1 + ')';
  
      last = +new Date();
  
      if (opacity > 0) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
  }
