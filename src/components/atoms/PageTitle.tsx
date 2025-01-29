import { consistentStyles } from '../../constants';

const PageTitle = ({ title, colour }:any) => {
  return (
    <h4 className={`${colour === 'white' ? consistentStyles.textWhite : consistentStyles.textBlack} text-center text-2xl py-12`}>
      {title}
    </h4>
  );
};

export default PageTitle;
