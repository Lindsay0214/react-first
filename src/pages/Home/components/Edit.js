// import List from './List'
import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingStatus }) => {
  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  console.log(note, date, time);

  function addItem() {
    submittingStatus.current = true;
    add(function (prevData) {
      return [
        {
          id: v4(), // 讓 key 有個獨立 id
          note,
          date,
          time,
        },
        ...prevData, // 這個放後面，新增留言就會長在上面
      ];
    });
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>日期</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
