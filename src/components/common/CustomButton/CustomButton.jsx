import {Button} from "antd";

export const CustomButton = ({className, title, onClick = null, htmlType = "button"})=>{
    return (
        <Button className={className} htmlType={htmlType} onClick={onClick}>{title}</Button>
    )
}