import React, { Component } from 'react';
import * as api from '../../api.js';
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
        this.setTopics();
    };

    setTopics = () => {
        api.fetchTopics().then((topics) => {
            this.setState({
                topics: topics
            });
        });
    };
}

export default Home;
