import React from "react";
import { FaReact, FaWordpress } from "react-icons/fa6";

import { SiNextdotjs, SiPrestashop } from "react-icons/si";
import styles from "./FeatureCard.module.css";
const Technologies = () => {
  return (
    <section id="technologies" className="md:pb-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full text-center flex flex-col items-center mb-16">
          <h2 className="font-inter text-white font-semibold lg:text-4xl text-center text-xl">
            Technologies &amp; Outils
            <div className="titleUnderline" />
          </h2>
          <p className="font-inter font-normal text-white text-opacity-60  mt-8 leading-relaxed lg:text-2xl text-base">
            Nous utilisons les technologies les plus récentes et éprouvées pour
            garantir des applications performantes et évolutives
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 text-white">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-6">CMS</h3>
            <div className="space-y-4">
              <div className={styles.container}>
                <div className="text-blue-500 mb-2 text-center text-4xl flex justify-center">
                  <FaWordpress />
                </div>
                <div className="font-medium">WordPress</div>
              </div>

              <div className={styles.container}>
                <div className="text-black mb-2 text-center text-4xl flex justify-center">
                  <SiPrestashop />
                </div>
                <div className="font-medium">PrestaShop</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-6">Frontend</h3>
            <div className="space-y-4">
              <div className={styles.container}>
                <div className="text-blue-500 mb-2 text-center text-4xl flex justify-center">
                  <FaReact />
                </div>
                <div className="font-medium">React.js</div>
              </div>

              <div className={styles.container}>
                <div className="text-black mb-2 text-center text-4xl flex justify-center">
                  <SiNextdotjs />
                </div>
                <div className="font-medium">Next.js</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
