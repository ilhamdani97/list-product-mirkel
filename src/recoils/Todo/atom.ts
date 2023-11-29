import { atom, selector } from "recoil";
import { ListData } from "../../services/types/todo";
import { 
    FILTERED_TODO_LIST_STATE,
    LOADING_LIST,
    TODO_LIST_FILTER_STATE, 
    TODO_LIST_STATE, 
    TODO_LIST_STATS_STATE
} from "../constants";

export const loadingState = atom({
    key: LOADING_LIST,
    default: false
})

export const todoListState = atom({
    key: TODO_LIST_STATE,
    default: [] as ListData[]
});

export const todoListFilterState = atom({
    key: TODO_LIST_FILTER_STATE,
    default: ''
});

export const filteredTodoListState = selector({
    key: FILTERED_TODO_LIST_STATE,
    get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);
        console.log(list)
        return list
    }
});

export const todoListStatsState = selector({
    key: TODO_LIST_STATS_STATE,
    get: ({ get }) => {
        const todoList = get(todoListState);
        const totalList = todoList.length;
        // const totalCompletedTodoList = todoList.filter((item) => item.completed).length;

        return {
            totalList,
            // totalCompletedTodoList
        };
    }
  });