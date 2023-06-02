import { FC, ReactNode } from "react"
import { Outlet } from "react-router-dom"

const Content:FC = (props) => {
  return <div className="content">
    <Outlet></Outlet>
  </div>
}
Content.propTypes
export default Content