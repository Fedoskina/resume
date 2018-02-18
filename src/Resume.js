import React, { Component } from 'react';
import { TypographyStyle, GoogleFont } from 'react-typography';
import styled from 'styled-components';

import Link from './components/Link';
import typography from './utils/typography';

import './App.css';
import IconGithub from './github.svg';

import {
  Basics,
  BasicsName,
  BasicsLocation,
  BasicsEmail,
  BasicsWebsite,
  BasicsSummary,
  BasicsProfiles,
  BasicsProfilesItem,
} from './styles/basics.styles';

import {
  Work,
  WorkTitle,
  WorkItems,
  WorkItem,
  WorkItemCompany,
  WorkItemPosition,
  WorkItemDescription,
  WorkItemWebsite,
} from './styles/work.styles';

import {
  PersonalSkills,
  PersonalSkillsTitle,
  PersonalSkillsItems,
  PersonalSkillsItem,
  PersonalSkillsItemTitle,
  PersonalSkillsItemDescription,
} from './styles/personal.styles';


const Resume = () =>
  <Container>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    <Basics>
      <BasicsName>Elena Fedosikhina</BasicsName>
      <BasicsLocation>Stockholm, Sweden</BasicsLocation>
      <BasicsEmail>fedosikhina@gmail.com</BasicsEmail>
      <BasicsWebsite>
        <Link to="https://www.artlebedev.ru/elf/">www.artlebedev.ru/elf</Link>
      </BasicsWebsite>
      <BasicsSummary>Front-end Developer / Team Lead</BasicsSummary>
      <BasicsProfiles>
        <BasicsProfilesItem>
          <img src={IconGithub} height="16" width="16" style={{position:'relative',float:'left',top:7}} />
          <Link to="https://github.com/Fedoskina">github.com/Fedoskina</Link>
        </BasicsProfilesItem>
      </BasicsProfiles>
    </Basics>
    <Work>
      <WorkTitle>Work Experience</WorkTitle>
      <WorkItems>
        <WorkItem>
          <WorkItemCompany>Art. Lebedev Studio</WorkItemCompany>
          <WorkItemPosition>Moscow, Russia<br />Front End Developer / Team Lead (June 2014 &mdash; May 2016)</WorkItemPosition>
          <WorkItemWebsite><Link to="https://artlebedev.com/">www.artlebedev.com</Link></WorkItemWebsite>
          <WorkItemDescription>
            <ul>
              <li>Worked in multiple project teams developing websites using variety of technologies: Imprimatur, PHP, Angular JS, React JS</li>
              <li>Worked with a team maintaining highload websites: Java, GWT</li>
              <li>Worked with mobile development team, helped building iOS apps</li>
            </ul>
          </WorkItemDescription>
        </WorkItem>
      </WorkItems>
    </Work>
    <PersonalSkills>
      <PersonalSkillsTitle>Personal Skills</PersonalSkillsTitle>
      <PersonalSkillsItems>
        <PersonalSkillsItem>
          <PersonalSkillsItemTitle>Methodologies</PersonalSkillsItemTitle>
          <PersonalSkillsItemDescription>Agile, Scrum</PersonalSkillsItemDescription>
        </PersonalSkillsItem>
        <PersonalSkillsItem>
          <PersonalSkillsItemTitle>Metrics</PersonalSkillsItemTitle>
          <PersonalSkillsItemDescription>OKRs, KPIs, Marketing metrics, Sales metrics</PersonalSkillsItemDescription>
        </PersonalSkillsItem>
        <PersonalSkillsItem>
          <PersonalSkillsItemTitle>Languages</PersonalSkillsItemTitle>
          <PersonalSkillsItemDescription>JavaScript, CSS (PostCSS, SASS, LESS), HTML, PHP, Ruby, JSON, XML, XSLT</PersonalSkillsItemDescription>
        </PersonalSkillsItem>
        <PersonalSkillsItem>
          <PersonalSkillsItemTitle>Frameworks &amp; Libraries</PersonalSkillsItemTitle>
          <PersonalSkillsItemDescription>React, Redux, Angular 1&amp;2, Express, Ruby on Rails</PersonalSkillsItemDescription>
        </PersonalSkillsItem>
        <PersonalSkillsItem>
          <PersonalSkillsItemTitle>Version Control</PersonalSkillsItemTitle>
          <PersonalSkillsItemDescription>Git, Mercurial, SVN</PersonalSkillsItemDescription>
        </PersonalSkillsItem>
        <PersonalSkillsItem>
          <PersonalSkillsItemTitle>Data</PersonalSkillsItemTitle>
          <PersonalSkillsItemDescription>MySQL, Redis, MongoDB, PostgreSQL</PersonalSkillsItemDescription>
        </PersonalSkillsItem>
        <PersonalSkillsItem>
          <PersonalSkillsItemTitle>Tooling</PersonalSkillsItemTitle>
          <PersonalSkillsItemDescription>Docker</PersonalSkillsItemDescription>
        </PersonalSkillsItem>
        <PersonalSkillsItem>
          <PersonalSkillsItemTitle>Editors</PersonalSkillsItemTitle>
          <PersonalSkillsItemDescription>VS Code, WebStorm</PersonalSkillsItemDescription>
        </PersonalSkillsItem>
        <PersonalSkillsItem>
          <PersonalSkillsItemTitle>Design</PersonalSkillsItemTitle>
          <PersonalSkillsItemDescription>Sketch, Framer, InVision, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Pixelmator, Affinity Photo, Affinity Designer</PersonalSkillsItemDescription>
        </PersonalSkillsItem>
      </PersonalSkillsItems>
    </PersonalSkills>
  </Container>
  ;

  const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    text-align: left;
  `;

export default Resume;
