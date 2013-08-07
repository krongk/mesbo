/*!
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.9999.8 (26-OCT-2012)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.3.2 or later
 */
(function(a,b){function d(b){a.fn.cycle.debug&&e(b)}function e(){window.console&&console.log&&console.log("[cycle] "+Array.prototype.join.call(arguments," "))}function f(b,c,d){var e=a(b).data("cycle.opts");if(!e)return;var f=!!b.cyclePause;f&&e.paused?e.paused(b,e,c,d):!f&&e.resumed&&e.resumed(b,e,c,d)}function g(c,d,g){function k(b,c,d){if(!b&&c===!0){var f=a(d).data("cycle.opts");if(!f)return e("options not found, can not resume"),!1;d.cycleTimeout&&(clearTimeout(d.cycleTimeout),d.cycleTimeout=0),n(f.elements,f,1,!f.backwards)}}c.cycleStop===b&&(c.cycleStop=0);if(d===b||d===null)d={};if(d.constructor==String){switch(d){case"destroy":case"stop":var h=a(c).data("cycle.opts");if(!h)return!1;return c.cycleStop++,c.cycleTimeout&&clearTimeout(c.cycleTimeout),c.cycleTimeout=0,h.elements&&a(h.elements).stop(),a(c).removeData("cycle.opts"),d=="destroy"&&i(c,h),!1;case"toggle":return c.cyclePause=c.cyclePause===1?0:1,k(c.cyclePause,g,c),f(c),!1;case"pause":return c.cyclePause=1,f(c),!1;case"resume":return c.cyclePause=0,k(!1,g,c),f(c),!1;case"prev":case"next":h=a(c).data("cycle.opts");if(!h)return e('options not found, "prev/next" ignored'),!1;return a.fn.cycle[d](h),!1;default:d={fx:d}}return d}if(d.constructor==Number){var j=d;return d=a(c).data("cycle.opts"),d?j<0||j>=d.elements.length?(e("invalid slide index: "+j),!1):(d.nextSlide=j,c.cycleTimeout&&(clearTimeout(c.cycleTimeout),c.cycleTimeout=0),typeof g=="string"&&(d.oneTimeFx=g),n(d.elements,d,1,j>=d.currSlide),!1):(e("options not found, can not advance slide"),!1)}return d}function h(b,c){if(!a.support.opacity&&c.cleartype&&b.style.filter)try{b.style.removeAttribute("filter")}catch(d){}}function i(b,c){c.next&&a(c.next).unbind(c.prevNextEvent),c.prev&&a(c.prev).unbind(c.prevNextEvent),(c.pager||c.pagerAnchorBuilder)&&a.each(c.pagerAnchors||[],function(){this.unbind().remove()}),c.pagerAnchors=null,a(b).unbind("mouseenter.cycle mouseleave.cycle"),c.destroy&&c.destroy(c)}function j(c,d,g,i,j){var o,s=a.extend({},a.fn.cycle.defaults,i||{},a.metadata?c.metadata():a.meta?c.data():{}),t=a.isFunction(c.data)?c.data(s.metaAttr):null;t&&(s=a.extend(s,t)),s.autostop&&(s.countdown=s.autostopCount||g.length);var u=c[0];c.data("cycle.opts",s),s.$cont=c,s.stopCount=u.cycleStop,s.elements=g,s.before=s.before?[s.before]:[],s.after=s.after?[s.after]:[],!a.support.opacity&&s.cleartype&&s.after.push(function(){h(this,s)}),s.continuous&&s.after.push(function(){n(g,s,0,!s.backwards)}),k(s),!a.support.opacity&&s.cleartype&&!s.cleartypeNoBg&&r(d),c.css("position")=="static"&&c.css("position","relative"),s.width&&c.width(s.width),s.height&&s.height!="auto"&&c.height(s.height),s.startingSlide!==b?(s.startingSlide=parseInt(s.startingSlide,10),s.startingSlide>=g.length||s.startSlide<0?s.startingSlide=0:o=!0):s.backwards?s.startingSlide=g.length-1:s.startingSlide=0;if(s.random){s.randomMap=[];for(var v=0;v<g.length;v++)s.randomMap.push(v);s.randomMap.sort(function(a,b){return Math.random()-.5});if(o)for(var w=0;w<g.length;w++)s.startingSlide==s.randomMap[w]&&(s.randomIndex=w);else s.randomIndex=1,s.startingSlide=s.randomMap[1]}else s.startingSlide>=g.length&&(s.startingSlide=0);s.currSlide=s.startingSlide||0;var x=s.startingSlide;d.css({position:"absolute",top:0,left:0}).hide().each(function(b){var c;s.backwards?c=x?b<=x?g.length+(b-x):x-b:g.length-b:c=x?b>=x?g.length-(b-x):x-b:g.length-b,a(this).css("z-index",c)}),a(g[x]).css("opacity",1).show(),h(g[x],s),s.fit&&(s.aspect?d.each(function(){var b=a(this),c=s.aspect===!0?b.width()/b.height():s.aspect;s.width&&b.width()!=s.width&&(b.width(s.width),b.height(s.width/c)),s.height&&b.height()<s.height&&(b.height(s.height),b.width(s.height*c))}):(s.width&&d.width(s.width),s.height&&s.height!="auto"&&d.height(s.height))),s.center&&(!s.fit||s.aspect)&&d.each(function(){var b=a(this);b.css({"margin-left":s.width?(s.width-b.width())/2+"px":0,"margin-top":s.height?(s.height-b.height())/2+"px":0})}),s.center&&!s.fit&&!s.slideResize&&d.each(function(){var b=a(this);b.css({"margin-left":s.width?(s.width-b.width())/2+"px":0,"margin-top":s.height?(s.height-b.height())/2+"px":0})});var y=(s.containerResize||s.containerResizeHeight)&&!c.innerHeight();if(y){var z=0,A=0;for(var B=0;B<g.length;B++){var C=a(g[B]),D=C[0],E=C.outerWidth(),F=C.outerHeight();E||(E=D.offsetWidth||D.width||C.attr("width")),F||(F=D.offsetHeight||D.height||C.attr("height")),z=E>z?E:z,A=F>A?F:A}s.containerResize&&z>0&&A>0&&c.css({width:z+"px",height:A+"px"}),s.containerResizeHeight&&A>0&&c.css({height:A+"px"})}var G=!1;s.pause&&c.bind("mouseenter.cycle",function(){G=!0,this.cyclePause++,f(u,!0)}).bind("mouseleave.cycle",function(){G&&this.cyclePause--,f(u,!0)});if(l(s)===!1)return!1;var H=!1;i.requeueAttempts=i.requeueAttempts||0,d.each(function(){var b=a(this);this.cycleH=s.fit&&s.height?s.height:b.height()||this.offsetHeight||this.height||b.attr("height")||0,this.cycleW=s.fit&&s.width?s.width:b.width()||this.offsetWidth||this.width||b.attr("width")||0;if(b.is("img")){var c=a.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete,d=a.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete,f=a.browser.opera&&(this.cycleW==42&&this.cycleH==19||this.cycleW==37&&this.cycleH==17)&&!this.complete,g=this.cycleH===0&&this.cycleW===0&&!this.complete;if(c||d||f||g){if(j.s&&s.requeueOnImageNotLoaded&&++i.requeueAttempts<100)return e(i.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH),setTimeout(function(){a(j.s,j.c).cycle(i)},s.requeueTimeout),H=!0,!1;e("could not determine size of image: "+this.src,this.cycleW,this.cycleH)}}return!0});if(H)return!1;s.cssBefore=s.cssBefore||{},s.cssAfter=s.cssAfter||{},s.cssFirst=s.cssFirst||{},s.animIn=s.animIn||{},s.animOut=s.animOut||{},d.not(":eq("+x+")").css(s.cssBefore),a(d[x]).css(s.cssFirst);if(s.timeout){s.timeout=parseInt(s.timeout,10),s.speed.constructor==String&&(s.speed=a.fx.speeds[s.speed]||parseInt(s.speed,10)),s.sync||(s.speed=s.speed/2);var I=s.fx=="none"?0:s.fx=="shuffle"?500:250;while(s.timeout-s.speed<I)s.timeout+=s.speed}s.easing&&(s.easeIn=s.easeOut=s.easing),s.speedIn||(s.speedIn=s.speed),s.speedOut||(s.speedOut=s.speed),s.slideCount=g.length,s.currSlide=s.lastSlide=x,s.random?(++s.randomIndex==g.length&&(s.randomIndex=0),s.nextSlide=s.randomMap[s.randomIndex]):s.backwards?s.nextSlide=s.startingSlide===0?g.length-1:s.startingSlide-1:s.nextSlide=s.startingSlide>=g.length-1?0:s.startingSlide+1;if(!s.multiFx){var J=a.fn.cycle.transitions[s.fx];if(a.isFunction(J))J(c,d,s);else if(s.fx!="custom"&&!s.multiFx)return e("unknown transition: "+s.fx,"; slideshow terminating"),!1}var K=d[x];return s.skipInitializationCallbacks||(s.before.length&&s.before[0].apply(K,[K,K,s,!0]),s.after.length&&s.after[0].apply(K,[K,K,s,!0])),s.next&&a(s.next).bind(s.prevNextEvent,function(){return p(s,1)}),s.prev&&a(s.prev).bind(s.prevNextEvent,function(){return p(s,0)}),(s.pager||s.pagerAnchorBuilder)&&q(g,s),m(s,g),s}function k(b){b.original={before:[],after:[]},b.original.cssBefore=a.extend({},b.cssBefore),b.original.cssAfter=a.extend({},b.cssAfter),b.original.animIn=a.extend({},b.animIn),b.original.animOut=a.extend({},b.animOut),a.each(b.before,function(){b.original.before.push(this)}),a.each(b.after,function(){b.original.after.push(this)})}function l(b){var c,f,g=a.fn.cycle.transitions;if(b.fx.indexOf(",")>0){b.multiFx=!0,b.fxs=b.fx.replace(/\s*/g,"").split(",");for(c=0;c<b.fxs.length;c++){var h=b.fxs[c];f=g[h];if(!f||!g.hasOwnProperty(h)||!a.isFunction(f))e("discarding unknown transition: ",h),b.fxs.splice(c,1),c--}if(!b.fxs.length)return e("No valid transitions named; slideshow terminating."),!1}else if(b.fx=="all"){b.multiFx=!0,b.fxs=[];for(var i in g)g.hasOwnProperty(i)&&(f=g[i],g.hasOwnProperty(i)&&a.isFunction(f)&&b.fxs.push(i))}if(b.multiFx&&b.randomizeEffects){var j=Math.floor(Math.random()*20)+30;for(c=0;c<j;c++){var k=Math.floor(Math.random()*b.fxs.length);b.fxs.push(b.fxs.splice(k,1)[0])}d("randomized fx sequence: ",b.fxs)}return!0}function m(b,c){b.addSlide=function(d,e){var f=a(d),g=f[0];b.autostopCount||b.countdown++,c[e?"unshift":"push"](g),b.els&&b.els[e?"unshift":"push"](g),b.slideCount=c.length,b.random&&(b.randomMap.push(b.slideCount-1),b.randomMap.sort(function(a,b){return Math.random()-.5})),f.css("position","absolute"),f[e?"prependTo":"appendTo"](b.$cont),e&&(b.currSlide++,b.nextSlide++),!a.support.opacity&&b.cleartype&&!b.cleartypeNoBg&&r(f),b.fit&&b.width&&f.width(b.width),b.fit&&b.height&&b.height!="auto"&&f.height(b.height),g.cycleH=b.fit&&b.height?b.height:f.height(),g.cycleW=b.fit&&b.width?b.width:f.width(),f.css(b.cssBefore),(b.pager||b.pagerAnchorBuilder)&&a.fn.cycle.createPagerAnchor(c.length-1,g,a(b.pager),c,b),a.isFunction(b.onAddSlide)?b.onAddSlide(f):f.hide()}}function n(c,e,f,g){function q(){var a=0,b=e.timeout;e.timeout&&!e.continuous?(a=o(c[e.currSlide],c[e.nextSlide],e,g),e.fx=="shuffle"&&(a-=e.speedOut)):e.continuous&&h.cyclePause&&(a=10),a>0&&(h.cycleTimeout=setTimeout(function(){n(c,e,0,!e.backwards)},a))}var h=e.$cont[0],i=c[e.currSlide],j=c[e.nextSlide];f&&e.busy&&e.manualTrump&&(d("manualTrump in go(), stopping active transition"),a(c).stop(!0,!0),e.busy=0,clearTimeout(h.cycleTimeout));if(e.busy){d("transition active, ignoring new tx request");return}if(h.cycleStop!=e.stopCount||h.cycleTimeout===0&&!f)return;if(!f&&!h.cyclePause&&!e.bounce&&(e.autostop&&--e.countdown<=0||e.nowrap&&!e.random&&e.nextSlide<e.currSlide)){e.end&&e.end(e);return}var k=!1;if((f||!h.cyclePause)&&e.nextSlide!=e.currSlide){k=!0;var l=e.fx;i.cycleH=i.cycleH||a(i).height(),i.cycleW=i.cycleW||a(i).width(),j.cycleH=j.cycleH||a(j).height(),j.cycleW=j.cycleW||a(j).width(),e.multiFx&&(g&&(e.lastFx===b||++e.lastFx>=e.fxs.length)?e.lastFx=0:!g&&(e.lastFx===b||--e.lastFx<0)&&(e.lastFx=e.fxs.length-1),l=e.fxs[e.lastFx]),e.oneTimeFx&&(l=e.oneTimeFx,e.oneTimeFx=null),a.fn.cycle.resetState(e,l),e.before.length&&a.each(e.before,function(a,b){if(h.cycleStop!=e.stopCount)return;b.apply(j,[i,j,e,g])});var m=function(){e.busy=0,a.each(e.after,function(a,b){if(h.cycleStop!=e.stopCount)return;b.apply(j,[i,j,e,g])}),h.cycleStop||q()};d("tx firing("+l+"); currSlide: "+e.currSlide+"; nextSlide: "+e.nextSlide),e.busy=1,e.fxFn?e.fxFn(i,j,e,m,g,f&&e.fastOnEvent):a.isFunction(a.fn.cycle[e.fx])?a.fn.cycle[e.fx](i,j,e,m,g,f&&e.fastOnEvent):a.fn.cycle.custom(i,j,e,m,g,f&&e.fastOnEvent)}else q();if(k||e.nextSlide==e.currSlide){var p;e.lastSlide=e.currSlide,e.random?(e.currSlide=e.nextSlide,++e.randomIndex==c.length&&(e.randomIndex=0,e.randomMap.sort(function(a,b){return Math.random()-.5})),e.nextSlide=e.randomMap[e.randomIndex],e.nextSlide==e.currSlide&&(e.nextSlide=e.currSlide==e.slideCount-1?0:e.currSlide+1)):e.backwards?(p=e.nextSlide-1<0,p&&e.bounce?(e.backwards=!e.backwards,e.nextSlide=1,e.currSlide=0):(e.nextSlide=p?c.length-1:e.nextSlide-1,e.currSlide=p?0:e.nextSlide+1)):(p=e.nextSlide+1==c.length,p&&e.bounce?(e.backwards=!e.backwards,e.nextSlide=c.length-2,e.currSlide=c.length-1):(e.nextSlide=p?0:e.nextSlide+1,e.currSlide=p?c.length-1:e.nextSlide-1))}k&&e.pager&&e.updateActivePagerLink(e.pager,e.currSlide,e.activePagerClass)}function o(a,b,c,e){if(c.timeoutFn){var f=c.timeoutFn.call(a,a,b,c,e);while(c.fx!="none"&&f-c.speed<250)f+=c.speed;d("calculated timeout: "+f+"; speed: "+c.speed);if(f!==!1)return f}return c.timeout}function p(b,c){var d=c?1:-1,e=b.elements,f=b.$cont[0],g=f.cycleTimeout;g&&(clearTimeout(g),f.cycleTimeout=0);if(b.random&&d<0)b.randomIndex--,--b.randomIndex==-2?b.randomIndex=e.length-2:b.randomIndex==-1&&(b.randomIndex=e.length-1),b.nextSlide=b.randomMap[b.randomIndex];else if(b.random)b.nextSlide=b.randomMap[b.randomIndex];else{b.nextSlide=b.currSlide+d;if(b.nextSlide<0){if(b.nowrap)return!1;b.nextSlide=e.length-1}else if(b.nextSlide>=e.length){if(b.nowrap)return!1;b.nextSlide=0}}var h=b.onPrevNextEvent||b.prevNextClick;return a.isFunction(h)&&h(d>0,b.nextSlide,e[b.nextSlide]),n(e,b,1,c),!1}function q(b,c){var d=a(c.pager);a.each(b,function(e,f){a.fn.cycle.createPagerAnchor(e,f,d,b,c)}),c.updateActivePagerLink(c.pager,c.startingSlide,c.activePagerClass)}function r(b){function c(a){return a=parseInt(a,10).toString(16),a.length<2?"0"+a:a}function e(b){for(;b&&b.nodeName.toLowerCase()!="html";b=b.parentNode){var d=a.css(b,"background-color");if(d&&d.indexOf("rgb")>=0){var e=d.match(/\d+/g);return"#"+c(e[0])+c(e[1])+c(e[2])}if(d&&d!="transparent")return d}return"#ffffff"}d("applying clearType background-color hack"),b.each(function(){a(this).css("background-color",e(this))})}"use strict";var c="2.9999.8";a.support===b&&(a.support={opacity:!a.browser.msie}),a.expr[":"].paused=function(a){return a.cyclePause},a.fn.cycle=function(b,c){var f={s:this.selector,c:this.context};return this.length===0&&b!="stop"?!a.isReady&&f.s?(e("DOM not ready, queuing slideshow"),a(function(){a(f.s,f.c).cycle(b,c)}),this):(e("terminating; zero elements found by selector"+(a.isReady?"":" (DOM not ready)")),this):this.each(function(){var h=g(this,b,c);if(h===!1)return;h.updateActivePagerLink=h.updateActivePagerLink||a.fn.cycle.updateActivePagerLink,this.cycleTimeout&&clearTimeout(this.cycleTimeout),this.cycleTimeout=this.cyclePause=0,this.cycleStop=0;var i=a(this),k=h.slideExpr?a(h.slideExpr,this):i.children(),l=k.get();if(l.length<2){e("terminating; too few slides: "+l.length);return}var m=j(i,k,l,h,f);if(m===!1)return;var p=m.continuous?10:o(l[m.currSlide],l[m.nextSlide],m,!m.backwards);p&&(p+=m.delay||0,p<10&&(p=10),d("first timeout: "+p),this.cycleTimeout=setTimeout(function(){n(l,m,0,!h.backwards)},p))})},a.fn.cycle.resetState=function(b,c){c=c||b.fx,b.before=[],b.after=[],b.cssBefore=a.extend({},b.original.cssBefore),b.cssAfter=a.extend({},b.original.cssAfter),b.animIn=a.extend({},b.original.animIn),b.animOut=a.extend({},b.original.animOut),b.fxFn=null,a.each(b.original.before,function(){b.before.push(this)}),a.each(b.original.after,function(){b.after.push(this)});var d=a.fn.cycle.transitions[c];a.isFunction(d)&&d(b.$cont,a(b.elements),b)},a.fn.cycle.updateActivePagerLink=function(b,c,d){a(b).each(function(){a(this).children().removeClass(d).eq(c).addClass(d)})},a.fn.cycle.next=function(a){p(a,1)},a.fn.cycle.prev=function(a){p(a,0)},a.fn.cycle.createPagerAnchor=function(b,c,e,g,h){var i;a.isFunction(h.pagerAnchorBuilder)?(i=h.pagerAnchorBuilder(b,c),d("pagerAnchorBuilder("+b+", el) returned: "+i)):i='<a href="#">'+(b+1)+"</a>";if(!i)return;var j=a(i);if(j.parents("body").length===0){var k=[];e.length>1?(e.each(function(){var b=j.clone(!0);a(this).append(b),k.push(b[0])}),j=a(k)):j.appendTo(e)}h.pagerAnchors=h.pagerAnchors||[],h.pagerAnchors.push(j);var l=function(c){c.preventDefault(),h.nextSlide=b;var d=h.$cont[0],e=d.cycleTimeout;e&&(clearTimeout(e),d.cycleTimeout=0);var f=h.onPagerEvent||h.pagerClick;a.isFunction(f)&&f(h.nextSlide,g[h.nextSlide]),n(g,h,1,h.currSlide<b)};/mouseenter|mouseover/i.test(h.pagerEvent)?j.hover(l,function(){}):j.bind(h.pagerEvent,l),!/^click/.test(h.pagerEvent)&&!h.allowPagerClickBubble&&j.bind("click.cycle",function(){return!1});var m=h.$cont[0],o=!1;h.pauseOnPagerHover&&j.hover(function(){o=!0,m.cyclePause++,f(m,!0,!0)},function(){o&&m.cyclePause--,f(m,!0,!0)})},a.fn.cycle.hopsFromLast=function(a,b){var c,d=a.lastSlide,e=a.currSlide;return b?c=e>d?e-d:a.slideCount-d:c=e<d?d-e:d+a.slideCount-e,c},a.fn.cycle.commonReset=function(b,c,d,e,f,g){a(d.elements).not(b).hide(),typeof d.cssBefore.opacity=="undefined"&&(d.cssBefore.opacity=1),d.cssBefore.display="block",d.slideResize&&e!==!1&&c.cycleW>0&&(d.cssBefore.width=c.cycleW),d.slideResize&&f!==!1&&c.cycleH>0&&(d.cssBefore.height=c.cycleH),d.cssAfter=d.cssAfter||{},d.cssAfter.display="none",a(b).css("zIndex",d.slideCount+(g===!0?1:0)),a(c).css("zIndex",d.slideCount+(g===!0?0:1))},a.fn.cycle.custom=function(b,c,d,e,f,g){var h=a(b),i=a(c),j=d.speedIn,k=d.speedOut,l=d.easeIn,m=d.easeOut;i.css(d.cssBefore),g&&(typeof g=="number"?j=k=g:j=k=1,l=m=null);var n=function(){i.animate(d.animIn,j,l,function(){e()})};h.animate(d.animOut,k,m,function(){h.css(d.cssAfter),d.sync||n()}),d.sync&&n()},a.fn.cycle.transitions={fade:function(b,c,d){c.not(":eq("+d.currSlide+")").css("opacity",0),d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d),d.cssBefore.opacity=0}),d.animIn={opacity:1},d.animOut={opacity:0},d.cssBefore={top:0,left:0}}},a.fn.cycle.ver=function(){return c},a.fn.cycle.defaults={activePagerClass:"activeSlide",after:null,allowPagerClickBubble:!1,animIn:null,animOut:null,aspect:!1,autostop:0,autostopCount:0,backwards:!1,before:null,center:null,cleartype:!a.support.opacity,cleartypeNoBg:!1,containerResize:1,containerResizeHeight:0,continuous:0,cssAfter:null,cssBefore:null,delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:"fade",fxFn:null,height:"auto",manualTrump:!0,metaAttr:"cycle",next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:"click.cycle",pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:"click.cycle",random:0,randomizeEffects:1,requeueOnImageNotLoaded:!0,requeueTimeout:250,rev:0,shuffle:null,skipInitializationCallbacks:!1,slideExpr:null,slideResize:1,speed:1e3,speedIn:null,speedOut:null,startingSlide:b,sync:1,timeout:4e3,timeoutFn:null,updateActivePagerLink:null,width:null}})(jQuery),function(a){"use strict",a.fn.cycle.transitions.none=function(b,c,d){d.fxFn=function(b,c,d,e){a(c).show(),a(b).hide(),e()}},a.fn.cycle.transitions.fadeout=function(b,c,d){c.not(":eq("+d.currSlide+")").css({display:"block",opacity:1}),d.before.push(function(b,c,d,e,f,g){a(b).css("zIndex",d.slideCount+(g!==!0?1:0)),a(c).css("zIndex",d.slideCount+(g!==!0?0:1))}),d.animIn.opacity=1,d.animOut.opacity=0,d.cssBefore.opacity=1,d.cssBefore.display="block",d.cssAfter.zIndex=0},a.fn.cycle.transitions.scrollUp=function(b,c,d){b.css("overflow","hidden"),d.before.push(a.fn.cycle.commonReset);var e=b.height();d.cssBefore.top=e,d.cssBefore.left=0,d.cssFirst.top=0,d.animIn.top=0,d.animOut.top=-e},a.fn.cycle.transitions.scrollDown=function(b,c,d){b.css("overflow","hidden"),d.before.push(a.fn.cycle.commonReset);var e=b.height();d.cssFirst.top=0,d.cssBefore.top=-e,d.cssBefore.left=0,d.animIn.top=0,d.animOut.top=e},a.fn.cycle.transitions.scrollLeft=function(b,c,d){b.css("overflow","hidden"),d.before.push(a.fn.cycle.commonReset);var e=b.width();d.cssFirst.left=0,d.cssBefore.left=e,d.cssBefore.top=0,d.animIn.left=0,d.animOut.left=0-e},a.fn.cycle.transitions.scrollRight=function(b,c,d){b.css("overflow","hidden"),d.before.push(a.fn.cycle.commonReset);var e=b.width();d.cssFirst.left=0,d.cssBefore.left=-e,d.cssBefore.top=0,d.animIn.left=0,d.animOut.left=e},a.fn.cycle.transitions.scrollHorz=function(b,c,d){b.css("overflow","hidden").width(),d.before.push(function(b,c,d,e){d.rev&&(e=!e),a.fn.cycle.commonReset(b,c,d),d.cssBefore.left=e?c.cycleW-1:1-c.cycleW,d.animOut.left=e?-b.cycleW:b.cycleW}),d.cssFirst.left=0,d.cssBefore.top=0,d.animIn.left=0,d.animOut.top=0},a.fn.cycle.transitions.scrollVert=function(b,c,d){b.css("overflow","hidden"),d.before.push(function(b,c,d,e){d.rev&&(e=!e),a.fn.cycle.commonReset(b,c,d),d.cssBefore.top=e?1-c.cycleH:c.cycleH-1,d.animOut.top=e?b.cycleH:-b.cycleH}),d.cssFirst.top=0,d.cssBefore.left=0,d.animIn.top=0,d.animOut.left=0},a.fn.cycle.transitions.slideX=function(b,c,d){d.before.push(function(b,c,d){a(d.elements).not(b).hide(),a.fn.cycle.commonReset(b,c,d,!1,!0),d.animIn.width=c.cycleW}),d.cssBefore.left=0,d.cssBefore.top=0,d.cssBefore.width=0,d.animIn.width="show",d.animOut.width=0},a.fn.cycle.transitions.slideY=function(b,c,d){d.before.push(function(b,c,d){a(d.elements).not(b).hide(),a.fn.cycle.commonReset(b,c,d,!0,!1),d.animIn.height=c.cycleH}),d.cssBefore.left=0,d.cssBefore.top=0,d.cssBefore.height=0,d.animIn.height="show",d.animOut.height=0},a.fn.cycle.transitions.shuffle=function(b,c,d){var e,f=b.css("overflow","visible").width();c.css({left:0,top:0}),d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!0,!0,!0)}),d.speedAdjusted||(d.speed=d.speed/2,d.speedAdjusted=!0),d.random=0,d.shuffle=d.shuffle||{left:-f,top:15},d.els=[];for(e=0;e<c.length;e++)d.els.push(c[e]);for(e=0;e<d.currSlide;e++)d.els.push(d.els.shift());d.fxFn=function(b,c,d,e,f){d.rev&&(f=!f);var g=f?a(b):a(c);a(c).css(d.cssBefore);var h=d.slideCount;g.animate(d.shuffle,d.speedIn,d.easeIn,function(){var c=a.fn.cycle.hopsFromLast(d,f);for(var i=0;i<c;i++)f?d.els.push(d.els.shift()):d.els.unshift(d.els.pop());if(f)for(var j=0,k=d.els.length;j<k;j++)a(d.els[j]).css("z-index",k-j+h);else{var l=a(b).css("z-index");g.css("z-index",parseInt(l,10)+1+h)}g.animate({left:0,top:0},d.speedOut,d.easeOut,function(){a(f?this:b).hide(),e&&e()})})},a.extend(d.cssBefore,{display:"block",opacity:1,top:0,left:0})},a.fn.cycle.transitions.turnUp=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!0,!1),d.cssBefore.top=c.cycleH,d.animIn.height=c.cycleH,d.animOut.width=c.cycleW}),d.cssFirst.top=0,d.cssBefore.left=0,d.cssBefore.height=0,d.animIn.top=0,d.animOut.height=0},a.fn.cycle.transitions.turnDown=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!0,!1),d.animIn.height=c.cycleH,d.animOut.top=b.cycleH}),d.cssFirst.top=0,d.cssBefore.left=0,d.cssBefore.top=0,d.cssBefore.height=0,d.animOut.height=0},a.fn.cycle.transitions.turnLeft=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!1,!0),d.cssBefore.left=c.cycleW,d.animIn.width=c.cycleW}),d.cssBefore.top=0,d.cssBefore.width=0,d.animIn.left=0,d.animOut.width=0},a.fn.cycle.transitions.turnRight=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!1,!0),d.animIn.width=c.cycleW,d.animOut.left=b.cycleW}),a.extend(d.cssBefore,{top:0,left:0,width:0}),d.animIn.left=0,d.animOut.width=0},a.fn.cycle.transitions.zoom=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!1,!1,!0),d.cssBefore.top=c.cycleH/2,d.cssBefore.left=c.cycleW/2,a.extend(d.animIn,{top:0,left:0,width:c.cycleW,height:c.cycleH}),a.extend(d.animOut,{width:0,height:0,top:b.cycleH/2,left:b.cycleW/2})}),d.cssFirst.top=0,d.cssFirst.left=0,d.cssBefore.width=0,d.cssBefore.height=0},a.fn.cycle.transitions.fadeZoom=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!1,!1),d.cssBefore.left=c.cycleW/2,d.cssBefore.top=c.cycleH/2,a.extend(d.animIn,{top:0,left:0,width:c.cycleW,height:c.cycleH})}),d.cssBefore.width=0,d.cssBefore.height=0,d.animOut.opacity=0},a.fn.cycle.transitions.blindX=function(b,c,d){var e=b.css("overflow","hidden").width();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d),d.animIn.width=c.cycleW,d.animOut.left=b.cycleW}),d.cssBefore.left=e,d.cssBefore.top=0,d.animIn.left=0,d.animOut.left=e},a.fn.cycle.transitions.blindY=function(b,c,d){var e=b.css("overflow","hidden").height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d),d.animIn.height=c.cycleH,d.animOut.top=b.cycleH}),d.cssBefore.top=e,d.cssBefore.left=0,d.animIn.top=0,d.animOut.top=e},a.fn.cycle.transitions.blindZ=function(b,c,d){var e=b.css("overflow","hidden").height(),f=b.width();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d),d.animIn.height=c.cycleH,d.animOut.top=b.cycleH}),d.cssBefore.top=e,d.cssBefore.left=f,d.animIn.top=0,d.animIn.left=0,d.animOut.top=e,d.animOut.left=f},a.fn.cycle.transitions.growX=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!1,!0),d.cssBefore.left=this.cycleW/2,d.animIn.left=0,d.animIn.width=this.cycleW,d.animOut.left=0}),d.cssBefore.top=0,d.cssBefore.width=0},a.fn.cycle.transitions.growY=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!0,!1),d.cssBefore.top=this.cycleH/2,d.animIn.top=0,d.animIn.height=this.cycleH,d.animOut.top=0}),d.cssBefore.height=0,d.cssBefore.left=0},a.fn.cycle.transitions.curtainX=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!1,!0,!0),d.cssBefore.left=c.cycleW/2,d.animIn.left=0,d.animIn.width=this.cycleW,d.animOut.left=b.cycleW/2,d.animOut.width=0}),d.cssBefore.top=0,d.cssBefore.width=0},a.fn.cycle.transitions.curtainY=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!0,!1,!0),d.cssBefore.top=c.cycleH/2,d.animIn.top=0,d.animIn.height=c.cycleH,d.animOut.top=b.cycleH/2,d.animOut.height=0}),d.cssBefore.height=0,d.cssBefore.left=0},a.fn.cycle.transitions.cover=function(b,c,d){var e=d.direction||"left",f=b.css("overflow","hidden").width(),g=b.height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d),d.cssAfter.display="",e=="right"?d.cssBefore.left=-f:e=="up"?d.cssBefore.top=g:e=="down"?d.cssBefore.top=-g:d.cssBefore.left=f}),d.animIn.left=0,d.animIn.top=0,d.cssBefore.top=0,d.cssBefore.left=0},a.fn.cycle.transitions.uncover=function(b,c,d){var e=d.direction||"left",f=b.css("overflow","hidden").width(),g=b.height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!0,!0,!0),e=="right"?d.animOut.left=f:e=="up"?d.animOut.top=-g:e=="down"?d.animOut.top=g:d.animOut.left=-f}),d.animIn.left=0,d.animIn.top=0,d.cssBefore.top=0,d.cssBefore.left=0},a.fn.cycle.transitions.toss=function(b,c,d){var e=b.css("overflow","visible").width(),f=b.height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!0,!0,!0),!d.animOut.left&&!d.animOut.top?a.extend(d.animOut,{left:e*2,top:-f/2,opacity:0}):d.animOut.opacity=0}),d.cssBefore.left=0,d.cssBefore.top=0,d.animIn.left=0},a.fn.cycle.transitions.wipe=function(b,c,d){var e=b.css("overflow","hidden").width(),f=b.height();d.cssBefore=d.cssBefore||{};var g;if(d.clip)if(/l2r/.test(d.clip))g="rect(0px 0px "+f+"px 0px)";else if(/r2l/.test(d.clip))g="rect(0px "+e+"px "+f+"px "+e+"px)";else if(/t2b/.test(d.clip))g="rect(0px "+e+"px 0px 0px)";else if(/b2t/.test(d.clip))g="rect("+f+"px "+e+"px "+f+"px 0px)";else if(/zoom/.test(d.clip)){var h=parseInt(f/2,10),i=parseInt(e/2,10);g="rect("+h+"px "+i+"px "+h+"px "+i+"px)"}d.cssBefore.clip=d.cssBefore.clip||g||"rect(0px 0px 0px 0px)";var j=d.cssBefore.clip.match(/(\d+)/g),k=parseInt(j[0],10),l=parseInt(j[1],10),m=parseInt(j[2],10),n=parseInt(j[3],10);d.before.push(function(b,c,d){if(b==c)return;var g=a(b),h=a(c);a.fn.cycle.commonReset(b,c,d,!0,!0,!1),d.cssAfter.display="block";var i=1,j=parseInt(d.speedIn/13,10)-1;(function o(){var a=k?k-parseInt(i*(k/j),10):0,b=n?n-parseInt(i*(n/j),10):0,c=m<f?m+parseInt(i*((f-m)/j||1),10):f,d=l<e?l+parseInt(i*((e-l)/j||1),10):e;h.css({clip:"rect("+a+"px "+d+"px "+c+"px "+b+"px)"}),i++<=j?setTimeout(o,13):g.css("display","none")})()}),a.extend(d.cssBefore,{display:"block",opacity:1,top:0,left:0}),d.animIn={left:0},d.animOut={left:0}}}(jQuery)