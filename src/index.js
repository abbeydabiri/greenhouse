import m from 'mithril';
import Siema from 'siema';

import menu from './#menu.js';
import footer from './#footer.js';
import Icons from './#icons.js';

import {appAlert} from './#utils.js';
import {checkRedirect} from './#utils.js';


var page = {

	clickedNewsletter: false,
	IpAddress:"", UserAgent:"",
	FormNewsletter : {Firstname:"",Lastname:"",Email:""},
	submitNewsletter: function() {
		var alert = []
		if (page.clickedNewsletter) {
			console.log("page.clickedNewsletter: "+page.clickedNewsletter)
			appAlert([{ message: "Signed up already!!" }]); return
		}


		page.FormNewsletter.IpAddress = page.IpAddress
		page.FormNewsletter.UserAgent = page.UserAgent

		if (page.FormNewsletter.Firstname.length == 0) { alert.push({ message: "First Name is required" }); }
		else if (page.FormNewsletter.Lastname.length < 3) { alert.push({ message: "Last Name is required" });}

		if (page.FormNewsletter.Lastname.length == 0) { alert.push({ message: "Last Name is required" }); }
		else if (page.FormNewsletter.Lastname.length < 3) { alert.push({ message: "Last Name is too short" }); }

		if (page.FormNewsletter.Email.length == 0) { alert.push({ message: "Email is required" }); }
		else if(!page.FormNewsletter.Email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
			alert.push({ message: "Email is invalid" });
		}

		if (alert.length > 0) {
			page.clickedNewsletter = false
			appAlert(alert)
			return
		}

		// startLoader();
		page.FormNewsletter.List = "signup-newsletter"
		page.FormNewsletter.Notify = "signup-newsletter-notify"
		m.request({ method: 'POST', url: "/api/signup-newsletter", data: page.FormNewsletter, }).then(function(response) {
			var lStoploader = true;
			if (response.Message !== null &&  response.Message !== "") {
				appAlert([{ message: response.Message }]);

			}
			// if(lStoploader) { stopLoader();}
		}).catch(function(error) {
			appAlert([{ message: error }]);
			// stopLoader();
		});

		page.clickedNewsletter = true
		page.FormNewsletter = {Firstname:"",Lastname:"",Email:""};
	},

	sliderInterval:30000, mySiema:{}, sliderTimeout:{}, sliderContainer:[],
	sliderPrev: function(vnode){ page.mySiema.prev(); clearTimeout(page.sliderTimeout);
		page.sliderTimeout = setTimeout(function(){page.sliderPrev()}, page.sliderInterval);
	},
	sliderNext: function(vnode){ page.mySiema.next(); clearTimeout(page.sliderTimeout);
		page.sliderTimeout = setTimeout(function(){page.sliderNext()}, page.sliderInterval);
	},
	sliderItem: { view: function(vnode) {
		return(m("div",{class:"w-100 vh-75 vh-50 parallaxBG", style:"background-image:url('../../"+vnode.attrs.filepath+"');"},))
	}},
	sliderInit: function(vnode){
		var searchList = [];
		searchList.push(m(page.sliderItem,{filepath:"assets/img/hero-3.jpg"}));
		searchList.push(m(page.sliderItem,{filepath:"assets/img/hero-1.jpg"}));
		searchList.push(m(page.sliderItem,{filepath:"assets/img/hero-2.jpg"}));
		if(searchList.length > 0) {
			page.sliderContainer = searchList; m.redraw();
			page.mySiema = new Siema({loop:true,duration: 750,});
			page.sliderTimeout = setTimeout(function(){page.sliderNext()}, page.sliderInterval);
		}
	},
	oninit:function(vnode){
		m.mount(document.getElementById('appMenu'), menu)
		m.mount(document.getElementById('appFooter'), footer);
		setTimeout(function(){page.sliderInit()},250);

		m.request({method:'GET', url: "https://icanhazip.com/",
			deserialize: function(value) {return value}}).then(function(response){
			page.IpAddress = response;
			page.UserAgent = navigator.userAgent;
		});

		//search for published gallery images and display them here


		//simple load list and show
	},
	view:function(vnode){
		return (
			<section style="" class="min-vh-100">
				<article class="pt3">
					<div class="flex flex-column flex-row-l">
						<div class="w-100 mw8 center relative">
							<div class="siema vh-75 vh-50 w-100">
								{page.sliderContainer}
							</div>

							<article class="absolute top-0 vh-75 vh-50 dt w-100 bg-black-20 ph4 ph0-ns">
							  <div class="dtc v-btm-m v-mid">
									<div class="measure center br2 ph2 tc bg-black-50 pa3 br3">
										<p class="f2-l f3-m f4 b b white"> Looking to go into Greeenhouse Farming?</p>
								    <a oncreate={m.route.link} class="f6 fw5 tracked no-underline white bg-body fw5 br2 pv3 ph4 dib" href="/contactus">
								      CONTACT US
								    </a>
										<Icons onclick={page.sliderPrev} name="chevron-left" class="absolute pointer h1 ph1 pv2 z-99 bg-black-50 br--right br2 light-gray left-0"/>
										<Icons onclick={page.sliderNext} name="chevron-right" class="absolute pointer h1 ph1 pv2 z-99 bg-black-50 br--left br2 light-gray right-0"/>
									</div>
								</div>
							</article>
						</div>
					</div>
				</article>

				<a name="aboutus"></a>
				<section class="mw8 bg-white tc center pa2">
					<h1 class="f1 i black athelas">
						About Us
						<p class="f4-ns f5 fw1 pv0 mv0">
							A quick introduction to www.greenhouse.ng
						</p>
					</h1>

					<section class="cf pv3">
						<div class="fl w-100 w-50-l pv2 ph2">
							<img class="br3 shadow-5" src="assets/img/main.jpeg"/>
						</div>

						<div class="fl w-100 w-50-l pv2 ph2 tj">
							<p class=" lh-copy">
								Looking to go into greenhouse farming? Look no further than greenhouse.ng.
							</p>
							<p class=" lh-copy">
								We provide you with every solution pertaining to greenhouse farming from a
								detailed business plan to selection of the appropriate greenhouse for the
								specific vegetable/crop to be grown, procurement, shipping & delivery to your f
								arm,installation and providing you with an agronomist to handle nursery preparation,
								transplanting, crop management, harvesting and market links.
							</p>

							<a oncreate={m.route.link} class="link link white f6" href="/contactus">
								<small class="pa2 ph3 bg-dark-green b hover-bg-near-white hover-black br2 tracked">Contact Us</small>
							</a>
						</div>
					</section>
				</section>

				<a name="gallery"></a>
				<section class="mw8 bg-near-white tc center pa2 br3 br--bottom pv3">
					<h1 class="f3 f2-ns i black athelas">
						FEATURED PRODUCTS
						<p class="f5 f4-ns fw1 pv0 mv0">
							Best & most popular of our greenhouses
						</p>
					</h1>

					<div class="fl tr w-100">
						<Icons name="chevron-left" class="h1 ph1 green pointer grow"/>
						<Icons name="chevron-right" class="h1 ph1 dark-green pointer grow"/>
					</div>
				  <div class="cf pa1">
				    <div class="dib w-50 w-25-ns pa2">
			        <img src="assets/img/item-1.jpeg" class="db w-100 br2 br--top"/>
						  <div class="pb3-ns tl">
						    <p class="f6 h3 overflow-hidden lh-copy measure mt2 mid-gray ttu">
						     FOR SALE
						    </p>
								<a oncreate={m.route.link} class="dim link white f6" href="/contactus">
									<small class="pa2 bg-dark-green hover-bg-near-white hover-black fw5 br1 tracked">Buy Now</small>
								</a>
						  </div>
				    </div>
				    <div class="dib w-50 w-25-ns pa2">
			        <img src="assets/img/item-2.jpeg" class="db w-100 br2 br--top"/>
						  <div class="pb3-ns tl">
						    <p class="f6 h3 overflow-hidden lh-copy measure mt2 mid-gray ttu">
						     FOR SALE
						    </p>
								<a oncreate={m.route.link} class="dim link white f6" href="/contactus">
									<small class="pa2 bg-dark-green hover-bg-near-white hover-black fw5 br1 tracked">Buy Now</small>
								</a>
						  </div>
				    </div>

						<div class="dib w-50 w-25-ns pa2">
			        <img src="assets/img/item-3.jpeg" class="db w-100 br2 br--top"/>
						  <div class="pb3-ns tl">
						    <p class="f6 h3 overflow-hidden lh-copy measure mt2 mid-gray ttu">
						     FOR SALE
						    </p>
								<a oncreate={m.route.link} class="dim link white f6" href="/contactus">
									<small class="pa2 bg-dark-green hover-bg-near-white hover-black fw5 br1 tracked">Buy Now</small>
								</a>
						  </div>
				    </div>

						<div class="dib w-50 w-25-ns pa2">
			        <img src="assets/img/item-4.jpeg" class="db w-100 br2 br--top"/>
						  <div class="pb3-ns tl">
						    <p class="f6 h3 overflow-hidden lh-copy measure mt2 mid-gray ttu">
						     FOR SALE
						    </p>
								<a oncreate={m.route.link} class="dim link white f6" href="/contactus">
									<small class="pa2 bg-dark-green hover-bg-near-white hover-black fw5 br1 tracked">Buy Now</small>
								</a>
						  </div>
				    </div>
				  </div>
				</section>

				<section class="dt w-100">
					<div class="dtc v-mid tc near-white">
						<div class="ph2 pv3">
						  <div class="pv3 mw6 mw7-l center br2 ">
						    <span class="cf bn ma0 pa0">
									<legend class="pa0 f5 f4-ns mb3 white-90 tc  ttu tracked w-100">COUNT ME IN</legend>
									<legend class="pa0 f6 f5-ns mb3 white-90 tc tracked w-100">
										<small>You can start by signing the guest book...</small>
									</legend>
						      <div class="fl w-50 w-25-l ph1 pv1">
										<label class="clip" for="first-name">First Name</label>
										{m("input",{ type:"text", placeholder: "Your First Name", value:page.FormNewsletter.Firstname,
											class: "f6 input-reset bn fl black bg-white w-100 pa3 lh-solid br2-ns",
											oninput: m.withAttr("value",function(value) {page.FormNewsletter.Firstname = value}),
											onkeyup: function(event) {if(event.key=="Enter"){page.submitNewsletter}}
										})}
									</div>
									<div class="fl w-50 w-25-l ph1 pv1">
										<label class="clip" for="last-name">Last Name</label>
										{m("input",{ type:"text", placeholder: "Your Last Name", value:page.FormNewsletter.Lastname,
											class: "f6 input-reset bn fl black bg-white w-100 pa3 lh-solid br2-ns",
											oninput: m.withAttr("value",function(value) {page.FormNewsletter.Lastname = value}),
											onkeyup: function(event) {if(event.key=="Enter"){page.submitNewsletter}}
										})}
									</div>
						      <div class="fl w-100 w-50-l ph1 pv1">
						        <label class="clip" for="email-address">Email Address</label>
										{m("input",{ type:"text", placeholder: "Your Email Address", value:page.FormNewsletter.Email,
											class: "f6 input-reset bn fl black bg-white pa3 lh-solid w-100 w-70-m w-70-l br2-ns br--left-ns",
											oninput: m.withAttr("value",function(value) {page.FormNewsletter.Email = value}),
											onkeyup: function(event) {if(event.key=="Enter"){page.submitNewsletter}}
										})}
										{m("span",{ onclick: page.submitNewsletter,
												class: "fl f6 pv3 tc bn bg-animate ttu tracked bg-near-white fw5 bg-body white pointer w-100 w-30-m w-30-l br2-ns br--right-ns",
										},"Sign Me Up")}
						      </div>
						    </span>
						  </div>
						</div>
					</div>
				</section>

			</section>
		)
	}
}

export default page;
