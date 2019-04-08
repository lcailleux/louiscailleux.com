import React, {Component} from 'react';

import i18n from "../i18n"
import Api from "../helpers/api";
import {defaultStrings, errorStrings} from "../helpers/strings";

class Block extends Component {
    state = {
        isLoading: true,
        block: null,
        error: null
    };

    componentDidMount() {
        this.fetchBlock();
    }

    fetchBlock() {
        if (!this.props.identifier) {
            this.setState({
                error: {
                    message: errorStrings.required_identifier
                },
                isLoading: false
            });
            return false;
        }

        let getCall = Api.callApi(Api.BLOCK_URL(this.props.identifier, i18n.languages[0]), Api.TYPE_GET);
        if (getCall) {
            getCall.then(response => {
                let blockResult = response.data[0] !== undefined ? response.data[0] : null;
                this.setState({
                    block: blockResult,
                    isLoading: false
                });
            }).catch(error => this.setState({error, isLoading: false}));
        }
        return true;
    }

    render() {
        if (this.state.error) {
            return (
                <section className="section">
                    <h1 className="section__title">{i18n.t(this.state.error.message)}</h1>
                </section>
            );
        }

        if (this.state.isLoading) {
            return (
                <section className="section">
                    <h1 className="section__title">{defaultStrings.loading}</h1>
                    <div className="section__content">
                        <p className="display-block" />
                    </div>
                </section>
            );
        }

        if (!this.state.isLoading && this.state.block && this.state.block.is_active) {
            return (
                <section className="section">
                    {this.state.block.show_title === true && (
                        <h1 className="section__title">{this.state.block.title}</h1>
                    )}
                    <div className="section__content">
                        <p className="display-block">
                            {this.state.block.content.split('\n').map((item, key) => {
                                return <React.Fragment key={key}>{item}<br/></React.Fragment>
                            })}
                        </p>
                    </div>
                </section>
            )
        }

        return null;
    }
}

export default Block;