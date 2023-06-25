import React, { FC } from 'react'
import { UIText } from '../UIText/UIText'
import { IInput } from '../Input/Input'
import clsx from 'clsx'
import styles from './Checkbox.module.scss'
import { UseFormGetValues } from 'react-hook-form'
import { IUserRegData } from '@/components/RegistrationFormContainer/RegistrationFormContainer'

interface ICheckbox extends Pick<IInput, 'name' | 'type' | 'placeholderText' | 'register'> {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  getValues: UseFormGetValues<IUserRegData>;
}

export const Checkbox: FC<ICheckbox> = ({ type, name, placeholderText, register, isChecked, setIsChecked, getValues}) => {
  return (
    <label className={styles.label}>
      <input
        type={type}
        className={clsx(styles.checkbox, {
          [styles.checked]: isChecked,
        })}
        {...register(name, {
          onChange: () => setIsChecked(getValues(name) as boolean)
        }
        )}
      />
      <UIText text={placeholderText}/>
    </label>
  )
}
