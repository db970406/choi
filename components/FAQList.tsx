import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import myFAQs from "../myFAQs.json";

const FAQVariants = {
    start: {
        backgroundColor: "rgba(0,0,0,0)"
    },
    end: {
        backgroundColor: "rgba(0,0,0,0.8)"
    },
    exit: {
        backgroundColor: "rgba(0,0,0,0)"
    }
};

const FAQList = () => {
    const [faqId, setFaqId] = useState<number | null>(null);

    return (
        <div
            className='w-full place-self-start space-y-3'
        >
            <h1 className="text-center">최성준에 대해 궁금하실 것 같은 것들만 모아봤어요!</h1>
            <div
                className="
                    border-2 border-t-fuchsia-400 justify-center rounded-xl
                    divide-y-2 divide-fuchsia-300 md:mx-16
                "
            >
                {myFAQs?.map((myFAQ) =>
                    <motion.div
                        key={myFAQ.id}
                        layoutId={String(myFAQ.id)}
                        className='
                            w-full px-5 py-3
                            flex justify-between
                            group
                            cursor-pointer
                            text-gray-500 hover:text-fuchsia-500
                        '
                        onClick={() => setFaqId(myFAQ.id)}
                    >
                        <h1
                            className='group-hover:scale-105 transition'
                        >
                            {myFAQ.title}
                        </h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="
                                h-6 w-6
                                group-hover:scale-105 transition
                            "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </motion.div>
                )}
                <AnimatePresence>
                    {faqId !== null ? (
                        <motion.div
                            variants={FAQVariants}
                            initial="start"
                            animate="end"
                            exit="exit"
                            onClick={() => setFaqId(null)}
                            className='
                                flex justify-center items-center 
                                fixed w-screen h-screen 
                                inset-0 px-16
                                md:px-80
                            '
                        >
                            <motion.div
                                layoutId={String(faqId)}
                                className="bg-white w-full rounded-2xl p-10 space-y-6"
                                onClick={(event) => event.stopPropagation()}
                            >
                                <h1 className="text-2xl">
                                    {myFAQs[faqId - 1]?.title}
                                </h1>
                                <p
                                    className='whitespace-pre-wrap'
                                >
                                    {myFAQs[faqId - 1]?.content}
                                </p>
                            </motion.div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default FAQList;