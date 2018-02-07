// JavaScript Document
setTimeout(function(){ 
	var companyRow = $("input[name='Company']").parent();
	companyRow.append('<p class="additions">WHat</p>');
	var newElem = $(".mktoForm .mktoFieldWrap").find("p.additions");
	console.log(newElem);
	newElem.click(function(){alert("OK");});
}, 2000);

