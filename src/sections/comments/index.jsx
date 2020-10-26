import React, { Component } from 'react';
import Text from '../../components/Text';
import Bloquote from '../../components/bloquote';

export default class Comments extends Component {
    render() {
        return (
            <div className="container">
                <Text
                    align={'center'}
                    lineHeight={43}
                    mb={32}
                    size={33}
                    weight={300}
                >
                    {this.props.title}
                </Text>

                <Text
                    align={'center'}
                    lineHeight={24}
                    maxWidth={'75%'}
                    size={15}
                    weight={400}
                    mb={68}
                >
                    {this.props.description}
                </Text>

                <div className="row">
                    {this.props.data.map((item, index) => (
                        <div key={index} className="col-4">
                            <Bloquote text={item.text} author={item.author} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
