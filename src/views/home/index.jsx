import React, { Component } from 'react';
import Hero from '../../sections/Hero';
import Navigation from '../../sections/Navigation';
import Service from '../../sections/service';

export default class Home extends Component {
    render() {
        return (
            <>
                <Navigation />
                <Hero />
                <Service />
            </>
        );
    }
}
