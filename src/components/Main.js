import React from "react";
import styled, { keyframes } from "styled-components";
import ProfileForegroung from "../images/iury-foreground.png";
import ProfileBackground from "../images/iury-background-2.png";


import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import JavaScript from "../Tags/javaScript.svg";
import Html5 from "../Tags/html-5.svg";
import Css3 from "../Tags/css3.svg";
import ReactIcon from "../Tags/react.svg";
import NodeJs from "../Tags/node-js.svg";
import MongoDB from "../Tags/mongodb.svg";
import Npm from "../Tags/npm.svg";
import Python from "../Tags/python.svg";
import Django from "../Tags/django.svg";
import Bootstrap from "../Tags/bootstrap.svg";
import Figma from "../Tags/figma.svg";
import GitHub from "../Tags/github.svg";
import PostgreSQL from "../Tags/postgresql.png";
import Sass from "../Tags/sass.svg";
import Yarn from "../Tags/yarn.svg";
import Next from "../Tags/next-js.png";
import Heroku from "../Tags/heroku.png";


import { Container } from "./Container";
import { device } from "../components.styles/sizes";

const projects = [
  {
    type: "left",
    title: `Patrycja Langa Personal Website`,
    description:
      "I've designed and built a React App using Next.js and to style I've used Styled-Components. This is a dual language personal website where the user can find some information about Patrycja, such as her education, skills and offers. The user can also contact Patrycja through filling an email form which uses Emailjs.",
    videoUrl: '/videos/PatriciaVideo.mov',
    url: "https://www.patrycjalanga.com/En",
    github: "https://github.com/iuryliberato/PatriciaWebsite",
    tags: [
      {
        name: "HTML5",
        imageSrc: Html5,
      },
      {
        name: "Styled Components",
        imageSrc: Css3,
      },
      {
        name: "JavaScript",
        imageSrc: JavaScript,
      },
      {
        name: "React",
        imageSrc: ReactIcon,
      },
      {
        name: "Next.js",
        imageSrc: Next,
      },
      {
        name: "Yarn",
        imageSrc: Yarn,
      },
    ],
  },
  {
    type: "right",
    title: `EVE Events`,
    description:
      "I've designed and build a React app with a Python and Django back-end, React, JavaScript, CSS with Styled-Components in the front-end. Users can register/login manually or register/login with Google, switch themes between dark and light mode,  search and filter events, confirm attendance, and create their own events. In their own profile, they can see, edit and delete events that they have created, and also see events that they are attending to.",
    videoUrl: '/videos/EventsVideo.mov',
    url: "https://eve-social-events.herokuapp.com/",
    github: "https://github.com/iuryliberato/events",
    tags: [
      {
        name: "HTML5",
        imageSrc: Html5,
      },
      {
        name: "React",
        imageSrc: ReactIcon,
      },
      {
        name: "Python",
        imageSrc: Python,
      },
      {
        name: "Django",
        imageSrc: Django,
      },
      {
        name: "Styled Components",
        imageSrc: Css3,
      },
      {
        name: "PostgreSQL",
        imageSrc: PostgreSQL,
      }
    ],
  },
  {
    type: "left",
    title: `Homemade Recipes`,
    description:
      "I've designed and build a React App with a Node back-end that uses Express, MongoDB and  Mongoose. Users can create accounts, write recipes, leave reviews including a picture of the recipe they made. They can also search recipes and view user profiles.",
    videoUrl: '/videos/HomemadeVideo.mov',
    url: "https://homemade-recipe.herokuapp.com/",
    github: "https://github.com/vezmaxwell/Homemade",
    tags: [
      {
        name: "HTML5",
        imageSrc: Html5,
      },
      {
        name: "JavaScript",
        imageSrc: JavaScript,
      },
      {
        name: "React",
        imageSrc: ReactIcon,
      },
      {
        name: "NodeJs",
        imageSrc: NodeJs,
      },
      {
        name: "Sass",
        imageSrc: Sass,
      },
      {
        name: "Yarn",
        imageSrc: Yarn,
      },
      {
        name: "Mongoose",
        imageSrc: MongoDB,
      },
    ],
  },
  {
    type: "right",
    title: `Bon Voyage`,
    description:
      "I've designed and build an app using an existing  API for locations, and to build the front-end I used React and CSS. The website has 2 main pages, one where you can search and filter destinations, and the second which has more detail about the destination chosen.",
    videoUrl: '/videos/BonVoyageVideo.mov',
    url: "https://iury-api-project.netlify.app/",
    github: "https://github.com/iuryliberato/Place-App/blob/master/README.md",
    tags: [
      {
        name: "HTML5",
        imageSrc: Html5,
      },
      {
        name: "CSS3",
        imageSrc: Css3,
      },
      {
        name: "JavaScript",
        imageSrc: JavaScript,
      },
      {
        name: "React",
        imageSrc: ReactIcon,
      },
      {
        name: "Bootstrap",
        imageSrc: Bootstrap,
      },
      {
        name: "Yarn",
        imageSrc: Yarn,
      },
    ],
  },
  {
    type: "left",
    title: `Get'a Wave`,
    description:
      "I had one week to build a grid-based game using JavaScript, HTML and CSS. My own version of frogger has three different characters, who must navigate the course using the keyboard arrow buttons while avoiding obstacles. The game increases in difficulty after each round.",
    videoUrl: '/videos/GetaWaveVideo.mov',
    url: "https://iuryliberato.github.io/Get-a-wave/",
    github: "https://github.com/iuryliberato/Get-a-wave",
    tags: [
      {
        name: "HTML5",
        imageSrc: Html5,
      },
      {
        name: "CSS3",
        imageSrc: Css3,
      },
      {
        name: "JavaScript",
        imageSrc: JavaScript,
      },
    ],
  },
];

