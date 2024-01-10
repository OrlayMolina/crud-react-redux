import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const DEFAULT_STATE = [
    {
        id: "1",
        name: "Yan Gomez",
        email: "yan@gmail.com",
        github: "yanlizz"
    },
    {
          id: "2",
          name: "Orlay",
          email: "orlay@gmail.com",
          github: "orlaymolina"
    },
    {
          id: "3",
          name: "John",
          email: "john@gmail.com",
          github: "john"
    }
];
 
export type UserId = string;
export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UserWithId extends User {
    id: UserId;
}

const initialState: UserWithId[] = (( ) => {
    const persistanceState = localStorage.getItem("__redux__state__");
    if(persistanceState) return JSON.parse(persistanceState).users;
    return DEFAULT_STATE;
})();

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addNewUser: (state, action : PayloadAction<User>) => {
            const id = crypto.randomUUID();
            state.push({id, ...action.payload});
        },
        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload;
            return state.filter((user) => user.id !== id);
        },
        rollbackUser: (state, action: PayloadAction<UserWithId>) => {
            const isUserAlreadyDefined = state.some(user => user.id === action.payload.id);
            if(!isUserAlreadyDefined) state.push(action.payload);
        }
    }
});

export default userSlice.reducer;

export const { addNewUser, deleteUserById, rollbackUser } = userSlice.actions;