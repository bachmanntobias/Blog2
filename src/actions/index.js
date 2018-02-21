import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'

export function fetchPosts(){   

    const request = axio.get();

return { 
 type: FETCH_POSTS
};

}