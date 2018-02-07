// JavaScript Document
setTimeout(function(){ 
	var companyRow = $("input[name='Company']").parent();
	companyRow.append('<p class="additions">WHat</p>');
	console.log(companyRow);
}, 2000);
$(".mktoForm .mktoFieldWrap").on("click", "p.additions", function(){
	alert("OK");
});