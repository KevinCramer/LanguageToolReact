import { consistentStyles } from '../constants';

const Custom404Error = () => { 
  return (
    <div className='flex flex-col flex-1 justify-center px-4'>
      {/* silly hack to get text roughly in the middle, rewrite this properly! */}
      <div className='h-[150px]'>

      </div>
      <div className='max-w-screen-md mx-auto  rounded-md'>
        Oh no! That page does not exist.
      </div>   
      <div className='max-w-screen-md mx-auto  rounded-md'>
      Head to our <a className={`${consistentStyles.blueText} underline`} href='/'>homepage</a> that does exist.
      </div>
    </div>
  );
}
 
export default Custom404Error;
