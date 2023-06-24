'use client'
import React, { useEffect, useState } from 'react'
import styles from './RegistrationForm.module.scss'
import { UIText } from '@/components/ui-components/UIText/UIText'
import { SubmitHandler, useForm } from 'react-hook-form'
import clsx from 'clsx'


interface IUserRegData {
  name: string;
  email: string;
  password: string;
  rememberMe: boolean;
}

const requiredMessage = 'Поле обязательно для заполнения'
const isValidMailMessage = 'Неправильный формат email'
const isValisPasswordlMessage = 'Пароль должен содержать латиницу, минимум 6 символов, хотя бы 1 спецсимвол (!@#$%^&*), хотя бы 1 цифру, и хотя бы 1 букву в верхнем и нижнем регистре'

export const RegistrationForm = () => {
  const { register, handleSubmit, formState: {errors}, reset, getValues } = useForm<IUserRegData>();
  const [isChecked, setIsChecked] = useState(false);

  const onSubmit: SubmitHandler<IUserRegData> = (data) => {
    console.log(data)
    // reset();
  }


  // useEffect(() => {
  //   setIsChecked(getValues('rememberMe'))
  // }, [getValues('rememberMe')])

  const onClick = () => {
    console.log(getValues('rememberMe'))
  }


  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label}>
        <input
          type="text"
          className={styles.input}
          placeholder='Name'
          {...register('name', {
            required: requiredMessage
          })}
        />
        {errors.name && (
          <div className={styles.error}>{errors.name.message}</div>
        )}
      </label>
      <label className={styles.label}>
        <input
          type="email"
          className={styles.input}
          placeholder='Email'
          {...register('email', {
            required: requiredMessage,
            pattern: {
              value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
              message: isValidMailMessage
            }
          })}
        />
        {errors.email && (
        <div className={styles.error}>{errors.email.message}</div>
        )}
      </label>
      <label className={styles.label}>
        <input
          type="password"
          className={styles.input}
          placeholder='Password'
          {...register('password', {
            required: requiredMessage,
            pattern: {
              value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
              message: isValisPasswordlMessage
            }
          })}
        />
        {errors.password && (
        <div className={styles.error}>{errors.password.message}</div>
        )}
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={clsx(styles.checkbox, {
            [styles.checked]: isChecked,
          })}
          {...register('rememberMe', {
            onChange: () => setIsChecked(getValues('rememberMe'))
          }
          )}
        />
        <UIText text={'Remember Me'}/>
      </label>
      <button className={styles.button}>Register</button>
      <button onClick={onClick}>check</button>
    </form>
  )
}
