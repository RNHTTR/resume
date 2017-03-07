var name = "Ryan Hatter";
var role = "Aspiring Full-Stack Developer";
var phone = "813-326-8778";
var email = "Ryan@WiftApp.com";
var photoPath = "professional-image.jpg";
var city = "Tampa, FL";
var skills = [
    //Tech
    "Swift",
    "Python",
    "Firebase",
    // "Google App Engine",
    "HTML/CSS",
    "JavaScript",
    "VBA",
    "Advanced Microsoft Excel",
    //Other
    "Project Management",
    "Verbal & Written Communication",
    "Creative Writing"
];
var hobbies = [
    "traveling",
    "sports",
    "rock climbing",
    "reading"
];

var bio = {
    "name" : name,
    "role" : role,
    "phone" : phone,
    "email" : email,
    "photo" : photoPath,
    "location" : city,
    "skills" : skills
};

var work = {
    "jobs" : [
        {
            "employer" : "Milliman, Inc.",
            "title" : "Actuarial Analyst",
            "dates" : "May 2015 - March 2017",
            "location" : "Tampa, FL",
            "responsibilities" : ["Developed VBA macros to reduce monthly valuation process from 30 hours per month to fewer than seven hours per month",
            "Created team that developed and implemented week-long training program for new hires"
            ]
        }
    ]
};

var projects = {
    "projects" : [
        {
            "name" : "Wift",
            "date" : "Summer 2016 - Present",
            "description" : "Wift is a mobile (iOS) food-ordering platform. I singlehandedly (albeit with the help of Team Treehouse courses and Stack Overflow) wrote the client in Swift and added custom server-side logic in Python to accomodate a payment gateway and device-to-device push notifications. Data is stored in Firebase and the server is hosted on the Google Cloud Platform."
        },

        {
            "name" : "Excellent Actuary",
            "date" : "2017",
            "description" : "Excellent Actuary will provide basic training in Microsoft Excel while introducing users to actuarial & insurance knowledge. The front-end will be developed in HTML/CSS/JavaScript and the back-end will be developed with Python and Flask and will be hosted on the Google Cloud Platform."
        }
    ]
}

var education = {
    "schools" : [
        {
            "name" : "University of South Florida",
            "city" : "Tampa, FL",
            "gpa" : "3.6",
            "majors" : ["Statistics"],
            "dates" : "Graduated: 2015"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Swift",
            "school" : "Treehouse",
            "date" : 2016,
            "url" : "http://www.teamtreehouse.com"
        },
        {
            "title" : "Python, Flask",
            "school" : "Treehouse",
            "date" : 2016,
            "url" : "http://www.teamtreehouse.com"
        },
        {
            "title" : "Web Development",
            "school" : "Udacity",
            "date" : 2017,
            "url" : "http://www.udacity.com"
        }
    ]
};

// var formattedContact = HTMLcontactGeneric.replace("%data%", "Contact info:")
// formattedContact = formattedContact.replace
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedPhone = HTMLmobile.replace("%data%", bio.phone);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);
var formattedPicture = HTMLbioPic

var formattedBio = [formattedName,
                    formattedRole
                    ];

var details = [formattedEmail,
                 formattedPhone,
                 formattedLocation
                ];

// $("#header").append(formattedPicture);

for (var item in formattedBio) {
    $("#header").append(formattedBio[item]);
}

// $("#header").append(formattedPicture);

for (var item in details) {
    // $("#header").append(formattedContact);
    $("#header").append(details[item]);
}

$("#header").append(formattedPicture);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
    // $("#skills").append(formattedSkill);
    // formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
}

// $("#header").append(formattedPicture);

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

    $(".work-entry:last").append(formattedEmployerTitle, formattedWorkDates, formattedWorkLocation);

    for (responsibility in work.jobs[job].responsibilities) {
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", "- " + work.jobs[job].responsibilities[responsibility]);
        $(".work-entry:last").append(formattedWorkDescription);
    };

};

for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectName = HTMLprojectTitle.replace("%data%", projects.projects[project].name);
    var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", "- " + projects.projects[project].description);

    $(".project-entry:last").append(formattedProjectName, formattedProjectDate, formattedProjectDescription);
}

$("#education").append(HTMLcollege);

for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedGraduation = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    var formattedGPA = HTMLschoolGPA.replace("%data%", education.schools[school].gpa);

    $(".education-entry:last").append(formattedSchool, formattedGraduation, formattedLocation, formattedMajor, formattedGPA);
    // $(".education-entry:last").append(formattedSchool, formattedGraduation, formattedMajor, formattedGPA);
};

$("#education").append(HTMLonlineClasses);

for (course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);

    var formattedOnlineCourse = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
    var formattedCourseSchool = formattedOnlineCourse + formattedOnlineSchool;
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url)

    $(".education-entry:last").append(formattedCourseSchool, formattedOnlineDate);
}




