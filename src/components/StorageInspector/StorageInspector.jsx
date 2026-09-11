import {Card, Flex, Typography} from "antd";
import {BookOutlined, DatabaseTwoTone} from "@ant-design/icons";
import {StorageCard} from "./StorageCard/StorageCard.jsx";
import {useContext} from "react";
import ThemeContext from "../../contexts/ThemeContext/ThemeContext.js";
import CartContext from "../../contexts/CartContext/CartContext.jsx";
import TokenContext from "../../contexts/TokenContext/TokenContext.js";

export const StorageInspector = () => {
    const {theme} = useContext(ThemeContext);
    const {productCart} = useContext(CartContext);
    const {token} = useContext(TokenContext);


    return (
        <Card className="card" styles={{body: {padding: '16px'}}}>
            <Flex gap={'10px'} vertical={true}>
                <Flex gap={'12px'}>
                    <DatabaseTwoTone style={{fontSize: '20px', color: '#1979FD'}}/>
                    <Typography.Title level={5}
                                      style={{color: 'var(--color-text)', margin: 0}}>
                        Содержимое хранилищ
                    </Typography.Title>
                </Flex>
                <StorageCard icon={<BookOutlined style={{fontSize: 16, color: 'var(--color-text)'}}/>}
                             storage={'localStorage'}
                             tag={'Постоянное'}
                             resultName={'theme'}
                             result={theme}/>
                <StorageCard icon={<BookOutlined style={{fontSize: 16, color: 'var(--color-text)'}}/>}
                             storage={'sessionStorage'} tag={'Сессия'}
                             resultName={'cart'}
                             result={productCart}/>
                <StorageCard icon={<BookOutlined style={{fontSize: 16, color: 'var(--color-text)'}}/>}
                             storage={'cookie'} tag={'Cookie'}
                             resultName={'token'}
                             result={token?`${'•'.repeat(token.length)}`:'пусто'}/>
            </Flex>
        </Card>
    )
}