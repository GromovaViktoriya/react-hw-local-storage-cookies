import {useContext} from "react";
import CartContext from "../../contexts/CartContext/CartContext.jsx";
import {Card, Empty, Flex, Popconfirm, Typography} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {CartItem} from "./CartItem/CartItem.jsx";
import {CustomButton} from "../common/CustomButton/CustomButton.jsx";
import {CartListHeader} from "./CartListHeader/CartListHeader.jsx";

export const CartList = () => {
    const {productCart, setProductCart} = useContext(CartContext);
    const sum = productCart.reduce((acc, cur) => acc + (cur.product.price * cur.count), 0);

    const clearCartHandler = () => {
        setProductCart([]);
    }

    return (
        <Card className="card" styles={{
            body: {
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                gap: '12px',
            }
        }}>
            <CartListHeader productCart={productCart}/>

            {productCart.length === 0 &&
                <Flex justify="center" align="center" style={{flex: 1}}>
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={"Добавьте товары в корзину."}/>
                </Flex>}

            {productCart.length > 0 &&
                <>
                    <Flex vertical={true} >
                        {productCart.length && productCart.map((product => {
                            return (
                                <CartItem item={product} setProductCart={setProductCart} key={product.id}/>
                            )
                        }))}
                    </Flex>
                    <Flex justify={'space-between'}>
                        <Typography.Text className='secondary-text'
                                         style={{fontSize: 16, maxWidth: 280, alignSelf: 'center', fontWeight: 'bold'}}>
                            Итого
                        </Typography.Text>
                        <Typography.Text className='secondary-text'
                                         style={{fontSize: 16, maxWidth: 280, alignSelf: 'center', fontWeight: 'bold'}}>
                            {`${sum} тг`}
                        </Typography.Text>
                    </Flex>
                    <Popconfirm
                        title="Очистить корзину"
                        description="Вы уверены, что хотите очистить корзину?"
                        onConfirm={clearCartHandler}
                        okText="Да"
                        cancelText="Нет"
                    >
                        <span>
                    <CustomButton
                        title={<Flex gap={'10px'}><DeleteOutlined/> Очистить корзину</Flex>}
                        className='cart-btn'
                        block={true}
                    />
                        </span>
                        </Popconfirm>
                </>
            }
        </Card>
    )
}