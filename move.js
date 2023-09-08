<style type="text/css" id="wp-custom-csswww">
  table.st-tbl1 {
    min-width: 200px;
    min-height: 200px;
    overflow: scroll;
}

table.st-tbl1 th {
	position: sticky;
	top: 0;
}
</style>

	<script>
		jQuery(function(){
		jQuery('.entry-content a[href^=http]')
			.not('[href*="'+location.hostname+'"]')
			.attr({target:"_blank"})
		;})
	</script>

<script>
	jQuery(function(){
		jQuery('.st-btn-open').click(function(){
			jQuery(this).next('.st-slidebox').stop(true, true).slideToggle();
			jQuery(this).addClass('st-btn-open-click');
		});
	});
</script>


<script>
	jQuery(function(){
		jQuery("#toc_container:not(:has(ul ul))").addClass("only-toc");
		jQuery(".st-ac-box ul:has(.cat-item)").each(function(){
			jQuery(this).addClass("st-ac-cat");
		});
	});
</script>

<script>
	jQuery(function(){
						jQuery('.st-star').parent('.rankh4').css('padding-bottom','5px'); // スターがある場合のランキング見出し調整
	});
</script>
