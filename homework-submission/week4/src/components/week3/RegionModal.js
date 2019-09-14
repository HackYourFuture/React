import React, { useEffect, useRef, forwardRef } from 'react';
import RegionListItem from './RegionListItem';
import RegionSearchInput from './RegionSearchInput';
import { List } from '@material-ui/core';
import styled from 'styled-components';

const ModalContainer = styled.div`
  background-color: #ffffff;
  position: fixed;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  width: 25rem;
  height: calc(100vh - 6rem);

  & input {
    position: sticky;
    top: 3rem;
  }

  & ul {
    overflow-y: auto;
    height: calc(100% - 4rem);
    margin: 1rem 0;
  }
`;

// https://material-ui.com/guides/composition/#caveat-with-refs
const RegionModal = forwardRef((props, ref) => {
  const searchInput = useRef(ref);

  useEffect(() => {
    // Accessibility: When modal is mounted automatically focus the search index.
    searchInput.current.focus();
  });

  const { countries, search, onChange, onClose, onRegionSelect } = props;

  return (
    <ModalContainer>
      <RegionSearchInput searchInput={searchInput} onChange={onChange} />
      <List>
        {countries.map(item => {
          const [region, code] = item.split(', ');
          return (
            <RegionListItem
              key={code}
              search={search}
              code={code}
              region={region}
              onRegionSelect={onRegionSelect}
              onClose={onClose}
            />
          );
        })}
      </List>
    </ModalContainer>
  );
});

export default RegionModal;
