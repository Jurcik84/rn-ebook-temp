import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  done: boolean;
  text: string;
}

interface TodosSliceState {
  todos: Todo[];
}

const initialState: TodosSliceState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    ["addTodo"]: (state: TodosSliceState, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: state.todos.length,
          text: action.payload,
          done: false,
        },
      ];
    },
    ["removeTodo"]: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
    ["replaceTodo"]: (state, action: PayloadAction<{}>) => {},
  },
});

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export const { addTodo, removeTodo, replaceTodo } = todoSlice.actions;

type RootState = ReturnType<typeof store.getState>;

export const selectTodos = (state: RootState) => state.todos.todos;

export default store;
