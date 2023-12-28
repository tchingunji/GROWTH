import { Inter } from 'next/font/google'
import './globals.css'
import ContainerForm from '@/components/Container-form'
import Header from '@/components/Header'
import CardInformation from '@/components/Card-information'
import CardPlans from '@/components/Card-plans'
import Footer from '@/components/Footer'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <ContainerForm/>
        <CardInformation />
        <CardPlans/>
        <Footer/>
        </body>
    </html>
  )
}
