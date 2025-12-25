import { useState, useEffect } from 'react'
type AccordionProps = {
  children: React.ReactNode,
  title: string,
  id?: string,
  active?: boolean,
  big?: boolean,
  className?: string;
}
export default function MyAccordion({
  children,
  title,
  id,
  active = false,
  big = false,
  className,
}: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false)
  useEffect(() => {
    setAccordionOpen(active)
  }, [active])

  return (
    <div className={`${className ? className : ""}`}>
      <h2>
        <button
          className="flex items-center justify-between w-full text-left font-semibold py-1"
          onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          {
            big ?
              <span className='text-lg md:text-2xl font-semibold text-center text-red-600 dark:text-amber-600'>{title}</span>
              :
              <span>{title}</span>
          }


          <svg className="dark:fill-amber-600 fill-red-600 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
            <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="pb-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}