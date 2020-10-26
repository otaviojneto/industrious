import React from 'react';
import Txt from './style';

export default function Text({
    children,
    align,
    color,
    lineHeight,
    mb,
    mt,
    pb,
    pt,
    size,
    uppercase,
    weight,
    padding,
    maxWidth,
}) {
    return (
        <Txt
            align={align}
            color={color}
            lineHeight={lineHeight}
            mb={mb}
            mt={mt}
            pb={pb}
            pt={pt}
            size={size}
            uppercase={uppercase}
            weight={weight}
            padding={padding}
            maxWidth={maxWidth}
        >
            {children}
        </Txt>
    );
}
