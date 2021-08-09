var courses=$("#courses");
$.get("https://codingninjas.in/api/v3/courses",function(deta){
	let courselist=deta.data.courses;
	for(let course in courselist){
		let name=courselist[course].name;
		let tipe=courselist[course].level;
		let url=courselist[course].preview_image_url;
		if(url!=""){
		courses.append('<div class="course"><img src="' + url + '"><h3 class="heading text">' + name + '</h3><h3 class="type text">' + tipe + '</h3></div>');
	}
	}
});