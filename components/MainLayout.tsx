import Head from 'next/head'
import React from 'react'
import NavBar from './NavBar'


interface IMainLayout {
    children: React.ReactNode;
    title: string;
}

const MainLayout = ({ children, title }: IMainLayout) => {
    return (
        <div
            className='space-y-3 font-bold'
        >
            <Head>
                <title>{title} | 최성준</title>
            </Head>
            <NavBar />
            <div
                className="
                    flex flex-col items-center md:flex-row md:justify-around space-y-8 
                    md:space-x-8 px-10 md:px-32 w-full py-10
                "
            >
                {children}
            </div>
        </div>
    )
}

export default MainLayout