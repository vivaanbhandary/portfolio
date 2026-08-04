import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Column } from "../Styles/StyledComponents";

const EssayContainer = styled(Column)`
  max-width: 800px;
  margin: 0 auto;
  background: #0f172a; /* Consistent with your writeup background */
  padding: 40px;
  border-radius: 12px;
  border: 1px solid #333;
  gap: 20px;
`;

const BackButton = styled(Link)`
  color: #4e9f3d;
  text-decoration: none;
  font-family: 'ZenDots', sans-serif;
  font-size: 1rem;
  margin-bottom: 20px;
  display: inline-block;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3e8f32;
  }
`;

const Title = styled.h1`
  color: #00ced1;
  font-family: "ZenDots", sans-serif;
  margin: 0;
  font-size: 2rem;
`;

const Paragraph = styled.p`
  color: silver;
  font-size: 1.1rem;
  line-height: 1.8;
  font-family: 'Segoe UI', Roboto, Helvetica, sans-serif;
  white-space: pre-wrap;
`;

const EssayLink = styled.a`
  color: #00ced1; /* Matches your cyan accents */
  text-decoration: underline;
  text-decoration-color: rgba(0, 206, 209, 0.4); /* Subtle underline */
  text-underline-offset: 4px;
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover {
    color: #4e9f3d; /* Changes to your green accent on hover */
    text-decoration-color: #4e9f3d;
  }
`;

const MusicEssay: React.FC = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <EssayContainer>
      <BackButton to="/">&larr; Back to Timeline</BackButton>
      
      <Title>Punk/Skater tropes in Video Game Music - UBC MUSC 326 Essay</Title>
      
      <Paragraph>
        Punk and skater styled music is one of my favourites in video games that I see fairly rarely, but the few games that I do see have the tendency to go all out for their music. 
