import React from "react";
import Form from "./styles";
import { Button, Input } from "../../atoms";

interface Props {
    value: string;
    disable: boolean;
    disableGenerate: boolean;
    setValue: (e: string) => void;
    onSubmit: ()=> void;
    onClickGenerate: () => void;
}
const FormAddList = ({
    value,
    disable,
    disableGenerate,
    setValue,
    onSubmit,
    onClickGenerate
}: Props) => {
    return (
        <Form.Container>
            <Input 
                variant={'default'}
                placeholder={'Insert Todo List what you wont'}
                value={value}
                setValue={(e) => setValue(e)}
            />
            <Button
                mode={'default'}
                disable={disable}
                title={'Add List'}
                variant={disable ? 'disable' : 'primary'}
                onClick={onSubmit}
            />
            {/* <Button
                mode={'default'}
                disable={disableGenerate}
                title={'Generate List'}
                variant={disableGenerate ? 'disable' : 'primary'}
                onClick={onClickGenerate}
            /> */}
        </Form.Container>
    )
}

export default FormAddList;