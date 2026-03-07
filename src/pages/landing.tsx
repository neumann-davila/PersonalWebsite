import "../index.css";
import { ContentBox } from "../objects/content-box";
import { SquareArrowOutUpRight } from 'lucide-react';
import awsLogo from '../resources/aws-logo-1.png';
import vtLogo from '../resources/vt-logo.png'
import vtMates from '../resources/VTMates.png';
import phtonicsGif from '../resources/ezgif.com-resize.gif';
import intelliQuestLogo from '../resources/intelliQuest-logo.svg';
import teacherAidLogo from '../resources/teacher-aid-logo.svg'
import { Button } from "@/objects/button";

export function Landing() {
	return (
		<div id="landing">
			<div className="info" id="description">
				I am an undergraduate Electrical Engineering student minoring in Physics and Quantum Information Sciences and Technologies at Virginia Tech. 
				I am passionate about the full computing stack, from high-level software development to the underlying physics of optics and quantum systems.
			</div>
			<div className="info" id="description">
				With my multidisciplinary background I am seeking opportunities in Software Development, Integrated Photonics or Quantum Research.
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
						buttons={[<Button id="devpost" href="https://shaogroup.ece.vt.edu/">Resaerch Group {<SquareArrowOutUpRight className="upload-icon"/>}</Button>]}
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
						imgPath={phtonicsGif}
						title="Integrated Photonics Strip Waveguide"
						tags={[
							{ name: "MATLAB", id: "matlab"},
							{ name: "FDE Solver", id: "fde"},
							{ name: "Lumerical", id: "lumerical"},
						]}
					>
						Designing an ideal strip waveguide based on integrated photonics industry standard materials
						with multiple different ways of calculattting and veriffying the dimensions determined. This started
						with research into industry standards and the approach to take. The approach I used was the 
						effective refractive index approach to approximate the strip into two seperate planar waveguides.
						I then used this approach in MATLAB to estimate the width of the strip to create single mode operation.
						From there I simulated my waveguide design in Lumerical using the FDE solver and found that it was inaccurate,
						so I performed a width sweep in lumerical and used the data collected in Lumerical to create a plot in MATLAB
						to find the actaul ideal width of the waveguide.
					</ContentBox>
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
				</div>
				<div className="project-row">
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