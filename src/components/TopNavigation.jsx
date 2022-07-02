import React from 'react';
import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import useDarkMode from '../hook/useDarkMode';

const TopNavigation = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <div className='top-navigation'>
      <div>
        <FaHashtag size='20' className='title-hashtag' />
      </div>
      <div className='title-text'>
        <h5>TailwindCss</h5>
      </div>
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size='24' className='top-navigation-icon' />
        ) : (
          <FaMoon size='24' className='top-navigation-icon' />
        )}
      </span>
      <div className='search'>
        <input className='search-input' type='text' placeholder='Search...' />
        <FaSearch size='18' className='text-secondary my-auto' />
      </div>
      <div>
        <FaRegBell size='24' className='top-navigation-icon' />
      </div>
      <div>
        <FaUserCircle size='24' className='top-navigation-icon' />
      </div>
    </div>
  );
};

// const ThemeIcon = () => {
//   const [darkTheme, setDarkTheme] = useDarkMode();
//   const handleMode = () => setDarkTheme(!darkTheme);
//   return (
//     <span onClick={handleMode}>
//       {darkTheme ? (
//         <FaSun size='24' className='top-navigation-icon' />
//       ) : (
//         <FaMoon size='24' className='top-navigation-icon' />
//       )}
//     </span>
//   );
// };

// const Search = () => (
//   <div className='search'>
//     <input className='search-input' type='text' placeholder='Search...' />
//     <FaSearch size='18' className='text-secondary my-auto' />
//   </div>
// );

// const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
// const UserCircle = () => (
//   <FaUserCircle size='24' className='top-navigation-icon' />
// );
// const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag' />;
// const Title = () => <h5 className='title-text'>tailwind-css</h5>;

export default TopNavigation;
