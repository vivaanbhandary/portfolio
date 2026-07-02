import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Vivaan Bhandary",
  role: "Game Developer",
  introduction: "Hey, I'm Vivaan! I am a Computer Science graduate from UBC, and I love making games!",
  description: "I grew up playing games and loved 100% completing them, this developed a love for game mechanics and learning their intricacies, which in turn led to loving making them! I am interested in Game Mechanics, Engines, Design, and Graphics. Looking for a new grad position currently!",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/Vivaan Bhandary Resume 11.6.26.pdf`,
  links: {
    github: "https://github.com/vivaanbhandary/vivaanbhandary",
    linkedIn: "https://www.linkedin.com/in/vivaan-bhandary-389726241/",
  }
};

export const games: Game[] = [
  {
    name: "Reloaded Dice",
    date: "2026",
    description: "A Top-down bullet heaven roguelike inspired by Vampire Survivors with fast paced changes in combat types. The original prototype version built a custom 2D engine from scratch using C++ and an Entity-Component-System (ECS) architecture. We are currently re-making it in Godot with expanded mechanics, overhauled UI, and an extended level progression system!",
    developerInsights: "Originally made with a team of 6 for UBC's CPSC-427 course. Building an engine from scratch was a massive undertaking. The biggest challenges were lag spikes during intense bullet-hell segments and optimizing the rendering pipeline. This prototype version is complete with 7 unique weapons, unique ammo and gun modifiers, and a dual boss fight at the end! Migrating the original C++ codebase to Godot required a paradigm shift in how we handled game state, and allowed us to rethink and revamp all our previous systems and increase scope to increase replayability value and enjoyment!",
    learningOutcomes: [
      "Designed a custom ECS framework in modern C++ (C++17).",
      "Optimized core engine processes with the team by implementing spatial hashing and collision layers for efficient physics calculations, and resolved a major rendering bottleneck to reduce GPU overhead.",
      "Designed and programmed a dynamic, synergistic upgrade system, managing complex entity interactions and state changes to scale gameplay mechanics.",
      "Composed and integrated a dynamic music and sound system for the game, increasing player feedback for important actions and telegraphing gameplay elements.",
      "Learning Godot's node-based scene architecture and GDScript.",
    ],
    genres: ["Roguelike", "Bullet Heaven", "Top-Down Shooter", "Deck-Builder...?"],
    platforms: [Platform.Windows, Platform.Mac],
    engine: [GameEngine.C, GameEngine.Godot],
    links: [],
    media: [{ source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image }],
  },
  // {
  //   name: "Reloaded Dice - Alpha",
  //   date: "2026",
  //   description: " The original prototype version built a custom 2D engine from scratch using C++ and an Entity-Component-System (ECS) architecture.",
  //   developerInsights: "Originally made with a team of 6 for UBC's CPSC-427 course. Building an engine from scratch was a massive undertaking. The biggest challenges were lag spikes during intense bullet-hell segments and optimizing the rendering pipeline. This prototype version is complete with 7 unique weapons, unique ammo and gun modifiers, and a dual boss fight at the end!",
  //   learningOutcomes: [
  //     "Designed a custom ECS framework in modern C++ (C++17).",
  //     "Optimized core engine processes with the team by implementing spatial hashing and collision layers for efficient physics calculations, and resolved a major rendering bottleneck to reduce GPU overhead.",
  //     "Designed and programmed a dynamic, synergistic upgrade system, managing complex entity interactions and state changes to scale gameplay mechanics.",
  //     "Composed and integrated a dynamic music and sound system for the game, increasing player feedback for important actions and telegraphing gameplay elements."
  //   ],
  //   genres: ["Roguelike", "Bullet Heaven", "Top-Down Shooter"],
  //   platforms: [Platform.Windows, Platform.Mac],
  //   engine: [GameEngine.C],
  //   links: [],
  //   media: [{ source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image }],
  // },
  {
    name: "A Completely Ordinary Walk Home",
    date: "2026",
    description: "A fun, short platformer made for the Brackeys Game Jam 2026. Play as Ordinary Guy™ walking home from work, but each day gets increasingly... extraordinary. The game features unique platforming mechanics every day like gravity flipping, meteorites and a boss chase at the end!",
    developerInsights: "This was my first time using Godot, and I learned many things about using an actual game engine compared to making a game with the very basics. I really enjoyed working on all of the movement mechanics for the player such as the double jump and dash. I also learned about other techniques to make movement more fluid such as coyote frames and jump buffering!",
    learningOutcomes: [
      "Understanding of Godot's scene system and how to use it for 2D platforming and level design.",
      "Experience with implementing player controls and movement mechanics.",
      "Familiarity with game jam workflows and rapid prototyping. Learning to balance interesting game design ideas with feasibility and time constraints.",
    ],
    genres: ["Platformer"],
    platforms: [Platform.Windows, Platform.Mac],
    engine: [GameEngine.Godot],
    links: [
      { source: LinkImageSource.Itch, url: "https://snazaccino.itch.io/a-completely-ordinary-walk-home" }
    ],
    media: [{ source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image }],
  },
  {
    name: "Video Game Music Tropes Essay",
    date: "2026",
    description: "For a course at UBC, I chose to write an essay about the themes in the music for Punk themed video games. I analyzed the music in games like Jet Set Radio, Sonic, and Unbeatable to find common musical tropes and motifs that are used to convey the punk aesthetic.",
    genres: ["Writeup", "Music Analysis"],
    links: [],
  },
  {
    name: "Miscellaneous Graphics Demos",
    date: "2025",
    description: "Various 3D graphics and shader demos made for UBC classes, including dynamic lighting, interactive games, 'Portal' effects, and PBR cloth tearing simulations.",
    developerInsights: "I really enjoyed learning GLSL and the graphics pipelines with the projects, the portal effects being my favourite one. This definitely helped me when working with game engines in the future, making shaders easier to understand and write.",
    learningOutcomes: [
      "Understanding of 3D graphics concepts and techniques.",
      "Experience with shader programming and GLSL.",
      "Familiarity with game engine workflows and asset pipelines."
    ],
    genres: ["Tech Demo", "3D Graphics"],
    platforms: [Platform.Windows],
    engine: [GameEngine.JS, GameEngine.Python],
    links: [],
    media: [{ source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image }],
  },
  {
    name: "ESCAPE CAVE",
    date: "2025",
    description: "A text based puzzle-adventure game that is inspired by ARGs. You play as a mysterious character who wakes up trapped in a dark cave. You, the player, have access to a heavily damaged version of the game's strategy guide, which you must decipher to solve the puzzles and escape!",
    developerInsights: "My second game in Twine! I loved working on the puzzles and story for this game, very inspired from one of my favourite games, DELTARUNE. I had many ideas for puzzles that simply did not work with the original Harlowe version of Twine, motivating me to switch to Sugarcube which let me add more intricate puzzles that relied on functions and variables.",
    learningOutcomes: [
      "Honing my familiarity with the Twine engine, learning a new language for it: Sugarcube",
      "Learning to balance puzzle difficulty in games, iterating on many versions after having friends playtest the game",
      "Practice working under a time constraint (2 weeks) due to course deadlines, seeing the game completed with the original vision was very satisfying!"
    ],
    genres: ["Text Adventure", "Puzzle"],
    platforms: [Platform.Windows, Platform.Mac, Platform.Linux],
    engine: [GameEngine.Twine],
    links: [],
    media: [{ source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image }],
  },
  {
    name: "Flight or Fight",
    date: "2025",
    description: "A text based narrative puzzle game. You find yourself trapped in a timeloop on a doomed flight, can you figure out what is causing the timeloop and prevent the crash? Meet the other passangers and learn to manage the short time you have each loop to break free! ",
    developerInsights: "My first game using Twine was really fun to make! I enjoy non-diagetic game mechanics, which gave me the idea of the timeloop symbolizing 'restarting' games. The game explores human psychology when faced with an impossible situation; as the player slowly gets better and more knowledge about this situation.",
    learningOutcomes: [
      "Learning the Twine engine with the Harlowe language, tracking player state across loops to dynamically change familiar situations and outcomes.",
      "Gaining experience in creating branching narratives. Learning the importance of planning ahead and using flowcharts to visualize the story structure.",
      "Learning to manage player agency within a constrained time loop / gameplay sequences."
    ],
    genres: ["Text Adventure", "Puzzle"],
    platforms: [Platform.Windows, Platform.Mac, Platform.Linux],
    engine: [GameEngine.Twine],
    links: [],
    media: [{ source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image }],
  },
  {
    name: "Echoes of Lumina",
    date: "2024",
    description: "A complete game design document for a character-driven narrative RPG. You play as the evil emperor Adrian, whose powerful body is stolen from him by a group of revolutionaries. He seeks to regain his body as he makes his way through the dilapidated city of Lumina, facing his own past atrocities. The document includes a detailed story outline, character bios, gameplay mechanics, and detailed outlines of important sequences like the intro and boss fights.",
    developerInsights: "Ideating and iterating on a full game idea is the most fun creative project I had taken on for my creative writing class (CRWR-310). I learned a lot about how to structure a game design document and how to communicate ideas effectively. I also enjoyed coming up with character arcs and narrative themes that suit the game's tone and style.",
    learningOutcomes: [
      "Understanding the components of a comprehensive game design document.",
      "Learning to create engaging character backstories and motivations.",
      "Gaining experience in outlining gameplay mechanics and narrative structure that support each other."
    ],
    genres: ["Game Design Document", "Narrative Design"],
    platforms: [Platform.Windows, Platform.Mac, Platform.Linux],
    engine: [GameEngine.Twine],
    links: [],
    media: [{ source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image }],
  },
  {
    name: "Zone Chaser",
    date: "2022",
    description: "A simple retro styled game where you play as a square that must capture zones to gain points. The game features basic levels and was a project to learn Object Oriented Programming principles.",
    developerInsights: "My first 'game' project! I learned a lot about Object Oriented Programming and how to structure a game project. I also learned about basic game mechanics and how to implement purely in code, using nothing but standard Java libraries and a basic GUI.",
    learningOutcomes: [
      "Understanding the principles of Object Oriented Programming.",
      "Learning how to structure a game project from scratch.",
      "Gaining experience in implementing game mechanics using Java."
    ],
    genres: ["Retro", "Casual"],
    platforms: [Platform.Windows, Platform.Mac, Platform.Linux],
    engine: [GameEngine.Java],
    links: [],
    media: [{ source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image }],
  },
];