import React, {Component} from 'react';

import ModeClass from "../helpers/mode-class";
import i18n from "../i18n"
import Api from "../helpers/api";
import {errorStrings} from "../helpers/strings";

import Content from 'react-bulma-components/lib/components/content';

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
            return (<p>{this.state.error.message}</p>);
        }

        if (!this.state.isLoading && this.state.block && this.state.block.is_active) {
            return (
                <Content>
                    <div id={this.state.block.title}>
                        {this.state.block.show_title === true && (
                            <h2 className={ModeClass.getValue()}>{this.state.block.title}</h2>
                        )}
                        <p className="display-block">
                            {this.state.block.content.split('\n').map((item, key) => {
                                return <React.Fragment key={key}>{item}<br/></React.Fragment>
                            })}
                        </p>
                    </div>
                </Content>
            )
        }

        return null;
    }
}

export default Block;