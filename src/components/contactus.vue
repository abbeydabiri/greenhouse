<template>
	<section>	
        <inmenu/>
        <section class=" min-vh-100">

            <article class="mw8 center dt w-100 bg-white pt5" style="min-height: 180px;">
                <div class="dtc v-mid tc black ph3 ph4-l">
                    <h1 class="f2 f1-l fw6 tc athelas i">Contact Us</h1>
                </div>
            </article>

            <section class="bg-white mw8 tc center flex flex-row-ns flex-column">
                <div class="fl w-100 w-50-l order-1 order-2-ns parallaxBG" style="background-image:url('@/@/assets/images/contact-bg.jpg')">
                    <div class="dt w-100 tracked white bg-black-80" style="max-height:800px">
                        <div class="dtc v-mid pv5 ph4">
                            <legend class="pa0 ph2 f4 fw6 f3-ns mb3 tl ttu tracked w-100">CHAT WITH US</legend>
                            <legend class="pa0 ph2 f6 fw4 f5-ns mb3 tl tracked w-100 pb2 lh-landing">If you have a question or concern that requires immediate assistance, you can call or send us an email and someone will be in touch within 24-48 hours.</legend>
                            <legend class="pa0 ph2 f6 fw4 f5-ns mb3 tl tracked w-100 pv1 lh-landing">
                                You can call us:<br/>
                                <a class = "link white" href = "tel:2348131367337" > +234 813 136 7337 </a> <br/>
                                <a class = "link white" href = "tel:2348167526393" > +234 816 752 5393 </a>
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
                                    <input class="w3 f6 input-reset bn black bg-near-white pa2 lh-solid" type="text" placeholder=""  v-model="contact.title" />
                                </div>
                            </div>

                            <div class="cf w-100 pv2">
                                <div class="fl w-50 ph2">
                                    <label class="db fw4 lh-copy f6">FIRST NAME</label>
                                    <input class="fl w-100 f6 input-reset bn black bg-near-white pa2 lh-solid" type="text" placeholder=""  v-model="contact.frstname" />
                                </div>

                                <div class="fl w-50 ph2">
                                    <label class="db fw4 lh-copy f6">LAST NAME</label>
                                    <input class="fl w-100 f6 input-reset bn black bg-near-white pa2 lh-solid" type="text" placeholder=""  v-model="contact.lastname" />
                                </div>
                            </div>

                            <div class="cf w-100 pv2">
                                <div class="fl w-50 ph2">
                                    <label class="db fw4 lh-copy f6">COMPANY</label>
                                    <input class="fl w-100 f6 input-reset bn black bg-near-white pa2 lh-solid" type="text" placeholder=""  v-model="contact.company" />
                                </div>

                                <div class="fl w-50 ph2">
                                    <label class="db fw4 lh-copy f6">MOBILE</label>
                                    <input class="fl w-100 f6 input-reset bn black bg-near-white pa2 lh-solid" type="text" placeholder=""  v-model="contact.mobile" />
                                </div>
                            </div>

                            <div class="cf w-100 pv2">
                                <div class="fl w-100 ph2">
                                    <label class="db fw4 lh-copy f6">EMAIL</label>
                                    <input class="fl w-100 f6 input-reset bn black bg-near-white pa2 lh-solid" type="email" placeholder=""  v-model="contact.email" />
                                </div>
                            </div>

                            <div class="cf w-100 pv2">
                                <div class="fl w-100 ph2">
                                    <label class="db fw4 lh-copy f6">MESSAGE</label>
                                    <textarea class="h4 w-100 f6 input-reset bn black bg-near-white pa2 lh-solid" v-model="contact.message"></textarea>
                                </div>

                                <div class="fl w-100 pa2">
                                    <span @click="submitContact" class="f6 button-reset fl pa3 tc bn bg-animate ttu tracked bg-dark-green br1 hover-bg-green white pointer">SEND</span>
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
                <div class="fl w-50 w-25-ns pa2">
                <img src="@/assets/images/item-1.jpeg" class="db w-100 br2 br--top"/>
                        <div class="pb3-ns tl">
                        <p class="f6 h3 overflow-hidden lh-copy measure mt2 mid-gray ttu">
                            FOR SALE
                        </p>
                            <a oncreate={m.route.link} class="dim link white f6" href="#contactus">
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
                            <a oncreate={m.route.link} class="dim link white f6" href="#contactus">
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
                            <a oncreate={m.route.link} class="dim link white f6" href="#contactus">
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
                            <a oncreate={m.route.link} class="dim link white f6" href="#contactus">
                                <small class="pa2 bg-dark-green hover-bg-near-white hover-black fw5 br1 tracked">Buy Now</small>
                            </a>
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

export default {
    created() { },
    components: {inmenu, infooter},
    data() {
		return{ 
			notifyContact:[],
			contact:{firstname:"",lastname:"", email:""},
        }
	},
    methods: {
		
		submitContact() {
			const app = this;
			app.notifyContact = [];
			HTTP.post("https://cp.essentials.ng/api/signup-newsletter", app.contact,{withCredentials: true}).then((response) => {
				console.log(response.data);
				app.notifyContact.push(response.data)
			}).catch((e) => {
				app.status = {}
				console.log(e)
			})
		},
    }
  }
</script>
