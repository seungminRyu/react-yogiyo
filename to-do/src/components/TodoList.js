import React from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList() { 
    return (
        <TodoListBlock>
            <TodoItem text="펌 하기" done={false} />
            <TodoItem text="캐리어 주기" done={true} />
        </TodoListBlock>
    )
}

export default TodoList;