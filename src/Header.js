import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';

const Header = () => {
  const [{ basket }] = useStateValue(); 


  return (
    <nav className='header'>
      <Link to="/">
        <img className='header__logo' src="https://pngimg.com/d/amazon_PNG25.png" alt="" />
      </Link>

      <div className="header__search">
        <input type="text" className='header__searchInput' />
        <SearchIcon className="header__searchIcon" />
      </div>


      <div className="header__nav">

        {/* 1 */}
        <Link to="/login" className='header__link'>
          <div className="header__option">
            <span className='header__optionLineOne'>Hello test</span>
            <span className='header__optionLineTwo'>Sign in</span>
          </div>
        </Link>

        {/* 2 */}
        <Link to="/" className='header__link'>
          <div className="header__option">
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>

        {/* 3 */}
        <Link to="/" className='header__link'>
          <div className="header__option">
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>

        {/* 4 */}
        <Link to='/checkout' className='header__link'>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>


      </div>

    </nav>
  )
}

export default Header 