const tags = [
  {
    name: "HTML5",
    imageSrc: Html5,
  },
  {
    name: "CSS3",
    imageSrc: Css3,
  },
  {
    name: "Styled Components",
    imageSrc: Css3,
  },
  {
    name: "JavaScript",
    imageSrc: JavaScript,
  },
  {
    name: "React",
    imageSrc: ReactIcon,
  },
  {
    name: "Next.js",
    imageSrc: Next,
  },
  {
    name: "NodeJs",
    imageSrc: NodeJs,
  },
  {
    name: "MongoDB",
    imageSrc: MongoDB,
  },
  {
    name: "NPM",
    imageSrc: Npm,
  },
  {
    name: "Python",
    imageSrc: Python,
  },
  {
    name: "Django",
    imageSrc: Django,
  },
  {
    name: "Bootstrap",
    imageSrc: Bootstrap,
  },
  {
    name: "Figma",
    imageSrc: Figma,
  },
  {
    name: "GitHub",
    imageSrc: GitHub,
  },
  {
    name: "Sass",
    imageSrc: Sass,
  },
  {
    name: "Yarn",
    imageSrc: Yarn,
  },
  {
    name: "Express",
    imageSrc: NodeJs,
  },
  {
    name: "Mongoose",
    imageSrc: MongoDB,
  },
  {
    name: "PostgreSQL",
    imageSrc: PostgreSQL,
  },
  {
    name: "Heroku",
    imageSrc: Heroku,
  }

];


