import styled from 'styled-components';

const Basics = styled.div`
  margin-bottom: 2rem;
`;

const BasicsName = styled.h1`margin-bottom:0.5rem`;

const BasicsLocation = styled.div`opacity:0.5`;

const BasicsEmail = styled.div``;

const BasicsWebsite = styled.div`
  a {
    color: inherit;
  }
`;

const BasicsSummary = styled.div`
  margin: 0.5rem 0;
`;

const BasicsProfiles = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const BasicsProfilesItem = styled.li`
  a {
    margin-left: 1ex;
    color: inherit;
  }
`;

export {
  Basics,
  BasicsName,
  BasicsLocation,
  BasicsEmail,
  BasicsWebsite,
  BasicsSummary,
  BasicsProfiles,
  BasicsProfilesItem,
};
