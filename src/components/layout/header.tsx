import { toggleCollapsed, StateType } from "@/store"
import { Avatar } from "antd"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"


const Header: FC = () => {
  const dispatch = useDispatch()
  const value = useSelector<StateType, boolean>(state => state.layout.collapsed)
  const handleCollapse = () => {
    console.log('cc', value, 'a')
    dispatch(toggleCollapsed())
  }
  return <>
    <div className="header">
      <div className="header-left">
        <div>
          icon
        </div>
        <div onClick={handleCollapse}>collapsed{value + '1'}</div>
        <div>title</div>
      </div>
      <div className="header-right">
        <div className="header-avatar">
          <Avatar shape="circle" size={50}></Avatar>
        </div>
      </div>
    </div>
  </>
}

export default Header