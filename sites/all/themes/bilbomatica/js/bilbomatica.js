var menuR=0;
jQuery(document).ready(function() {

	if (jQuery(".searchField").length >0){
		var miga = jQuery("#block-block-9").html();
		miga = miga.replace("/ search","");
		jQuery("#block-block-9").html(miga);
	}

	if (jQuery(".BarStartTour").length > 0){
		if(jQuery(window).width()<1007) {
			jQuery("#containerTools").attr("style","padding-top:1.5em !important");
		}
	}

	if (jQuery(".lexicon-links").length >0){
		
		glosaryTxt= jQuery(".lexicon-links").html();
		glosaryTxt = glosaryTxt.replace("a |","|");
		glosaryTxt = glosaryTxt.replace("| b |","|");
		glosaryTxt = glosaryTxt.replace("| c |","|");
		glosaryTxt = glosaryTxt.replace("| d |","|");
		glosaryTxt = glosaryTxt.replace("| e |","|");
		glosaryTxt = glosaryTxt.replace("| f |","|");
		glosaryTxt = glosaryTxt.replace("| g |","|");
		glosaryTxt = glosaryTxt.replace("| h |","|");
		glosaryTxt = glosaryTxt.replace("| i |","|");
		glosaryTxt = glosaryTxt.replace("| j |","|");
		glosaryTxt = glosaryTxt.replace("| k |","|");
		glosaryTxt = glosaryTxt.replace("| l |","|");
		glosaryTxt = glosaryTxt.replace("| m |","|");
		glosaryTxt = glosaryTxt.replace("| n |","|");
		glosaryTxt = glosaryTxt.replace("| o |","|");
		glosaryTxt = glosaryTxt.replace("| p |","|");
		glosaryTxt = glosaryTxt.replace("| q |","|");
		glosaryTxt = glosaryTxt.replace("| r |","|");
		glosaryTxt = glosaryTxt.replace("| s |","|");
		glosaryTxt = glosaryTxt.replace("| t |","|");
		glosaryTxt = glosaryTxt.replace("| u |","|");
		glosaryTxt = glosaryTxt.replace("| v |","|");
		glosaryTxt = glosaryTxt.replace("| w |","|");
		glosaryTxt = glosaryTxt.replace("| x |","|");
		glosaryTxt = glosaryTxt.replace("| y |","|");
		glosaryTxt = glosaryTxt.replace("| z","|");
		glosaryTxt = glosaryTxt.replace("| |","|");
		  
	    //alert(glosaryTxt);
		jQuery(".lexicon-links").html(glosaryTxt);
		
	}


	//deshabilito el link mnOtherResources
	if(jQuery(window).width()>1006) {
		jQuery(".mnOtherResources").removeAttr("href");
	}
  //jQuery(".categoriesUsefulLinks a:eq(0)").css("display","hidden");

	jQuery.getScript(location.protocol + "//" + location.host + '/sites/all/themes/bilbomatica/js/js.cookie.js', function() { 
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
	glossaryOrderDivs();
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
	abrirMoreinfo();
	abrirReadMore();
	scrollpopup();
	themesSizes();
	jQuery(window).load(function(){
		themesSizes(); //a veces en pantallas ultrapequeñas no sale y así forzamos
	});
	
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
		themesSizes();
		setTimeout("themesSizes()",1000);
	});

	jQuery(window).load(function() {
		heightGoodPractices();
	});
	jQuery(document).ajaxComplete(function() {
		usefulLinks();
	});
});

