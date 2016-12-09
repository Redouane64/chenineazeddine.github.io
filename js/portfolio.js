$(function(){
    $portfolio=$("body");
   
    $(window).scroll(function(){
        $this=$(this);
        $scroll=$this.scrollTop();
        //adding the header animation 
        $portfolio.find("#shortIntro div").addClass("animate");
    
        
     
       //the hero photo blur effect 
        if($scroll<$portfolio.find("article#whoAmI").offset().top){
            $blur=$scroll/60;
            $portfolio.find("article#hero .background").css({
               "-webkit-filter": "blur("+$blur+"px)",
                "-moz-filter": "blur("+$blur+"px)",
                "-o-filter": "blur("+$blur+"px)",
                "-ms-filter": "blur("+$blur+"px)",
                "filter": "blur("+$blur+"px)"

            });
        } 
        if($scroll>$portfolio.find("article#whoAmI").offset().top*0.3){
             $portfolio.find("article#whoAmI p,article#whoAmI .title").addClass("animate");
         }
        if($scroll>$portfolio.find("article#webDeveloper").offset().top*0.8){
          $portfolio.find("div#imgCon").addClass("animate");
          $portfolio.find("div#text").addClass("shadow").find("p,li").addClass("animate");; 
        }
        if($scroll>$portfolio.find("article#mySkills").offset().top*0.85){
            $skills=$portfolio.find("div.devSide div")
           $skills.each(function(i){ 
                setTimeout(function(){
                $skills.eq(i).addClass("animate");
                    },150*i);
            });
        }
        if($scroll>$portfolio.find("article#memberIn").offset().top*0.85){
           $portfolio.find("div#gList > div").addClass("animate");
           }
        if($scroll>$portfolio.find("footer").offset().top*0.85){
            $portfolio.find("footer div.icone").addClass("animate"); 
            $portfolio.find("footer em").addClass("animate");
        }
    
    });
    // desabel the link in the a member in  article
    $portfolio.find("#memberIn a").removeAttr("href");
    $portfolio.find("#memberIn a").removeAttr("title");
    $links=$portfolio.find("#memberIn .link");
    $links.hover(function(){
        $this=$(this).parents("div.groupe");
        if($this.index()==0){
            $this.find("a").attr("href","https://web.facebook.com/GDGAlgiers/?ref=ts&fref=ts")
            $this.find("a").attr("title","gdgAlgiers facebook page") 
        }else{
            $this.find("a").attr("href","https://web.facebook.com/secouristevolontaire.relizane?fref=ts");
            $this.find("a").attr("title","RVRA facebook page") 
        }
        $this.find("img.link").css({
           "transform": "scale(1.02)"  
        });
        $this.find("a.link").css({
            "color" : "#3C91E6"
        });
    });
    $links.mouseleave(function(){
    $portfolio.find("#memberIn a").removeAttr("href");
    $portfolio.find("#memberIn a").removeAttr("title");
         $this=$(this).parents("div.groupe");
        $this.find("img.link").css({
           "transform": "scale(1)"  
        });
        $this.find("a.link").css({
            "color" : "inherit"
        });
    });
    // validating the form with jquerry valiate 
    $portfolio.find("form").validate({
      rules:{
       email:{
           required:true,
           email:true,
           maxlength:50,
           minlength:5,
       },
       title:{
           required:true,
           maxlength:25,
           minlength:3,
       },
       text:{
           required:true,
           minlength:5,
           
       }
    },
      messages:{        
        email:{
            required:"email adress is required",
            email:"invalide email adress",
            minlength:"too short",
            maxlength:"too long email"
        },
          title:{
              
           required:"email title is required",
            minlength:"too short title",
            maxlength:"too long title"
       },
       text:{
           required:"email text is required",
            minlength:"too short text",
           
       }
        
    },
      errorClass: "error",
      errorElement:"span",
      errorPlacement:function(error, element){
      $(element).parent().find("div.errorContainer").html(error);  
       
      },
      focusInvalid:true,
      onfocusout:function(element,event){
          $(element).valid();
      },
      submitHandler:function(form){
            $data=JSON.stringify($(form).serialize());
           $(form).addClass("send");
           $portfolio.find("div#thanks").addClass("replay");
             setTimeout(function(){
                 $(form).removeClass("send");
                 $portfolio.find("div#thanks").removeClass("replay");
             },2000);
         
         $.ajax({
             url: "https://formspree.io/chenineazeddine5@gmail.com", 
             method: "POST",
             data:$data ,
             dataType: "json"
            }).done(function(){
           
         });
    },
    
        
    });
    // the mobile header style 
      $header=$portfolio.find("header");
    $portfolio.find("header div#menu").click(function(){
           $header.toggleClass("showMenu").find("li").toggleClass("animate");

    });
    $portfolio.find("header ul li").click(function(){
           
           $order=$(this).index();
           $this=$(this) ;     
           $header.toggleClass("showMenu").find("li").toggleClass("animate");
            if($order==5)  $target=$portfolio.find("footer"); else  $target=$portfolio.find("article").eq($order+2);
           $portfolio.animate({
                scrollTop :""+$target.offset().top*0.9+"px",
           },1000);      
    });
    // fixing the keyboard probleme 
    
    
    
});