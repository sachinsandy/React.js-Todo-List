import React, { useState } from "react";
function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity() {
    setlistData([...listData, activity]);
    console.log(listData);
    setActivity("");
    // setlistData ((listData)=>{
    //     const updatedList =[...listData, activity]
    //     console.log(updatedList)
    //     setActivity('');
    //     return updatedList

    // })
  }
  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i !== id;
    });
    setlistData(updatedListData);
  }
  function removeAllData() {
    setlistData([]);
  }
  return (
    <>
      <div className="container">
        <div className="header">
          <i>TodoList</i>
        </div>
        <input
          className="input-data"
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button className="btn-hand" onClick={addActivity}>
          Add TodoList
        </button>
        <p className="List-heading">Here Your List : </p>
        {listData !== [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className='listData'>{data}</div>

                  
                    <button className="btn-hand-second" onClick={() => removeActivity(i)}>Deleted</button>
                
                </p>
              </>
            );
          })}
        {listData.length >= 1 && (
          <div className="container">
            <button className="btn-deleted" onClick={removeAllData}>
              Deleted All Data
            </button>
          </div>
        )}
      </div>
    </>
  );
}
export default TodoList;
