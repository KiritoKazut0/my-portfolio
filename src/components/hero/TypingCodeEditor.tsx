import { useState, useEffect } from "react";

const codeLines = [
    [
        { text: "import", className: "text-fucsia" },
        { text: " { Module } ", className: "text-slate-300" },
        { text: "from", className: "text-fucsia" },
        { text: " '@nestjs/common';", className: "text-green-400" },
    ],

    [
        { text: "import", className: "text-fucsia" },
        { text: " { TypeOrmModule } ", className: "text-slate-300" },
        { text: "from", className: "text-fucsia" },
        { text: " '@nestjs/typeorm';", className: "text-green-400" },
    ],

    [
        {
            text: "// KFE System Architecture",
            className: "text-slate-500",
        },
    ],

    [
        { text: "@Module", className: "text-fucsia" },
        { text: "({", className: "text-slate-300" },
    ],

    [{ text: "  imports: [", className: "text-slate-300" }],

    [{ text: "    TypeOrmModule.forRoot({", className: "text-slate-300" }],

    [
        { text: "      type: ", className: "text-slate-300" },
        { text: "'postgres'", className: "text-green-400" },
        { text: ",", className: "text-slate-300" },
    ],

    [
        { text: "      autoLoadEntities: ", className: "text-slate-300" },
        { text: "true", className: "text-[#e5c07b]" },
        { text: ",", className: "text-slate-300" },
    ],

    [
        { text: "      synchronize: ", className: "text-slate-300" },
        { text: "true", className: "text-[#e5c07b]" },
        { text: ",", className: "text-slate-300" },
    ],

    [{ text: "    }),", className: "text-slate-300" }],

    [{ text: "  ],", className: "text-slate-300" }],

    [{ text: "})", className: "text-slate-300" }],

    [
        { text: "export class ", className: "text-fucsia" },
        { text: "KfeAppModule", className: "text-blue-400" },
        { text: " {}", className: "text-slate-300" },
    ],
];


const totalChars = codeLines
    .flat()
    .reduce((acc, item) => acc + item.text.length, 0);


export default function TypingCodeEditor() {

    const [charCount, setCharCount] = useState(0);

    useEffect(() => {
        if (charCount >= totalChars) {
            const timeout = setTimeout(() => {
                setCharCount(0);
            }, 5000);

            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setCharCount((prev) => prev + 1);
        }, 30);

        return () => clearTimeout(timeout);
    }, [charCount]);

    const renderCode = () => {
        let remaining = charCount;

        return codeLines.map((line, lineIndex) => (
            <div key={lineIndex}>
                {line.map((part, partIndex) => {
                    const visibleLength = Math.max(
                        0,
                        Math.min(remaining, part.text.length)
                    );

                    const visibleText = part.text.slice(0, visibleLength);

                    remaining -= part.text.length;

                    return (
                        <span
                            key={partIndex}
                            className={`${part.className} transition-all duration-75`}
                        >
                            {visibleText}
                        </span>
                    );
                })}
            </div>
        ));
    };

    return (
        <div className="relative w-full z-0 lg:mt-0 flex justify-center items-center">
            <div className="absolute inset-0 m-auto bg-fucsia/20 blur-[100px] rounded-full pointer-events-none z-0 w-[75%] aspect-square" />
            <div className="relative z-10 w-full max-w-105 h-117.5 rounded-lg overflow-hidden border border-slate-700/50 bg-[#0d1117] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group hover:-translate-y-2 hover:border-fucsia/50 hover:shadow-[0_25px_60px_rgba(255,0,255,0.15)] transition-all duration-500 ease-out">
                <div className="flex items-center px-3 py-2.5 bg-[#161b22] border-b border-slate-700/60">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    </div>

                    <div className="mx-auto text-[11px] font-mono text-slate-400 flex items-center gap-2">
                        <span className="text-fucsia">TS</span>
                        app.module.ts
                    </div>

                    <div className="w-10" />
                </div>

                <div className="p-4 md:p-5 h-full overflow-hidden text-xs md:text-[13px] font-mono leading-loose text-left">
                    <pre className="text-slate-300 whitespace-pre-wrap wrap-break-words h-full">
                        <code>
                            {renderCode()}

                            {charCount > 0 && (
                                <span className="inline-block w-0.5 h-3.5 bg-fucsia animate-pulse ml-0.5 align-middle" />
                            )}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}