function icoHome() {

	var htmlHome=jQuery("#block-superfish-1 a.mnHome").text();
	var domain=jQuery("#domain").text();
	//alert(htmlHome);
	if(jQuery(window).width()>1006) {
		
		jQuery("#block-superfish-1 a.mnHome").html("<img src='"+domain+"/sites/all/themes/bilbomatica/img/homeIco.png' alt='Home' accesskey='1'>");
		jQuery("#block-superfish-2 a.mnHome").html("<img src='"+domain+"/sites/all/themes/bilbomatica/img/homeIco.png' alt='Home' accesskey='1'>");
	} else {
		jQuery("#block-superfish-2 a:eq(1)").html("<img src='/sites/all/themes/bilbomatica/img/homeIco.png' alt='Home' accesskey='1'>");	
	}

	if(domain.indexOf("worker")!=1) {
		domain=domain.replace("worker.","");
	}
	if(domain.indexOf("employer")!=1) {
		domain=domain.replace("employer.","");
	}
	if(domain.indexOf("manager")!=1) {
		domain=domain.replace("manager.","");
	}
	if(domain.indexOf("professional")!=1) {
		domain=domain.replace("professional.","");
	}
	var linkHome=domain+jQuery(".mnHome:eq(0)").attr("href");

	jQuery(".mnHome").each(function() {
		jQuery(this).attr("href",linkHome);
	});

	jQuery("nav.mean-nav li:eq(0) a").attr("href",linkHome);
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

		/*lexicon-mark-term.tpl.php-> Ahí hago la magia*/

		jQuery(this).click(function () {
			removePopUps();
			title=jQuery(this).attr("data-titleBM");
			jQuery(this).addClass("poparizado");
			var html="<div class='popup'><div class='closePop'><img src='/sites/all/themes/bilbomatica/img/closeGlossary.png'></div><div class='contentPop'>"+title+"</div></div>";
			jQuery(this).before(html);
			//positioning

			//tengo el problema que si el texto sale en 2 lineas la cosa sale mal. Me hago un algoritmo para que detecte si ocupa más de una línea

			var textoSel=jQuery(this).text();
			var topPalabra=0;
			var variasLineas=0;

			var cachos=jQuery.trim(textoSel).split(" ");
			if(cachos.length>0) {
				var txtTemporal="";
				for(i=0;i<cachos.length;i++) {
					txtTemporal=txtTemporal+"<span>"+cachos[i]+"</span> ";
				}
				jQuery(this).html(txtTemporal);

				var contador=0;
				jQuery("span",this).each(function() {
					if(contador==0) {
						topPalabra=jQuery(this).position().top;
					} else {
						if(topPalabra!=jQuery(this).position().top) {
							variasLineas=1;
						}
					}
					contador++;
				});
			}

			if(variasLineas==0) {
				jQuery(this).html(textoSel);
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
			} else {
				var widthWord=jQuery("span:eq(0)",this).width()/2;
				var widthBox=jQuery(".popup").width()/2;
				var leftWord=jQuery("span:eq(0)",this).position().left;
				var leftPut=(leftWord+widthWord)-(widthBox)+"px";
				jQuery(".popup").css("left",leftPut); //center

				var topWord=jQuery("span:eq(0)",this).position().top;
				var heightWord=jQuery("span:eq(0)",this).height();
				var heightBox=jQuery(".popup").height();
				var topPut=topWord-heightBox-heightWord+"px";
				jQuery(".popup").css("top",topPut); //center
				jQuery(this).html(textoSel);
			}

			jQuery(".closePop").click(function () {
				removePopUps();
				jQuery(".poparizado").removeClass("poparizado");
			});


			jQuery(".popup").each(function() {
				jQuery(this).draggable().css("cursor","move"); //lo hago dragabble porque si es muy grande no se puede ver el icono de cerrar, así la mueve y puede cerrarla.
			});
		});	
		//jQuery(this).addClass("tooltip"); //descartado por errores cuando las palabras salen en varias líneas

	});

		/*
		jQuery('.tooltip').tooltipster({
		   animation: 'fade',
		   delay: 100,
		   theme: 'tooltipster-default',
		   touchDevices: true,
		   trigger: 'click'
		});
		*/


	//Hago que las pestañas del buscador y a-z filter también sean linkables
	if(jQuery(".searchGlossary a").length>0) {
		jQuery(".searchGlossary").click(function() {
			location.href=jQuery(".searchGlossary a").attr("href");
		});
	}
	if(jQuery(".filterGlossary a").length>0) {
		jQuery(".filterGlossary").click(function() {
			location.href=jQuery(".filterGlossary a").attr("href");
		});
	}
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
	var body = jQuery("html, body");
		body.stop().animate({scrollTop:0}, '300', 'swing', function() { 
	});
	var alturaCapa=0;
	if(jQuery("#moreInfoDiv").length>0) {
		if(jQuery(window).width()>1006) {

			jQuery("#page").after("<div id='shadow'></div>");
			jQuery("#shadow").css("height",jQuery(window).height());
			jQuery("#shadow").css("width",jQuery(window).width());
		}
		
		var top=(jQuery(window).height()/2)-(jQuery("#moreInfoDiv").height()/2)-50;
		var left=(jQuery("#page").width()/2)-(jQuery("#moreInfoDiv").width()/2); 
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

			//jQuery("#listText").removeAttr("style");
		});
	});
}



