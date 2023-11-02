import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
    return (
        <div className='LoadingTodo-Container'>
            <span className='LoadingTodo-CompleteIcon'>
            </span>
            <p className='LoadingTodo-Text'></p>
            <span className='LoadingTodo-DeleteIcon'></span>
        </div>
    )
}

export { TodosLoading };