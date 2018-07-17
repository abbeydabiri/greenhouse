import m from 'mithril';
import Siema from 'siema';

import menu from './#menu.js';
import footer from './#footer.js';
import Icons from './#icons.js';

import {appAlert} from './#utils.js';
import {checkRedirect} from './#utils.js';


var page = {
	clickedContact: false, IpAddress:"", UserAgent:"",
	FormContact : {Title:"", Firstname:"", Lastname:"", Occupation:"", Email:"", Mobile:"", Message:"", IpAddress:"", UserAgent:""},
	submitContact: function(vnode) {
		var alert = []
		if (page.clickedContact) {
			console.log("page.clickedContact: "+page.clickedContact)
			appAlert([{ message: "Signed up already!!" }]); return
		}

		page.FormContact.IpAddress = page.IpAddress
		page.FormContact.UserAgent = page.UserAgent

		if (page.FormContact.Title.length == 0) { alert.push({ message: "Title is required" }); }
		else if (page.FormContact.Title.length < 2) { alert.push({ message: "Title is required" });}

		if (page.FormContact.Firstname.length == 0) { alert.push({ message: "First Name is required" }); }
		else if (page.FormContact.Firstname.length < 3) { alert.push({ message: "First Name is required" });}

		if (page.FormContact.Lastname.length == 0) { alert.push({ message: "Last Name is required" }); }
		else if (page.FormContact.Lastname.length < 3) { alert.push({ message: "Last Name is too short" }); }

		if (page.FormContact.Occupation.length == 0) { alert.push({ message: "Occupation is required" }); }
		else if (page.FormContact.Occupation.length < 3) { alert.push({ message: "Occupation is too short" }); }

		if (page.FormContact.Mobile.length == 0) { alert.push({ message: "Mobile is required" }); }
		else if (page.FormContact.Mobile.length < 3) { alert.push({ message: "Mobile is too short" }); }

		if (page.FormContact.Email.length == 0) { alert.push({ message: "Email is required" }); }
		else if(!page.FormContact.Email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
			alert.push({ message: "Email is invalid" });
		}

		if (page.FormContact.Message.length == 0) { alert.push({ message: "Message is required" }); }
		else if (page.FormContact.Message.length < 30) { alert.push({ message: "Message is too short" }); }


		if (alert.length > 0) {
			page.clickedContact = false
			appAlert(alert)
			return
		}

		// startLoader();
		page.FormContact.List = "send-us-message"
		page.FormContact.Notify = "send-us-message-notify"
		m.request({ method: 'POST', url: "/api/signup-newsletter", data: page.FormContact, }).then(function(response) {
			var lStoploader = true;
			if (response.Message !== null &&  response.Message !== "") {
				appAlert([{ message: response.Message }]);
			}
			// if(lStoploader) { stopLoader();}
		}).catch(function(error) {
			appAlert([{ message: error }]);
			// stopLoader();
		});

		page.clickedContact = true;
		page.FormContact = {Title:"", Firstname:"", Lastname:"", Occupation:"", Email:"", Mobile:"", Message:"", IpAddress:"", UserAgent:""}
	},
	oninit:function(vnode){
		m.request({method:'GET', url: "https://icanhazip.com/",
			deserialize: function(value) {return value}}).then(function(response){
			page.IpAddress = response;
			page.UserAgent = navigator.userAgent;
		});
		menu.hero = false;
		m.mount(document.getElementById('appMenu'), menu);
		m.mount(document.getElementById('appFooter'), footer);
	},
	view:function(vnode){
		return (
			<section class=" min-vh-100">

				<article class="mw8 center dt w-100 bg-white pt5" style="min-height: 180px;">
					<div class="dtc v-mid tc black ph3 ph4-l">
						<h1 class="f2 f1-l fw6 tc athelas i">Contact Us</h1>
					</div>
				</article>

				<section class="bg-white mw8 tc center flex flex-row-ns flex-column">
					<div class="fl w-100 w-50-l order-1 order-2-ns parallaxBG" style="background-image:url('assets/img/contact-bg.jpg')">
						<div class="dt w-100 tracked white bg-black-80" style="max-height:800px">
							<div class="dtc v-mid pv5 ph4">
								<legend class="pa0 ph2 f4 fw6 f3-ns mb3 tl ttu tracked w-100">CHAT WITH US</legend>
								<legend class="pa0 ph2 f6 fw4 f5-ns mb3 tl tracked w-100 pb2 lh-landing">If you have a question or concern that requires immediate assistance, you can call or send us an email and someone will be in touch within 24-48 hours.</legend>
								<legend class="pa0 ph2 f6 fw4 f5-ns mb3 tl tracked w-100 pv1 lh-landing">
									You can call us:<br/>
									+234-813-136-7337 <br/>
									+234-806-752-5393 <br/>
									+234-703-036-5790
								</legend>


								<legend class="pa0 ph2 f6 fw4 f5-ns mb3 tl tracked w-100 pt1 pb3 lh-landing">Or send us an email: <br/> info@greenhouse.ng</legend>
								<div class="cf w-100 pv3"></div>
								<legend class="pa0 ph2 f4 fw6 f3-ns mb3 tl ttu tracked w-100">VISIT OUR OFFICE</legend>
								<legend class="pa0 ph2 f6 fw4 f5-ns mb3 tl tracked w-100 pv1 lh-landing">Still have questions?</legend>
								<legend class="pa0 ph2 f6 fw4 f5-ns mb3 tl tracked w-100 pv1 lh-landing">
								We are available <br/>
								Mon - Fri from 9am - 5pm <br/>

								#50 Lagos Street, <br/>

								Mainland, Lagos, <br/>Nigeria <br/>
								</legend>
							</div>
						</div>
					</div>
					<div class="fl w-100 w-50-l ph2">
						<div class="dt w-100 tracked">
							<div class="dtc v-mid tl">
								<legend class="pa0 ph2 f5 fw6 f4-ns mv3 ttu tracked w-100">SEND US A MESSAGE:</legend>
								<legend class="pa0 ph2 f6 fw4 f5-ns mb3 tracked w-100 pb2">
									<small>Someone from our team will be in touch within 1-2 business days.</small>
								</legend>

								<div class="cf w-100 ">
									<div class="fl ph2">
										<label class="db fw4 lh-copy f6">TITLE</label>
										{m("input",{ type:"text", value:page.FormContact.Title,
											class: "w3 f6 input-reset bn black bg-near-white pa2 lh-solid",
											oninput: m.withAttr("value",function(value) {page.FormContact.Title = value}),
											onkeyup: function(event) { if(event.key=="Enter"){page.submitContact()}}
										})}
									</div>
								</div>

								<div class="cf w-100 pv2">
									<div class="fl w-50 ph2">
										<label class="db fw4 lh-copy f6">FIRST NAME</label>
										{m("input",{ type:"text", value:this.FormContact.Firstname,
											class: "fl w-100 f6 input-reset bn black bg-near-white pa2 lh-solid",
											oninput: m.withAttr("value",function(value) {page.FormContact.Firstname = value}),
											onkeyup: function(event) {if(event.key=="Enter"){page.submitContact()}}
										})}
									</div>

									<div class="fl w-50 ph2">
										<label class="db fw4 lh-copy f6">LAST NAME</label>
										{m("input",{ type:"text", value:this.FormContact.Lastname,
											class: "fl w-100 f6 input-reset bn black bg-near-white pa2 lh-solid",
											oninput: m.withAttr("value",function(value) {page.FormContact.Lastname = value}),
											onkeyup: function(event) {if(event.key=="Enter"){page.submitContact()}}
										})}
									</div>
								</div>

								<div class="cf w-100 pv2">
									<div class="fl w-50 ph2">
										<label class="db fw4 lh-copy f6">COMPANY</label>
										{m("input",{ type:"text", value:this.FormContact.Occupation,
											class: "fl w-100 f6 input-reset bn black bg-near-white pa2 lh-solid",
											oninput: m.withAttr("value",function(value) {page.FormContact.Occupation = value}),
											onkeyup: function(event) {if(event.key=="Enter"){page.submitContact()}}
										})}
									</div>

									<div class="fl w-50 ph2">
										<label class="db fw4 lh-copy f6">MOBILE</label>
										{m("input",{ type:"text", value:this.FormContact.Mobile,
											class: "fl w-100 f6 input-reset bn black bg-near-white pa2 lh-solid",
											oninput: m.withAttr("value",function(value) {page.FormContact.Mobile = value}),
											onkeyup: function(event) {if(event.key=="Enter"){page.submitContact()}}
										})}
									</div>
								</div>

								<div class="cf w-100 pv2">
									<div class="fl w-100 ph2">
										<label class="db fw4 lh-copy f6">EMAIL</label>
										{m("input",{ type:"text", value:this.FormContact.Email,
											class: "fl w-100 f6 input-reset bn black bg-near-white pa2 lh-solid",
											oninput: m.withAttr("value",function(value) {page.FormContact.Email = value}),
											onkeyup: function(event) {if(event.key=="Enter"){page.submitContact()}}
										})}
									</div>
								</div>

								<div class="cf w-100 pv2">
									<div class="fl w-100 ph2">
										<label class="db fw4 lh-copy f6">MESSAGE</label>
										{m("textarea",{ value:this.FormContact.Message,
											class: "h4 w-100 f6 input-reset bn black bg-near-white pa2 lh-solid",
											oninput: m.withAttr("value",function(value) {page.FormContact.Message = value}),
										})}
									</div>

									<div class="fl w-100 pa2">
										{m("span",{ onclick: page.submitContact,
											class: "f6 button-reset fl pa3 tc bn bg-animate ttu tracked bg-dark-green br1 hover-bg-green white pointer",
										},"SEND")}
									</div>
								</div>
							</div>
						</div>
					</div>
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

			</section>
		)
	}
}

export default page;
