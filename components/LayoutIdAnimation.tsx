import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';

const layoutIdVariants = {
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

interface ILayoutIdAnimation {
    id: number | null;
    setId: Dispatch<SetStateAction<number | null>>;
    data: any;
}

const LayoutIdAnimation = ({ id, setId, data }: ILayoutIdAnimation) => {
    return (
        <AnimatePresence>
            {id !== null ? (
                <motion.div
                    variants={layoutIdVariants}
                    initial="start"
                    animate="end"
                    exit="exit"
                    onClick={() => setId(null)}
                    className='
                        flex justify-center items-center 
                        fixed w-screen h-screen 
                        inset-0 px-16
                        md:px-80
                    '
                >
                    <motion.div
                        layoutId={String(id)}
                        className="bg-white w-full rounded-2xl p-10 space-y-6"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <h1 className="text-2xl">
                            {data[id - 1]?.title}
                        </h1>
                        <p
                            className='whitespace-pre-wrap'
                        >
                            {data[id - 1]?.content}
                        </p>
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    )
}

export default LayoutIdAnimation;