var menuR=0;
jQuery(document).ready(function() {

//deshabilito el link mnOtherResources
jQuery(".mnOtherResources").removeAttr("href");


	jQuery.getScript('sites/all/themes/bilbomatica/js/js.cookie.js', function() { 
		if(Cookies.get('tour')!=undefined && Cookies.get('tour')!="undefined") {
			if(Cookies.get('tour').length==0) {
				Cookies.set('tour', '0');
			}
		} else {
			Cookies.set('tour', '0');

		}

		if(Cookies.get('tourVuelta')!=undefined) {
			if(Cookies.get('tourVuelta').length==0) {
				Cookies.set('tourVuelta', '0');
			}
		} else {
			Cookies.set('tourVuelta', '0');
		}


		wizard();
		startTour();
	});
	icoHome();
	glossary();
	glossaryLetters();
	glossaryClick();
	glossarySearch();
	sectionsSteps();
	menuPie();
	didYouKnowHeight();
	usefulLinks();
	viewSources();
	fontSize();
	menuResponsive();
	linksPreFooter();
	breadcrumbsSearch();
	menuloginup();
	arrowGlossary();
	submenu();

	jQuery(window).resize(function() {
		arrowGlossary();
		sectionsSteps();
		menuPie();
		didYouKnowHeight();
		usefulLinks();
		heightGoodPractices();
		if(jQuery(".tourLayer").length>0) {
			//setTimeout("location.reload()",200);
		}
	});

	jQuery(window).load(function() {
		heightGoodPractices();
	});

});

function icoHome() {
	var htmlHome=jQuery("#block-system-main-menu li.first a.mnHome").text();
	
	if(jQuery(window).width()>1006) {
		var domain=jQuery("#domain").text();
		jQuery("#block-system-main-menu li.first a").html("<img src='"+domain+"sites/all/themes/bilbomatica/img/homeIco.png' alt='Home'>");
	} else {
		jQuery("#block-system-main-menu li.first a").html(htmlHome);
	}
}

function linksPreFooter(){
	jQuery(".didYouKnow").click(function(){
		var link = jQuery("a",this).attr("href");
		location.href = link;
	});
	
	jQuery(".glossary").click(function(){
		var link = jQuery("a",this).attr("href");
		location.href = link;
	});
	
	jQuery(".aboutUs").click(function(){
		var link = jQuery("a",this).attr("href");
		location.href = link;
	});
}


function glossary() {

	//Si está en la página de glossary que no salgan los popups
	if(jQuery(".section-glossary").length>0) {
		jQuery(".lexicon-term").each(function() {
			jQuery(this).removeAttr("class").removeAttr("href").removeAttr("title");
		});
	}


	var title="";
	jQuery(".lexicon-term").each(function() {
		jQuery(this).removeAttr("href");
		jQuery(this).click(function () {
			removePopUps();
			title=jQuery(this).attr("title");
			jQuery(this).removeAttr("title").addClass("poparizado");
			var html="<div class='popup'><div class='closePop'><img src='sites/all/themes/bilbomatica/img/closeGlossary.png'></div><div class='contentPop'>"+title+"</div></div><div class='arrowPopUp'></div>";
			jQuery(this).before(html);
			//positioning
			var widthWord=jQuery(this).width()/2;
			var widthBox=jQuery(".popup").width()/2;
			var leftWord=jQuery(this).position().left;
			var leftPut=(leftWord+widthWord)-(widthBox)+"px";
			jQuery(".popup").css("left",leftPut); //center

			var topWord=jQuery(this).position().top;
			var heightWord=jQuery(this).height();
			var heightBox=jQuery(".popup").height();
			var topPut=topWord-heightBox-heightWord+"px";
			jQuery(".popup").css("top",topPut); //center

			var topPutArrow=topWord-3+"px";
			var widthArrow=jQuery(".arrowPopUp").width()/2;

			var leftPutArrow=(leftWord+widthWord)-(widthArrow)+"px";
			jQuery(".arrowPopUp").css("top",topPutArrow);
			jQuery(".arrowPopUp").css("left",leftPutArrow); //center


			jQuery(".closePop").click(function () {
				removePopUps();
				jQuery(".poparizado").attr("title",title).removeClass("poparizado");
			});
		});		
	});

}

function removePopUps() {
	jQuery(".popup").each(function() {
		jQuery(this).remove();
	});
	jQuery(".arrowPopUp").each(function() {
		jQuery(this).remove();
	});
}



function menuloginup(){
	if (jQuery("a[href='/user/logout']").length>0) {
		jQuery("#block-system-main-menu .menu").addClass("menupos");
		jQuery("#containerTools").addClass("menudown");
		}
	else
		{
		jQuery("#block-system-main-menu .menu").removeClass("menupos");
		jQuery("#containerTools").removeClass("menudown");
	}
}

