// Resume Data
const resume = {
  education: [
    {
      school: "SASTRA University, Thanjavur",
      degree: "Bachelor of Law – BA LLB (Hons)",
      years: "2022–2027"
    },
    {
      school: "Holy Cross Mat. Hr. Sec. School, Salem",
      degree: "12th Grade – 489/600"
    }
  ],
  internship: {
    company: "V. Jayakumar B.A., B.L. – Advocate & Notary",
    period: "Feb 20 – Mar 20, 2023",
    points: [
      "Conducted legal research: statutes, case law, regulations & precedents.",
      "Observed court proceedings & gained practical insights."
    ]
  },
  publications: [
    "Article: 'Guardians of Tomorrow: Navigating the Maze of Child Welfare Laws' – Published on Lawfight.in",
    "Served in SASTRA Legal Aid Service"
  ],
  about: "I’m a passionate law student exploring the intersection of law, technology, and justice. I believe in research, advocacy, and innovation as tools for positive change."
};

// Render Functions
function renderEducation() {
  const section = document.getElementById("education");
  section.innerHTML = `<h2>🎓 Education</h2><ul>` +
    resume.education.map(e => `<li><b>${e.school}</b> – ${e.degree} (${e.years || ""})</li>`).join("") +
    `</ul>`;
}

function renderInternship() {
  const section = document.getElementById("internship");
  section.innerHTML = `<h2>💼 Internship Experience</h2>
    <p><b>${resume.internship.company}</b> (${resume.internship.period})</p>
    <ul>${resume.internship.points.map(p => `<li>${p}</li>`).join("")}</ul>`;
}

function renderPublications() {
  const section = document.getElementById("publications");
  section.innerHTML = `<h2>📚 Publications & Activities</h2><ul>` +
    resume.publications.map(p => `<li>${p}</li>`).join("") +
    `</ul>`;
}

function renderAbout() {
  const section = document.getElementById("about");
  section.innerHTML = `<h2>🚀 About Me</h2><p>${resume.about}</p>`;
}

// Render Everything
renderEducation();
renderInternship();
renderPublications();
renderAbout();
