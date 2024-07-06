import { configureStore } from '@reduxjs/toolkit'
import { goodsApi } from './goodsApi'
import goodsSliceReducer from './slices/goodsSlice'

const store = configureStore({
    reducer: {
        [goodsApi.reducerPath]: goodsApi.reducer,
        goods: goodsSliceReducer
    },
    middleware: ( getDefaultMiddleware ) => (
        getDefaultMiddleware().concat(goodsApi.middleware)
    )
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;