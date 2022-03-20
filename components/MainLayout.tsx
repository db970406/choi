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
            className="
                flex justify-center items-center
                w-screen h-screen
            "
        >
            <Head>
                <title>{title} | 최성준</title>
            </Head>
            <NavBar />
            {children}
        </div>
    )
}

export default MainLayout