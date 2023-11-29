import React, { useState } from "react";
import List from "./styles";
import { ListData } from "../../../services/types/todo";
import { Input } from "../../atoms";
import { useRecoilValue } from "recoil";
import { loadingState } from "../../../recoils/Todo/atom";
import LoadingList from "./components/LoadingList";
import EmptyList from "./components/EmptyList";
import CardList from "../../molecules/CardList";

interface Props {
    data: ListData[];
    totalData: number;
    onSeleceted: (index: number) => void;
    onDeleted: (index: number) => void;
    searchValue: string;
    setSearch: (e: string) => void;
    setEdit: (e: string, index: number) => void;
    onClickEdit: () => void;
    onClickCard: (index: number) => void;
}
const ListTodo = ({
    data,
    totalData,
    onSeleceted,
    onDeleted,
    searchValue,
    setSearch,
    setEdit,
    onClickEdit,
    onClickCard
}: Props) => {
    const [indexEdit, setIndexEdit] = useState<number | null>(null);
    const loading = useRecoilValue(loadingState);

    return (
        <List.Container>
            {loading ? (
                <LoadingList/>
            ): data.length === 0 ? (
                <EmptyList/>
            ) : (
                <>
                    {data.map((data, index) => (
                        <CardList
                            onActionEdit={() => setIndexEdit(index)}
                            key={index}
                            title={data.title}
                            image={data.image}
                            desc={data.description}
                            price={data.price}
                            onDelete={() => {
                                onDeleted(index);
                                setIndexEdit(null);
                            }}
                            onClickCard={() => onClickCard(index)}
                        />
                    ))}
                </>
            ) }
            
        </List.Container>
    )
}

export default ListTodo