import { createApp } from 'vue'
import Notifications from '@kyvg/vue3-notification'
import { createStore } from 'vuex'
import { setItem } from '@/helpers/persistanceStorage'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut }
  from "firebase/auth";

const provider = new GoogleAuthProvider();
const app = createApp({}).use(Notifications)


export default createStore({
  state: {
    userData: {},
    isLoggedIn: false
  },
  getters: {
    userData: state => {
      return state.userData
    },
    isLoggedIn: state => {
      return Boolean(state.isLoggedIn)
    },
  },
  mutations: {
    registerSuccess(state, payload) {
      state.isLoggedIn = true
      state.userData = payload
    },

    loginSuccess(state, payload) {
      state.isLoggedIn = true
      state.userData = payload
    },

    googleLoginSuccess(state, payload) {
      state.isLoggedIn = true
      state.userData = payload
    },

    stateSuccess(state, payload) {
      state.isLoggedIn = true
      state.userData = payload
    },

    loginFailure(state, payload) {
      state.isSubmitting = false
      state.validationErrors = payload
    },

    logout(state) {
      state.userData = []
      state.isLoggedIn = false
    }
  },
  actions: {
    register(context, credentials) {
      return new Promise(resolve => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
          .then((userCredential) => {
            console.log(userCredential);
            context.commit('registerSuccess', userCredential.user)
            setItem('accessToken', userCredential.user.uid)
            resolve(userCredential.user)
          })
          .catch((error) => {
            app.config.globalProperties.$notify({ title: 'Signup ERROR', text: error.message, type: 'error' });
          });
      })
    },
    login(context, credentials) {
      return new Promise(resolve => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
          .then((userCredential) => {
            console.log(userCredential);
            context.commit('loginSuccess', userCredential.user)
            setItem('accessToken', userCredential.user.uid)
            resolve(userCredential.user)

          })
          .catch((error) => {
            app.config.globalProperties.$notify({ title: 'Login ERROR', text: error.message, type: 'error' });
          });
      })
    },

    googleLogin(context) {
      return new Promise(resolve => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            context.commit('loginSuccess', user)
            setItem('accessToken', token)
            resolve(user)
          }).catch((error) => {
            app.config.globalProperties.$notify({ title: 'Login ERROR', text: error.message, type: 'error' });
          });
      })
    },

    userState(context) {
      return new Promise(resolve => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            context.commit('stateSuccess', user)
            setItem('accessToken', user.uid)
            resolve(user)
          } else {
            localStorage.removeItem('accessToken')
          }
        });
      })
    },

    logout(context) {
      return new Promise(resolve => {
        const auth = getAuth();
        signOut(auth).then(() => {
          localStorage.removeItem('accessToken')
          context.commit('logout')
          resolve()
        }).catch((error) => {
          app.config.globalProperties.$notify({ title: 'Login ERROR', text: error.message, type: 'error' });
        });
      })
    }
  },
  modules: {
  }
})
