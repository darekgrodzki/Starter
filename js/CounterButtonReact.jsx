import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './StyledComponents.jsx'

class CounterButtonReact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            clicks: 0

        }
    }

    handleClick = () => {
        this.setState({
            clicks: this.state.clicks + 1
        })
    }

    render() {

        return (

            <Button clicks={this.state.clicks} onClick={this.handleClick}>{this.state.clicks}</Button>

        )
    }
}

export default CounterButtonReact
