import {Card, Flex, Tag, Typography} from "antd";

export const StorageCard = ({icon, storage, tag, resultName, result}) => {
    const rawResult = typeof result === 'object' && result !== null
        ? JSON.stringify(result)
        : String(result || '');

    const maxLength = 22;
    const displayResult = rawResult.length > maxLength
        ? `${rawResult.slice(0, maxLength)}...`
        : rawResult;

    return (
        <Card styles={{body: {padding: '16px'}}} className="cart-item">
            <Flex vertical={true} gap={'10px'}>
                <Flex vertical={true} >
                    <Flex gap={'16px'} align={'center'}>
                        {icon}
                        <Typography.Text  style={{color: 'var(--color-text)',fontSize: 12, fontWeight:'bold'}}>{storage}</Typography.Text>
                        <Tag className={'tag-storage'}>{tag}</Tag>
                    </Flex>
                </Flex>
                <Flex gap={'10px'} justify={'space-between'}>
                    <Flex gap={'10px'}>
                        <Typography.Text className='secondary-text resultName' style={{width:'105px'}}>{resultName}</Typography.Text>
                        <Typography.Text className='secondary-text'>{displayResult}</Typography.Text>
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    )
}