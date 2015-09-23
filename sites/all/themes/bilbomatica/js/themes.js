jQuery(document).ready(function() {
	setTimeout("read()",300);
	jQuery(window).resize(function() {
		if(jQuery(window).width()>1006) {
			setTimeout("read()",300);
		}
	});

	traduccionTheme();
});

function read() {
	var text=jQuery(".t").text();
	jQuery(".view-themes li").each(function() {
		var link=jQuery(".views-field-title a",this).attr("href");
		var button="<a href='"+link+"'>"+text+"</a>";
		jQuery(".read",this).remove();
		jQuery(".views-field-title",this).after("<div class='read'>"+button+"</div>");
		jQuery(".views-field-title a",this).attr("href",link);

	});


/*Cuando estás logueado los botones read se mueven */
	jQuery(".view-themes li").each(function() {
		var top=jQuery(this).position().top+jQuery(this).height()-60;
		jQuery(".read",this).css("top",top+"px");
	});
}


function traduccionTheme() {
	var html=jQuery("#traduccionTheme").text();
	jQuery(".views-field-field-order").each(function() {
		jQuery(".field-content",this).html(html+" <span>"+jQuery(".field-content",this).html()+"</span>");
	});
}