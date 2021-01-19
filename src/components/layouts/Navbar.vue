<template>
    


    <nav>

      <div class="left-side" @click="reload">
        <img src="https://play-lh.googleusercontent.com/6Sp9grilVISOGqi92M26BH49Tj6o_VX_gByA4u1rl8kAvqOoY9n5EzDEHcFEnGHlzg" alt="">
        <input id="search" type="text"  placeholder="Search anything ...">
      </div>
      <div class="middle-side">
        <button class="home active" @click="scrollTop">
          <fa-icon icon="house-user" size="1x"/>
        </button>
        <button>
          <fa-icon icon="tv" size="1x"/>
        </button>
        <button>
          <fa-icon icon="users" size="1x"/>
        </button>
        <button>
          <fa-icon icon="dice-six" size="1x"/>
        </button>
      </div>
      <div class="right-side">

        <div id="account">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQHBg0QEBIPEA4QEBEQFRgQDRcQExAaFhUWFiATFRUYHSggGB4lGxgWITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NFQ0NDy0ZFRkrLSs3Ky0tLisrKzctNy0rNystLS0rKysrKy0rLSsrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAgYBB//EADQQAQACAAMFBQcCBwEAAAAAAAABAgMEEQUSITFhQVFxgbETIlKRocHRFDQyQnKCkuHxJP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A/TAGkAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAHVKTiW0iJmegOX2I1nSOM9F2mzL25zWv1lo5fLVy9eEce2Z5yauMzC2de8cdKx15/KE9dld9p8qtITVZ07Kj4p/wAUd9l2jlaJ8Y0aoaMHFyl8LnWdO+OMIHpVTNZGuNEzHu2747fGDUxijvFwpwbzW0aT69YcKgAAAAAAAAAAAAAAAAAA3Mjl/YYMfFPGfwx8vTfzFI77Q9ClWACKAAAAAAgzmXjMYWn80cpYUxuzMTzjg9IyNq4W5jxaOVo+sLEqiAqAAAAAAAAAAAAAAAALOz41zlPP0luMPZv7yvn6S3EqwARQAAAAABS2rTeyuvwzE/b7rqttGf8Ax316esAwwGmQAAAAAAAAAAAAAAAFrZ37ynn6S22FkJ0zlPH7S3UqwARQAAAAABibStM5u0azpGmnHlwhtsHPTrnL+P2WCABWQAAAAAAAAAAAAAAAE+SiZzNJiJmItHZybyHJ03MtSI7on5pkrQAgAAAAAAMDNxP6m+sTGtp5xz4t9U2nTeylp7Y0mPmsGKArIAAAAAAAAAAAAAAADc2fffylOnD5LLN2PicL1/uj0/DSZaAAAAAAAAFLa193LafFMR8uK6ydr4m9jVr8MeqwUAFZAAAAAAAAABQAAAAAEmXxpwMWLR/1t5XH/UYMW005xprrowGnsfE4Xr/d9vwlGkAigAAAAAIM3mP02Frprx056MPExJxMSbTzmdWhti/GlfGft+Wa1EAAAAAAAAAAABAAAAAABNlMb2GPW3ZynwlCA9LE6wKWysSb5eYn+WdIXWWgAAAAFbaN5plLadI+YMrOYvtszaezlHhCAGkABAAAAAAAAAAAAAAAAAAGxsmNMtPW0+kLqts+m5k6ddZ+c6rLLQAAAArbRjXJ38p+sLKPMU38C8d9Zj6A88A0yAAAAAAAAAAAAAAAAAAOqV37xEc5nQpSb20iJmejVyGS9jO9b+L0FXaxu1iO6NH0GVAAAAAAefzWH7LMWjrrHhKJt57KfqK6xwtHLr0lj4mHOFbS0TEtRHAAgAAAAAAAAAAAAPsRvTpHGei9l9mzfjf3Y7o5/wChVGtd+2kRMz0X8vsybcbzpHdHP5tHBwK4NdKxEes+aRNMR4WDXBrpWIhICKAAAAAAAAOcTDjErpaImOroBmZjZnbSfKftLPxMOcO2lomJ6vRuMTDjFrpaImOq6jzo0cxszTjSdek/aVC9JpbSYmJ6qOQBAAAAAH2OMg+LeVyNsbjPu1+s+ELeSyG5EWvxt2R2R+ZX01cRYGXrgR7sce+eMz5pQRQAAAAAAAAAAAAAAABHjYNcaulo19Y80gDIzOzpw+Nfej6x+VF6VTzmRjHiZrwv9J8VlTGMOrVmlpieEw5VAABpbKy2vvz4V/LOrG9aIjnM6PRYVPZ4cVjlEaFWOgGVAAAAAAAAAAAAAAAAAAAAAAUdqZffw9+P4q8+sMh6WY1h57Hw/ZY1q90rEqMBUTZX9zh/1R6t8EqwARQAAAAAAAAAAAAAAAAAAAAABibS/eW8vSAWJVUBUf/Z" alt="">
          <span>Mouaz</span>
        </div>

        <button>
          <fa-icon icon="plus" />
        </button>
        <button>
          <fa-icon icon="comment-dots" />
        </button>
        <button>
          <fa-icon icon="bell" />
        </button>
        <button>
          <fa-icon icon="arrow-down" />
        </button>
      </div>
    </nav> 
