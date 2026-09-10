import {Card, Divider, Flex} from "antd";
import {ThemeSegment} from "./ThemeSegment/ThemeSegment.jsx";
import {useContext} from "react";
import ThemeContext from "../../contexts/ThemeContext/ThemeContext.js";
import {TagText} from "../common/TagText/TagText.jsx";
import {CardDescription} from "../common/CardDescription/CardDescription.jsx";
import {FormatPainterOutlined} from "@ant-design/icons";


export const ThemeCard = () => {
    const {theme} = useContext(ThemeContext);


    return (
        <Card className="card" styles={{body: {padding: '16px'}}}>
            <Flex vertical={true} justify="center" gap={'12px'}>
                <CardDescription title={'Тема оформления'}
                                 icon={<FormatPainterOutlined style={{fontSize: '20px', color: '#1979FD'}}/>}
                                 descriptiom={`Выбранная тема сохраняется в loсalStorage и 
                                 восстанавливается после перезагрузки страницы`}/>
                <ThemeSegment/>
            </Flex>
            <Divider/>
            <Flex vertical={true} gap={'16px'}>
                <TagText tag={theme} className={'tag-theme'} title={'Текущая тема'}/>
                <TagText tag={'localStorage'} className={'tag-storage'} title={'Хранилище'}/>
            </Flex>
        </Card>
    )
}