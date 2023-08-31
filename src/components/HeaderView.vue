<template>
    <div class ="topnav">
        <router-link to="/" >Home</router-link>
        <router-link to="/add" >Add Restaurent</router-link>
        <a v-on:click="logout" href="#" >Logout</a>
    </div>
</template>

<script>

export default {
   name:'HeaderVue',
   methods:{
     logout(){
        console.log("logout Called")
        localStorage.clear()
        this.$router.push({name:'Login'})
     },
     addres(){
        console.log('add called')
     }

   }  
}
</script>

<style scoped>
.topnav{
    background-color: #333;
    overflow: hidden;
}

.topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 10px 14px;
    text-decoration: none;
    font-size: 16px;
}

.topnav a:hover{
    background-color: #ddd;
    color: #222;
}
</style>
