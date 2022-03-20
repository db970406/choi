import MainLayout from '@components/MainLayout'
import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <MainLayout title='Home'>
      <Image
        src="/choi1.jpg"
        width="300"
        height="300"
        className="rounded-full"
      />
    </MainLayout>
  )
}

export default Home
