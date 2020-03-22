import Vue from 'vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import App from './App.vue'
import router from './router'
import store from './store'

 var firebase = require("firebase/app");

 require("firebase/auth");
 require("firebase/firestore");


 var firebaseConfig = {
  apiKey: "AIzaSyC7HztjEDiKwRaDdUI3sOLOoovIiklH9q4",
  authDomain: "crud-vue-d0b26.firebaseapp.com",
  databaseURL: "https://crud-vue-d0b26.firebaseio.com",
  projectId: "crud-vue-d0b26",
  storageBucket: "crud-vue-d0b26.appspot.com",
  messagingSenderId: "944848308451",
  appId: "1:944848308451:web:1a00cce8a66fd251675dd6"
};
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  firebaseApp.firestore().settings({timestampsInSnapshots: true});

  export default firebaseApp.firestore()
  
  Vue.config.productionTip = false

  firebase.auth().onAuthStateChanged((user) => {
    // console.log(user)
    if(user){
        store.dispatch('detectarUsuario', {email: user.email, uid: user.uid})
    } else {
      store.dispatch('detectarUsuario', null)
    }

    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')

  })
