import { ReactNode } from "react";

export interface Resume {
	readonly name: string;
	readonly initials: string;
	readonly location: string;
	readonly locationLink?: string;
	readonly about: string;
	readonly summary: ReactNode;
	readonly avatarUrl: string;
	readonly personalWebsiteUrl?: string;
	readonly contact: {
		readonly email: string;
		readonly tel: string;
		readonly socials: readonly {
			readonly name: string;
			readonly url: string;
			readonly icon: React.ElementType;
		}[]
	}
	readonly educations: readonly {
		readonly school: string;
		readonly degree: string;
		readonly start: string;
		readonly end: string;
	}[]
	readonly works: readonly {
		readonly company: string;
		readonly link?: string;
		readonly badges: readonly string[];
		readonly title: string;
		readonly logo?: React.ElementType;
		readonly start: string;
		readonly end?: string;
		readonly description: ReactNode;
	}[]
	readonly skills: readonly string[];
	readonly projects: {
		readonly title: string;
		readonly techStack: readonly string[];
		readonly description: string;
		readonly logo?: React.ElementType;
		readonly link: {
			readonly label: string;
			readonly href: string;
		}
	}[]
}
