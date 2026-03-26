"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function Hero() {

  return (
    <div className="relative bg-black">

            <div className="text-center">
               <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">One Platform, <span className="text-teal-300">Complete Solution</span></h1>
                <p className="text-xl md:text-2xl text-gray-400">Learnnexus unifies your school's core system into a single, intelligent where 
                    <br />data flow freely and insights emerge automatically.</p>
            </div>

      {/* Features Slider */}
      <div className="w-full flex justify-center py-20 bg-midnight-600">
        <Swiper
          modules={[Navigation, EffectCoverflow, Autoplay]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={1.5}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          className="w-250 max-w-full"
        >
           
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="bg-white/10 backdrop-blur-lg text-white p-10 rounded-3xl shadow-2xl min-h-125">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs text-teal-300 bg-white-500/20 backdrop-blur-md px-3 py-1 rounded-full">STUDENT PROFILES</span>
                <span className="text-xs text-teal-300 bg-white-500/20 backdrop-blur-md px-3 py-1 rounded-full">ATTENDANCE</span>
                <span className="text-xs text-teal-300 bg-white-500/20 backdrop-blur-md px-3 py-1 rounded-full">TRANSCRIPT</span>
                <span className="text-xs text-teal-300 bg-white-500/20 backdrop-blur-md px-3 py-1 rounded-full">SCHEDULING</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">Student Information System</h2>
              <p>Centralized student records, enrollment, attendance, grading scheduling, and compliance - all in one secure database.</p>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="bg-white/10 backdrop-blur-lg text-white p-10 rounded-3xl shadow-2xl min-h-125">
              <div className="flex  flex-wrap gap-2 mb-3">
                <span className="text-xs text-teal-300 bg-white-500/20 backdrop-blur-md px-3 py-1 rounded-full">COURSE BUILDER</span>
                <span className="text-xs text-teal-300 bg-white-500/20 backdrop-blur-md px-3 py-1 rounded-full">ASSIGNMENT</span>
                <span className="text-xs text-teal-300 bg-white-500/20 backdrop-blur-md px-3 py-1 rounded-full">ASSESSMENT</span>
                <span className="text-xs text-teal-300 bg-white-500/20 backdrop-blur-md px-3 py-1 rounded-full">TRACKING</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">Learning Management System</h2>
              <p>Course delivery, assignment, assessment and progress tracking that integrate seamlessly with student data.</p>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="bg-white/10 backdrop-blur-lg text-white p-10 rounded-3xl shadow-2xl min-h-125">
              <div className="flex  flex-wrap gap-2 mb-3">
                <span className="text-xs text-teal-300 bg-white-500/20 backdrop-blur-md px-3 py-1 rounded-full">ADMIN VIEW</span>
                <span className="text-xs text-teal-300 bg-white-500/20 backdrop-blur-md px-3 py-1 rounded-full">TEACHER VIEW</span>
                <span className="text-xs text-teal-300 bg-white-500/20 backdrop-blur-md px-3 py-1 rounded-full">STUDENT VIEW</span>
                <span className="text-xs text-teal-300 bg-white-500/20 backdrop-blur-md px-3 py-1 rounded-full">PARENT VIEW</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">Role-Based Dashboard</h2>
              <p>Personalized experience for administrators, teachers, student, and parents, each seeing exactly what they need</p>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="bg-white/10 backdrop-blur-lg text-white p-10 rounded-3xl shadow-2xl min-h-125">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs text-teal-300 bg-white-500/20 backdrop-blur-md px-3 py-1 rounded-full">PREDICTION</span>
                <span className="text-xs text-teal-300 bg-white-500/20 backdrop-blur-md px-3 py-1 rounded-full">AUTOMATIO</span>
                <span className="text-xs text-teal-300 bg-white-500/20 backdrop-blur-md px-3 py-1 rounded-full">INSIGHT</span>
                <span className="text-xs text-teal-300 bg-white-500/20 backdrop-blur-md px-3 py-1 rounded-full">RECOMMENDATION</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">AI Intelligence Layer</h2>
              <p>Embedded AI that analyzes data, surface insight, automates workflows and supports decisions across all systems.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}