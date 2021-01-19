<template>
    <div id="right-side">
        <div id="right-side-header">
            <p>Contacts</p>
        </div>
        <ul>

            <div v-if="loading" class="spinner">
              <half-circle-spinner
                :animation-duration="1000"
                :size="60"
                color="#3496ff"
              />
            </div>

            <chat-person v-for="friend in this.friends" v-bind:key="friend.username" :friend="friend"  online="true"/>


        </ul>
    </div>
</template>

<script>

const APP_ID = '5fd9031380fb23d9b9425442';
const BASE_URL = 'https://dummyapi.io/data/api';


import ChatPerson from './ChatPerson.vue'
// import Friends from '../Data/friends'
import axios from 'axios';
import { HalfCircleSpinner } from 'epic-spinners'

export default {
    

    data(){
      return{
        friends:[],
        loading:true,
      }
    },

    beforeMount(){
      this.getFriends();
      // this.friends=Friends.getFriends();
    },
    methods:{
      getFriends(){
        // const url = "https://jsonplaceholder.typicode.com/users";
        // axios.get(url)
        //   .then((response)=>{
        //   // console.log(response.data);
        //   this.friends = response.data;
        // });
        axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) =>{
                this.friends = data.data;
                console.log(data.data);
                this.loading = false;
            }
            )
            .catch(console.error);
      }
    },
    components:{
      ChatPerson,
      HalfCircleSpinner
    }
}
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');

#right-side{
    font-family: "Roboto";
    font-weight: 500;
}
#right-side-header{
    font-size: 18px;
    color: #727477;
}

ul{
  
  background-color:unset;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
  max-height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
}

ul::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}
ul::-webkit-scrollbar-track {
  background: unset;        /* color of the tracking area */
}
ul::-webkit-scrollbar-thumb {
  background-color: #BCC0C4;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid unset;  /* creates padding around scroll thumb */
}




</style>
