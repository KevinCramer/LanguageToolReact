const Custom404Error = () => { 
  return (
    <div className='flex flex-col flex-1 justify-center  px-4'>
      <div className='max-w-screen-md mx-auto  md:text-lg rounded-md'>
        Oh no! That page does not exist.
      </div>   
      <div className='max-w-screen-md mx-auto  md:text-lg rounded-md'>
      Head to our <a className='text-blue-500 underline' href='/'>homepage</a> that does exist.
      </div>
    </div>
  );
}
 
export default Custom404Error;
