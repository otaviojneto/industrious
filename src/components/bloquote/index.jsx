import React, { Component } from 'react';
import Bloquet, { Quote, Autor } from './style';
import Text from '../Text';
import UserDefault from '../../assets/images/user-default.png';

export default class Bloquote extends Component {
    render() {
        return (
            <Bloquet>
                <Quote>{this.props.text}</Quote>

                {this.props.author && (
                    <Autor>
                        <img
                            src={this.props.author.photo || UserDefault}
                            alt={this.props.author.name || 'Desconhecido'}
                        />

                        <Text size={12} weight={400} lineHeight={18}>
                            -
                            <strong>
                                {' '}
                                {this.props.author.name || 'Desconhecido'}
                            </strong>{' '}
                            {this.props.author.job} -{' '}
                            {this.props.author.company}.
                        </Text>
                    </Autor>
                )}
            </Bloquet>
        );
    }
}
