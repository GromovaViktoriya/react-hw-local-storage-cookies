import {Flex, Tag, Typography} from "antd";

export const TagText = ({title, tag, className})=>{
    return (
        <Flex vertical={true} align={'start'} gap={'6px'}>
            <Typography.Text className='secondary-text'>{title}</Typography.Text>
            <Tag className={className}>{tag}</Tag>
        </Flex>
    )
}