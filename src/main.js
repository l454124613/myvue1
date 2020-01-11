import Vue from 'vue'

Vue.config.productionTip = false
// import app from './App'
// import login_page from "./page/login.vue"
import NavMenu from "./page/menu.vue"
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'mini' })

new Vue({
    el: '#app',
    components: { NavMenu },
    template: '<NavMenu/>',
    // template: '<div v-if="!is_ok"><login_page ></login_page></div><div v-else><NavMenu ></NavMenu></div>',
    data: {},
    methods: {




    },
    created: function () {
        // console.log(this)
        // this.loading()
        // setTimeout(() => {
        //     this.loadingInstance.close()
        //     this.is_ok=true


        //   }, 1000);
    },
    router

})

// loadingInstance1.close()

