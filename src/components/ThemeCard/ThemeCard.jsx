import {Card, Divider, Flex, Tag, Typography} from "antd";
import {FormatPainterOutlined} from "@ant-design/icons";
import {ThemeSegment} from "./ThemeSegment/ThemeSegment.jsx";
import {useContext} from "react";
import ThemeContext from "../../contexts/ThemeContext/ThemeContext.js";


export const ThemeCard = () => {
    const {theme} = useContext(ThemeContext);


    return (
        <Card className="card" styles={{body: {padding: '16px'}}}>
            <Flex vertical={true} justify="center" gap={'16px'}>
                <Flex gap={'12px'}>
                    <FormatPainterOutlined style={{fontSize: '20px', color: '#1979FD'}}/>
                    <Typography.Title level={5} style={{color: 'var(--color-text)', margin: 0}}>Тема
                        оформления</Typography.Title>
                </Flex>
                <Typography.Text className='secondary-text' style={{fontSize: 12, maxWidth: 280, alignSelf: 'center'}}>
                    Выбранная тема сохраняется в loсalStorage и восстанавливается после перезагрузки страницы.
                </Typography.Text>
                <ThemeSegment/>
            </Flex>
            <Divider/>
            <Flex vertical={true} align={'start'}>
                <Typography.Text className='secondary-text'>Текущая тема</Typography.Text>
                <Tag className="tag-theme">{theme}</Tag>
            </Flex>
            <Flex vertical={true} align={'start'}>
                <Typography.Text className='secondary-text'>Хранилище</Typography.Text>
                <Tag className="tag-storage">localStorage</Tag>
            </Flex>
        </Card>
    )
}