function glossaryLetters() {
	if (jQuery(".lexicon-links").length>0) {
			//Separar las letras entre si un poco
			var htmlInicial=jQuery(".lexicon-links").html();
			var span=jQuery(".lexicon-links span.selectaletter").html();

			var cachosSpan=htmlInicial.split("</span>");
			var cadenaTratar=cachosSpan[1];

			var letras=cadenaTratar.split("|");

			var cadenaPoner="";
			for(i=0;i<letras.length;i++) {
				cadenaPoner=cadenaPoner+"<span>"+letras[i]+"</span> |"
			}

			cadenaPoner="<span class='selectaletter'>"+span+"</span>"+cadenaPoner;
			cadenaPoner=cadenaPoner.substring(0, cadenaPoner.length-1);
			jQuery(".lexicon-links").html(cadenaPoner);

			//si hay alguna letra seleccionada que se ponga una capa encima del vocabulario...
			var letterSelected=jQuery(".lexicon-item.active").text();
			var html="<div class='letterSelected'>"+letterSelected+"</div>";
			jQuery(".lexicon-list dl").before(html);
	}
}

function glossaryClick() {
	if (jQuery(".lexicon-list dt").length>0) {
			jQuery(".lexicon-list dt").each(function() {
				jQuery(this).click(function () {
					jQuery(this).next().slideToggle();
					if(jQuery(this).hasClass("selected")) {
						jQuery(this).removeClass("selected");
					} else {
						jQuery(this).addClass("selected");
					}
					//hacer que cambie la dirección de la fecha del background
				});
			});
	}
}


function glossarySearch() {
	
	if(jQuery(".search-api-page-results").length>0) {
		letra="";
		jQuery(".search-api-page-results .search-result h3").before("<div class='letterSelected'>"+letra+"</div>");
		
		jQuery(".letterSelected").each(function(){
			letra= jQuery(this).next().text();
			letra=jQuery.trim(letra).substr(0,1);
			jQuery(this).text(letra);
		});
		
		//letra=jQuery.trim(jQuery(".search-result h3").text()).substr(0,1);
		
		
	}
}
function sectionsSteps() {
	if (jQuery(".sections.steps").length>0) {
		var alturaComparar=jQuery(".theme-selected").height();
		jQuery(".sections.steps").css("height",alturaComparar+"px");
	}
}

function menuPie() {
	/*creo un menú del pie para móvil y oculto el de desktop*/
	var html="<div class='menuPMo'>";
	if(jQuery(window).width()<=1006) {
		jQuery(".menuPMo").remove();
		jQuery(".clearPieMovil").remove();
		jQuery(".menuFooter li").each(function(num) {
			var content=jQuery(this).html();
			html=html+content;
		});
		html=html+"</div>";
		jQuery(".menuFooter").hide();
		jQuery("#copyright").after(html);
	} else {
		jQuery(".menuFooter").show();
		jQuery(".menuPMo").remove();
		jQuery(".clearPieMovil").remove();
	}
}

function didYouKnowHeight() {
	var alturamayor=0;
	jQuery(".view-did-you-know .views-row").each(function() {
		jQuery(this).attr("style","");
		var alturaCuadro=jQuery(this).height();
		if (alturaCuadro>alturamayor) {
			alturamayor=alturaCuadro;
		}
	});
	jQuery(".view-did-you-know .views-row").each(function() {
		jQuery(this).css("height",alturamayor+"px");
	});
}

function usefulLinks() {
	var alturamayor=0;
	jQuery(".view-useful-links a").each(function() {
		jQuery(this).attr("style","");
		var alturaCuadro=jQuery(this).height();
		if (alturaCuadro>alturamayor) {
			alturamayor=alturaCuadro;
		}
	});
	jQuery(".view-useful-links a").each(function() {
		jQuery(this).css("height",alturamayor+"px");
	});
}

function moreInfo() {
	var alturaCapa=0;
	if(jQuery("#moreInfoDiv").length>0) {
		if(jQuery(window).width()>1006) {
			jQuery("#page").after("<div id='shadow'></div>")
		}
		var top=(jQuery(window).height()/2)-(jQuery("#moreInfoDiv").height()/2)-50;
		var left=(jQuery(window).width()/2)-(jQuery("#moreInfoDiv").width()/2);
		jQuery("#moreInfoDiv").css("top",top+"px").css("left",left+"px");

		jQuery("#moreInfoDiv").slideDown("fast",function() {
			if(jQuery(window).width()>1006) {
				jQuery("body").css("overflow","hidden");
				//posicionarlo en el centro de arriba
				
			} else {
				jQuery("body").css("overflow-y","auto").css("overflow-x","hidden");
				jQuery("#listText").attr("style","display: none !important;");
			}
		});


	}
	jQuery(".closeMoreInfo").click(function() {
		jQuery("#moreInfoDiv").slideUp("fast",function() {
			jQuery("#shadow").remove();
			jQuery("body").css("overflow","auto").removeAttr("style");

			jQuery("#listText").removeAttr("style");
		});
	});
}

