<template>
  <div class="main">
    <div class="container">
      <input type="checkbox" checked id="chk" aria-hidden="false">

      <div class="signup">
        <form @submit.prevent="signup">
          <label for="chk" aria-hidden="true">Sign up</label>
          <!-- <input type="text" name="txt" placeholder="User name" required> -->
          <input v-model="siginupEmail" type="email" name="email" placeholder="Email" required>
          <input v-model="siginupPassword" type="password" name="pswd" placeholder="Password" required>
          <button>Sign up</button>
        </form>
      </div>

      <div class="login">
        <form @submit.prevent="login">
          <label for="chk" aria-hidden="true">Login</label>
          <input v-model="loginEmail" type="email" name="email" placeholder="Email" required>
          <input v-model="loginPassword" type="password" name="pswd" placeholder="Password" required>
          <button>Login</button>
          <button @click.prevent="googleLogin">
            <svg height="70%" viewBox="0 0 20 20" width="100%" fit="" preserveAspectRatio="xMidYMid meet"
              focusable="false">
              <path
                d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"
                fill="#4285F4"></path>
              <path
                d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"
                fill="#34A853"></path>
              <path
                d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z"
                fill="#FBBC05"></path>
              <path
                d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z"
                fill="#EA4335"></path>
            </svg>
          </button>
        </form>
      </div>


    </div>
  </div>
</template>
<script>
export default {
  name: 'McvAuthorization',
  data() {
    return {
      siginupEmail: '',
      siginupPassword: '',
      loginEmail: '',
      loginPassword: '',
    }
  },

  methods: {
    signup() {
      this.$store
        .dispatch('register', {
          email: this.siginupEmail,
          password: this.siginupPassword
        })
        .then(() => {
          this.$router.go({ name: 'todo' })
        })
    },

    login() {
      this.$store
        .dispatch('login', {
          email: this.loginEmail,
          password: this.loginPassword
        })
        .then(() => {
          this.$router.go({ name: 'todo' })
        })
    },

    googleLogin() {
      this.$store
        .dispatch('googleLogin')
        .then(() => {
          this.$router.go({ name: 'todo' })
        })
    }

  }
}
</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.container {
  width: 350px;
  height: 500px;
  background: red;
  overflow: hidden;
  background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38") no-repeat center/ cover;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(#000000, 0.5);
  margin: auto;
}

#chk {
  display: none;
}

.signup {
  position: relative;
  width: 100%;
  height: 100%;
}

label {
  color: #fff;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: .5s ease-in-out;
}

input {
  width: 60%;
  height: 48px;
  background: #fff;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
}

button {
  width: 60%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: flex;
  align-items: center;
  color: #fff;
  background: #573b8a;
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: .2s ease-in;
  cursor: pointer;
}

button:hover {
  background: #6d44b8;
}

.login {
  height: 460px;
  background: #eee;
  border-radius: 16px;
  transform: translateY(-180px);
  transition: .2s ease-in-out;
}

.login label {
  color: #573b8a;
  transform: scale(.6);
  padding-top: 10px;
}

#chk:checked~.login {
  transform: translateY(-500px);
}

#chk:checked~.login label {
  transform: scale(1);
  padding-top: 26px;
  margin-bottom: 10px;
}

#chk:checked~.signup label {
  transform: scale(.6);
  margin-top: 24px;
}
</style>