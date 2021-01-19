<template>
    <li>
        <div class="img">
          <!-- <fa-icon icon="user" size="1x"/> -->
          <img :src="this.friend.picture" alt="">
          <div :class="{online : isOnline}">
              <!-- <button></button> -->
          </div>
        </div>
        <span>{{friendName}}</span>
    </li>
</template>
<script>
export default {
    props:[ 'friend','online'],

    data(){
      return{
        // friend:null,
      }
    },
    computed:{
        isOnline(){
            return this.online
        },
        friendName(){
          return this.friend.firstName + " " + this.friend.lastName;
        }
    }
}
</script>
<style scoped>
li{
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 0;
  background-color:unset;
  position: relative;
}

li:hover{
  background-color: #cccfd3;
  border-radius: 7px;
  transition: 0.2s;
  cursor: pointer;
}

.img{
  text-align: center;
}
img{
  width: 40px;
  text-align: center;
  border-radius: 50px;
  margin-right: 7px;
}

span{
  font-size: 20px;
  margin: 5px;
  background-color: unset;
}

.online{
    position: absolute;
    top: 32px;
    left: 32px;
    background-color: green;
    width: 10px;
    height: 10px;
    border-radius: 50px;
    border: 2px solid white;

}


</style>