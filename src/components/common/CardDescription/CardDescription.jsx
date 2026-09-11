import {Flex, Typography} from "antd";

export const CardDescription = ({title, descriptiom, icon, alignSelf='center', maxWidth=280}) => {
    return (
        <>
            <Flex gap={'12px'}>
                {icon}
                <Typography.Title level={5} style={{color: 'var(--color-text)', margin: 0}}>{title}</Typography.Title>
            </Flex>
            <Typography.Text className='secondary-text' style={{fontSize: 12, maxWidth: maxWidth, alignSelf: alignSelf}}>
                {descriptiom}
            </Typography.Text>
        </>
    )
}