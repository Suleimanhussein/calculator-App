import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    // let data = [
    //     '7', '8', '9', '/',
    //     '4', '5', '6', '*',
    //     '1', '2', '3', '-',
    //     'C', '0', '=', '+',
    // ];
    let data = [
    1, 2, 3, '+',
    4, 5, 6, '-',
    7, 8, 9, '/',
    'C', 0, '=', '+',
    ]



    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleEquals = () => {
        try {
            setResult(eval(input)); // ⚠️ Avoid eval in production
        } catch {
            setResult('Error');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-[#EBC23D] bg-[#1D1D1B] p-6 rounded-2xl shadow-lg w-72">
                <h2 className="text-xl font-bold mb-4 text-center">Calculator</h2>
                <input
                    type="text"
                    value={input}
                    readOnly
                    className="w-full mb-2 p-2 border border-gray-300 rounded text-right font-mono"
                />
                <div className="text-right font-mono text-lg">
                    <span>Result: </span>
                    <span className="font-bold">{result}</span>
                </div>
                <div className="grid grid-cols-4 gap-2 mb-2">
                    {data.map((btn) => (
                        <button
                            key={btn}
                            onClick={() => {
                                if (btn === 'C') handleClear();
                                else if (btn === '=') handleEquals();
                                else handleClick(btn);
                            }}
                            className={`p-3 rounded text-white font-semibold cursor-pointer ${btn === '='
                                ? 'bg-[#EBC23D] hover:bg-[#EBC23D]'
                                    : btn === 'C'
                                        ? 'bg-red-500 hover:bg-red-600'
                                    : ' border border-[#EBC23D]  hover:bg-[#EBC23D] hover:text-[#1D1D1B]'
                                }`}
                        >
                            {btn}
                        </button>
                    ))}
                </div>
                
            </div>
        </div>
    );
};

export default Calculator;
