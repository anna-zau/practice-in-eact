import React from 'react';
import css from './ToDoList.module.css';

export const ToDoList = ({ todos, deleteTodoClick }) => {
  return (
    <ul className={css.list}>
      {todos.map(({ id, text }) => {
        return (
          <li key={id} className={css.item}>
            <p className={css.text}>{text}</p>
            <button
              onClick={() => {
                deleteTodoClick(id);
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
