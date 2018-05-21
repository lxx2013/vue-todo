import Vue from 'vue'
import App from './app.vue'

import './assets/styles/global.less'


const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render: (h) => h(App)
}).$mount(root)

var $ = require("jquery")

//$("title").html("I am JQ!")
$("#real-app").focusin(function(){
    $("#cover").addClass("blur")
})
$("#real-app").focusout(function(){
    $("#cover").removeClass("blur")
})
