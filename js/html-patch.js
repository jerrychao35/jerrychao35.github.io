!function(i){function n(){var n=i(".article-summary .thumbnail").width(),a=245*n/520;i(".article-summary .thumbnail").height(a)}function a(){var n=i(".nav-container-inner").width()-10,a=i("#main-nav").width(),t=i("#sub-nav").width();if(a+t>n){0==i(".main-nav-more").length&&(i('<li class="main-nav-list-item top-level-menu main-nav-more">          <a class="main-nav-list-link" href="javascript:;">More</a>          <ul class="main-nav-list-child">          </ul></li>').appendTo(i("#main-nav")),i(".main-nav-more").hover(function(){i(window).width()<480||i(this).children(".main-nav-list-child").slideDown("fast")},function(){i(window).width()<480||i(this).children(".main-nav-list-child").slideUp("fast")}));for(var e=i("#main-nav").children().length,l=e-2;l>=0;l--){var s=i("#main-nav").children().eq(l);if(!(a+t>n))return;s.prependTo(i(".main-nav-more > ul")),a=i("#main-nav").width()}}i(".main-nav-more").length>0&&(i(".main-nav-more > ul").children().appendTo(i("#main-nav")),i(".main-nav-more").remove())}i(".main-nav-list > li").unwrap(),i("#main-nav > li > .main-nav-list-link").each(function(){i(".page-title-link").length>0&&(i(this).html().toUpperCase()==i(".page-title-link").html().toUpperCase()?i(this).addClass("current"):i(this).attr("href")==i(".page-title-link").attr("data-url")&&i(this).addClass("current"))}),i("#sidebar .sidebar-toggle").click(function(){i("#sidebar").hasClass("expend")?i("#sidebar").removeClass("expend"):i("#sidebar").addClass("expend")}),n(),a(),i(".main-nav-list-item").hover(function(){i(window).width()<480||i(this).children(".main-nav-list-child").slideDown("fast")},function(){i(window).width()<480||i(this).children(".main-nav-list-child").slideUp("fast")}),i(".main-nav-list-item").each(function(){i(this).find(".main-nav-list-child").length>0&&i(this).addClass("top-level-menu")}),i(window).resize(function(){n(),a()})}(jQuery);