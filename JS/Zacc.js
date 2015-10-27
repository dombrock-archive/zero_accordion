jQuery('.Zacc_text').hide();
jQuery('.Zacc_init').show();
jQuery(".Zacc_title").click(function(){
  jQuery(this).siblings('.Zacc_text').toggle(700);
});