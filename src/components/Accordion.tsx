


interface FaqProps {
    id?: number
    title: string
    children: React.ReactNode
    activeIndex: number
    index: number
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>
}

const Accordion: React.FC<FaqProps> = ({ title, index, activeIndex, setActiveIndex, children }) => {
    const isOpen = index === activeIndex;

    const toggleAccordion = () => {
        setActiveIndex(isOpen ? -1 : index);
    };

    return (
        <>
            <div className="max-w-[850px] mx-auto w-full px-4 mb-2">
                <div className="flex justify-between items-center relative font-gilroy700 pb-1 after:content-[''] after:absolute after:w-full after:bottom-0 after:h-0.5 after:bg-gray-400 after:left-0 mb-2 cursor-pointer"
                    onClick={toggleAccordion}>
                    <h3 className='text-md sm:text-lg lg:text-xl'>{title}</h3>
                    <span className='text-2xl lg:text-3xl'>{isOpen ? '-' : '+'}</span>
                </div>
                <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
                    <p className="text-justify text-md lg:text-lg">{children}</p>
                </div>
            </div>
        </>
    )
}
export default Accordion;