import { Button } from './button.tsx'

type tag = {
  name: string;
  id: string;
}

type ContentBoxProps = {
  id: string;
  imgPath: string;
  title: string;
  date?: string;
  children: React.ReactNode;
  tags? : tag[]
  buttons?: JSX.Element[]
}

export function ContentBox( { 
  id,
  imgPath,
  title,
  date,
  children,
  tags,
  buttons,
}: ContentBoxProps) {
  return (
    <div className="content-box" id={id}>
      <img src={imgPath} className='content-box-img' id={`${id}-img`}/>
      <div className='title'>
        {title}
      </div>
      {date && <div>{date}</div>}
      <div className="info" id="content">
        {children}
      </div>
      <div className="tag-box">
        {tags && 
        tags.map((tag) => (
          <div className="tag" id={tag.id}>{tag.name}</div>
        ))
      }
      </div>
      <div>
        {buttons}
      </div>
    </div>
  );
}