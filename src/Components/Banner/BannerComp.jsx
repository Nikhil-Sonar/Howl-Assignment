import React, { useState, useEffect } from 'react';
import './Banner.css';
import peopleGrp from 'D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/HowlAssignment/howl/src/assets/people-Group.jpg';
import deskImg from 'D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/HowlAssignment/howl/src/assets/study-desk-img.jpeg';

const BannerComp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 150); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className={`section-2 ${isVisible ? 'visible' : ''}`}>
            <div className="banner-parent">
                <div className="banner-parent-card">
                    <div className="banner-parent-card-text">
                        <p className='banner-txt-one'>Lorem ipsum dolor sit amet modi consectetur adipisicing elit. Ad ullam pariatur modi tempore sapiente sunt ab architecto, distinctio autem sed exercitationem ipsa? Blanditiis aliquam eum esse facere quidem dicta atque!</p>
                        <h1 className='banner-h1-one'>Your</h1>
                        <h1 className='banner-h1-two' >Growth</h1>
                        <h1 className='banner-h1-three' >Partners</h1>
                    </div>
                    <div className="banner-parent-card-img">
                        <div className="image-parent">
                            <img className='grp-img' src={peopleGrp} alt="" />
                        </div>
                        <div className="image-child">
                            <img className='desk-img' src={deskImg} alt="" />
                        </div>
                    </div>
                </div>
                <p className='banner-txt-two'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ullam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse necessitatibus, iste cum recusandae ipsa delectus minima animi, rerum adipisci veritatis mollitia ratione explicabo placeat, modi illum magni excepturi vero eligendi!</p>
            </div>
        </section>
    );
}

export default BannerComp;
