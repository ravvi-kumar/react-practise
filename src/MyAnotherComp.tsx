import { IMyContext, useMyContext } from "./context/myContext";

function MyAnotherComp() {
  const { count, setCount } = useMyContext<IMyContext>();
  console.count("count 2 rendered");
  return (
    <>
      <div>count {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </>
  );
}

export default MyAnotherComp;
