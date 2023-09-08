		jQuery(function(){
		jQuery('.entry-content a[href^=http]')
			.not('[href*="'+location.hostname+'"]')
			.attr({target:"_blank"})
		;})
	jQuery(function(){
		jQuery('.st-btn-open').click(function(){
			jQuery(this).next('.st-slidebox').stop(true, true).slideToggle();
			jQuery(this).addClass('st-btn-open-click');
		});
	});

    jQuery(function(){
		jQuery("#toc_container:not(:has(ul ul))").addClass("only-toc");
		jQuery(".st-ac-box ul:has(.cat-item)").each(function(){
			jQuery(this).addClass("st-ac-cat");
		});
	});
	jQuery(function(){
						jQuery('.st-star').parent('.rankh4').css('padding-bottom','5px'); // スターがある場合のランキング見出し調整
	});
