<template>
    <div id="main-content">
        <div id="left" class="left">
            <Leftside/>
        </div>
        <div id="middle" class="middle">
            <Middle/>
        </div>
        <div id="right" class="right"> 
            <Rightside/>

        </div>
    </div>
    
</template>

<script>
import Leftside from './Leftside'
import Rightside from './Rightside'
import Middle from './Middle'
export default {
    components:{
        Leftside,
        Rightside,
        Middle
    }
}
</script>

<style scoped>
#main-content{
    /* width: 100%; */
    /* height: 100vh; */
    background-color: #F0F2F5;
    display: flex;
    align-content: center;
}

.left{
    order: 1;
    flex: 1;
}
.middle{
    order: 2;
    flex: 2;
    /* align-self: center; */
}
.right{
    order: 3;
    flex: 1;
}
</style>