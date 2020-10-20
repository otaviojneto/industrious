import React, { Component } from 'react';
import bannerVideo from '../../assets/images/banner.mp4';

export default class Hero extends Component {
    render() {
        return (
            <Hero>
                <video autoPlay loop muted playsInline src={bannerVideo}>
                    <div className="container">INDUSTRIOUS</div>
                </video>
            </Hero>
        );
    }
}
