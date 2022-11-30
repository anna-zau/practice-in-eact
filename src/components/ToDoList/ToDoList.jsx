import React from 'react';
import css from './ToDoList.module.css';
import App from '../App/App';

export const ToDoList = ({ todos, deleteTodoClick }) => {
  return (
    <ul className={css.list}>
      {todos.map(({ id, text }) => {
        return (
          <li key={id} className={css.item}>
            <p className={css.text}>{text}</p>
            <button
              onClick={id => {
                console.log(id);
              }}
              className={css.button}
            >
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};
