import { motion } from 'framer-motion';
import Link from 'next/link';


interface IOpenLinkButtonComponent {
    siteName: string;
    link: string;
};

export const buttonAnimation = {
    start: {
        scale: 0
    },
    end: {
        scale: 1,
        transition: {
            duration: 1,
            type: "spring",
            bounce: 0.6
        }
    }
}

const OpenLinkButton = ({ siteName, link }: IOpenLinkButtonComponent) => {
    return (
        <Link
            href={link}
        >
            <a
                target="_blank"
                className='transition hover:scale-110'
            >
                <motion.img
                    src={`/${siteName}.png`}
                    alt={siteName}
                    variants={buttonAnimation}
                    initial="start"
                    animate="end"
                    className="w-10 h-10"
                />
            </a>
        </Link>
    )
}

export default OpenLinkButton;