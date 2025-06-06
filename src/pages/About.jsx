// src/components/About.jsx
import React from "react";

export default function About() {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          About Tech Digital Solutions
        </h2>
        <p className="text-lg text-gray-700 leading-8">
          Tech Digital Solutions is a forward-thinking digital marketing agency
          dedicated to helping businesses grow online. We specialize in creating
          stunning websites, optimizing them for search engines, and executing
          strategic marketing campaigns across various digital platforms.
        </p>
        <p className="text-lg text-gray-700 leading-8 mt-6">
          With a team of passionate designers, developers, and marketers, we aim
          to deliver results-driven solutions tailored to each client’s goals.
          Whether you’re a startup or an established brand, we’re here to
          elevate your digital presence.
        </p>
      </div>
    </section>
  );
}
