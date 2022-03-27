import Contact from '@components/Contact'
import FAQList from '@components/FAQList'
import ImageHover from '@components/ImageHover'
import Introduce from '@components/Introduce'
import MainLayout from '@components/MainLayout'
import MyStudies from '@components/MyStudies'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <MainLayout title='Home'>
      <div
        className="flex flex-col w-full space-y-4"
      >
        <ImageHover imgPath="/최성준2.jpg" size={300} >
          <Contact />
        </ImageHover>
        <div
          className='flex flex-col items-center space-y-5'
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
