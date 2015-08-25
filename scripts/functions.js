// JavaScript Document
var isHelpDisplayed = false;
var welcomename; var welcomemail;
$(function(){
	$('#nav').hide();	
});

$(document).ready(function(e) {
        $("#start").modal("show");
        $("#aboutbutton").popover();
	 $("#edubutton").popover();
	 $("#cvbutton").popover();
	 $("#contactbutton").popover();
	 $("#workbutton").popover();
	 $("#projbutton").popover();
	 $("#techbutton").popover();
});

var current;
function sendMessage(){
	var email = $("input#email").val();
	var name = $("input#name").val();
	var msg = $("#msg").val();
	$.ajax({
		type : "POST",
		url: "https://mandrillapp.com/api/1.0/messages/send.json",
		data: {
    	'key': 'KBd2854EdGH4hTjN_4rwUA',
    	'message': {
      	'from_email': email,
      	'to': [
          {
            'email': 'suresh.susi.babu@gmail.com',
            'name': name,
            'type': 'to'
          }
        ],
      'autotext': 'true',
      'subject': 'Message from '+name,
      'html': msg
    		}
  		},
		success:function(){
			toastr.success('Your message has been successfully sent','Thank you');
		}
 	});
}

function changeFocus(id){
	//alert(id);
	$('body').animate({
		scrollTop: $(id).offset().top
		},500);
}

function showResume(){
	window.location.href = "Suresh_babu_Jothilingam.html";	
}

function showAcademicProjects(){
	$("#acad-proj").toggleClass("glyphicon glyphicon-minus");
	$("#ac-proj1").fadeToggle("slow",function(){
		$("#ac-proj2").fadeToggle("slow",function(){
			$("#ac-proj3").fadeToggle("slow",function(){
				$("#ac-proj4").fadeToggle("slow",function(){
					$("#ac-proj5").fadeToggle("slow");
				});
			});
		});
	});
}

function showAndroidProjects(){
	$("#and-proj").toggleClass("glyphicon glyphicon-minus");
	$("#ad-proj1").fadeToggle("slow",function(){
		$("#ad-proj2").fadeToggle("slow");
	});
}

function showTechBody(bodyId){
	$(bodyId).fadeToggle("slow");	
}

function goUp(){
	$('body').animate({
		scrollTop: $("#"+$(current).next().next().next().next().next().attr("id")).offset().top
		},500);
}

function goDown(){
	$('body').animate({
		scrollTop: $("#"+$(current).prev().prev().prev().prev().prev().attr("id")).offset().top
		},500);
}

$(window).scroll(function(){
	$('#nav').show();
	if($(this).scrollTop() < $('div[id="about-me"]').offset().top){
		$('#nav').hide();
	}
	if($(this).scrollTop() >= $('div[id="about-me"]').offset().top){
		if(!isHelpDisplayed){
			toastr.info("Use navigation arrow on left for section navigation");
			isHelpDisplayed = true;
		}
		$('#step-up').hide();
		current = "#about-me";
	}if($(this).scrollTop() >= $('div[id="edu-info"]').offset().top){
		$('#step-up').show();
		$('#step-down').show();
		current = "#edu-info";
	}if($(this).scrollTop() >= $('div[id="work-exp"]').offset().top){
		$('#step-up').show();
		$('#step-down').show();
		current = "#work-exp";
	}if($(this).scrollTop() >= $('div[id="proj"]').offset().top){
		$('#step-up').show();
		$('#step-down').show();
		current = "#proj";
	}if($(this).scrollTop() >= $('div[id="tech-skills"]').offset().top){
		$('#step-up').show();
		$('#step-down').show();
		current = "#tech-skills";
	}if($(this).scrollTop() >= $('div[id="contact-info"]').offset().top){
		$('#step-down').hide();
		current = "#contract-info";
	}
});

function goTour(){
	var isEnd = false;
	$('body').animate({
			scrollTop: $("#about-me").offset().top
		},500);
	current = "#about-me";
	while(!isEnd){
		$('body').animate({
			scrollTop: $("#"+$(current).next().next().next().next().next().attr("id")).offset().top
		},5000);
		current = "#"+$(current).next().next().next().next().next().attr("id");
		if(current == "#contact-info"){
			isEnd = true;
			$('body').animate({
			scrollTop: $("#about-me").offset().top
			},1000);	
		}
	}
}

function goLinked(){
	window.location.href = "https://www.linkedin.com/pub/suresh-babu-jothilingam/8b/b87/66";
}

function startValidate(){
	welcomename = $("#startname").val();
	if(welcomename == ""){
		$("#nullname").show();
	}else{
		$("#welcome-msg").text("Hello, "+welcomename);
		$("#start").modal("hide");
	}
}

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    return pattern.test(emailAddress);
}

function sendMessageValidate(){
	
	if(!isValidEmailAddress($("#email").val())){
		$("#validemail").show();
	}else{
		$("#validemail").hide();
		sendMessage();
	}
}
