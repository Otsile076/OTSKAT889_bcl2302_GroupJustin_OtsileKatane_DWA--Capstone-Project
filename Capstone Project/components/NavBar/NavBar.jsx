import React from 'react';
import SearchButton from './functions/Button';
import SortButton from './functions/Button';
import PropTypes from 'prop-types';


export default function NavBar(){
  return (
    <div>
    <SearchButton />
    <SortButton />
    </div>
  )
}