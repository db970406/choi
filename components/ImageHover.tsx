import Image from 'next/image'
import React, { Dispatch, SetStateAction, useState } from 'react';

interface IImageHoverComponent {
    projectId?: number;
    imgPath: string;
    size: number;
    children: React.ReactNode;
    setSelectedProjectId?: Dispatch<SetStateAction<number | null>>
};

const ImageHover = ({ projectId, imgPath, size, children: showComponentWhenHover, setSelectedProjectId }: IImageHoverComponent) => {
    const [isHovering, setIsHovering] = useState(false);

    const onClick = () => {
        if (setSelectedProjectId) setSelectedProjectId(projectId!);
    }
    return (
        <button
            onMouseLeave={() => setIsHovering(false)}
            onMouseEnter={() => setIsHovering(true)}
            onClick={onClick}
            className="flex justify-center items-center"
        >
            {isHovering ? (
                <>
                    <Image
                        src={imgPath}
                        width={size}
                        height={size}
                        className="rounded-full opacity-30 transition"
                        placeholder='blur'
                        blurDataURL={imgPath}
                    />
                    {showComponentWhenHover}
                </>
            ) : (
                <Image
                    src={imgPath}
                    width={size}
                    height={size}
                    className="rounded-full"
                    placeholder='blur'
                    blurDataURL={imgPath}
                />
            )}
        </button>
    )
}

export default ImageHover;