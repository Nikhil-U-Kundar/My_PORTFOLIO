// This file contains all the constants used in the application

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Home 
// Name
export const NAME = "Nikhil U Kundar";

// Designation
export const DESIGNATION = "MERN Developer";

// Description
export const DESCRIPTION = "Passionate about crafting efficient, scalable, and user-friendly solutions.";




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. About
// Detailed Description
export const DETAILED = "I am a passionate Full Stack Developer. I have worked on multiple projects and have a good understanding of the latest technologies. I am a quick learner and have a good problem-solving skill. I am looking for an opportunity to work in a challenging environment and grow my career.";

// Experience
export const EXPERIENCE = "FRESHER";

// Companies
export const COMPANIES = "2+";

// Projects
export const PROJECTS = "7+";

// Resume
export const RESUME = "./assets/pdf/Resume.pdf";




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Social Media Links
// Github username
export const GITHUB ="Nikhil-U-Kundar";

// Stackoverflow URL
export const STACKOVERFLOW = "";

// LinkedIn username
export const LINKEDIN = "nikhil-u-kundar-58ab7a243";

// Twitter username
export const TWITTER = "Nikhil";

// Facebook username
export const FACEBOOK = "Nikhil";

// Instagram username
export const INSTAGRAM = "";


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Skills
export const SKILLS = [
    {
        name: 'Frontend',
        description: 'Frontend Description',
        SubSkill: [
            {
                name: 'HTML5',
                level: '90'
            },
            {
                name: 'CSS',
                level: '80'
            },
            {
                name: 'Javascript',
                level: '75'
            },
            {
                name: 'Tailwind',
                level: '60'
            },
            {
                name: 'Angular',
                level: '60'
            }

        ]
    },
    {
        name: 'Backend',
        description: 'Backend Description',
        SubSkill: [
            {
                name: 'Node.js',
                level: '80'
            },
            {
                name: 'MongoDB',
                level: '70'
            },
            {
                name: 'SQL',
                level: '70'
            },
            {
                name: 'Express.js',
                level: '60'
            }
        ]
    }
]


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Qualifications
// EDUCATION1
export const EDUCATION_DEGREE1 = "BTech in Computer Science";
export const EDUCATION_NAME1 = "Srinivas University,Mukka";
export const EDUCATION_DATE1 = "2021 - Present";

// EDUCATION2
export const EDUCATION_DEGREE2 = "Pre-University";
export const EDUCATION_NAME2 = "Hindu PU College Shirva";
export const EDUCATION_DATE2 = "2019 - 2021";

// EDUCATION3
export const EDUCATION_DEGREE3 = "High-School";
export const EDUCATION_NAME3 = "Mahalakshmi English Mediun School,Uchila";
export const EDUCATION_DATE3 = "2012 - 2015";

// WORK1
export const WORK_TITLE1 = "Frontend Developer";
export const WORK_COMPANY1 = "Google";
export const WORK_DATE1 = "2011 - 2015";
export const WORK_DESCRIPTION1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

// WORK2
export const WORK_TITLE2 = "Backend Developer";
export const WORK_COMPANY2 = "Facebook";
export const WORK_DATE2 = "2015 - 2018";
export const WORK_DESCRIPTION2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

// WORK3
export const WORK_TITLE3 = "FullStack Developer";
export const WORK_COMPANY3 = "Microsoft";
export const WORK_DATE3 = "2018 - 2022";
export const WORK_DESCRIPTION3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5. Services
export const SERVICES = [
    {
        icon: 'fa fa-code',
        name: 'Web Development',
        description: [
            {
                name: 'Web Development Description 1',
            },
            {
                name: 'Web Development Description 2',
            },
            {
                name: 'Web Development Description 3',
            },
        ],
    },
    {
        icon: 'fa fa-mobile',
        name: 'Mobile Development',
        description: [
            {
                name: 'Mobile Development Description 1',
            },
            {
                name: 'Mobile Development Description 2',
            },
            {
                name: 'Mobile Development Description 3',
            },
        ],
    },
    {
        icon: 'fa fa-paint-brush',
        name: 'UI/UX Design',
        description: [
            {
                name: 'UI/UX Design Description 1',
            },
            {
                name: 'UI/UX Design Description 2',
            },
            {
                name: 'UI/UX Design Description 3',
            },
        ],
    },
    {
        icon: 'fa fa-line-chart',
        name: 'Digital Marketing',
        description: [
            {
                name: 'Digital Marketing Description 1',
            },
            {
                name: 'Digital Marketing Description 2',
            },
            {
                name: 'Digital Marketing Description 3',
            },
        ],
    },
    {
        icon: 'fa fa-search',
        name: 'SEO',
        description: [
            {
                name: 'SEO Description 1',
            },
            {
                name: 'SEO Description 2',
            },
            {
                name: 'SEO Description 3',
            },
        ],
    },
    {
        icon: 'fa fa-cloud',
        name: 'Cloud Computing',
        description: [
            {
                name: 'Cloud Computing Description 1',
            },
            {
                name: 'Cloud Computing Description 2',
            },
            {
                name: 'Cloud Computing Description 3',
            },
        ],
    }
]



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6. Portfolio
export const PORTFOLIO = [
    {
        name: 'Real Estate Website',
        description: 'Platform to Connect both buyers and sellers',
        image: require('../config/assets/images/portfolio1.jpg'),
        demo: 'null',
        github: 'https://github.com/Nikhil-U-Kundar/Full-Stack-RealEstate_website'
    },
    {
        name: 'Todo Application',
        description: 'A To-Do List helps manage tasks by adding, editing, and completing them. It improves productivity with priorities and reminders.',
        image: require('../config/assets/images/portfolio2.jpg'),
        demo: 'https://to-do-db-zalv.onrender.com/',
        github: 'null'
    },
    {
        name: 'Gyan Yug',
        description: 'A website dedicated to spreading education in rural areas by providing resources and information.',
        image: require('../config/assets/images/portfolio3.jpg'),
        demo: 'https://gyaanyug-cd8d.onrender.com/',
        github: 'https://github.com/Nikhil-U-Kundar/Hackathon'
    },
    {
        name: 'News Application',
        description: 'A news application delivering categorized updates to keep rural communities informed.',
        image: require('../config/assets/images/portfolio4.jpg'),
        demo: '',
        github: 'https://github.com/Nikhil-U-Kundar/News_App'
    },
]




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 7. Hire
export const HIRE = true




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 8. Contact
// Phone
export const PHONE = "9108298473";

// Email
export const EMAIL = "nikhilkulalk@gmail.com";

// Address
export const ADDRESS = "Shri  Nidhi House Padubettu,udupi";