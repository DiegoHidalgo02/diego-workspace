// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.css';
import { Card } from './card';
import { Navbar } from './navbar';

export type PokemonType = {
  title: string;
  description: string;
  link: string;
};


const arrayPokemon: PokemonType[] = [
  {
    title: 'Pikachu',
    description: 'Elettrico',
    link: 'url',
  },

  {
    title: 'Bulbasaur',
    description: 'Erba',
    link: 'url',
  },

  {
    title: 'charmender',
    description: 'fuoco',
    link: 'url',
  },
];

export function App() {
  return (
    <div>
      <Navbar />
      {arrayPokemon.map((item) => {
        return <Card item={item} />;
      })}
    </div>
  );
}

export default App;
