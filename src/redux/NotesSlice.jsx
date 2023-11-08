import { createSlice } from '@reduxjs/toolkit'

export const NotesSlice = createSlice({
    name: 'notes',
    initialState:[
            {
                id:0,
                title:'Feedback',
                comment:'Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .'
                
            },

            {
                id:1,
                title:'Weekend Task',
                comment:'Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .'
               
            }
        ],
       
    
    reducers:{
      
        add: (state,action)=>{
            let id = state[state.length-1].id + 1 
            action.payload.id = id
            
            state.push(action.payload)
            
        },
        toggle: (state, action) => {
            const id = action.payload;
           
            const newState = state.filter((note) => note.id !== id);
           
            return newState;
        },
        edit: (state,action)=>{
            let {id,title,comment} = action.payload
           
            const index = state.findIndex((note) => note.id === id);
          
          
                state[action.payload.id]= action.payload
                
              
          
            
            return state
        },

    
    }
})

export const {add,toggle,edit} = NotesSlice.actions
export default NotesSlice.reducer