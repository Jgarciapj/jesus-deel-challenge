import { SetStateAction, useEffect, useState } from 'react';
import { Player } from '../types/common';

const useAutocomplete = (data: Player[], inputRef: HTMLInputElement | null) => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<Player[]>([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [activeOption, setActiveOption] = useState(0);

  useEffect(() => {
    if (inputRef) {
      inputRef.focus();
    }
  }, []);

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }): void => {
    if (event.target.value !== '') {
      const filteredOptions = data.filter((itemData) => {
        const value = event.target.value.toString().toUpperCase();
        const name = itemData.name.toUpperCase();

        return value && name.startsWith(value) && name !== value;
      });
      setInputValue(event.target.value);
      setOptions(filteredOptions);
    } else {
      setInputValue('');
      setOptions([]);
      setSelectedOption('');
      setActiveOption(0);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    if (event.key === 'ArrowDown' && activeOption < options.length) {
      setActiveOption(activeOption + 1);
    } else if (event.key === 'ArrowUp' && activeOption > 1) {
      setActiveOption(activeOption - 1);
    } else if (event.key === 'Enter') {
      setInputValue(options[activeOption - 1].name);
      setSelectedOption(options[activeOption - 1].name);
      setOptions([]);
      setActiveOption(0);
    } else if (event.key === 'Backspace') {
      setActiveOption(0);
    }
  };

  const handleClick = (value: string) => {
    setInputValue(value);
    setOptions([]);
    setSelectedOption(value);
    setActiveOption(0);
  };

  return {
    inputValue,
    options,
    selectedOption,
    activeOption,
    handleChange,
    handleKeyDown,
    handleClick,
  };
};

export default useAutocomplete;
