{# Page Start #}

## Table of Contents

- [About the Federal Environmental Web Tracker  ](https://envirodatagov.org/federal-environmental-web-tracker-about-page/#about-the-federal-environmental-web-trackernbspnbsp)
- [Why did EDGI create the Tracker?](https://envirodatagov.org/federal-environmental-web-tracker-about-page/#why-did-edgi-create-the-tracker)
- [What is the Tracker? ](https://envirodatagov.org/federal-environmental-web-tracker-about-page/#what-is-the-trackernbsp)
- [Criteria for including a change in the Tracker](https://envirodatagov.org/federal-environmental-web-tracker-about-page/#criteria-for-including-a-change-in-the-tracker)
- [Definitions: fields and columns](https://envirodatagov.org/federal-environmental-web-tracker-about-page/#definitions-fields-and-columns)
- [Definitions: selected topics](https://envirodatagov.org/federal-environmental-web-tracker-about-page/#definitions-selected-topics)
- [Definitions: acronyms and special terms](https://envirodatagov.org/federal-environmental-web-tracker-about-page/#definitions-acronyms-and-special-terms)
- [How to use the Tracker](https://envirodatagov.org/federal-environmental-web-tracker-about-page/#how-to-use-the-tracker)
- [Citing the Tracker](https://envirodatagov.org/federal-environmental-web-tracker-about-page/#citing-the-tracker)
- [Contributors](https://envirodatagov.org/federal-environmental-web-tracker-about-page/#contributors)
- [Contact](https://envirodatagov.org/federal-environmental-web-tracker-about-page/#contact)
- [Go to the Federal Environmental Web Tracker](https://envirodatagov.org/federal-environmental-web-tracker-about-page/#go-to-the-federal-environmental-web-tracker)


## About the Federal Environmental Web Tracker

EDGI’s [website monitoring team ](https://envirodatagov.org/website-governance/monitoring-team/)is monitoring thousands of federal government webpages to track changes under the Trump administration. The Federal Environmental Web Tracker makes these changes publicly available and searchable. Specifically, the Tracker is a collection of documented changes to environment-related federal webpages that EDGI’s team deems noteworthy. It will be updated weekly.

The Federal Environmental Web Tracker is [available here](https://envirodatagov.org/enviro-fed-web-tracker/). Note that the Tracker has tabs for the first and second Trump administrations. EDGI’s [blogs](https://envirodatagov.org/website-governance/blogs) and [reports](https://envirodatagov.org/website-governance/reports/) analyze changes documented in this dataset.

Learn more about the Tracker, including how to use it, below.


## Why did EDGI create the Tracker?

Documenting and analyzing changes to the federal environmental information on government websites is a core part of EDGI’s work. EDGI does this in the pursuit of public knowledge building and government transparency.

EDGI created the Federal Environmental Web Tracker to maintain a public record of changes made to environment-related federal government webpages. EDGI hopes the publishing of this tracker spurs activists, journalists, and academic researchers to utilize this data in their own analyses.

Website changes are almost always precursors or responses to policy changes. Often, they influence policy. Website changes represent changes to the information the public is most likely to access before commenting on proposed rules and when learning about new environmental issues. See the timeline below of changes the website monitoring team has documented regarding climate change information and changes to U.S. climate change policy.

<figure>
  <img src="https://envirodatagov.org/wp-content/uploads/2025/03/EDGI_WM_Timeline_04-1-1024x503.jpeg" alt="">

  <figcaption>
    Timeline of climate change information alterations EDGI has documented and changes to U.S. climate change policy.
  </figcaption>
</figure>

Activism centered around the surveillance of ephemeral information objects is still in its infancy. EDGI hopes others engaging in similar web monitoring efforts can build off of efforts like this tracker.


## What is the Tracker?

EDGI’s website monitoring team monitors thousands of federal webpages related to climate, energy, and the environment. Our partners at the Internet Archive download these webpages every day, and we [built open source software](https://github.com/edgi-govdata-archiving/web-monitoring) to compare versions of these webpages and identify differences. Our website monitoring team analyzes and catalogs the changes we observe.

EDGI’s software, Scanner, compares the HTML code of a webpage as it existed on two different dates, and identifies whether HTML code, visible text, and/or links have changed. The software generates lists of webpage changes for the website monitoring team to review, and offers a user interface that highlights the changes. The website monitoring team reviews these changes and systematically catalogs instances of webpage changes that are not simply administrative. Our process is described more in the graphic below.

<figure>
  <img src="https://envirodatagov.org/wp-content/uploads/2025/03/Screenshot-2025-03-03-at-5.08.33 PM-1024x738.png" alt="">

  <figcaption>

  _How EDGI’s website monitoring team works: Step 1. Curate list of pages to monitor based on monitoring experience and subject matter expertise. Step 2. Archive pages with our partner, the Internet Archive. Step 3. Compare the source code for different versions of the same webpage. Step 4. Creates metadata to guide analysts. Step 5. Render the comparison for visual analysis by the team. Step 6. Team meeting and discussion of changes viewed. Step 7. Publish reports about changes._

  </figcaption>
</figure>

The tracker represents the documented changes that EDGI’s website monitoring team deem important. Each entry represents a verified change as the team’s summary and characterization of that change. The tracker does not necessarily represent _all_ changes that have occurred across the 5,000 URLs monitored by EDGI but includes those that meet the criteria described below.

EDGI’s website monitoring team will continue to update this dataset weekly.


## Criteria for including a change in the Tracker

To be included in the tracker, a change must be identified as important by meeting the following criteria:

- Content related to the subject matter of the page has been added, removed, or substantively changed.
- Language has been altered in a way that affects the focus, tone, or emphasis of the page itself or issues discussed on the page.
- Certain links have been added, removed, or their destination or textual description changed.

Webpage changes that are insignificant, and thus are not included in this tracker, include changes that are mostly administrative, infrastructural (e.g. HTML source code changes that do not result in visible text changes), cosmetic, or happen regularly, such as updating links to recent news and events.


## Definitions: fields and columns

| **Field/Column**                         | **Explanation**                                                                                                                                    |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Date Found                               | The date on which the change was captured by EDGI’s monitoring software system.                                                                    |
| Agency                                   | The name of the agency overseeing the web page on which the change occurred.                                                                       |
| Page Name                                | The title of the specific web page on which the change occurred. The page name is taken from the page’s \<title> field.                            |
| URL                                      | The web address of the specific web page on which a change occurred.                                                                               |
| HTML link — prior to change              | A link to the raw HTML file of the page prior to the change.                                                                                       |
| HTML link — after change                 | A link to the raw HTML file of the page after the change occurred.                                                                                 |
| Internet Archive Wayback Machine Changes | A link to the Internet Archive Wayback Machine’s “Changes” feature to view a visual comparison of the before and after versions of the page.       |
| Access Change                            | Indicates if the change involved a substantial change in access to information (e.g. removal of links or webpages).                                |
| Content Change                           | Indicates if the change involved substantial change to the content of a webpage (e.g. language changes or alteration of sentences and paragraphs). |
| Topic 1                                  | A term that describes the subject matter of the change and/or page.                                                                                |
| Topic 2                                  | A term that describes the subject matter of the change and/or page.                                                                                |
| Description                              | The notes written by an analyst summarizing the change.                                                                                            |


## Definitions: selected topics

- **Air**:  air emissions, airborne exposure
- **Assistance and Aid**:  emergency response, rebuilding assistance
- **Chemicals**:  pesticides, hazardous waste, other toxins, risk assessments
- **Climate**:  climate change, climate change mitigation, climate change adaptation, climate science, climate-related policy
- **Conservation**:  ecosystem health, land management, protected species
- **Data and Tools**:  federal data, tools for public use, other data or tools
- **Economy**:  business and jobs, investment and finance, budgetary/fiscal
- **Educational** **Information**: for students, teachers, professionals, adult public
- **Energy**:  fossil fuels, renewable and clean energy, energy efficiency
- **Environmental Justice**:  civil rights, community engagement, cumulative impacts, EJ programs, EJ research
- **Equity**: diversity, equity, and inclusion (DEI), gender, race and ethnicity, disability
- **Governance**:  partnerships and programs, laws and regulations, oversight & process
- **Health and Safety Information**:  occupational safety, public health
- **Infrastructure**:  IRA/BIL funding, construction, green infrastructure
- **Remediation**, brownfields, Superfund and RCRA, other clean up
- **Science and Research**:  scientific integrity, role of science
- **Water**:  water pollution, nonpoint source pollution, drinking water, water and wetlands
- **Weather**:  drought, hurricanes, floods, temperature


## Definitions: acronyms and special terms

- **Change**: A webpage for which a new version and the previous version are not identical, based on their html source code.

- **Content Change: **Information provided on a page has been altered substantively or the language used to describe information has changed the tenor or emphasis of that information.

- **Access Increase: **There has been an improvement in access to information, such as adding links to further information.

- **Access Decrease: **There has been a reduction in access to information, such as removing links or removing pages.

- **Agencies**

  - **Census:** U.S. Census Bureau
  - **CDC:** Centers for Disease Control and Prevention
  - **DOE:** Department of Energy
  - **DOI:** Department of the Interior
  - **DOJ:** Department of Justice
  - **DOT:** Department of Transportation
  - **EIA:** Energy Information Administration
  - **EOP:** Executive Office of the President
  - **EPA:** Environmental Protection Agency
  - **FEMA:** Federal Emergency Management Agency
  - **Forest Service:** U.S. Forest Service
  - **FWS:** U.S. Fish and Wildlife Service
  - **GAO:** Government Accountability Office
  - **DHHS:** Department of Health and Human Services
  - **NIH:** National Institutes of Health
  - **NASA:** National Aeronautics and Space Administration
  - **NOAA:** National Oceanic and Atmospheric Administration
  - **NPS:** National Park Service
  - **OSHA:** Occupational Safety and Health Administration
  - **State:** U.S. State Department
  - **USDA:** U.S. Department of Agriculture
  - **USGS:** U.S. Geological Survey
  - **Whitehouse:** The White House  

- **Websites for interagency programs** 

  - **Data.gov:**  A cross-agency open data portal.
  - **Globalchange.gov:** The website of the U.S. Global Change Research Program, which is a program mandated by Congress to coordinate federal research and investment in forces shaping the environment. There are 13 member agencies.  


## How to use the Tracker

There are several ways to use this tracker. You can peruse changes and filter to those that are of most interest to you, view the before and after versions of individual changes, analyze types of changes across the tracker, and export HTML information.  

Each change detailed here includes the agency, type of change, and two topics related to the change. You can filter or sort by the fields Agency, Topic 1, Topic 2, and Content Change, or Access Change to narrow the changes to those of interest to you, or to assess patterns to those changes. 

To learn more about a given change, read the analyst notes or search the text of the “Description” column for keywords. To better visualize the difference between the two versions, use the Wayback Machine’s “Changes” feature (built from EDGI’s open source website monitoring software) and load the date of the “before” version on the left and the “after” version on the right. [Click here](https://envirodatagov.org/how-edgis-website-monitoring-team-uses-an-open-source-tool-to-identify-website-changes-and-how-you-can-too/) to see a guide on how to best use “Changes” in conjunction with the tracker.

Download the dataset in CSV, XLS, or other formats by clicking File > Downloads, and then selecting the preferred format. 

Each change includes a link to the source code of the before and after versions of the page, which can be downloaded to view the HTML, CSS, and other scripts. Learn more about EDGI’s database and processing tools at: https\://github.com/edgi-govdata-archiving/web-monitoring.


## Citing the Tracker

This is a living document as the EDGI Website Governance team continues to monitor federal websites. Please expect updates to this dataset weekly starting in March 2025.

If using data in this tracker for a paper or project, please include the following citation: 

EDGI,  “Enviro Fed Web Tracker: Changes to Federal Environmental Information Under the Trump Administration,” URL: https\://envirodatagov.org/enviro-fed-web-tracker/, Accessed on \[Date]. 


## Contributors

EDGI website governance team members spend hours combing through changes to federal websites to document and categorize the changes presented in this dataset. Their efforts are deeply appreciated, and their names are listed here. Additionally, team members Alejandro Paz and Steven Gentry carried the bulk of the work to transform our internal documents from the first Trump administration to this public dataset, reviewing all changes and standardizing categorizations. Special thanks goes out to founding team members Rebecca Lave, Maya Anjur-Dietrich, Andrew Bergman, Toly Rinberg, and Gretchen Gehrke for designing the website monitoring program and Rob Brackett for developing the software to do it.

Thank you to current team members: Rob Brackett, Anita Carey, Abby Chernila, Heather Dungey, Gretchen Gehrke, Jose Gonzalez, Eric Nost, Izzy Pacenza, Alejandro Paz, Grace Poudrier, Michael Sholinbeck.

Thank you to former team members and other contributors: Cole Adler, Dan Allan, Maya Anjur-Dietrich, Vangelis Banos, Chaitanya Bapat, Marcy Beck, Andrew Bergman, Madelaine Britt, Ed Byrne, Jesse Card, Ray Cha, Janak Chadha, Alize Clough, Morgan Currie, Justin Derry, Jesse DiValli, Steven Gentry, Jon Gobeil, Steve Hansen, Mike Hucka, Pamela Jao, Sara Johns, Abby Klionsky, Katherine Kulik, Rebecca Lave, Aaron Lemelin, Kevin Nguyen, Kendra Ouellette, Lindsay Poirier, Toly Rinberg, Sara Rubinow, Justin Schell, Lauren Scott, Jason Sherman, Miranda Sinnott-Armstrong, Andrew Smith, Chris Tirrell, Fotis Tsalampounis, Lizz Ultee, Julia Upfal, Tyler Wedrosky, Liz Williams, Amy Wilson, Adam Wizon, Jacob Wylie, Sara Wylie, Sarah Yu.


## Contact

For more information on the tracker and EDGI’s website monitoring work, please contact us at <gretchen.gehrke@envirodatagov.org>.
