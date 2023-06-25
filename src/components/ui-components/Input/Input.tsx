import React, { FC } from 'react'
import styles from './Input.module.scss'
import { UseFormRegister, useForm } from 'react-hook-form';
import { IUserRegData } from '@/components/RegistrationFormContainer/RegistrationFormContainer';

export interface IInput {
  placeholderText: string;
  type: string;
  name: 'name' | 'email' | 'password' | 'rememberMe';
  validMessage?: string;
  errorMessage?: string;
  requiredMessage: string;
  register:  UseFormRegister<IUserRegData>;
  regexp?: RegExp;
}

export const Input: FC<IInput> = ({ type, name, placeholderText, requiredMessage, validMessage, errorMessage, register, regexp }) => {
  return (
    <label className={styles.label}>
      {regexp && validMessage ? (
        <input
          type={type}
          className={styles.input}
          placeholder={placeholderText}
          {...register(name, {
            required: requiredMessage,
            pattern: {
              value: regexp,
              message: validMessage
            }
          })}
        />
      ) : (
        <input
          type={type}
          className={styles.input}
          placeholder={placeholderText}
          {...register(name, {
            required: requiredMessage,
          })}
        />
      )}

      {errorMessage && (
        <div className={styles.error}>{errorMessage}</div>
      )}
    </label>
  )
}
