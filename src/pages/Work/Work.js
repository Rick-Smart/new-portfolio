import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph } from "../../styles";
import { WorkItem, WorkTitle, JobTitle, JobLocation } from "./styles";

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Work</SectionTitle>
        <ul>
          {user.work.map((work, i) => (
            <WorkItem key={i}>
              <WorkTitle>{work.position}</WorkTitle>
              <div>
                <JobTitle>{work.company}</JobTitle> <JobLocation>{work.location}</JobLocation>
                <span> &sdot; </span>
                <JobLocation>
                  {work.start.year} to {work.end.year}
                </JobLocation>
              </div>
              <Paragraph>{work.summary}</Paragraph>
            </WorkItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Work;
