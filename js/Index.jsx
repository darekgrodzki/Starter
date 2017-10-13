import React from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import Root from './Root.jsx'
import { Provider } from 'react-redux'
import MyReducer from './Reducer.jsx'


let store = createStore(MyReducer);


ReactDOM.render((
    <Provider store={store}>
        <Root/>
    </Provider>
), document.getElementById('app'))
