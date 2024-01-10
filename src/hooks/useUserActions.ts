import { useAppDispatch } from "../hooks/store";
  import { addNewUser, deleteUserById, UserId } from "../store/users/slice";

export const useUserActions = () => {
    const dispatch = useAppDispatch();

    const addUser = ({name, email, github}: {name: string, email: string, github: string}) => {
      dispatch(addNewUser({name, email, github}));
    }

    const removeUser = (id: UserId) => {
      dispatch(deleteUserById(id));
    }

    return {addUser, removeUser}
}

