import m from 'mithril';
import {validateSubmit} from './#validateSubmit.js';

var action = {
	Submit: function() {
		var actionFields = [
			{validationType : '', fieldID : 'username'},
			{validationType : '', fieldID : 'password'},
		]
		validateSubmit( "/api/login", actionFields);
	},
};


var page = {
	oninit:function(vnode){ },
	view:function(vnode){
		return (
			<section class="menuCloudBG min-vh-100">
				<div id="appAlert"></div>
				<section class="mw9-ns center pa2 black-80 flex flex-row justify-center">

				<div class="dib mv4 w-90 w-60-m w-30-l">
					<div class="mv4-l mv3 w-100 tc">
						<a href="/" oncreate={m.route.link} class="no-underline pointer">
							<img alt=""  src="../../assets/img/logoBlack.png" class="cf"/>
						</a>
					</div>

					<div class=" pa3 w-100 bg-white br2 ba b--silver shadow-1">
						<div class="f6 avenir cf pv3">

							<div class="pb3 f5 tracked fw5">
								Welcome back!
							</div>

							<input type="hidden" id="action"/>

							<small class="fw6">Username</small>
							{m("div", {class:"br1 ba b--silver"} ,m("input",{ placeholder: "username", type:"text", class: "w-100  bw0 br1 pa2 f6", id:"username",
								oninput: m.withAttr("value",function(value) {page.Username = value}),
								onkeyup: function(event) {if(event.key=="Enter"){action.Submit()}}
							 }))}

							 <div class="cf mv2"></div>

							<small class="fw6">Password</small>
							{m("div", {class:"br1 ba b--silver"} ,m("input",{ placeholder: "password", type:"password", class: "w-100  bw0 br1 pa2 f6", id:"password",
								oninput: m.withAttr("value",function(value) {page.Password = value}),
								onkeyup: function(event) {if(event.key=="Enter"){action.Submit()}}
							 }))}

							 <br/><br/>

							<div class="pv3 tc">
								<span class="btnPrimary near-white shadow-4 pointer fl w-100 dim pv3 br1" onclick={action.Submit}>Log me in » </span>
							</div>
						</div>
					</div>

					<div class="w-100 pv4 cf tc f6">
						<p class="">
							<a href="/forgot" oncreate={m.route.link} class="gray no-underline bg-light-gray ph1 br1">Forgot your password?</a>
						</p>
					</div>

				</div>
				</section>
			</section>
		)
	}
}

export default page;
