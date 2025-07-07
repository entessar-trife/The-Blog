import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    darkMode: localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.darkMode = !state.darkMode;
            localStorage.setItem("theme", state.darkMode ? "dark" : "light")
        }
    }
})

export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer
