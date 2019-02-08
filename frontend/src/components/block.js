import React, {Component} from 'react';

import axios from 'axios';
import {errorStrings} from "../helpers/strings";
import i18n from "../i18n"

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

        axios.get("V1/api/block?identifier=" + this.props.identifier + '&language=' + i18n.languages[0])
            .then(response => {
                var blockResult = response.data[0] !== undefined ? response.data[0] : null;
                this.setState({
                    block: blockResult,
                    isLoading: false
                });
            })
            .catch(error => this.setState({error, isLoading: false}));
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