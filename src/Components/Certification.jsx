
import { useState } from 'react';

const Certification = () => {
  const content =[
    { title: 'data analysis with sql', about: 'data is good', info: 'here', id: 1 },
    { title: 'python basics', about: 'python is cool', info: 'details here', id: 2 },
    { title: 'python basics', about: 'python is cool', info: 'details here', id: 3 }
  ]
  const [open, setOpen] = useState(null);
  return (
    <>
    <h1 className="header">Certifications</h1>
    <div className="certifications"> 
      <div className="certicard">
        {content.map((cont,id) =>(
          <div key={cont.id}>
            <div className="certificates">
              <h3>{cont.title}</h3>
              <button  onClick={() =>setOpen(open === id ? null : id)}>drop</button>
              </div>
            {open === id && (
              <div className="drop-down-content">
                {cont.info}
              </div>
          )}
          </div>
        ))}
      </div>
    </div>
    </>
)};

export default Certification;