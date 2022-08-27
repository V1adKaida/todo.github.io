import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Notifications from '@kyvg/vue3-notification'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

/* add icons to the library */
library.add(fas)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0E9ZrfCxqEJV8Nhx7vbgzfiXOlx5RUis",
  authDomain: "thematic-coda-303619.firebaseapp.com",
  projectId: "thematic-coda-303619",
  storageBucket: "thematic-coda-303619.appspot.com",
  messagingSenderId: "575127103060",
  appId: "1:575127103060:web:54ab2916354a4c427d2fc1",
  databaseURL: "https://thematic-coda-303619-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

getAuth(app);

getDatabase(app);

createApp(App)
  .use(router)
  .use(Notifications)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
