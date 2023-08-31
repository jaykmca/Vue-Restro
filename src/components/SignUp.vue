<template>
      <img alt="Vue logo" src='../assets/logo.png'>
    <h1>Sign up</h1>
    <div class="register">
        <input type="text" placeholder="Enter name" v-model="name"/>
        <input type="text" placeholder="Enter email" v-model="email"/>
        <input type="password" placeholder="Enter passwoard" v-model="password"/>
        <button v-on:click="signUp">Sing up</button>
        <p>
            <router-link to='/login'>Sign in</router-link>
        </p>
        

    </div>
</template>


<script>
import axios from 'axios'


export default {
   name:'SingUp',
   data(){
      return {
        name:'',
        email:'',
        password:''

      }
   },
    methods:{
        async signUp(){
            console.warn("called", this.name, this.email, this.password)
            const result = await axios.post("http://localhost:3000/users",
                 {
                  name:this.name,
                  email:this.email,
                  password:this.password
                 }
            );
            console.warn(result)
            if(result.status === 201){
                console.log("sign up Done")
                this.$router.push({name:'HomeView'})
            }
            localStorage.setItem('user-info', JSON.stringify(result.data))
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info')
        if(user){
            this.$router.push({name:'HomeView'})
        }
    }
}
</script>

<style scoped>
  .register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.register button {
    
    width: 320px;
    height: 39px;
    border: 1px solid;
    cursor: pointer;
}



</style>
