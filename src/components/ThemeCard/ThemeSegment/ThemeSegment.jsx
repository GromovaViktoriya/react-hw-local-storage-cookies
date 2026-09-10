import {ConfigProvider, Segmented} from "antd";
import {MoonOutlined, SunOutlined} from "@ant-design/icons";
import {useContext} from "react";
import ThemeContext from "../../../contexts/ThemeContext/ThemeContext.js";

export const ThemeSegment = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const onChangeHandler = (value) => {
        setTheme(value);
    }

    return (
        <ConfigProvider
            theme={{
                components: {
                    Segmented: {
                        trackBg: 'var(--color-segment-bg)',
                        itemColor: 'var(--color-text-segment)',
                        itemSelectedBg: 'var(--color-segment-bg-selected)',
                        itemSelectedColor: '#1979FD',
                        itemHoverColor: '#1979FD',
                        trackPadding: 0,
                    },
                },
            }}
        >
            <Segmented
                block={true}
                className="custom-segmented"
                onChange={onChangeHandler}
                value={theme}
                options={[
                    {label: 'Light', value: 'light', icon: <SunOutlined/>},
                    {label: 'Dark', value: 'dark', icon: <MoonOutlined/>},
                ]}
            />
        </ConfigProvider>
    )
}