import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import styles from './Resume.module.scss';
import ResumeItem from '../ResumeItem/ResumeItem';

function Resume() {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className={styles['Resume']} ref={componentRef}>
      <button className={styles['print']} onClick={handlePrint}>
        Print
      </button>
      <div className="container">
        <div className={styles['sidebar']}>
          <h1>Gregory Gerard</h1>
          <div>
            <p className={styles['label']}>Email:</p>
            <a href={`mailto:ggerard.18@gmail.com`}>ggerard.18@gmail.com</a>
          </div>

          <div>
            <p className={styles['label']}>Phone:</p>
            <a href={`tel:+13307669191`}>330-766-9191</a>
          </div>

          <div className={styles['linkedin']}>
            <p className={styles['label']}>LinkedIn:</p>
            <a
              href="https://www.linkedin.com/in/gregory-gerard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/gregory-gerard/
            </a>
          </div>

          <div>
            <p className={styles['label']}>GitHub:</p>
            <a
              href="https://github.com/foreignbyproxy"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/foreignbyproxy
            </a>
          </div>
        </div>
        <div className={styles['main']}>
          <section>
            <h2>Work Experience</h2>
            <ResumeItem
              main="Block Renovation"
              position="Senior Engineer"
              date="Feb 2022 - Apr 2026"
              location="Remote"
            >
              <ul>
                <li>
                  Implemented AI-powered agentic chat and contextual components
                  (project summary, document upload, proposal comparison,
                  contractor cards) embedded in the agentic chat experience
                </li>
                <li>
                  Led codebase maintenance initiatives and major platform
                  upgrades across 9 repos, including PNPM, Node.js v20→v24, and
                  TypeScript upgrades, reducing build, test, and deploy times by
                  20%
                </li>
                <li>
                  Owned analytics infrastructure across web and mobile,
                  maintaining the Segment workspace and its destinations
                  including Google Analytics, Mixpanel, Snowflake, and Google
                  Tag Manager, and leading the migration to first-party domains
                  to improve event quality
                </li>
                <li>
                  Partnered with Marketing, Sales, and Analytics teams to
                  deliver integrations including bidirectional Salesforce sync,
                  Customer.io email automation, and a multi-destination
                  analytics pipeline
                </li>
                <li>
                  Planned and executed a marketplace business model pivot by
                  partnering with Product on requirements, authoring the
                  technical specification, and shipping full-stack changes
                  (TypeORM, GraphQL, React) while validating the new model in an
                  A/B test
                </li>
              </ul>
            </ResumeItem>
            <ResumeItem
              main="Blue Laser Digital"
              position="Lead Developer"
              date="Oct 2016 - Dec 2021"
              location="Columbus, Ohio USA"
            >
              <ul>
                <li>
                  Scoped, planned, and executed full-stack web solutions to meet
                  clients' business goals
                </li>
                <li>
                  Built and maintained over 100 projects using a variety of
                  platforms, frameworks, technologies, and APIs
                </li>
                <li>
                  Performed website performance audits and remedied performance
                  issues
                </li>
                <li>Improved development process through custom tooling</li>
                <li>
                  Collaborated with design and SEO teams to effectively execute
                  projects
                </li>
              </ul>
            </ResumeItem>
          </section>

          <section>
            <h2>Technical Skills</h2>
            <ul>
              <li>
                <strong>Frameworks/Libraries:</strong> React, Next.js, Tailwind,
                Jest, React Testing Library, Cypress, Express
              </li>
              <li>
                <strong>Other:</strong> Apollo GraphQL, PostgreSQL,
                Redis/BullMQ, Render
              </li>
            </ul>
          </section>

          <section>
            <h2>Education</h2>
            <ResumeItem
              main="Rotterdam School of Management at Erasmus University"
              position="Masters in Finance & Investments"
              date="Sept 2012 - Sept 2013"
              location="Rotterdam, The Netherlands"
            />
            <ResumeItem
              main="Fisher College of Business at The Ohio State University"
              position="Bachelor of Science in Business Administration"
              date="Sept 2007 - Dec 2011"
              location="Columbus, Ohio"
            >
              <ul>
                <li>
                  <i>Specialization</i>: Finance and International Business
                </li>
              </ul>
            </ResumeItem>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resume;