I will start with the main characteristics and tropes of Punk and Skater music in general, and then analyze their video game counterparts.
      </Paragraph>

      <Paragraph>
        When it comes to video games, the punk music I found the most intriguing and enjoyable all belonged to the subgenre of Grind Fiction or Shibuya Punk. This is the music genre for games associated with skateboarding, rebellion and graffiti, starring punks and misfits fighting back against the authority or establishments keeping them down. These games are often heavily stylized, oozing with identity, style and 'coolness', which is reflected in their original sound tracks as well which emphasizes these traits and are a key part of the experience. The games / franchises I plan to cover as examples are Jet Set Radio (JSR), Sonic the Hedgehog, Splatoon, Bomb Rush Cyberfunk (BRC), and Unbeatable.
      </Paragraph>

      <Paragraph>
        The first trope I noticed across these games, is the motif of Independence and Authenticity, being self made, and 'Chalance' (A slang term meaning the opposite of nonchalance, displaying effort and earnestness). Musically, I find this is best portrayed by the use of sampling, especially vocals, which is featured heavily in many of the tracks in Jet Set Radio and Bomb Rush Cyberfunk. Sampling is an act of taking a snippet of another song, remixing and modifying it to take on new meaning and sounds and utilizing it in a separate project. I find this parallels the act of putting your own spin on things in the world, taking something old, and making it new and your own. The gameplay of JSR and BRC has many moments where you draw graffiti: taking a boring public wall and stylizing it how you wish.
      </Paragraph>

      <Paragraph>
        Coming back to sampling, I find it to also be present in a lot of the sound tracks for JSR and BRC, notably the ones produced by Hideki Naganuma. These tracks (JSR - {" "}
        <EssayLink href="https://www.youtube.com/watch?v=FlwEtrYCNwM&list=PLD61626F6813F6C5F" target="_blank" rel="noopener noreferrer">
          Sneakman
        </EssayLink>{" "}, BRC - {" "}
        <EssayLink href="https://www.youtube.com/watch?v=rWk6Nj0nxNs&list=RDrWk6Nj0nxNs" target="_blank" rel="noopener noreferrer">
          DA PEOPLE
        </EssayLink>{" "}, JSR Future - {" "}
        <EssayLink href="https://www.youtube.com/watch?v=HNy_retSME0&list=RDHNy_retSME0" target="_blank" rel="noopener noreferrer">
          Concept of Love
        </EssayLink>{" "}), have short clips of vocals taken from other music and even speeches, which are then remixed and added seamlessly into the music using quick loops and edits of the vocals, not unlike the art of graffiti. Some of the samples taken are used due to how well they compliment the themes of the games themselves: Concept of Love's vocals are from a powerful speech made by civil rights activist Stokely Carmichael, who was fighting the elites and the system just like the protagonists from Jet Set Radio Future.
      </Paragraph>

      <Paragraph>
        The music of Splatoon also emulates this feeling of sampling and remixing music. The vocals of the music are sung in a fictional language, making it hard to decipher their meaning, but the heavy filters and hard cuts in them are very reminiscent of the vocal sampling mixing from the above examples.
      </Paragraph>

      <Paragraph>
        The next trope that was common across many games in the punk genre, was anti-authority and anti-establishment. We already saw a little bit of this in the above trope where the samples were used to convey this message, but it is also the overarching plot of many of the games like JSR, BRC, and Unbeatable.
      </Paragraph>

      <Paragraph>
        The plot of Unbeatable is very succinctly explained by the title of a song in its sound track: “{" "}
        <EssayLink href="https://www.youtube.com/watch?v=5EeLLQ4mYlo&list=PLSaqatgfAMp2iycM65v0DqBt2hg56mnne&index=5" target="_blank" rel="noopener noreferrer">
          Track 5 - A GAME WHERE MUSIC IS ILLEGAL AND YOU DO CRIMES
        </EssayLink>{" "}”. Making the concept of music illegal in the world of a rhythm game makes all gameplay rooted in anti-authority. This also makes the music of the game diegetic, meaning it is also being performed in game. The most obvious way these tracks convey their anti-authority stance is through their lyrics. DA PEOPLE from BRC directly has 'Power to the people' as a lyric, {" "}
        <EssayLink href="https://www.youtube.com/watch?v=0ZVFAkdRMRY&list=RD0ZVFAkdRMRY&start_radio=1" target="_blank" rel="noopener noreferrer">
          Square Up
        </EssayLink>{" "} from Unbeatable has the main character Beat talking as she fights back against the police state HARM.
      </Paragraph>

      <Paragraph>
        Another way these tracks convey this anti-establishment theme more subtly, is by the very nature of the punk genre. By definition, punk music is different from the norm, it has stripped down instrumentation, rough edges, harsh sounds that would stick out when compared to pop songs and other similar genres. This makes the genre rebellious to music genres as a whole, fighting against the norms, just like the aforementioned protagonists.
      </Paragraph>

      <Paragraph>
        Finally, the last motif shared by all of the titles above is Youth. The energy, emotion, and passion on display on every one of these games is reminiscent of youth. This concept is not only brought out by the story, stylization and characters of the games, but also through the music. Punk music is defined by the fast paced, high tempo, loud and brash music that all of these games utilize. Tracks like {" "}
        <EssayLink href="https://www.youtube.com/watch?v=8SQLhxieTK8" target="_blank" rel="noopener noreferrer">
          His World (Zebrahead Version)
        </EssayLink>{" "} from Sonic and {" "}
        <EssayLink href="https://www.youtube.com/watch?v=mSUcKnqzOKg&list=PLgNzRP_ya1Z54p6VJ8fhPZxXTCEcyBrmG&index=3" target="_blank" rel="noopener noreferrer">
          Splattack!
        </EssayLink>{" "} From splatoon are perfect examples of this.
      </Paragraph>

      <Paragraph>
        His World's high energy guitar and loud drums are very much like the energy and inspiration one has in their formative years. The lyrics talk about making this world into 'his world', making your own way, and leaving fear behind. Splattack! also utilizes the same kind of instrumentation and tempo, opening with a strong percussion on the drums. I believe this high - energy and fast tempo music for punkness in video games is directly inspired from the origins of Punk music as a whole. Punk rock began as a rebellion against contemporary rock music in the 1970s. The reason it is often used in media that portray youth and adolescence, is because it originated from the younger generation in the 1970s, to stand out against the other rock bands at the time which they considered 'stale'. They differed by their signature rough edges, loud, high tempo, blunt, confrontational, and nasal lyrics, and political nature. Around the 2000s, punk seemingly experienced a revival, featuring many pop-punk bands like Green Day. This is also the timeframe many of these games released, presumably being a major inspiration. For 2000s punk, the first example that comes to mind for me is {" "}
        <EssayLink href="https://www.youtube.com/watch?v=Ee_uujKuJMI" target="_blank" rel="noopener noreferrer">
          American Idiot - Green Day.
        </EssayLink>{" "}
      </Paragraph>

      <Paragraph>
        Finally, {" "}
        <EssayLink href="https://www.youtube.com/playlist?list=PL-RC_CVpVTJmHM9gUtra6MFSZ2E-ksvi3&jct=zE2kZVRKQEsQa5ZliL857w" target="_blank" rel="noopener noreferrer">
          here
        </EssayLink>{" "} is a youtube playlist with the above 5 examples, and a few more songs I felt fit the genre of Punk music in video games.
      </Paragraph>

    </EssayContainer>
  );
};

export default MusicEssay;