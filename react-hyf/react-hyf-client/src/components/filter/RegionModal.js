import React, { Component, createRef } from 'react';
import RegionListItem from './RegionListItem';
import RegionSearchInput from './RegionSearchInput';
import { IconClose } from '../Icons';

class RegionModal extends Component {
  constructor(props) {
    super(props);

    this.searchInput = createRef();
  }

  componentDidMount() {
    // Accessibility: When modal is mounted automatically focus the search index.
    this.searchInput.current.focus();
  }

  render() {
    const { countries, search, onChange, onClose, onRegionSelect } = this.props;
    return (
      <div className="region__modal">
        <div className="region__inputs">
          <RegionSearchInput
            searchInput={this.searchInput}
            onChange={onChange}
          />
          <button className="region__close" onClick={onClose}>
            <IconClose />
          </button>
        </div>
        <ul className="region__list">
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
        </ul>
      </div>
    );
  }
}

export default RegionModal;
