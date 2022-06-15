import React from 'react';
import AppRouter from "./components/AppRouter";
import './App.css'
import Navbar from "./components/Navbar";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";


const App = (): JSX.Element => {
    return (
        <Layout>
            <Navbar />
            <Content>
                <AppRouter />
            </Content>
        </Layout>
    );
};

export default App;