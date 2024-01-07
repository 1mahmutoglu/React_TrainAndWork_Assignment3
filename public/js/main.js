(function ($) {
 "use strict";
	
	
    /*----------------------------
        wow js active
    ------------------------------ */
        new WOW().init();
   
    
    /*----------------------------
     jQuery MeanMenu
    ------------------------------ */
        jQuery('nav#dropdown').meanmenu();	   

    /*---------------------

    /*--------------------------
     scrollUp active
    ---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        scrollSpeed: 900,
        animation: 'fade'
    }); 
    

     /*--------------------------
     Nivo slider home
    ---------------------------- */	
      $('#mainSlider').nivoSlider({
        directionNav: true,
        animSpeed: 2000,
        slices: 18,
        pauseTime: 9995000,
        pauseOnHover: false,
        controlNav: false,
        prevText: '<i class="fa fa-chevron-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-chevron-right nivo-next-icon"></i>'
    });

      $('#mainSlider3').nivoSlider({
        directionNav: false,
        animSpeed: 5000,
        slices: 18,
        pauseTime: 95000,
        pauseOnHover: false,
        controlNav: true,
    });
  
    /* $(document).ready(function(){
        $('[data-bs-toggle="tooltip"]').tooltip();   
    }); */

    //Go to top
            jQuery('#back-top').on('click', function(){
                jQuery("html, body").animate({ scrollTop: 0 }, "slow");
            });


     jQuery(document).ready(function(){
                jQuery('.countbox.hastime').each(function(){
                var countTime = jQuery(this).attr('data-time');

                jQuery(this).countdown(countTime, function(event) {
                    jQuery(this).html(
                        '<span class="timebox day"><strong>'+event.strftime('%D')+'</strong>days</span><span class="timebox hour"><strong>'+event.strftime('%H')+'</strong>hrs</span><span class="timebox minute"><strong>'+event.strftime('%M')+'</strong>mins</span><span class="timebox second"><strong>'+event.strftime('%S')+'</strong>secs</span>'
                    );
                });
                //jQuery(this).countdown('stop');
            });
          });   
      $(document).ready(function(){
          $('.countdown-home .shop-products').slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1000,
                easing: 'linear',
                swipeToSlide: true,
                autoplaySpeed: false
            });
      }) ;
    
    //Latest posts carousel - home
		
		jQuery('.custom-blog .posts-carousel').slick({
			arrows: false,
			dots: true,
			infinite: false,
			slidesToShow: 2,
			slidesToScroll:2,
			speed: 5000,
			easing: 'linear',
			autoplay: false,
			autoplaySpeed: false,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 992,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 767,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}

			]
		});
		
		//Testimonials carousel
		
		jQuery('.testimonials-list').slick({
			arrows: false,
			dots: true,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplaySpeed: false
		});
		
    //Products carousel layout 2
		
		jQuery('.products-carousel .shop-products').slick({
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			speed: 500,
			easing: 'linear',
			swipeToSlide: true,
			autoplaySpeed: 1000,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 992,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 767,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			]
		});
    
    // Shop toolbar sort
		jQuery('.toolbar .orderby').chosen({disable_search: true, width: "auto"});
    /*----------------------------
        Price-slider active
    ------------------------------ */  
       $( ".price-slider" ).slider({
      range: true,
      min: 45,
      max: 515,
      values: [ 95, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "£" + ui.values[ 0 ] + " — £" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "£" + $( ".price-slider" ).slider( "values", 0 ) +
      " — £" + $( ".price-slider" ).slider( "values", 1 ) )
	   
    
    
    /* ----------------------------
        payment-accordion
    * ----------------------------*/ 
	/* $(".payment-accordion").collapse({
		accordion:true,
	  open: function() {
		this.slideDown(550);
	  },
	  close: function() {
		this.slideUp(550);
	  }	
        
	});  */ 
    /*---------------------------------
        contact form toggle function
    -----------------------------------*/
	 $( '#contactbtn' ).on('click', function() {
        $( '#submit-form' ).slideToggle(900);
     });
    /*---------------------------------
        showlogin toggle function
    -----------------------------------*/
	 $( '#showlogin' ).on('click', function() {
        $( '#checkout-login' ).slideToggle(900);
     });     
    /*----------------------------------
        showcoupon toggle function
    ------------------------------------*/
	 $( '#showcoupon' ).on('click', function() {
        $( '#checkout_coupon' ).slideToggle(900);
     });
    
    //Product images on details page
		jQuery('.single-images').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			fade: true,
			asNavFor: '.single-thumbnails'
		});
		jQuery('.single-thumbnails').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.single-images',
			arrows: false,
			dots: true,
			centerMode: true,
			focusOnSelect: true,
			infinite: true
		});
		    
    /*thumbnails carousel*/
        jQuery('.quick-thumbnails')
        jQuery('.quick-thumbnails').slick({
            slidesToScroll: 1,
            slidesToShow: 4,
            dots: false,
           nextArrow: '<i class="fa fa-chevron-right"></i>',
          prevArrow: '<i class="fa fa-chevron-left"></i>',
          arrows: true    	
        });
        $('.modal').on('shown.bs.modal', function (e) {
        $('.quick-thumbnails').resize();

        })

    /*thumbnail click*/
        jQuery('.quick-thumbnails a').each(function(){
            var quickThumb = jQuery(this);
            var quickImgSrc = quickThumb.attr('href');

            quickThumb.on('click', function(event){
                event.preventDefault();

                jQuery('.main-image').find('img').attr('src', quickImgSrc);
            });
        });
 
    
     //home layot 2 countdown   

    $(document).ready(function(){
          $('.countdown-carousel .shop-products').slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1000,
                easing: 'linear',
                swipeToSlide: true,
                autoplaySpeed: false
            });  
      }) ;
    
    
    
    
})(jQuery); 


	
	