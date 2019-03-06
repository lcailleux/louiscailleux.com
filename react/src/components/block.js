import React, {Component} from 'react';

import i18n from "../i18n"
import Api from "../helpers/api";
import {errorStrings} from "../helpers/strings";

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
                var blockResult = response.data[0] !== undefined ? response.data[0] : null;
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
            return (<p>{this.state.error.message}</p>);
        }

        if (!this.state.isLoading && this.state.block && this.state.block.is_active) {
            return (
                <React.Fragment>
                    <div id={this.state.block.title}>
                        <p>{this.state.block.content}</p>
                    </div>
                </React.Fragment>
            )
        }

        return null;
    }
}

export default Block;