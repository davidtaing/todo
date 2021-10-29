import React, { SyntheticEvent, useState } from "react";

const Todo = ({ title, completed }: any) => {
  const [titleText, setTitleText] = useState(title);
  const [checked, setChecked] = useState(completed);
  const onSubmitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
  };
  const onTextboxChange = (event: SyntheticEvent) => {
    setTitleText((event.target as HTMLTextAreaElement).value);
  };
  const onCheckHandler = (event: SyntheticEvent) => {
    setChecked(!checked);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" value={titleText} onChange={onTextboxChange} />
        <input type="checkbox" checked={checked} onChange={onCheckHandler} />
      </form>
    </div>
  );
};

export default Todo;