</template>


<script>
export default {
  methods:{
    scrollTop(){
      this.$forceUpdate()
      location.reload() 
      // var postsWrapper = document.getElementById('posts-wrapper');
      // postsWrapper.scrollTop = 0;

    },
    reload(){
      location.reload();
    }
  }
}
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');

nav{
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  height: 50px;
  /* box-shadow: 0px 5px rgb(0, 0, 0); */
  border-bottom: 2px solid rgba(172, 171, 171, 0.329);

}



nav button:focus{
  /* width: 50%; */
  /* background-color: red; */
  /* align-items: flex-end; */
  /* border: 1px solid black; */
  outline: unset;
}


.left-side{
  order:1;
  flex:1;
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
}
.left-side img{
  width: 40px;
  height: 40px;
  border-radius: 50px;
  opacity: 0.95;
  margin: 10px;
  margin-left: 0;
  border: 2px solid #3496ff7a;
}
.left-side img:hover{
  cursor: pointer;
}

.middle-side{
  order:2;
  flex:2;
  display: flex;
  justify-content:center;

}
.middle-side button{
  background-color: unset;
  width: 100px;
  border: unset;
  margin: 0 25px;
}
.middle-side button:hover{
  background-color: #d9dbdd80;
  border-radius: 12px;
  transition: ease 0.2s;
  cursor: pointer;
}
/* .middle-side button:focus{
  color:#3496ff;
  border-bottom: 5px solid #d0e7ff;
} */
.middle-side .active{
  color:#3496ff;
  border-bottom: 5px solid #d0e7ff;
}
.middle-side svg{
  transform: scale(1.8);
}


.right-side{
  order:3;
  flex:1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
} 
.right-side button{
  margin: 0 5px;
  background-color: #E4E6EB;
  border: unset;
  border-radius: 25px;
  width: 40px;
  height: 40px;
  /* margin-left: 10px; */
}
.right-side svg{
  transform: scale(1.5);
}
.right-side button:hover{
  background-color: #b8babd;
  border: unset;
  transition: ease-in 0.15s;
  cursor: pointer;
}
.right-side button:focus{
  background-color: #d0e7ff;
}

#search{
  height: 35px;
  border-radius: 50px;
  border-color: unset;
  border: 2px solid #b8babd6c;
  background-color: #e4e6eb57;
  width: 250px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 16px;
  /* font-weight: bold; */

}
#search:focus{
  outline: unset;
  background-color: #b8babd60;
  transition: ease-in 0.2s;
}
#search:focus::placeholder{
  color:rgb(75, 75, 75);
}

#account{
  display: flex;
  align-items: center;
  margin: 5px;
  font-family: "Roboto";
  font-weight: 500;
  padding: 5px;
  border-radius: 30px;
}
#account:hover{
  background-color: #d9dbdd80;
  cursor: pointer;
}
#account img{
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 10px;
}



</style>
