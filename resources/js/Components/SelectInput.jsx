import { forwardRef, useRef, useEffect } from 'react';

export default forwardRef(function SelectInput({ className = '', isFocused = false, children, ...props }, ref) {
    const inputRef = ref || useRef();


    useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (
        <select
            {...props}
            className={
                'border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ' +
                className
            }
            ref={inputRef}
        >
            {children}
        </select>
    );
});
