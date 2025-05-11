import React from "react";
import Image from "next/image";

const TrustedBySection = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 text-white py-16 px-8">
      {/* Centered Title */}
      <h2 className="text-lg font-semibold mb-6">Trusted by leading data teams</h2>

      {/* Grid Layout for Logos */}
      <div className="grid grid-cols-5 gap-6">
        <Image src="reddit-logo.png" alt="Reddit" className="h-12 mx-auto"/>
        <Image src="notion-logo.png" alt="Notion" className="h-12 mx-auto"/>
        <Image src="brex-logo.png" alt="Brex" className="h-12 mx-auto"/>
        <Image src="anthropic-logo.png" alt="Anthropic" className="h-12 mx-auto"/>
        <Image src="hinge-logo.png" alt="Hinge" className="h-12 mx-auto"/>
        <Image src="seatgeek-logo.png" alt="SeatGeek" className="h-12 mx-auto"/>
        <Image src="babylist-logo.png" alt="Babylist" className="h-12 mx-auto"/>
        <Image src="clickup-logo.png" alt="ClickUp" className="h-12 mx-auto"/>
        <Image src="loom-logo.png" alt="Loom" className="h-12 mx-auto"/>
        <Image src="alltrails-logo.png" alt="AllTrails" className="h-12 mx-auto"/>
        <Image src="ramp-logo.png" alt="Ramp" className="h-12 mx-auto"/>
        <Image src="recursion-logo.png" alt="Recursion" className="h-12 mx-auto"/>
        <Image src="algolia-logo.png" alt="Algolia" className="h-12 mx-auto"/>
        <Image src="fivetran-logo.png" alt="Fivetran" className="h-12 mx-auto"/>
        <Image src="modern-treasury-logo.png" alt="Modern Treasury" className="h-12 mx-auto"/>
        <Image src="hightouch-logo.png" alt="Hightouch" className="h-12 mx-auto"/>
        <Image src="avalara-logo.png" alt="Avalara" className="h-12 mx-auto"/>
        <Image src="chesapeake-energy-logo.png" alt="Chesapeake Energy" className="h-12 mx-auto"/>
        <Image src="safetyculture-logo.png" alt="SafetyCulture" className="h-12 mx-auto"/>
        <Image src="on-logo.png" alt="On" className="h-12 mx-auto"/>
        <Image src="sedgwick-logo.png" alt="Sedgwick" className="h-12 mx-auto"/>
        <Image src="appfolio-logo.png" alt="Appfolio" className="h-12 mx-auto"/>
        <Image src="doximity-logo.png" alt="Doximity" className="h-12 mx-auto"/>
        <Image src="purestorage-logo.png" alt="PureStorage" className="h-12 mx-auto"/>
      </div>
    </div>
  );
};

export default TrustedBySection;
