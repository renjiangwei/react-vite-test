import { Menu, MenuProps } from 'antd'
import { getParentByKey, items } from '@/routes/menu'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { StateType } from '@/store'
import './side.less'
import { useSelector } from 'react-redux'
const Side = () => {
  const [activeKey, setActiveKey] = useState<string>('/abc')
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const navigate = useNavigate()
  const location = useLocation()
  const collapsed = useSelector<StateType, boolean>(state => state.layout.collapsed)
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setActiveKey(e.key)
    navigate(e.key)
  }
  const onOpenChange: MenuProps['onOpenChange'] = (e) => {
    setOpenKeys(e)
  }
  useEffect(() => {
    setActiveKey(location.pathname)
    const m = getParentByKey(location.pathname)
    setOpenKeys(m)
  }, [location.pathname])
  return <div className="side" style={{width: collapsed ? '80px': '200px'}}>
    <Menu
      style={{ width: collapsed ? '80px': '200px', height: '100%' }}
      mode="inline"
      theme="light"
      items={items}
      onClick={handleMenuClick}
      selectedKeys={[activeKey]}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      inlineCollapsed={collapsed}
    >
    </Menu>
  </div>
}

export default Side