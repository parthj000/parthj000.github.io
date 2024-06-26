import makeSections, { createImage, happen, profileCards } from "./scr.js";
var arr = [
  {
    heading: "About <span style='color:red;'>Us</span>",
    headingText: "About Us",
    content:
      "<p>The department of Textile Chemistry was established in the year 1993. Department offers four year degree course in B. Tech. (Textile Chemistry). It is engaged in Post graduate education and research activities in the college. Department has qualified faculty and other highly skilled technical staff. It has arranged various extramural and extension lectures of experts from institutions of national repute like NIT and IIT in preceding academic sessions.<br>Being the part of an exclusive college offering degree courses the department has university toppers every year. The products of this department are excelling in their world of work across the globe occupying respectable positions in organizations of national and international repute. Department provide the testing facility and consultancy for the industry.</p>",
    id: "About-us",
    before: "one",
    shadowColor: "blue",

    brdrRd: "1rem",
  },
  {
    heading: "Vision And <span style='color: #ff6600;'>Mission</span></span>",
    headingText: "Vision and Mission",
    content:
      "<h1 style='align-text:center;'></h1><p>To develop proficient leaders who can provide solutions and meet the requirement of global textile community by imparting excellent knowledge and skill.</p><br><p><strong style='color:red;'>M1:</strong>&nbsp;To strengthen the practical knowledge of students by increasing and improving the laboratory facilities by having adequate and latest machine/ equipments.</p><br><p><strong style='color:red;'>M2:</strong>&nbsp;To strengthen the alliance of industry institute to have more interaction of students with industry.</p><p><br /><strong><span style='color: #ff0000;'>M3</span>:</strong>&nbsp;To provide opportunities to students to participate in conferences, seminars and workshops for their overall development.</p><br><p><strong style='color:red;'>M4:</strong>&nbsp;To nurture graduates to be creative, critical, innovative and ethical leaders.</p>",
    id: "vision-mission",
    shadowColor: "brown",
    before: "one",
  },
  {
    heading: "PSO",
    headingText: "Program Specific Outcomes",
    content:
      "<span class='clr'>PSO1:</span> Provide students with core competence in mathematics, scientific and basic engineering fundamentals to develop mechanical engineering applications.<br><br><span class='clr'>PSO3:</span> To empower the students to apply practical skills, knowledge in major streams such as thermal, design, manufacturing and industrial engineering.<br><br><span class='clr'>PSO3:</span> To enable the student to take-up career in industries or to pursue higher studies in mechanical and interdisciplinary programs with high regard for ethical values, environmental and social issues.",
    id: "Annual-report",
    shadowColor: "yellow",
  },
  {
    heading: "Resources",
    headingText: "Resources",
    content:
      "<a class='clr' href='./TC23.pdf'>Annual Report</a><br><br><a class='clr' href='./TC23.pdf'>Outcome based Education 2024</a><br><br><a class='clr' href='./TC23.pdf'>TIME TABLE 2024</a><br><br><a class='clr' href='./TC23.pdf'>Previous Year Question Papers</a><br><br>",
    id: "Annual-report",
    shadowColor: "yellow",
  },
];

const faculty = [
  {
    name: "Deo Kumar Das   ",
    position: "Assistant Professor, B. Sc. (Silk Technology)",
  },
  {
    name: "Shyam Sunder ",
    position: "Assistant Professor, M. Tech., PhD (Pursuing)",
  },
  {
    name: "Jitender Meena ",
    position: "Assistant Professor, M. Tech., PhD (Pursuing)",
  },
];

console.log("hello content");
happen(5000);
makeSections(arr);
// createImage("./tc.png", 2, 0, 0, 0, 0);
profileCards("tec", faculty);
