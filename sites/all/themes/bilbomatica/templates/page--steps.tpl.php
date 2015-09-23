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

if(isset($_COOKIE["nidTheme"])) {
  $nidTheme=$_COOKIE["nidTheme"];
}
if(isset($_COOKIE["backgroundTheme"])) {
  $backgroundTheme=$_COOKIE["backgroundTheme"];
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
            'level' => 'h2',
            'class' => array('element-invisible'),
          ),
        )); ?>
      </nav>
    <?php endif; ?>

    <?php 
    hide($page['header']['block_9']); //oculto el bloque de migas caseras
    print render($page['header']); 
    //dpm($page['header']);
    ?>

  </header>
<div class="line"></div>
  <div id="main">

    <div id="content" class="column" role="main">
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


      <?php

        $siguiente=0;
        $anterior=0;

        $nid="";

        $urlSiguiente="";
        $urlAnterior="";

        if (arg(0) == 'node' && is_numeric(arg(1)))  {
          $nid = arg(1); 

          //si tengo el $nidTheme tengo que averiguar cuantos steps tiene y el órden de los mismos para poner anterior y siguiente si se da el caso
          if ($nidTheme!="") {
            $arraySteps=array();
       
            $i=0;
           //SELECT field_sections_nid FROM field_data_field_sections WHERE entity_id=$nidTheme
              $result = db_query("SELECT field_sections_nid FROM field_data_field_sections WHERE entity_id=".$nidTheme);
              foreach($result as $item) {
                 $nidLesson=$item->field_sections_nid;
                 $arraySteps[$i]=$nidLesson;
                 $i++;
              }

              for ($a=0;$a<sizeof($arraySteps);$a++) {
                if($arraySteps[$a]==$nid && isset($arraySteps[$a+1])) {
                  $siguiente=1;
                  //calculo la URL del siguiente
                  $aa=$arraySteps[$a+1];
                  $sql="SELECT alias FROM url_alias WHERE source='node/".$aa."'";;
                  $resultS = db_query($sql);
                  foreach($resultS as $item) {
                    $urlSiguiente=$item->alias;
                   }
                  
                }

                if($arraySteps[$a]==$nid && isset($arraySteps[$a-1])) {
                  $anterior=1;
                  $bb=$arraySteps[$a-1];
                  $sql="SELECT alias FROM url_alias WHERE source='node/".$bb."'";;
                  $resultA = db_query($sql);
                  foreach($resultA as $item) {
                    $urlAnterior=$item->alias;
                   }
                }
              }
          }



        }
       // dpm($page['content']['system_main']['nodes'][$nid]);
      ?>



<?php
if(isset($_COOKIE["urlTheme"])) {
 $url=$_COOKIE["urlTheme"];
$title=$_COOKIE["themeTitle"];
} else {
$url="javascript:history.back()";
$title="Previous page";
}
?>

<div class="migas">
  <a href="/">Home</a> / 
  <a href="/list-themes">Themes</a> / 
  <a href="<?php echo $url; ?>"><?php echo $title; ?></a> / 
    <a class="active"><?php echo $page['content']['system_main']['nodes'][$nid]['#node']->title; ?></a>
</div>


<div class="theme-selected" style="background:url('<?php echo $backgroundTheme; ?>') center bottom no-repeat #99b400">
		<div class="backT">
      <?php
        if(isset($_COOKIE["urlTheme"])) {
          $url=$_COOKIE["urlTheme"];
          $title="";
          if(isset($_COOKIE["themeTitle"])) {
            $title=$_COOKIE["themeTitle"];
             echo "<a href='".$url."' class='backThemes'>".t("Back")."</a>";
          }
        }
     ?>
			
		</div>
		<?php 
      $nodeTheme = node_load($nidTheme);
      $order=$nodeTheme->field_order['und'][0]['value'];

        echo "<h1 class='temazo'>";
        echo t("Theme");
        echo " <span>".$order."</span>";
        echo "</h1>";
        echo "<h1>".$title."</h1>";
    ?>
	</div>

	<div class="sections steps">

  <?php 
    if ($anterior==1 || $siguiente==1) {
      echo "<div class='pagSteps'>";
        echo "<div class='medium blue'>";
            if ($anterior==1) {
              echo "<a href='".$urlAnterior."'><img alt='Previous' src='/sites/all/themes/bilbomatica/img/previousSection.png'> ".t("Previous")."</a> ";
            }
        echo"&nbsp;</div>";
        echo "<div class='medium green'>&nbsp;";
            if ($siguiente==1) {
              echo " <a href='".$urlSiguiente."'>".t("Next")." <img alt='Next section' src='/sites/all/themes/bilbomatica/img/nextSection.png'></a>";
            }
        echo"</div>";
      echo "</div>";
    }

  ?>

		<h2><?php echo $page['content']['system_main']['nodes'][$nid]['#node']->title; ?></h2>

   <?php print render($page['content']); ?>


    <?php //echo $page['content']['system_main']['nodes'][$nid]['#node']->field_text_1['und'][0]['value']; ?>
    <!--
    <div class="imageLesson">
      <?php
       /* 
       $image=$page['content']['system_main']['nodes'][$nid]['#node']->field_image_step['und'][0]['uri'];
        $img = str_replace("public://", "", $image);
        */
      ?>
      <img src="/sites/default/files/<?php echo $img; ?>" alt="<?php //echo $page['content']['system_main']['nodes'][$nid]['#node']->field_image_step['und'][0]['alt']; ?>" title="<?php echo $page['content']['system_main']['nodes'][27]['#node']->field_image_step['und'][0]['title']; ?>">

    </div>
    <?php //echo $page['content']['system_main']['nodes'][$nid]['#node']->field_text_2['und'][0]['value']; ?>
    -->
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
  jQuery("ul.menu li:eq(1) a").addClass("is-active-trail").addClass("active");
});
</script>




<!-- CAPA TOUR -->
<div class="tourLayer">
  <div class="halfTour info5">
  </div>
  <div class="halfTour text">
    <div class="closeTour"><img src="/sites/all/themes/bilbomatica/img/closeTour.png" alt="Close tour" id="closeTour"></div>
    <div class="tttext">
      <?php echo t("You can move to the next questions by clicking on the 'next' or go back on 'previous'.")?>
      <?php echo t(" The back button brings you back to the Theme 1 overview page.")?>
    </div>
  </div>
</div>

<!-- NEXT Y SKIP-->
<div class="skip"><?php echo t("SKIP"); ?></div>
<div class="next"><a href="#"><?php echo t("Next ››"); ?></a></div>

<div id="translationPrevious"><?php echo t("Previous"); ?></div>
<div id="textTranslation"><?php echo t("By clicking on 'Themes' you will go back to the page where you can select a theme."); ?></div>


