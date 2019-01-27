import React, {Component} from 'react';

import axios from 'axios';

class Block extends Component {
    state = {
        isLoading: true,
        block: null,
        error: null
    }

    componentDidMount() {
        this.fetchBlock();
    }

    fetchBlock() {
        axios.get("V1/api/block/1")
            .then(response => {
                this.setState({
                    block: response.data,
                    isLoading: false
                });
            })
            .catch(error => this.setState({error, isLoading: false}));
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