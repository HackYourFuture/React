import React from 'react';
import FlagIcon from './FlagIcon';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { LanguageTwoTone } from '@material-ui/icons';

export default ({ region, code, search, onRegionSelect, onClose }) => {
  if (search !== '' && region.indexOf(search) === -1) {
    return null;
  }

  return (
    <ListItem
      tabIndex="0"
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
      <ListItemIcon
        style={{ minWidth: 'auto', marginRight: '1em', pointerEvents: 'none' }}>
        {region === 'random' ? <LanguageTwoTone /> : <FlagIcon code={code} />}
      </ListItemIcon>
      <ListItemText style={{ pointerEvents: 'none' }}>
        {region.replace(region[0], region[0].toUpperCase())}
      </ListItemText>
    </ListItem>
  );
};