const Main = () => {



  return (
    <>
      <ContainerHead id="Home">
        <Profile width="850px">
          <HeadImage>
            <Background src={ProfileBackground} alt="ProfilePhoto" />
            <Foreground src={ProfileForegroung} alt="ProfilePhoto" />
          </HeadImage>
          <HeadLine>Olá, I'm <MyName> Iury </MyName> <Hand>👋 </Hand> </HeadLine>
          <Subtext>
            a Brazilian <b>Web Developer</b> living and working in <b>London</b>. I'm
            currently looking for my first role as a Web Developer after working as a <b>Teaching Assistant for General Assembly</b>.
          </Subtext>
        </Profile>
      </ContainerHead>
      <ContainerAbout id="aboutme">
        <Container width="850px">
          <AboutMe>About Me</AboutMe>
          <AboutMeText>
            I’m Iury, a <b>Web Developer</b> based in London. Having previously worked
            in the hospitality industry for seven years, where I learned to be a <b>valuable team member</b> and <b>solve problems under pressure</b>, I felt
            confident and ready for a career change.
          </AboutMeText>
          <AboutMeText>
            After teaching myself some coding online, I created my own personal
            website which allowed me to discover my <b>passion for Web Development</b>.
            To prepare for my first job as a Web Developer, I joined an
            immersive software engineering bootcamp with <b>General Assembly</b>.
          </AboutMeText>
          <AboutMeText>
            I found love in coding because it allows me to be <b>creative, curious
              and constantly learning new skills</b>. After 10 years without being in
            a class, learning how to code made me feel excited about how many
            things I’m capable of achieving .
          </AboutMeText>
          <AboutMeText>
            Once I finished the course, I was offered a position as a <b>Teaching Assistant</b>. After 9 months working for General Assembly, I’m now looking for my <b>first role as a Web Developer</b>.
          </AboutMeText>
        </Container>
      </ContainerAbout>

      <ContainerSkills id="skills">
        <AboutMe>Technologies and Skills</AboutMe>
        <Tags width="950px">
          {tags.map((tag, index) => (
            <Tag key={index}>
              <Skills src={tag.imageSrc} alt="HTML5" />
              <SkillsName>{tag.name}</SkillsName>
            </Tag>
          ))}
        </Tags>
      </ContainerSkills>

      <ContainerProjects id="projects">
        <AboutMe>Projects</AboutMe>
        <Container>
          {projects.map((project, index) => (
            <ScrollAnimation animateIn="fadeInRight" animateOnce key={index}>
              <Card type={project.type}>
                <ImageWrapper>
                  <ProjectVideo
                    src={project.imageSrc}
                    alt="ProjectVideo"
                    muted
                    autoPlay
                    loop
                  >
                    <source src={project.videoUrl}></source>
                  </ProjectVideo>
                </ImageWrapper>
                <ProjectContent>
                  <Title>{project.title}</Title>
                  <Info>{project.description}</Info>

                  <TagsProjects>
                    {project.tags.map((tags, index) => (
                      <Tag key={index}>
                        <Skills src={tags.imageSrc} alt="HTML5" />
                        <SkillsName>{tags.name}</SkillsName>
                      </Tag>
                    ))}
                  </TagsProjects>

                  <Buttons>
                    {project.github && (
                      <ViewCode href={project.github} target="_blank">
                        VIEW SOURCE CODE
                      </ViewCode>
                    )}
                    {project.url && (
                      <ViewWebsite href={project.url} target="_blank">
                        VIEW WEBSITE
                      </ViewWebsite>
                    )}
                  </Buttons>
                </ProjectContent>
              </Card>
            </ScrollAnimation>
          ))}
        </Container>
      </ContainerProjects>
      <Hobbies>
        <AboutMe>Hobbies & Interests</AboutMe>
        <List>
          <AboutMeText>
            I love <b>traveling</b>, learning new <b>languages</b>, exploring
            different <b>cultures</b>, tasting different <b>food</b> and walking around cities <b>discovering</b> hidden gems.
          </AboutMeText>
          <AboutMeText>
            I like to stay active by <b>working out</b>, going for <b>long walks</b> and <b>ciclying</b>.
          </AboutMeText>
          <AboutMeText>
            When I'm home, I like to spend time with <b>friends</b> and of course with my <b>cats Caspar and Raton</b>.
          </AboutMeText>
          <InterestsPic>
            <ImagesInterests1> <WhiteCover>Local musitians in Lisbon 🎷 🪗</WhiteCover></ImagesInterests1>
            <ImagesInterests2> <WhiteCover>Ciclying in Berlin 🚲 🏛</WhiteCover></ImagesInterests2>
            <ImagesInterests3> <WhiteCover>Caspar and Raton 🐈 🐈‍⬛</WhiteCover></ImagesInterests3>
          </InterestsPic>
        </List>
      </Hobbies>
    </>
  );
};


const MyName = styled.b`
margin: 0 7px;
`
const wave = keyframes`
0% {
  transform: rotate(0);
}
20% {
  transform: rotate(30deg);
}
30% {
  transform: rotate(0deg);
}
40% {
  transform: rotate(60deg) scale(1.1);
}
50% {
  transform: rotate(0deg);
}
60% {
  transform: rotate(60deg)scale(1.1);
}
70% {
  transform: rotate(0deg);
}
80% {
  transform: rotate(30deg);
}
100% {
  transform: rotate(0);
}
`
const Hand = styled.div`
animation: ${wave} infinite 1.7s linear;
transform-origin: bottom right;

`
const InterestsPic = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
@media ${device.desktop} {
  }
`
const ImagesInterests = styled.div`
overflow: hidden;
background-size: cover;
width: 300px;
height: 370px;
margin: 35px 20px 0;
border-radius: 5px;
position: relative;
`
const WhiteCover = styled.div`
background: rgba(255,255,255, 1);
font-family: 'Bebas Neue', cursive;
letter-spacing: 1.5px;
opacity: 0;
position: absolute;
height: 50px;
bottom: 0;
right: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
color: black;
font-weight: bold;
font-size: 20px;
transform: translate( 0, 100%);
transition: all 0.5s;
${ImagesInterests}:hover & {
   opacity: 1;
   transform: translate( 0, 0)
  }
