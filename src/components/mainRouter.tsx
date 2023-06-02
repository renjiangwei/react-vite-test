import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes/index.tsx'
import { FC } from 'react'

const MainRouter: FC = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default MainRouter