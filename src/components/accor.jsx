import Accordion from 'react-bootstrap/Accordion';
import { Box } from '@mui/material';

function AllCollapseExample() {
  return (
    <Box sx={{marginTop:15}}>
    <Accordion  >
      <Accordion.Item  eventKey="0">
        <Accordion.Header>How does it work?</Accordion.Header>
        <Accordion.Body>
        Our platform works with your content to provides insights and metrics on how you can grow your business and scale your infrastructure.
        </Accordion.Body>
      </Accordion.Item>
      <Box></Box>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Do you offer team pricing?</Accordion.Header>
        <Accordion.Body>
        Yes, we do! Team pricing is available for any plan. You can take advantage of 30% off for signing up for team pricing of 10 users or more.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How do I make changes and configure my site?</Accordion.Header>
        <Accordion.Body>
        You can easily change your site settings inside of your site dashboard by clicking the top right menu and clicking the settings button.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>How do I add a custom domain?</Accordion.Header>
        <Accordion.Body>
        You can easily change your site settings inside of your site dashboard by clicking the top right menu and clicking the settings button.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Box>
  );
}

export default AllCollapseExample;