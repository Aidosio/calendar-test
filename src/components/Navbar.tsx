import React from 'react';
import {Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import { RouteNames } from '../router';
import {useTypeSelector} from "../Hooks/useTypeSelector";
import {useActions} from "../Hooks/useActions";


const Navbar = (): JSX.Element => {
    const navigate = useNavigate()
    const {isAuth, user} = useTypeSelector(state => state.auth)
    const {logout} = useActions()

    return (
        <Layout.Header>
            <Row justify={"end"}>
                {isAuth
                ?
                    <>
                        <div style={{color: '#fff'}}>{user.username}</div>
                        <Menu theme={"dark"} selectable={false}>
                            <Menu.Item
                                // @ts-ignore
                                onClick={logout}
                                key={1}>
                                Выйти
                            </Menu.Item>
                        </Menu>
                    </>
                :
                    <Menu theme={"dark"} selectable={false}>
                        <Menu.Item
                            onClick={() => navigate(RouteNames.LOGIN)}
                            key={1}>
                            Логин
                        </Menu.Item>
                    </Menu>
                }

            </Row>
        </Layout.Header>
    );
};

export default Navbar;