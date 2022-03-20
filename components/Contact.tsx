import { motion } from 'framer-motion';
import Link from 'next/link';

const contactVariants = {
    start: {
        x: -30,
        opacity: 0
    },
    end: {
        x: 0,
        opacity: 1,
        color: "rgba(0,0,0,0.4)",
        transition: {
            duration: 0.1,
        }
    },
    hover: {
        scale: 1.07,
        color: "rgba(0,0,0,1)",
        transition: {
            duration: 0.1,
            ease: 'easeIn'
        }
    }
}

const Contact = () => {
    return (
        <div
            className="flex flex-col justify-center space-y-2 absolute"
        >
            <h2
                className="text-2xl"
            >
                Contact
            </h2>
            <Link
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHvbCKNdwfVFWlPlvPLXVZDJLXFCVbWqSvhRbZhKfmDNLLQWnxRLMgvqrCmWxWJDvKCFlrW"
            >
                <motion.a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHvbCKNdwfVFWlPlvPLXVZDJLXFCVbWqSvhRbZhKfmDNLLQWnxRLMgvqrCmWxWJDvKCFlrW"
                    variants={contactVariants}
                    initial="start"
                    animate="end"
                    whileHover="hover"
                    className="
                        flex items-center space-x-2 
                        transition cursor-pointer
                    "
                    target="_blank"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <p>db970406@naver.com</p>
                </motion.a>
            </Link>
            <Link
                href=""
            >
                <motion.a
                    variants={contactVariants}
                    initial="start"
                    animate="end"
                    whileHover="hover"
                    className="
                        flex items-center space-x-2 
                        transition cursor-pointer
                    "
                    target="_blank"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p>010-7169-5404</p>
                </motion.a>
            </Link>
        </div>
    );
};
export default Contact;