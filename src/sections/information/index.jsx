import React, { Component } from 'react';
import Text from '../../components/Text';
import Colors from '../../styles/colors';
import Design from './style';

export default class Information extends Component {
    render() {
        return (
            <Design>
                <div className="container">
                    <Text
                        weight={300}
                        size={33}
                        lineHeight={43}
                        color={Colors.white}
                        align={'center'}
                        mb={24}
                        uppercase
                    >
                        CURABITUR ULLAMCORPER ULTRICIES
                    </Text>

                    <Text
                        weigh={400}
                        size={14}
                        lineHeight={24}
                        color={Colors.greywhite}
                        align={'center'}
                    >
                        Nunc lacinia ante nunc ac lobortis. Interdum adipiscing
                        gravida odio porttitor sem non mi integer non faucibus
                        ornare mi ut ante amet placerat aliquet. Volutpat eu sed
                        ante lacinia sapien lorem accumsan varius montes viverra
                        nibh in adipiscing. Lorem ipsum dolor vestibulum ante
                        ipsum primis in faucibus vestibulum. Blandit adipiscing
                        eu felis iaculis volutpat ac adipiscing sed feugiat eu
                        faucibus. Integer ac sed amet praesent. Nunc lacinia
                        ante nunc ac gravida.
                    </Text>
                </div>
            </Design>
        );
    }
}
