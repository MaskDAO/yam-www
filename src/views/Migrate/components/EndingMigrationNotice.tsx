import React from "react";
import { Box, Button, Notice, NoticeContent, NoticeIcon, Spacer } from "react-neu";
import styled from "styled-components";

const EndingMigrationNotice: React.FC = () => (
  <Notice>
    <NoticeIcon>❗</NoticeIcon>
    <NoticeContent>
      <StyledNoticeContentInner>
        <span>For all Yam holders, Yam will be ending the migration on <b className="alert-color">February 15th 2021 00:00 UTC</b>. If you have any Yam v2, you can migrate it to v3 below.</span>
      </StyledNoticeContentInner>
    </NoticeContent>
  </Notice>
);

const StyledNoticeContentInner = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: flex-start;
  }
`;

export default EndingMigrationNotice;
