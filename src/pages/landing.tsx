import "../index.css";
import { ContentBox } from "../objects/content-box";
import { SquareArrowOutUpRight } from 'lucide-react';
import awsLogo from '../resources/aws-logo-1.png';
import vtLogo from '../resources/vt-logo.png'
import vtMates from '../resources/VTMates.png';
import intelliQuestLogo from '../resources/intelliQuest-logo.svg';
import teacherAidLogo from '../resources/teacher-aid-logo.svg'

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
					>
						Building an end-to-end data pipeline for CloudFront Routing to collect and analyze
						statistical data on networks and their regions.
					</ContentBox>
					<ContentBox 
						id="pro-box" 
						imgPath={awsLogo}
						title="Software Develepment Intern"
						date="May 2024 - August 2024"
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
						title="PhD Shadow"
						date="January 2025 - May 2025"
					>
						Assisting a PhD student with their research project studying buck converters with
						high frequecy transistors and phototransistors in cryogenic temperatures for Quatum Technology
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
					>
						Full stack classroom management system to aid in project based learning, allowing
						students to signal where they are located, and how much help they need
						<div className="button-group">
							<a 
								className="button" 
								id="devpost" 
								href="https://devpost.com/software/teacheraid"
								target="_blank"
							>
								Devpost {<SquareArrowOutUpRight className="upload-icon"/>}
							</a>
						</div>					</ContentBox>
					<ContentBox 
						id="project-box" 
						imgPath={intelliQuestLogo}
						title="VTHax 2024 IntelliQuest"
					>
						Full stack AI chatbot tool for table top role playing games that is completely managed 
						by the AI model.
						<div className="button-group">
							<a 
								className="button" 
								id="devpost" 
								href="https://devpost.com/software/intelliquest-0or46l"
								target="_blank"
							>
								Devpost {<SquareArrowOutUpRight className="upload-icon"/>}
							</a>
						</div>
					</ContentBox>
					<ContentBox 
						id="project-box" 
						imgPath={vtMates}
						title="HackViolet 2024 VTMates"
					>
						<div>
							Frotned for tool to help off campus students connect with other students in their area for
							social gatherings and study groups
						</div>
						<div className="button-group">
							<a 
								className="button" 
								id="devpost" 
								href="https://devpost.com/software/vtmates"
								target="_blank"
							>
								Devpost {<SquareArrowOutUpRight className="upload-icon"/>}
							</a>
						</div>
					</ContentBox>
				</div>
			</div>
		</div>
	);
}