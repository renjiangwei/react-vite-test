import { createSlice, configureStore, createAsyncThunk, createReducer, createAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

/*
  1. const a = createSlice() a.actions a.reducer
  2. const a = createAction() const b = createReducer() const
  3. const sync = createAsyncThunk(')
  const s = configureStore({
    reducer: {
      
    }
  })

*/
export const syncIn = createAsyncThunk('counter/syncIn', async (num, th) => {
  const a = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num)
    }, 2000)
  })
  return a
})
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: (state) => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  },
  extraReducers: (builder) => {
    builder.addCase(syncIn.fulfilled, (state, action) => {
      state.value = action.payload
    })
  }
})
export const { incremented, decremented } = counterSlice.actions

const aSlice = createSlice({
  name: 'a',
  initialState: {
    v: 0,
  },
  reducers: {
    incremented: state => {
      state.v += 1
    },
    out: state => {
      state.v -= 1
    }
  },
})

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    collapsed: false,
  },
  reducers: {
    toggleCollapsed: (state) => {
      state.collapsed = !state.collapsed
    }
  }
})
export const { toggleCollapsed } = layoutSlice.actions

const store = configureStore({
  reducer: {
    c: counterSlice.reducer,
    d: aSlice.reducer,
    layout: layoutSlice.reducer
  }
})

store.subscribe(() => console.log(store.getState()))
export default store
const state = store.getState()
export type StateType = typeof state
// 2

// export const increment = createAction('counter/in')
// export const decrement = createAction('counter/de')
// const change = createAction<number>('counter/change')
// const r = createReducer({
//   c: 0
// }, (builder) => {
//   builder.addCase(increment, (state, action) => {
//     state.c ++;
//     return state;
//   }).addCase(decrement, (state) => {
//     state.c --;
//     return state
//   }).addCase(change, (state, action) => {
//     state.c = action.payload
//   })
// })

// const rr = createReducer({
//   d: 0,
// }, (builder) => {
//   builder.addCase(increment, (state, action) => {
//     state.d ++ 
//     return state
//   })
// })

// const s = configureStore({
//   reducer: {
//     r,
//     rr,
//   },
// })

// console.log('aa', s.getState())
// s.dispatch(increment())
// s.dispatch(increment())
// console.log('bb', s.getState())
// s.dispatch(decrement())
// console.log('cc', s.getState())


// export {
//   s
// }