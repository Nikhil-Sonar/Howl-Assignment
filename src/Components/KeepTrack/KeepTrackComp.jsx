import React from 'react';
import './KeepTrack.css';
import deskImg from 'D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/HowlAssignment/howl/src/assets/study-desk-img.jpeg';
import arrowIcon from 'D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/HowlAssignment/howl/src/assets/icons8-right-arrow-100.png';



const KeepTrackComp = () => {

  // const [countLength, setCountLength] = useState(16);

  // const jsxElements = [];
  // for (let i = 0; i < countLength; i++) {
  //   jsxElements.push(
  //     <img className='client-img' src={deskImg}/>
  //   );
  // }

  return (
    <section className='section-5'>
      <div className='Keep-track-parent'>
      <div className="Keep-track-card-one">
        <div className="Keep-track-txt">Ready to accelerate your business? <span className='track-talk'>Let's talk.</span></div>
        </div>
          <div className="Keep-track-card">
             <div className="Keep-track-card-text">
                   Keep track<br/> of the Wolves<br/>
                   <img src={arrowIcon} alt="" />
             </div>
             <div className="Keep-track-card-img">
                   <img className='Keep-track-img' src={deskImg} alt="" />
                   <img className='Keep-track-img' src={deskImg} alt="" />
                   <img className='Keep-track-img' src={deskImg} alt="" />
             </div>
          </div>
        </div>
    </section>
  )
}

export default KeepTrackComp;
