<template>
	<section>	
        <inmenu/>
		
		<section style="" class="min-vh-100">
			 
			<section class="mw8 bg-white tc center pa2 pt5">
				<h1 class="f1 i black athelas">
					About Us
					<p class="f4-ns f5 fw1 pv0 mv0">
						A quick introduction to www.greenhouse.ng
					</p>
				</h1>

				<section class="cf pv3">
					<div class="fl w-100 w-50-l pv2 ph2">
						<img class="br3 shadow-5" src="@/assets/images/main.jpeg"/>
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
					<span class="oi h1 ph1 green pointer grow" data-glyph="chevron-left"></span>
					<span class="oi h1 ph1 green pointer grow" data-glyph="chevron-right"></span>
				</div>
				<div class="cf pa1">
				<div class="fl w-50 w-25-ns pa2">
				<img src="@/assets/images/item-1.jpeg" class="db w-100 br2 br--top"/>
						<div class="pb3-ns tl">
						<p class="f6 h3 overflow-hidden lh-copy measure mt2 mid-gray ttu">
							FOR SALE
						</p>
							<a oncreate={m.route.link} class="dim link white f6" href="/contactus">
								<small class="pa2 bg-dark-green hover-bg-near-white hover-black fw5 br1 tracked">Buy Now</small>
							</a>
						</div>
				</div>
				<div class="fl w-50 w-25-ns pa2">
				<img src="@/assets/images/item-2.jpeg" class="db w-100 br2 br--top"/>
						<div class="pb3-ns tl">
						<p class="f6 h3 overflow-hidden lh-copy measure mt2 mid-gray ttu">
							FOR SALE
						</p>
							<a oncreate={m.route.link} class="dim link white f6" href="/contactus">
								<small class="pa2 bg-dark-green hover-bg-near-white hover-black fw5 br1 tracked">Buy Now</small>
							</a>
						</div>
				</div>

					<div class="fl w-50 w-25-ns pa2">
				<img src="@/assets/images/item-3.jpeg" class="db w-100 br2 br--top"/>
						<div class="pb3-ns tl">
						<p class="f6 h3 overflow-hidden lh-copy measure mt2 mid-gray ttu">
							FOR SALE
						</p>
							<a oncreate={m.route.link} class="dim link white f6" href="/contactus">
								<small class="pa2 bg-dark-green hover-bg-near-white hover-black fw5 br1 tracked">Buy Now</small>
							</a>
						</div>
				</div>

					<div class="fl w-50 w-25-ns pa2">
				<img src="@/assets/images/item-4.jpeg" class="db w-100 br2 br--top"/>
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
							<notify :notifications="notifyNewsletter"></notify>
							<div class="fl w-50 w-25-l ph1 pv1">
									<label class="clip" for="first-name">First Name</label>
									<input class="f6 input-reset bn fl black bg-white w-100 pa3 lh-solid br2-ns" type="text" placeholder="Firstname"  v-model="newsletter.firstname" />
								</div>
								<div class="fl w-50 w-25-l ph1 pv1">
									<label class="clip" for="last-name">Last Name</label>
									<input class="f6 input-reset bn fl black bg-white w-100 pa3 lh-solid br2-ns" type="text" placeholder="Lastname"  v-model="newsletter.lastname" />
								</div>
							<div class="fl w-100 w-50-l ph1 pv1">
								<label class="clip" for="email-address">Email Address</label>
								<input class="f6 input-reset bn fl black bg-white pa3 lh-solid w-100 w-70-m w-70-l br2-ns br--left-ns" type="email" placeholder="Email"  v-model="newsletter.email" />
								<span @click="submitNewsletter" class="fl f6 pv3 tc bn bg-animate ttu tracked bg-near-white fw5 bg-body white pointer w-100 w-30-m w-30-l br2-ns br--right-ns">Sign Me Up</span>
							</div>
						</span>
						</div>
					</div>
				</div>
			</section>

		</section>
		
			
        <infooter/>
  </section>
</template>


<script type="text/javascript">
import {HTTP} from "@/common"
import inmenu from "@/components/menu"
import infooter from "@/components/footer"

import image1 from "@/assets/images/hero-1.jpg"
import image2 from "@/assets/images/hero-2.jpg"
import image3 from "@/assets/images/hero-3.jpg"

export default {
    created() {
	 },
	beforeMount(){},
    components: {inmenu, infooter, image1, image2, image3},
    data() {
		return{ 
			notifyNewsletter:[],
			newsletter:{firstname:"",lastname:"", email:""},
		}
	},
    methods: {
		submitNewsletter() {
			const app = this;
			app.notifyNewsletter = [];
			HTTP.post("https://cp.essentials.ng/api/signup-newsletter", app.newsletter,{withCredentials: true}).then((response) => {
				console.log(response.data);
				app.notifyNewsletter.push(response.data)
			}).catch((e) => {
				app.status = {}
				console.log(e)
			})
		},
    }
  }
</script>
