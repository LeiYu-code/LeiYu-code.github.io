// ----------------------------------------------------------------------------
// imagesloaded - jQuery plugin 
// ----------------------------------------------------------------------------
(function(c,n){var l="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function m(){var b=c(i),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function j(b,a){b.src===l||-1!==c.inArray(b,k)||(k.push(b),a?h.push(b):i.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),o&&d.notifyWith(c(b),[a,e,c(i),c(h)]),e.length===k.length&&(setTimeout(m),e.unbind(".imagesLoaded")))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():
0,o=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),k=[],i=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",function(b){j(b.target,"error"===b.type)}).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)j(a,e.isBroken);else if(a.complete&&a.naturalWidth!==n)j(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=l,a.src=d}):m();return d?d.promise(g):
g}})(jQuery);

// ----------------------------------------------------------------------------
// vegas - jQuery plugin 
// ----------------------------------------------------------------------------
(function(i){var l=i("<img />").addClass("vegas-background"),o=i("<div />").addClass("vegas-overlay"),m=i("<div />").addClass("vegas-loading"),a=i(),p=null,j=[],d=0,h=5000,n=function(){},b,e={init:function(r){var q={src:k(),align:"center",valign:"center",fade:0,loading:true,load:function(){},complete:function(){}};i.extend(q,i.vegas.defaults.background,r);if(q.loading){f()}var s=l.clone();s.css({"position":"fixed","left":"0px","top":"0px"}).bind("load",function(){if(s==a){return}i(window).bind("load resize.vegas",function(t){c(s,q)
});if(a.is("img")){a.stop();s.hide().insertAfter(a).fadeIn(q.fade,function(){i(".vegas-background").not(this).remove();i("body").trigger("vegascomplete",[this,d-1]);q.complete.apply(s,[d-1])})}else{s.hide().prependTo("body").fadeIn(q.fade,function(){i("body").trigger("vegascomplete",[this,d-1]);q.complete.apply(this,[d-1])})}a=s;c(a,q);if(q.loading){g()}i("body").trigger("vegasload",[a.get(0),d-1]);q.load.apply(a.get(0),[d-1]);if(d){i("body").trigger("vegaswalk",[a.get(0),d-1]);q.walk.apply(a.get(0),[d-1])
}}).attr("src",q.src);return i.vegas},destroy:function(q){if(!q||q=="background"){i(".vegas-background, .vegas-loading").remove();i(window).unbind("resize.vegas");a=i()}if(q=="overlay"){i(".vegas-overlay").remove()}return i.vegas},overlay:function(r){var q={src:null,opacity:null};i.extend(q,i.vegas.defaults.overlay,r);o.remove();o.css({"margin":"0","padding":"0","position":"fixed","left":"0px","top":"0px","width":"100%","height":"100%"});if(q.src){o.css("backgroundImage","url("+q.src+")")}if(q.opacity){o.css("opacity",q.opacity)
}o.prependTo("body");return i.vegas},slideshow:function(s,q){var r={step:d,delay:h,preload:false,backgrounds:j,walk:n};i.extend(r,i.vegas.defaults.slideshow,s);if(r.backgrounds!=j){if(!s.step){r.step=0}if(!s.walk){r.walk=function(){}}if(r.preload){i.vegas("preload",r.backgrounds)}}j=r.backgrounds;h=r.delay;d=r.step;n=r.walk;clearInterval(b);if(!j.length){return i.vegas}var t=function(){if(d<0){d=j.length-1}if(d>=j.length||!j[d-1]){d=0}var u=j[d++];u.walk=r.walk;if(typeof(u.fade)=="undefined"){u.fade=r.fade
}if(u.fade>r.delay){u.fade=r.delay}i.vegas(u)};t();if(!q){p=false;i("body").trigger("vegasstart",[a.get(0),d-1])}if(!p){b=setInterval(t,r.delay)}return i.vegas},next:function(){var q=d;if(d){i.vegas("slideshow",{step:d},true);i("body").trigger("vegasnext",[a.get(0),d-1,q-1])}return i.vegas},previous:function(){var q=d;if(d){i.vegas("slideshow",{step:d-2},true);i("body").trigger("vegasprevious",[a.get(0),d-1,q-1])}return i.vegas},jump:function(q){var r=d;if(d){i.vegas("slideshow",{step:q},true);i("body").trigger("vegasjump",[a.get(0),d-1,r-1])
}return i.vegas},stop:function(){var q=d;d=0;p=null;clearInterval(b);i("body").trigger("vegasstop",[a.get(0),q-1]);return i.vegas},pause:function(){p=true;clearInterval(b);i("body").trigger("vegaspause",[a.get(0),d-1]);return i.vegas},get:function(q){if(q==null||q=="background"){return a.get(0)}if(q=="overlay"){return o.get(0)}if(q=="step"){return d-1}if(q=="paused"){return p}},preload:function(t){var r=[];for(var s in t){if(t[s].src){var q=document.createElement("img");q.src=t[s].src;r.push(q)}}return i.vegas
}};function c(r,u){var D={align:"center",valign:"center"};i.extend(D,u);if(r.height()==0){r.load(function(){c(i(this),u)});return}var x=i(window).width(),s=i(window).height(),v=r.width(),C=r.height(),t=s/x,A=C/v,w,q,B,z,y;if(t>A){w=s/A;q=s}else{w=x;q=x*A}y={"width":w+"px","height":q+"px","top":"auto","bottom":"auto","left":"auto","right":"auto"};if(!isNaN(parseInt(D.valign))){y["top"]=(0-(q-s)/100*parseInt(D.valign))+"px"}else{if(D.valign=="top"){y["top"]=0}else{if(D.valign=="bottom"){y["bottom"]=0
}else{y["top"]=(s-q)/2}}}if(!isNaN(parseInt(D.align))){y["left"]=(0-(w-x)/100*parseInt(D.align))+"px"}else{if(D.align=="left"){y["left"]=0}else{if(D.align=="right"){y["right"]=0}else{y["left"]=(x-w)/2}}}r.css(y)}function f(){m.prependTo("body").fadeIn()}function g(){m.fadeOut("fast",function(){i(this).remove()})}function k(){if(i("body").css("backgroundImage")){return i("body").css("backgroundImage").replace(/url\("?(.*?)"?\)/i,"$1")}}i.vegas=function(q){if(e[q]){return e[q].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof q==="object"||!q){return e.init.apply(this,arguments)}else{i.error("Method "+q+" does not exist")}}};i.vegas.defaults={background:{},slideshow:{},overlay:{}}})(jQuery);

