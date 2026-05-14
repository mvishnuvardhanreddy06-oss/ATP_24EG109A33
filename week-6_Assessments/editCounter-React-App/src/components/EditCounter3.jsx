import { useContext } from "react";
import { counterContextObj } from "../contexts/ContextProvider";

function EditCounter3() {
  const { count, increment, decrement } = useContext(counterContextObj);

  return (
    <div>
      <h2>EditCounter3</h2>
      <h3>Count: {count}</h3>

      <div className="border border-amber-200 bg-amber-500">
        <button onClick={increment} className="bg-violet-500 text-white border-2 m-6 px-4">
          +
        </button>

        <button onClick={decrement} className="bg-violet-500 text-white border-2 m-6 px-4">
          -
        </button>
      </div>
    </div>
  );
}

export default EditCounter3;