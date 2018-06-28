var m = require("mithril");
import Icons from './#icons.js';

// export function menu() {
// 	m.render(document.getElementById('appMenu'), m(menu))
// }

export var menu = {
	hideMenu: "",
	oninit: function() {
		window.addEventListener('scroll', function() {
			var hideMenu;
			var shrinkOn = 200;
			var distanceY = window.pageYOffset || document.documentElement.scrollTop;
			if (distanceY > shrinkOn) { hideMenu = "dn"; }
			else { hideMenu = ""; }

			if (hideMenu !== menu.hideMenu) {
				menu.hideMenu = hideMenu;
				m.redraw();
			}
		});
	},
	linkItem : {
		view: function(vnode) {
			return(
				<a class="link" href={vnode.attrs.href}>
					<li class="tr" onclick={menu.toggle}>
						<p class="ph2 pv3 mv0 white hover-bg-white hover-blue fw5 tracked">
							{vnode.children}
						</p>
					</li>
				</a>
			)
		}
	},
	menuItem : {
		view: function(vnode) {
			return(
				<a class="link f5" oncreate={m.route.link} href={vnode.attrs.href}>
					<li class="tr" onclick={menu.toggle}>
						<p class="ph2 pv3 mv0 dark-green hover-bg-gradient hover-white fw5 tracked">
							{vnode.children}
						</p>
					</li>
				</a>
			)
		}
	},
	toggle: function() {
		var appmenuToggle = document.getElementById("menuToggle");
		var appmenuCover = document.getElementById("menuCover");
		appmenuCover.classList.toggle('dn');
		appmenuToggle.classList.toggle('animated');
		appmenuToggle.classList.toggle('bounceInRight');

		// document.getElementById("nav").classList.toggle('dn');
		// document.getElementById("menuBlur").classList.toggle('vh-100');
		document.getElementById("html").classList.toggle('overflow-hidden');
	},
	view: function(vnode) {
		return (
			<section id="menuBlur" class="z-max w-100 fixed">
				<div id="menuCover"  class=" absolute right-0 w-100 vh-100 fr dn pa0" style="">
					<ul id="menuToggle" class="fr list pl0 w-70 w-40-m bg-white vh-100 ma0" style="">
						<li class="tr">
							<p class="ph2 mv0 gray hover-red">
								<Icons name="cancel" class=" mh2 mv3 h1 dim dib dark-green" onclick={menu.toggle}/>
							</p>
						</li>

						{m(menu.menuItem,{href:"/",icon:"user"},"HOME")}
						{m(menu.menuItem,{href:"/aboutus",icon:"user"},"ABOUT US")}
						{m(menu.menuItem,{href:"/services",icon:"user"},"OUR SERVICES")}
						{m(menu.menuItem,{href:"/news",icon:"user"},"NEWS & EVENTS")}
						{m(menu.menuItem,{href:"/gallery",icon:"user"},"GALLERY")}
						{m(menu.menuItem,{href:"/contactus",icon:"user"},"CONTACT US")}

						<a class="link f5" oncreate={m.route.link} href="/webshop">
							<li class="tr" onclick={menu.toggle}>
								<p class="ph2 pv3 mv0 ">
									<small class="pa2 ph3 bg-dark-green b white br2 tracked hover-bg-gradient">WEB SHOP</small>
								</p>
							</li>
						</a>
					</ul>
				</div>

				<nav class={"w-100 mw8 center cf pv2 ph2 silver bg-near-white f6 "+menu.hideMenu}>
					<div class="w-100 mw8-l mw7-ns center">
						<span class="fl tl">
							<span class="dn dib-ns">
							<span class="mr4 pointer inline-flex items-center hover-black">
								<Icons name="chat" class="dib h1" />
								<span class="ml1 pr2">info@greenhouse.ng</span>
							</span>
							</span>

							<span class="pointer inline-flex items-center hover-black">
								<Icons name="headphones" class="dib h1" />
								<small class="ml1 pr2">(234) 813-136-7337</small>
							</span>
						</span>
						<span class="fr tr">
							<span class="pointer inline-flex items-center hover-black">
								<Icons name="cart" class="dib h1" />
								<small class="ml1 pr2">Cart</small>
							</span>

							<span class="ml4 pointer inline-flex items-center hover-green">
								<Icons name="key" class="dib h1" />
								<small class="ml1 pr2">Login</small>
							</span>
						</span>
					</div>
				</nav>

				<nav id="nav" class="w-100 mw8 center black z-5 " >
					<div class="w-100 mw8 center bg-white br2-l br--bottom-l cf">
						<img class="fl f5 h2 ma2 tracked fw5" src="../../assets/img/logo.svg" height=""/>
						<Icons name="menu" class="fr mr2 mv3 h1 dib dn-l white pa2 bg-dark-green br2" onclick={menu.toggle}/>
						<nav class="fr mv3 dn dib-l">
						  <a oncreate={m.route.link} class="link hover-red tracked black f6 dib mr4 b" href="/"><small>HOME</small></a>
						  <a oncreate={m.route.link} class="link hover-red tracked black f6 dib mr4 b" href="/aboutus"><small>ABOUT US</small></a>
						  <a oncreate={m.route.link} class="link hover-red tracked black f6 dib mr4 b" href="/services"><small>OUR SERVICES</small></a>
						  <a oncreate={m.route.link} class="link hover-red tracked black f6 dib mr4 b" href="/news"><small>NEWS &amp; EVENTS</small></a>
						  <a oncreate={m.route.link} class="link hover-red tracked black f6 dib mr4 b" href="/gallery"><small>GALLERY</small></a>
						  <a oncreate={m.route.link} class="link hover-red tracked black f6 dib mr4 b" href="/contactus"><small>CONTACT US</small></a>
							<a oncreate={m.route.link} class="link mh2 link white f6" href="/webshop">
								<small class="pa2 ph3 bg-dark-green b hover-bg-green br2 tracked">WEB SHOP</small>
							</a>
						</nav>
					</div>
				</nav>

				<div id="appAlert"></div>
			</section>
		)
	}
}

export default menu;
