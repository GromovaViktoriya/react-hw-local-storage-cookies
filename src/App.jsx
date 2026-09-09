import {HeaderPage} from "./components/Header/HeaderPage.jsx";
import {useEffect, useState} from "react";
import {Layout} from "antd";
import {Intro} from "./components/Intro/Intro.jsx";


function App() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    return (
        <Layout className="App">
            <HeaderPage theme={theme} setTheme={setTheme}/>
            <Intro/>
        </Layout>
    )
}

export default App
