jQuery('.Xacc_text').hide();
jQuery('.Xacc_init').show();
jQuery(".Xacc_title").click(function(){
  jQuery(this).siblings('.Xacc_text').toggle(700);
});