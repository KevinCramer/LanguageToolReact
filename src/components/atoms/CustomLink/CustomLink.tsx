import './CustomLink.scss';

type CustomLinkProps = {
  onClick: any;
  children: React.ReactNode;
  inline?: boolean;
}

const CustomLink = ({ onClick, children, inline = false }: CustomLinkProps) => {

  return (
    <div style={{ color: 'rgb(13, 110,253)', 
      textDecoration: 'underline', textAlign: 'center',
      display: inline ? 'inline' : '' }} 
    onClick={onClick}>
      {children}
    </div>
  );
}

export default CustomLink;