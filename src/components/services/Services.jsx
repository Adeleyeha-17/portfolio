import { useState } from "react"
import "./services.css"

const Services = () => {
   const [toggleState, setToggleState] = useState(0);

   const toggleTab = (index) => {
      setToggleState(index)
   }
  return (
   <section className="services section" id="services">
      <h2 className="section__title about">Services</h2>

      <div className="services__container container grid">
         <div className="services__content">
            <div>
               <i className="uil uil-web-grid services__icons"></i>
               <h3 className="services__title">Web <br /> Developement</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>
               View More {" "} <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
               <div className="services__modal-content">
                  <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                  <h3 className="services__modal-title">Web Development</h3>
                  <p className="services__modal-description">With over 2 years of experience, I specialize in crafting exceptional web solutions that help clients and companies achieve their digital goals.</p>

                  <ul className="services__modal-services grid">

                  <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Responsive Design
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           Web Development
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Website maintenance and optimization
                        </p>
                     </li>
                    
                  </ul>
               </div>
            </div>
         </div>

         <div className="services__content">
            <div>
               <i className="uil uil-setting services__icons"></i>
               <h3 className="services__title">Network <br /> Engineer</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(2)}>
               View More <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
               <div className="services__modal-content">
                  <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                  <h3 className="services__modal-title">Network Engineer</h3>
                  <p className="services__modal-description">As a dedicated network engineer, I am committed to delivering high-quality services that ensure reliable connectivity, enhanced security, and optimized performance for clients and companies.</p>

                  <ul className="services__modal-services grid">
                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Network Design and Architecture
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Network Implementation and Configuration
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Network Monitoring and Troubleshooting
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Network Security
                        </p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>

         <div className="services__content">
            <div>
            <i className="uil uil-chart"></i>
                           <h3 className="services__title">BI <br /> Engineer</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(3)}>
               View More <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
               <div className="services__modal-content">
                  <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                  <h3 className="services__modal-title">Data Analysis</h3>
                  <p className="services__modal-description">I specialize in leveraging the capabilities of Power BI to transform raw data into actionable insights, empowering organizations to make informed and strategic decisions</p>

                  <ul className="services__modal-services grid">
                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Data Modeling and Transformation
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Customized Dashboards and Reports
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Data Integration and Connectivity
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Collaboration and Sharing
                        </p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>

         <div className="services__content">
            <div>
            <i className="uil uil-presentation-play"></i>
            <h3 className="services__title">3D <br /> Animation</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(4)}>
               View More <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
               <div className="services__modal-content">
                  <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                  <h3 className="services__modal-title">3D Animation</h3>
                  <p className="services__modal-description">Services I provide as a 3D Animator specializing in Blender include:</p>

                  <ul className="services__modal-services grid">
                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Character Animation
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Visual Effects
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Rendering and Post-Production
                        </p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </section>
   )
}

export default Services