function showSources(texto) {
	var scrollTop=jQuery(window).scrollTop();
	var textopintar  = jQuery("#source"+texto).html();
	jQuery("div").remove(".sourcetext");
	jQuery (".preFooter.did ul").before("<div class='sourcetext'>"+textopintar+"</div>");
	jQuery (".preFooter.did ul").hide();

	if(jQuery(window).width()>1006) {
		jQuery("#page").after("<div id='shadow'></div>")
		jQuery("body").css("overflow","hidden");
	} else {
		jQuery("body").css("overflow-y","auto").css("overflow-x","hidden");
		jQuery(".view-did-you-know").hide();
	}
	jQuery(".preFooter.did").slideDown();

	var top=(jQuery(window).height()/2)-(jQuery(".preFooter.did").height()/2)-350;
	var left=(jQuery("#page").width()/2)-(jQuery(".preFooter.did").width()/2);
	jQuery(".preFooter.did").css("top",top+"px").css("left",left+"px");

	jQuery(".closeMoreInfo").click(function() {
		jQuery(".preFooter.did").slideUp("fast",function() {
			jQuery("#shadow").remove();
			jQuery("body").css("overflow","auto");
			jQuery(".view-did-you-know").show();
			jQuery(window).scrollTop(scrollTop);
		});
	});
}

function viewSources(source) {

	/*if(jQuery(".view-did-you-know").length>0) {
		var textButton=jQuery(".contentDid strong:eq(0)").text();
		jQuery(".view-did-you-know .views-row:eq(0)").before("<div class='buttonViewSource'><a href='#' onclick='showSources()' class='viewSource'>"+textButton+"</a></div>");
	}
	jQuery(".preFooter.did").hide();*/
}

function fontSize() {

	jQuery(".bigSize a").click(function() {	
		jQuery("body").css("font-size","120%");
		jQuery(".normalSize").removeClass("selected");
		jQuery(".bigSize").addClass("selected");

		if(jQuery(".view-did-you-know").length>0) {
			//didYouKnowHeight();
			jQuery(".sourceLink").addClass("sourceLinkLG");
		}
			themesSizes();
			jQuery("#containerTools .tabs").css("min-width","20em");
			jQuery("#block-block-4 #profileDiv").css("width","81%");
	});

	jQuery(".normalSize a").click(function() {
		jQuery("body").css("font-size","100%");
		jQuery(".bigSize").removeClass("selected");
		jQuery(".normalSize").addClass("selected");
		
		if(jQuery(".view-did-you-know").length>0) {
			//didYouKnowHeight();
			jQuery(".sourceLink").removeClass("sourceLinkLG");
		}
		themesSizes();
		jQuery("#containerTools .tabs").css("min-width","22em");
		jQuery("#block-block-4 #profileDiv").css("width","70%");
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
			var anchoMenosUno=(ancho/2)-3;
			jQuery(".share",this).width(anchoMenosUno).css("border-right","1px solid #FFF");
			jQuery(".readMore",this).width(ancho/2);
			
			var link=jQuery("a",this).attr("href");
			jQuery(".readMore",this).click(function() {
				location.href=link;
			});

			//se muestran el share y read more solo al pasar por encima
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
	
		//direfencio si está en la versión Mobile o desktop
		//lan = jQuery(".LanHid").text();
		tourhref = jQuery("#search-api-page-search-form-pruebas").attr('action');
		if(jQuery(window).width()>1006) {
			Cookies.set('tour', '1');
			location.href=location.protocol + "//" + location.host + tourhref;
		} else {
			tourMobile();
		}
	});
}
function startTour() {
	if(Cookies.get('tour')=="1") {
		/*dependiendo de la página en la que esté el usuario hay que mostrarle una capa distinta. 
		Esta capa estará contenida en cada página; en la home en el bloque del mapa*/
		//por el momento muestro la capa oscura

		hacerNoche();
		
		//SELECT YOUR PROFILE		
		if(jQuery(".butonTour").length>0) {
			jQuery(".tourLayer").css("left","0").css("top","0").fadeIn();
			jQuery(".halfTour").css("height","300px");

			var top=jQuery(".subStartTour").position().top+25;
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
				});
			});
		}

		//SELECT THEME
		
		if(jQuery(".section-list-themes").length>0) {
		
			jQuery(".tourLayer").css("left","0").css("top","0").fadeIn();
			jQuery(".halfTour").css("height","290px");
			
			if (Cookies.get('tourVuelta')==0) {
				
				var top=jQuery(".containerThemes").position().top-15;
				var left=jQuery(".numero:eq(0)").position().left+96;
				
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
					   		//location.href=jQuery(".views-field-title-1:eq(0) a").attr("href");
							location.href=jQuery(".views-field-php-3:eq(0) a").attr("href");
							
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
				
				var left = jQuery("#searchField").position().left-jQuery(".tourLayer").width()+jQuery("ul.tabs li:eq(0)").width()+70;
				
				var ventana_ancho = jQuery(window).width();
				if(ventana_ancho>1600){
					var left = ventana_ancho -  jQuery("#searchField").position().left + 150;
				}
				
				var top=jQuery(".profileTab").position().top+30;
				
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
				jQuery(".halfTour").css("height","413px");
				var txt=jQuery("#traduccion2").text();
				jQuery(".halfTour.text div:eq(1)").text(txt);

				jQuery(".info3").removeClass("info3").addClass("info8");

				var left=jQuery("#block-superfish-1 ul.menu").position().left+150;
				var top=jQuery(".profileTab").position().top+40;
				
				var ventana_ancho = jQuery(window).width();
				if(ventana_ancho>1200){
					sobra = (ventana_ancho - 1366)/2;
					var left=jQuery("#block-superfish-1 ul.menu").position().left+150 - sobra;
				}
				
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

				var left=jQuery(".aboutUs").position().left-jQuery(".tourLayer").width()+120;
				var top=jQuery(".aboutUs").position().top-jQuery(".tourLayer").height()-120;
				
				var ventana_ancho = jQuery(window).width();
				if(ventana_ancho>1200){
					sobra = (ventana_ancho - 1366)/2;
					var left=jQuery(".aboutUs").position().left-jQuery(".tourLayer").width()+150 - sobra;
				}
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
				jQuery(".halfTour").css("height","340px");
				var txt=jQuery("#traduccion4").html();
				jQuery(".halfTour.text div:eq(1)").html(txt);

				jQuery(".info3").removeClass("info3").addClass("info10");

				var left=jQuery("ul.menu").position().left-65;
				var top=jQuery("ul.menu").position().top+25;
				
				var ventana_ancho = jQuery(window).width();
				if(ventana_ancho>1200){
					sobra = (ventana_ancho - 1366)/2;
					var left=jQuery("ul.menu").position().left-40 - sobra;
				}
				
				
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
						   		hacerDia("cerrar");
					   		});
					});
				});
			}
		}


		//THEME
		if(jQuery(".node-type-themes").length>0) {
			jQuery(".tourLayer").css("left","0").css("top","0").fadeIn();
			jQuery(".halfTour").css("height","260px");

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
					
					
					var ventana_ancho = jQuery(window).width();
					
					if(ventana_ancho>1600){
						derecha = (ventana_ancho - 1400)/2;
						jQuery(".skip").css("right",derecha+"px");	
						jQuery(".next").css("right",derecha+"px");
					}
					
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
					
					var ventana_ancho = jQuery(window).width();
					if(ventana_ancho>1600){
						derecha = (ventana_ancho - 1400)/2;
						jQuery(".skip").css("right",derecha+"px");	
						jQuery(".next").css("right",derecha+"px");
					}
		
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
					   			 top=jQuery("#block-superfish-1 li:eq(2) a").position().top+125;
					   			 left=jQuery("#block-superfish-1 li:eq(2)").position().left-75;

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
	jQuery("#shadow").css("height",jQuery(window).height());
	jQuery("#shadow").css("width",jQuery(window).width());
}
function hacerDia(cerrar) {

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
		if(cerrar=="cerrar") {
			location.href=jQuery(".mnHome:eq(0)").attr("href");
		}
	});
}


