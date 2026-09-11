import {Flex, Tag, Typography} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";

export const CartListHeader = ({productCart})=>{
    return (
        <Flex vertical={true} justify="center" gap={'12px'}>
            <Flex justify={'space-between'}>
                <Flex gap={'12px'}>
                    <ShoppingCartOutlined style={{fontSize: '20px', color: '#1979FD'}}/>
                    <Typography.Title level={5}
                                      style={{color: 'var(--color-text)', margin: 0}}>
                        Корзина
                    </Typography.Title>
                </Flex>
                {productCart.length > 0 && <Tag className='tag-theme'>{`${productCart.length} товара`}</Tag>}
            </Flex>
        </Flex>
    )
}