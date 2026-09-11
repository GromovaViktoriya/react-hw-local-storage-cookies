import {HeaderPage} from "./components/Header/HeaderPage.jsx";
import {useEffect, useState} from "react";
import {Col, Flex, Layout, Row} from "antd";
import {Intro} from "./components/Intro/Intro.jsx";
import {ThemeCard} from "./components/ThemeCard/ThemeCard.jsx";
import ThemeContext from "./contexts/ThemeContext/ThemeContext.js";
import {AuthCard} from "./components/AuthCard/AuthCard.jsx";
import {ProductList} from "./components/ProductList/ProductList.jsx";
import CartContext from "./contexts/CartContext/CartContext.jsx";
import {CartList} from "./components/CartList/CartList.jsx";
import {StorageInspector} from "./components/StorageInspector/StorageInspector.jsx";
import TokenContext from "./contexts/TokenContext/TokenContext.js";


function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [productCart, setProductCart] = useState(JSON.parse(sessionStorage.getItem("cart")) || [])
    const [token, setToken] = useState(() => {
        return document.cookie.replace(/(?:^|.*;\s*)Token\s*=\s*([^;]*).*$|^.*$/, "$1");
    });

    useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(productCart));
    }, [productCart])

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    const onLoginHandler = (form, values) => {
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
        <ThemeContext.Provider value={{theme, setTheme}}>
            <CartContext.Provider value={{productCart, setProductCart}}>
                <Layout className="App">
                    <HeaderPage/>
                    <Flex vertical={true} gap={'25px'} style={{padding: '20px 16px'}}>
                        <Intro/>
                        <TokenContext.Provider value={{token,onLoginHandler, onLogoutHandler}}>
                            <Row gutter={['10px', '10px']}>
                                <Col span={8}><ThemeCard/></Col>
                                <Col span={8}><AuthCard/></Col>
                                <Col span={8}><CartList/></Col>
                                <Col span={16}><ProductList/></Col>
                                <Col span={8}><StorageInspector/></Col>
                            </Row>
                        </TokenContext.Provider>
                    </Flex>

                </Layout>
            </CartContext.Provider>
        </ThemeContext.Provider>
    )
}

export default App
