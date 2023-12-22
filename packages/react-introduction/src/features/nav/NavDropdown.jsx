import React from 'react';

const NavDropdown = () => {
  return (
    <li className='nav-item dropdown'>
      <a
        className='nav-link dropdown-toggle'
        id='navbarDropdown'
        href='#'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'>
        Shop
      </a>
      <ul
        className='dropdown-menu'
        aria-labelledby='navbarDropdown'>
        <li>
          <a
            className='dropdown-item'
            href='#!'>
            All Products
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>
        <li>
          <a
            className='dropdown-item'
            href='#!'>
            Popular Items
          </a>
        </li>
        <li>
          <a
            className='dropdown-item'
            href='#!'>
            New Arrivals
          </a>
        </li>
      </ul>
    </li>
  );
};

export default NavDropdown;
