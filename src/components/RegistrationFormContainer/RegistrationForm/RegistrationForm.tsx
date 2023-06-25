import React, { FC } from 'react'
import { FieldErrors, SubmitHandler, UseFormGetValues, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { Modal } from '@/components/ui-components/Modal/Modal'
import { Input } from '@/components/ui-components/Input/Input'
import styles from './RegistrationForm.module.scss'
import { Checkbox } from '@/components/ui-components/Checkbox/Checkbox'
import { IUserRegData } from '../RegistrationFormContainer'

export interface IRegistrationForm {
  handleSubmit: UseFormHandleSubmit<IUserRegData, undefined>;
  onSubmit: SubmitHandler<IUserRegData>;
  register: UseFormRegister<IUserRegData>;
  errors: FieldErrors<IUserRegData>;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  getValues: UseFormGetValues<IUserRegData>;
  apiError: string;
  setFulfilled: React.Dispatch<React.SetStateAction<boolean>>;
  isfulfilled: boolean;
}

const requiredMessage = 'Поле обязательно для заполнения'
const isValidMailMessage = 'Неправильный формат email'
const isValisPasswordlMessage = 'Пароль должен содержать латиницу, минимум 6 символов, хотя бы 1 спецсимвол (!@#$%^&*), хотя бы 1 цифру, и хотя бы 1 букву в верхнем и нижнем регистре'
const emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
const passwordRegExp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g

export const RegistrationForm: FC<IRegistrationForm> = (props) => {
  const {
    handleSubmit,
    onSubmit,
    register,
    errors,
    isChecked,
    setIsChecked,
    getValues,
    apiError,
    setFulfilled,
    isfulfilled
  } = props

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <Input
        type={'text'}
        name={'name'}
        placeholderText={'Name'}
        requiredMessage={requiredMessage}
        register={register}
        errorMessage={errors?.name?.message}
      />

      <Input
        type={'email'}
        name={'email'}
        placeholderText={'Email'}
        requiredMessage={requiredMessage}
        register={register}
        regexp={emailRegExp}
        validMessage={isValidMailMessage}
        errorMessage={errors?.email?.message}
      />

      <Input
        type={'password'}
        name={'password'}
        placeholderText={'Password'}
        requiredMessage={requiredMessage}
        register={register}
        regexp={passwordRegExp}
        validMessage={isValisPasswordlMessage}
        errorMessage={errors?.password?.message}
      />

      <Checkbox
        type={'checkbox'}
        name={'rememberMe'}
        placeholderText={'Remember Me'}
        register={register}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        getValues={getValues}
      />

      <button className={styles.button}>Register</button>

      {apiError && (
        <>
          <div className={styles.error}>{apiError}</div>
          <div className={styles.error}>Ошибка! Не удалось отправить данные</div>
        </>
      )}

      {isfulfilled && (
        <Modal onClose={() => setFulfilled(false)}>
          <div className={styles.succes}>Данные успешно отправлены</div>
        </Modal>
      )}
    </form>
  )
}
