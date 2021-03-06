<?php
global $base_root;
$domain=$base_root;

$host= $_SERVER["HTTP_HOST"];
$url= $_SERVER["REQUEST_URI"];
$url = "https://" . $host . $url;
$findme   = '/en/';
$pos = strpos($url, $findme);

if ($pos != false) {
	$redireccion  = str_replace('/en/','/UK_en/',$url);
	header('Location:' .$redireccion);
}

/**
 * @file
 * Returns the HTML for the basic html structure of a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728208
 */
?><!DOCTYPE html>
<!--[if IEMobile 7]><html class="iem7" <?php print $html_attributes; ?>><![endif]-->
<!--[if lte IE 6]><html class="lt-ie9 lt-ie8 lt-ie7" <?php print $html_attributes; ?>><![endif]-->
<!--[if (IE 7)&(!IEMobile)]><html class="lt-ie9 lt-ie8" <?php print $html_attributes; ?>><![endif]-->
<!--[if IE 8]><html class="lt-ie9" <?php print $html_attributes; ?>><![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)]><!--><html <?php print $html_attributes . $rdf_namespaces; ?> ><!--<![endif]-->

<head>
<link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,400italic,700&subset=latin,greek,greek-ext,cyrillic,latin-ext,cyrillic-ext' rel='stylesheet' type='text/css'>
 <!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]-->
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <meta name="description" content="Healthy Workplaces for all Ages e-Guide" />
  <?php if ($default_mobile_metatags): ?>
    <meta name="MobileOptimized" content="width">
    <meta name="HandheldFriendly" content="true">
    <meta name="viewport" content="width=device-width">
  <?php endif; ?>
  <!--[if IEMobile]><meta http-equiv="cleartype" content="on"><![endif]-->

  <?php print $styles; ?>
  <?php print $scripts; ?>
  <?php if ($add_html5_shim and !$add_respond_js): ?>
    <!--[if lt IE 9]>
    <script type="text/javascript" src="<?php print $base_path . $path_to_zen; ?>/js/html5.js"></script>
    <![endif]-->
  <?php elseif ($add_html5_shim and $add_respond_js): ?>
    <!--[if lt IE 9]>
    <script type="text/javascript" src="<?php print $base_path . $path_to_zen; ?>/js/html5-respond.js"></script>
    <![endif]-->
  <?php elseif ($add_respond_js): ?>
    <!--[if lt IE 9]>
    <script type="text/javascript" src="<?php print $base_path . $path_to_zen; ?>/js/respond.js"></script>
    <![endif]-->
  <?php endif; ?>

  <?php 
  ?>
   <link rel="stylesheet" type="text/css" href="/sites/all/themes/bilbomatica/js/tooltipster-master/css/tooltipster.css" />
   <script type="text/javascript" src="/sites/all/themes/bilbomatica/js/tooltipster-master/js/jquery.tooltipster.min.js"></script>
   <noscript>
    <style>
      #vmap {
        display:none !important;
      }
      #listText ul li ul {
        position:relative !important;
      }
      .arrow, .MapSC,.ListSC {
        display:none !important;
      }
    </style>
   </noscript>
     <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
  <?php if ($skip_link_text && $skip_link_anchor): ?>
    <p id="skip-link">
      <a href="#<?php print $skip_link_anchor; ?>" class="element-invisible element-focusable"><?php print $skip_link_text; ?></a>
    </p>
  <?php endif; ?>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>

<div id="traduccionTheme"><?php echo t("Theme"); ?></div>
<div id="traduccionGlossary"><?php echo t("Glossary"); ?></div>
<div id="traduccionUsefulLinks"><?php echo t("Useful links"); ?></div>
  
  <div id="domain"><?php echo $domain; ?></div>
</body>
</html>


