import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DragDrop from './DragDrop';
const Body = () => {
   
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4  rounded-lg dark:border-gray-700">
                <DragDrop></DragDrop>
            </div>
        </div>
    )
}

export default Body