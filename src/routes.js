import Vue from "vue"
import Router from "vue-router"

import index from "@/components/index"
import aboutus from "@/components/aboutus"
import contactus from "@/components/contactus"

Vue.use(Router)
export const router =  new Router({
    mode: "hash",
    routes: [ 
        { path: '', component: index },
        { path: '/aboutus', component: aboutus }, 
        { path: '/contactus', component: contactus }, 
    ],
})
