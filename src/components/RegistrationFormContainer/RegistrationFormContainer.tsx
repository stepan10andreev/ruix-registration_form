'use client'
import React, { useState } from 'react';
import { RegistrationForm } from './RegistrationForm/RegistrationForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import { FormService } from '../services/form.service';

export interface IUserRegData {
  name: string;
  email: string;
  password: string;
  rememberMe: boolean;
}

export const RegistrationFormContainer = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [apiError, setApiError] = useState('');
  const [isFulfilled, setFulfilled] = useState(false);

  const { register, handleSubmit, formState: {errors}, reset, getValues } = useForm<IUserRegData>();

  const onSubmit: SubmitHandler<IUserRegData> = async (data) => {
    setApiError('');
    try {
      await FormService.registerUser(data);
      setFulfilled(true)
      reset();
    } catch (e) {
      const error = e as AxiosError<Error>
      setApiError(error.message)
    }
  }

  return (
    <RegistrationForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      errors={errors}
      isChecked={isChecked}
      setIsChecked={setIsChecked}
      getValues={getValues}
      apiError={apiError}
      isfulfilled={isFulfilled}
      setFulfilled={setFulfilled}
    />
  )
}
