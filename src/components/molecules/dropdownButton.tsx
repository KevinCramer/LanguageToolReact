import { consistentStyles } from '../../constants';
import DownChevronIcon from '../atoms/DownChevronIcon';

const DropdownButton = ({ text, onClick }: any) => {
  return (
    <button
      className="border-[1px] border-b-4 text-sm border-gray-300 bg-200 text-center active:bg-gray-300 hover:bg-gray-200 p-1 pl-2 rounded-lg mb-2"
      onClick={onClick}
    >
      <div className={`flex items-center ${consistentStyles.textBlack}`}>
        <div className='flex'>
          {text}
          <DownChevronIcon />
        </div>
      </div>
    </button>
  );
};

export default DropdownButton;