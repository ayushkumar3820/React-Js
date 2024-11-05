import { useEffect, useState } from "react";

export function useLocalStorage(key, initialData) {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        const existingData = localStorage.getItem(key);
        
        // Check if existingData is not null or undefined before parsing
        let parsedData;
        if (existingData) {
            try {
                parsedData = JSON.parse(existingData);
            } catch (error) {
                console.error('Error parsing JSON from localStorage:', error);
                parsedData = initialData; // Fallback to initialData if parsing fails
            }
        } else {
            parsedData = initialData; // Fallback if no data exists
        }

        // Set the data state with parsed data
        setData(parsedData);
    }, [key, initialData]); // Ensure key and initialData are in the dependency array

    const updateLocalStorage = (newData) => {
        let updatedData;

        if (typeof newData === 'function') {
            updatedData = newData(data);
        } else {
            updatedData = newData;
        }

        // Update localStorage and state
        localStorage.setItem(key, JSON.stringify(updatedData));
        setData(updatedData);
    };

    return [data, updateLocalStorage];
}