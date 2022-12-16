import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/actions/users";
import { addUserAction, removeUserAction } from "../store/reducers/usersReducer";
import { increaseCounterAction, decreaseCounterAction } from "../store/reducers/counterReducer"
import bcrypt from 'bcryptjs'

const Lesson10 = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counterValue);
    const lection = useSelector(state => state.counter.lesson.lection);
    const topic = useSelector(state => state.counter.lesson.topic);
    const users = useSelector(state => state.users.users);


    const increase = () => {
        dispatch(increaseCounterAction(10))
    }
    const decrease = () => {
        dispatch(decreaseCounterAction(10))
    }

    const addUser = () => {
        const salt = bcrypt.genSaltSync(20)
        const user = {
            name: `Petya ${salt}`,
            id: salt
        }
        dispatch(addUserAction(user));
    }

    const removeUser = (id) => {
        dispatch(removeUserAction(id));
    }

    return (
        <div>
            <div>
                Lesson: №{lection} - {topic}

                <br />
                Counter: {counter}
                <button onClick={increase}>Increase counter</button>
                <button onClick={decrease}>Decrease counter</button>
            </div>

            <div>
                <button onClick={addUser}>Add user</button>
                <button onClick={() => dispatch(fetchUsers())}>Add users from fakeAPI</button>

                {users.length ?
                    <div>
                        <h3>Users</h3>
                        {users.map(user =>
                            <div id={user.id} key={user.id + bcrypt.genSaltSync(10)} onClick={() => removeUser(user.id)}>{user.name}</div>)}
                    </div>
                    :
                    <div>Нікого немає вдома</div>
                }
            </div>
        </div>
    )
}
export { Lesson10 }