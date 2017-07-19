import * as React from 'react';

export default () => {
  return (
    <div className="heroes">
      <div className="category">
        <div className="option genji" />
        <div className="option mccree" />
        <div className="option pharah" />
        <div className="option reaper" />
        <div className="option soldier-76" />
        <div className="option sombra" />
        <div className="option tracer" />
      </div>

      <div className="category">
        <div className="option bastion" />
        <div className="option hanzo" />
        <div className="option junkrat" />
        <div className="option mei" />
        <div className="option torbjorn" />
        <div className="option widowmaker" />
      </div>

      <div className="category">
        <div className="option dva" />
        <div className="option orisa" />
        <div className="option reinhardt" />
        <div className="option roadhog" />
        <div className="option winston" />
        <div className="option zarya" />
      </div>

      <div className="category">
        <div className="option ana" />
        <div className="option lucio" />
        <div className="option mercy" />
        <div className="option symmetra" />
        <div className="option zenyatta" />
      </div>
    </div>
  );
};
