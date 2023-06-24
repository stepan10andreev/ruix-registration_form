import Image from 'next/image'
import styles from './page.module.css'
import { Container } from '@/components/ui-components/Container/Container'
import { Header } from '@/components/Header/Header'

export default function Home() {
  return (
    <Container>
      <Header />
    </Container>
  )
}
