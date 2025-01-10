import { NavLink } from 'react-router-dom';

const JapaneseNavbar = () => {
  return (
    <>
      <nav className='p-4'>
        {/* Add a wrapper div with horizontal overflow */}
        <div className="overflow-x-auto whitespace-nowrap">
          <ul className="flex space-x-4 justify-start lg:justify-between">
            <li>
              <NavLink to='/japanese' className="block d:px-4 py-2 hover:bg-gray-100">
              Japanese Home Page
              </NavLink>
            </li>
            <li>
              <NavLink to='/japanese/study-guide' className="block md:px-4 py-2 hover:bg-gray-100">
              Study Guide
              </NavLink>
            </li>
            <li>
              <NavLink to='/japanese/writing-systems-explained' className="block md:px-4 py-2 hover:bg-gray-100">
              Writing Systems
              </NavLink>
            </li>
            <li>
              <NavLink to='/japanese/vocabulary' className="block md:px-4 py-2 hover:bg-gray-100">
              Vocabulary
              </NavLink>
            </li>
            <li>
              <NavLink to='/japanese/grammar/keigo' className="block md:px-4 py-2 hover:bg-gray-100">
              Grammar
              </NavLink>
            </li>
            <li>
              <NavLink to='/japanese/comprehension/aikos-book-sanctuary' className="block md:px-4 py-2 hover:bg-gray-100">
              Reading/Listening
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <hr className='bg-black h-0.5' />
    </>
  );
};

export default JapaneseNavbar;
