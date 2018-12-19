<template>
	<section id="menuBlur" class="z-max w-100 fixed">
        <div id="menuCover"  class=" absolute right-0 w-100 vh-100 fr dn pa0" style="">
            <ul id="menuToggle" class="fr list pl0 w-70 w-40-m bg-white vh-100 ma0" style="">
                <li class="tr">
                    <p class="ph2 mv0 gray hover-green">
                        <span data-glyph="cancel" class="oi mh2 mv3 h1 dim dib dark-green" @click="menuToggle"></span>
                    </p>
                </li>

                <router-link class="link f5" to="/aboutus">
					<li class="tr" @click="menuToggle">
						<p class="ph2 pv3 mv0 dark-green hover-bg-gradient hover-white fw5 tracked">
							ABOUT US
						</p>
					</li>
				</router-link>

                <a class="link f5" href="/#gallery">
					<li class="tr" @click="menuToggle">
						<p class="ph2 pv3 mv0 dark-green hover-bg-gradient hover-white fw5 tracked">
							GALLERY
						</p>
					</li>
				</a>

                <router-link class="link f5" to="/contactus">
                    <li class="tr" @click="menuToggle">
                        <p class="ph2 pv3 mv0 ">
                            <small class="pa2 ph3 bg-dark-green b white br2 tracked hover-bg-gradient">CONTACT US</small>
                        </p>
                    </li>
                </router-link>
            </ul>
        </div>

        <nav class="w-100 mw8 center cf pv2 ph2 silver bg-near-white f6s" :class="hideMenu">
            <div class="w-100 mw8-l mw7-ns center">

                    <span class="fl pointer inline-flex items-center hover-black">
                        <span class="oi dib h1" data-glyph="chat"></span>
                        <span class="ml1 pr2">info@greenhouse.ng</span>
                    </span>

                    <span class="fr pointer inline-flex items-center hover-black">
                        <span class="oi dib h1" data-glyph="headphones"></span>
                        <small class="ml1"> <a class = "link silver" href = "tel:2348131367337" > +234 813 136 7337 </a> </small>
                        <small class="ml1 dib-ns dn"> / <a class = "link silver" href = "tel:2348167526393" > +234 816 752 5393 </a> </small>
                    </span>

            </div>
        </nav>

        <nav id="nav" class="w-100 mw8 center black z-5 " >
            <div class="w-100 mw8 center bg-white br2-l br--bottom-l cf">
                <router-link class="link" to="/">
                    <img class="fl f5 h1 h2-ns  ma2 tracked fw5" style="min-height:30px" src="@/assets/images/logo.png" height=""/>
                </router-link>
                <span class="oi fr mv2 mr2 h1 dib dn-l white pa2 bg-dark-green br1" @click="menuToggle" data-glyph="menu"></span>
                <nav class="fr mv3 dn dib-l">

                    <router-link to="/aboutus" class="link hover-green tracked black f6 dib mr4 b"><small>ABOUT US</small></router-link>
                    <a class="link hover-green tracked black f6 dib mr4 b" href="#gallery"><small>GALLERY</small></a>
                    <router-link to="/contactus" class="link mh2 link white f6">
                        <small class="pa2 ph3 bg-dark-green b hover-bg-green br2 tracked">CONTACT US</small>
                    </router-link>
                </nav>
            </div>
        </nav>

        <div id="appAlert"></div>
    </section>
</template>


<script type="text/javascript">
import {HTTP} from "@/common"
export default {
    beforeMountX() {
        window.addEventListener('scroll', hideMenuOnScroll, false);
    },
    beforeDestroyX(){
        window.removeEventListener('scroll', hideMenuOnScroll, false);
    },
    components: {},
    data() {
		return{hideMenu:""}
	},
    methods: {
        hideMenuOnScroll() {
            var hideMenu;
			var shrinkOn = 200;
			var distanceY = window.pageYOffset || document.documentElement.scrollTop;
			if (distanceY > shrinkOn) { hideMenu = "dn"; }
			else { hideMenu = ""; }

			if (hideMenu !== this.hideMenu) {
				this.hideMenu = hideMenu;
			}
        },
		menuToggle() {
			var appmenuToggle = document.getElementById("menuToggle");
            var appmenuCover = document.getElementById("menuCover");
            appmenuCover.classList.toggle('dn');
            appmenuToggle.classList.toggle('animated');
            appmenuToggle.classList.toggle('bounceInRight');

            // document.getElementById("nav").classList.toggle('dn');
            // document.getElementById("menuBlur").classList.toggle('vh-100');
            document.getElementById("html").classList.toggle('overflow-hidden');
		},
		
    }
  }
</script>
