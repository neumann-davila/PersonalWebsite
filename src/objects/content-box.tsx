
type LinkInfo = {
  linkName: string;
  link: string;
}
type ContentBoxProps = {
  id: string;
  imgPath: string;
  title: string;
  date?: string;
  links?: LinkInfo[]
  children: React.ReactNode;
}

export function ContentBox( { 
  id,
  imgPath,
  title,
  date = "NULL",
  links = [{linkName: "NULL", link: "NULL"}],
  children
}: ContentBoxProps) {
  let dateObject = null;

  if(date != "NULL") {
    dateObject = <div>{date}</div>
  }

  return (
    <div className="content-box" id={id}>
      <img src={imgPath} className='content-box-img'/>
      <div className='title'>
        {title}
      </div>
      {dateObject}
      <div className="info">
        {children}
      </div>
    </div>
  );
}