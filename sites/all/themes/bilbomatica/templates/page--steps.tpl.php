
<!-- CAPA TOUR -->
<div class="tourLayer">
  <div class="halfTour info5">
  </div>
  <div class="halfTour text">
    <div class="closeTour"><img src="/sites/all/themes/bilbomatica/img/closeTour.png" alt="Close tour" id="closeTour"></div>
    <div class="tttext">
      <?php echo t("You can move between questions by clicking on ‘next’ or ‘previous’.")?> 
      <?php echo t(" The back button brings you back to the theme overview page.")?>
    </div>
  </div>
</div>

<!-- NEXT Y SKIP-->
<div class="skip"><?php echo t("SKIP"); ?></div>
<div class="next"><a href="#"><?php echo t("Next ››"); ?></a></div>

<div id="translationPrevious"><?php echo t("Previous"); ?></div>
<div id="textTranslation"><?php echo t("By clicking on 'Themes' you will go back to the theme overview page."); ?></div>


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
$nidTheme="";
$backgroundTheme="";
//Get the theme nid
$nid = $node->nid;
$sql =  "SELECT `entity_id` FROM `field_data_field_sections` WHERE `field_sections_nid` =". $nid;

$resultS = db_query($sql);
    foreach($resultS as $item) {
		$nidTheme=$item->entity_id;
	}
//Get the 
$nodetheme = node_load($nidTheme);	
//dpm($nodetheme);
$backgroundTheme = $nodetheme->field_theme_image['und'][0]['filename'];
$backgroundTheme = image_style_url('original', $backgroundTheme);

$title=$nodetheme->title;
$url  = url('node/'.$nidTheme);

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

    <?php 
    hide($page['header']['block_9']); //oculto el bloque de migas caseras
    print render($page['header']); 
    //dpm($page['header']);
    ?>

  </header>
<div class="line"></div>
  <div id="main">

    <div id="content" class="column" role="main">
      <?php //print render($page['highlighted']); ?>
      <?php //print $breadcrumb; ?>
      <a id="main-content"></a>
      <?php //print render($title_prefix); ?>
      <?php if ($title): ?>
        <h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php //print render($tabs); ?>
      <?php //print render($page['help']); ?>
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


//$title = str_replace($title,":","-");

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
        echo "<a href='".$url."' class='backThemes'>".t("Back")."</a>";
        
     ?>
			
		</div>
		<?php 
		
		  $employer = "employer";
      $pos1 = strpos($base_root,$employer);

      $worker = 'worker';
      $pos2 = strpos($base_root,$worker);

      $manager = 'manager';
      $pos3 = strpos($base_root,$manager);

      $professional = 'professional';
      $pos4 = strpos($base_root,$professional);

      if ($pos1 != false) {
        $profile=2;
      } 
      if ($pos2 != false) {
        $profile=1;
      }
      if ($pos3 != false) {
        $profile=5;
      }
      if ($pos4 != false) {
        $profile=6;
      }
			
			if ($profile==1){
				$perfil =  "<div class='perfil1T'><span class='fondoperfilW'>Worker</span></div>";
			}else if ($profile==2){
				$perfil =  "<div class='perfil2T'><span class='fondoperfilE'>Employer</span></div>";
			}else if ($profile==5){
				$perfil =  "<div class='perfil5T'><span class='fondoperfilH'>HR Manager</span></div>";
			}else if ($profile==6){
				$perfil =  "<div class='perfil6T'><span class='fondoperfilO'>OSH Professional</span></div>";
			}

			print ($perfil);
		
		
		
		
      $nodeTheme = node_load($nidTheme);
	  $order=$nodeTheme->field_order['und'][0]['value'];

      /*  echo "<div class='temazo'>";
        echo t("Theme");
        echo " <span>".$order."</span>";
        echo "</div>";
        echo "<h1>".$title."</h1>";*/
	echo "<div class='temazo'>";
    echo " <div class='temazocentrado'>".$order."</div>";
    echo "</div>";
	
	$titulo = substr ($title,3);
	
    echo "<div class='temazocentrado'>".$titulo."</div>"; 
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

   <?php 
    //  print render($page['content']); 
      
	  
      $pathBASE=str_replace("employer.","",$base_url);
      $pathBASE=str_replace("worker.","",$pathBASE);
      $pathBASE=str_replace("manager.","",$pathBASE);
      $pathBASE=str_replace("professional.","",$pathBASE);
      $pathBASE=str_replace("http://","",$pathBASE);
     // echo $pathBASE;

      /*if(count($node->field_text_1)>0) {
        $valorHTML1=$node->field_text_1['und'][0]['value'];
        $valorHTML1=str_replace("eguide.demobilbomatica.com:8887",$pathBASE,$valorHTML1);
        $valorHTML1=str_replace("eguides-staging.mainstrat.com",$pathBASE,$valorHTML1);
        $valorHTML1=str_replace("test-eguides.osha.europa.eu",$pathBASE,$valorHTML1);
        print $valorHTML1;
      }
      if(count($node->field_text_2)>0) {
        $valorHTML2=$node->field_text_2['und'][0]['value'];
        $valorHTML2=str_replace("eguide.demobilbomatica.com:8887",$pathBASE,$valorHTML2);
        $valorHTML2=str_replace("eguides-staging.mainstrat.com",$pathBASE,$valorHTML2);
        $valorHTML2=str_replace("test-eguides.osha.europa.eu",$pathBASE,$valorHTML2);
        print $valorHTML2;
      }*/
	  
	  if(count($node->field_text_1)>0) {
        
        $node->field_text_1=str_replace("eguide.demobilbomatica.com:8887",$pathBASE,$node->field_text_1);
        $node->field_text_1=str_replace("eguides-staging.mainstrat.com",$pathBASE,$node->field_text_1);
        $node->field_text_1=str_replace("test-eguides.osha.europa.eu",$pathBASE,$node->field_text_1);
        
      }
      if(count($node->field_text_2)>0) {
        $node->field_text_2=str_replace("eguide.demobilbomatica.com:8887",$pathBASE,$node->field_text_2);
        $node->field_text_2=str_replace("eguides-staging.mainstrat.com",$pathBASE,$node->field_text_2);
        $node->field_text_2=str_replace("test-eguides.osha.europa.eu",$pathBASE,$node->field_text_2);
      }
	  
	print render($page['content']);
   ?>


  <?php 
    return false;
    if ($anterior==1 || $siguiente==1) {
      echo "<div class='pagSteps' style='margin-bottom:1em'>";
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
  jQuery("ul.menu li:eq(1) a").addClass("is-active-trail").addClass("active");
  
  //Migas home
	jQuery(".migas a:eq(0)").attr("href","/en/select-your-profile");
	
  //Migas themes
	jQuery(".migas a:eq(1)").attr("href","/en/list-themes");
  //Migas theme	
  var texttheme = jQuery(".migas a:eq(2)").text()	;
  texttheme = texttheme.replace(":"," -");
  jQuery(".migas a:eq(2)").text(texttheme);
});
</script>






