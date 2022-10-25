import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { charactersApi } from "./CharactersApi";



export const store = configureStore({
	reducer: {
		[charactersApi.reducerPath]: charactersApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(charactersApi.middleware)
})

setupListeners(store.dispatch)