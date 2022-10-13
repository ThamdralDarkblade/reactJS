import {useState} from "react";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#814bff',
            darker: '#4a2f9a',
        }
    }
});

export function Game() {
    function getRandom() {
        return Math.floor(Math.random() * 1000) + 1
    }

    const [number, setNumber] = useState(getRandom())
    const [guess, setGuess] = useState('')
    const [info, setInfo] = useState('')
    const [result, setResult] = useState('')
    const [tries, setTries] = useState(0)

    const changeGuess = (e) => {
        setGuess(e.target.value)
    }

    const newGame = (e) => {
        setNumber(getRandom())
        setTries(0)
        setGuess('')
        setInfo('')
        setResult('')
    }

    const submit = () => {
        setTries(tries + 1)
        if (guess == number) {
            setResult('You win')
        } else if (guess > number) {
            setInfo(info + ` N < ${guess};`)
            if (tries + 1 >= 10) {
                setResult('Game Over')
            }
        } else {
            setInfo(info + ` N > ${guess};`)
            if (tries + 1 >= 10) {
                setResult('Game Over')
            }
        }
    }

    return (
        <div className="Game">
            <h2>Guess the number</h2>
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary" onClick={newGame} disabled={!result}>New Game</Button>
                <Input type='number' placeholder="Your guess" value={guess} onChange={changeGuess}/>
                <Button variant="contained" color="primary" onClick={submit}
                        disabled={!!result || guess <= 0 || guess > 1000}>Check</Button>
                <div>Information: {info}</div>
                <div>Attempts: {tries}</div>
                <div>Result: <strong>{result}</strong></div>
            </ThemeProvider>
        </div>
    )
}
