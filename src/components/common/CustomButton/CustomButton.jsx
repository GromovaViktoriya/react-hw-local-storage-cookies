import {Button} from "antd";

export const CustomButton = ({className, title, onClick = null, htmlType = "button", block = false}) => {
    return (
        <Button className={className} htmlType={htmlType} onClick={onClick} block={block}>{title}</Button>
    )
}