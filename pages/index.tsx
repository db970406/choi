import Contact from '@components/Contact'
import Introduce from '@components/Introduce'
import MainLayout from '@components/MainLayout'
import MyStudies from '@components/MyStudies'
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
        placeholder='blur'
        blurDataURL="/choi.jpg"
      />
      <div
        className='flex flex-col space-y-5 items-center md:items-start'
      >
        <Introduce />
        <MyStudies />
        <Contact />
      </div>
    </MainLayout>
  )
}

export default Home
