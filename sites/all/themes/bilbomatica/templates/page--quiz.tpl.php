<?php

/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */

$nidTheme="";
$backgroundTheme="";
$nm=0;

if(isset($_COOKIE["nidTheme"])) {
  $nidTheme=$_COOKIE["nidTheme"];
}
if(isset($_COOKIE["backgroundTheme"])) {
  $backgroundTheme=$_COOKIE["backgroundTheme"];
  
}


if(isset($_GET["mn"])) {
  $nm=1;
 setcookie("nidTheme","");
 setcookie("backgroundTheme","");
}


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
            'level' => 'p',
            'class' => array('element-invisible'),
          ),
        )); ?>
      </nav>
    <?php endif; ?>

    <?php print render($page['header']); ?>

  </header>
<div class="line"></div>
  <div id="main">

    <div id="content" class="column test" role="main">
      <?php print render($page['highlighted']); ?>
      <?php //print $breadcrumb; ?>
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

    <div class="migas">
	<a href="../../select-your-profile">Home</a> / 
    <a class="active"><?php echo  t("Quiz"); ?></a>
	</div>
	
	
	<?php

    /*if($nm==0 && $backgroundTheme!="") {
      echo "<div class='theme-selected 2' style='background:url(".$domain."".$backgroundTheme.") center bottom no-repeat #99b400'>";
    } else {*/
	
      //echo "<div class='theme-selected 1' style='background:url(".$domain."".$backgroundTheme.") center 95% no-repeat #99b400'>";
	  
	
	  
	  
	  echo "<div class='theme-selected 1' style='background:url(/sites/all/themes/bilbomatica/img/bckQuiz.png) center 95% no-repeat #99b400'>";
	  
    /*}*/
    ?>
		<div class="backT">
      <?php
     /*  if($nm==0 && $backgroundTheme!="") {
          if(isset($_COOKIE["urlTheme"])) {
            $url=$_COOKIE["urlTheme"];
            $title="";
            if(isset($_COOKIE["themeTitle"])) {
              $title=$_COOKIE["themeTitle"];
               echo "<a href='".$url."' class='backThemes'>".t("Back")."</a>";
            }
          }
        } else {
          //echo "<a href='javascript:history.back()' class='backThemes'>".t("Back")."</a>";
        }*/
     ?>
      
    </div>
    <?php 
      $nodeTheme = node_load($nidTheme);
      $order=$nodeTheme->field_order['und'][0]['value'];
	  echo "<h1 class='temazoQuiz'>".$title."</h1>";
   /*   if($nm==0 && $backgroundTheme!="") {
          echo "<h1 class='temazo'>";
          echo t("Theme");
          echo " <span>".$order."</span>";
          echo "</h1>";
          echo "<h1>".$title."</h1>";
        } else {
           echo "<h1 class='temazo'>".$title."</h1>";
        }
		*/
    ?>
		
	</div>

	<div class="sections steps quiz">
		<!--<h2 class="h2Themes"><?php echo t("Quiz"); ?>:</h2>-->
			 <?php 
          print render($page['content']);
        ?>
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
	
	jQuery("#block-block-9").css("display","none");
	
});
</script>

