import {Flex, Input, Typography} from "antd";
import {CustomButton} from "../../common/CustomButton/CustomButton.jsx";

export const CurrentToken = ({token, onLogout}) => {
    return (
        <Flex vertical={true} className={'current-token'}>
            <Typography.Text className="secondary-text">
                Текущий токен
            </Typography.Text>
            <Flex gap={'10px'}>
                {token === '' &&
                    <Typography.Text
                        className='secondary-text'
                        style={{fontSize: 12, maxWidth: 280, alignSelf: 'center'}}
                    >
                        Необходимо авторизоваться.
                    </Typography.Text>}
                {token !== ''
                    && <>
                        <Input.Password
                            name="current-token"
                            value={token}
                            className={'custom-input result-input'}
                            readOnly={true}
                            visibilityToggle={token !== ''}
                        />
                        <CustomButton className={'form-btn btn-secondary'} title={'Выйти'} onClick={onLogout}/>
                    </>
                }
            </Flex>
        </Flex>

    )
}