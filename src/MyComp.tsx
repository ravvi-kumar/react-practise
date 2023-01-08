import { IMyContext, useMyContext } from "./context/myContext";

function MyComp() {
  const { count, setCount } = useMyContext<IMyContext>();
  console.count("count 1 rendered");
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

export default MyComp;
