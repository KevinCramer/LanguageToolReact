import { NavLink } from 'react-router-dom';

const JapaneseNavbar = () => {
  return (
    <nav className='flex justify-around p-4 bg-gray-500 text-white'>
      <NavLink to='/japanese'>
          Japanese Home Pages
      </NavLink>
      <NavLink to='/japanese/study-guide'>
          Study Guide
      </NavLink>
      <NavLink to='/japanese/writing-systems-explained'>
          Writing Systems
      </NavLink>
      <NavLink to='/japanese/vocabulary'>
          Vocabulary
      </NavLink>
      <NavLink to='/japanese/grammar/keigo'>
          Grammar
      </NavLink> <NavLink to='/japanese/comprehension/aikos-book-sanctuary'>
          Reading/Listening
      </NavLink>
    </nav>
  );
};

export default JapaneseNavbar;