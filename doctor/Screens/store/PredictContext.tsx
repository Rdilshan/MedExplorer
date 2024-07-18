import React, { createContext, useState, useContext, ReactNode } from 'react';

interface PredictContextProps {
    predictResult: string[];
    setPredictResult: React.Dispatch<React.SetStateAction<string[]>>;
}

const PredictContext = createContext<PredictContextProps | undefined>(undefined);

export const usePredict = (): PredictContextProps => {
    const context = useContext(PredictContext);
    if (!context) {
        throw new Error('usePredict must be used within a PredictProvider');
    }
    return context;
};

interface PredictProviderProps {
    children: ReactNode;
}

export const PredictProvider: React.FC<PredictProviderProps> = ({ children }) => {
    const [predictResult, setPredictResult] = useState<string[]>([""]);

    return (
        <PredictContext.Provider value={{ predictResult, setPredictResult }}>
            {children}
        </PredictContext.Provider>
    );
};
