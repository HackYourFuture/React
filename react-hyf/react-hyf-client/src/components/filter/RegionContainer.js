import React, { Component } from 'react';
import FlagIcon from '../FlagIcon';
import RegionModal from './RegionModal';

const COUNTRIES = [
  'random, rn',
  'albania, al',
  'argentina, ar',
  'armenia, am',
  'australia, au',
  'austria, at',
  'azerbaijan, az',
  'bangladesh, bd',
  'belgium, be',
  'bosnia and herzegovina, ba',
  'brazil, br',
  'bulgaria, bg',
  'canada, ca',
  'china, cn',
  'colombia, co',
  'costa rica, cr',
  'croatia, hr',
  'czech republic, cz',
  'denmark, dk',
  'egypt, eg',
  'england, gb',
  'estonia, ee',
  'finland, fi',
  'france, fr',
  'georgia, ge',
  'germany, de',
  'greece, gr',
  'hungary, hu',
  'india, in',
  'indonesia, id',
  'iran, ir',
  'ireland, ie',
  'israel, il',
  'italy, it',
  'japan, jp',
  'korea, kr',
  'kyrgyz republic, kg',
  'mexico, mx',
  'morocco, ma',
  'nepal, np',
  'netherlands, nl',
  'new zealand, nz',
  'nigeria, ng',
  'norway, no',
  'pakistan, pk',
  'poland, pl',
  'portugal, pt',
  'romania, ro',
  'russia, ru',
  'saudi arabia, sa',
  'slovakia, sk',
  'slovenia, sl',
  'spain, es',
  'sweden, se',
  'switzerland, ch',
  'tunisia, tn',
  'turkey, tr',
  'ukraine, ua',
  'united states, us',
  'vietnam, vn'
];

class RegionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      search: ''
    };
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false, search: '' });
  }

  handleSearch(e) {
    this.setState({ search: e.target.value.toLowerCase() });
  }

  render() {
    // Find the current country code due to region value which is passed via props.
    const currentCode = COUNTRIES.reduce((initialCode, region) => {
      const [regionName, regionCode] = region.split(', ');
      if (this.props.region === regionName) {
        initialCode = regionCode;
      }
      return initialCode;
    }, '');

    return (
      <div className="region">
        <button
          id="region"
          className="region__button"
          onClick={this.handleOpen.bind(this)}>
          {this.props.region === 'random' ? (
            <img src="flag-random.gif" alt="" />
          ) : (
            <FlagIcon squared code={currentCode} />
          )}
        </button>
        {this.state.open && (
          <RegionModal
            countries={COUNTRIES}
            search={this.state.search}
            onChange={this.handleSearch.bind(this)}
            onClose={this.handleClose.bind(this)}
            onRegionSelect={this.props.onRegionSelect}
          />
        )}
      </div>
    );
  }
}

export default RegionContainer;
