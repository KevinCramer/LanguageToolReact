import { consistentStyles } from '../../constants';

const PageTitle = ({ title }:any) => {
  return (
    <h4 className={`${consistentStyles.textBlack} text-center text-2xl py-12`}>
      {title}
    </h4>
  );
};

export default PageTitle;
