import m from 'mithril';
import menu from './#menu.js';
import footer from './#footer.js';

import Icons from './#icons.js';
import {appAlert} from './#utils.js';
import {checkRedirect} from './#utils.js';
import {defaultImage} from './#utils.js';
import {displayImage} from './#utils.js';

var searchXHR = null
var searchTimer;

var page = {
	Url: "/api/blogs", Form: {},
	searchText: "", searchView: "", formView: "dn", searchResult:[], formPinned: {},
	searchBlogs:function(){
		if (searchTimer){ clearTimeout(searchTimer); }
		if (searchXHR !== null) { searchXHR.abort() } searchXHR = null;

		page.searchResult = []
		searchTimer = setTimeout(function(){
			m.request({ method: 'GET', url: page.Url+"/list?search="+page.searchText,
				config: function(xhr) {searchXHR = xhr}, }).then(function(response) {

				var searchList = [];
				checkRedirect(response);


				if (response.Code == 200) {
					if (response.Body !== null && response.Body !== undefined ){
						response.Body.map(function(result) { if (result.ID > 0) {
							result.Updatedate = result.Updatedate.slice(0, 10);
							searchList.push( m(searchBlogsResult,
								{Code: result.Code, Category: result.Category, Image: result.Image, Title: result.Title,
									Description: m.trust(result.Description), Author: result.Author, Updatedate: result.Updatedate}
							))


							if (result.Pinned) {
								if (page.formPinned.Title == undefined) {
									page.formPinned.Image = "background-image: url(../../../"+result.Image+");background-position: center;background-size: cover;";
									page.formPinned.Title = result.Title;
									page.formPinned.Code = result.Code;

									console.log(page.formPinned.Image)
								}
							}

						}})
						page.formView = "dn"; page.searchView == "";
						page.searchResult = searchList
					}
				}

			}).catch(function(error) {
				appAlert([{ type: 'bg-red', message: "Network Connectivity Error \n Please Check Your Network Access", }]);
			});
		}, 750);
	},

	readBlogs:function(vnode){
		if (searchXHR !== null) { searchXHR.abort() } searchXHR = null;
		// page.formView = ""; page.searchView = "dn";
		m.request({ method: 'GET', url: page.Url+"/read?search="+vnode.attrs.path,
			config: function(xhr) {searchXHR = xhr}, }).then(function(response) {
			checkRedirect(response);

			if (response.Code == 200) {
				if (response.Body !== null && response.Body !== undefined ){
					page.Form = response.Body;
					page.Form.Updatedate = page.Form.Updatedate.slice(0, 10);
					page.Form.Image = "background-image: url(../../../"+page.Form.Image+");background-position: center;background-size: cover;";
					page.Form.File = m.trust(page.Form.File)
					page.formView = ""; page.searchView = "dn";
				}
			}

		}).catch(function(error) {
			appAlert([{ type: 'bg-red', message: "Network Connectivity Error \n Please Check Your Network Access", }]);
		});

	},
	oninit:function(){
		m.mount(document.getElementById('appMenu'), menu)
		m.mount(document.getElementById('appFooter'), footer);
	},
	oncreate:function(vnode){
		// (vnode.attrs.path == undefined) ? page.searchBlogs() : page.readBlogs(vnode)
	},
	view:function(vnode){
	return (
		<section class="center min-vh-100">

			<article class="mw8 center dt w-100 bg-white pt5" style="min-height: 180px;">
				<div class="dtc v-mid tc black ph3 ph4-l">
				<h1 class="f2 f1-l fw6 tc athelas i">Media Gallery</h1>
				</div>
			</article>

			<section class=" mw8 bg-black-50 center pv1 ph3">
				<p class="cf f6 w-100">
					{m("input",{ type:"text", placeholder: "Search Gallery",
						class: "f6 input-reset bn fl black bg-white ph3 pv3-ns pv2 lh-solid w-70 w-80-m w-90-l br2-ns br--left-ns",
						oninput: m.withAttr("value",function(value) {page.searchText = value}),
						onkeyup: function(event) {if(event.key=="Enter"){page.searchText}}
					})}
					{m("span",{ onclick: page.searchText,
							class: "fl f6 pv3-ns pv2 tc bn bg-animate ttu tracked bg-dark-red fw5 hover-bg-blue white pointer w-30 w-20-m w-10-l br2-ns br--right-ns",
					},"Search")}
				</p>
			</section>

			<section class="mw8 bg-white center pv3">
			  <div class="cf pa2 overflow-scroll">

					{page.searchResult}

			    <div class="dib w-50 w-25-m w-20-l pa2">
						<a href="" class="db link dim tl">
			        <img src="http://is3.mzstatic.com/image/thumb/Music49/v4/b6/b0/a1/b6b0a1dd-998d-9786-ca2f-87470be15250/source/400x40000bb.png" class="db w-100 br2 br--top"/>
						  <div class="pb3-ns">
						    <p class="f6 h3 overflow-hidden lh-copy measure mt2 mid-gray ttu">
						     DECADE OF WOMEN CELEBRATES THE LAUNCH OF THE YEAR OF WOMEN
						    </p>
								<div class="ml0 db gray truncate w-100 f6">20 June 2018</div>
						  </div>
			      </a>
			    </div>
			    <div class="dib w-50 w-25-m w-20-l pa2">
			      <a href="" class="db link dim tl">
			        <img src="http://placekitten.com/g/600/300" class="db w-100 br2 br--top"/>
						  <div class="pb3-ns">
						    <p class="f6 h3 overflow-hidden lh-copy measure mt2 mid-gray ttu">
						      “Satoshi Is Female” Movement Gains More Momentum at Blockchain for Impact Global Summit
						    </p>
								<div class="ml0 db gray truncate w-100 f6">20 June 2018</div>
						  </div>
			      </a>
			    </div>
			    <div class="dib w-50 w-25-m w-20-l pa2">
			      <a href="" class="db link dim tl">
			        <img src="http://is5.mzstatic.com/image/thumb/Music49/v4/1b/36/43/1b3643c6-e6a3-41bc-7f6d-7c2b64b5d60b/source/400x40000bb.png" class="db w-100 br2 br--top"/>
						  <div class="pb3-ns">
						    <p class="f6 h3 overflow-hidden lh-copy measure mt2 mid-gray ttu">
						      GINA TORRY AND INGRID STANGE
						    </p>
								<div class="ml0 db gray truncate w-100 f6">20 June 2018</div>
						  </div>
			      </a>
			    </div>
			    <div class="dib w-50 w-25-m w-20-l pa2">
			      <a href="" class="db link dim tl">
			        <img src="http://is4.mzstatic.com/image/thumb/Music49/v4/e9/4c/2d/e94c2d5f-bdb0-c565-4cc2-f9dfcf7f0b87/source/400x40000bb.png" class="db w-100 br2 br--top"/>
						  <div class="pb3-ns">
						    <p class="f6 h3 overflow-hidden lh-copy measure mt2 mid-gray ttu">
						      GINA TORRY AND INGRID STANGE AS CO-RECIPIENTS OF QUANTUM IMPACT AWARD
						      GINA TORRY AND INGRID STANGE AS CO-RECIPIENTS OF QUANTUM IMPACT AWARD
						    </p>
								<div class="ml0 db gray truncate w-100 f6">20 June 2018</div>
						  </div>
			      </a>
			    </div>
			    <div class="dib w-50 w-25-m w-20-l pa2">
			      <a href="" class="db link dim tl">
			        <img src="http://is1.mzstatic.com/image/thumb/Music71/v4/c8/2d/b1/c82db1cd-9dc5-d7cb-2a34-735cf47bb809/source/400x40000bb.png" class="db w-100 br2 br--top"/>
						  <div class="pb3-ns">
						    <p class="f6 h3 overflow-hidden lh-copy measure mt2 mid-gray ttu">
						      GINA TORRY AND INGRID STANGE AS CO-RECIPIENTS OF QUANTUM IMPACT AWARD
						    </p>
								<div class="ml0 db gray truncate w-100 f6">20 June 2018</div>
						  </div>
			      </a>
			    </div>
					<div class="dib w-50 w-25-m w-20-l pa2">
						<a href="" class="db link dim tl">
			        <img src="http://is3.mzstatic.com/image/thumb/Music49/v4/b6/b0/a1/b6b0a1dd-998d-9786-ca2f-87470be15250/source/400x40000bb.png" class="db w-100 br2 br--top"/>
						  <div class="pb3-ns">
						    <p class="f6 h3 overflow-hidden lh-copy measure mt2 mid-gray ttu">
						     DECADE OF WOMEN CELEBRATES THE LAUNCH OF THE YEAR OF WOMEN
						    </p>
								<div class="ml0 db gray truncate w-100 f6">20 June 2018</div>
						  </div>
			      </a>
			    </div>
			    <div class="dib w-50 w-25-m w-20-l pa2">
			      <a href="" class="db link dim tl">
			        <img src="http://placekitten.com/g/600/300" class="db w-100 br2 br--top"/>
						  <div class="pb3-ns">
						    <p class="f6 h3 overflow-hidden lh-copy measure mt2 mid-gray ttu">
						      “Satoshi Is Female” Movement Gains More Momentum at Blockchain for Impact Global Summit
						    </p>
								<div class="ml0 db gray truncate w-100 f6">20 June 2018</div>
						  </div>
			      </a>
			    </div>
			    <div class="dib w-50 w-25-m w-20-l pa2">
			      <a href="" class="db link dim tl">
			        <img src="http://is5.mzstatic.com/image/thumb/Music49/v4/1b/36/43/1b3643c6-e6a3-41bc-7f6d-7c2b64b5d60b/source/400x40000bb.png" class="db w-100 br2 br--top"/>
						  <div class="pb3-ns">
						    <p class="f6 h3 overflow-hidden lh-copy measure mt2 mid-gray ttu">
						      GINA TORRY AND INGRID STANGE
						    </p>
								<div class="ml0 db gray truncate w-100 f6">20 June 2018</div>
						  </div>
			      </a>
			    </div>
			    <div class="dib w-50 w-25-m w-20-l pa2">
			      <a href="" class="db link dim tl">
			        <img src="http://is4.mzstatic.com/image/thumb/Music49/v4/e9/4c/2d/e94c2d5f-bdb0-c565-4cc2-f9dfcf7f0b87/source/400x40000bb.png" class="db w-100 br2 br--top"/>
						  <div class="pb3-ns">
						    <p class="f6 h3 overflow-hidden lh-copy measure mt2 mid-gray ttu">
						      GINA TORRY AND INGRID STANGE AS CO-RECIPIENTS OF QUANTUM IMPACT AWARD
						      GINA TORRY AND INGRID STANGE AS CO-RECIPIENTS OF QUANTUM IMPACT AWARD
						    </p>
								<div class="ml0 db gray truncate w-100 f6">20 June 2018</div>
						  </div>
			      </a>
			    </div>
			    <div class="dib w-50 w-25-m w-20-l pa2">
			      <a href="" class="db link dim tl">
			        <img src="http://is1.mzstatic.com/image/thumb/Music71/v4/c8/2d/b1/c82db1cd-9dc5-d7cb-2a34-735cf47bb809/source/400x40000bb.png" class="db w-100 br2 br--top"/>
						  <div class="pb3-ns">
						    <p class="f6 h3 overflow-hidden lh-copy measure mt2 mid-gray ttu">
						      GINA TORRY AND INGRID STANGE AS CO-RECIPIENTS OF QUANTUM IMPACT AWARD
						    </p>
								<div class="ml0 db gray truncate w-100 f6">20 June 2018</div>
						  </div>
			      </a>
			    </div>
			  </div>
			</section>

		</section>
	)
  }
}

var searchBlogsResult = {view: function(vnode) {return(
	<section class="pv3 bb b--moon-gray">
		<h1 class="f4 f3-m f2-l fw5 dark-gray">{page.formPinned.Title}</h1>
		<img alt=""  src={"../../../"+vnode.attrs.Image} class="w-100 f5 " id={vnode.attrs.Code} onerror={()=>defaultImage(vnode.attrs.Code)}/>
		<p class="ph3 tl">
			{vnode.attrs.Description}
			<small> by {vnode.attrs.Author} on {vnode.attrs.Updatedate} </small>
			<a href={"projects/"+vnode.attrs.Code} class="no-underline">
				<small class="fr ph2 pv1 f6 br1 bg-blue washed-blue fw4 dim pointer">Read More</small>
			</a>
		</p>
	</section>
)}}

export default page;
