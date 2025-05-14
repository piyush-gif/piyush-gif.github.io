import data from '../assets/certificates/dataAna.pdf'
import sql from '../assets/certificates/sql.pdf'
import python from '../assets/certificates/python.pdf'
import { useState } from 'react';

const Certification = () => {
  const content =[
    { title: 'Python Essential Training', about:['Data Analysis','Data Visualization','Data Analytics'], link:python, id: 1 },
    { title: 'SQL for Data Analysis', about: ['Data Analysis','SQL'], link:sql, id: 2 },
    { title: 'Career Essentials in Data Analysis', about: ['python'], link: data, id: 3 }
  ]
  const [open, setOpen] = useState(null);
  return (
    <>
    <h1 className="header">Certifications</h1>
    <div className="certifications"> 
      <div className="certicard">
        {content.map((cont) =>(
          <div key={cont.id}>
            <div className="certificates">
              <h3>{cont.title}</h3>
              <button  onClick={() =>setOpen(open === cont.id ? null : cont.id)}>drop</button>
              </div>
            {open === cont.id && (
              <div className="drop-down-content">
                <div>Skills</div>
                    <ul>
                      {cont.about.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                      <a href={cont.link} target="_blank" rel="noreferrer" >CERTIFICATE</a>
                </div>
                  )}

          </div>
        ))}
      </div>
    </div>
    </>
)};

export default Certification;