import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type UserId = string;
export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UserWithId extends User {
    id: UserId;
}

const initialState: UserWithId[] = [
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

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload;
            return state.filter((user) => user.id !== id);
        }
    }
});

export default userSlice.reducer;

export const { deleteUserById } = userSlice.actions;