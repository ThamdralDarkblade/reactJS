export function PropFunc(person, place) {
    return (
        <div>
            <p>Hello, {person.first} {person.second} from {place.city}, {place.country}</p>
        </div>
    );
}
