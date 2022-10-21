import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowSearch = searchOption === 'shows'

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
      console.log(result);
    });
  };
    
  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onKeyDown = ev => {
    if (ev.key === 'Enter')
      // eslint-disable-next-line no-use-before-define
      onSearch();
  };
const onRadioChange = (ev) => {
setSearchOption(ev.target.value)
}




  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Result</div>;
    }

    if (results && results.length > 0) {
      return results[0].show 
      ? results.map(item => (
        <div key={item.show.id}>{item.show.name}</div>
      )) : results.map(item => (
        <div key={item.person.id}>{item.person.name}</div>
      ))
         
    }

    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder='search here something'
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />

<div>
 <label htmlFor='shows-search'>
  Shows
  <input id='shows-search' type= "radio" value="shows" checked={isShowSearch}  onChange={onRadioChange}  />
 </label>


 <label htmlFor='actors-search'>
  Actors
  <input id='actors-search' type= "radio" value="people" checked={!isShowSearch} onChange={onRadioChange} />
 </label>



</div>


      <button type="button" onClick={onSearch} onKeyDown={onKeyDown}>
        search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;