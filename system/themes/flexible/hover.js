/* Contao Open Source CMS, (c) 2005-2014 Leo Feyer, LGPL license */
var Theme={focusInput:function(e){if(e=="")return;var t=$$("#"+e+' input[class^="tl_text"],#'+e+" textarea");t&&t.length>0&&t[0].focus()},hoverRow:function(e,t){var n=$(e).getChildren();for(var r=0;r<n.length;r++)n[r].nodeName.toLowerCase()=="td"&&n[r].setStyle("background-color",t?"#ebfdd7":"")},hoverDiv:function(e,t){t||e.removeAttribute("data-visited"),$(e).setStyle("background-color",t?"#ebfdd7":"")},toggleSelect:function(e){var t=$(e).getElement("input");t&&(t.checked?t.get("type")!="radio"&&(t.checked=""):t.checked="checked",t.get("onclick")=="Backend.toggleCheckboxes(this)"&&Backend.toggleCheckboxes(t))},fixLabelLastChild:function(){(Browser.ie7||Browser.ie8)&&$$(".tl_checkbox_container label:last-child").each(function(e){e.setStyle("margin-bottom",0)})},stopClickPropagation:function(){$$(".picker_selector").each(function(e){e.getElements("a").each(function(e){e.addEvent("click",function(e){e.stopPropagation()})})}),$$(".picker_selector,.click2edit").each(function(e){e.getElements('input[type="checkbox"]').each(function(e){e.addEvent("click",function(e){e.stopPropagation()})})})},setupCtrlClick:function(){$$(".click2edit").each(function(e){e.getElements("a").each(function(e){e.addEvent("click",function(e){e.stopPropagation()})}),Browser.Features.Touch?e.addEvent("click",function(){e.getAttribute("data-visited")?(e.getElements("a").each(function(e){e.hasClass("edit")&&(document.location.href=e.href)}),e.removeAttribute("data-visited")):e.setAttribute("data-visited",1)}):e.addEvent("click",function(t){var n=Browser.Platform.mac?t.event.metaKey:t.event.ctrlKey;n&&t.event.shiftKey?e.getElements("a").each(function(e){e.hasClass("editheader")&&(document.location.href=e.href)}):n&&e.getElements("a").each(function(e){e.hasClass("edit")&&(document.location.href=e.href)})})})},setupTextareaResizing:function(){$$(".tl_textarea").each(function(e){if(Browser.ie6||Browser.ie7||Browser.ie8)return;if(e.hasClass("noresize")||e.retrieve("autogrow"))return;var t=(new Element("div",{html:"X",styles:{position:"absolute",top:0,left:"-999em","overflow-x":"hidden"}})).setStyles(e.getStyles("font-size","font-family","width","line-height")).inject(document.body),n=t.clientHeight;e.addEvent("input",function(){t.set("html",this.get("value").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n|\r\n/g,"<br>X"));var e=Math.max(n,t.getSize().y);this.clientHeight!=e&&this.tween("height",e)}).set("tween",{duration:100}).setStyle("height",n+"px"),e.fireEvent("input"),e.store("autogrow",!0)})},setupMenuToggle:function(){var e=$("tl_navigation");e.getElement("h1").addEvent("click",function(){e.toggleClass("xpnd")})}};window.addEvent("domready",function(){Theme.fixLabelLastChild(),Theme.stopClickPropagation(),Theme.setupCtrlClick(),Theme.setupTextareaResizing(),Theme.setupMenuToggle()}),window.addEvent("ajax_change",function(){Theme.stopClickPropagation(),Theme.setupCtrlClick(),Theme.setupTextareaResizing()});