<template>
    <headerView/>
    <h1>Hello {{userName}} welcome from Home Component</h1>
    <table border="1" class="customers">
         <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Address</td>
            <td>Contact</td>
            <td>Ratings</td>
            <td>Action</td>
         </tr>
        <tr v-for="item in restrauntList" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.address}}</td>
            <td>{{item.contact}}</td>
            <td>{{item.ratings}}</td>
            <td>
                <router-link :to="'/update/' + item.id">update</router-link>
                <button v-on:click="deleteRestraunt(item.id)">Delete</button>
            </td>
         </tr>
    </table>
</template>

<script>
import HeaderView from './HeaderView.vue'
import axios from 'axios'

export default {
   name:'HomeView',
   data(){
       return {
        userName:'',
        restrauntList:[],
        
        }

   },
   components:{
     HeaderView,
   },
   methods:{
        async loadData(){
            let user = localStorage.getItem('user-info')
            this.userName = JSON.parse(user).name
            if(!user){
                this.$router.push({name:'SignUp'})
            }

            let restroList = await axios.get('http://localhost:3000/restaurant')
            console.log(restroList)
            this.restrauntList = restroList.data;
        },
        async deleteRestraunt(id){
            console.log("delete function called")
            let result = await axios.delete(`http://localhost:3000/restaurant/${id}`)
            console.log(result)
            if(result.status === 200){
                this.loadData()
            }

        }
    },
     mounted(){
       this.loadData()
        
    },
}
</script>

<style scoped>
  td{
     width: 160px;
     height: 35px;
     
  }
  td button{

      margin-left: 5px;
  }
  .customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  
}

.customers td, .customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

.customers tr:nth-child(even){background-color: #f2f2f2;}

.customers tr:hover {background-color: #ddd;}
.customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
  
}


</style>
