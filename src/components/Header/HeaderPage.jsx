import {CodeSandboxOutlined, MoonOutlined, SunOutlined} from "@ant-design/icons"
import {Flex, Switch, Typography, Layout} from "antd";

const {Header} = Layout

export const HeaderPage = ({theme, setTheme}) => {


    const handleThemeChange = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    }

    return (
        <Header className='header'>
            <Flex gap={20}>
                <CodeSandboxOutlined style={{fontSize: '30px', color: '#0170FF'}}/>
                <Typography.Text className={`header-title primary-text`}>Storage Lab</Typography.Text>
            </Flex>
            <Flex gap={20}>
                <SunOutlined style={{fontSize: '20px', color: '#274C8C'}}/>
                <Switch
                    checked={theme === 'dark'}
                    onChange={handleThemeChange}
                />
                <MoonOutlined style={{fontSize: '20px', color: '#274C8C'}}/>
            </Flex>
        </Header>
    )
}