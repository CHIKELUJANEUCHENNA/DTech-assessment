import React from 'react';
import styled from 'styled-components';

interface TextInputProps {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Wrapper = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ hasError }) => (hasError ? 'red' : '#ccc')};
  border-radius: 4px;
  font-size: 1rem;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 8px;
`;

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  type,
  value,
  onChange,
  error,
}) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        hasError={!!error}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};

export default TextInput;
