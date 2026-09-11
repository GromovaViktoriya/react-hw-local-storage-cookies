import {Card, Flex, Image, Typography} from "antd";
import {CustomButton} from "../../common/CustomButton/CustomButton.jsx";
import {useContext} from "react";
import CartContext from "../../../contexts/CartContext/CartContext.jsx";


export const ProductCard = ({product}) => {
    const {productCart, setProductCart} = useContext(CartContext);

    const onClickHandler = () => {
        if (productCart.find(el => el.id === product.id)) {
            setProductCart(prev => prev.map((el => el.id === product.id ? {...el, count: el.count + 1} : el)))
        } else {
            setProductCart(prev => [...prev, {id: product.id, product, count: 1}])
        }
    }

    return (
        <Card className="card" styles={{body: {padding: '16px'}}}>
            <Flex vertical={true} justify="center" gap={'12px'} align={'center'}>
                <Flex justify={'center'} align={'center'} style={{width: 100, height: 100}}>
                    <Image
                        alt={product.name}
                        src={product.image}
                        width={50}
                    />
                </Flex>
                <Typography.Text className='primary-text'
                                 style={{fontSize: 12, maxWidth: 280, alignSelf: 'center', fontWeight: 'bold'}}>
                    {product.name}
                </Typography.Text>
                <Typography.Text className='secondary-text'
                                 style={{fontSize: 16, maxWidth: 280, alignSelf: 'center', fontWeight: 'bold'}}>
                    {`${product.price} тг`}
                </Typography.Text>
                <CustomButton
                    className={'btn-primary'}
                    title={'Добавить'}
                    width={'100%'}
                    block={true}
                    onClick={onClickHandler}
                />
            </Flex>
        </Card>
    )
}