import React from 'react'
import styles from './RegistrationForm.module.scss'
import { UIText } from '@/components/ui-components/UIText/UIText'

export const RegistrationForm = () => {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        <input type="text" className={styles.input} name='name' placeholder='Name'/>
      </label>
      <label className={styles.label}>
        <input type="email" className={styles.input} name='Email' placeholder='Email'/>
      </label>
      <label className={styles.label}>
        <input type="password" className={styles.input} name='Password' placeholder='Password'/>
      </label>
      <label className={styles.label}>
        <input type="checkbox" className={styles.checkbox}/>
        <UIText text={'Remember Me'}/>
      </label>
      <button className={styles.button}>Register</button>
    </form>
  )
}
