
import { CiPill } from "react-icons/ci";
//import {useState,useEffect} from 'react'
import './App.css'

import fatigue from './icons/baby.png';
import constipation from './icons/constipation.png';
import dizziness from './icons/dizziness.png';
import cutlery from './icons/cutlery.png';
import headache from './icons/headache.png';
import nausea from './icons/nausea.png';
import syringe from './icons/syringe.png';


const Apps = () =>{
  // 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
    return( 
        <div className="home-container container">
         <div className="header-container row d-flex justify-content-center">
          <div className='col-6'>
            <p>MEDICATION</p>
            <h3><span><CiPill /></span>Active Medication (3)</h3>
          </div>
          <div className='col-2'>
            <p className="headers">PATIENT NAME</p>
            <p>Joyneel Acharya</p>
          </div>
          <div className='col-2'>
            <p className="headers">DATE OF BIRTH</p>
            <p>16 May 1991</p>
          </div>
          <div className='col-2'>
            <p className="headers">DATE OF ISSUE</p>
            <p>30 Nov 2020</p>
          </div>
         </div>
         <hr class="dotted dotted1"></hr>
         <hr class="dotted dotted2"></hr>
         <div className="div1">
          <p>IBUPROFEN 600MG TAB</p>
          <div className="row profile-container">
            <div class="tablet col-3">
              <div className="d-flex justify-content-around">
                <div className="text-center">
                  <p className="headers">SIDE A</p>
                  <p className="pill">600</p>
                </div>
                <div className="text-center">
                  <p className="headers">SIDE B</p>
                  <p className="pill">600</p>
                </div>
              </div>
              <hr class="dotted"></hr>
              <p className="headers"> REASON FOR MEDICATION</p>
              <p>For treatment of <br />lower back pain.</p>
            </div>
            <div className="direction col-6">
              <p className="headers">DIRECTION /NOTES</p>
              <p className="description"><span className="number">1</span>tablet by mouth <br/><span className="number">4</span>times a day with food<br />every <span className="number">4</span>hours.</p>
            </div>
            <div class="side-effects col-3">
              <p className="headers">POSSIBLE SIDE EFFECTS</p>
              <div className="d-flex mr-2">
                <img src={headache} alt ="headache"  className="icons"/> 
                <p className="conditions">Headache</p>
              </div>
              <div className="d-flex mr-2">
                <img src={dizziness} alt ="dizziness"  className="icons"/> 
                <p className="conditions">Dizziness</p>
              </div>
              <p className="headers">GET MEDICAL HELP IF</p>
              <i>Experiencing chest pain, <br />shortness of breath, <br /> and rapid weight gain.</i>
            </div>
          </div>
         </div>
         <hr class="dotted"></hr>
         <div className="div2">
          <p >INSULIN,GLARGINE, HUMAN 100 UNT/ML INJ</p>
          <div className="row profile-container">
            <div class="tablet col-3">
              <div className="tab-icons-container">
                <p className="headers">APPEARANCE</p>
              </div>
              <div className="syringe-container">
               <img src={syringe} alt="syringe" className="icon-syringe"/>
              </div>
              
              <hr class="dotted"></hr>
              <p className="headers"> REASON FOR MEDICATION</p>
              
              <p>Reduce blood pressure.</p>
            </div>
            <div className="direction col-6">
              <p className="headers">DIRECTION /NOTES</p>
              <p className="description"><span className="number">1</span> injection at bedtime.</p>
              <p class="description-2" >Inject 10 ml vial under the skin as directed for <br />
                  28 days inject 25 units under the skin at bedtime <br />
                  do not mix with other insulins/discard open vials <br />
                  after 28 days.</p>
            </div>
            <div class="side-effects col-3">
              <p className="headers">POSSIBLE SIDE EFFECTS</p>
              <div className="d-flex mr-2">
                <img src={headache} alt ="headache"  className="icons"/> 
                <p className="conditions">Headache</p>
              </div>
              <div className="d-flex mr-2">
                <img src={fatigue} alt ="fatigue"  className="icons"/> 
                <p className="conditions">Fatigue</p>
              </div>
              <div className="d-flex mr-2">
                <img src={nausea} alt ="nausea"  className="icons"/> 
                <p className="conditions">Nausea</p>
              </div>
              <p className="headers">GET MEDICAL HELP IF</p>
              <i>Experiencing itching skin,<br />
              wheezing, and fast heart rate..</i>
            </div>
          </div>
         </div>
         <hr class="dotted"></hr>
         <div className="div3">
          <p className="headers">TERAZOSIN HCL 2MG CAPSULE</p>
          <div className="row profile-container">
            <div class="tablet col-3">
            <div className="d-flex justify-content-around">
                <div className="text-center">
                  <p className="headers">SIDE A</p>
                  <div className="d-flex">
                    <p className="pill-2 pill-2-first-half">AP0</p>
                    <p className="pill-2 pill-2-second-half">116</p>
                  </div>

                </div>
                <div className="text-center">
                  <p className="headers">SIDE B</p>
                  <div className="d-flex">
                    <p className="pill-2 pill-2-first-half"><span className="pill-empty">c</span></p>
                    <p className="pill-2 pill-2-second-half"><span className="pill-empty">c</span></p>
                  </div>

                  
                </div>
              </div>
              
              <hr class="dotted"></hr>
              <p className="headers"> REASON FOR MEDICATION</p>
              
              <p>Reduce blood pressure.</p>
            </div>
            <div className="direction col-6">
              <p className="headers">DIRECTION /NOTES</p>
              <p className="description"><span className="number">3</span>  capsules before bed.</p>
            </div>
            <div class="side-effects col-3">
              <p className="headers">POSSIBLE SIDE EFFECTS</p>
              <div className="d-flex mr-2">
                <img src={headache} alt ="headache"  className="icons"/> 
                <p className="conditions">Headache</p>
              </div>
              <div className="d-flex mr-2">
              <img src={dizziness} alt ="dizziness"  className="icons"/>
                <p className="conditions">Dizziness</p>
              </div>
              <div className="d-flex mr-2">
                <img src={constipation} alt ="constipation"  className="icons"/>
                <p className="conditions">Constipation</p>
              </div>
              <div className="d-flex mr-2">
                <img src={cutlery} alt ="food"  className="icons"/>
                <p className="conditions">Loss of appetite</p>
              </div>
              <div className="d-flex mr-2">
                <img src={fatigue} className="icons" alt ="fatigue"/>
                <p className="conditions">Fatigue</p>
              </div>
            </div>
          </div>
          <hr class="dotted"></hr>
        <footer className="footer"><strong>MEDICATIONS:</strong> ACTIVE MEDICATIOINS</footer>
         </div>
         
        </div>
    )
   
}
export default Apps