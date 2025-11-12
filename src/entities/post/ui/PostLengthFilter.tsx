import React, { useState } from 'react';
import styles from './PostLengthFilter.module.css';

interface PostLengthFilterProps {
  onChange: (minLength: number) => void;
}

const PostLengthFilter: React.FC<PostLengthFilterProps> = ({ onChange }) => {
  const [length, setLength] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setLength(value);
    onChange(value);
  };

  return (
    <div className={styles.filter}>
      <label>
        Минимальная длина заголовка:
        <input
          type="number"
          value={length}
          onChange={handleChange}
          min={0}
        />
      </label>
    </div>
  );
};

export default PostLengthFilter;
