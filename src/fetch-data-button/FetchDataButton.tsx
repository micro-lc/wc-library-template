import React, { type PropsWithChildren } from 'react'
import { Button as AntButton } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'

interface FetchDataButtonProps extends React.DOMAttributes<HTMLButtonElement> {
  container: Element
}

const Button: React.FC<PropsWithChildren<FetchDataButtonProps>> = ({ container, children, ...props }) => {
  return (
    <StyleProvider container={container}>
      <AntButton type="primary" {...props} >
        { children }
      </AntButton>
    </StyleProvider>
  )
}

export type { FetchDataButtonProps }
export default Button
