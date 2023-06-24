import React, { FC } from 'react'

interface IText {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'div';
  text: string;
  // mobileSize?: TSizes;
  // tabletSize?: TSizes;
  // desktopSize?: TSizes;
  // color?: EColor;
  // bold?: boolean;
}


export const UIText: FC<IText> = ({ As = 'span', text }) => {
  return (
    <As>
      {text}
    </As>
  )
}
