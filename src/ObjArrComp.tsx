import { ChangeEvent, useState } from "react";
import { IObjArrStore, useObjArrStore } from "./store";

const ObjArrComp = () => {
  const [obj, setObj] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    bol: true,
  });
  const objArr = useObjArrStore((state: IObjArrStore) => state.objArr);
  const addObj = useObjArrStore((state: IObjArrStore) => state.addObj);
  const AddUser = () => {
    addObj(obj);
    setObj({ firstName: "", lastName: "", age: 0, bol: true });
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setObj((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <h4>{JSON.stringify(objArr)}</h4>
      <label>First Name</label>
      <input
        value={obj.firstName}
        name="firstName"
        onChange={(e) => onChangeHandler(e)}
      />
      <br />
      <label>Last Name</label>
      <input
        value={obj.lastName}
        name="lastName"
        onChange={(e) => onChangeHandler(e)}
      />
      <br />
      <label>age</label>
      <input
        value={obj.age}
        name="age"
        onChange={(e) => onChangeHandler(e)}
        type="number"
      />
      <br />
      <button onClick={AddUser}>Add User</button>
    </>
  );
};
export default ObjArrComp;
