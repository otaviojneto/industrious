import React from 'react';
import Txt from './style';

export default function Text({
    align,
    children,
    color,
    lineHeight,
    mb,
    ml,
    mr,
    mt,
    pb,
    pr,
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
            ml={ml}
            mr={mr}
            mt={mt}
            pb={pb}
            pr={pr}
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
