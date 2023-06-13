import React from 'react'

const Body = () => {
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4  rounded-lg dark:border-gray-700">
                <div className="grid grid-cols-2 gap-4 ml-0 mb-10">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">PayTic - Frontend test</p>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="flex items-center justify-center rounded bg-gray-50 h-96 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-96 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-1 mb-4">
                    <div className="flex items-center justify-center rounded bg-gray-50 h-96 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                    </div>
                </div>
                <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
            </div>
        </div>
    )
}

export default Body