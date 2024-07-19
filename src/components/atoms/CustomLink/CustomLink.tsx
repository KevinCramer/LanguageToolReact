import './CustomLink.scss';

type CustomLinkProps = {
  onClick: any;
  children: React.ReactNode;
}

const CustomLink = ({ onClick, children }: CustomLinkProps) => {

  return (
    <div style={{ color: 'rgb(13, 110,253)', 
      textDecoration: 'underline', textAlign: 'center' }} 
    onClick={onClick}>
      {children}
    </div>
  );
}

export default CustomLink;