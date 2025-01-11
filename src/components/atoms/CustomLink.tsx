type CustomLinkProps = {
  onClick: any;
  children: React.ReactNode;
  inline?: boolean;
  isWhite?: boolean;
}

const CustomLink = ({ onClick, children, inline = false, isWhite = false }: CustomLinkProps) => {
  const color = isWhite ? 'white' : 'blue'
  return (
    <div className={`text-${color}-500 underline cursor-pointer`}
      onClick={onClick}>
      {children}
    </div>
  );
}

export default CustomLink;