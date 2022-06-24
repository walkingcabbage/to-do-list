import React from 'react'
import styled,{css} from 'styled-components'
import { useTodoState } from '../TodoContext';


const TodoEmptyText=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
    font-size: 24px;
    ${props=>props.todos.length !== 0 && 
    css`
    display: none;
    `}
`;

function TodoEmpty() {
    const todos=useTodoState();
  return (
    <TodoEmptyText todos={todos}>
        아래 버튼을 눌러 할 일을 추가하세요!
    </TodoEmptyText>
  )
}

export default TodoEmpty