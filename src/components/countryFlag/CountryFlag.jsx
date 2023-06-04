import React from 'react';

const CountryFlag = ({ country }) => {
  const images = [];
  const marginR = {marginRight: '6px'}; //img flag margin right


  if (country.toLowerCase().includes('ireland')) {
    images.push(<img key={'ie'} src={`https://flags.fmcdn.net/data/flags/mini/ie.png`} title="Ireland Flag"  style={marginR}/>);
  }

  if (country.toLowerCase().includes('canada')) {
    images.push(<img key={'ca'} src={`https://flags.fmcdn.net/data/flags/mini/ca.png`} title="Canada Flag"  style={marginR}/>);
  }

  if (country.toLowerCase().includes('france')) {
    images.push(<img key={'fr'} src={`https://flags.fmcdn.net/data/flags/mini/fr.png`} title="France Flag"  style={marginR}/>);
  }

  if (country.toLowerCase().includes('hong kong')) {
    images.push(<img key={'hk'} src={`https://flags.fmcdn.net/data/flags/mini/hk.png`} title="Hong Kong Flag"  style={marginR}/>);
  }

  if (country.toLowerCase().includes('usa')) {
    images.push(<img key={'usa'} src={`https://flags.fmcdn.net/data/flags/mini/us.png`} title="USA Flag" style={marginR}/>);
  }

  if (country.toLowerCase().includes('uk')) {
    images.push(<img key={'gb'} src={`https://flags.fmcdn.net/data/flags/mini/gb.png`} title="UK Flag"  style={marginR}/>);
  }



  return <>{images}</>;
};

export default CountryFlag;