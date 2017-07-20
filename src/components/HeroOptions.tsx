import * as React from 'react';
import '../styles/HeroOptions.css';

import { roster } from '../utils';

interface Props {
  onPick: (name: string, newPick: Hero) => void;
}

export default ({ onPick }: Props) => {
  const heroCategories = (): JSX.Element[] =>
    Object.keys(roster).map(category => {
      return (
        <div className="category" key={category}>
          {fillCategory(category)}
        </div>
      );
    });

  const fillCategory = (category: string) => {
    return roster[category].map((hero: Hero, i: number) => {
      return (
        <div
          className={`option ${hero}`}
          key={i}
          onClick={() => onPick('Me', hero)}
        />
      );
    });
  };

  return (
    <div className="heroes">
      {heroCategories()}
    </div>
  );
};
