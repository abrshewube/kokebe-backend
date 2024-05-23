import React from 'react';
import { Typography, Collapse } from 'antd';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const FAQPage = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto">
        <Title level={2} className="text-center mb-8">Frequently Asked Questions</Title>
        <Collapse accordion>
          <Panel header="What is the purpose of this website?" key="1">
            <Paragraph>
              This website was created to provide a platform for [specific purpose, e.g., showcasing student projects, sharing school news, providing educational resources, etc.].
            </Paragraph>
          </Panel>
          <Panel header="Who created this website?" key="2">
            <Paragraph>
              The website was designed and developed by students from [specific class, club, or school, e.g., the Web Development Club at Kokeb Tsebah School].
            </Paragraph>
          </Panel>
          <Panel header="How often is the content updated?" key="3">
            <Paragraph>
              The content is updated regularly, with new posts, updates, and resources added [weekly, bi-weekly, monthly, or specify a different schedule].
            </Paragraph>
          </Panel>
          <Panel header="Can I contribute content to the website?" key="4">
            <Paragraph>
              Yes, we welcome contributions! Please contact us via [specific contact method] for guidelines on how to submit your content.
            </Paragraph>
          </Panel>
          <Panel header="Is the website mobile-friendly?" key="5">
            <Paragraph>
              Yes, the website is designed to be responsive and accessible on both desktop and mobile devices.
            </Paragraph>
          </Panel>
          <Panel header="How can I contact the website administrators?" key="6">
            <Paragraph>
              You can contact us through the contact form on our website, or email us at [specific email address].
            </Paragraph>
          </Panel>
          <Panel header="Are there any privacy policies or terms of use?" key="7">
            <Paragraph>
              Yes, our privacy policy and terms of use can be found at the bottom of the homepage or via the [specific link].
            </Paragraph>
          </Panel>
          <Panel header="What technologies were used to build the website?" key="8">
            <Paragraph>
              The website was built using [HTML, CSS, JavaScript, and other relevant technologies or frameworks, e.g., React, WordPress].
            </Paragraph>
          </Panel>
          <Panel header="Can I report a problem or bug on the website?" key="9">
            <Paragraph>
              Yes, please report any issues using our [bug report form or specific email address]. We appreciate your feedback and will work to resolve any problems promptly.
            </Paragraph>
          </Panel>
          <Panel header="Does the website support multiple languages?" key="10">
            <Paragraph>
              Currently, the website is available in [specific language(s)]. We are working on adding more language options in the future.
            </Paragraph>
          </Panel>
          <Panel header="Are there any accessibility features for people with disabilities?" key="11">
            <Paragraph>
              Yes, we have implemented several accessibility features, such as [alt text for images, keyboard navigation, screen reader support, etc.]. If you have specific needs, please let us know.
            </Paragraph>
          </Panel>
          <Panel header="How can I stay updated with new content on the website?" key="12">
            <Paragraph>
              You can subscribe to our newsletter or follow us on [specific social media platforms] to receive updates.
            </Paragraph>
          </Panel>
          <Panel header="Can I advertise on the website?" key="13">
            <Paragraph>
              Currently, we do/do not accept advertisements. For advertising inquiries, please contact us at [specific email address].
            </Paragraph>
          </Panel>
          <Panel header="Who can use the resources available on the website?" key="14">
            <Paragraph>
              The resources are available for [students, teachers, parents, the general public, etc.]. Some resources may require a login or specific permissions.
            </Paragraph>
          </Panel>
          <Panel header="Is there a way to provide feedback on the website?" key="15">
            <Paragraph>
              Yes, we welcome your feedback! Please use the feedback form on our website or email us at [specific email address]. Your input helps us improve the site.
            </Paragraph>
          </Panel>
          <Panel header="Is the website secure?" key="16">
            <Paragraph>
              As a locally hosted website, it is accessible only within the local network, which adds a layer of security. However, basic security measures like secure coding practices have also been implemented.
            </Paragraph>
          </Panel>
          <Panel header="Who maintains the website?" key="17">
            <Paragraph>
              The website is maintained by students under the supervision of [specific teacher or administrator].
            </Paragraph>
          </Panel>
          <Panel header="Can I request new features or improvements for the website?" key="18">
            <Paragraph>
              Yes, we welcome suggestions! Please use the feedback form on the site or contact us at [specific email address].
            </Paragraph>
          </Panel>
          <Panel header="How can I get help if I have trouble using the website?" key="19">
            <Paragraph>
              You can get help by contacting us at [specific email address] or asking a member of the web development team for assistance.
            </Paragraph>
          </Panel>
          {/* Add more questions and answers */}
        </Collapse>
        <Paragraph className="mt-8">
          If you have any additional questions or need further assistance, please don't hesitate to contact us. Our friendly customer service team is here to help!
        </Paragraph>
        <Paragraph>
          Email: info@ykokebetsibah.com<br />
          Phone: +251-123-456-789
        </Paragraph>
      </div>
    </div>
  );
};

export default FAQPage;
