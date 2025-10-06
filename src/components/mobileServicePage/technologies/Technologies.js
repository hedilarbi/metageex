import React from "react";
import {
  FaAws,
  FaDocker,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { SiFlutter, SiMongodb, SiSupabase } from "react-icons/si";
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

        <div className="grid md:grid-cols-4 gap-8 mb-16 text-white">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-6">Client</h3>
            <div className="space-y-4">
              <div className={styles.container}>
                <div className="text-blue-500 mb-2 text-center text-4xl flex justify-center">
                  <FaReact />
                </div>
                <div className="font-medium">React Native</div>
              </div>

              <div className={styles.container}>
                <div className="text-blue-500 mb-2 text-center text-4xl flex justify-center">
                  <SiFlutter />
                </div>
                <div className="font-medium">Flutter</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-6">Backend</h3>
            <div className="space-y-4">
              <div className={styles.container}>
                <div className="text-4xl text-green-600 mb-2 flex justify-center">
                  <FaNodeJs />
                </div>
                <div className="font-medium">Node.js</div>
              </div>
              <div className={styles.container}>
                <div className="text-4xl text-yellow-600 mb-2 flex justify-center">
                  <FaPython />
                </div>
                <div className="font-medium">Python</div>
              </div>
              <div className={styles.container}>
                <div className="text-4xl text-purple-600 mb-2 flex justify-center">
                  <FaPhp />
                </div>
                <div className="font-medium">PHP</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-6">Databases</h3>
            <div className="space-y-4">
              <div className={styles.container}>
                <div className="text-4xl text-green-600 mb-2 flex justify-center">
                  <SiMongodb />
                </div>
                <div className="font-medium">MongoDB</div>
              </div>
              <div className={styles.container}>
                <div className="text-4xl text-yellow-600 mb-2 flex justify-center">
                  <IoLogoFirebase />
                </div>
                <div className="font-medium">Firebase</div>
              </div>
              <div className={styles.container}>
                <div className="text-4xl text-green-600 mb-2 flex justify-center">
                  <SiSupabase />
                </div>
                <div className="font-medium">Supabase</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-6">
              Cloud &amp; DevOps
            </h3>
            <div className="space-y-4">
              <div className={styles.container}>
                <div className="text-4xl text-orange-500 mb-2 flex justify-center">
                  <FaAws />
                </div>
                <div className="font-medium">AWS</div>
              </div>

              <div className={styles.container}>
                <div className="text-4xl text-blue-500 mb-2 flex justify-center">
                  <FaDocker />
                </div>
                <div className="font-medium">Docker</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
