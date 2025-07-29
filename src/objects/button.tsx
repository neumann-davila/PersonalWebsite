
type ButtonProps = {
  id: string;
  href: string;
  children: React.ReactNode;
}

export function Button( {id, href, children}: ButtonProps) {
  return (
    <a className="button" id={id} href={href} target="_blank">
      {children}
    </a>
  );
}