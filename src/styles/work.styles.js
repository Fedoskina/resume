import styled from 'styled-components';

const Work = styled.div`
  margin-bottom: 2rem;
`;

const WorkTitle = styled.h2``;

const WorkItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const WorkItem = styled.li`
  margin-bottom: 1rem;
`;

const WorkItemCompany = styled.h3`
  margin-bottom: 0.5rem;
`;

const WorkItemPosition = styled.div`
  opacity: 0.75;
`;

const WorkItemDescription = styled.div`
ul {
  list-style-type: disc;
}

ul ul {
  margin-top: 0;
}

li {
  margin-bottom: 0;
}
`;

const WorkItemWebsite = styled.div`
  a {
    color: inherit;
  }
`;

export {
  Work,
  WorkTitle,
  WorkItems,
  WorkItem,
  WorkItemCompany,
  WorkItemPosition,
  WorkItemDescription,
  WorkItemWebsite,
}
