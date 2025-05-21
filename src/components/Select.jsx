import { useId } from "react"
import React from 'react'

function Select(
    {
        options,
        label,
        className = "",
        ...props
    }, ref
) {
    const id = useId()
    return (
        <div className="w-full">
            {label && <label htmlFor={id} className=''>{label}</label>}
            <select
                {...props}
                ref={ref}
                id={id}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >
                {options.map((option) => (
                    <option key={option.label} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)
