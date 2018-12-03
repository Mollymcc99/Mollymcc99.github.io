$(document).ready(function(){
	console.log("ready");
	$(".switch").click(function(){
		$(".box").toggleClass("red");
	});
});



$(document).ready(function(){
	$(".mybox").mouseenter(function(){
		$(".mybox").toggleClass("black");
	});
});