function showSources() {
	if(jQuery(window).width()>1006) {
		jQuery("#page").after("<div id='shadow'></div>")
		jQuery("body").css("overflow","hidden");
	} else {
			jQuery("body").css("overflow-y","auto").css("overflow-x","hidden");
			jQuery(".view-did-you-know").hide();
	}
	jQuery(".preFooter.did").slideDown();

	jQuery(".closeMoreInfo").click(function() {
		jQuery(".preFooter.did").slideUp("fast",function() {
			jQuery("#shadow").remove();
			jQuery("body").css("overflow","auto");
			jQuery(".view-did-you-know").show();
		});
	});
}

function viewSources() {
	if(jQuery(".view-did-you-know").length>0) {
		var textButton=jQuery(".contentDid strong:eq(0)").text();
		jQuery(".view-did-you-know .views-row:eq(0)").before("<div class='buttonViewSource'><a href='#' onclick='showSources()' class='viewSource'>"+textButton+"</a></div>");
	}
	jQuery(".preFooter.did").hide();
}

function fontSize() {
	jQuery(".bigSize a").click(function() {
		jQuery("body").css("font-size","120%");
		jQuery(".normalSize").removeClass("selected");
		jQuery(".bigSize").addClass("selected");

		if(jQuery(".view-did-you-know").length>0) {
			didYouKnowHeight();
		}

		
	});

	jQuery(".normalSize a").click(function() {
		jQuery("body").css("font-size","100%");
		jQuery(".bigSize").removeClass("selected");
		jQuery(".normalSize").addClass("selected");
	});
	 
}

function heightGoodPractices() {

	if(jQuery(".view-good-practices").length>0) {
		var height=0;

		jQuery(".view-good-practices .views-row").each(function() {
			jQuery(this).css("height","auto");
		});


		if(jQuery(".shareReadMore").length>0) {
			jQuery(".shareReadMore").each(function() {
				jQuery(this).remove();
			});
		}

		jQuery(".view-good-practices .views-row").each(function() {
			var altura=jQuery(this).height();
			if (altura>height) {
				height=altura;
			}
		});
		height=height+70; //los botones más el margin top


		jQuery(".view-good-practices .views-row").each(function() {
			jQuery(this).css("height",height+"px");

			//hay que meter a todas las cajas los botones de Share y readMore
			var readMoreText=jQuery(".readMoreTranslation").text();
			var shareText=jQuery(".shareTranslation").text();

			var html="<div class='shareReadMore'><div class='share'><img src='/sites/all/themes/bilbomatica/img/icoShare.png' alt='"+shareText+"'> "+shareText+"</div><div class='readMore'>"+readMoreText+"</div></div>";
			jQuery(this).append(html);

			var ancho=jQuery(this).width()+48;
			var top=jQuery(this).position().top+height-35;

			jQuery(".shareReadMore",this).width(ancho).css("margin-left","-24px").css("top",top+"px");
			var anchoMenosUno=(ancho/2)-1;
			jQuery(".share",this).width(anchoMenosUno).css("border-right","1px solid #FFF");
			jQuery(".readMore",this).width(ancho/2);

			var link=jQuery("a",this).attr("href");
			jQuery(".readMore",this).click(function() {
				location.href=link;
			});

			//se muestran el shar y read more solo al pasar por encima
			jQuery(this).mouseenter(function() {
				jQuery(".shareReadMore",this).fadeIn("fast");
			});
			jQuery(this).mouseleave(function() {
				jQuery(".shareReadMore",this).fadeOut("fast");
				jQuery(".views-field-service-links",this).fadeOut("fast");
			});
		});

		jQuery(".share").each(function() {
			jQuery(this).click(function() {
				var top=jQuery(this).parent().position().top-jQuery(this).parent().prev(".views-field-service-links").height()-30;
				jQuery(this).parent().prev(".views-field-service-links").css("top",top+"px").show();
			});
		});


		//si se hace una llamada ajax se vuelve a llamar a la function--> para el load more...
		jQuery(document).ajaxComplete(function() {
			heightGoodPractices();
		});
	}
}


function menuResponsive() {
	var traduccionMenu=jQuery("#traduccionMenu").val();// metido en el bloque del tamaño de letra y las minipestañas. Es la traducción de la palabra "Menu" en los distintos idiomas

	jQuery(".mainMenu").after("<div id='menuLinkRespon'>"+traduccionMenu+" <img class='open' id='menuIcoMobile' src='/sites/all/themes/bilbomatica/img/menuIcoMobile.png' alt='menu'></div>");
	activeMenuR();
}

