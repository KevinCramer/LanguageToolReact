import './Custom404Error.scss'

const Custom404Error = () => { 
 
  return (
    <>
      <div className="custom-404-container">
        <div className="text-wrapper">
        Oh no! That page does not exist. Head to our <a href='/'>homepage</a> that does exist.
        </div>   
      </div>
    </>
  );
}
 
export default Custom404Error;
