import React, {Component} from 'react';

import i18n from "../i18n"
import Api from "../helpers/api";
import {projectStrings} from "../helpers/strings";

import Content from 'react-bulma-components/lib/components/content';
import {onModeChange} from "./mode-switcher";

class ProjectsList extends Component {
    state = {
        isLoading: true,
        projects: null,
        error: null
    };

    componentDidMount() {
        this.fetchProjects();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        onModeChange(localStorage.getItem('darkMode'));
    }

    fetchProjects() {
        let getCall = Api.callApi(Api.PROJECTS_URL(i18n.languages[0]), Api.TYPE_GET);
        if (getCall) {
            getCall.then(response => {
                let projectsResult = response.data !== undefined ? response.data : null;

                this.setState({
                    projects: projectsResult,
                    isLoading: false
                });
            }).catch(error => this.setState({error, isLoading: false}));
        }
        return true;
    }

    render() {
        if (this.state.error) {
            return (<p>{this.state.error.message}</p>);
        }

        if (!this.state.isLoading && this.state.projects) {
            const projects_list = this.state.projects.map((project, i) =>
                <li key={i}>
                    <Content>
                        <div id={project.title} className="project-content">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-info">
                                <h2 className="title">{project.title}</h2>
                                <p className="display-project">
                                    {project.description.split('\n').map((item, key) => {
                                        return <React.Fragment key={key}>{item}<br/></React.Fragment>
                                    })}
                                </p>
                                <a href={project.link} className="project-link">{projectStrings.github}</a>
                            </div>
                        </div>
                    </Content>
                </li>
            );
            return (<ul className="projects-list">{projects_list}</ul>);
        }
        return true;
    }
}

export default ProjectsList;