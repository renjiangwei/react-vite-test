
import './layout.less'
import Header from  './header'
import Side from  './side'
import Content from  './content'
import { FC, ReactNode } from 'react'

const Layout: FC<{children?: ReactNode}> = (props) => {
  return <>
    <Header></Header>
    <div className="body">
      <Side />
      <Content />
    </div>
  </>
}
export default Layout