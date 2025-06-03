import React, { useCallback, useEffect, useRef, useState } from 'react'

const PasswordGenerator = () => {
    const [length, setlenght] = useState(5);
    const [numberAllow, setNumberAllow] = useState(false);
    const [charAllow, setCharAllow] = useState(false);
    const [password, setPassword] = useState('')

    // useRef

    const passwordRef = useRef()

    const generatePassword = useCallback(() => {
        let passwd = '';
        let charValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllow) charValue += '0123456789';
        if (charAllow) charValue += '!@#$%%^&**(){}><?';

        for (let index = 1; index <= length; index++) {
            let char = Math.floor(Math.random() * charValue.length + 1)
            passwd += charValue.charAt(char)
        }

        setPassword(passwd)

    }, [length, numberAllow, charAllow, setPassword])

    const copyToClipBoard = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() => {
        generatePassword()
    }, [length, numberAllow, charAllow, generatePassword])

    return (
        <div className='w-full h-screen bg-red-400 flex items-center justify-center rounded'>
            <div className='p-2 rounded-xl shadow-2xl border flex flex-col items-center'>
                <div className='mb-2'>
                    <input type="text" value={password} placeholder='Password Generate' className='px-2 py-1 rounded outline-none border-none' readOnly ref={passwordRef} />
                    <button onClick={copyToClipBoard} className='text-white bg-orange-400 p-1 m-1 rounded cursor-pointer'>copy</button>
                </div>
                <div className='text-white flex items-cente p-1 gap-1'>
                    <input type="range" min={5} max={20} value={length} className='cursor-pointer' onChange={(e) => { setlenght(e.target.value) }} />
                    <label htmlFor="">{length}</label>
                    <input
                        type="checkbox"
                        defaultChecked={numberAllow}
                        id="numInput"
                        onChange={() => {
                            setNumberAllow((prev) => !prev);
                        }}
                    />
                    <label htmlFor="numInput">Number</label>
                    <input 
                        type="checkbox" 
                        defaultChecked={charAllow} 
                        id="specialCharInput" 
                        onChange={() => {
                            setCharAllow((prev) => !prev);
                        }} 
                    />
                    <label htmlFor="specialCharInput">SpecialChar</label>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerator
