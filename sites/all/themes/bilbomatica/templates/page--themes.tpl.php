<?php
  global $base_url;
  global $base_root;
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>

<div id="page">
  <header class="header" id="header" role="banner">

    <?php if ($logo): ?>
      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="header__logo" id="logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="header__logo-image" /></a>
    <?php endif; ?>

    <?php if ($site_name || $site_slogan): ?>
      <div class="header__name-and-slogan" id="name-and-slogan">
        <?php if ($site_name): ?>
          <h1 class="header__site-name" id="site-name">
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" class="header__site-link" rel="home"><span><?php print $site_name; ?></span></a>
          </h1>
        <?php endif; ?>

        <?php if ($site_slogan): ?>
          <div class="header__site-slogan" id="site-slogan"><?php print $site_slogan; ?></div>
        <?php endif; ?>
      </div>
    <?php else: ?>
    <h1 class="hidden"><?php print $node->title; ?></h1>
    <?php endif; ?>

    <?php if ($secondary_menu): ?>
      <nav class="header__secondary-menu" id="secondary-menu" role="navigation">
        <?php print theme('links__system_secondary_menu', array(
          'links' => $secondary_menu,
          'attributes' => array(
            'class' => array('links', 'inline', 'clearfix'),
          ),
          'heading' => array(
            'text' => $secondary_menu_heading,
            'level' => 'p',
            'class' => array('element-invisible'),
          ),
        )); ?>
      </nav>
    <?php endif; ?>

    <?php print render($page['header']); ?>

  </header>
<div class="line"></div>
  <div class="content-message">
    <div class="messageInfo">
      <?php echo t("Dear visitor, please note that we are no longer actively maintaining this information, so don't be surprised if you find some broken links or if some of the information is out of date.");?>
    </div>
  </div>
  <div id="main">

    <div id="content" class="column" role="main">
      <?php print render($page['highlighted']); ?>
      <?php print $breadcrumb; ?>
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
    
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php print render($tabs); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>

      <?php //print render($page['content']);
        $imageFondo="/sites/default/files/".$node->field_theme_image['und'][0]['filename'];
    
		if ($node->field_theme_image['und'][0]['filename']=="workplace_fit_for_all.png"){
		?>
				<div class="theme-selected" style="background:url('<?php echo  $imageFondo; ?>') center bottom -5em no-repeat #99b400">
		<?php
		}
		else
		{?>
				<div class="theme-selected" style="background:url('<?php echo  $imageFondo; ?>') center bottom no-repeat #99b400">
		<?php
		}
       ?>
		<div class="backT">
			<a href="list-themes" class="backThemes"><?php echo t("Back"); ?></a>
			</div>

		<?php

     $profile=$_SESSION['profile'];
			
			if ($profile==1){
				$perfil =  "<div class='perfil1T'><span class='fondoperfilW'>".t('Worker')."</span></div>";
			}else if ($profile==2){
				$perfil =  "<div class='perfil2T'><span class='fondoperfilE'>".t('Employer')."</span></div>";
			}else if ($profile==5){
				$perfil =  "<div class='perfil5T'><span class='fondoperfilH'>".t('HR Manager')."</span></div>";
			}else if ($profile==6){
				$perfil =  "<div class='perfil6T'><span class='fondoperfilO'>".t('OSH Professional')."</span></div>";
			}

			print ($perfil);
			
    echo "<div class='temazo'>";
    //echo t("Theme");
    echo " <div class='temazocentrado'>".$node->field_order['und'][0]['value']."</div>";
    echo "</div>";
	//dpm($node);
	$titulo = $node->title;
	$titulo = substr ($titulo,3);
	global $language ;
	$lang_name = $language->language ;
		
    echo "<div class='temazocentrado'>".$titulo."</div>"; 
    ?>
	</div>

	<div class="sections steps">
		<div class="h2Themes"><?php print $node->body[$lang_name][0]['value']; ?></div>
		<div class="containerSections">
			<?php 
		
        $nid="";
        if (arg(0) == 'node' && is_numeric(arg(1)))  {
          $nid = arg(1); 
          
        }

				$size=sizeof($page['content']['system_main']['nodes'][$nid]['field_sections']['#items']);
				//  dpm($page['content']['system_main']);
				
				for($i=0;$i<=$size;$i++){
					if(isset($page['content']['system_main']['nodes'][$nid]['#node']->field_sections['und'][$i]['node']->title)) {

						$title=$page['content']['system_main']['nodes'][$nid]['#node']->field_sections['und'][$i]['node']->title;
						$nidpath = $page['content']['system_main']['nodes'][$nid]['field_sections']['#items'][$i]['nid'];
						$urlFriendly  = drupal_get_path_alias("node/".$nidpath, $lang_name);
				
			 			echo "<div class='section'><a href='".$urlFriendly."'>".$title."</a></div>";

			 		}
				}
			?>
		</div>
		<?php
		$hrefGoodPrac = drupal_get_path_alias("node/53", $lang_name);
		$hrefUseful = drupal_get_path_alias("node/69", $lang_name);
		
		
		$claseoculta = "";
		if($node->field_order['und'][0]['value'] ==1){
			$claseoculta = "oculto";
		}
		?>
		<h2><?php echo t("Do you want to know more?"); ?></h2>
		<div class="goodPractices <?php print($claseoculta)?>">
			<div class="goodP"><a href="<?php print($hrefGoodPrac);?>?nid=<?php echo $nid; ?>"><?php echo t("Good practices"); ?></a></div>
			<div class="keepInMind"><?php echo t("Keep in mind"); ?></div>
		</div>
		<div class="usefulLinks">
			<div class="usefulL"><a href="<?php print($hrefUseful);?>"><?php echo t("Useful links"); ?></a></div>
			<div class="discover"><?php echo t("Discover"); ?></div>
		</div>
	</div>

      <?php print $feed_icons; ?>
    </div>

    <div id="navigation">

      <?php if ($main_menu): ?>
        <nav id="main-menu" role="navigation" tabindex="-1">
          <?php
          // This code snippet is hard to modify. We recommend turning off the
          // "Main menu" on your sub-theme's settings form, deleting this PHP
          // code block, and, instead, using the "Menu block" module.
          // @see https://drupal.org/project/menu_block
          print theme('links__system_main_menu', array(
            'links' => $main_menu,
            'attributes' => array(
              'class' => array('links', 'inline', 'clearfix'),
            ),
            'heading' => array(
              'text' => t('Main menu'),
              'level' => 'p',
              'class' => array('element-invisible'),
            ),
          )); ?>
        </nav>
      <?php endif; ?>

      <?php print render($page['navigation']); ?>

    </div>

    <?php
      // Render the sidebars to see if there's anything in them.
      $sidebar_first  = render($page['sidebar_first']);
      $sidebar_second = render($page['sidebar_second']);
    ?>

    <?php if ($sidebar_first || $sidebar_second): ?>
      <aside class="sidebars">
        <?php print $sidebar_first; ?>
        <?php print $sidebar_second; ?>
      </aside>
    <?php endif; ?>

  </div>

  <?php print render($page['footer']); ?>

