import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>
      <div>
        <div class="mt-5">
          <h2 className="top-title">Andrew C. Patison</h2>
          <ul>
            <li>
            Experienced Consultant skilled in managing client facing relationships and implementation of cloud and platform technology solutions helping to drive process automation and workforce efficiency. Adept in all project life cycle stages from gathering and navigating complicated client needs to delivery and go-live support.

            Certified in Lean Six Sigma and Full-Stack Web Development and looking to bridge the gap between functional and technical project implementation. As a hard-working, process-driven, and self-motivated learner, Andrew is dedicated to continuing to seek career growth, new opportunities, and challenges.
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/andrewpatison/">
              <img
                src="https://media-exp3.licdn.com/dms/image/C4E03AQGWyrfgVWrKTQ/profile-displayphoto-shrink_800_800/0/1560534508267?e=1631750400&v=beta&t=PhYmy_gkOUU7df3g2ANHF54p92_mugIMrYijb8muHbM"
                alt="LinkedIn"
              />
            </a>
          </p>
          <a href="../public/Resume.pdf" class="resumeLink">Download Resume</a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            SAP, Oracle SQL Developer, Tableau, Full-Microsoft Office Suite,<br />
            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js,<br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, APIs.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;