<template>
	<footer class="bg-black-70 br3 br--top">
        <div class="w-100 pa3 ph5-m ph6-l washed-green">
            <small class="f6 db tc">© 2019 <b class="ttu tracked">Green House</b> - All Rights Reserved</small>
            <div class="tc mt2">
            <a href="/terms/" title="Terms" class="f6 dib ph2 link washed-green dim">Terms of Use</a>
            <a href="/privacy/" title="Privacy" class="f6 dib ph2 link washed-green dim">Privacy</a>
            </div>
        </div>
    </footer>
</template>


<script type="text/javascript">
import {HTTP} from "@/common"
import {uploadFileCSV} from "@/common"

export default {
    created() { },
    components: {},
    data() {
		return{ 
			record:{uuid:"",file:"", filename:""},
			notification:"",
		}
	},
    methods: {
		uploadFile() {
			uploadFileCSV(event, this, "record")
		},
		generate() {
			const app = this;
			app.status = {"generate":"is-loading"};
			HTTP.get("/api/uuid").then((response) => {
				if (response.data != null && response.data != undefined) {
					app.record.uuid = ""
					if (response.data.uuid != null && response.data.uuid != undefined ) {
						app.record.uuid = response.data.uuid
					}
				}
				app.status = {}
			}).catch((e) => {
				app.status = {}
				console.log(e)
			})
		},
		submit() {
			const app = this;
			this.status = {"submit":"is-loading"};
			app.riskList = [];
			app.notification = "";
			HTTP.post("/api/risk", app.record,{withCredentials: true}).then((response) => {
				console.log(response.data);
				if (response.data != null && response.data != undefined) {
					if (response.data.Error != null && response.data.Error != undefined ) {
						if (response.data.Error !== ""){
							app.notification = response.data.Error
						} 
					} else {
						app.riskList =  response.data;
					}
				}
				app.status = {}
			}).catch((e) => {
				app.status = {}
				console.log(e)
			})
		},
    }
  }
</script>
