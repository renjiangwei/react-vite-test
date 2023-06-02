import { FC } from "react";

export const SvgIcon: FC<{size: string | number, name: string}> = (props) => {
  const size = `${props.size}`.replace('px', '').concat('px')
  return <>
    <svg style={{
      width: size,
      height: size
    }}>
      <use xlinkHref={'#' + props.name}></use>
    </svg>
  </>
}
SvgIcon.defaultProps = {
  size: 14,
}