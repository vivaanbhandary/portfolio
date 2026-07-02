export enum LinkImageSource {
  Github = "/images/logos/github.png",
  Itch = "/images/logos/itch.io.png", 
}

export enum Platform {
  Windows = "Windows",
  Mac = "Mac",
  Linux = "Linux",
  iOS = "iOS",
  Android = "Android",
}

export enum GameEngine {
  Unity = "Unity",
  Unreal = "Unreal",
  Godot = "Godot",
  C = "C++",
  JS = "JavaScript",
  Twine = "Twine",
  Python = "Python",
  Java = "Java",
}

export enum MediaType {
  Image = "image",
  YouTube = "youtube",
}

export interface MediaItem {
  source: string;
  type: MediaType;
}

export interface AboutMeData {
  name: string;
  role: string;
  description: string;
  introduction: string;
  image: string;
  cvUri: string;
  links: {
    github: string;
    linkedIn: string;
  };
}

export interface Game {
  name: string;
  date: string; // Added for the timeline
  description: string;
  developerInsights?: string; // Added for deeper technical writeups
  learningOutcomes?: string[]; // Bulleted lists are highly ATS-friendly
  genres?: string[];
  source?: { name: string; url: string };
  links?: { source: LinkImageSource; url: string }[];
  media?: MediaItem[];
  platforms?: Platform[];
  engine?: GameEngine[];
}