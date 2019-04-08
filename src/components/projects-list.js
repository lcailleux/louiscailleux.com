import React, {Component} from 'react';

import i18n from "../i18n"
import Api from "../helpers/api";
import {defaultStrings, projectStrings} from "../helpers/strings";

class ProjectsList extends Component {
    state = {
        isLoading: true,
        projects: null,
        error: null
    };

    componentDidMount() {
        this.fetchProjects();
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
            return (
                <article className="card" key="error">
                    <header className="card__header">
                        <h1 className="card__header__title text-center">{i18n.t(this.state.error.message)}</h1>
                    </header>
                </article>
            );
        }

        if (!this.state.isLoading && this.state.projects) {
            const projects_list = this.state.projects.map((project, i) =>
                <article className="card" key={i}>
                    <header className="card__header">
                        <h1 className="card__header__title">{project.title}</h1>
                    </header>
                    <main className="card__body">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-info">
                            <p className="project-description">
                                {project.description.split('\n').map((item, key) => {
                                    return <React.Fragment key={key}>{item}<br/></React.Fragment>
                                })}
                            </p>
                            <a href={project.link} className="project-link">{projectStrings.github}</a>
                        </div>
                    </main>
                </article>
            );
            return (<div className="projects-list">{projects_list}</div>);
        }

        return (
            <article className="card" key="error">
                <header className="card__header">
                    <h1 className="card__header__title text-center">{i18n.t(defaultStrings.loading)}</h1>
                </header>
            </article>
        );
    }
}

export default ProjectsList;