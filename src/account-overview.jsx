import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUpload } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import './account-overview.css';

const Container = styled.div`
  width: 600px;
  margin: 20px auto;
  border: 1px solid #000;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Header = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #000;
  background-color: #fff;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Stat = styled.div`
  text-align: center;
`;

const EmailIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

const GreenH2 = styled.h2`
  color: limegreen;
  padding: 5px;
  margin: 0;
`;

const UploadIcon = styled(FontAwesomeIcon)`
  color: #007bff; /* Light blue color */
  background-color: transparent; /* Transparent background */
`;

const AccountOverview = ({ data }) => {
  const { supportContact, salesOverview } = data;

  return (
    <Container>
      <Header>Your Feefo Support Contact</Header>
      <Section>
        <div>Account Overview</div>
        <div>
          <div> Support</div>
          <div><EmailIcon icon={faEnvelope} aria-label="Email icon" /> {supportContact.email} 020 3362 4208</div>
        </div>
      </Section>
      <Section>
        <UploadIcon icon={faUpload} aria-label="Upload icon" /> Sales
        <div>You had <b>{salesOverview.uploads} uploads</b> and <b>{salesOverview.linesAttempted}</b> lines added.</div>
        <Stats>
          <Stat>
            <GreenH2>{(salesOverview.successfulUploads / salesOverview.uploads) * 100}%</GreenH2>
            <div>UPLOAD SUCCESS</div>
          </Stat>
          <Stat>
            <GreenH2>{(salesOverview.linesSaved / salesOverview.linesAttempted) * 100}%</GreenH2>
            <div>LINES SAVED</div>
          </Stat>
        </Stats>
      </Section>
    </Container>
  );
};

AccountOverview.propTypes = {
  data: PropTypes.shape({
    supportContact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    }),
    salesOverview: PropTypes.shape({
      uploads: PropTypes.number.isRequired,
      successfulUploads: PropTypes.number.isRequired,
      linesAttempted: PropTypes.number.isRequired,
      linesSaved: PropTypes.number.isRequired,
      lastUploadDate: PropTypes.number.isRequired
    })
  }).isRequired
};

export default AccountOverview;
