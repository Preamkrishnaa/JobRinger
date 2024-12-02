import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JobCard from "./components/JobCard";
import "./components/Layout.css";

function App() {
  return (
    <>
      <Header />
      <main className="main-container">
        <section className="hero">
          <h2>Find Your Dream Job</h2>
          <p>Explore opportunities from top companies.</p>
        </section>
        <section className="jobs-section">
          <h2>Available Jobs</h2>
          <div className="jobs-list">
            <JobCard
              title="Frontend Developer"
              company="TechCorp"
              experience="0-1 Years"
              location="Vijayawada, Andhra Pradesh"
            />
            <JobCard
              title="Backend Engineer"
              company="Innovatech"
              experience="1-3 Years"
              location="Pune, Maharastra"
            />
            <JobCard
              title="Software Engineer"
              company="Infotech"
              experience="0-1 Years"
              location="Bangalore, Karnataka"
            />
            <JobCard
              title="Backend Engineer"
              company="Amazon"
              experience="2-5 Years"
              location="Hyderabad, Telangana"
            />
            <JobCard
              title="Python Developer"
              company="Wipro"
              experience="1-3 Years"
              location="Pune, Maharastra"
            />
            <JobCard
              title="SQL Developer"
              company="TCS"
              experience="0-1 Years"
              location="Bangalore, Karnataka"
            />
            <JobCard
              title="Power BI"
              company="IBM"
              experience="4-9 Years"
              location="Pune, Maharastra"
            />
            <JobCard
              title="Php Developer"
              company="TCS"
              experience="2-4 Years"
              location="Bangalore, Karnataka"
            />
            <JobCard
              title="Frontend Developer"
              company="Wipro"
              experience="0-1 Years"
              location="Hyderabad, Telangana"
            />
            <JobCard
              title="SQL Developer"
              company="L&T"
              experience="2-5 Years"
              location="Pune, Maharastra"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
