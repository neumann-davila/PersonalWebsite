
type ContentBoxProps = {
  id: string;
  imgPath: string;
  title: string;
  date?: string;
  children: React.ReactNode;
}

export function ContentBox( { 
  id,
  imgPath,
  title,
  date = "NULL",
  children
}: ContentBoxProps) {
  let dateObject = null;

  if(date != "NULL") {
    dateObject = <div>{date}</div>
  }

  return (
    <div className="content-box" id={id}>
      <img src={imgPath} className='content-box-img' id={`${id}-img`}/>
      <div className='title'>
        {title}
      </div>
      {dateObject}
      <div className="info" id="content">
        {children}
      </div>
    </div>
  );
}