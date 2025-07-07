import { createSelector, createSlice } from "@reduxjs/toolkit";
import { posts } from "../../data/PostsData";
import type { RootState } from "../store";


const initialState = {
    posts: posts,
    currentPage: 1,
    postsPerPage: 6,
}


const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setPostsPerPage: (state, action) => {
            state.postsPerPage = action.payload
        }
    }
})


// selector for get last four posts
const allPosts = (state: RootState) => state.posts.posts
export const selectLatestFourPosts = createSelector(
    [allPosts],
    (posts) => posts.slice(16, 20)
)


// selector for pagination
export const selectCurrentPage = (state: RootState) => state.posts.currentPage;
export const selectPostsPerPage = (state: RootState) => state.posts.postsPerPage;

export const selectPaginatedPosts = createSelector(
    [allPosts, selectCurrentPage, selectPostsPerPage],
    (posts, currentPage, postsPerPage) => {
        const start = (currentPage - 1) * postsPerPage;
        const end = start + postsPerPage;
        return posts.slice(start, end);
    }
);


// selector for select all posts without open post 
export const selectAllPostsWithoutOpenPost = (postId: number) => createSelector(
    [allPosts],
    (posts) => {
        const filtered = posts.filter(post => post.id !== postId);
        const firstRange = filtered.slice(0, 7);       // 0 إلى 6
        const secondRange = filtered.slice(16, 21);    // 16 إلى 20
        return [...firstRange, ...secondRange];
    }
);

// export const selectAllPostsWithoutOpenPost = (postId: number) => createSelector(
//     [allPosts],
//     (post) => post
//         .filter(post => post.id !== postId)
//         .slice(0, 9)
// )

// selector for select open post 
export const selectOpenPost = (postId: number) => createSelector(
    [allPosts],
    (post) => post.find(post => post.id == postId)
)

// selector for get first three posts
export const selectFirstThreePosts = createSelector(
    [allPosts],
    (post) => post.slice(0, 3)
)


export const { setCurrentPage, setPostsPerPage } = postsSlice.actions;
export default postsSlice.reducer