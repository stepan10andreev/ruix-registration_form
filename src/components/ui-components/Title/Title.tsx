import React, { FC } from 'react'

interface ITitle {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'div';
  text: string;
}

export const Title: FC<ITitle> = ({ As = 'h1', text }) => {
  return (
    <As>{text}</As>
  )
}