// ----------------------------------------------------------------------------
// Omega - theme
// ----------------------------------------------------------------------------
(function() {
    $.vegas( 'slideshow', {
        delay: 8000,
        backgrounds: [
            { src: '/css/images/background3.jpg', fade: 4000 },
            { src: '/css/images/background2.jpg', fade: 4000 },
            { src: '/css/images/background1.jpg', fade: 4000 }
        ]
    } )( 'overlay' );
})();

(function($){
  // Caption
  $('.entry').each(function(i){
    $(this).find('img').each(function(){
      var alt = this.alt;

      if (alt){
        $(this).after('<span class="caption">' + alt + '</span>');
      }

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox" rel="gallery' + i + '" />');
    });
  });

  // Gallery
  var play = function(parent, item, callback){
    var width = parent.width();

    item.imagesLoaded(function(){
      var _this = this[0],
        nWidth = _this.naturalWidth,
        nHeight = _this.naturalHeight;

      callback();
      this.animate({opacity: 1}, 500);
      parent.animate({height: width * nHeight / nWidth}, 500);
    });
  };

  $('.gallery').each(function(){
    var $this = $(this),
      current = 0,
      photoset = $this.children('.photoset').children(),
      all = photoset.length,
      loading = true;

    play($this, photoset.eq(0), function(){
      loading = false;
    });

    $this.on('click', '.prev', function(){
      if (!loading){
        var next = (current - 1) % all;
        loading = true;

        play($this, photoset.eq(next), function(){
          photoset.eq(current).animate({opacity: 0}, 500);
          loading = false;
          current = next;
        });
      }
    }).on('click', '.next', function(){
      if (!loading){
        var next = (current + 1) % all;
        loading = true;

        play($this, photoset.eq(next), function(){
          photoset.eq(current).animate({opacity: 0}, 500);
          loading = false;
          current = next;
        });
      }
    });
  });
})(jQuery);