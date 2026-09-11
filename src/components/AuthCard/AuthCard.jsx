import {Card, Flex, Form} from "antd";
import {TagText} from "../common/TagText/TagText.jsx";
import {CardDescription} from "../common/CardDescription/CardDescription.jsx";
import {LockOutlined} from "@ant-design/icons";
import {useContext} from "react";
import {InputToken} from "./InputToken/InputToken.jsx";
import {CurrentToken} from "./CurrentToken/CurrentToken.jsx";
import TokenContext from "../../contexts/TokenContext/TokenContext.js";

const {useForm} = Form;

export const AuthCard = () => {
    const {token, onLoginHandler, onLogoutHandler} = useContext(TokenContext);
    const [form] = useForm();

    return (
        <Card className="card" styles={{body: {padding: '16px'}}}>
            <Flex vertical={true} justify="center" gap={'12px'}>
                <CardDescription title={'Авторизация'}
                                 icon={<LockOutlined style={{fontSize: '20px', color: '#1979FD'}}/>}
                                 descriptiom={`Токен сохраняется в соokie и используется для авторизации.`}/>
            </Flex>
            <Form form={form} onFinish={(values)=>onLoginHandler(form, values)}>
                <InputToken/>
            </Form>
            <Flex vertical={true} gap={'16px'}>
                <CurrentToken onLogout={()=>onLogoutHandler()} token={token}/>
                <TagText tag={'cookie'} className={'tag-storage'} title={'Хранилище'} align={'end'}/>
            </Flex>
        </Card>
    )
}