import { useRoutes, RouteObject, createBrowserRouter, redirect, Navigate } from 'react-router-dom'
const list: RouteObject[] = [
  {
    path: '',
    errorElement: <>404</>,
    // Component: lazy(() => import('../App.tsx')),
    lazy: async () => {
      let a = await import('../App')
      return {
        Component: a.default,
        ErrorBoundary: () => <>404</>,
      }
    },
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      {
        path: 'home',
        index: true,
        lazy: async () => {
          const c = await import('../view/a')
          return {
            Component: c.default
          }
        },
        loader: () => {
          const t = localStorage.getItem('token')
          if (!t) {
            return redirect('/login')
          }
          return null
        }
      },
      {
        path: 'abc',
        lazy: () => import('../view/abc')
      },
      {
        path: 'ddd',
        lazy: () => import('../view/abc')
      },
    ]
  },
  {
    path: '/login',
    errorElement: <>404</>,
    Component: () => <>login</>,
    loader: () => {
      const t = localStorage.getItem('token')
        console.log(t, 'ttt')
        if (t) {
          return redirect('/')
        }
        return null
    }
  }
  
]
export const router = createBrowserRouter(list)
