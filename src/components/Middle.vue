<template>
    <div id="posts-wrapper" >

        <!-- {{posts}} -->

        <div v-if="loading" class="spinner">
          <half-circle-spinner
            :animation-duration="1000"
            :size="60"
            color="#3496ff"
          />
        </div>
        <div v-if="!loading">
          <Post v-for="p in posts" v-bind:key="p.id" :post="p"/>
        </div>


    </div>
</template>

<script>
import Post from './Post/Post'
// import Data from '../Data/posts'
import { HalfCircleSpinner } from 'epic-spinners'

const APP_ID = '5fd9031380fb23d9b9425442';
const BASE_URL = 'https://dummyapi.io/data/api';

import axios from 'axios'


export default {

    data() {
      return {
        posts:[],
        loading:true,
      };
    },

    beforeMount(){
      this.getPosts(); 
    },
    methods:{
      getPosts(){
         axios.get(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) =>{
                this.posts = data.data;
                console.log(data.data);
                this.loading = false;
            }
            )
            .catch(console.error);
      },
      
    },
    components:{
        Post,
        HalfCircleSpinner

    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');

#posts-wrapper{
    /* align-self: center; */

    font-family: "Roboto";
    font-weight: 500;
    overflow-y: scroll;
    padding-top: 20px;
    /* background-color: rgba(255, 255, 255, 0.589); */
    text-align: center;
    max-width: 600px;
    height: calc(100% - 60px);
    margin: 0 auto;
    position: relative;
}


#posts-wrapper::-webkit-scrollbar {
  width: 6px;               /* width of the entire scrollbar */
  
}
#posts-wrapper::-webkit-scrollbar-track {
  background: unset;        /* color of the tracking area */
}
#posts-wrapper::-webkit-scrollbar-thumb {
  background-color: #BCC0C4;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid unset;  /* creates padding around scroll thumb */
}

/* .spinner{
  margin: 0 auto;
  text-align: center;
} */
.half-circle-spinner{
  margin: 0 auto;
}

</style>