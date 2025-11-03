import React, { FormEvent, RefObject } from 'react';
import cn from 'classnames';

interface HeaderProps {
  allCompleted: boolean;
  newTodoTitle: string;
  inputRef: RefObject<HTMLInputElement>;
  handleSubmit: (event: FormEvent) => void;
  setNewTodoTitle: (title: string) => void;
  isAdding: boolean;
  onToggleAll: () => Promise<void>;
  isLoading: boolean;
  hasTodos: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  allCompleted,
  newTodoTitle,
  inputRef,
  handleSubmit,
  setNewTodoTitle,
  isAdding,
  onToggleAll,
  isLoading,
  hasTodos,
}) => {
  return (
    <header className="todoapp__header">
      {hasTodos && !isLoading && (
        <button
          type="button"
          className={cn('todoapp__toggle-all', {
            active: allCompleted === true,
          })}
          data-cy="ToggleAllButton"
          onClick={onToggleAll}
        />
      )}

      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          data-cy="NewTodoField"
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          value={newTodoTitle}
          onChange={event => setNewTodoTitle(event.target.value)}
          disabled={isAdding}
        />
      </form>
    </header>
  );
};
