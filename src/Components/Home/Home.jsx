import React, { Component } from 'react';

import './Home.css';


class Home extends Component {
    state = {
        topics: []
    };
    render() {
        return (
            <div className="homepage">
                <section className="dashboard-section">

                </section>
                <article className="main-articles">

                </article>
            </div>
        );
    }

    componentDidMount = () => {

    };
}

export default Home;
