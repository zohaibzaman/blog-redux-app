import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    console.log('About to fetchPosts');
    await dispatch(fetchPosts());
    console.log('Sucessfully fetchPosts');
    const posts = getState().posts;
    const userIds = [...new Set(posts.map((post) => post.userId))];
    console.log('users ids are:', userIds);
    userIds.forEach(userId => dispatch(fetchUser(userId)));
};


export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
}

//above code equals to this one: 
// export const fetchPosts = () => {
//     return async (dispatch) => {
//         const response = await jsonPlaceHolder.get('/posts');
//         dispatch({ type: 'FETCH_POSTS', payload: response });
//     };
// };