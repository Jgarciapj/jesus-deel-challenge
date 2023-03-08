import { useEffect, useRef } from 'react';

import useInput from '../../hooks/useInput';
import { Player } from '../../types/common';
import './autocomplete.css';

interface Props {
  data: Player[];
  loading: Boolean;
  getPlayers: () => void;
}

export const Autocomplete = ({ data, loading, getPlayers }: Props) => {
  const inputSearchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputSearchRef.current) {
      inputSearchRef.current.focus();
    }
  }, []);

  const {
    inputValue,
    options,
    activeOption,
    handleChange,
    handleKeyDown,
    handleClick,
  } = useInput(data, inputSearchRef.current);

  return (
    <div className="container">
      <h1 className="heading">Insert any NBA player name:</h1>
      <input
        className="autocomplete"
        value={inputValue}
        onChange={(event) => {
          getPlayers();
          handleChange(event);
        }}
        onKeyDown={handleKeyDown}
        ref={inputSearchRef}
      />
      <ul className="options">
        {options.length > 0 &&
          options.map((item, index) => (
            <li
              className={`option ${
                index === activeOption - 1 ? 'highlight' : ''
              }`}
              onClick={() => {
                handleClick(item.name);
              }}
              key={item.name}
            >
              <strong>
                {inputValue.charAt(0).toUpperCase() + inputValue.slice(1)}
              </strong>
              {item.name.replace(new RegExp(inputValue, 'i'), () => '')}
            </li>
          ))}
      </ul>
      {loading && <h3 className="heading">Loading players</h3>}
    </div>
  );
};
