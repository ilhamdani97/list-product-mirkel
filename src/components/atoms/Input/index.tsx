import React from "react";
import Inputs from "./styles";

interface Props {
    placeholder: string;
    value: string;
    setValue: (e: string) => void;
    variant: 'small' | 'default';
}

const Input = ({
    placeholder,
    value,
    setValue,
    variant
}:Props) => {
    return (
        <Inputs
            variant={variant}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

export default Input;