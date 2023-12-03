import {useState} from 'react'

import './App.css'
import fileUrl from './assets/1.txt'

function charCode(s: string): number {
    return s.charCodeAt(0);
}

const zeroCharCode = charCode('0');
const nineCharCode = charCode('9');
const lineFeedCode = charCode('\n');

function process(text: string): string {
    let acc: number = 0;
    const stack: Array<number> = [];

    for (const ch: string of text) {
        const chCode: number = charCode(ch);

        if (chCode >= zeroCharCode && chCode <= nineCharCode) {
            stack.push(chCode - zeroCharCode)
        } else if (chCode === lineFeedCode) {
            acc += stack[0] * 10 + stack.pop();
            stack.length = 0;
        }
    }

    return acc.toString();
}

function FileText() {
    const [state, setState] = useState("");

    fetch(fileUrl)
        .then(resp => resp.text())
        .then(text => setState(process(text)));

    return (
        <span>{state}</span>
    )
}

function Body() {
    return (
        <p>
            <FileText/>
        </p>
    )
}

function App() {
    return (
        <>
            <h1>
                Hello
            </h1>
            <Body/>
        </>
    )
}

export default App
