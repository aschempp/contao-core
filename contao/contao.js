Request.Contao=new Class({Extends:Request.JSON,options:{url:window.location.href},initialize:function(a){if(a){try{this.options.url=a.field.getParent("form").getAttribute("action")}catch(b){}}this.parent(a)},success:function(c){var a;try{a=this.response.json=JSON.decode(c,this.options.secure)}catch(b){a={content:c}}if(a==null){a={content:""}}if(a.content!=""){a.content=a.content.stripScripts(function(d){a.javascript=d.replace(/<!--|\/\/-->|<!\[CDATA\[\/\/>|<!\]\]>/g,"")});if(a.javascript&&this.options.evalScripts){$exec(a.javascript)}}this.onSuccess(a.content,a)}});Request.Mixed=Request.Contao;var AjaxRequest={toggleNavigation:function(a,d){a.blur();var b=$(d);var c=$(a).getFirst("img");if(b){if(b.getStyle("display")=="none"){b.setStyle("display","inline");c.src=c.src.replace("modPlus.gif","modMinus.gif");$(a).title=CONTAO_COLLAPSE;new Request.Contao().post({action:"toggleNavigation",id:d,state:1,REQUEST_TOKEN:REQUEST_TOKEN})}else{b.setStyle("display","none");c.src=c.src.replace("modMinus.gif","modPlus.gif");$(a).title=CONTAO_EXPAND;new Request.Contao().post({action:"toggleNavigation",id:d,state:0,REQUEST_TOKEN:REQUEST_TOKEN})}return false}new Request.Contao({evalScripts:true,onRequest:AjaxRequest.displayBox(CONTAO_LOADING+" …"),onSuccess:function(e,f){b=new Element("li",{id:d,"class":"tl_parent",html:e,styles:{display:"inline"}}).inject($(a).getParent("li"),"after");$(a).title=CONTAO_COLLAPSE;c.src=c.src.replace("modPlus.gif","modMinus.gif");AjaxRequest.hideBox();window.fireEvent("ajax_change")}}).post({action:"loadNavigation",id:d,state:1,REQUEST_TOKEN:REQUEST_TOKEN});return false},toggleStructure:function(a,f,e,d){a.blur();var b=$(f);var c=$(a).getFirst("img");if(b){if(b.getStyle("display")=="none"){b.setStyle("display","inline");c.src=c.src.replace("folPlus.gif","folMinus.gif");$(a).title=CONTAO_COLLAPSE;new Request.Contao({field:a}).post({action:"toggleStructure",id:f,state:1,REQUEST_TOKEN:REQUEST_TOKEN})}else{b.setStyle("display","none");c.src=c.src.replace("folMinus.gif","folPlus.gif");$(a).title=CONTAO_EXPAND;new Request.Contao({field:a}).post({action:"toggleStructure",id:f,state:0,REQUEST_TOKEN:REQUEST_TOKEN})}return false}new Request.Contao({field:a,evalScripts:true,onRequest:AjaxRequest.displayBox(CONTAO_LOADING+" …"),onSuccess:function(h,j){var g=new Element("li",{id:f,"class":"parent",styles:{display:"inline"}});var i=new Element("ul",{"class":"level_"+e,html:h}).inject(g,"bottom");if(d==5){g.inject($(a).getParent("li"),"after")}else{var l=false;var k=$(a).getParent("li");while(typeOf(k)=="element"&&(next=k.getNext("li"))){k=next;if(k.hasClass("tl_folder")){l=true;break}}if(l){g.inject(k,"before")}else{g.inject(k,"after")}}$(a).title=CONTAO_COLLAPSE;c.src=c.src.replace("folPlus.gif","folMinus.gif");window.fireEvent("structure");AjaxRequest.hideBox();window.fireEvent("ajax_change")}}).post({action:"loadStructure",id:f,level:e,state:1,REQUEST_TOKEN:REQUEST_TOKEN});return false},toggleFileManager:function(b,g,d,f){b.blur();var c=$(g);var e=$(b).getFirst("img");var a=$(b).getNext("img");if(c){if(c.getStyle("display")=="none"){c.setStyle("display","inline");e.src=e.src.replace("folPlus.gif","folMinus.gif");a.src=a.src.replace("folderC","folderO");$(b).title=CONTAO_COLLAPSE;new Request.Contao({field:b}).post({action:"toggleFileManager",id:g,state:1,REQUEST_TOKEN:REQUEST_TOKEN})}else{c.setStyle("display","none");e.src=e.src.replace("folMinus.gif","folPlus.gif");a.src=a.src.replace("folderO","folderC");$(b).title=CONTAO_EXPAND;new Request.Contao({field:b}).post({action:"toggleFileManager",id:g,state:0,REQUEST_TOKEN:REQUEST_TOKEN})}return false}new Request.Contao({field:b,evalScripts:true,onRequest:AjaxRequest.displayBox(CONTAO_LOADING+" …"),onSuccess:function(i,k){var h=new Element("li",{id:g,"class":"parent",styles:{display:"inline"}});var j=new Element("ul",{"class":"level_"+f,html:i}).inject(h,"bottom");h.inject($(b).getParent("li"),"after");$(b).title=CONTAO_COLLAPSE;e.src=e.src.replace("folPlus.gif","folMinus.gif");a.src=a.src.replace("folderC.gif","folderO.gif");AjaxRequest.hideBox();window.fireEvent("ajax_change")}}).post({action:"loadFileManager",id:g,level:f,folder:d,state:1,REQUEST_TOKEN:REQUEST_TOKEN});return false},togglePagetree:function(b,g,e,a,f){b.blur();var c=$(g);var d=$(b).getFirst("img");if(c){if(c.getStyle("display")=="none"){c.setStyle("display","inline");d.src=d.src.replace("folPlus.gif","folMinus.gif");$(b).title=CONTAO_COLLAPSE;new Request.Contao({field:b}).post({action:"togglePagetree",id:g,state:1,REQUEST_TOKEN:REQUEST_TOKEN})}else{c.setStyle("display","none");d.src=d.src.replace("folMinus.gif","folPlus.gif");$(b).title=CONTAO_EXPAND;new Request.Contao({field:b}).post({action:"togglePagetree",id:g,state:0,REQUEST_TOKEN:REQUEST_TOKEN})}return false}new Request.Contao({field:b,evalScripts:true,onRequest:AjaxRequest.displayBox(CONTAO_LOADING+" …"),onSuccess:function(i,k){var h=new Element("li",{id:g,"class":"parent",styles:{display:"inline"}});var j=new Element("ul",{"class":"level_"+f,html:i}).inject(h,"bottom");h.inject($(b).getParent("li"),"after");$(b).title=CONTAO_COLLAPSE;d.src=d.src.replace("folPlus.gif","folMinus.gif");AjaxRequest.hideBox();window.fireEvent("ajax_change")}}).post({action:"loadPagetree",id:g,level:f,field:e,name:a,state:1,REQUEST_TOKEN:REQUEST_TOKEN});return false},toggleFiletree:function(b,h,d,f,a,g){b.blur();var c=$(h);var e=$(b).getFirst("img");if(c){if(c.getStyle("display")=="none"){c.setStyle("display","inline");e.src=e.src.replace("folPlus.gif","folMinus.gif");$(b).title=CONTAO_COLLAPSE;new Request.Contao({field:b}).post({action:"toggleFiletree",id:h,state:1,REQUEST_TOKEN:REQUEST_TOKEN})}else{c.setStyle("display","none");e.src=e.src.replace("folMinus.gif","folPlus.gif");$(b).title=CONTAO_EXPAND;new Request.Contao({field:b}).post({action:"toggleFiletree",id:h,state:0,REQUEST_TOKEN:REQUEST_TOKEN})}return false}new Request.Contao({field:b,evalScripts:true,onRequest:AjaxRequest.displayBox(CONTAO_LOADING+" …"),onSuccess:function(j,l){var i=new Element("li",{id:h,"class":"parent",styles:{display:"inline"}});var k=new Element("ul",{"class":"level_"+g,html:j}).inject(i,"bottom");i.inject($(b).getParent("li"),"after");$(b).title=CONTAO_COLLAPSE;e.src=e.src.replace("folPlus.gif","folMinus.gif");AjaxRequest.hideBox();window.fireEvent("ajax_change")}}).post({action:"loadFiletree",id:h,level:g,folder:d,field:f,name:a,state:1,REQUEST_TOKEN:REQUEST_TOKEN});return false},reloadFiletrees:function(){$$(".filetree").each(function(b){var a=b.id;var c=a.replace(/_[0-9]+$/,"");new Request.Contao({evalScripts:true,onRequest:AjaxRequest.displayBox(CONTAO_LOADING+" …"),onSuccess:function(e,g){var f=$(b.id+"_parent").getFirst("ul");var d=f.getLast("li");f.set("html",e);d.inject(f,"bottom");AjaxRequest.hideBox();window.fireEvent("ajax_change")}}).post({action:"loadFiletree",field:c,name:a,REQUEST_TOKEN:REQUEST_TOKEN})})},toggleSubpalette:function(a,d,c){a.blur();var b=$(d);if(b){if(!a.value){a.value=1;a.checked="checked";b.setStyle("display","block");new Request.Contao({field:a}).post({action:"toggleSubpalette",id:d,field:c,state:1,REQUEST_TOKEN:REQUEST_TOKEN})}else{a.value="";a.checked="";b.setStyle("display","none");new Request.Contao({field:a}).post({action:"toggleSubpalette",id:d,field:c,state:0,REQUEST_TOKEN:REQUEST_TOKEN})}return}new Request.Contao({field:a,evalScripts:false,onRequest:AjaxRequest.displayBox(CONTAO_LOADING+" …"),onSuccess:function(e,f){var g=new Element("div",{id:d,html:e,styles:{display:"block"}}).inject($(a).getParent("div").getParent("div"),"after");if(f.javascript){$exec(f.javascript)}a.value=1;a.checked="checked";AjaxRequest.hideBox();Backend.styleFormFields();Backend.hideTreeBody();Backend.addInteractiveHelp();Backend.addColorPicker();window.fireEvent("subpalette");window.fireEvent("ajax_change")}}).post({action:"toggleSubpalette",id:d,field:c,load:1,state:1,REQUEST_TOKEN:REQUEST_TOKEN})},toggleVisibility:function(d,h,e){d.blur();var a=null;var f=$(d).getFirst("img");var c=(f.src.indexOf("invisible")!=-1);var g=d.getParent("div");if(g.hasClass("tl_right")){a=g.getPrevious("div").getElement("img")}else{if(g.hasClass("tl_listing_container")){a=d.getParent("td").getPrevious("td").getFirst("div.list_icon");if(a==null){a=d.getParent("td").getPrevious("td").getElement("div.cte_type")}if(a==null){a=d.getParent("tr").getFirst("td").getElement("div.list_icon_new")}}else{if((next=g.getNext("div"))&&next.hasClass("cte_type")){a=next}}}if(a!=null){if(a.nodeName.toLowerCase()=="img"){if(a.getParent("ul.tl_listing").hasClass("tl_tree_xtnd")){if(c){a.src=a.src.replace(/_\.(gif|png|jpe?g)/,".$1")}else{a.src=a.src.replace(/\.(gif|png|jpe?g)/,"_.$1")}}else{if(a.src.match(/folPlus|folMinus/)){if(a.getParent("a").getNext("a")){a=a.getParent("a").getNext("a").getFirst("img")}else{a=new Element("img")}}if(c){var b=a.src.replace(/.*_([0-9])\.(gif|png|jpe?g)/,"$1");a.src=a.src.replace(/_[0-9]\.(gif|png|jpe?g)/,((b.toInt()==1)?"":"_"+(b.toInt()-1))+".$1")}else{var b=a.src.replace(/.*_([0-9])\.(gif|png|jpe?g)/,"$1");a.src=a.src.replace(/(_[0-9])?\.(gif|png|jpe?g)/,((b==a.src)?"_1":"_"+(b.toInt()+1))+".$2")}}}else{if(a.hasClass("cte_type")){if(c){a.addClass("published");a.removeClass("unpublished")}else{a.addClass("unpublished");a.removeClass("published")}}else{if(c){a.setStyle("background-image",a.getStyle("background-image").replace(/_\.(gif|png|jpe?g)/,".$1"))}else{a.setStyle("background-image",a.getStyle("background-image").replace(/\.(gif|png|jpe?g)/,"_.$1"))}}}}if(e=="tl_style"){g.getParent("div").getElement("pre").toggleClass("disabled")}if(c){f.src=f.src.replace("invisible.gif","visible.gif");new Request({url:window.location.href}).get({tid:h,state:1})}else{f.src=f.src.replace("visible.gif","invisible.gif");new Request({url:window.location.href}).get({tid:h,state:0})}return false},toggleFeatured:function(a,d){a.blur();var b=$(a).getFirst("img");var c=(b.src.indexOf("featured_")==-1);if(!c){b.src=b.src.replace("featured_.gif","featured.gif");new Request.Contao().post({action:"toggleFeatured",id:d,state:1,REQUEST_TOKEN:REQUEST_TOKEN})}else{b.src=b.src.replace("featured.gif","featured_.gif");new Request.Contao().post({action:"toggleFeatured",id:d,state:0,REQUEST_TOKEN:REQUEST_TOKEN})}return false},toggleFieldset:function(b,d,c){b.blur();var a=$("pal_"+d);if(a.hasClass("collapsed")){a.removeClass("collapsed");new Request.Contao().post({action:"toggleFieldset",id:d,table:c,state:1,REQUEST_TOKEN:REQUEST_TOKEN})}else{a.addClass("collapsed");new Request.Contao().post({action:"toggleFieldset",id:d,table:c,state:0,REQUEST_TOKEN:REQUEST_TOKEN})}return false},toggleCheckboxGroup:function(a,d){a.blur();var b=$(d);var c=$(a).getFirst("img");if(b){if(b.getStyle("display")!="block"){b.setStyle("display","block");c.src=c.src.replace("folPlus.gif","folMinus.gif");new Request.Contao().post({action:"toggleCheckboxGroup",id:d,state:1,REQUEST_TOKEN:REQUEST_TOKEN})}else{b.setStyle("display","none");c.src=c.src.replace("folMinus.gif","folPlus.gif");new Request.Contao().post({action:"toggleCheckboxGroup",id:d,state:0,REQUEST_TOKEN:REQUEST_TOKEN})}return true}return false},liveUpdate:function(b,c){var a=$(c);if(!a){return}new Request.Contao({onRequest:$("lu_message").set("html",'<p class="tl_info">Connecting to live update server</p>'),onSuccess:function(d,e){if(d){$("lu_message").set("html",e.content)}else{$(b).submit()}}}).post({action:"liveUpdate",id:a.value,REQUEST_TOKEN:REQUEST_TOKEN})},displayBox:function(d){var c=$("tl_ajaxBox");var b=$("tl_ajaxOverlay");var a=window.getScroll();if(b==null){b=new Element("div",{id:"tl_ajaxOverlay"}).inject($(document.body),"bottom")}b.set({styles:{display:"block",top:a.y+"px"}});if(c==null){c=new Element("div",{id:"tl_ajaxBox"}).inject($(document.body),"bottom")}c.set({html:d,styles:{display:"block",top:(a.y+18)+"px"}})},hideBox:function(){var b=$("tl_ajaxBox");var a=$("tl_ajaxOverlay");if(a){a.setStyle("display","none")}if(b){b.setStyle("display","none")}}};var Backend={currentId:null,xMousePosition:0,yMousePosition:0,popupWindow:null,getMousePosition:function(a){Backend.xMousePosition=a.client.x;Backend.yMousePosition=a.client.y},openWindow:function(c,b,a){c.blur();b=Browser.Engine.trident?(b+40):(b+17);a=Browser.Engine.trident?(a+30):(a+17);Backend.popupWindow=window.open(c.href,"","width="+b+",height="+a+",modal=yes,left=100,top=50,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no")},getScrollOffset:function(){document.cookie="BE_PAGE_OFFSET="+window.getScroll().y+"; path=/"},autoSubmit:function(a){Backend.getScrollOffset();var c=new Element("input",{type:"hidden",name:"SUBMIT_TYPE",value:"auto"});var b=$(a);c.inject(b,"bottom");b.submit()},vScrollTo:function(a){window.addEvent("load",function(){window.scrollTo(null,parseInt(a))})},showTreeBody:function(a,b){a.blur();$(b).setStyle("display",($(a).checked?"inline":"none"))},hideTreeBody:function(){var a=$$("ul");for(var b=0;b<a.length;b++){if(a[b].hasClass("mandatory")){$("ctrl_"+a[b].id).checked="checked"}else{if(a[b].hasClass("tl_listing")&&(parent=a[b].getFirst("li").getNext("li"))&&parent.hasClass("parent")){parent.setStyle("display","none")}}}},limitPreviewHeight:function(){var b=null;var d=null;var c="";var a=0;$$("div.limit_height").each(function(f){b=f.getCoordinates();if(a==0){a=f.className.replace(/[^0-9]*/,"").toInt()}if(!$chk(a)){return}f.setStyle("height",a);var e=CONTAO_SCRIPT_URL+"system/themes/"+CONTAO_THEME+"/images/";d=new Element("img",{"class":"limit_toggler",alt:"",width:20,height:24});if(b.height<a){d.src=e+"expand_.gif";d.inject(f,"after");return}d.src=e+"expand.gif";d.setStyle("cursor","pointer");d.addEvent("click",function(){c=this.getPrevious("div").getStyle("height").toInt();this.getPrevious("div").setStyle("height",((c>a)?a:""));this.src=(this.src.indexOf("expand.gif")!=-1)?e+"collapse.gif":e+"expand.gif"});d.inject(f,"after")})},toggleCheckboxes:function(c,e){var b=$$("input");var a=c.checked?"checked":"";for(var d=0;d<b.length;d++){if(b[d].type.toLowerCase()!="checkbox"){continue}if(e&&b[d].id.substr(0,e.length)!=e){continue}b[d].checked=a}},toggleCheckboxGroup:function(c,e){var b=$(c).className;var a=$(c).checked?"checked":"";if(b=="tl_checkbox"){var d=$(e)?$$("#"+e+" .tl_checkbox"):$(c).getParent("fieldset").getElements(".tl_checkbox");d.each(function(f){f.checked=a})}else{if(b=="tl_tree_checkbox"){$$("#"+e+" .parent .tl_tree_checkbox").each(function(f){f.checked=a})}}Backend.getScrollOffset()},toggleCheckboxElements:function(c,b){var a=$(c).checked?"checked":"";$$("."+b).each(function(d){if(d.hasClass("tl_checkbox")){d.checked=a}});Backend.getScrollOffset()},toggleWrap:function(e){var b=$(e);var a=(b.getProperty("wrap")=="off")?"soft":"off";b.setProperty("wrap",a);if(!Browser.Engine.trident){var c=b.value;var d=b.clone();d.setProperty("wrap",a);d.setProperty("id",$(e).getProperty("id"));d.value=c;d.replaces(b)}},blink:function(){var a=null;$$("img.blink").each(function(b){if(a==null){a=b.hasClass("opacity")}if(a){b.removeClass("opacity")}else{b.addClass("opacity")}})},addColorPicker:function(){},pickPage:function(c){var b=320;var a=112;Backend.currentId=c;Backend.ppValue=$(c).value;Backend.getScrollOffset();window.open($$("base")[0].href+"contao/page.php?value="+Backend.ppValue,"","width="+b+",height="+a+",modal=yes,left="+(Backend.xMousePosition?(Backend.xMousePosition-(b/2)):200)+",top="+(Backend.yMousePosition?(Backend.yMousePosition-(a/2)+80):100)+",location=no,menubar=no,resizable=yes,scrollbars=no,status=no,toolbar=no")},pickFile:function(c){var b=320;var a=112;Backend.currentId=c;Backend.ppValue=$(c).value;Backend.getScrollOffset();window.open($$("base")[0].href+"contao/file.php?value="+Backend.ppValue,"","width="+b+",height="+a+",modal=yes,left="+(Backend.xMousePosition?(Backend.xMousePosition-(b/2)):200)+",top="+(Backend.yMousePosition?(Backend.yMousePosition-(a/2)+80):100)+",location=no,menubar=no,resizable=yes,scrollbars=no,status=no,toolbar=no")},collapsePalettes:function(a){$$("fieldset.hide").each(function(b){b.addClass("collapsed")});$$("label.error","label.mandatory").each(function(b){if(fs=b.getParent("fieldset")){fs.removeClass("collapsed")}})},addInteractiveHelp:function(){$$("p.tl_tip").each(function(a){if(a.retrieve("complete")){return}a.addEvent("mouseover",function(){a.timo=setTimeout(function(){var b=a.getTop();var c=$("tl_helpBox");if(!c){c=new Element("div",{id:"tl_helpBox"}).inject($(document.body),"after")}c.set({html:a.get("html"),styles:{display:"block",top:(b+18)+"px"}})},1000)});a.addEvent("mouseout",function(){var b=$("tl_helpBox");if(b){b.setStyle("display","none")}clearTimeout(a.timo)});a.store("complete",true)})},makeParentViewSortable:function(a){var b=new Sortables(a,{contstrain:true,opacity:0.6});b.active=false;b.addEvent("start",function(){b.active=true});b.addEvent("complete",function(e){if(!b.active){return}if(e.getPrevious("li")){var g=e.get("id").replace(/li_/,"");var d=e.getPrevious("li").get("id").replace(/li_/,"");var f=window.location.search.replace(/id=[0-9]*/,"id="+g)+"&act=cut&mode=1&pid="+d;var c=window.location.href.replace(/\?.*$/,"");new Request({url:c+f}).get()}else{if(e.getParent("ul")){var g=e.get("id").replace(/li_/,"");var d=e.getParent("ul").get("id").replace(/ul_/,"");var f=window.location.search.replace(/id=[0-9]*/,"id="+g)+"&act=cut&mode=2&pid="+d;var c=window.location.href.replace(/\?.*$/,"");new Request({url:c+f}).get()}}})},makeTreeViewSortable:function(){window.addEvent("structure",function(){document.getElements('#tl_listing a[href*="act=paste&mode=cut"]').getParent("li").addClass("sortable")}).fireEvent("structure");var a=new Tree(document.getElement("#tl_listing > ul"),{indicatorOffset:40,checkDrag:function(c,d,b){return c.hasClass("sortable")},checkDrop:function(c,d,b){if(!c.hasClass("sortable")){return false}if(a.current.getNext("li")&&a.current.getNext("li").hasClass("parent")&&Array.flatten(a.current.getNext("li").getElements("li")).contains(c)){return false}console.log(a.drop);if(a.drop&&(a.drop.where=="before"||!a.drop.isSubnode)&&c.getParent("ul").hasClass("tl_listing")&&!c.getSiblings(".tl_folder_top")[0].hasClass("rootPaste")){return false}return true}});a.addEvent("change",function(){var d=a.current;if(d.getPrevious()){var f=d.get("id").replace(/li_/,"");if(d.getPrevious().hasClass("tl_folder_top")){var c=0}else{var c=d.getPrevious(":not(.parent)").get("id").replace(/li_/,"")}var e=window.location.search+"&act=cut&mode=1&pid="+c+"&id="+f;var b=window.location.href.replace(/\?.*$/,"");new Request.Contao({url:b+e}).get()}else{if(d.getParent("li")){var f=d.get("id").replace(/li_/,"");var c=d.getParent("li").getPrevious().get("id").replace(/li_/,"");var e=window.location.search+"&act=cut&mode=2&pid="+c+"&id="+f;var b=window.location.href.replace(/\?.*$/,"");new Request.Contao({url:b+e}).get()}}})},listWizard:function(b,c,a){var f=$(a);var j=$(b).getParent("li");var g=f.getChildren();Backend.getScrollOffset();switch(c){case"copy":var h=j.clone(true).inject(j,"before");if(input=j.getFirst("input")){h.getFirst("input").value=input.value}break;case"up":if(previous=j.getPrevious("li")){j.inject(previous,"before")}else{j.inject(f,"bottom")}break;case"down":if(next=j.getNext("li")){j.inject(next,"after")}else{j.inject(f.getFirst("li"),"before")}break;case"delete":if(g.length>1){j.destroy()}break}rows=f.getChildren();var d=1;for(var e=0;e<rows.length;e++){if(input=rows[e].getFirst('input[type="text"]')){input.set("tabindex",d++)}}},tableWizard:function(c,e,n){var s=$(n);var a=s.getElement("tbody");var k=a.getChildren();var m=$(c).getParent("td");var f=m.getParent("tr");var l=f.getChildren();var h=0;for(var r=0;r<l.length;r++){if(l[r]==m){break}h++}Backend.getScrollOffset();switch(e){case"rcopy":var b=new Element("tr");for(var r=0;r<l.length;r++){var o=l[r].clone(true).inject(b,"bottom");if(textarea=l[r].getFirst("textarea")){o.getFirst("textarea").value=textarea.value}}b.inject(f,"after");break;case"rup":var d=f.getPrevious("tr");if(d.getPrevious("tr")){f.inject(d,"before")}else{f.inject(a,"bottom")}break;case"rdown":if(o=f.getNext("tr")){f.inject(o,"after")}else{f.inject(a.getFirst("tr").getNext("tr"),"before")}break;case"rdelete":if(k.length>2){f.destroy()}break;case"ccopy":for(var r=0;r<k.length;r++){var p=k[r].getChildren()[h];var o=p.clone(true).inject(p,"after");if(textarea=p.getFirst("textarea")){o.getFirst("textarea").value=textarea.value}}break;case"cmovel":if(h>0){for(var r=0;r<k.length;r++){var p=k[r].getChildren()[h];p.inject(p.getPrevious(),"before")}}else{for(var r=0;r<k.length;r++){var p=k[r].getChildren()[h];p.inject(k[r].getLast(),"before")}}break;case"cmover":if(h<(l.length-2)){for(var r=0;r<k.length;r++){var p=k[r].getChildren()[h];p.inject(p.getNext(),"after")}}else{for(var r=0;r<k.length;r++){var p=k[r].getChildren()[h];p.inject(k[r].getFirst(),"before")}}break;case"cdelete":if(l.length>2){for(var r=0;r<k.length;r++){k[r].getChildren()[h].destroy()}}break}k=a.getChildren();var t=1;for(var r=0;r<k.length;r++){var g=k[r].getChildren();for(var q=0;q<g.length;q++){if(textarea=g[q].getFirst("textarea")){textarea.set("tabindex",t++);textarea.name=textarea.name.replace(/\[[0-9]+\][[0-9]+\]/ig,"["+(r-1)+"]["+q+"]")}}}Backend.tableWizardResize()},tableWizardResize:function(b){var a=Cookie.read("BE_CELL_SIZE");if(a==null&&b==null){return}if(b!=null){var a="";$$(".tl_tablewizard textarea").each(function(d){d.setStyle("width",(d.getStyle("width").toInt()*b).round().limit(142,284));d.setStyle("height",(d.getStyle("height").toInt()*b).round().limit(66,132));if(a==""){a=d.getStyle("width")+"|"+d.getStyle("height")}});Cookie.write("BE_CELL_SIZE",a)}else{if(a!=null){var c=a.split("|");$$(".tl_tablewizard textarea").each(function(d){d.setStyle("width",c[0]);d.setStyle("height",c[1])})}}},moduleWizard:function(b,c,a){var n=$(a);var g=n.getElement("tbody");var m=$(b).getParent("tr");var o=g.getChildren();Backend.getScrollOffset();switch(c){case"copy":var l=new Element("tr");var k=m.getChildren();for(var f=0;f<k.length;f++){var h=k[f].clone(true).inject(l,"bottom");if(select=k[f].getFirst("select")){h.getFirst("select").value=select.value}}l.inject(m,"after");l.getElement(".chzn-container").destroy();new Chosen(l.getElement("select.tl_select"));break;case"up":if(l=m.getPrevious("tr")){m.inject(l,"before")}else{m.inject(g,"bottom")}break;case"down":if(l=m.getNext("tr")){m.inject(l,"after")}else{m.inject(g,"top")}break;case"delete":if(o.length>1){m.destroy()}break}o=g.getChildren();var e=1;for(var f=0;f<o.length;f++){var k=o[f].getChildren();for(var d=0;d<k.length;d++){if(select=k[d].getFirst("select")){select.set("tabindex",e++);select.name=select.name.replace(/\[[0-9]+\]/ig,"["+f+"]")}}}},optionsWizard:function(b,d,a){var o=$(a);var h=o.getElement("tbody");var n=$(b).getParent("tr");var p=h.getChildren();Backend.getScrollOffset();switch(d){case"copy":var m=new Element("tr");var l=n.getChildren();for(var g=0;g<l.length;g++){var k=l[g].clone(true).inject(m,"bottom");if(input=l[g].getFirst("input")){k.getFirst("input").value=input.value;if(input.type=="checkbox"){k.getFirst("input").checked=input.checked?"checked":""}}}m.inject(n,"after");break;case"up":if(m=n.getPrevious("tr")){n.inject(m,"before")}else{n.inject(h,"bottom")}break;case"down":if(m=n.getNext("tr")){n.inject(m,"after")}else{n.inject(h,"top")}break;case"delete":if(p.length>1){n.destroy()}break}p=h.getChildren();var c=["value","label","default"];var f=1;for(var g=0;g<p.length;g++){var l=p[g].getChildren();for(var e=0;e<l.length;e++){if(input=l[e].getFirst("input")){input.set("tabindex",f++);input.name=input.name.replace(/\[[0-9]+\]/g,"["+g+"]");if(input.type=="checkbox"){input.id=input.name.replace(/\[[0-9]+\]/g,"").replace(/\[/g,"_").replace(/\]/g,"")+"_"+g;input.getNext("label").set("for",input.id)}}}}},keyValueWizard:function(b,d,a){var o=$(a);var h=o.getElement("tbody");var n=$(b).getParent("tr");var p=h.getChildren();Backend.getScrollOffset();switch(d){case"copy":var m=new Element("tr");var l=n.getChildren();for(var g=0;g<l.length;g++){var k=l[g].clone(true).inject(m,"bottom");if(input=l[g].getFirst("input")){k.getFirst().value=input.value}}m.inject(n,"after");break;case"up":if(m=n.getPrevious("tr")){n.inject(m,"before")}else{n.inject(h,"bottom")}break;case"down":if(m=n.getNext("tr")){n.inject(m,"after")}else{n.inject(h,"top")}break;case"delete":if(p.length>1){n.destroy()}break}p=h.getChildren();var c=["key","value"];var f=1;for(var g=0;g<p.length;g++){var l=p[g].getChildren();for(var e=0;e<l.length;e++){if(input=first=l[e].getFirst("input")){input.set("tabindex",f++);input.name=input.name.replace(/\[[0-9]+\]/g,"["+g+"]")}}}},checkboxWizard:function(c,d,e){var a=$(e);var b=$(c).getParent("span");Backend.getScrollOffset();switch(d){case"up":if((span=b.getPrevious("span"))&&!span.hasClass("fixed")){b.inject(span,"before")}else{b.inject(a,"bottom")}break;case"down":if(span=b.getNext("span")){b.inject(span,"after")}else{if(all=a.getFirst("span.fixed")){b.inject(all,"after")}}break}},styleFormFields:function(){$$("select").each(function(b){if(b.getStyle("display")=="none"){return}if((active=b.getElement("option[selected]"))!=null){var a=active.get("html")}else{var a=b.getElement("option").get("html")}var c=new Element("div",{id:b.get("id")+"_styled","class":"styled_select",html:"<span>"+a+"</span><b><i></i></b>",styles:{width:b.getStyle("width").toInt()-4}}).inject(b,"before");if(b.hasClass("right-aligned")){c.setStyle("left",b.getPosition().x)}if(b.hasClass("active")){c.addClass("active")}b.addEvent("change",function(){var d=b.getElement('option[value="'+b.value+'"]');c.getElement("span").set("html",d.get("html"))}).setStyle("opacity",0);if(Browser.Engine.webkit||Browser.Engine.trident){b.setStyle("margin-bottom","4px");c.setStyle("width",c.getStyle("width").toInt()-4)}})}};document.addEvent("mousedown",function(a){Backend.getMousePosition(a)});window.addEvent("domready",function(){Backend.styleFormFields();Backend.hideTreeBody();Backend.blink.periodical(600);$$("textarea.monospace").each(function(a){Backend.toggleWrap(a)});Backend.collapsePalettes();Backend.addInteractiveHelp();Backend.addColorPicker()});window.addEvent("load",function(){Backend.limitPreviewHeight()});var ContextMenu={initialize:function(){$$("a.edit-header").each(function(a){a.addClass("invisible")});$$("a.contextmenu").each(function(b){var a=b.getNext("a");if(!a||!a.hasClass("edit-header")){return}b.addEvent("contextmenu",function(c){c.preventDefault();ContextMenu.show(b,a,c)})});$(document.body).addEvent("click",function(){ContextMenu.hide()})},show:function(d,c,f){ContextMenu.hide();var b=d.getFirst("img");var a=c.getFirst("img");var g=new Element("div",{id:"contextmenu",html:'<a href="'+d.href+'" title="'+d.title+'">'+d.get("html")+" "+b.alt+'</a><a href="'+c.href+'" title="'+c.title+'">'+c.get("html")+" "+a.alt+"</a>",styles:{top:(d.getPosition().y-6)+"px"}}).inject($(document.body),"bottom");g.setStyle("left",d.getPosition().x-(g.getSize().x/2))},hide:function(){if($("contextmenu")!=null){$("contextmenu").destroy()}}};window.addEvent("domready",function(){ContextMenu.initialize()});window.addEvent("structure",function(){ContextMenu.initialize()});var TinyCallback={getScrollOffset:function(a){tinymce.dom.Event.add((tinymce.isGecko?a.getDoc():a.getWin()),"focus",function(b){Backend.getScrollOffset()})}};Class.Binds=new Class({$bound:{},bound:function(a){return this.$bound[a]?this.$bound[a]:this.$bound[a]=this[a].bind(this)}});(function(){var b={storage:{},store:function(c,d){this.storage[c]=d},retrieve:function(c){return this.storage[c]||null}};Class.Singleton=function(){this.$className=String.uniqueID()};Class.Singleton.prototype.check=function(d){if(!d){d=b}var c=d.retrieve("single:"+this.$className);if(!c){d.store("single:"+this.$className,this)}return c};var a=function(c){var d=c.prototype.$className;return d?this.retrieve("single:"+d):null};if(("Element" in this)&&Element.implement){Element.implement({getInstanceOf:a})}Class.getInstanceOf=a.bind(b)})();(function(){this.Tree=new Class({Implements:[Options,Events,Class.Binds,Class.Singleton],options:{indicatorOffset:0,cloneOffset:{x:16,y:16},cloneOpacity:0.8,checkDrag:Function.from(true),checkDrop:Function.from(true)},initialize:function(b,a){this.setOptions(a);b=this.element=document.id(b);return this.check(b)||this.setup()},setup:function(){this.indicator=new Element("div.treeIndicator");var a=this;this.handler=function(b){a.mousedown(this,b)};this.attach()},attach:function(){this.element.addEvents({mouseenter:function(){this.element.addEvent("mousemove",function(a){if(a.target.get("tag")=="li"&&a.target.hasClass("sortable")&&a.event.offsetX<=10){document.body.style.cursor="move";document.addEvent("mouseup",this.bound("mouseup"));this.element.addEvent("mousedown:relay(li)",this.handler)}else{document.body.style.cursor="auto";this.element.removeEvents("mousedown").removeEvents("mouseup")}}.bind(this))}.bind(this),mouseleave:function(){this.element.removeEvents("mousemove")}.bind(this)})},detach:function(){this.element.removeEvent("mousedown:relay(li)",this.handler);document.removeEvent("mouseup",this.bound("mouseup"));return this},mousedown:function(a,b){b.preventDefault();this.padding=(this.element.getElement("li ul li")||this.element.getElement("li")).getLeft()-this.element.getLeft()+this.options.indicatorOffset;if(this.collapse===undefined&&typeof Collapse!="undefined"){this.collapse=this.element.getInstanceOf(Collapse)}if(!this.options.checkDrag.call(this,a)){return}if(this.collapse&&Slick.match(b.target,this.collapse.options.selector)){return}this.current=a;this.clone=a.clone().setStyles({left:b.page.x+this.options.cloneOffset.x,top:b.page.y+this.options.cloneOffset.y,opacity:this.options.cloneOpacity,width:a.getSize().x}).addClass("drag");this.clone.getElement(".tl_right").destroy();this.clone.inject(document.body);this.clone.makeDraggable({droppables:this.element.getElements("li span"),onLeave:this.bound("hideIndicator"),onDrag:this.bound("onDrag"),onDrop:this.bound("onDrop")}).start(b)},mouseup:function(){if(this.clone){this.clone.destroy()}},onDrag:function(d,b){clearTimeout(this.timer);if(this.previous){this.previous.fade(1)}this.previous=null;if(!b||!b.target){return}var h=(b.target.get("tag")=="li")?b.target:b.target.getParent("li");if(!h||this.element==h||!this.element.contains(h)){return}if(this.collapse){this.expandCollapsed(h)}var i=h.getCoordinates(),c=h.getStyle("marginTop").toInt(),a=i.top+c+(i.height/2),f=(b.page.x>i.left+this.padding),g={x:i.left+(f?this.padding:0),y:i.top};var e;if([h,h.getParent("li")].contains(this.current)){this.drop={}}else{if(b.page.y>=a){g.y+=i.height;e={target:h,where:"after",isSubnode:f};if(!this.options.checkDrop.call(this,h,e)){return}this.setDropTarget(e)}else{if(b.page.y<a){g.x=i.left;e={target:h,where:"before"};if(!this.options.checkDrop.call(this,h,e)){return}this.setDropTarget(e)}}}if(this.drop.target){this.showIndicator(g)}else{this.hideIndicator()}},onDrop:function(c){c.destroy();this.hideIndicator();var a=this.drop,e=this.current;if(!a||!a.target){return}var d=e.getParent("li");var b=e.getNext("li");if(a.isSubnode){if(a.target.getNext("li")&&a.target.getNext("li").hasClass("parent")){e.inject(a.target.getNext("li").getElement("ul"),"top")}else{new Element("li",{"class":"parent"}).adopt(new Element("ul").adopt(e)).inject(a.target,"after")}}else{if(a.where=="after"&&a.target.getNext("li")&&a.target.getNext("li").hasClass("parent")){e.inject(a.target.getNext("li"),"after")}else{e.inject(a.target,a.where||"after")}}this.updateLevel(e);if(b&&b.hasClass("parent")){b.inject(e,"after");this.updateLevel(b)}if(this.collapse){if(d){this.collapse.updateElement(d)}this.collapse.updateElement(a.target)}this.fireEvent("change")},setDropTarget:function(a){this.drop=a},showIndicator:function(a){this.indicator.setStyles({left:a.x+this.options.indicatorOffset,top:a.y}).inject(document.body)},hideIndicator:function(){this.indicator.dispose()},expandCollapsed:function(a){var b=a.getElement("ul");if(!b||!this.collapse.isCollapsed(b)){return}a.set("tween",{duration:150}).fade(0.5);this.previous=a;this.timer=(function(){a.fade(1);this.collapse.expand(a)}).delay(300,this)},serialize:function(b,c){if(!c){c=this.element}if(!b){b=function(d){return d.get("id")}}var a={};c.getChildren("li").each(function(d){var e=d.getElement("ul");a[b(d)]=e?this.serialize(b,e):true},this);return a},updateLevel:function(a){var b=a.getParents("ul").length-1;a.getElement(".tl_left").setStyle("padding-left",(b*20));a.getParent("ul").addClass(("level_"+(b-1)));a.getElements("li").each(function(c){this.updateLevel(c)}.bind(this))}})})();