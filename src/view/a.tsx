import { SvgIcon } from "@/components/svg-icon"
import { Link, useLoaderData } from "react-router-dom"


export default () => {
  const data = useLoaderData()
  return <>
    <SvgIcon name="icon-duqushujuku" size={14}></SvgIcon>
    <div>aaa</div>{JSON.stringify(data)}
    <Link to='/'>home</Link>
    </>
}