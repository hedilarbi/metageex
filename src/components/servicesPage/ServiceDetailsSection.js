"use client";

import React from "react";
import { FadeIn } from "../animations/FadeIn";
import { FaCheckCircle } from "react-icons/fa";

const ServiceDetailsSection = ({ data }) => {
  return (
    <section className="w-full py-20 bg-[#050A0F]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Features Column */}
        <div>
          <FadeIn direction="up">
            <h3 className="text-white font-inter font-bold text-3xl mb-10">
              Core Capabilities
            </h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.features.map((feature, idx) => (
              <FadeIn key={idx} delay={0.1 * idx} direction="up" className="h-full">
                <div className="bg-[#08101A] border border-white/5 rounded-2xl p-6 h-full hover:border-pr/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-pr/10 flex items-center justify-center mb-6">
                    <div className="w-3 h-3 rounded-full bg-pr" />
                  </div>
                  <h4 className="text-white font-inter font-medium text-xl mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-white/60 font-inter font-light text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Benefits Column */}
        <div className="bg-[#08101A] border border-white/5 rounded-3xl p-10 lg:p-12 h-fit sticky top-32">
          <FadeIn direction="up">
            <h3 className="text-white font-inter font-bold text-3xl mb-8">
              Business Outcomes
            </h3>
            <p className="text-white/60 font-inter font-light mb-10 leading-relaxed">
              We focus on delivering measurable value. Here is what you can expect when partnering with us for this service:
            </p>
          </FadeIn>
          
          <ul className="space-y-6">
            {data.benefits.map((benefit, idx) => (
              <FadeIn key={idx} delay={0.1 * idx} direction="left">
                <li className="flex items-start gap-4">
                  <FaCheckCircle className="text-pr text-xl flex-shrink-0 mt-1" />
                  <span className="text-white font-inter font-medium text-lg">
                    {benefit}
                  </span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  );
};

export default ServiceDetailsSection;
