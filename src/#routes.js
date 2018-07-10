var m = require("mithril")


//Generic Website Pages
import indexPage from './index.js';
import contactPage from './contactus.js';
//

m.route.setOrig = m.route.set;
m.route.set = function(path, data, options){
	m.route.setOrig(path, data, options);
	window.scrollTo(0,0);
}

m.route.linkOrig = m.route.link;
m.route.link = function(vnode){
	m.route.linkOrig(vnode);
	window.scrollTo(0,0);
}

m.route.prefix("")
m.route.mode = "pathname"
m.route(document.getElementById('appContent'), "/", {
	"/":{ view: function(vnode) { return m(indexPage);},},
	"/contactus":{ view: function(vnode) { return m(contactPage);},},

});
