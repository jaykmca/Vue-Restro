<template>
    <Header/>
    <h1>Hello user, Welcome on update Restaurent page</h1>
    <form class="update">
        <input type="text" placeholder="Enter name" name="name" v-model="restaurant.name"/>
        <input type="text" placeholder="Enter address" name="address"  v-model="restaurant.address"/>
        <input type="text" placeholder="Enter contact" name="contact"  v-model="restaurant.contact"/>
        <input type="text" placeholder="Enter ratings" name="ratings"  v-model="restaurant.ratings"/>
        <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
    </form>
</template>

<script>
import axios from 'axios'
import Header from './HeaderView.vue'

export default {
  name:'UpdateRestroView' ,
  components:{
    Header
  },
  data(){
    return {
        restaurant:
        {
         name:'',
         address:'',
         contact:'',
         ratings:''
        }
    }
  },
  methods:{
     async updateRestaurant() {
        console.log("caled update method")
         console.log("add called", this.restaurant.name, this.restaurant.address, this.restaurant.contact, this.restaurant.ratings)
        const result = await axios.put(`http://localhost:3000/restaurant/${this.$route.params.id}`,
            {
                  name:this.restaurant.name,
                  address:this.restaurant.address,
                  contact:this.restaurant.contact,
                  ratings:this.restaurant.ratings,
            }
          );
            if(result.status === 200){
                console.log("Restaurant updated Successfully")
                this.$router.push({name:'HomeView'})
            }
        console.log(result)
     }
  },
   async mounted(){
        let restro = await axios.get(`http://localhost:3000/restaurant/${this.$route.params.id}`)
        console.log(restro)
        this.restaurant = restro.data;
    }   
}
</script>
<style scoped>
    .update input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.update button {
    
    width: 320px;
    height: 39px;
    border: 1px solid;
    cursor: pointer;
}
</style>
