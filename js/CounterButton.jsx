import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonBasic } from './StyledComponents.jsx'



class CounterButton extends React.Component {
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
            <ButtonBasic onClick={this.handleClick}>{this.state.clicks}</ButtonBasic>

        )
    }
}

export default CounterButton
