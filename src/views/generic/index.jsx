import React, { Component } from 'react';
import Footer from '../../sections/footer';
import Navigation from '../../sections/Navigation';
import Page from '../../sections/pageGeneric';

export default class Generic extends Component {
    render() {
        return (
            <>
                <Navigation />
                <Page />
                <Footer />
            </>
        );
    }
}