</div>

<?php print render($page['bottom']); ?>

<script>
jQuery(document).ready(function() {
	
	/*numlexicon = jQuery(".lexicon-termthemes").length;
    
	for(i = 0; i < numlexicon; i++) { 
		jQuery("a.lexicon-termthemes:eq(0)").after(jQuery("a.lexicon-termthemes:eq(0)").text());
		jQuery("a.lexicon-termthemes:eq(0)").remove();
	}*/



	jQuery(".section").each(function() {
		jQuery(this).css("cursor","pointer");
		jQuery(this).click(function() {
			var link=jQuery("a",this).attr("href");
			location.href=link;
			//jQuery("a",this).trigger("click");  too much recursion...
		});
	});

	jQuery(".goodPractices").css("cursor","pointer").click(function() {
		var link=jQuery(".goodPractices a:eq(0)").attr("href");
		location.href=link;
		//jQuery(".goodPractices a").trigger("click");  too much recursion...
	});

	jQuery(".usefulLinks").css("cursor","pointer").click(function() {
		var link=jQuery(".usefulLinks a:eq(0)").attr("href");
		location.href=link;
	});

	jQuery("ul.menu li:eq(0) a").addClass("is-active-trail").addClass("active");
	
	//Migas home
	jQuery(".migas a:eq(0)").attr("href","/en/select-your-profile");
	
	

	
});
</script>

<!-- CAPA TOUR -->
<div class="tourLayer">
  <div class="halfTour info4">
  </div>
  <div class="halfTour text">
    <div class="closeTour"><img src="/sites/all/themes/bilbomatica/img/closeTour.png" alt="Close tour" id="closeTour"></div>
    <div>
      <?php echo t("Each theme addresses different questions and issues related to its topic. ")?>
      <?php echo t("Click on the menu items to learn more about a specific issue.")?>
    </div>
  </div>
</div>

<!-- NEXT Y SKIP-->
<div class="skip"><?php echo t("SKIP"); ?></div>
<div class="next"><a href="#"><?php echo t("Next ››"); ?></a></div>

