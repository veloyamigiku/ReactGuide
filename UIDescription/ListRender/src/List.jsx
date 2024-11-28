const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function ListMap() {
  const listItems = people.map((person, index) => 
    <li key={index}>{person}</li>
  );
  return <ul>{listItems}</ul>;
}
