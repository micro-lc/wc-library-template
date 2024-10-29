import { Button as AntButton } from 'antd'
import ArrowClockwise from './arrow-clockwise.svg?react'
import React from 'react'
import { StyleProvider } from '@ant-design/cssinjs'

interface RefreshButtonProps extends React.DOMAttributes<HTMLButtonElement> {
  container: Element
}

const Button: React.FC<RefreshButtonProps> = ({ container, ...props }) => {
  return (
    <StyleProvider container={container}>
      <AntButton
        {...props}
        icon={<ArrowClockwise width={16} height={16} />}
      />
    </StyleProvider>
  )
}

export type { RefreshButtonProps as ButtonProps }
export default Button