function submenu() {
	if(jQuery(window).width()>1006) {
		//17 diciembre RLR quitar los submenus
		return false;
		jQuery("#block-system-main-menu .mnThemes").mouseover(function() {
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
		if (jQuery('#submenu:hover').length==0 && jQuery("#block-system-main-menu .mnThemes:hover").length==0 && jQuery(".mnGoodPractices:hover").length==0 && jQuery(".mnOtherResources:hover").length==0) {
			jQuery("#submenu").slideUp("fast",function() {
				jQuery("#submenu").remove();
			});
		}
	} 

}
function tourMobile() {
	jQuery(".containerThemes").hide();
	jQuery("#footer").hide();
	jQuery("#header").hide();
	jQuery(".region-prefooter").hide();
	jQuery("body").attr("style","background:#4d6179 !important");
    
	jQuery(".mobileTourLayer").fadeIn("fast");
	jQuery(".mobileTourLayer .page1").fadeIn("fast");

	skipear();
	nextear();
	startear();
}

function skipear() {
	jQuery(".mobileTourLayer .skipMobile").each(function() {
		jQuery(this).click(function() {
			jQuery(".mobileTourLayer .page").fadeOut("fast");
			jQuery(".mobileTourLayer").fadeOut("fast",function() {
				jQuery(".containerThemes").show();
				jQuery("#footer").show();
				jQuery("#header").show();
				jQuery(".region-prefooter").show();
				jQuery("body").removeAttr("style");
			});
		});
	});
}

function nextear() {
	jQuery(".mobileTourLayer .nextMobile").each(function(contador) {
		jQuery(this).click(function() {
			var capa=contador+1;
			jQuery(".mobileTourLayer .page:eq("+contador+")").slideUp("fast",function() {
				jQuery(".mobileTourLayer .page:eq("+capa+")").slideDown("fast");
			});
		});
	});
}

function startear() {
	jQuery(".mobileTourLayer .start").click(function() {
		jQuery(".mobileTourLayer .page").fadeOut("fast");
		jQuery(".mobileTourLayer").fadeOut("fast",function() {
			jQuery(".containerThemes").show();
			jQuery("#footer").show();
			jQuery("#header").show();
			jQuery(".region-prefooter").show();
			jQuery("body").removeAttr("style");
		});
	});
}

function abrirReadMore(){
	
	jQuery(".readmoretheme").each(function() {
		enlace= jQuery(".readmoretheme:eq(0)").parent().parent().prev().prev().prev().find("a").attr('href');
		//this.attr('href') = enlace;
	});

}


function abrirMoreinfo(){
	jQuery(".moreinfotheme").each(function() {  
	  jQuery(this).click(function() {	  
		jQuery(this).parent().parent().prev().find(".morethemeinfono").show();
	  });
	});

	jQuery(".menos").each(function() {	  
		jQuery(this).click(function() {
			jQuery(this).parent().hide();
		});  
	});
}

function scrollpopup(){	
	jQuery(document).scroll(function() {
			
		//	var top=(jQuery(window).height()/2)-(jQuery(".morethemeinfo").height()/2)-50;
		//	var left=(jQuery(window).width()/2)-(jQuery(".morethemeinfo").width()/2);
		//	jQuery(".morethemeinfo").css("top",top+"px").css("left",left+"px");
	});
}

function glossaryOrderDivs() {
	if(jQuery(".search-api-page-results").length>0) {
		jQuery("li.search-result").each(function() {
			var title=jQuery.trim(jQuery("h3",this).text()).toLowerCase();
			jQuery(this).attr("data-orden",title);
		});
	}

	var divList = jQuery("li.search-result");
	divList.sort(function(a, b){
	    return jQuery(a).data("orden")>jQuery(b).data("orden");
	});
	jQuery(".search-api-page-results").html(divList);

	jQuery("li.search-result").each(function() {
		jQuery(this).css("margin-bottom","1em");
	});
}




function themesSizes() {
	if(jQuery(".view-themes").length>0) {
		var anchoCaja=jQuery(".view-themes .views-row").width()-42; //-40 es el tamaño del símbolo + más 2 px de separación
		jQuery(".readmoretheme").css("display","block").css("width",anchoCaja+"px");

		jQuery(".view-themes .views-row").each(function() {
			var topBotones=jQuery(this).position().top+jQuery(this).height()-40; //40 son los px de altura de los botones
			jQuery(".field-content .moreinfotheme",this).css("top",topBotones+"px");
			jQuery(".field-content .readmoretheme",this).css("top",topBotones+"px");


			var leftBotonMas=jQuery(".field-content .readmoretheme",this).position().left+jQuery(".field-content .readmoretheme",this).width()+2;
			jQuery(".field-content .moreinfotheme",this).css("left",leftBotonMas+"px");

			//adapto el tamaño de las ventanas de más info
			var ancho=jQuery(this).width()-40; //40 de los padding
			var alto=jQuery(this).height()-40;
			jQuery(".morethemeinfono",this).css("width",ancho+"px");
			jQuery(".morethemeinfono",this).css("height",alto+"px");

			var topPonerCaja=jQuery(this).position().top;
			jQuery(".morethemeinfono",this).css("top",topPonerCaja+"px");
			

			jQuery(".morethemeinfono .menos",this).css("top",alto+5+"px");

			
		});
	}
}

jQuery(document).ready(function() {
    var isshow = localStorage.getItem('isshow');
    if (isshow == null) {
        localStorage.setItem('isshow', 1);
		jQuery( ".content-message" ).show();
    }

    //Move the message if the header banner exist
	if (jQuery("#block-block-1")[0]){
	     jQuery( ".content-message" ).addClass('fix-padding');
		 jQuery('.content-message').appendTo('#moreInfo');
	}

	if (jQuery(".highLight .containerC")[0]){
		 jQuery( ".content-message" ).addClass('fix-padding');
		 jQuery('.content-message').appendTo('#moreInfo');
	}

	if (jQuery(".glossaryB")[0]){
		 jQuery('.content-message').insertAfter('.migas');
	}
	
   	

});