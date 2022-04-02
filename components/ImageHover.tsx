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
        <div
            className="mx-auto"
        >
            <button
                onMouseLeave={() => setIsHovering(false)}
                onMouseEnter={() => setIsHovering(true)}
                onClick={onClick}
                className="flex items-center justify-center"
            >
                {isHovering ? (
                    <>
                        <Image
                            src={imgPath}
                            width={size}
                            height={size}
                            className="transition rounded-full opacity-30"
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
        </div>
    )
}

export default ImageHover;