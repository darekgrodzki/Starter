import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import CounterButton from './CounterButton.jsx';
import styled from 'styled-components';
import CounterButtonReact from './CounterButtonReact.jsx';
import ReduxCounter from './ReduxCounter.jsx';
import { MyDiv } from './StyledComponents.jsx'
import { ButtonOne } from './StyledComponents.jsx'





class Root extends React.Component {

    render() {

        return (

            <BrowserRouter>
                <MyDiv>

                    <Link to="/">
                        <ButtonOne>Home</ButtonOne>
                    </Link>
                    <Link to="/my/buttons">
                        <ButtonOne>Buttons</ButtonOne>
                    </Link>
                    <Route path="/" component={CounterButton}/>
                    <Route path="/my" component={CounterButtonReact}/>
                    <Route path="/my/buttons" component={CounterButtonReact}/>
                </MyDiv>
            </BrowserRouter>

        );

    }
}


export default Root
