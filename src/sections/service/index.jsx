import React from 'react';
import Text from '../../components/Text';
import Types from '../../components/types';
import { FaRegIdCard } from 'react-icons/fa';

const listType = [
    {
        icon: <FaRegIdCard size={100} color={'red'} />,
        title: 'dfghjkl',
        text: 'sdxfcgyvhbunjiomkhnjihyg hjhyiuij',
    },
    {
        icon: <FaRegIdCard size={100} color={'red'} />,
        title: 'dfghjkl',
        text: 'sdxfcgyvhbunjiomkhnjihyg hjhyiuij',
    },
    {
        icon: <FaRegIdCard size={100} color={'red'} />,
        title: 'dfghjkl',
        text: 'sdxfcgyvhbunjiomkhnjihyg hjhyiuij',
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
                SEM TURPIS AMET SEMPER
            </Text>
            <Text align={'center'} lineHeight={24} size={15} weight={400}>
                In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim
                aliquet. Accumsan ac integer lobortis commodo ornare
            </Text>
            <Text align={'center'} lineHeight={24} size={15} weight={400}>
                aliquet accumsan erat tempus amet porttitor.
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
