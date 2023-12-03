import {useState} from 'react'

import './App.css'
import fileUrl from './assets/1.txt'

function process(text: string): string {
    return text;
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
