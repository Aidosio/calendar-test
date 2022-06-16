import React, {useState} from 'react';
import {Button, Form, Input} from "antd";
import { rules } from '../utils/rules';
import {useDispatch} from "react-redux";
import {useTypeSelector} from "../Hooks/useTypeSelector";
import {useActions} from "../Hooks/useActions";

const LoginForm = ():JSX.Element => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { error, isLoading } = useTypeSelector(state => state.auth)

    const {login} = useActions()
    const submit = () => {
        // @ts-ignore
        login( username, password)
    }

    return (
        <div>
            <Form
                onFinish={submit}
            >
                {error && <div style={{color: 'red'}}>
                    {error}
                </div>}
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[rules.required('Please input your username!')]}
                >
                    <Input value={username} onChange={e => setUsername(e.target.value)} />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="Password"
                    rules={[rules.required('Please input your username!')]}
                >
                    <Input.Password  value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={isLoading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;