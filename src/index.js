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
import {BrowserRouter} from "react-router-dom";



function App() {

    return (
        <BrowserRouter>
        <div>
            <ApolloProvider client={client}>
                <div>
                    <Header />
                  
                    <Title />
                    <Post />
                    <Foot />
                </div>
            </ApolloProvider>
        </div>
        </BrowserRouter>

    );
}

ReactDOM.render(<App />, document.querySelector("#root"))