function activeMenuR() {
	if(jQuery("#block-system-main-menu").length>0) {
		jQuery("#menuIcoMobile").click(function() {
			if(jQuery(this).hasClass("open")) {
				jQuery("#block-system-main-menu").slideDown();
				jQuery(this).removeClass("open");
				jQuery(this).attr("src","/sites/all/themes/bilbomatica/img/closeMenuM.png");
				jQuery("body").css("overflow","hidden");
			} else {
				jQuery("#block-system-main-menu").slideUp();
				jQuery(this).addClass("open");
				jQuery(this).attr("src","/sites/all/themes/bilbomatica/img/menuIcoMobile.png");
				jQuery("body").css("overflow","auto");
			}
		});

		jQuery(window).resize(function() {
			if(jQuery(window).width()>1006 ) {
				jQuery("#block-system-main-menu").show();
				jQuery("#menuIcoMobile").addClass("open");
				jQuery("#menuIcoMobile").attr("src","/sites/all/themes/bilbomatica/img/menuIcoMobile.png");
				jQuery("body").css("overflow","auto");
			} else {
				if(jQuery("#menuIcoMobile").hasClass("open")) {
					jQuery("#block-system-main-menu").hide();
					jQuery("body").css("overflow","auto");
				} else {
					jQuery("#block-system-main-menu").show();
					jQuery("body").css("overflow","hidden");
				}
			}
		});
	}
}
function breadcrumbsSearch() {
	 if(jQuery(".page-search-a-term").length>0) {
		textoSearch= jQuery(".highLight h1").text();
		textoSearch.indexOf(':');
		textoSearch=jQuery.trim(textoSearch).substr(0,14);
		jQuery(".migas").html(jQuery(".migas").html()+" / "+ textoSearch);
	 }
}
function arrowGlossary() {
	var htmlOriginal=jQuery(".lexicon-links").html();

	if(jQuery(window).width()<=1006 ) {
		if(jQuery(".filterGlossary").length>0) {
			if(jQuery(".searchGlossary").hasClass("selected")) {
				var leftInicio=jQuery(".searchGlossary").position().left;
				var mitadCapa=jQuery(".searchGlossary").width()/2;
				var mitadArrow=jQuery(".arrow").width()/2;
				var leftFinal=leftInicio+mitadCapa-mitadArrow;
				jQuery(".arrow").css("left",leftFinal+"px").css("margin","0.6em 0 0 0");
			} else {
				var leftInicio=jQuery(".filterGlossary").position().left;
				var mitadCapa=jQuery(".filterGlossary").width()/2;
				var mitadArrow=jQuery(".arrow").width()/2;
				var leftFinal=leftInicio+mitadCapa-mitadArrow;
				jQuery(".arrow").css("left",leftFinal+"px").css("margin","0.6em 0 0 0");
			}
		}

		//convierto las letras a un select
		var options="<select id='letrasResponsive'>";
		jQuery(".lexicon-links a").each(function() {
			options=options+"<option value='"+jQuery(this).attr("href")+"'>"+jQuery(this).text()+"</option>";
		});
		options=options+"</select>";
		var textSelectALetter='<span class="selectaletter">'+jQuery(".selectaletter").text()+"</span>";
		jQuery(".lexicon-links").html(textSelectALetter+options);


		//pongo selected si ya he hecho el change en el select
		var letraSelected=jQuery(".letterSelected").text();
		jQuery("#letrasResponsive option").each(function() {
			if(jQuery(this).text()==letraSelected) {
				jQuery(this).attr("selected","selected");
			}
		});

		//voy al option seleccionado si es la a
		if (jQuery("#letrasResponsive option:selected").text()=="a" && jQuery.trim(jQuery(".lexicon-list").html())=="") {
			location.href=jQuery("#letrasResponsive option:selected").val();
		}
		jQuery("#letrasResponsive").change(function() {
			location.href=jQuery("#letrasResponsive option:selected").val();
		});
	} else {
		jQuery(".arrow").removeAttr("style");
		jQuery(".lexicon-links").html(htmlOriginal);
	}
}


