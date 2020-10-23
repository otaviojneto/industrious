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
            uppercase
            weight={weight}
        >
            {children}
        </Txt>
    );
}
