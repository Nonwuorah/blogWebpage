import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="About">
        <h1>About</h1>
        <p>
          We are Dashword, a team of passionate writers and developers who
          believe that creating great content should be easy and fun.
          <br />
          We started Dashword in 2023 with a simple goal: to help content
          creators write better, faster, and smarter.
          <br />
          We know how hard it can be to produce high-quality content that
          engages your audience, ranks well on search engines, and meets your
          business objectives.
          <br />
          That’s why we built Dashword, a powerful content optimization tool
          that analyzes your topic, keywords, competitors, and audience, and
          gives you actionable insights and suggestions to improve your content.
          <br />
          With Dashword, you can:
          <ul>
            <li>
              Generate content briefs and outlines for any topic or keyword in
              minutes.
            </li>
            <li>
              {" "}
              Optimize your existing content with real-time feedback and scores.
            </li>
            <li>
              Research your competitors and discover their content strategies.
            </li>
            <li>Track your content performance and measure your ROI.</li>
          </ul>
          <br />
          Whether you are a blogger, marketer, freelancer, or agency, Dashword
          can help you create content that works. Join thousands of happy
          customers who use Dashword to grow their traffic, conversions, and
          revenue.
          <br />
          Ready to take your content to the next level? Start your free trial
          today or contact us for a demo. We’d love to hear from you!
        </p>
      </div>
      <>
        <Link
          to="*NotFound"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "blueviolet",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            cursor: "pointer",
            hoover: "opacity: 0.8",
          }}
        >
          Want to Japa
        </Link>
      </>
    </>
  );
}

export default About;
