function removeBumper(){setTimeout(function(){$(".audioBug > h6").fadeOut(500,function(){$(".audioBug").removeClass("expanded")})},5e3)}var audioOne="https://d63kb4t2ifcex.cloudfront.net/201505horton/mp3/Horton_ImNotThisPicture.mp3",audioTwo="https://d63kb4t2ifcex.cloudfront.net/201505horton/mp3/Horton_WeHadBackThen.mp3",audioThree="https://d63kb4t2ifcex.cloudfront.net/201505horton/mp3/Horton_IveNeverBeen.mp3",audioFour="https://d63kb4t2ifcex.cloudfront.net/201505horton/mp3/Dukakis_OneOfTheValuesofFurlough.mp3",breakOne=0,breakTwo=$(".audio-two").offset().top-$(window).height(),breakThree=$(".audio-three").offset().top-$(window).height(),breakFour=$(".audio-four").offset().top-$(window).height(),titleOne="LISTEN: The first audio file",titleTwo="LISTEN: The second audio file",titleThree="LISTEN: The third audio file",titleFour="LISTEN: The fourth audio file",audioElement=document.createElement("audio");audioElement.setAttribute("src",audioOne),audioElement.setAttribute("preload","auto"),$.get(),audioElement.addEventListener("load",function(){audioElement.play()},!0),$(".audioBug").click(function(){$(this).hasClass("playing")?(audioElement.pause(),$(this).removeClass("playing")):(audioElement.play(),$(this).addClass("playing"))});var timer;$(".audioBug").hover(function(){clearTimeout(timer),$(this).addClass("expanded"),$(".audioBug > h6").fadeIn()},function(){$(".audioBug > h6").fadeOut("slow"),timer=setTimeout(function(){$(".audioBug").removeClass("expanded")},1e3)}),setTimeout(function(){$(".audioBug").addClass("expanded")},2e3),setTimeout(function(){$(".audioBug > h6").fadeIn(300,function(){removeBumper()})},2700),$(window).scroll(function(){$(this).scrollTop()>breakOne&&$(this).scrollTop()<breakTwo&&audioElement.src!==audioOne?(audioElement.setAttribute("src",audioOne),$(".audioBug > h6").text(titleOne)):$(this).scrollTop()>breakTwo&&$(this).scrollTop()<breakThree&&audioElement.src!==audioTwo?(audioElement.setAttribute("src",audioTwo),$(".audioBug > h6").text(titleTwo)):$(this).scrollTop()>breakThree&&$(this).scrollTop()<breakFour&&audioElement.src!==audioThree?(audioElement.setAttribute("src",audioThree),$(".audioBug > h6").text(titleThree)):$(this).scrollTop()>breakFour&&audioElement.src!==audioFour&&(audioElement.setAttribute("src",audioFour),$(".audioBug > h6").text(titleFour))});