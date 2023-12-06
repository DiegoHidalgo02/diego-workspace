import 'pokedex-app/src/app/app.module.css';
import { PokemonType } from './app';

type Props = {
  item: PokemonType;
};

export const Card = ({ item }: Props) => {
  return (
    <div>
      <div className="card">
        <h2 className="card-title">{item.title}</h2>
        <img className="card-img" src="" alt="" />
        <p className="card-description">{item.description}</p>
        <button className="card-button">{item.link}</button>
      </div>
    </div>
  );
};
