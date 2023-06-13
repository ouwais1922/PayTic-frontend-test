import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [leftItems, setLeftItems] = useState([
    { id: uuidv4(), text: 'Item 1', value: '' },
    { id: uuidv4(), text: 'Item 2', value: '' },
    { id: uuidv4(), text: 'Item 3', value: '' },
  ]);
  const [rightItems, setRightItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  const handleDragStart = (event, item) => {
    event.dataTransfer.setData('text/plain', JSON.stringify(item));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, zone) => {
    event.preventDefault();
    const data = JSON.parse(event.dataTransfer.getData('text/plain'));
    const updatedItems = [...zone];
    const index = zone.findIndex((item) => item.id === data.id);
    if (index === -1) {
      updatedItems.push(data);
      setRightItems(updatedItems);
    } else {
      updatedItems.splice(index, 1);
      setLeftItems(updatedItems);
    }
  };

  const handleInputChange = (event, itemId) => {
    const { name, value } = event.target;
    const updatedItems = rightItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setRightItems(updatedItems);
  };

  const handleSave = () => {
    const updatedSavedItems = [...savedItems, ...rightItems];
    setSavedItems(updatedSavedItems);
    setRightItems([]);
  };

  return (
    <div className="flex justify-center p-4">
      <div className="flex items-center">
        <div
          className="border border-gray-400 p-4 mr-4"
          onDragOver={(event) => handleDragOver(event)}
          onDrop={(event) => handleDrop(event, leftItems)}
        >
          <h2 className="text-lg font-bold mb-4">Left Drop Zone</h2>
          {leftItems.map((item) => (
            <div
              key={item.id}
              draggable
              className="bg-gray-100 p-2 mb-2"
              onDragStart={(event) => handleDragStart(event, item)}
            >
              {item.text}
            </div>
          ))}
        </div>
        <div
          className="border border-gray-400 p-4"
          onDragOver={(event) => handleDragOver(event)}
          onDrop={(event) => handleDrop(event, rightItems)}
        >
          <h2 className="text-lg font-bold mb-4">Right Drop Zone</h2>
          {rightItems.map((item) => (
            <div key={item.id} className="bg-gray-100 p-2 mb-2">
              <div className="mb-2">
                <label className="mr-2">{item.text}:</label>
                <input
                  type="text"
                  name="value"
                  value={item.value}
                  onChange={(event) => handleInputChange(event, item.id)}
                  className="border border-gray-300 p-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="ml-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSave}
        >
          Save
        </button>
        <table className="mt-4">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Text</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {savedItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.text}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
