import {HeaderPage} from "./components/Header/HeaderPage.jsx";
import {useEffect, useState} from "react";
import {Col, Flex, Layout, Row} from "antd";
import {Intro} from "./components/Intro/Intro.jsx";
import {ThemeCard} from "./components/ThemeCard/ThemeCard.jsx";
import ThemeContext from "./contexts/ThemeContext/ThemeContext.js";


function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <Layout className="App">
                <HeaderPage/>
                <Flex vertical={true} gap={'25px'} style={{padding:'20px 16px'}}>
                    <Intro/>
                    <Row gutter={['10px', '10px']}>
                        <Col span={8} ><ThemeCard/></Col>
                        <Col span={8}><ThemeCard/></Col>
                        <Col span={8}><ThemeCard/></Col>
                        <Col span={16}><ThemeCard/></Col>
                        <Col span={8}><ThemeCard/></Col>
                    </Row>
                </Flex>
            </Layout>
        </ThemeContext.Provider>
    )
}

export default App
