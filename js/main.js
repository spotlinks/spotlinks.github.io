var ajax_form = true;

$( document ).ready(function() { // Document ready

/*-----------------------------------------------------------------------------------*/
/*	01. PARALLAX SETTING
/*-----------------------------------------------------------------------------------*/


  $(document).ready(function(){
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#header').parallax("center", 0.5, false);

})


/*-----------------------------------------------------------------------------------*/
/*	03. FADE IN EFFECTS
/*-----------------------------------------------------------------------------------*/


		$('.fade1').delay(400).fadeIn(2000);

		$('.fade2').delay(700).fadeIn(1500);

		$('.fade3').delay(1000).fadeIn(1500);



/*-----------------------------------------------------------------------------------*/
/*	04. Get the CBPSCROLLER
/*-----------------------------------------------------------------------------------*/


			new cbpScroller( document.getElementById( 'cbp-so-scroller' ) );


/*-----------------------------------------------------------------------------------*/
/*	05. SMOOTH SCROLLING ON BUTTON
/*-----------------------------------------------------------------------------------*/


$('.button').click(function(e){
    $('html,body').scrollTo(this.hash,this.hash);
    e.preventDefault();
});


/*-----------------------------------------------------------------------------------*/
/*	08. RESPONSIVE MENU
/*-----------------------------------------------------------------------------------*/

		jQuery("#collapse").hide();
		jQuery("#collapse-menu").on("click", function () {

		    jQuery("#collapse").slideToggle(300);
		    return false;

		}, function () {

		    jQuery("#collapse").slideToggle(300);
		    return false;
		});

});
