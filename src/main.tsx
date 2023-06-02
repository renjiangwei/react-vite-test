import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './style/index.less'
import store from './store/index.ts'
import { Provider } from 'react-redux'
import { router } from '@/routes/index.tsx'
import { RouterProvider } from 'react-router-dom'
import { createFromIconfontCN } from '@ant-design/icons'

console.log(import.meta.env.BASE_URL, 'import.meta.env.BASE_URL')
createFromIconfontCN({
  scriptUrl: `${import.meta.env.BASE_URL}iconfont.js`
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
)
