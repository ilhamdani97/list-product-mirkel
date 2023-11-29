import React from "react";
import Buttons from "./styles";

interface Props {
    title: string;
    disable?: boolean;
    variant: 'primary' | 'secondary' | 'disable' ,
    mode: 'small' | 'default';
    onClick: () => void
}
const Button = ({
    title,
    disable,
    variant,
    mode,
    onClick
}: Props) => {
    return (
        <Buttons mode={mode} disabled={disable} variant={variant} onClick={onClick}>
            {title}
        </Buttons>
    )
}

export default Button;