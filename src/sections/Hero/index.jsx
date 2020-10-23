import React, { Component } from 'react';
import Text from '../../components/Text';
import Colors from '../../styles/colors';
import DivHero from './style';

export default class Hero extends Component {
    render() {
        return (
            <DivHero>
                <div className="box">
                    <Text
                        weight={200}
                        size={59}
                        lineHeight={70}
                        color={Colors.white}
                        mb={22}
                    >
                        INDUSTRIOUS
                    </Text>
                    <Text
                        weight={400}
                        size={22}
                        lineHeight={36}
                        color={Colors.greywhite}
                        mb={8}
                    >
                        A responsive business oriented template with a video
                        background
                    </Text>

                    <Text
                        weight={400}
                        size={22}
                        lineHeight={36}
                        color={Colors.greywhite}
                    >
                        designed by TEMPLATED and released under the Creative
                        Commons License.
                    </Text>
                </div>
            </DivHero>
        );
    }
}