`
const ImagesInterests1 = styled(ImagesInterests)`
background-image: url(/first.jpg);
`
const ImagesInterests2 = styled(ImagesInterests)`
background-image: url(/second.jpg);
`
const ImagesInterests3 = styled(ImagesInterests)`
background-image: url(/third.JPG);

`

const Hobbies = styled.div`
  background-color: ${(props) => props.theme.aboutBackground};transition: color 0.3s, background-color 0.3s;
  padding: 100px 0;
`;

const List = styled.ul`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 20px;
  text-align: center;
  padding: 10px 30px 10px;
`;
const TagsProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Tags = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Tag = styled.div`
  margin: 20px 17px;
`;

const ContainerSkills = styled.div`
  background-color: ${(props) => props.theme.skills};transition: color 0.3s, background-color 0.3s;
  padding: 100px 0;
`;
const Skills = styled.img`
  max-width: 48px;
  }
`
const SkillsName = styled.div``;
const Buttons = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
}

  @media ${device.tablet} {
    flex-direction: row;
  }
`;
const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Button = styled.a`
  font: inherit;
  color: inherit;
  border-radius: 7px;
  outline: 0 none;
  border: 0 none;
  font-weight: bold;
  cursor: pointer;
  flex: 1;
  text-align: center;
  text-decoration: none;
  padding: 15px 0;
  font-family: "Roboto Condensed", sans-serif;
  transition: transform 150ms;
  &:hover {
    transform: scale(1.1);
  }
`;
const ViewCode = styled(Button)`
  background-color: #e2e2e2;
  color: black;
  margin-top: 25px;
  @media ${device.tablet} {
    margin: 10px 10px 0;
  }
  @media ${device.desktop} {
    margin: 10px 10px 0;
  }
  @media ${device.wide} {
    margin: 10px 10px 0;
  }
`;
const ViewWebsite = styled(Button)`
  background-color: ${(props) => props.theme.website};transition: color 0.3s, background-color 0.3s;
  color: white;
  margin-top: 10px;
`;

const Info = styled.div`
  font-size: 18px;
  font-family: "Roboto Condensed", sans-serif;
  flex: 1;
  line-height: 1.3;
`;
const Title = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  margin: 30px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: bold;
`;
const ImageWrapper = styled.div`
  flex: 1;
`;
const ProjectVideo = styled.video`
  width: 95%;
  border-radius: 8px;
  
`;
const Card = styled.div`
  background-color: ${(props) => props.theme.aboutBackground};transition: color 0.3s, background-color 0.3s;
  padding: 20px;
  display: flex;
  border-radius: 15px;
  margin: 30px 0;
  flex-direction: column;
  z-index: 0;

  @media ${device.desktop} {
    flex-direction: ${(props) =>
    props.type === "left" ? "row" : "row-reverse"};
  }

`
const ContainerProjects = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.projectsBackground};transition: color 0.3s, background-color 0.3s;
  padding: 100px 0;
`
const AboutMeText = styled.div`
  font-size: 20px;
  margin: 10px 0;

`
const AboutMe = styled.div`
  font-size: 50px;
  color: ${(props) => props.theme.subHeader};transition: color 0.3s, background-color 0.3s;
  margin: 0 0 20px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
`

const ContainerAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.aboutBackground};transition: color 0.3s, background-color 0.3s;
  padding: 100px 0;
`

const Subtext = styled.p`
  color: white;
  font-size: 20px;
  letter-spacing: 1px;
`
const HeadLine = styled.div`
  color: ${(props) => props.theme.headline};transition: color 0.3s, background-color 0.3s;
  font-size: 45px;
  display: flex;
 
`
const ProfileImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`
const Background = styled(ProfileImg)``;
const Foreground = styled(ProfileImg)`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1) translateY(-8px);
  }
`
const HeadImage = styled.div`
  width: 210px;
  height: 210px;
  overflow: hidden;
  border-radius: 105px;
  margin: 0 20px 20px;
  position: relative;
`
const ContainerHead = styled.div`
  background-color: ${(props) => props.theme.nav};transition: color 0.3s, background-color 0.3s;
  transition: color 0.3s, background-color 0.3s;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 80px - 30px);
  padding-top: 100px;
  @media ${device.desktop} {
    padding-top: 50px;
  }
`

const Profile = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export default Main;
