import './styles/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Foot from './Components/Foot';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from "@apollo/react-hooks";  // new apollo graphql shit
//import { ApolloClient } from 'apollo-boost';
const { render } = wp.element;    // new apollo graphql shit 
import Post from "./Components/Post";
import client from "./apollo/client";
import Title from "./Components/Title";



function App() {
    return (
        <div>
            <ApolloProvider client={client}>
                <div>
                    <Header />
                    <Title />
                    <Post/>
                    <Foot />
                </div>
            </ApolloProvider>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"))

