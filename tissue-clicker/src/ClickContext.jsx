import { createContext, useState } from 'react';

const ClickContext = createContext();

export function ClickProvider({ children }) {
    const [clickCount, setClickCount] = useState(0);

    return (
        <ClickContext.Provider value={{ clickCount, setClickCount }}>
            {children}
        </ClickContext.Provider>
    );
}

export default ClickContext;
