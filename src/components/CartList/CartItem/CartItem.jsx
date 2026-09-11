import {Card, Flex, Image, Popconfirm, Typography} from "antd";
import {ProductDescription} from "../../common/ProductDescription/ProductDescription.jsx";
import {CustomButton} from "../../common/CustomButton/CustomButton.jsx";
import {DeleteOutlined} from "@ant-design/icons";

export const CartItem = ({item, setProductCart}) => {
    const subtractValueHandler = () => {
        setProductCart(prev => prev.map(el => el.id === item.id ? {...el, count: Math.max(1, el.count - 1)} : el));
    }
    const addValueHandler = () => {
        setProductCart(prev => prev.map(el => el.id === item.id ? {...el, count: el.count + 1} : el));
    }
    const removeItemHandler = () => {
        setProductCart(prev => prev.filter(el => el.id !== item.id));
    }

    return (
        <Card className="cart-item" styles={
            {body: {padding: '5px'}}}>
            <Flex justify="space-between">
                <Flex gap={'10px'}>
                    <div className='cart-item-img-wrapper'>
                        <Image alt={item.product.name} src={item.product.image}/>
                    </div>
                    <Flex vertical={true} justify={'center'}>
                        <ProductDescription product={item.product}/>
                    </Flex>
                </Flex>
                <Flex gap={'10px'} align={'center'}>
                    <Flex align={'center'}>
                        <CustomButton className='input-btn input-btn-click' title='-' onClick={subtractValueHandler}/>
                        <Typography.Text className='input-btn'>{item.count}</Typography.Text>
                        <CustomButton className='input-btn input-btn-click' title='+' onClick={addValueHandler}/>
                    </Flex>
                    <Popconfirm
                        title="Удалить товар"
                        description="Вы уверены, что хотите удалить товар?"
                        onConfirm={removeItemHandler}
                        okText="Да"
                        cancelText="Нет"
                    >
                        <span>
                            <CustomButton className='bucket-btn' title={<DeleteOutlined/>}/>
                        </span>
                    </Popconfirm>
                </Flex>
            </Flex>
        </Card>
    )
}