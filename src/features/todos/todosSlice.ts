import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
    id: string,
    title: string,
    done: boolean
}

const initialState: Todo[] = [
    {
        id: "1",
        title: "Тестовое задание",
        done: false
    },
]

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        todoAdded: {
            reducer(state, action: PayloadAction<Todo>) {
                state.push(action.payload);
            },
            prepare(title): {payload: Todo} {
                return {
                    payload: {
                        id: nanoid(),
                        title, 
                        done: false
                    }
                }
            }
        }
    }
})

export const selectAllTodos = (state: { todos: Todo[] }) => state.todos;

export const {todoAdded} = todosSlice.actions;

export default todosSlice.reducer;