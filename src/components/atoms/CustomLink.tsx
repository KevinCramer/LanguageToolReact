type CustomLinkProps = {
  onClick: any;
  children: React.ReactNode;
  inline?: boolean;
  isWhite?: boolean;
}

const CustomLink = ({ onClick, children, inline = false, isWhite = false }: CustomLinkProps) => {

  return (
    <div className='text-blue-500 underline cursor-pointer'
      onClick={onClick}>
      {children}
    </div>
  );
}

export default CustomLink;