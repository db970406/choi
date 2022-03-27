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
                className="box-border flex flex-col items-center px-12 py-10 space-y-4 font-bold  md:flex-row"
            >
                {children}
            </div>
        </div>
    )
}

export default MainLayout