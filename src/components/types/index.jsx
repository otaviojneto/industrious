import React, { Component } from 'react';
import Box from './style';

import Text from '../Text';
export default class Types extends Component {
    render() {
        return (
            <>
                <Box>
                    {this.props.icon}

                    <Text
                        weight={300}
                        size={18}
                        lineHeight={28}
                        mt={32}
                        mb={24}
                        uppercase
                    >
                        {this.props.title}
                    </Text>

                    <Text size={15} lineHeight={24} align={'center'}>
                        {this.props.description}
                    </Text>
                </Box>
            </>
        );
    }
}
