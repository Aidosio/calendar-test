import React from 'react';
import {Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import { RouteNames } from '../router';


const Navbar = (): JSX.Element => {

    const navigate = useNavigate()
    const auth = false
    return (
        <Layout.Header>
            <Row justify={"end"}>
                {auth
                ?
                    <>
                        <div style={{color: '#fff'}}>Aiods</div>
                        <Menu theme={"dark"} selectable={false}>
                            <Menu.Item
                                onClick={() => console.log("Выйти")}
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