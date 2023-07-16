"use client";

import Image from "next/image";
import "pure-react-carousel/dist/react-carousel.es.css";
import salumailPreview1 from "../../media/images/projects/salu-mail/preview1.png";

export default function SaluMailPage() {
  return (
    <div className="py-16 relative px-4 lg:px-8 mx-auto text-white z-10">
      <div className="max-w-6xl mx-auto text-white">
        <div className="space-y-6">
          <img src="/salumail.svg" draggable={false} width={60} />
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Salu Mail</h1>
            <p className="text-base md:text-xl text-neutral-300">
              A privacy focused email service.
            </p>

            <ul className="text-sm md:text-base pt-3 text-neutral-200 space-y-5 list-inside list-disc tracking-wide">
              <li>
                Full iOS Support with{" "}
                <a
                  href="https://reactnative.dev/"
                  target="_blank"
                  className="text-teal-400 hover:text-teal-300"
                >
                  React Native
                </a>
                .
              </li>
              <li>Hide your email with anonymous generated emails.</li>
              <li>
                Integrated with a{" "}
                <a
                  href="https://chrome.google.com/webstore/detail/salu-mail/fgibddhpknkpbdhadbfaefhfkcfjemnk?hl=en-GB"
                  target="_blank"
                  className="text-teal-400 hover:text-teal-300"
                >
                  Chrome Extension
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl overflow-hidden mx-auto pt-8">
        <div className="w-[200%] -ml-5 sm:-ml-8 md:ml-0 md:w-full">
          <Image
            src={salumailPreview1}
            alt="SaluMail Preview"
            className="object-cover"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-8">
        <h1 className="text-4xl">More content coming soon!</h1>
      </div>
    </div>
  );
}
