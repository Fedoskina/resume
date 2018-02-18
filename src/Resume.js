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
  WorkItemProjects,
  WorkItemWebsite,
} from './styles/work.styles';

import {
  Education,
  EducationTitle,
  EducationItems,
  EducationItem,
  EducationItemTitle,
  EducationItemDescription,
} from './styles/education.styles';

import {
  PersonalSkills,
  PersonalSkillsTitle,
  PersonalSkillsItems,
  PersonalSkillsItem,
  PersonalSkillsItemTitle,
  PersonalSkillsItemDescription,
} from './styles/personal.styles';

import {
  References,
  ReferencesTitle,
  ReferencesDescription,
} from './styles/references.styles';

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
      <BasicsSummary><strong>Front-end Developer / Team Lead</strong> with a passion for designing and building beautiful user experiences</BasicsSummary>
      <BasicsProfiles>
        <BasicsProfilesItem>
          <img src={IconGithub} height="16" width="16" style={{position:'relative',float:'left',top:7}} />
          <Link to="https://github.com/Fedoskina">github.com/Fedoskina</Link> (not very active, but sharing more to open source is my goal for this year!)
        </BasicsProfilesItem>
      </BasicsProfiles>
    </Basics>
    <Work>
      <WorkTitle>Work Experience</WorkTitle>
      <WorkItems>
        <WorkItem>
          <WorkItemCompany>Freelancer</WorkItemCompany>
          <WorkItemPosition>Stockholm, Sweden<br />Front End Developer (November 2016 &mdash; current)</WorkItemPosition>
          <WorkItemDescription>
            At some point, I decided to move to Europe; there I've started working as a freelancer (UI/UX Designer and Front-end Developer).
            <ul>
              <li>Worked with different business helping them to build the Internet appearance.</li>
            </ul>
          </WorkItemDescription>
          <WorkItemProjects>
            <ul>
              <li>
                <strong>MeyerSound.ru</strong><br />
                Meyer Sound company is an official Russian distributor of Major Sound sound equipment.
                On this project, I've worked as a Front-end Developer & UI/UX Designer.
                I successfully adapted website to Russian customers and made it a robust business
                instrument helping Meyer Sound to sell efficiently, and its customers - to find what they need out of a wide variety of products.
              </li>
              <li>
                <strong>MajorSound.ru</strong><br />
                Major Sound is also Meyer Sound Russia's company project. Besides the promo website,
                they needed another portal to showcase their product catalog and training.
                I've solved this problem efficiently too which resulted in 700% increase of customers
                registering for training or leaving their contact information after visiting
                the website to get a business proposal for buying the equipment.
              </li>
              <li>
                <strong>Tenerifka.ru</strong><br />
                Tenerifka is a travel portal containing a lot of information about Tenerife
                (one of the Canary Islands) and excursions. Initially, it was just a single person behind
                this website who was selling tours, now it's a business of 3 with a stable inbound stream of customers.
                I was also advising Tenerifka group on SMM in Facebook which made them become the biggest Russian-speaking Tenerife group on a Facebook.
              </li>
            </ul>
          </WorkItemProjects>
        </WorkItem>
        <WorkItem>
          <WorkItemCompany>Mann, Ivanov and Ferber</WorkItemCompany>
          <WorkItemPosition>Moscow, Russia<br />IT Team Lead &mdash; Front-end (June 2016 &mdash; October 2016)</WorkItemPosition>
          <WorkItemWebsite><Link to="https://www.mann-ivanov-ferber.com/">www.mann-ivanov-ferber.com</Link></WorkItemWebsite>
          <WorkItemDescription>
            Mann, Ivanov and Ferber is a leading Russian-based publishing house.
            <ul>
              <li>Worked as a Team Lead/Manager in a team responsible for the main website customer experience improvements.</li>
            </ul>
          </WorkItemDescription>
        </WorkItem>
        <WorkItem>
          <WorkItemCompany>Art. Lebedev Studio</WorkItemCompany>
          <WorkItemPosition>Moscow, Russia<br />Front End Developer / Team Lead (June 2014 &mdash; May 2016)</WorkItemPosition>
          <WorkItemWebsite><Link to="https://artlebedev.com/">www.artlebedev.com</Link></WorkItemWebsite>
          <WorkItemDescription>
            Art. Lebedev Studio is a Russian oldest and biggest web and industrial design studio.
            <ul>
              <li>Worked as a Front-end Developer/Team Lead (Project Manager) in a teams building websites using variety of technologies: Imprimatur, Java, PHP, Angular JS, React JS</li>
            </ul>
          </WorkItemDescription>
          <WorkItemProjects>
            <ul>
              <li>
                <strong>Only.ru</strong><br />
                Only is a Russian distributor of ready-made saunas and related equipment. The website created at the studio contains detailed information about heaters,
                steam generators, fireplaces, heat radiators, chimneys, evaporators and other components that make up Finnish bathing experience.<br />
                I was leading the team building the website using Imprimatur (Art. Lebedev Studio in-house cms) and AngularJS 1.
              </li>
              <li>
                <strong>park.sokolniki.com/en/</strong><br />
                Sokolniki is one of the largest parks in Europe and the oldest recreational area in Moscow.
                Exciting events happen at the park every day. Today, it is home to cafés and playgrounds,
                workshops and exhibitions, campaigns and presentations. To help visitors choose which places and
                events to visit and find out the little-known facts about the park, an official website for Sokolniki was created at the studio.<br />
                I was leading the team building the website using Imprimatur (Art. Lebedev Studio in-house cms) and ReactJS.
              </li>
              <li>
                <strong>Elegant.ru</strong><br />
                Elegant online store sells fashion clothes and delivers them all over the country. Visitor statistics collected
                by the first version of the website was used to improve navigation system and redesign key pages.
                Users can now access the website on any device, place orders quickly, easily navigate the variety
                of brands and receive information on new arrivals in a timely manner.<br />
                I managed the team and took part in creating templates for this online store.
              </li>
              <li>
                <strong>Pushe.ru</strong><br />
                Pushe factory website now features an online store offering both standard models and
                custom items that can’t be purchased offline. Visitors can choose furniture by upholstery color,
                transformation mechanism and decor type.<br />
                I was leading the team building templates for this website, and I was responsible for communication with backend developers team (Java).
              </li>
            </ul>
          </WorkItemProjects>
        </WorkItem>
      </WorkItems>
    </Work>
    <Education>
      <EducationTitle>Education</EducationTitle>
      <EducationItems>
        <EducationItem>
          <EducationItemTitle>Chelyabinsk State University, 2008-2013</EducationItemTitle>
          <EducationItemDescription>MA. Accounting, analysis and audit.</EducationItemDescription>
        </EducationItem>
      </EducationItems>
    </Education>
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
          <PersonalSkillsItemDescription>JavaScript, CSS (PostCSS, SASS, LESS), HTML, Parser 3, Ruby, JSON</PersonalSkillsItemDescription>
        </PersonalSkillsItem>
        <PersonalSkillsItem>
          <PersonalSkillsItemTitle>Frameworks &amp; Libraries</PersonalSkillsItemTitle>
          <PersonalSkillsItemDescription>jQuery, React, Redux, Angular</PersonalSkillsItemDescription>
        </PersonalSkillsItem>
        <PersonalSkillsItem>
          <PersonalSkillsItemTitle>Version Control</PersonalSkillsItemTitle>
          <PersonalSkillsItemDescription>Git</PersonalSkillsItemDescription>
        </PersonalSkillsItem>
        <PersonalSkillsItem>
          <PersonalSkillsItemTitle>Editors</PersonalSkillsItemTitle>
          <PersonalSkillsItemDescription>WebStorm</PersonalSkillsItemDescription>
        </PersonalSkillsItem>
        <PersonalSkillsItem>
          <PersonalSkillsItemTitle>Design</PersonalSkillsItemTitle>
          <PersonalSkillsItemDescription>Sketch, Framer, InVision, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Pixelmator, Affinity Photo, Affinity Designer</PersonalSkillsItemDescription>
        </PersonalSkillsItem>
      </PersonalSkillsItems>
    </PersonalSkills>
    <References>
      <ReferencesTitle>References</ReferencesTitle>
      <ReferencesDescription>References available upon request</ReferencesDescription>
    </References>
  </Container>
  ;

  const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    text-align: left;
  `;

export default Resume;
