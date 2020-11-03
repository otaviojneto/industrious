import React, { Component } from 'react';
import Text from '../../components/Text';
import Box, { Button, Image } from './style';
import not404 from '../../assets/images/undraw_page_not_found_su7k.svg';

export default class notFound extends Component {
    render() {
        return (
            <Box>
                <Text weight={700} size={50} align={'center'}>
                    Pagina não encontrada!
                </Text>

                <Image src={not404} alt={'img'} />

                <Button href="/"> Ir para Home </Button>
            </Box>
        );
    }
}
