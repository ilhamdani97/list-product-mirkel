import React from "react";
import Todo from "../styles";

const Loading = () => {
    return (
        <Todo.Card>
            <Todo.Content>
                <Todo.LoadingIcon/>
                <Todo.LoadingText/>
            </Todo.Content>
            <Todo.Action>
                <Todo.LoadingIcon/>
                <Todo.LoadingIcon/>
            </Todo.Action>
        </Todo.Card>
    )
}

export default Loading;