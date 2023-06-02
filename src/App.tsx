// import { useState, useContext } from 'react'
// import { useSelector, useDispatch, useStore } from 'react-redux'

import { redirect } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/layout'
import { ConfigProvider } from 'antd'
import { createContext, useEffect } from 'react'

// import { syncIn, incremented, decremented } from './store/index'
function App() {
  // const dispatch = useDispatch()
  // store.getState().username
  // store.dispatch({type: 'setUsername', preload: 'aaa'})
  // setTimeout(() => {
  //   store.dispatch({type: 'setUsername', preload: 'aaa'})
  // },1000)
  // const value = useSelector(state => state.value)
  // const b = useSelector(state => state.c)
  // const handleClick = () => {
    // store.dispatch(incremented())
    // dispatch(incremented())
    // dispatch(increment())
    // dispatch(syncIn(123))
  // }
  // const store = useStore()
  // const a = store.getState()
  // const list = new Array(value).fill(0).map((item, index) => <li key={index}>{index}</li>)
  useEffect(() => {
    if (true) {
      setTimeout(() => {
        redirect('/login')
      })
    }
  })
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#0960bd',
          },
        }}
      >
        <Layout></Layout>
      </ConfigProvider>
    </>
  )
}

export default App
