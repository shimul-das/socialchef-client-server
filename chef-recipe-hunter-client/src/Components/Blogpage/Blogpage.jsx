import ReactToPdf from 'react-to-pdf';
import Blogs from '../Blogs/Blogs';
import { useRef } from 'react';
import './blogpage.css'

const Blogpage = () => {
  const ref = useRef();

  const options = {
    orientation: 'portrait',
    unit: 'in',
    format: [8.3,12.5],
  };
  
  
  

  return (
    <div className='blog-container'>
      <div ref={ref}>
        <Blogs></Blogs>
        <div className='text-center pt-3'>
        <ReactToPdf  targetRef={ref} filename="mypdf.pdf" options={options}>
        {({ toPdf }) => (
          <button style={{backgroundColor:"#FF8E88"}} onClick={toPdf}>Download PDF</button>
        )}
      </ReactToPdf>
      </div>
      </div>
    </div>
  );
};

export default Blogpage;