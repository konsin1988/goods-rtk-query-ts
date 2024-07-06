import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type IInitialState = {
    limit: string
}

const initialState: IInitialState = {
    limit: ''
}

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        setLimit(state, action: PayloadAction<string>) {
            state.limit = action.payload
        }
    }
})

export const { setLimit } = goodsSlice.actions;
export default goodsSlice.reducer