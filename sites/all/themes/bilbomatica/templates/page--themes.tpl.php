<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
	setcookie("themeTitle", $node->title);
	setcookie("urlTheme",$_SERVER['REQUEST_URI']);
  setcookie("nidTheme","");
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
            'level' => 'h2',
            'class' => array('element-invisible'),
          ),
        )); ?>
      </nav>
    <?php endif; ?>

    <?php print render($page['header']); ?>

  </header>
<div class="line"></div>
  <div id="main">

    <div id="content" class="column" role="main">
      <?php print render($page['highlighted']); ?>
      <?php print $breadcrumb; ?>
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php print render($tabs); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>

      <?php //print render($page['content']);
        $imageFondo="/sites/default/files/".$node->field_theme_image['und'][0]['filename'];
         setcookie("backgroundTheme",$imageFondo);
       ?>

    
	<div class="theme-selected" style="background:url('<?php echo  $imageFondo; ?>') center bottom no-repeat #99b400">
		<div class="backT">
			<a href="list-themes" class="backThemes"><?php echo t("Back"); ?></a>
		</div>
		<?php 
    echo "<h1 class='temazo'>";
    echo t("Theme");
    echo " <span>".$node->field_order['und'][0]['value']."</span>";
    echo "</h1>";
    echo "<h1>".$node->title."</h1>"; 
    ?>
	</div>

	<div class="sections steps">
		<h2 class="h2Themes"><?php print $node->body['und'][0]['value']; ?></h2>
		<div class="containerSections">
			<?php 

       $nid="";
        if (arg(0) == 'node' && is_numeric(arg(1)))  {
          $nid = arg(1); 
          setcookie("nidTheme",$nid);
        }
  


				$size=sizeof($page['content']['system_main']['nodes'][$nid]['field_sections']['#items']);

        // echo $size;

        //  dpm($page['content']['system_main']);
      

				for($i=0;$i<=$size;$i++){
					if(isset($page['content']['system_main']['nodes'][$nid]['#node']->field_sections['und'][$i]['node']->title)) {

            $title=$page['content']['system_main']['nodes'][$nid]['#node']->field_sections['und'][$i]['node']->title;


           
						//no encuentro la url bonita así que hago una select con la url fea
						$url=$page['content']['system_main']['nodes'][$nid]['field_sections'][$i]['#href'];
						$urlFriendly="";
						$result = db_query("SELECT alias FROM url_alias WHERE source='".$url."'");
						foreach($result as $item) {
						   $urlFriendly=$item->alias;
						}

			 			echo "<div class='section'><a href='".$urlFriendly."'>".$title."</a></div>";

			 		}
				}
			?>
		</div>
		<?php
		$claseoculta = "";
		if($node->field_order['und'][0]['value'] ==1){
			$claseoculta = "oculto";
		}
		?>
		<h2><?php echo t("Do you want know more?"); ?></h2>
		<div class="goodPractices <?php print($claseoculta)?>">
			<div class="goodP"><a href="good-practices?nid=<?php echo $nid; ?>"><?php echo t("Good practices"); ?></a></div>
			<div class="keepInMind"><?php echo t("Keep in mind"); ?></div>
		</div>
		<div class="usefulLinks">
			<div class="usefulL"><a href="useful-links"><?php echo t("Useful links"); ?></a></div>
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
              'level' => 'h2',
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
});
</script>

<!-- CAPA TOUR -->
<div class="tourLayer">
  <div class="halfTour info4">
  </div>
  <div class="halfTour text">
    <div class="closeTour"><img src="/sites/all/themes/bilbomatica/img/closeTour.png" alt="Close tour" id="closeTour"></div>
    <div>
      <?php echo t("Each Theme addresses different questions and issues related to its topic.")?>
      <?php echo t("To learn more about a specific issue, you can click on the different questions.")?>
    </div>
  </div>
</div>

<!-- NEXT Y SKIP-->
<div class="skip"><?php echo t("SKIP"); ?></div>
<div class="next"><a href="#"><?php echo t("Next ››"); ?></a></div>

