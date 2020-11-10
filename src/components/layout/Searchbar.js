import React from 'react';

const Searchbar = () => {
  return (
    <ul className='right hide-on-med-and-down searchbar'>
      <li>
        <div className='center row'>
          <div className='col s12 '>
            <div className='row' id='topbarsearch'>
              <div className='input-field col s6 s12'>
                <i className='material-icons search prefix'>search</i>
                <input
                  type='text'
                  id='autocomplete-input'
                  className='autocomplete'
                />
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Searchbar;
