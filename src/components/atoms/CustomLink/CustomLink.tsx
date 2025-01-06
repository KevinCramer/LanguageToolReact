import './CustomLink.scss';

type CustomLinkProps = {
  onClick: any;
  children: React.ReactNode;
  inline?: boolean;
  isWhite?: boolean;
}

const CustomLink = ({ onClick, children, inline = false, isWhite = false }: CustomLinkProps) => {

  return (
    <div
      onClick={onClick}>
      {children}
    </div>
  );
}

export default CustomLink;