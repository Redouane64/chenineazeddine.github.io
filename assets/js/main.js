/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var settings = {

		// Parallax background effect?
			parallax: true,

		// Parallax factor (lower = more intense, higher = less intense).
			parallaxFactor: 20

	};

	skel.breakpoints({
		xlarge: '(max-width: 1800px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var $window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$footer = $('#footer'),
			$main = $('#main'),
			$programingSkillsContainer = $("#p_skills"),
			$technicalSkillsContainer = $("#t_skills"),
			$p_skills = [
				{
					"name":"Android",
					"rating": 85,
				},
				{
					"name":"Java",
					"rating": 75,
				},
				{
					"name":"NodeJS",
					"rating": 75,
				},
				{
					"name":"ReactJS",
					"rating": 80,
				},
				{
					"name":"HTML/CSS",
					"rating": 90,
				},
				{
					"name":"jQuerry",
					"rating": 88,
				},
				{
					"name":"Python",
					"rating": 65,
				},
				{
					"name":"C",
					"rating": 65,
				},
				{
					"name":"Firebase",
					"rating": 75,
				},
				{
					"name":"MongoDB",
					"rating": 65,
				},
				{
					"name":"SQL Lite",
					"rating": 65,
				}
			]
			$t_skills = ["Algorithms and data structers",
						 "Linux command line",
						 "Git and Version Control",
						 "Network",
						 "UML",
						 "Linear Algebra and probability"];
	
			$p_skills = $p_skills.map(obj =>{
				return '<div class="p_skill_container"><strong>'+obj.name+'</strong><div class="p_skill_rate_container"><div class="p_skill_rate" style="width:'+obj.rating+'%"></div></div></div>';
			})

			$p_skills.forEach(element => {
				$programingSkillsContainer.append(element);
			});

			$t_skills = $t_skills.map(obj =>{
				return '<li>•&nbsp;&nbsp;'+obj+' </li>';
			})

			$t_skills.forEach(element => {
				$technicalSkillsContainer.append(element);
				
			});

			/*************************/
		
		
		  
		
		  
			var slideItem = $('.slide'),
				dotItem = $('.dot');
			slideCurrentItem = slideItem.filter('.active');
			dotCurrentItem  = dotItem.filter('.active');
		  
			$('#next').on('click', function(e) {
			  e.preventDefault();
		  
			  var nextItem = slideCurrentItem.next();
			  var nextDot  = dotCurrentItem.next();

			  dotCurrentItem.removeClass('active');
			  slideCurrentItem.removeClass('active');
		  
			  if (nextItem.length) {	  
				slideCurrentItem = nextItem.addClass('active');
				dotCurrentItem   = nextDot.addClass('active');
			  } else {
				slideCurrentItem = slideItem.first().addClass('active');
				dotCurrentItem   = dotItem.first().addClass('active');
			  }

			});
		  
			$('#prev').on('click', function(e) {
			  e.preventDefault();
		  
			  var prevItem = slideCurrentItem.prev();
			  var prevDot  = dotCurrentItem.prev();

		  
			  slideCurrentItem.removeClass('active');
			  dotCurrentItem.removeClass('active');
			 
			 
			  if (prevItem.length) {
				slideCurrentItem = prevItem.addClass('active');
				dotCurrentItem   = prevDot.addClass('active');
			  } else {
				slideCurrentItem = slideItem.last().addClass('active');
				dotCurrentItem   = dotItem.last().addClass('active');
			  }
			  
			
		  
			});
			$('.dot').on('click',function(e){
				e.preventDefault();
				
				dotCurrentItem.removeClass('active');

				var nextItem = $('.slide[slide-id='+($(this).index()+1)+"]");
				
				slideCurrentItem.removeClass('active');		  
				slideCurrentItem = nextItem.addClass('active');

				dotCurrentItem = $(this).addClass('active');
			
			
			})
		
			
		  
		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Touch?
			if (skel.vars.mobile) {

				// Turn on touch mode.
					$body.addClass('is-touch');

				// Height fix (mostly for iOS).
					window.setTimeout(function() {
						$window.scrollTop($window.scrollTop() + 1);
					}, 0);

			}

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Footer.
			skel.on('+medium', function() {
				$footer.insertAfter($main);
			});

			skel.on('-medium !medium', function() {
				$footer.appendTo($header);
			});

		// Header.

			// Parallax background.

				// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
					if (skel.vars.browser == 'ie'
					||	skel.vars.mobile)
						settings.parallax = false;

				if (settings.parallax) {

					skel.on('change', function() {

						if (skel.breakpoint('medium').active) {

							$window.off('scroll.strata_parallax');
							$header.css('background-position', 'top left, center center');

						}
						else {

							$header.css('background-position', 'left 0px');

							$window.on('scroll.strata_parallax', function() {
								$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
							});

						}

					});

					$window.on('load', function() {
						$window.triggerHandler('scroll');
					});

				}

		// Main Sections: Two.

			// Lightbox gallery.
				$window.on('load', function() {

					$('#two').poptrox({
						caption: function($a) { return $a.next('h3').text(); },
						overlayColor: '#2c2c2c',
						overlayOpacity: 0.85,
						popupCloserText: '',
						popupLoaderText: '',
						selector: '.work-item a.image',
						usePopupCaption: true,
						usePopupDefaultStyling: false,
						usePopupEasyClose: false,
						usePopupNav: true,
						windowMargin: (skel.breakpoint('small').active ? 0 : 50)
					});

				});

	});

})(jQuery);