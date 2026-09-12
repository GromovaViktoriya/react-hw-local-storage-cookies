import {Card, Col, Flex, Row} from "antd";
import {CardDescription} from "../common/CardDescription/CardDescription.jsx";
import {DropboxOutlined} from "@ant-design/icons";
import {products} from "../../data/products.js";
import {ProductCard} from "./ProductCard/ProductCard.jsx";

export const ProductList = () => {


    return (
        <Card className="card" styles={{body: {padding: '16px'}}}>
            <Flex vertical={true} gap={'12px'}>
                <Flex vertical={true} justify="center" gap={'12px'}>
                    <CardDescription title={'Товары'}
                                     alignSelf={'start'}
                                     maxWidth={'100%'}
                                     icon={<DropboxOutlined style={{fontSize: '20px', color: '#1979FD'}}/>}
                                     descriptiom={`Добавляйте товары в корзину. Они сохраняются в sessionStorage.`}
                    />
                </Flex>
                <Row gutter={['10px', '10px']}>
                    {products.map(product => {
                        return <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
                            <ProductCard product={product}/>
                        </Col>
                    })}
                </Row>
            </Flex>
        </Card>
    )
}