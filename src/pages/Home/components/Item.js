const Item = ({ id, note, date, time, deleteData, submittingStatus }) => {
  function deleteItem() {
    submittingStatus.current = true;
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="item">
      <div className="content">
        <p className="content__word">{note}</p>
        <p>{`${date} ${time}`}</p>
        <button onClick={deleteItem} className="remove">
          刪除
        </button>
      </div>
    </div>
  );
};

export default Item;
