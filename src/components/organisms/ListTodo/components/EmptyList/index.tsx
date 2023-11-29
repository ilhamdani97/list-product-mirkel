import React from "react";
import Empty from "./styles";
import EmptyIcon from '../../../../../assets/images/no-data-icon.png';

const EmptyList = () => {
    return (
        <Empty.Container>
            <Empty.ImageEmpty src={EmptyIcon} />
            <Empty.TextDecs>
                {'Todo List Empty. Add your List !!'}
            </Empty.TextDecs>
        </Empty.Container>
    )
}

export default EmptyList;