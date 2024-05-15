const initialData = [
    {
        "jobTitle": "Software Engineer",
        "jobID": "001",
        "jobCompany": "ABC Technologies",
        "jobLocation": "New York",
        "jobPreference": "Experienced",
        "jobSkills": "Java, Python, SQL"
        },
        {
        "jobTitle": "Data Analyst",
        "jobID": "002",
        "jobCompany": "XYZ Corporation",
        "jobLocation": "San Francisco",
        "jobPreference": "Fresher",
        "jobSkills": "SQL, Excel, Statistics"
        },
        {
        "jobTitle": "Web Developer",
        "jobID": "003",
        "jobCompany": "PQR Solutions",
        "jobLocation": "London",
        "jobPreference": "Experienced",
        "jobSkills": "HTML, CSS, JavaScript"
        },
        {
        "jobTitle": "Graphic Designer",
        "jobID": "004",
        "jobCompany": "Design Studio",
        "jobLocation": "Paris",
        "jobPreference": "Fresher",
        "jobSkills": "Adobe Photoshop, Illustrator"
        },
        {
        "jobTitle": "Marketing Manager",
        "jobID": "005",
        "jobCompany": "Global Marketing Inc.",
        "jobLocation": "Tokyo",
        "jobPreference": "Experienced",
        "jobSkills": "Digital Marketing, SEO"
        },
        {
        "jobTitle": "Business Analyst",
        "jobID": "006",
        "jobCompany": "Consulting Group",
        "jobLocation": "Sydney",
        "jobPreference": "Experienced",
        "jobSkills": "Data Analysis, Project Management"
        },
        {
        "jobTitle": "Sales Executive",
        "jobID": "007",
        "jobCompany": "SalesForce Ltd.",
        "jobLocation": "Chicago",
        "jobPreference": "Fresher",
        "jobSkills": "Communication, Negotiation"
        },
        {
        "jobTitle": "UX/UI Designer",
        "jobID": "008",
        "jobCompany": "Digital Agency",
        "jobLocation": "Berlin",
        "jobPreference": "Experienced",
        "jobSkills": "User Research, Wireframing"
        },
        {
        "jobTitle": "Accountant",
        "jobID": "009",
        "jobCompany": "Financial Services",
        "jobLocation": "Toronto",
        "jobPreference": "Fresher",
        "jobSkills": "Bookkeeping, Taxation"
        },
        {
        "jobTitle": "Human Resources Manager",
        "jobID": "010",
        "jobCompany": "HR Solutions Inc.",
        "jobLocation": "Singapore",
        "jobPreference": "Experienced",
        "jobSkills": "Recruitment, Employee Relations"
        },
        {
        "jobTitle": "Software Developer",
        "jobID": "011",
        "jobCompany": "Software Solutions Ltd.",
        "jobLocation": "New Delhi",
        "jobPreference": "Experienced",
        "jobSkills": "C++, .NET, SQL"
        },
        {
        "jobTitle": "Content Writer",
        "jobID": "012",
        "jobCompany": "Content Marketing Agency",
        "jobLocation": "Mumbai",
        "jobPreference": "Fresher",
        "jobSkills": "Copywriting, SEO"
        },
        {
        "jobTitle": "Operations Manager",
        "jobID": "013",
        "jobCompany": "Logistics Services",
        "jobLocation": "Dubai",
        "jobPreference": "Experienced",
        "jobSkills": "Supply Chain Management, Leadership"
        },
        {
        "jobTitle": "Network Administrator",
        "jobID": "014",
        "jobCompany": "IT Solutions",
        "jobLocation": "Seattle",
        "jobPreference": "Fresher",
        "jobSkills": "Network Troubleshooting, Cisco"
        },
        {
        "jobTitle": "Financial Analyst",
        "jobID": "015",
        "jobCompany": "Investment Bank",
        "jobLocation": "Hong Kong",
        "jobPreference": "Experienced",
        "jobSkills": "Financial Modeling, Valuation"
        },
        {
        "jobTitle": "Customer Support Representative",
        "jobID": "016",
        "jobCompany": "E-commerce Retail",
        "jobLocation": "Melbourne",
        "jobPreference": "Fresher",
        "jobSkills": "Customer Service, Problem Solving"
        },
        {
        "jobTitle": "Quality Assurance Engineer",
        "jobID": "017",
        "jobCompany": "Technology Solutions",
        "jobLocation": "Austin",
        "jobPreference": "Experienced",
        "jobSkills": "Software Testing, Test Automation"
        },
        {
        "jobTitle": "Project Manager",
        "jobID": "018",
        "jobCompany": "Engineering Firm",
        "jobLocation": "Paris",
        "jobPreference": "Experienced",
        "jobSkills": "Agile Methodology, Stakeholder Management"
        },
        {
        "jobTitle": "Research Scientist",
        "jobID": "019",
        "jobCompany": "Scientific Research Institute",
        "jobLocation": "Berlin",
        "jobPreference": "Experienced",
        "jobSkills": "Data Analysis, Research Methodology"
        },
        {
        "jobTitle": "Social Media Coordinator",
        "jobID": "020",
        "jobCompany": "Digital Marketing Agency",
        "jobLocation": "New York",
        "jobPreference": "Fresher",
        "jobSkills": "Social Media Management, Content Creation"
        },
        {
        "jobTitle": "Product Manager",
        "jobID": "021",
        "jobCompany": "Tech Startup",
        "jobLocation": "San Francisco",
        "jobPreference": "Experienced",
        "jobSkills": "Product Development, Agile Methodology"
        },
        {
        "jobTitle": "Legal Counsel",
        "jobID": "022",
        "jobCompany": "Law Firm",
        "jobLocation": "London",
        "jobPreference": "Experienced",
        "jobSkills": "Contract Law, Legal Research"
        },
        {
        "jobTitle": "IT Support Specialist",
        "jobID": "023",
        "jobCompany": "Technology Services",
        "jobLocation": "Toronto",
        "jobPreference": "Fresher",
        "jobSkills": "Troubleshooting, Hardware Installation"
        },
        {
        "jobTitle": "Digital Marketing Manager",
        "jobID": "024",
        "jobCompany": "Advertising Agency",
        "jobLocation": "New York",
        "jobPreference": "Experienced",
        "jobSkills": "Digital Strategy, Campaign Optimization"
        },
        {
        "jobTitle": "Electrical Engineer",
        "jobID": "025",
        "jobCompany": "Engineering Consultancy",
        "jobLocation": "Dubai",
        "jobPreference": "Experienced",
        "jobSkills": "Circuit Design, Power Systems"
        },
        {
        "jobTitle": "Nurse",
        "jobID": "026",
        "jobCompany": "Medical Center",
        "jobLocation": "Sydney",
        "jobPreference": "Experienced",
        "jobSkills": "Patient Care, Medical Knowledge"
        },
        {
        "jobTitle": "Front-End Developer",
        "jobID": "027",
        "jobCompany": "Software Solutions",
        "jobLocation": "Austin",
        "jobPreference": "Fresher",
        "jobSkills": "HTML, CSS, JavaScript"
        },
        {
        "jobTitle": "Operations Analyst",
        "jobID": "028",
        "jobCompany": "Financial Institution",
        "jobLocation": "Chicago",
        "jobPreference": "Experienced",
        "jobSkills": "Data Analysis, Process Improvement"
        },
        {
        "jobTitle": "Mechanical Engineer",
        "jobID": "029",
        "jobCompany": "Manufacturing Company",
        "jobLocation": "Berlin",
        "jobPreference": "Fresher",
        "jobSkills": "CAD, Product Design"
        },
        {
        "jobTitle": "Art Director",
        "jobID": "030",
        "jobCompany": "Creative Agency",
        "jobLocation": "Paris",
        "jobPreference": "Experienced",
        "jobSkills": "Visual Communication, Creative"
        },
        {
        "jobTitle": "Data Scientist",
        "jobID": "031",
        "jobCompany": "Analytics Firm",
        "jobLocation": "San Francisco",
        "jobPreference": "Experienced",
        "jobSkills": "Machine Learning, Statistical Analysis"
        },
        {
        "jobTitle": "Customer Success Manager",
        "jobID": "032",
        "jobCompany": "SaaS Company",
        "jobLocation": "London",
        "jobPreference": "Experienced",
        "jobSkills": "Relationship Management, Customer Retention"
        },
        {
        "jobTitle": "Operations Coordinator",
        "jobID": "033",
        "jobCompany": "Logistics Company",
        "jobLocation": "Tokyo",
        "jobPreference": "Fresher",
        "jobSkills": "Supply Chain Coordination, Inventory Management"
        },
        {
        "jobTitle": "UX Researcher",
        "jobID": "034",
        "jobCompany": "Design Agency",
        "jobLocation": "New York",
        "jobPreference": "Experienced",
        "jobSkills": "User Interviews, Usability Testing"
        },
        {
        "jobTitle": "Civil Engineer",
        "jobID": "035",
        "jobCompany": "Construction Company",
        "jobLocation": "Sydney",
        "jobPreference": "Experienced",
        "jobSkills": "Structural Design, Project Management"
        },
        {
        "jobTitle": "Content Marketing Specialist",
        "jobID": "036",
        "jobCompany": "Digital Agency",
        "jobLocation": "Chicago",
        "jobPreference": "Fresher",
        "jobSkills": "Content Strategy, SEO"
        },
        {
        "jobTitle": "Financial Advisor",
        "jobID": "037",
        "jobCompany": "Wealth Management",
        "jobLocation": "Toronto",
        "jobPreference": "Experienced",
        "jobSkills": "Investment Planning, Risk Assessment"
        },
        {
        "jobTitle": "UI Designer",
        "jobID": "038",
        "jobCompany": "Software Development",
        "jobLocation": "Berlin",
        "jobPreference": "Fresher",
        "jobSkills": "Wireframing, Prototyping"
        },
        {
        "jobTitle": "HR Generalist",
        "jobID": "039",
        "jobCompany": "Human Resources",
        "jobLocation": "Paris",
        "jobPreference": "Experienced",
        "jobSkills": "Recruitment, Employee Relations"
        }       
]

module.exports = initialData