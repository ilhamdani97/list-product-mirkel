import React, { useState, useEffect } from "react";
import TodoLists from "./styles";
import { Button, FormAddList, ListTodo } from "../../components";
import Logo from '../../assets/images/Logo.png';
import { useRecoilState, useRecoilValue } from "recoil";
import { filteredTodoListState, loadingState, todoListFilterState, todoListState, todoListStatsState } from "../../recoils/Todo/atom";
import { getList } from "../../services/todo";
import ModalAssesment from "./Components/ModalAssesment";
import { ListData } from "../../services/types/todo";

const Dashboard = () => {
    interface PropsEdit {
        index: number;
        value: string;
    }
    interface PropsAssigment {
        showModal: boolean;
        assigment: number;
    }
    const [todoName, setTodoName] = useState<string>('');
    const todoListData = useRecoilValue(filteredTodoListState);
    const [_, setLoading] = useRecoilState(loadingState);

    const [todoList, setTodoList] = useRecoilState(todoListState);
    const { totalList } = useRecoilValue(todoListStatsState);
    const [search, setSearch] = useRecoilState(todoListFilterState);
    const [dataEdit, setDataEdit] = useState<PropsEdit | null>(null);
    const [assigment, setAssigment] = useState<PropsAssigment>({
        showModal: false,
        assigment: 1
    })

    const [dataDetail, setDataDetail] = useState<ListData | null>(null);

    const handleAddList = () => {
        const newList = [...todoList, {
            todo: todoName,
            completed: false
        }]

        // setTodoList(newList);
        setTodoName("");
    };

    const handleRemoveList = (index: number) => {
        setLoading(true);

        let dataList = [...todoList];
        dataList.splice(index, 1);
        setTodoList(dataList);

        setTimeout(() => {
            setLoading(false);
        }, 800);
    }

    const handleCompleteList = (index: number) => {
        var dataList = [...todoList];
        const completeList = dataList.map((data, i) => {
            if (i === index) {
            //   return {...data, completed: !data.completed};
            }
          
            return data;
          });
        setTodoList(completeList);
    }

    const handleEditList = () => {
        setLoading(true);

        const editDatas = dataEdit;
        if(editDatas) {
            var dataList = [...todoList];
            const completeList = dataList.map((data, i) => {
                if (i === editDatas.index) {
                return {...data, todo: editDatas.value};
                }
            
                return data;
            });
            setTodoList(completeList);
        }

        setTimeout(() => {
            setLoading(false);
        }, 800)
    }

    const getDataList = async () => {
        setLoading(true);
        const size = '5';
        const response = await getList(size) as ListData[] ;
        setTodoList(response);
        setLoading(false);

    }

    const handleDetail = (index: number) => {
        setDataDetail(todoListData[index])
    }
    useEffect(() => {
        getDataList()
    },[])
 
    return (
        <TodoLists.Container>
            <TodoLists.Header>
                {/* <TodoLists.ImageHeader src={Logo}/> */}
            </TodoLists.Header>
            <TodoLists.Content>
                <FormAddList
                    onClickGenerate={() => {}}
                    disableGenerate={todoListData.length > 0}
                    disable={!todoName}
                    value={todoName}
                    setValue={(value: string) => setTodoName(value)}
                    onSubmit={handleAddList}
                />
                
                <ListTodo 
                    searchValue={search}
                    setSearch={(e: string)=> setSearch(e)}
                    totalData={totalList}
                    data={todoListData}
                    setEdit={(e:string, index: number) => setDataEdit({
                        index: index,
                        value: e
                    })}
                    onClickEdit={handleEditList}
                    onSeleceted={(index: number) => handleCompleteList(index)}
                    onDeleted={(index: number) => handleRemoveList(index)}
                    onClickCard={(index: number) => handleDetail(index)}
                />
            </TodoLists.Content>
            <TodoLists.Footer>
                {/* <Button 
                    title={'ASSESMENTS 1'} 
                    mode={'default'} 
                    onClick={() => 
                        setAssigment({
                        assigment: 1,
                        showModal: true
                    })} 
                variant={'primary'} />
                <Button 
                    title={'ASSESMENTS 2'} 
                    mode={'default'} 
                    onClick={() => 
                        setAssigment({
                            assigment: 2,
                            showModal: true
                        })
                    } 
                variant={'primary'} />
                <Button 
                    title={'ASSESMENTS 3'} 
                    mode={'default'} 
                    onClick={() => 
                        setAssigment({
                            assigment: 3,
                            showModal: true
                        })
                    } 
                variant={'primary'} /> */}
            </TodoLists.Footer>

            <ModalAssesment 
                showModal={dataDetail !== null}
                data={dataDetail}
                onClose={() => setDataDetail(null)}
            />
        </TodoLists.Container>
    )
}

export default Dashboard;