function wizard() {
	jQuery("#tour").click(function() {
		Cookies.set('tour', '1');
		location.href=location.protocol + "//" + location.host;
	});
}
function startTour() {

	if(Cookies.get('tour')=="1") {
		/*dependiendo de la página en la que esté el usuario hay que mostrarle una capa distinta. 
		Esta capa estará contenida en cada página; en la home en el bloque del mapa*/
		//por el momento muestro la capa oscura
		hacerNoche();

		//HOME
		if(jQuery(".front").length>0) {
			jQuery(".halfTour").css("height","293px");
			var left=jQuery(".ListSC").position().left;
			var top=jQuery(".ListSC").position().top;

			jQuery(".tourLayer").css("left","0").css("top","0").fadeIn();
			var topMaspalitroque=top+116;
			var leftCapa=left-196;
			jQuery(".tourLayer").animate({
			    top: "+="+topMaspalitroque
			  }, 300, function() {
			    jQuery(".tourLayer").animate({
				    left: "+="+leftCapa
				  }, 700, function() {
				    //pone el pointer
				    var topPalitroque=top+35;
				    var leftPalitroque=left+47;
				   	jQuery(".tourLayer").after("<div class='pointerUp'></div>");
				   	jQuery(".pointerUp").css("left",leftPalitroque+"px").css("top",topPalitroque+"px").fadeIn();
				   	jQuery(".skip").fadeIn();
				    var topNext=jQuery(window).height()-180;
				   	jQuery(".next").fadeIn().css("top",topNext+"px");
				   	jQuery(".next").click(function() {
				   		location.href=jQuery(".next a").attr("href");
				   	});
				});
			});
		} 

		//SELECT YOUR PROFILE
		if(jQuery(".section-select-your-profile").length>0) {
			jQuery(".tourLayer").css("left","0").css("top","0").fadeIn();
			jQuery(".halfTour").css("height","250px");

			var top=jQuery(".subHighLight").position().top+85;
			var left=jQuery("#page").width()/2-(jQuery(".tourLayer").width()/2);
			jQuery(".tourLayer").animate({
			    top: "+="+top
			  }, 300, function() {
				jQuery(".tourLayer").animate({
				    left: "+="+left
				  }, 300, function() {

				  	var leftPalitroqueL=jQuery(".tourLayer").position().left-90;
				  	var leftPalitroqueR=jQuery(".tourLayer").position().left+jQuery(".tourLayer").width()+10;
				  	var topPalitroque=jQuery(".tourLayer").position().top+(jQuery(".tourLayer").height()/2);
				  
				  	jQuery(".tourLayer").after("<div class='pointerLeft'></div>");
				  	jQuery(".tourLayer").after("<div class='pointerRight'></div>");
				  	
				  	jQuery(".pointerLeft").css("left",leftPalitroqueL+"px").css("top",topPalitroque+"px").fadeIn();
				  	jQuery(".pointerRight").css("left",leftPalitroqueR+"px").css("top",topPalitroque+"px").fadeIn();
				  	

				    jQuery(".skip").fadeIn();
				   	var topNext=jQuery(window).height()-180;
				   	jQuery(".next").fadeIn().css("top",topNext+"px");

				   	jQuery(".next a").attr("href",jQuery(".half:eq(0) .button a").attr("href"));
				   	jQuery(".next").click(function() {
				   		location.href=jQuery(".half:eq(0) .button a").attr("href");
				   	});
				   	
				});
			});
		}

		//SELECT THEME
		if(jQuery(".section-list-themes").length>0) {
			jQuery(".tourLayer").css("left","0").css("top","0").fadeIn();
			jQuery(".halfTour").css("height","250px");

			if (Cookies.get('tourVuelta')==0) {
				var top=jQuery(".containerThemes").position().top-15;
				var left=jQuery(".views-field-field-order:eq(0)").position().left+96;

				jQuery(".nameOfTheme").text(jQuery(".views-field-title:eq(0)").text());

				jQuery(".tourLayer").animate({
				    top: "+="+top
				  }, 300, function() {
					jQuery(".tourLayer").animate({
					    left: "+="+left
					  }, 300, function() {		
					  	var leftPalitroque=left+50;		  
					  	var topPalitroque=top+258;

					  	jQuery(".tourLayer").after("<div class='pointerDown'></div>");
					  	jQuery(".pointerDown").css("left",leftPalitroque+"px").css("top",topPalitroque+"px").fadeIn();
					 
					    jQuery(".skip").fadeIn();

					   	var topNext=jQuery(window).height()-180;
					   	jQuery(".next").fadeIn().css("top",topNext+"px");

					   	jQuery(".next a").attr("href",jQuery(".read:eq(0) a").attr("href"));
					   	jQuery(".next").click(function() {
					   		location.href=jQuery(".read:eq(0) a").attr("href");
					   	});
					   	
					});
				});
			} else if (Cookies.get('tourVuelta')==1) {
				//lo primero cambiar los textos
				jQuery(".halfTour").css("height","300px");
				var txt=jQuery("#traduccion1").text();
				jQuery(".halfTour.text div:eq(1)").text(txt);

				//cambiar info3 por info7
				jQuery(".info3").removeClass("info3").addClass("info7");

				var left=jQuery("ul.tabs").position().left-jQuery(".tourLayer").width()+jQuery("ul.tabs li:eq(0)").width()+70;
				var top=jQuery(".profileTab").position().top+17;

				jQuery(".tourLayer").animate({
				    top: "+="+top
				  }, 300, function() {
					jQuery(".tourLayer").animate({
					    left: "+="+left
					  }, 300, function() {		
					  		var leftPalitroque=left+jQuery(".tourLayer").width()-50;		  
					  		var topPalitroque=top-87;
					 		jQuery(".tourLayer").after("<div class='pointerUp'></div>");
					  		jQuery(".pointerUp").css("left",leftPalitroque+"px").css("top",topPalitroque+"px").fadeIn();
						    jQuery(".skip").fadeIn();

						   	var topNext=jQuery(window).height()-180;
						   	jQuery(".next").fadeIn().css("top",topNext+"px");

						   	jQuery(".next").click(function() {
						   		Cookies.set('tourVuelta', '2');   
					   			location.reload();
					   		});
					});
				});
			} else if (Cookies.get('tourVuelta')==2) {
				//good practices
				//lo primero cambiar los textos
				jQuery(".halfTour").css("height","450px");
				var txt=jQuery("#traduccion2").text();
				jQuery(".halfTour.text div:eq(1)").text(txt);

				jQuery(".info3").removeClass("info3").addClass("info8");

				var left=jQuery("#block-system-main-menu ul.menu").position().left+150;
				var top=jQuery(".profileTab").position().top+17;

				jQuery(".tourLayer").animate({
				    top: "+="+top
				  }, 300, function() {
					jQuery(".tourLayer").animate({
					    left: "+="+left
					  }, 300, function() {		
					  		var leftPalitroque=left+50;		  
					  		var topPalitroque=top-87;
					 		jQuery(".tourLayer").after("<div class='pointerUp'></div>");
					  		jQuery(".pointerUp").css("left",leftPalitroque+"px").css("top",topPalitroque+"px").fadeIn();
						    jQuery(".skip").fadeIn();

						   	var topNext=jQuery(window).height()-180;
						   	jQuery(".next").fadeIn().css("top",topNext+"px");

						   	jQuery(".next").click(function() {
						   		Cookies.set('tourVuelta', '3');   
					   			location.reload();
					   		});
					});
				});
			} else if (Cookies.get('tourVuelta')==3) {
				//good practices
				//lo primero cambiar los textos
				jQuery(".halfTour").css("height","250px");
				var txt=jQuery("#traduccion3").text();
				jQuery(".halfTour.text div:eq(1)").text(txt);

				jQuery(".info3").removeClass("info3").addClass("info9");

				var left=jQuery(".aboutUs").position().left-jQuery(".tourLayer").width()+100;
				var top=jQuery(".aboutUs").position().top-jQuery(".tourLayer").height()-175;

				jQuery(".tourLayer").animate({
				    top: "+="+top
				  }, 300, function() {
					jQuery(".tourLayer").animate({
					    left: "+="+left
					  }, 300, function() {		
					  		var leftPalitroque=left+jQuery(".tourLayer").width()-100;		  
					  		var topPalitroque=top+255;
					 		jQuery(".tourLayer").after("<div class='pointerDown'></div>");
					  		jQuery(".pointerDown").css("left",leftPalitroque+"px").css("top",topPalitroque+"px").fadeIn();
						    jQuery(".skip").fadeIn();

						   	var topNext=jQuery(window).height()-180;
						   	jQuery(".next").fadeIn().css("top",topNext+"px");

						   	jQuery(".next").click(function() {
						   		Cookies.set('tourVuelta', '4');   
					   			location.reload();
					   		});
					});
				});
			} else if (Cookies.get('tourVuelta')==4) {
				//good practices
				//lo primero cambiar los textos
				jQuery(".halfTour").css("height","250px");
				var txt=jQuery("#traduccion4").text();
				jQuery(".halfTour.text div:eq(1)").text(txt);

				jQuery(".info3").removeClass("info3").addClass("info10");

				var left=jQuery("ul.menu").position().left-60;
				var top=jQuery("ul.menu").position().top+45;

				jQuery(".tourLayer").animate({
				    top: "+="+top
				  }, 300, function() {
					jQuery(".tourLayer").animate({
					    left: "+="+left
					  }, 300, function() {		
					  		var leftPalitroque=left+51;		  
					  		var topPalitroque=jQuery(".tourLayer").position().top-85;
					 		jQuery(".tourLayer").after("<div class='pointerUp'></div>");
					  		jQuery(".pointerUp").css("left",leftPalitroque+"px").css("top",topPalitroque+"px").fadeIn();
						    jQuery(".skip").fadeIn();

						   	var topNext=jQuery(window).height()-180;
						   	jQuery(".next").fadeIn().css("top",topNext+"px");

						   	jQuery(".next").click(function() {
						   		hacerDia();
					   		});
					});
				});
			}
		}


		//THEME
		if(jQuery(".node-type-themes").length>0) {
			jQuery(".tourLayer").css("left","0").css("top","0").fadeIn();
			jQuery(".halfTour").css("height","250px");

			var top=jQuery(".theme-selected").position().top+(jQuery(".tourLayer").height()/1.5);
			var left=(jQuery(window).width()/2)-jQuery(".tourLayer").width()-50;

			jQuery(".tourLayer").animate({
			    top: "+="+top
			  }, 300, function() {
				jQuery(".tourLayer").animate({
				    left: "+="+left
				  }, 300, function() {		
				  	var leftPalitroque=left+jQuery(".tourLayer").width()+5;		  
				  	var topPalitroque=top+(jQuery(".tourLayer").height()/16);

				  	jQuery(".tourLayer").after("<div class='pointerRight'></div>");
				  	jQuery(".pointerRight").css("left",leftPalitroque+"px").css("top",topPalitroque+"px").fadeIn();
				 
				    jQuery(".skip").fadeIn().css("top","56px");

				   	var topNext=jQuery(window).height()-85;
				   	jQuery(".next").fadeIn().css("top",topNext+"px");

				   	jQuery(".next a").attr("href",jQuery(".section:eq(0) a").attr("href"));
				   	jQuery(".next").click(function() {
				   		location.href=jQuery(".section:eq(0) a").attr("href");
				   	});
				   	
				});
			});
		}

		//STEPS
		if(jQuery(".node-type-steps").length>0) {
			jQuery(".tourLayer").css("left","0").css("top","0").fadeIn();
			jQuery(".halfTour").css("height","250px");

			var top=jQuery(".theme-selected").position().top+(jQuery(".tourLayer").height());
			var left=(jQuery(window).width()/2)+80;

			jQuery(".tourLayer").animate({
			    top: "+="+top
			  }, 300, function() {
				jQuery(".tourLayer").animate({
				    left: "+="+left
				  }, 300, function() {		
				  	var leftPalitroque=left+jQuery(".tourLayer").width()-(jQuery(".tourLayer").width()/10);	
				  	var leftPalitroque2=left+(jQuery(".tourLayer").width()/10);	  
				  	var topPalitroque=top-85;

				  	jQuery(".tourLayer").after("<div class='pointerUp'></div>");
				  	jQuery(".tourLayer").after("<div class='pointerUp2'></div>");

				  	jQuery(".pointerUp").css("left",leftPalitroque+"px").css("top",topPalitroque+"px").fadeIn();
				  	jQuery(".pointerUp2").css("left",leftPalitroque2+"px").css("top",topPalitroque+"px").fadeIn();
				 
				    jQuery(".skip").fadeIn().css("top","56px");

				   	var topNext=jQuery(window).height()-85;
				   	jQuery(".next").fadeIn().css("top",topNext+"px");

				   	var text=jQuery("#translationPrevious").text();
					jQuery(".medium.blue").html("<a href='#'><img src='/sites/all/themes/bilbomatica/img/previousSection.png' alt='Previous'> "+text+"</a>");

		
				   	jQuery(".next").click(function() {
				   		if(jQuery(this).hasClass("segundoClick")) {
				   			//ir a la siguiente página
				   			Cookies.set('tourVuelta', '1');
				   			location.href="list-themes";
				   		} else {
				   			jQuery(".pointerUp2").remove();
				   			jQuery(".pointerUp").hide();
				   			jQuery(".tourLayer").fadeOut("fast",function() {
			   					//pongo el segundo cartel
			   					jQuery(".tourLayer").css("left","0").css("top","0").fadeIn();
								jQuery(".halfTour").css("height","250px");

					   			jQuery(".next").addClass("segundoClick");
					   			jQuery(".info5").removeClass("info5").addClass("info6");
					   			var text=jQuery("#textTranslation").text();
					   			jQuery(".tttext").text(text);

					   			//muevo el cartel a su nuevo sitio
					   			 top=jQuery("#block-system-main-menu li:eq(2) a").position().top+125;
					   			 left=jQuery("#block-system-main-menu li:eq(2) a").position().left-75;

					   			jQuery(".tourLayer").fadeIn("fast",function() {
				   					jQuery(".tourLayer").animate({
									    top: "+="+top
									  }, 300, function() {
										jQuery(".tourLayer").animate({
										    left: "+="+left
										  }, 300, function() {
										  		jQuery(".pointerUp").css("left",left+20+"px").css("top",top-85+"px").fadeIn();
										  });
									});
					   			});
				   			});
				   		}
				   	});
				});
			});
		}

		jQuery(".skip").click(function() {
			hacerDia();
		});

		jQuery("#closeTour").click(function() {
			hacerDia();
		});


	}
}
function stopTour() {
	Cookies.set('tour', '0');
}

