// JavaScript Document
setTimeout(function(){ 
	var companyRow = $("input[name='Company']").parent();
	companyRow.append('<p class="additions">WHat</p>');
	var newElem = $(".mktoForm .mktoFieldWrap").find("p.additions");
	console.log(newElem);
}, 2000);

$(".mktoForm .mktoFieldWrap").on("click", "p.additions", function(){
	alert("OK");
});