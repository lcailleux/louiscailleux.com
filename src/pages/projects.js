import React, {Component} from 'react';

import Message from 'react-bulma-components/lib/components/message';

import {projects} from '../helpers/urls';
import {projectStrings} from '../helpers/strings';
import ProjectsList from '../components/projects-list';

class Projects extends Component {
    componentWillMount() {
        document.title = projects.documentTitle;
    }

    componentDidMount () {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <main className="content">
                <ProjectsList/>
                <article className="card">
                    <Message color="warning" className="coming-soon">
                        <Message.Body>
                            {projectStrings.more_to_come}
                        </Message.Body>
                    </Message>
                </article>
            </main>
        );
    }
}

export default Projects;