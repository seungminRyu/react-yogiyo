import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
    {
        id: 1,
        text: '펌 하기',
        done: true
    },
    {
        id: 2,
        text: '캐리어 주기',
        done: false
    },
    {
        id: 3,
        text: '리액트 공부',
        done: true
    },
    {
        id: 4,
        text: '스터디 하기',
        done: false
    },
    {
        id: 5,
        text: '카톡 답장',
        done: false
    }
];

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE': {
            const result = state.concat(action.todo);
            console.log(result);
            return result;
        }
        case 'TOGGLE': {
            const result = state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
            console.log(result);
            return result;
        }
        case 'REMOVE': {
            const result = state.filter(todo => todo.id !== action.id);
            console.log(result);
            return result;
        }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context
}