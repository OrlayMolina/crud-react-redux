import { createSlice } from '@reduxjs/toolkit';

export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UserWithId extends User {
    id: string;
}

const initialState: UserWithId[] = [
    {
        id: "1",
        name: "Peter Doe",
        email: "peter@gmail.com",
        github: "peter"
    },
    {
          id: "2",
          name: "Ana",
          email: "ana@gmail.com",
          github: "ana"
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

    }
});

export default userSlice.reducer;