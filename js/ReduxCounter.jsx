import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Button } from './StyledComponents.jsx'


class ReduxCounter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return <Button clicks={this.props.clicks} onClick={e => this.props.handleClick()}>{this.props.clicks}</Button>
    }
}

function mapStateToProps(clicks) {
    return {clicks}
};

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => dispatch({ type: 'Add' })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
