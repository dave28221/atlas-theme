<?php

get_header(); ?>

<!-- example react component -->
<div id="root"></div>
<!-- end example react component -->

<?php if (have_posts()) {
  while(have_posts()) {
    the_post(); ?>
  <?php }
}

get_footer();