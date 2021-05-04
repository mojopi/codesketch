$(document).ready(function(){
	 $(".dino").click(function(){
  		
  		$(this).animate({height: "170px", width: "170px", marginTop: "30"}, "slow").animate(({height: "100px", width: "100px",marginTop: "100"}),"slow") ;
});
	
	 $(".tongue").click(function(){
  		$(this).animate({height: "170px", width: "170px", marginTop: "-20"}, "slow").animate(({height: "100px", width: "100px",marginTop: "50"}),"slow") ;
});

});