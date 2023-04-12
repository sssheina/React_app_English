import React, { createContext } from 'react';


// export const WordContext = createContext();

export const translation = {
    english: {
        greeting: 'hello',
        title: 'TITLE',
    },
    russian: {
        greeting: 'привет',
        title: 'ЗАГОЛОВОК',
    },
};

export const TranslationContext=React.createContext();