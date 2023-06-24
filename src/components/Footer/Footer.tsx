import React from 'react'
import { UIText } from '../ui-components/UIText/UIText'
import Link from 'next/link'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <UIText text={'Already have an account?'}/>
      <Link href="/login" className={styles.link}> Log in</Link>
    </footer>
  )
}
