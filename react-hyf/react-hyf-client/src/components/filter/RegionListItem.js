import React from 'react';
import FlagIcon from '../FlagIcon';

const RegionListItem = ({ region, code, search, onRegionSelect, onClose }) => {
  if (search !== '' && region.indexOf(search) === -1) {
    return null;
  }

  return (
    <li
      tabIndex="0"
      className="region__item"
      id={region}
      key={region}
      onClick={e => {
        onRegionSelect(e.target.id);
        onClose();
      }}
      onKeyPress={e => {
        // Accessibility: User can navigate with tab and select region with enter.
        if (e.which === 13) {
          onRegionSelect(e.target.id);
          onClose();
        }
      }}>
      {region === 'random' ? (
        <img src="flag-random.gif" alt="random" />
      ) : (
        <FlagIcon squared code={code} />
      )}{' '}
      {region.replace(region[0], region[0].toUpperCase())}
    </li>
  );
};

export default RegionListItem;
