import "./inputsStyle.scss";

const MainInput = ({ type, name, id, labelName, handelChange, flag }) => {
  return (
    <>
      {flag === "file" ? (
        <div className="inputFileContainer">
          <label htmlFor={id}>{labelName}</label>
          <input type={type} name={name} id={id} onChange={handelChange} />
        </div>
      ) : (
        <div className="inputContainer">
          <label htmlFor={id}>{labelName}</label>
          <input type={type} name={name} id={id} onChange={handelChange} />
        </div>
      )}
    </>
  );
};

export default MainInput;
