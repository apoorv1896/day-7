import React, { useState } from "react";

export default function Comp() {
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState("");
  const [items, setItems] = useState([]);

  function inputHandler(event) {
    if (event.target.name === "subject") {
      setSubject(event.target.value);
    } else if (event.target.name === "hours") {
      setHours(event.target.value);
    }
  }

  function clickhandle() {
    if (subject && hours) {
      // Add the item to the list
      setItems([...items, { subject, hours }]);
      
      // Clear the input fields
      setSubject("");
      setHours("");
    }
  }

  function handleIncrease(index) {
    const updatedItems = [...items];
    updatedItems[index].hours++;
    setItems(updatedItems);
  }

  function handleDecrease(index) {
    const updatedItems = [...items];
    if (updatedItems[index].hours > 0) {
      updatedItems[index].hours--;
    }
    setItems(updatedItems);
  }

  return (
    <>
      <div className="h-screen w-full  flex justify-center items-center flex-col">
        <div className="p-10 rounded-md">
          <h1>Geekster Education Planner</h1>
          <div className="mt-5">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={subject}
              onChange={inputHandler}
              className="border-2 rounded-md mr-2 p-2"
            />
            <input
              type="number"
              name="hours"
              placeholder="Hours"
              value={hours}
              onChange={inputHandler}
              className="border-2 rounded-md w-20 mr-2 p-2"
            />
            <button
              className="bg-blue-600 px-3 rounded-md text-white p-2"
              onClick={clickhandle}
            >
              Add
            </button>
          </div>
        </div>
        <div className="mt-5">
          <ul>
            {items.map((item, index) => (
              <li className="flex p-2" key={index}>
                {item.subject} - {item.hours} hours
                <div
                  className="px-2 bg-green-500 text-white ml-2 rounded-md cursor-pointer"
                  onClick={() => handleIncrease(index)}
                >
                  +
                </div>
                <div
                  className="ml-2 px-2 text-white rounded-md bg-red-500 cursor-pointer"
                  onClick={() => handleDecrease(index)}
                >
                  -
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}