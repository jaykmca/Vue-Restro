<template>
    <img alt="Vue logo" src='../assets/logo.png'>
    <h1>Login</h1>
   
    <div class="login">
        <input type="text" placeholder="Enter email" v-model="email"/>
        <input type="password" placeholder="Enter passwoard" v-model="password"/>
        <button v-on:click="login">Login</button>
        <p>
            <router-link to='/sign-up'>Sign Up</router-link>
        </p>
    

    </div>
    
</template>

<script>
import axios from 'axios'



export default {
    name:'LoginView',
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods:{
       async login(){
         const result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
           if(result.status === 200 && result.data.length >0 ){
                localStorage.setItem('user-info', JSON.stringify(result.data[0]))
                this.$router.push({name:'HomeView'})
            }
            
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
  .login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.login button {
    
    width: 320px;
    height: 39px;
    border: 1px solid;
    cursor: pointer;
}

</style>

