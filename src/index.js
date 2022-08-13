import './styles/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Foot from './Components/Foot';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from "@apollo/react-hooks";  // new apollo graphql shit
//import { ApolloClient } from 'apollo-boost';
const { render } = wp.element;    // new apollo graphql shit 
import client from "./apollo/client";
import Title from "./Components/Title";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Locations from "./Pages/Locations";
import Posts from "./Pages/Post";



function App() {

    return (
        <ApolloProvider client={client}>
            <div>
                <Router>
                    <Header />
                    <Title />
                    <Routes>
                        <Route path='/posts' element={<Posts />} />
                        <Route path='/locations' element={<Locations />} />
                    </Routes>
                    <Foot />
                </Router>
            </div>
        </ApolloProvider>



    );
}

ReactDOM.render(<App />, document.querySelector("#root"))

