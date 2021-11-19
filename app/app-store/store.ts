import {
  configureStore,
  createSlice,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";

interface Todo {
  id: number;
  done: boolean;
  text: string;
}

interface TodosSliceState {
  todos: Todo[];
  status: any;
  list: [];
}

const initialState: TodosSliceState = {
  todos: [],
  status: null,
  list: [],
};

export const getPosts = createAsyncThunk("posts/getPosts", async (): Promise<any> => {
  return fetch("https://jsonplaceholder.typicode.com/todos/").then((res) =>
    res.json()
  );
});

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  extraReducers: {
    [getPosts.pending.toString()]: (state, action) => {
      state.status = "loading";
    },
    [getPosts.fulfilled.toString()]: (state, action) => {
        console.log('data', action.payload)
      state.list = action.payload;
      state.status = "success";
    },
    [getPosts.rejected.toString()]: (state, action) => {
      state.status = "failed";
    },
  },
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectTodos = (state: RootState) => state.todos.todos;

export default store;
