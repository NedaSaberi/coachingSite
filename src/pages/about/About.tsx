import { useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import FreeConsulation from "../../components/freeCons/FreeConsulation";

export default function About() {
   
  return (
    <>
      <div className="first-view">
        <div className="first-view-content bg-orange">
          <h1>About</h1>
          <p>Specializing in Career Mentoring</p>
        </div>
      </div>
      <div className="aboutPart w-100">
        <div className="title text-orange mt-5 mb-3 text-center">
          About Meghdad
        </div>
        <h1 className="text-center">Meet Meghdad - A Modern-Day</h1>
        <h1 className="text-center">Life Coach & Advisor!</h1>
        <p className="mt-5 aboutBody text-center">
          There are many variations of passages of psum available, but the
          majority have suffered alteration in some form, by injected humour, or
          randomised words which don’t look even slightly believable. If you are
          going to use a passage of you need to be sure there isn’t anything
          embarrassing hidden in the middle of text. Lorem ipsum is simply free
          text dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minilor
          in reprehenderit in voluptate.
        </p>
        <div className="about-images">
          <img src="/images/about-left.jpg" alt="" />
          <img src="/images/about-right.jpg" alt="" />
        </div>
      </div>
      <div className="stats-back w-100 position-relative">
        <img src="/images/stats.jpg" alt="" className="w-100 h-100" />
        <div className="stats-front position-absolute fixed-top w-100 h-100 text-center p-5">
          <h5 className="text-orange mt-3 mb-5">LATEST NUMBERS</h5>
          <h1 className="text-white">Leadership Stats</h1>
          <div className="numbers-wrapper d-flex justify-content-around my-5 p-5">
            <div className="numbers">
              <div className="num">26</div>
              <div className="sub">Years of Working</div>
            </div>
            <div className="numbers">
              <div className="num">30</div>
              <div className="sub">Reliable Clients</div>
            </div>
            <div className="numbers">
              <div className="num">48</div>
              <div className="sub">Success Stories</div>
            </div>
            <div className="numbers">
              <div className="num">12</div>
              <div className="sub">Expert Advisors</div>
            </div>
          </div>
        </div>
      </div>
      <div className="consulation p-5">
        <h1 className="my-5">Get Started Now with Life Coaching</h1>
        <p className="cons-body">
          Quisque porta nibh quis nibh scelerisque auctor. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean sagittis eget neque ac consequat.
        </p>
        <button className="my-5 p-3 bg-orange text-white border">
          FREE CONSULATION
        </button>
      </div>
      <div className="logoipsum">???</div>

      <div className="testimonials p-5">
        <h5 className="text-orange my-3 text-center">OUR TESTIMONIALS</h5>
        <h1 className="text-center">What People Are Saying</h1>
        <div className="comments d-flex justify-content-around my-5">
          <div className="people">
            <i className="fa-solid fa-quote-left text-orange"></i>
            <p>
              Duis rhoncus orci utedn metus rhoncus, non is dictum purus
              bibendum. Suspendisse id orci sit amet justo interdum hendrerit
              sagittis. Nulla semper pharetra lacinia. Maecenas gravida dapibus
              neque id dictum.
            </p>
            <div className="autho">
              <img src="/images/Meghdad.jpg" alt="" />
              <div className="name">Meghdad Hadidi</div>
              <div className="position">CEO</div>
            </div>
          </div>
          <div className="people">
            <i className="fa-solid fa-quote-left text-orange"></i>
            <p>
              Duis rhoncus orci utedn metus rhoncus, non is dictum purus
              bibendum. Suspendisse id orci sit amet justo interdum hendrerit
              sagittis. Nulla semper pharetra lacinia. Maecenas gravida dapibus
              neque id dictum.
            </p>
            <div className="autho">
              <img src="/images/Meghdad.jpg" alt="" />
              <div className="name">Meghdad Hadidi</div>
              <div className="position">CEO</div>
            </div>
          </div>
          <div className="people">
            <i className="fa-solid fa-quote-left text-orange"></i>
            <p>
              Duis rhoncus orci utedn metus rhoncus, non is dictum purus
              bibendum. Suspendisse id orci sit amet justo interdum hendrerit
              sagittis. Nulla semper pharetra lacinia. Maecenas gravida dapibus
              neque id dictum.
            </p>
            <div className="autho">
              <img src="/images/Meghdad.jpg" alt="" />
              <div className="name">Meghdad Hadidi</div>
              <div className="position">CEO</div>
            </div>
          </div>
        </div>
      </div>
        <FreeConsulation/>
        <Footer/>
    </>
  );
}
