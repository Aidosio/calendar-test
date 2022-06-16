import React, {useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import './App.css'
import Navbar from "./components/Navbar";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import {useActions} from "./Hooks/useActions";
import {IUser} from "./models/IUser";


const App = (): JSX.Element => {

    const {setUser, setIsAuth} = useActions()

    useEffect(()=> {
        if (localStorage.getItem('auth')){
            setUser({username: localStorage.getItem("username" || "")} as IUser)
            setIsAuth(true)
        }
    }, [])

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