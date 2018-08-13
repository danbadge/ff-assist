import * as React from 'react';

export interface Props {
  increment: number;
  onIncrement?: () => void;
}

function Hello({ increment = 1, onIncrement }: Props) {
  return (
    <div>
      <div>
        Hello {increment}
      </div>
      <div>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default Hello;
