import React, { useState } from 'react';
import FlagIcon from './FlagIcon';
import RegionModal from './RegionModal';
import { Modal, Fab } from '@material-ui/core';
import { Language } from '@material-ui/icons';

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

const RegionContainer = props => {
  const [state, setState] = useState({ open: false, search: '' });

  const handleOpen = () => setState({ ...state, open: true });

  const handleClose = () => setState({ open: false, search: '' });

  const handleSearch = e =>
    setState({ ...state, search: e.target.value.toLowerCase() });

  // Find the current country code due to region value which is passed via props.
  const currentCode = COUNTRIES.reduce((initialCode, region) => {
    const [regionName, regionCode] = region.split(', ');
    if (props.region === regionName) {
      initialCode = regionCode;
    }
    return initialCode;
  }, '');

  return (
    <>
      <Fab
        variant="round"
        size="small"
        ref={props.button}
        id="region"
        onClick={handleOpen}>
        {props.region === 'random' ? (
          <Language />
        ) : (
          <FlagIcon squared code={currentCode} />
        )}
      </Fab>
      {state.open && (
        <Modal open={state.open} onClose={handleClose}>
          <RegionModal
            countries={COUNTRIES}
            search={state.search}
            onChange={handleSearch}
            onClose={handleClose}
            onRegionSelect={props.onRegionSelect}
          />
        </Modal>
      )}
    </>
  );
};

export default RegionContainer;
