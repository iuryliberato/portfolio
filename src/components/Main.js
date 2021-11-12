import React from "react"
import styled from 'styled-components'
import ProfileForegroung from '../images/iury-foreground.png'
import ProfileBackground from '../images/iury-background-2.png'
import GetAWave from '../images/getAWave.png'
import Homemade from '../images/homemade.png'
import BonVoyage from '../images/Bon-Voyage.png'
import EveLight from '../images/Eve-light-theme.png'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"

import JavaScript from '../Tags/javaScript.svg'
import Html5 from '../Tags/html-5.svg'
import Css3 from '../Tags/css3.svg'
import ReactIcon from '../Tags/react.svg'
import NodeJs from '../Tags/node-js.svg'
import MongoDB from '../Tags/mongodb.svg'
import Npm from '../Tags/npm.svg'
import Python from '../Tags/python.svg'
import Django from '../Tags/django.svg'
import Bootstrap from '../Tags/bootstrap.svg'
import Figma from '../Tags/figma.svg'
import GitHub from '../Tags/github.svg'
import Sass from '../Tags/sass.svg'
import Yarn from '../Tags/yarn.svg'

import { Container } from './Container'
import { device } from '../components.styles/sizes'


const projects = [{
  type: 'right',
  title: `EVE Events`,
  description: 'I made a React app with a Python and Django back-end, React, JavaScript, CSS with Styled-Components in the front-end. Users can register/login manually or register/login with google, switch themes between dark and light mode,  search and filter events, confirm attendance, and create their own events. In their own profile, they can see, edit and delete events that they have created, and also see events that they are attending to.',
  imageSrc: EveLight,
  url: 'https://eve-social-events.herokuapp.com/',
  github: 'https://github.com/iuryliberato/events',
  tags: [{
    name: 'HTML5',
    imageSrc: Html5
  },
  {
    name: 'React',
    imageSrc: ReactIcon
  }, {
    name: 'Python',
    imageSrc: Python
  },
  {
    name: 'Django',
    imageSrc: Django
  }, {
    name: 'Styled Components',
    imageSrc: Css3
  }, {
    name: 'Yarn',
    imageSrc: Yarn
  }
  ],
},
{
  type: 'left',
  title: `Homemade Recipes`,
  description: 'I made a React App with a Node back-end that uses Express, MongoDB and  Mongoose. Users can create accounts, write recipes, leave reviews including a picture of the recipe they made. They can also search recipes and view user profiles.',
  imageSrc: Homemade,
  url: 'https://recipes-homemade.herokuapp.com/',
  github: 'https://github.com/vezmaxwell/Homemade',
  tags: [{
    name: 'HTML5',
    imageSrc: Html5
  },
  {
    name: 'JavaScript',
    imageSrc: JavaScript
  },
  {
    name: 'React',
    imageSrc: ReactIcon
  },
  {
    name: 'NodeJs',
    imageSrc: NodeJs
  }, {
    name: 'Sass',
    imageSrc: Sass
  },
  {
    name: 'Yarn',
    imageSrc: Yarn
  },
  {
    name: 'Mongoose',
    imageSrc: MongoDB
  }],
},
{
  type: 'right',
  title: `Bon Voyage`,
  description: 'I created an app using an existing  API for locations, and to build the front-end I used React and CSS. The website has 2 main pages, one where you can search and filter destinations, and the second which has more detail about the destination chosen.',
  imageSrc: BonVoyage,
  url: 'https://iury-api-project.netlify.app/',
  github: 'https://github.com/iuryliberato/Place-App/blob/master/README.md',
  tags: [{
    name: 'HTML5',
    imageSrc: Html5
  },
  {
    name: 'CSS3',
    imageSrc: Css3
  },
  {
    name: 'JavaScript',
    imageSrc: JavaScript
  },
  {
    name: 'React',
    imageSrc: ReactIcon
  },
  {
    name: 'Bootstrap',
    imageSrc: Bootstrap
  }, {
    name: 'Yarn',
    imageSrc: Yarn
  }],
},
{
  type: 'left',
  title: `Get'a Wave`,
  description: 'I had one week to build a grid-based game using JavaScript, HTML and CSS. My own version of frogger has three different characters, who must navigate the course using the keyboard arrow buttons while avoiding obstacles. The game increases in difficulty after each round.',
  imageSrc: GetAWave,
  url: 'https://iuryliberato.github.io/project-1/',
  github: 'https://github.com/iuryliberato/project-1',
  tags: [{
    name: 'HTML5',
    imageSrc: Html5
  },
  {
    name: 'CSS3',
    imageSrc: Css3
  }, {
    name: 'JavaScript',
    imageSrc: JavaScript
  }
  ]
}]


const tags = [{
  name: 'HTML5',
  imageSrc: Html5
},
{
  name: 'CSS3',
  imageSrc: Css3
},
{
  name: 'JavaScript',
  imageSrc: JavaScript
},
{
  name: 'React',
  imageSrc: ReactIcon
},
{
  name: 'NodeJs',
  imageSrc: NodeJs
},
{
  name: 'MongoDB',
  imageSrc: MongoDB
},
{
  name: 'NPM',
  imageSrc: Npm
},
{
  name: 'Python',
  imageSrc: Python
},
{
  name: 'Django',
  imageSrc: Django
},
{
  name: 'Bootstrap',
  imageSrc: Bootstrap
},
{
  name: 'Figma',
  imageSrc: Figma
},
{
  name: 'GitHub',
  imageSrc: GitHub
},
{
  name: 'Sass',
  imageSrc: Sass
},
{
  name: 'Yarn',
  imageSrc: Yarn
},
{
  name: 'Express',
  imageSrc: NodeJs
},
{
  name: 'Mongoose',
  imageSrc: MongoDB
},
{
  name: 'Styled Components',
  imageSrc: Css3
}
]


