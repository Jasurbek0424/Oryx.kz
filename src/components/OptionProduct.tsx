// import React from 'react'

interface ExampleProduct {
    title: string,
    img: string
}

function OptionProduct({ title, img }: ExampleProduct) {
    return (
        <>
            <div className="h-[200px] sm:h-[230px] md:h-[280px] lg:h-[300px] flex flex-col justify-between border p-4 hover:shadow-md transition-all cursor-pointer rounded-lg">
                <p className="font-gilroy700 text-sm sm:text-lg md:text-xl w-[150px] mx-auto text-center mb-4">
                    {title}
                </p>
                <div className="flex justify-center">
                    <img src={img} alt="" className="w-[135px] sm:w-[150px] md:w-[190px] lg:w-[220px]" />
                </div>
            </div>
        </>
    )
}

export default OptionProduct