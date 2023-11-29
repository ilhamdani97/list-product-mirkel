import React from "react";
import Radio from "./styles";
import IconCheck from '../../../assets/images/check-icon.png'

interface Props {
    isActive: boolean;
    onClick: ()=> void;
}
const RadioButton = ({
    isActive,
    onClick
}: Props) => {
    return (
        <Radio.Container active={isActive} onClick={onClick}>
            {isActive && 
                <Radio.ImageCheck src={IconCheck}/>
            }
        </Radio.Container>
    )
}

export default RadioButton