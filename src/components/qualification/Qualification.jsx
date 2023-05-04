import './qualification.css';
import { useState } from 'react';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className='qualification section'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My personal journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}>
            <i className='uil uil-graduation-cap qualification__icon'></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}>
            <i className='uil uil-briefcase-alt qualification__icon'></i>
            Experience
          </div>
        </div>
        <div className='qualification__sections'>
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  JavaScript/React crashing courses
                </h3>
                <span className='qualification__subtitle'>Youtube</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2023
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>
                  JavaScript/React courses
                </h3>
                <span className='qualification__subtitle'>Codecademy</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2023
                </div>
              </div>
            </div>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>HTML/CSS courses</h3>
                <span className='qualification__subtitle'>Udemy</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2022
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Economics</h3>
                <span className='qualification__subtitle'>
                  Financial University under the Government of the Russian
                  Federation
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2007 - 2012
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Sales manager</h3>
                <span className='qualification__subtitle'>AMT Group</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2017 - 2022
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Purchasing manager</h3>
                <span className='qualification__subtitle'>
                  Atos IT Solutions and Services
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2012 - 2014
                </div>
              </div>
            </div>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Sales manager</h3>
                <span className='qualification__subtitle'>Alenir Leasing</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2011 - 2012
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Intern</h3>
                <span className='qualification__subtitle'>
                  Banque Societe Generale Vostok
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2010
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Qualification;
