import './CustomLink.scss';

type CustomLinkProps = {
  onClick: any;
  children: React.ReactNode;
  inline?: boolean;
  isWhite?: boolean;
}

const CustomLink = ({ onClick, children, inline = false, isWhite = false }: CustomLinkProps) => {

  return (
    <div style={{ color: isWhite ? 'white' : 'rgb(13, 110,253)', 
      textDecoration: 'underline', textAlign: 'center',
      display: inline ? 'inline' : '' }} 
    onClick={onClick}>
      {children}
    </div>
  );
}

export default CustomLink;