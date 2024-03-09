import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incByVal } from "../redux/Features/Counter/counterSlice";

const Counter = () => {
    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <div className='space-x-10 text-3xl p-20'>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <span className="bg-violet-300 p-10">{count}</span>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incByVal(5))}>Increment by 5</button>
        </div>
    );
};

export default Counter;