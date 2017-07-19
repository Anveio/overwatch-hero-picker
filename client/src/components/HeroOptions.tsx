import * as React from 'react';

const roster = {
  offense: [
    'genji',
    'mccree',
    'pharah',
    'reaper',
    'soldier',
    'sombra',
    'tracer'
  ],
  defense: ['bastion', 'hanzo', 'junkrat', 'mei', 'torbjorn', 'widowmaker'],
  tank: ['dva', 'orisa', 'reinhardt', 'roadhog', 'winston', 'zarya'],
  support: ['ana', 'lucio', 'mercy', 'symmetra', 'zenyatta']
};

export default () => {
  const heroCategories = (): JSX.Element[] =>
    Object.keys(roster).map(category => {
      return (
        <div className="category" key={category}>
          {fillCategory(category)}
        </div>
      );
    });

  const fillCategory = (category: string) => {
    return roster[category].map((hero: string | undefined, i: number) => {
      return <div className={`option ${hero}`} key={i} />;
    });
  };
  
  return (
    <div className="heroes">
      {heroCategories()}
    </div>
  );
};
