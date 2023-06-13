import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const DragDrop = () => {

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
        console.log(savedItems);
        setRightItems([]);
    };

    return (
        <>
            <div className="grid mt-20 grid-cols-2 gap-2 mb-4">
                <div className="flex items-center grid-cols-2 gap-2 justify-center rounded bg-gray-50 h-96 dark:bg-gray-800"
                    onDragOver={(event) => handleDragOver(event)}
                    onDrop={(event) => handleDrop(event, leftItems)}
                >
                    {leftItems.map((item) => {
                        return <div className="bg-gradient-to-r items-center from-green-500 rounded w-20 h-10"
                            key={item.id}
                            draggable
                            onDragStart={(event) => handleDragStart(event, item)}
                        >
                            <p className='content-center mt-2 ml-3 font-bold'>{item.text}</p>
                        </div>
                    })}
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-96 dark:bg-gray-800"
                    onDragOver={(event) => handleDragOver(event)}
                    onDrop={(event) => handleDrop(event, rightItems)}
                >
                    {rightItems.map((item) => {
                        return <div className="bg-gradient-to-r ml-5 items-center from-green-500 rounded w-20 h-10"
                            key={item.id}

                        >
                            <div className="mb-2 m">
                                <label className="ml-2">{item.text}:</label>
                                <input
                                    type="text"
                                    name="value"
                                    value={item.value}
                                    onChange={(event) => handleInputChange(event, item.id)}
                                    className="border rounded border-gray-300 p-1 ml-2"
                                />
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-4 mt-10">
                <div className="flex items-center justify-center rounded">
                    <button className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full"
                        onClick={handleSave}>
                        Button
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 mt-10">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Unique Id
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Value
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                savedItems.map((item) => {
                                    (
                                        <tr key={item.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item.id}
                                            </th>
                                            <td class="px-6 py-4">
                                                {item.value}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default DragDrop