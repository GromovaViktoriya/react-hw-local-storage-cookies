import {Flex, Form, Input, Typography} from "antd";
import {CustomButton} from "../../common/CustomButton/CustomButton.jsx";

export const InputToken = () => {
    return (
        <Flex vertical={true} align={'start'} gap={'6px'}>
            <Typography.Text className='secondary-text'>Токен</Typography.Text>
            <Flex gap={'10px'}>
                <Form.Item
                    name={'token'}
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите токен'
                        },
                        {
                            min: 32,
                            message: 'Токен должен быть не менее 32 символов'
                        },
                        {
                            pattern: /^\S+$/,
                            message: 'Токен не должен содержать пробелов'
                        },
                        {
                            pattern: /^[a-zA-Z0-9_-]+$/,
                            message: 'Токен содержит недопустимые символы (только латиница и цифры)'
                        },

                    ]}>
                    <Input.Password
                        placeholder="eyJhbGciOiJIUzI1NilsInR5cCl6..."
                        allowClear={true}
                        className={'custom-input'}
                    />
                </Form.Item>
                <Form.Item>
                    <CustomButton className={'form-btn btn-primary'} title={'Войти'} htmlType="submit"/>
                </Form.Item>
            </Flex>
        </Flex>
    )
}