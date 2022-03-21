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
            className='space-y-3 '
        >
            <Head>
                <title>{title} | 최성준</title>
            </Head>
            <NavBar />
            <div
                className="
                    box-border
                    flex flex-col md:flex-row justify-around items-center 
                    space-y-4 py-10 px-12 font-bold"
            >
                {children}
            </div>
        </div>
    )
}

export default MainLayout