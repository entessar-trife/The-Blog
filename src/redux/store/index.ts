import { configureStore } from '@reduxjs/toolkit'
import postsReducer from "../slice/PostsSlice"
import themeReducer from "../slice/themeSlice"

const store = configureStore({
  reducer: {
    posts: postsReducer,
    theme: themeReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export default store;