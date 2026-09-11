import {Typography} from "antd";

export const ProductDescription = ({product}) => {
    return (
        <>
            <Typography.Text className='primary-text'
                             style={{fontSize: 12, maxWidth: 280, alignSelf: 'start', fontWeight: 'bold'}}>
                {product.name}
            </Typography.Text>
            <Typography.Text className='secondary-text'
                             style={{fontSize: 16, maxWidth: 280, alignSelf: 'start', fontWeight: 'bold'}}>
                {`${product.price} тг`}
            </Typography.Text>
        </>
    )
}