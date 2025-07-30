import "../index.css";
import { ContentBox } from "../objects/content-box";
import { SquareArrowOutUpRight } from 'lucide-react';
import awsLogo from '../resources/aws-logo-1.png';
import vtLogo from '../resources/vt-logo.png'
import vtMates from '../resources/VTMates.png';
import intelliQuestLogo from '../resources/intelliQuest-logo.svg';
import teacherAidLogo from '../resources/teacher-aid-logo.svg'
import { Button } from "@/objects/button";

export function Landing() {
	return (
		<div id="landing">
			<div className="info" id="description">
				I am an undergraduate Electrical and Computer Engineering student passionate about all aspects of computing—from
				software engineering to cutting-edge research in computing hardware. I love exploring the technologies that power 
				our world behind the scenes and am eager to deepen my knowledge in these areas. Currently, I am seeking internships 
				in Software Engineering and Computer Hardware Research to apply my skills and grow professionally.
			</div>
			<div id="pro">
				<div className="section-title">Professional Work</div>
				<div className="pro-row">
					<ContentBox 
						id="pro-box" 
						imgPath={awsLogo}
						title="Software Develepment Intern"
						date="May 2025 - August 2025"
						tags={[
							{ name: "TypeScript", id: "ts"},
							{ name: "SQL", id: "sql"},
							{ name: "Scala", id: "java"},
							{ name: "AWS Tools", id: "aws"},
							{ name: "Apache Spark", id: "spark"},
							{ name: "Grafana", id: "grafana"}
						]}
					>
						Building an end-to-end data pipeline for CloudFront Routing to collect and analyze
						statistical data on networks and their regions.
					</ContentBox>
					<ContentBox 
						id="pro-box" 
						imgPath={awsLogo}
						title="Software Develepment Intern"
						date="May 2024 - August 2024"
						tags={[
							{ name: "React", id: "react"},
							{ name: "TypeScript", id: "ts"},
							{ name: "Java", id: "java"},
							{ name: "AWS Tools", id: "aws"}
						]}
					>
						Building a full stack AI chatbot for AWS CloudFront Routing internal debugging, by utilizing
						internal data sources and APIs.
					</ContentBox>
				</div>
			</div>
			<div id="research">
				<div className="section-title">Research Experience</div>
				<div className="research-row">
					<ContentBox 
						id="pro-box" 
						imgPath={vtLogo}
						title="Undergrad Research Assistant"
						date="January 2025 - May 2025"
						tags={[
							{ name: "Lab Experience", id: "lab-experience"},
							{ name: "Electronics Testing", id: "electronics-testing"}
						]}
					>
						Assisting a PhD student with their research project studying buck converters with
						high frequecy transistors and phototransistors in cryogenic temperatures for Quantum Technology
						applciations. 
					</ContentBox>
				</div>
			</div>
			<div>
				<div className="section-title">Projects</div>
				<div className="project-row">
					<ContentBox 
						id="project-box" 
						imgPath={teacherAidLogo}
						title="HackViolet 2025 Teacher Aid"
						tags={[
							{ name: "React", id: "react"},
							{ name: "JavaScript", id: "js"},
							{ name: "Express", id: "express"},
							{ name: "WebSocket", id: "web-socket"}
						]}
						buttons={[<Button id="devpost" href="https://devpost.com/software/intelliquest-0or46l">Devpost {<SquareArrowOutUpRight className="upload-icon"/>}</Button>]}
					>
						Full stack classroom management system to aid in project based learning, allowing
						students to signal where they are located, and how much help they need
					</ContentBox>
					<ContentBox 
						id="project-box" 
						imgPath={intelliQuestLogo}
						title="VTHax 2024 IntelliQuest"
						tags={[
							{ name: "React", id: "react"},
							{ name: "JavaScript", id: "js"},
							{ name: "Express", id: "express"}
						]}
						buttons={[<Button id="devpost" href="https://devpost.com/software/intelliquest-0or46l">Devpost {<SquareArrowOutUpRight className="upload-icon"/>}</Button>]}
					>
						Full stack AI chatbot tool for table top role playing games that is completely managed 
						by the AI model.
					</ContentBox>
					<ContentBox 
						id="project-box" 
						imgPath={vtMates}
						title="HackViolet 2024 VTMates"
						tags={[
							{ name: "React", id: "react"},
							{ name: "JavaScript", id: "js"}
						]}
						buttons={[
							<Button id="devpost" href="https://devpost.com/software/vtmates">Devpost {<SquareArrowOutUpRight className="upload-icon"/>}</Button>
						]}
					>
						Frotned for tool to help off campus students connect with other students in their area for
						social gatherings and study groups
					</ContentBox>
				</div>
			</div>
		</div>
	);
}