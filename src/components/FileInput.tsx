import React from 'react';

interface FileInputProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FileInput: React.FC<FileInputProps> = ({ label, onChange, error }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label>{label}</label>
      <input
        type="file"
        onChange={onChange}
        style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '5px' }}
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default FileInput;
