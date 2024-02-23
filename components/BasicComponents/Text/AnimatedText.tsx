"use client";

import { Kalam } from "next/font/google";
import { useEffect, useState } from "react";

const kalam = Kalam({ subsets: ["latin"], weight: '400' });

const AnimatedText = ({ children, className, ...props }: {
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
}) => {
  const [text, setText] = useState('' as string)
  const [animation, setAnimation] = useState<boolean>(false)

  useEffect(() => {
    const text = children as string
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setText(text.substring(0, i + 1))
        i++
      } else {
        setAnimation(true)
        clearInterval(interval)
      }
    }, 300)
  }, [children])

  return (
    <div>
      <h1 onClick={() => setAnimation(false)} className={`${kalam.className} ${className} ${animation ? "glowing-text-animation" : "glowing-text"} text-[#C7FAD6] text-[40px] text-center w-fit leading-[1em] cursor-pointer`} {...props}>
        {text}
      </h1>
    </div>
  )
}

export default AnimatedText;