const Main = () => {

  return (
    <>
      <ContainerHead>
        <Profile width="700px">
          <HeadImage>
            <Background src={ProfileBackground} alt="ProfilePhoto" />
            <Foreground src={ProfileForegroung} alt="ProfilePhoto" />

          </HeadImage>
          <HeadLine>Ola, I'm Iury,</HeadLine>
          <Subtext>a Brazilian Web Developer living and working in London. I'm currently looking for my first role after completing General Aseembly's Bootcamp.
          </Subtext>
        </Profile>
      </ContainerHead>
      <ContainerAbout id="aboutme">
        <Container width="700px">
          <AboutMe>About Me</AboutMe>
          <AboutMeText>I’m Iury, a Web Developer based in London. Having previously worked in the hospitality industry for seven years, where I learned to be a valuable team member and solve problems under pressure, I felt confident and ready for a career change.</AboutMeText>
          <AboutMeText>After teaching myself some coding online, I created my own personal website which allowed me to discover my passion for Web Development. To prepare for my first job as a Web Developer, I joined an immersive software engineering bootcamp with General Assembly.</AboutMeText>
          <AboutMeText>I found love in coding because it allows me to be creative, curious and constantly learning new skills. After 10 years without being in a class, learning how to code made me feel excited about how many things I’m capable of achieving .</AboutMeText>
          <AboutMeText>I am now ready for my first role as a web developer in a company where I can share my creativity, lively personality and learn new skills in a job that pushes me to become a great developer</AboutMeText>
          <AboutMeText></AboutMeText>

        </Container>
      </ContainerAbout>


      <ContainerSkills id="skills">
        <AboutMe>Technologies and Skills</AboutMe>
        <Tags width="900px">
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
            <ScrollAnimation animateIn='fadeInRight'
              animateOnce key={index}>
              <Card type={project.type}>
                <ImageWrapper>
                  <ProjectImage src={project.imageSrc} alt="ProfilePhoto"></ProjectImage>
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
                      <ViewCode href={project.github} target="_blank">VIEW SOURCE CODE</ViewCode>
                    )}
                    {project.url && (
                      <ViewWebsite href={project.url} target="_blank">VIEW WEBSITE</ViewWebsite>
                    )}

                  </Buttons>
                </ProjectContent>
              </Card>
            </ScrollAnimation>
          ))}
        </Container>
      </ContainerProjects>

    </>
  )

}
const TagsProjects = styled.div`
display: flex;
justify-content: center;
`
const Tags = styled(Container)`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const Tag = styled.div`
margin: 20px 17px;
`

const ContainerSkills = styled.div` 
background-color: ${props => props.theme.skills};
padding: 100px 0;

`
const Skills = styled.img` 
max-width: 48px;
`
const SkillsName = styled.div` 

`
const Buttons = styled.div`
margin-bottom: 50px;
display: flex;
flex-direction: column;

@media ${device.tablet} {
  flex-direction: row;
}
@media ${device.desktop} {
flex-direction: row;}

@media ${device.wide} {
flex-direction: row;
} 
`
const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
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
  font-family: 'Roboto Condensed', sans-serif;
  transition: transform 150ms;
  &:hover{
    transform: scale(1.10);
  }
`
const ViewCode = styled(Button)`
background-color: #E2E2E2;
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
`
const ViewWebsite = styled(Button)`
background-color: ${props => props.theme.website};
color: white;
margin-top: 10px;

`

const Info = styled.div`
font-size: 18px;
font-family: 'Roboto Condensed', sans-serif;
flex: 1;
`
const Title = styled.div`
font-size: 30px;
display: flex;
justify-content: center;
margin: 30px;
font-family: 'Roboto Condensed', sans-serif;
font-weight: bold;
`
const ImageWrapper = styled.div`
flex: 1;
`
const ProjectImage = styled.img`
width: 100%;
`
const Card = styled.div`
background-color: ${props => props.theme.aboutBackground};
padding: 20px;
display: flex;
border-radius: 15px;
margin: 30px 0;
flex-direction: column;
z-index: 0;

@media ${device.desktop} {
  flex-direction: ${props => props.type === 'left' ? 'row' : 'row-reverse'};
}

/* @media ${device.desktop} {
  background:red;
}

@media ${device.wide} {
  background:yellow;
} */
`
const ContainerProjects = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background-color: ${props => props.theme.projectsBackground};
padding: 100px 0;
`
const AboutMeText = styled.div`
font-size: 20px;
margin: 10px 0;
font-family: 'Roboto Condensed', sans-serif;
`
const AboutMe = styled.div`
font-size: 50px;
color: ${props => props.theme.subHeader};
margin: 0 0 20px;
display: flex;
justify-content: center;
`

const ContainerAbout = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background-color: ${props => props.theme.aboutBackground};
padding: 100px 0;
`


const Subtext = styled.p`
color: white;
font-size: 20px;
letter-spacing: 1px;
`
const HeadLine = styled.div`
color: ${props => props.theme.headline};
font-size: 45px;

`
const ProfileImg = styled.img`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
`
const Background = styled(ProfileImg)`

`
const Foreground = styled(ProfileImg)`
transition: transform 0.1s;
&:hover{
transform: scale(1.1) translateY(-8px);
}
`
const HeadImage = styled.div`
width: 200px;
height: 200px;
overflow: hidden;
border-radius: 100px;
margin: 0 20px 20px;
position: relative;
`
const ContainerHead = styled.div`
background-color: ${props => props.theme.nav};
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
height: calc(100vh - 80px - 30px);

`

const Profile = styled(Container)`
  display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
  `

export default Main