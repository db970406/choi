import { motion } from 'framer-motion';
import { useState } from 'react';
import myFAQs from "../myFAQs.json";
import LayoutIdAnimation from './LayoutIdAnimation';

const FAQList = () => {
    const [faqId, setFaqId] = useState<number | null>(null);

    return (
        <div
            className='w-full place-self-start space-y-3'
        >
            <h1 className="text-center">최성준에 대해 궁금하실 것 같은 것들만 모아봤어요!</h1>
            <div
                className="
                    border-2 hover:border-fuchsia-400 justify-center rounded-xl transition
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
                <LayoutIdAnimation
                    id={faqId}
                    setId={setFaqId}
                    data={myFAQs}
                />
            </div>
        </div>
    );
};

export default FAQList;