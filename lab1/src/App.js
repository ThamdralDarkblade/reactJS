import './App.css';
import {Task1} from "./components/Task1";
import {Table} from "./components/Table";
import {PropFunc} from "./components/PropFunc";
import {Container} from "react-bootstrap";
import {CardList} from "./components/CardList";
import {CitySelector} from "./components/CitySelector";
import {ColorSelector} from "./components/ColorSelector";

const person = {
    first: "Nazarii",
    second: "Leut"
}

const place = {
    city: "Zhytomyr",
    country: "Ukraine"
}

const items = [
    {
        img: require("./assets/14479934.jpg"),
        title: "Verbatim External Slimline Blu-ray USB 3.1 Gen1",
        price: {
            newPrice: 5077
        }
    },
    {
        img: require("./assets/196835178.jpg"),
        title: "Blu-ray плеєр Sony UBP-X800M2 4К",
        price: {
            oldPrise: 15999,
            newPrice: 15499
        }
    },
    {
        img: require("./assets/273280970.jpg"),
        title: "Ноутбук Asus ROG Strix SCAR 15 G533ZW",
        price: {
            newPrice: 108814
        }
    },
    {
        img: require("./assets/274286111.jpg"),
        title: "Ноутбук Asus ROG Strix G15 G513IM-HN008",
        price: {
            oldPrise: 64999,
            newPrice: 57999
        }
    },
    {
        img: require("./assets/288054122.jpg"),
        title: "Чохол Fiji Polished Carbon для Samsung",
        price: {
            oldPrise: 297,
            newPrice: 264,
            outOfStock: true
        }
    }
]

const cities = [
    {id: 1, name: "Chicago", image: 'chicago.jpg'},
    {id: 2, name: "Los Angeles", image: 'los-angeles.jpg'},
    {id: 3, name: "New York", image: 'new-york.jpg'},
]

const colors = {
    colors: ["aqua", "crimson", "gold", "lightblue"],
    text: "Hello colored text!",
    backgroundColor: "crimson"
}

function App() {
    return (
        <div className="App">
            <Container>
                {Task1()}
                {Table()}
                {PropFunc(person, place)}
                {CardList(items)}
                {CitySelector(cities)}
                {ColorSelector(colors)}
            </Container>
        </div>
    );
}

export default App;
