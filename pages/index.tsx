import Contact from '@components/Contact'
import FAQList from '@components/FAQList'
import Introduce from '@components/Introduce'
import MainLayout from '@components/MainLayout'
import MyStudies from '@components/MyStudies'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'

const Home: NextPage = () => {
  const [showContact, setShowContact] = useState(false);
  return (
    <MainLayout title='Home'>
      <div
        className="w-full space-y-4"
      >
        <div
          onMouseLeave={() => setShowContact(false)}
          onMouseEnter={() => setShowContact(true)}
          className="flex justify-center items-center"
        >
          {showContact ? (
            <>
              <Image
                src="/choi1.jpg"
                width="300"
                height="300"
                className="rounded-full opacity-30 transition"
                placeholder='blur'
                blurDataURL="/choi1.jpg"
              />
              <Contact />
            </>
          ) : (
            <Image
              src="/choi1.jpg"
              width="300"
              height="300"
              className="rounded-full"
              placeholder='blur'
              blurDataURL="/choi1.jpg"
            />
          )}
        </div>
        <div
          className='flex flex-col space-y-5 items-center'
        >
          <Introduce />
          <MyStudies />
        </div>
      </div>
      <FAQList />

    </MainLayout>
  )
}

export default Home
