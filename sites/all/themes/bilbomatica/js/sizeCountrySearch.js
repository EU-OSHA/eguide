jQuery(document).ready(function() {
	hideDivs();
	countrySearch();
	focusSumbit();
	close();
	codeLanguagesList();
	containerToolsResponsive();
	jQuery(window).resize(function() {
		containerToolsResponsive();
	});
});

function hideDivs() {
	jQuery("#countries").hide();
	jQuery("#searchDiv").hide();
	jQuery("#profileDiv").hide();
}

function countrySearch() {
	jQuery("#countries .containerC").hide();
	jQuery(".country").click(function() {
		jQuery("#profileDiv").hide();
		if(jQuery(this).hasClass("selected")) {
			jQuery("#countries").slideUp();
			jQuery("#countries .containerC").hide();
			jQuery(this).removeClass("selected");
		} else {
			jQuery(this).addClass("selected");
			jQuery(".search").removeClass("selected");
			jQuery(".profileTab").removeClass("selected");
			jQuery("#searchDiv").hide();
			jQuery("#profileDiv").hide();
			jQuery("#countries .containerC").show();
			jQuery("#countries").slideDown("fast");
		}
	});
	
	jQuery(".search").click(function() {
		jQuery("#countries").hide();
		jQuery("#countries .containerC").hide();
		jQuery("#profileDiv").hide();
		if(jQuery(this).hasClass("selected")) {			
			jQuery("#searchDiv").slideUp();
			jQuery(this).removeClass("selected");
		} else {
			jQuery(this).addClass("selected");
			jQuery(".country").removeClass("selected");
			jQuery(".profileTab").removeClass("selected");
			jQuery("#countries").hide();
			jQuery("#profileDiv").hide();
			jQuery("#searchDiv").slideDown("fast",function() {
				jQuery("#searchField").focus();
			});
		}
	});


	jQuery(".profileTab").click(function() {
		jQuery("#countries").hide();
		jQuery("#countries .containerC").hide();
		jQuery("#searchDiv").hide();
		if(jQuery(this).hasClass("selected")) {
			jQuery("#profileDiv").slideUp();
			jQuery(this).removeClass("selected");
		} else {
			jQuery(this).addClass("selected");
			jQuery(".search").removeClass("selected");
			jQuery(".country").removeClass("selected");
			jQuery("#searchDiv").hide();
			jQuery("#countries").hide();
			jQuery("#profileDiv").slideDown("fast",function() {
			});
		}
	});


}

function focusSumbit() {
	jQuery(document).keypress(function(e) {
		if(e.which == 13) {
			if (jQuery("#searchField").is(":focus")) {
				jQuery("#searchButton").trigger("click");
			}
		}
	});
}
function close() {
	jQuery(".close img").css("cursor","pointer").click(function() {	
		jQuery(".resultsSearch").html("");
		jQuery("#searchField").val(" ");
		jQuery(".search").trigger("click");
	});
}


function codeLanguagesList() {
	if(jQuery(window).width()>1006) {
		jQuery("#countries ul li ul").each(function() {
			jQuery(this).hide();
		});
		jQuery("#countries ul li").each(function() {
			jQuery(this).css("cursor","pointer");
			jQuery(this).click(function() {
				jQuery("#countries ul li ul").each(function() {
					jQuery(this).hide();
				});

				topParent=jQuery(this).position().top+10;
				leftParent=jQuery(this).position().left;
				var width=jQuery(this).width();

				if(jQuery("ul",this).is(':visible')) {
					jQuery("ul",this).slideUp("fast");
				} else {
					jQuery("ul",this).css("left",leftParent+"px").css("top",topParent+"px").css("min-width",width+"px").slideDown("fast");
				}

			});
		});

		//manipulo los estilo para el separador de idiomas
		jQuery("#countries ul li ul li a").each(function(){
			jQuery(this).mouseover(function() {
				if(jQuery(this).parent().prev().find("a").hasClass("moreItems")) {
					jQuery(this).parent().prev().find("a").removeClass("moreItems").addClass("deleteTmp");
				}
			});
			jQuery(this).mouseout(function() {
				if(jQuery(this).parent().prev().find("a").hasClass("deleteTmp")) {
					jQuery(this).parent().prev().find("a").removeClass("deleteTmp").addClass("moreItems");
				}
			});
		});
	} else {

		jQuery("#countries ul li ul").each(function() {
			jQuery(this).removeAttr("style");
			jQuery("li",this).each(function() {
				jQuery(this).addClass("lineR");
			});
			jQuery("li:last",this).removeClass("lineR");
		});
	}
}

function containerToolsResponsive() {
	
	if(jQuery("#containerTools").length>0) {
		if(jQuery(window).width()<=1006 ) {
			var txtProfile=jQuery(".profileTab").text();
			jQuery(".profileTab").html("<div>"+txtProfile+"</div>");

			var txtCountry=jQuery(".country").text();
			jQuery(".country").html("<div>"+txtCountry+"</div>");

			var ancho=jQuery(window).width()-4-92; // por los borders -num paddings
			var pestanaSearch=jQuery(".search").width();
			jQuery("ul.tabs li").css("display","block").css("float","left");
			var anchoMenosSearch=(ancho-pestanaSearch)/2;
			jQuery(".profileTab").css("width",anchoMenosSearch+"px");
			jQuery(".country").css("width",anchoMenosSearch+"px");
		} else {
			var txtProfile=jQuery(".profileTab").text();
			jQuery(".profileTab").html(txtProfile);

			var txtCountry=jQuery(".country").text();
			jQuery(".country").html(txtCountry);

			jQuery("ul.tabs li").removeAttr("style");
			jQuery(".profileTab").removeAttr("style");
			jQuery(".country").removeAttr("style");
		}
	}
	
}