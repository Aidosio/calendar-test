import React from 'react';
import {Route, Routes } from 'react-router-dom';
import {privateRoutes, publicRoutes} from "../router";
import Event from "../page/Event";
import Login from "../page/Login";
import {useSelector} from "react-redux";
import {useTypeSelector} from "../Hooks/useTypeSelector";

const AppRouter = (): JSX.Element => {
    const {isAuth} = useTypeSelector(state => state.auth)
    return (
        isAuth
        ?
            <Routes>
                {privateRoutes.map(route =>
                     <Route
                        key={route.path}
                        path={route.path}
                        element={<route.element />}
                    />
                )}
                <Route path="*" element={<Event />} />
            </Routes>
        :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.element />}
                    />
                )}
                <Route path="*" element={<Login />} />
            </Routes>
    );
};

export default AppRouter;