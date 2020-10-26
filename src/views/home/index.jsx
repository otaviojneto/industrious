import Comments from '../../sections/comments';
import Footer from '../../sections/footer';
import Hero from '../../sections/Hero';
import Information from '../../sections/information';
import Navigation from '../../sections/Navigation';
import Service from '../../sections/service';
import React, { Component } from 'react';

import Pic01 from '../../assets/images/pic01.jpg';
import Pic02 from '../../assets/images/pic02.jpg';
import Pic03 from '../../assets/images/pic03.jpg';

const informations = {
    title: 'CURABITUR ULLAMCORPER ULTRICIES',
    description:
        'Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.',
};

const comments = {
    title: ' FAUCIBUS CONSEQUAT LOREM',
    description:
        'In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.',
};

const commit = [
    {
        text:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus',
        author: {
            photo: Pic01,
            name: 'Jane Doe',
            job: 'CEO',
            company: ' ABC Inc.',
        },
    },
    {
        author: {
            photo: Pic02,
            name: 'John Doe',
            job: 'CUT',
            company: ' ABC Inc',
        },
        text:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus',
    },
    {
        author: {
            photo: Pic03,
            name: 'Janet Smith',
            job: 'CTO',
            company: ' ABC Inc',
        },
        text:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus',
    },
];

export default class Home extends Component {
    render() {
        return (
            <>
                <Navigation />
                <Hero />
                <Service />
                <Information
                    title={informations.title}
                    description={informations.description}
                />

                <Comments
                    title={comments.title}
                    description={comments.description}
                    data={commit}
                />
                <Footer />
            </>
        );
    }
}
