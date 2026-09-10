import {Card, Flex, Form} from "antd";
import {TagText} from "../common/TagText/TagText.jsx";
import {CardDescription} from "../common/CardDescription/CardDescription.jsx";
import {LockOutlined} from "@ant-design/icons";
import { useState} from "react";
import {InputToken} from "./InputToken/InputToken.jsx";
import {CurrentToken} from "./CurrentToken/CurrentToken.jsx";

const {useForm} = Form;

export const AuthCard = () => {
    const [token, setToken] = useState(() => {
        return document.cookie.replace(/(?:^|.*;\s*)Token\s*=\s*([^;]*).*$|^.*$/, "$1");
    });
    const [form] = useForm();

    const onLoginHandler = (values) => {
        const newToken = values.token.trim();
        document.cookie = `Token=${newToken}; path=/; max-age=864000`;
        setToken(newToken);
        form.resetFields();
    };

    const onLogoutHandler = () => {
        document.cookie = 'Token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        setToken('');
    };

    return (
        <Card className="card" styles={{body: {padding: '16px'}}}>
            <Flex vertical={true} justify="center" gap={'12px'}>
                <CardDescription title={'Авторизация'}
                                 icon={<LockOutlined style={{fontSize: '20px', color: '#1979FD'}}/>}
                                 descriptiom={`Токен сохраняется в соokie и используется для авторизации.`}/>
            </Flex>
            <Form form={form} onFinish={onLoginHandler}>
                <InputToken/>
            </Form>
            <Flex vertical={true} gap={'16px'}>
                <CurrentToken onLogout={onLogoutHandler} token={token}/>
                <TagText tag={'cookie'} className={'tag-storage'} title={'Хранилище'} align={'end'}/>
            </Flex>
        </Card>
    )
}