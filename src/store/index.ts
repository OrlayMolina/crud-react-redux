import { configureStore, type Middleware } from "@reduxjs/toolkit";
import usersReducer, { rollbackUser} from './users/slice';
import { toast } from "sonner";

const persistanceLocalStorageMiddleware: Middleware = store => next => action => {
    next(action);
    localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

const syncWithDatabaseMiddleware: Middleware = store => next => action => {
    const { type, payload }= action;
    const previousState = store.getState();
    

    next(action);

    if(type === "users/addNewUser"){
        const userIdRemove = payload;
        const userToRemove = previousState.users.find(user => user.id === userIdRemove)
        
        fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
            method: "DELETE"
        })
            .then(res => {
            if (res.ok) toast.success('User deleted successfully');
            throw new Error("Something went wrong");
            })
            .catch(err => {
                toast.error('Someting went wrong');
                if(userToRemove) store.dispatch(rollbackUser(userToRemove));
                console.log(err);
            });
    }
}

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;