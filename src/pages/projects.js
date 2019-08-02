import React, {Component} from 'react';
import Message from "react-bulma-components/lib/components/message";

import {about, projects} from "../helpers/urls";
import {aboutStrings, projectStrings} from "../helpers/strings";
import ProjectsList from "../components/projects-list";
import {Helmet} from "react-helmet";

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
                <Helmet>
                    <meta name="description" content={projectStrings.description} />
                    <link rel="canonical" href={projects.production_url} />
                </Helmet>
                <ProjectsList/>
                <Message color="warning" className="coming-soon">
                    <Message.Body>
                        {projectStrings.more_to_come}
                    </Message.Body>
                </Message>
            </main>
        );
    }
}

export default Projects;