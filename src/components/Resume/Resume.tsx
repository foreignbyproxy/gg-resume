import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import styles from "./Resume.module.scss";
import ResumeItem from "../ResumeItem/ResumeItem";

function Resume() {
	const componentRef = useRef(null);
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	return (
		<div className={styles["Resume"]} ref={componentRef}>
			<button className={styles["print"]} onClick={handlePrint}>
				Print
			</button>
			<div className="container">
				<div className={styles["sidebar"]}>
					<h1>{import.meta.env.VITE_NAME}</h1>
					<>
						{import.meta.env.VITE_EMAIL && (
							<p>
								<p className={styles["label"]}>Email:</p>
								<a href={`mailto:${import.meta.env.VITE_EMAIL}`}>
									{import.meta.env.VITE_EMAIL}
								</a>
							</p>
						)}

						{import.meta.env.VITE_PHONE && (
							<p>
								<p className={styles["label"]}>Phone:</p>
								<a href={`tel:+1${import.meta.env.VITE_PHONE}`}>
									{import.meta.env.VITE_PHONE}
								</a>
							</p>
						)}

						{import.meta.env.VITE_ADDRESS_1 && import.meta.env.VITE_ADDRESS_2 && (
							<address>
								<p className={styles["label"]}>Address:</p>
								<p>{import.meta.env.VITE_ADDRESS_1}</p>
								<p>{import.meta.env.VITE_ADDRESS_2}</p>
							</address>
						)}

						{import.meta.env.VITE_LINKEDIN_URL && (
							<p className={styles["linkedin"]}>
								<p className={styles["label"]}>LinkedIn:</p>
								<a
									href={import.meta.env.VITE_LINKEDIN_URL}
									target="_blank"
									rel="noopener noreferrer"
								>
									{import.meta.env.VITE_LINKEDIN_URL}
								</a>
							</p>
						)}

						{import.meta.env.VITE_ENS_URL && import.meta.env.VITE_ENS_LABEL && (
							<p className={styles["linkedin"]}>
								<p className={styles["label"]}>ENS:</p>
								<a
									href={import.meta.env.VITE_ENS_URL}
									target="_blank"
									rel="noopener noreferrer"
								>
									{import.meta.env.VITE_ENS_LABEL}
								</a>
							</p>
						)}
					</>
				</div>
				<div className={styles["main"]}>
					<section>
						<h2>Work Experience</h2>
						<ResumeItem
							main="Blue Laser Digital"
							position="Lead Developer"
							date="Oct 2017 - Current"
							location="Columbus, Ohio"
						>
							<ul>
								<li>
									Scope, plan and execute full-stack web solutions to meet
									clients’ digital marketinggoals
								</li>
								<li>
									Developed a variety of websites and applications using a several
									platforms, frameworks, technologies and APIs
								</li>
								<li>
									Perform website performance audits and remedy performance issues
								</li>
								<li>Improved development process through custom tooling</li>
								<li>
									Collaborated with design and SEO teams to effectively execute
									website projects
								</li>
							</ul>
						</ResumeItem>
						<ResumeItem
							main="Panorama22"
							position="Founder"
							date="Jan 2020 - Current"
							location="Columbus, Ohio"
						>
							<ul>
								<li>
									A digital platform to explore, build and freelance using web
									technologies
								</li>
								<li>
									Collaborate with small, local entrepreneurs to launch their web
									presence
								</li>
							</ul>
						</ResumeItem>
					</section>

					<section>
						<h2>Technical Skills</h2>
						<ul className="no-bullet">
							<li>
								<strong>Languages:</strong> JavaScript, TypeScript, HTML, CSS, PHP
							</li>
							<li>
								<strong>Frameworks/Libraries:</strong> React, Next.js, Gatsby, Vite,
								Svelte, Jest, React Testing Library
							</li>
							<li>
								<strong>Other:</strong> Node, Firebase, Git, Github, Bitbucket,
								CI/CD, WordPress, Drupal, Shopify, SASS, Google Cloud Platform,
								Google Analytics, Google Tag Manager, Adobe Photoshop/Illustrator,
								Figma
							</li>
						</ul>
					</section>

					<section>
						<h2>Education</h2>
						<ResumeItem
							main="Rotterdam School of Management at Erasmus University"
							position="Masters in Finance & Investments"
							date="Sept 2012 – Sept 2013"
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
