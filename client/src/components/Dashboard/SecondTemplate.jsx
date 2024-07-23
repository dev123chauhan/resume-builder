// import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const SectionTitle = styled(Typography)(() => ({
  fontWeight: "bold",
  fontSize: "1.25rem",
}));

const SectionContent = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const SkillItem = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  margin: theme.spacing(0.5),
  padding: theme.spacing(0.5, 1),
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.spacing(1),
  color: theme.palette.primary.contrastText,
}));

const ExperienceItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
  borderLeft: `4px solid ${theme.palette.primary.main}`,
}));

const EducationItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const Footer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  backgroundColor: theme.palette.grey[200],
}));

export default function SecondTemplate() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          JONATHAN WRIGHT
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lead Business Analyst
        </Typography>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Typography
            style={{ alignItems: "center", display: "flex" }}
            variant="body2"
          >
            {" "}
            <PhoneIcon />
            +1-921-389-0182
          </Typography>

          <Typography
            style={{ alignItems: "center", display: "flex" }}
            variant="body2"
          >
            {" "}
            <EmailIcon />
            name@gmail.com
          </Typography>

          <Typography
            style={{ alignItems: "center", display: "flex" }}
            variant="body2"
          >
            <LinkedInIcon /> linkedin.com/in/jonwrightjr
          </Typography>
        </div>
      </div>

      <Grid item xs={12} md={8}>
        <SectionTitle style={{textAlign:"center"}}>Summary</SectionTitle>
        <hr />
        <SectionContent>
          I am an experienced Business Analyst with a strong technical
          background and great project management skills. I am able to work on
          multiple projects at the same time, which over the years at Network
          Solutions have lead to eight-digit efficiencies for the business.
          Furthermore, I immensely enjoy the process of deriving critical
          business insights using analytics, and then supporting or directly
          managing the efficiency implementation projects. My ability to move
          from analysis or leading a team of analysts to supporting or leading
          the actual project is something that could help further accelerate the
          velocity of work at lon Insights.
        </SectionContent>

        <SectionTitle>Skills</SectionTitle>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <SkillItem>Budgeting</SkillItem>
          <SkillItem>Financial Analysis</SkillItem>
          <SkillItem>Project Management</SkillItem>
          <SkillItem>Stakeholder Management</SkillItem>
          <SkillItem>Business Strategy</SkillItem>
          <SkillItem>Excel</SkillItem>
          <SkillItem>VBA</SkillItem>
          <SkillItem>SQL</SkillItem>
          <SkillItem>QuickBooks</SkillItem>
          <SkillItem>Power BI</SkillItem>
          <SkillItem>Tableau</SkillItem>
          <SkillItem>Python</SkillItem>
        </Box>

        <SectionTitle>Experience</SectionTitle>
        <ExperienceItem>
          <Typography variant="h6" gutterBottom>
            Network Solutions LLC
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Lead Business Analyst & Project Manager
          </Typography>
          <Typography variant="body2" gutterBottom>
            Dallas, TX
            <br />
            2019-Ongoing
          </Typography>
          <ul>
            <li>
              Created new strategies to manage $2 million of accounts at risk,
              resulting in an increase of 4% in revenue in 6 months.
            </li>
            <li>
              Led the effort to deploy an automated time & expense reporting
              system for more than 90 onsite and offsite personnel across 3
              locations.
            </li>
            <li>
              Oversaw the budget and schedule of a project to recruit, hire, and
              train 150 new employees at five new locations.
            </li>
          </ul>
        </ExperienceItem>
        <ExperienceItem>
          <Typography variant="h6" gutterBottom>
            Senior Business Analyst
          </Typography>
          <Typography variant="body2" gutterBottom>
            2017-2019
          </Typography>
          <ul>
            <li>
              Through an improved pricing model, increased gross revenue of 15%
              in 2018 compared to 2017 with no change to fixed costs.
            </li>
            <li>
              Reduced warehouse processing time by 30% in just 3 months while
              industry norm is 10 months.
            </li>
            <li>
              Achieved project milestones and deliverables with an internal and
              external team of 10+ analysts.
            </li>
          </ul>
        </ExperienceItem>
        <ExperienceItem>
          <Typography variant="h6" gutterBottom>
            Lauzon
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Business Analyst
          </Typography>
          <Typography variant="body2" gutterBottom>
            Dallas, TX
            <br />
            2013-2016
          </Typography>
          <ul>
            <li>
              Lauzon is a 30-year-old limited company in the printing and
              packaging field with over 150 employees.
            </li>
            <li>Prepared 2016 Budget with Variance analysis to prior years.</li>
            <li>
              Assisted merger in advanced electronics space, identifying synergy
              opportunities of $ 60 M.
            </li>
            <li>
              Reduced IPS (Customer Issues) by 2.2% while impacting merely 3% of
              GMV.
            </li>
            <li>Designed and maintained 10+ data integration jobs.</li>
          </ul>
        </ExperienceItem>

        <SectionTitle>Education</SectionTitle>
        <EducationItem>
          <Typography variant="h6" gutterBottom>
            University of Wisconsin
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            M.Sc. in Finance
          </Typography>
          <Typography variant="body2" gutterBottom>
            Wisconsin
            <br />
            2012-2013
          </Typography>
        </EducationItem>
        <EducationItem>
          <Typography variant="h6" gutterBottom>
            University of Wisconsin
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            BBA: Business, Supply Chain Management
          </Typography>
          <Typography variant="body2" gutterBottom>
            Wisconsin
            <br />
            2008-2012
          </Typography>
        </EducationItem>

        <SectionTitle>Courses & Certificates</SectionTitle>
        <SectionContent>
          PMI Professional in Business Analysis (PBA) - PMI, 2019
          <br />
          Certified Associate in Project Management (CAPM) - PMI, 2018
          <br />
          High-Dimensional Data Analysis - Harvard, 2017
        </SectionContent>
      </Grid>
      <Footer>
        <Typography variant="body2">www.enhancv.com</Typography>
        <Divider sx={{ margin: "1rem 0" }} />
        <Typography variant="body2">Powered by Enhancu</Typography>
      </Footer>
    </div>
  );
}
