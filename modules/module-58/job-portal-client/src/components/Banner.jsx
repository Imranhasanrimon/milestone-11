import { delay, easeIn, easeInOut, motion } from "motion/react"
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">

                    <motion.img
                        animate={{ y: [0, 100, 0] }}
                        transition={{ delay: 1, duration: 8, repeat: Infinity, ease: easeInOut }}
                        src="https://plus.unsplash.com/premium_photo-1661769156730-429cf35cfe37?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="max-w-sm w-80 h-52 rounded-[40px] rounded-bl-none shadow-2xl border-b-4 border-l-4 border-blue-500" />
                    <motion.img
                        animate={{ x: [0, 100, 0] }}
                        transition={{ delay: 1, duration: 8, repeat: Infinity, ease: easeInOut }}
                        src="https://plus.unsplash.com/premium_photo-1661769156730-429cf35cfe37?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="max-w-sm w-80 h-52 rounded-[40px] rounded-bl-none shadow-2xl border-b-4 border-l-4 border-blue-500" />
                </div>
                <div className="flex-1">
                    <motion.h1 animate={{ x: 100 }}
                        transition={{ delay: 1, duration: 5, repeat: Infinity, ease: easeInOut }}
                        className="text-5xl font-bold">Box Office News!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;