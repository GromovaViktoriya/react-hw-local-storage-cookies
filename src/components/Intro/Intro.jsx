import {Typography} from "antd";

export const Intro = () => {
    return (
        <div>
            <Typography.Title level={2} style={{ color: 'var(--color-text)' }}>
                Управление браузерными хранилищами
            </Typography.Title>
            <Typography.Text className='secondary-text'>
                localStorage · sessionStorage · cookie
            </Typography.Text>
        </div>
    )
}