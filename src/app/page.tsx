import Image from 'next/image'
import styles from './page.module.css'
import { Container } from '@/components/ui-components/Container/Container'
import { Header } from '@/components/Header/Header'
import { Content } from '@/components/Content/Content'
import { RegistrationFormContainer } from '@/components/RegistrationFormContainer/RegistrationFormContainer'
import { Title } from '@/components/ui-components/Title/Title'
import { UIText } from '@/components/ui-components/UIText/UIText'
import { Footer } from '@/components/Footer/Footer'

export default function Home() {
  return (
    // <Container>
    <>
      <Header />
      <Content>
        <Title text={'Welcome Ruix'}/>
        <UIText As={'p'} text={'Welcome to Ruix. dashboard Community'} />
        <RegistrationFormContainer />
      </Content>
      <Footer />
    </>
    // </Container>
  )
}
