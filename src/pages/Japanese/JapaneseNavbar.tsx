import { NavLink } from 'react-router-dom';

const JapaneseNavbar = () => {
  return (
    <nav className="bg-gray-500 text-white p-4">
      {/* Add a wrapper div with horizontal overflow */}
      <div className="overflow-x-auto whitespace-nowrap">
        <ul className="flex space-x-4 justify-start lg:justify-around">
          <li>
            <NavLink to='/japanese' className="block px-4 py-2 hover:bg-gray-700">
              Japanese Home Page
            </NavLink>
          </li>
          <li>
            <NavLink to='/japanese/study-guide' className="block px-4 py-2 hover:bg-gray-700">
              Study Guide
            </NavLink>
          </li>
          <li>
            <NavLink to='/japanese/writing-systems-explained' className="block px-4 py-2 hover:bg-gray-700">
              Writing Systems
            </NavLink>
          </li>
          <li>
            <NavLink to='/japanese/vocabulary' className="block px-4 py-2 hover:bg-gray-700">
              Vocabulary
            </NavLink>
          </li>
          <li>
            <NavLink to='/japanese/grammar/keigo' className="block px-4 py-2 hover:bg-gray-700">
              Grammar
            </NavLink>
          </li>
          <li>
            <NavLink to='/japanese/comprehension/aikos-book-sanctuary' className="block px-4 py-2 hover:bg-gray-700">
              Reading/Listening
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default JapaneseNavbar;
