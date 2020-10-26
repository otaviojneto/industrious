import React from 'react';
import Text from '../../components/Text';
import Types from '../../components/types';
import {
    FaRegIdCard,
    FaRegCopy,
    FaSave,
    FaFileCode,
    FaTelegramPlane,
    FaFireAlt,
} from 'react-icons/fa';
import colors from '../../styles/colors';

const listType = [
    {
        icon: <FaRegIdCard size={100} color={colors.primary} />,
        title: 'FEUGIAT CONSEQUAT',
        text:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
    },
    {
        icon: <FaRegCopy size={100} color={colors.primary} />,
        title: 'ANTE SEM INTEGER',
        text:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
    },
    {
        icon: <FaSave size={100} color={colors.primary} />,
        title: 'IPSUM CONSEQUAT',
        text:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
    },
    {
        icon: <FaFileCode size={100} color={colors.primary} />,
        title: 'INTERDUM GRAVIDA',
        text:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
    },
    {
        icon: <FaTelegramPlane size={100} color={colors.primary} />,
        title: 'FAUCIBUS CONSEQUAT',
        text:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
    },
    {
        icon: <FaFireAlt size={100} color={colors.primary} />,
        title: 'ACCUMSAN VIVERRA',
        text:
            ' Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
    },
];

export default function Service() {
    return (
        <div className="container">
            <Text
                align={'center'}
                weight={300}
                size={33}
                lineHeight={43}
                mt={64}
                mb={24}
            >
                Aqui vai alguma informação
            </Text>
            <Text
                align={'center'}
                lineHeight={24}
                size={15}
                weight={400}
                mb={40}
            >
                In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim
                aliquet. Accumsan ac integer lobortis commodo ornare aliquet
                accumsan erat tempus amet porttitor.
            </Text>

            <div className="row">
                {listType.map((item, index) => (
                    <div className="col-4">
                        <Types
                            icon={item.icon}
                            title={item.title}
                            description={item.text}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
