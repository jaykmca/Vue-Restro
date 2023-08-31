<template>
    <Header/>
    <h1>Welcome on Add Restaurent page</h1>
    <form class="add">
        <input type="text" placeholder="Enter name" name="name" v-model="restro.name"/>
        <input type="text" placeholder="Enter address" name="address"  v-model="restro.address"/>
        <input type="text" placeholder="Enter contact" name="contact"  v-model="restro.contact"/>
        <input type="text" placeholder="Enter ratings" name="ratings"  v-model="restro.ratings"/>
        <button type="button" v-on:click="addRestaurant">Add New Restaurant</button>
    </form>
</template>

<script>
import axios from 'axios'
import Header from './HeaderView.vue'


export default {
  name:'AddRestroView' ,
  components:{
    Header
  },
  methods:{
   async addRestaurant(){
        console.log("add called", this.restro.name, this.restro.address, this.restro.contact, this.restro.ratings)
        const result = await axios.post('http://localhost:3000/restaurant',
            {
                  name:this.restro.name,
                  address:this.restro.address,
                  contact:this.restro.contact,
                  ratings:this.restro.ratings,
            }
          );
            if(result.status === 201){
                console.log("Restaurant Addedd Successfully")
                this.$router.push({name:'HomeView'})
            }
        console.log(result)
    }
  },
  data(){
    return{
       restro:
       {
         name:'',
         address:'',
         contact:'',
         ratings:''
       }
    }
  }   
}
</script>
<style scoped>
    .add input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.add button {
    
    width: 320px;
    height: 39px;
    border: 1px solid;
    cursor: pointer;
}
</style>
