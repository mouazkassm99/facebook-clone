const posts =[
    {
        id: 1,
        'username': 'Mouaz Al-Kassm',
        'date' : new Date('December 11, 2020 03:24:00'),
        'text' : 'some text for the post testing',
        'img': 'https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg?size=626&ext=jpg',
        'likes': 420,
        'comments': 69,
        'shares':13
    },
    {
        id: 2,
        'username': 'Lolo Sy',
        'date' : new Date('December 11, 2020 03:24:00'),
        'text' : 'some text for the post testing',
        'img': '',
        'likes': 852,
        'comments': 55,
        'shares':58
    },
    {
        id: 3,
        'username': 'Kareem Gue',
        'date' : new Date('December 11, 2020 03:24:00'),
        'text' : 'some text for the post testing',
        'img': 'https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg?size=626&ext=jpg',
        'likes': 753,
        'comments': 111,
        'shares':13
    },
];

import axios from 'axios';

const APP_ID = '5fd9031380fb23d9b9425442';
const BASE_URL = 'https://dummyapi.io/data/api';

let getPosts = ()=>{
    var innerPosts;

    axios.get(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) =>{
                innerPosts = data.data;
                console.log(data.data);
            }
            )
            .catch(console.error);


    return innerPosts;


}


export default {posts,getPosts
};