import {createSlice} from '@reduxjs/toolkit'



const initialState={

    value:0

}


const addTOCard = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state)=>{
            state.value+=1
        }
    }
})


export const {addItem} = addTOCard.actions;


export default addTOCard.reducer