var m = require("mithril")


//Generic Website Pages
import indexPage from './index.js';
import contactPage from './contactus.js';

import newsPage from './news.js';
import aboutusPage from './aboutus.js';
import galleryPage from './gallery.js';

import loginPage from './login.js';
import forgotPage from './forgot.js';
import documentationPage from './documentations.js';
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
	"/login":{ view: function(vnode) { return m(loginPage);},},
	"/forgot":{ view: function(vnode) { return m(forgotPage);},},

	"/aboutus":{ view: function(vnode) { return m(aboutusPage);},},
	"/gallery":{ view: function(vnode) { return m(galleryPage);},},
	"/contactus":{ view: function(vnode) { return m(contactPage);},},

	"/news":{ view: function(vnode) { return m(newsPage,vnode.attrs);},},
	"/news/:path":{ view: function(vnode) { return m(newsPage,vnode.attrs);},},

	"/shop":{ view: function(vnode) { return m(forgotPage);},},

	"/product/:path":{ view: function(vnode) { return m(forgotPage);},},

	"/documentations":{ view: function(vnode) { return m(documentationPage,vnode.attrs);},},
	"/documentations/:path":{ view: function(vnode) { return m(documentationPage,vnode.attrs);},},
});