function hacerNoche() {
	jQuery("#page").after("<div id='shadow'></div>")
	jQuery("body").css("overflow","hidden");
}
function hacerDia() {
	Cookies.set('tour', '0');
	Cookies.set('tourVuelta', '0');
	jQuery("#shadow").fadeOut("fast",function() {
		jQuery("#shadow").remove();
		jQuery(".pointerUp").remove();
		jQuery(".pointerUp2").remove();
		jQuery(".pointerDown").remove();
		jQuery(".pointerLeft").remove();
		jQuery(".pointerRight").remove();
		jQuery("body").css("overflow","auto");
		jQuery(".tourLayer").hide();
		jQuery(".skip").hide();
		jQuery(".next").hide();
	});
}


function submenu() {
	if(jQuery(window).width()>1006) {
		jQuery(".mnThemes").mouseover(function() {
			if(jQuery("#submenu").length>0) {
				jQuery("#submenu").remove();
			}
			var html="<div id='submenu'><ul>";
			var themes=Cookies.get("ckThemes");
			var cachos=themes.split("^");
			var traduccionTheme=jQuery("#traduccionTheme").text();
			for(i=0;i<cachos.length-1;i++) {
				var trozos=cachos[i].split("@");
				var nombre=trozos[0].replace(/\+/g," ");
				var url=trozos[1];
				var order=trozos[2];

				if(i==cachos.length-2) {
					html=html+"<li class='last'><div class='order'>"+traduccionTheme+" "+order+"</div><div class='nameTheme'><a href='"+url+"'>"+nombre+"</a></div></li>";
				} else {
					html=html+"<li><div class='order'>"+traduccionTheme+" "+order+"</div><div class='nameTheme'><a href='"+url+"'>"+nombre+"</a></div></li>";
				}
			}

			html=html+"</ul></div>";
			jQuery(".tabsBilbomatica").after(html);

			jQuery("#submenu li").each(function (){
				var link=jQuery("a",this).attr("href");
				jQuery(this).click(function() {
					location.href=link;
				});
			});
			
		});

		jQuery(".mnGoodPractices").mouseover(function() {
			if(jQuery("#submenu").length>0) {
				jQuery("#submenu").remove();
			}
			var html="<div id='submenu'><ul>";
			var themes=Cookies.get("ckThemes");
			var cachos=themes.split("^");
			var traduccionTheme=jQuery("#traduccionTheme").text();
			for(i=0;i<cachos.length-1;i++) {
				var trozos=cachos[i].split("@");
				var nombre=trozos[0].replace(/\+/g," ");
				var url=trozos[1];
				var order=trozos[2];
				var nidTheme=trozos[3];
				if(i==cachos.length-2) {
					html=html+"<li class='last'><div class='order'>"+traduccionTheme+" "+order+"</div><div class='nameTheme'><a href='good-practices?nid="+nidTheme+"'>"+nombre+"</a></div></li>";
				} else {
					html=html+"<li><div class='order'>"+traduccionTheme+" "+order+"</div><div class='nameTheme'><a href='good-practices?nid="+nidTheme+"'>"+nombre+"</a></div></li>";
				}
			}

			html=html+"</ul></div>";
			jQuery(".tabsBilbomatica").after(html);

			jQuery("#submenu li").each(function (){
				var link=jQuery("a",this).attr("href");
				jQuery(this).click(function() {
					location.href=link;
				});
			});
			
		});

		jQuery(".mnOtherResources").mouseover(function() {
			if(jQuery("#submenu").length>0) {
				jQuery("#submenu").remove();
			}
			var html="<div id='submenu'><ul>";
		
			var traduccionGlossary=jQuery("#traduccionGlossary").text();
			var traduccionUsefulLinks=jQuery("#traduccionUsefulLinks").text();

			html=html+"<li><div class='linksDropDown'><a href='glossary'>"+traduccionGlossary+"</a></div></li>";
			html=html+"<li class='last'><div class='linksDropDown'><a href='useful-links?m=1'>"+traduccionUsefulLinks+"</a></div></li>";

			html=html+"</ul></div>";
			jQuery(".tabsBilbomatica").after(html);

			jQuery("#submenu li").each(function (){
				var link=jQuery("a",this).attr("href");
				jQuery(this).click(function() {
					location.href=link;
				});
			});
			
		});
		setInterval('quitarSubmenu()',1000);

	}
}

function quitarSubmenu() {
	if(jQuery("#submenu").length>0) {
		if (jQuery('#submenu:hover').length==0 && jQuery(".mnThemes:hover").length==0 && jQuery(".mnGoodPractices:hover").length==0 && jQuery(".mnOtherResources:hover").length==0) {
			jQuery("#submenu").slideUp("fast",function() {
				jQuery("#submenu").remove();
			});
		}
	} 

}