import { useState} from 'react';

const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        setName('');
        setGuests([...guests, name]);
    }

    return (
        <div>
            <h3>Guest List</h3>
            <ul>
                {guests.map((guest) => (
                    <li key={guest}>{guest}</li>
                ))}
            </ul>
            <input value={name} onChange={(elementEvent) => setName(elementEvent.target.value) } />
            <button onClick={onClick}>Add Guest</button>
        </div>
    );
};


export default GuestList;