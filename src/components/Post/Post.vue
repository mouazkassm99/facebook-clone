<template>
    <div id="post">
        <div id="post-header">
            <div id="post-user-img">
                <img :src="post.owner.picture" alt="">
                <!-- <fa-icon icon="user"/> -->
            </div>
            <div id="post-user-details">
                <span id="name">{{postOwner}}</span>
                <div id="date">{{postDate}}</div>
                <!-- <div id="date">{{post.publishDate}}</div> -->
            </div>
            <div id="post-more">
                <fa-icon icon="caret-down"></fa-icon>
            </div>
        </div>

        <div id="post-body">
            <div id="body-text">
                {{post.text}}
            </div>

            <div id="body-img" v-if="post.image">
                <img :src="post.image" >
            </div>

        </div>



        <div id="post-info">
                <p id="number-of-likes">
                    <fa-icon icon="thumbs-up" id="thumbs-up"></fa-icon>
                    {{post.likes}} people liked this
                </p>

                <p id="number-of-comments">
                    <!-- {{post.comments}} Comments -->
                    69 comments
                </p>
                
        </div>

        <div id="post-footer">
            
            <button id="like" @click="likePost">Like</button>
            <button id="comment">Comment</button>
            <button id="share">Share</button>
        </div>
        
    </div>
</template>

<script>
export default {
    props:['post'],

    data(){
        return{
            // post:null,
            liked: false,
        }
    },

    created(){
    },

    methods:{
        likePost(e){
            const likeBtn = e.target;
            // const likeIcon = document.getElementById("thumbs-up");
            if(this.liked === false){
                likeBtn.style.color = "rgb(18,156,247)";
                likeBtn.style.fontWeight = "bold";
                this.liked = true;
                this.post.likes += 1;
                // likeIcon.style.color = "rgb(18,156,247)";
            }else if (this.liked === true){
                likeBtn.style.color = "gray";
                likeBtn.style.fontWeight = "400";
                this.liked = false;
                this.post.likes -=1;
                // likeIcon.style.color="gray";
            }
        }
    },

    computed:{
        postDate(){
            // var locale = window.navigator.userLanguage || window.navigator.language;
            
            // // let now = Date.now();
            // // let date = new Date(this.post.date - now);

            // return this.post.date.toLocaleDateString(locale, {
            //     hour: '2-digit',
            //     minute: '2-digit'
            // });
            var locale = window.navigator.userLanguage || window.navigator.language;
            var postPublishTime = new Date(this.post.publishDate);
            console.log(typeof postPublishTime);
            // return postPublishTime.toString();
            // return postPublishTime.toDateString();
            return postPublishTime.toLocaleDateString(locale, {
                hour: '2-digit',
                minute: '2-digit'
            });
        },
        postOwner(){
            return this.post.owner.firstName + " " + this.post.owner.lastName
        }
    }
    
}
</script>

<style scoped>

#post{
    margin: 30px auto;
    overflow-x: hidden;
    border: 2px solid rgba(172, 171, 171, 0.329);
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    padding-bottom: 0;
    
}

#post-header{
    display: flex;
    /* align-items:center; */
        /* border-bottom: 2px solid rgba(172, 171, 171, 0.329); */
    margin-bottom: 10px;

}

#post-header div{
    /* display: inline-block; */
    /* background-color: red; */
}

#post-user-img{
    width: 50px;
    height: 50px;
    text-align: center;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    
}
#post-user-img svg{
    transform: scale(1.5);
    /* position: relative; */
    /* left: 25%; */
    /* top: 25%; */
    /* transform: translate(-50%, -50%); */
}
#post-user-img img{
    width: inherit;
    height: inherit;
    border-radius: 50px;
    border: 1px solid #d9dbddd0;
}

#post-user-details{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* text-align: left; */
}
#post-user-details #name{
    font-size: 110%;
    /* font-weight: bold; */
    /* padding: 3px; */
    margin-bottom: 5px;
}
#post-user-details #date{
    font-size: 90%;
    color: gray;
    /* padding: 3px; */
}

#post-more{
    /* position: absolute; */
    /* float: right; */
    margin-left: auto;
    align-self: center;
    /* font-size: 80%; */
    color: rgb(172, 171, 171);
    padding: 5px;
}
#post-more svg{
    transform: scale(1.2);
}

#post-body{
    text-align: center;
    
}
#post-body img{
    max-width: 100%;
}

#body-text{
    text-align: left;
    /* padding: 10px; */
    margin-bottom: 10px;
}

#post-info{
    text-align: left;
    padding-left: 5px;
    position: relative;
    display: flex;
    justify-content: space-between;
}
#post-info svg{
    color: rgb(18,156,247);
    color: rgba(172, 171, 171, 0.63);
}
#post-info #number-of-comments{
    /* float: right; */
    /* position: absolute;
    right:0; */
}

#post-footer{
    height: 40px;
    border-top: 2px solid rgba(172, 171, 171, 0.329);
    /* border-bottom: 2px solid rgba(172, 171, 171, 0.329); */
    /* margin: 10px 0; */
    display: flex;
    justify-content: space-evenly;
}

#post-footer button{
    width: 30%;
    color: gray;
    background-color: unset;
    border: unset;
}
#post-footer button:hover{
    background-color: #b8babd;
    color: white;
    transition: 0.2s;
}
#post-footer button:focus{
    outline: unset;
}

</style>