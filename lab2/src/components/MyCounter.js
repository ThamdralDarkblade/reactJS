import {useState} from "react";
import Button from '@mui/material/Button';
import {createTheme} from '@mui/material/styles';
import {ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#814bff',
            darker: '#4a2f9a',
        }
    }
});

export function MyCounter(current = 0, min = -10, max = 10) {
    const [count, setCount] = useState(current)

    const increment = () => {
        if (max >= count + 1) {
            setCount(count + 1)
        }
    }
    const decrement = () => {
        if (min <= count - 1) {
            setCount(count - 1)
        }
    }
    const reset = () => {
        setCount(current)
    }

    return (
        <div className="myCounter">
            <ThemeProvider theme={theme}>
                <span>Поточний рахунок: {count}</span>
                <Button variant="contained" color="primary" onClick={increment} disabled={max <= count}>+</Button>
                <Button variant="contained" color="primary" onClick={decrement} disabled={min >= count}>-</Button>
                <Button variant="contained" color="primary" onClick={reset}>Reset</Button>
            </ThemeProvider>
        </div>
    );
}
