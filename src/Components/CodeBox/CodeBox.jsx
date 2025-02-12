/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';

function CoadBox() {
  return (
    <motion.div
      className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Top Border Gradient */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Control Dots */}
      <div className="px-4 lg:px-8 py-5">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-200"></div>
        </div>
      </div>

      {/* Code Block */}
      <motion.div
        className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <code className="font-mono text-xs md:text-sm lg:text-base">
          {/* Animate each line of code with staggered opacity */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">coder</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">&apos;</span>
            <span className="text-amber-300">Sabbir Hosen</span>
            <span className="text-gray-400">&apos;,</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <span className="ml-4 lg:ml-8 mr-2 text-white">skills:</span>
            <span className="text-gray-400">['</span>
            <span className="text-amber-300">HTML</span>
            <span className="text-gray-400">', '</span>
            <span className="text-amber-300">CSS</span>
            <span className="text-gray-400">', '</span>
            <span className="text-amber-300">Tailwind</span>
            <span className="text-gray-400">', '</span>
            <span className="text-amber-300">JavaScript</span>
            <span className="text-gray-400">', '</span>
            <span className="text-amber-300">React.Js</span>
            <span className="text-gray-400">', '</span>
            <span className="text-amber-300">Redux</span>
            <span className="text-gray-400">', '</span>
            <span className="text-amber-300">Firebase</span>
            <span className="text-gray-400">', '</span>
            <span className="text-amber-300">Node.js</span>
            <span className="text-gray-400">', '</span>
            <span className="text-amber-300">Express.Js</span>
            <span className="text-gray-400">', '</span>
            <span className="text-amber-300">MongoDB</span>
            <span className="text-gray-400">', '</span>
            <span className="text-amber-300">Next.js</span>
            <span className="text-gray-400">'],</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <span className="ml-4 lg:ml-8 mr-2 text-white">teamPlayer:</span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
            <span className="text-orange-400">function</span>
            <span className="text-gray-400">() {'{'}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.9 }}
          >
            <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
            <span className="text-gray-400">(</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1 }}
          >
            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
            <span className="mr-2 text-white">hardWorker</span>
            <span className="text-amber-300">&amp;&amp;</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.3 }}
          >
            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
            <span className="mr-2 text-white">quickLearner</span>
            <span className="text-amber-300">&amp;&amp;</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
            <span className="mr-2 text-white">teamPlayer</span>
            <span className="text-amber-300">&amp;&amp;</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.7 }}
          >
            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
            <span className="mr-2 text-white">skills.length</span>
            <span className="mr-2 text-amber-300">&gt;=</span>
            <span className="text-orange-400">5</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.9 }}
          >
            <span className="ml-8 lg:ml-16 mr-2 text-gray-400">);</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.1 }}
          >
            <span className="ml-4 lg:ml-8 text-gray-400">{'};'}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.3 }}
          >
            <span className="text-gray-400">{'};'}</span>
          </motion.div>
        </code>
      </motion.div>
    </motion.div>
  );
}

export default CoadBox;
