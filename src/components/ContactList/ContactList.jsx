import './ContactList.css';

export function ContactList({ contacts, onDeleteContact }) {
    return (
        <>
  <ul className='ContactList'>
    {contacts.map(({id, name, number}) => (
      <li key={id} className='ContactList__item'>
        <p className='ContactList__text'>{name}</p>
            <p className='ContactList__text'>{number}</p>
            <button onClick = {() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
        </ul></>);
};

