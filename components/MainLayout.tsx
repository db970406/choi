import React from 'react'


interface IMainLayout {
    children: React.ReactNode
}

const MainLayout = ({ children }: IMainLayout) => {
    return (
        <div
            className="
                flex justify-center items-center
                w-screen h-screen text-red-400
            "
        >
            {children}
        </div>
    )
}

export default MainLayout