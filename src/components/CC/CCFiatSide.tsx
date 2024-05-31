"use client"

import Image from "next/image"
import USD from "@/assets/usd.webp"

interface CCFiatSideProps {
  amount: string | undefined
  setAmount?: any
  className?: string
}

const CCFiatSide: React.FC<CCFiatSideProps> = ({
  amount,
  setAmount,
  className,
}) => {
  const onAmountInput = (e: string) => {
    if (
      e === "" ||
      RegExp(`^\\d*(?:\\\\[.])?\\d*$`).test(
        e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      )
    ) {
      setAmount(e)
    }
  }

  return (
    <div className={`relative mt-1 ${className ?? ""}`}>
      <input
        type="text"
        inputMode="decimal"
        value={amount}
        pattern="^[0-9]*[.,]?[0-9]*$"
        onChange={(e) => onAmountInput(e.target.value)}
        className="w-full h-12 max-sm:data-[fast=true]:h-[72px] outline-none text-[30px] pr-28 bg-transparent text-[#31291e] font-semibold placeholder:text-[#afa392]"
        placeholder="0.0"
      />
      <div
        className="absolute flex items-center space-x-2 top-1/2
       -translate-y-1/2 right-0 border border-[#e2cdae] h-10 sm:h-12 px-4 rounded-2xl hover:bg-[#dfcaaa]/60 transition-all cursor-pointer"
      >
        <Image
          src={USD.src}
          width={USD.width}
          height={USD.height}
          alt="usd"
          className="w-5"
        />
        <span className="text-[#31291e] font-semibold">USD</span>
      </div>
    </div>
  )
}

export default CCFiatSide
