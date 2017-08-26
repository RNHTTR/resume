var name = "Ryan Hatter";
var role = "";
var phone = "813-326-8778";
var email = "Ryan.N.Hatter@Gmail.com";
var photoPath = "professional-image.jpg";
var city = "Tampa, FL";
var proficientSkills = [
    //Tech
    "Python",
    "Pandas",
    "Swift",
    "Google Apps Scripts",
    // "Firebase",
    // "Google App Engine",
    // "HTML/CSS",
    // "JavaScript",
    "Microsoft Excel",
    "VBA"
    //Other
    // "Project Management",
    // "Verbal & Written Communication",
    // "Creative Writing"
];

var workingSkills = [
    // "Pandas",
    "NumPy",
    "SQL",
    "Google App Engine",
    "AWS",
    "Firebase",
    "HTML/CSS/JS",
    "React"
];

var hobbies = [
    "Traveling",
    "Sports",
    "Rock climbing",
    "Reading",
    "Yoga"
];

var bio = {
    "name":          name,
    "role":          role,
    "phone":         phone,
    "email":         email,
    "photo":         photoPath,
    "location":      city,
    "skills":        proficientSkills,
    "workingSkills": workingSkills
};

var work = {
    "jobs" : [
         {
            "employer":         "Nielsen",
            "title":            "Software Developer",
            "dates":            "May 2017 - Present",
            "location":         "Tampa, FL",
            "responsibilities": ["Port data fusion applications from SQL to Python. Integrate updated Python modules in the cloud via Amazon Web Services using the Boto3 SDK.",
                                  "Without being prompted by management, ported outdated Excel timesheet system to Google Sheets after Nielsen transitioned from Microsoft Office to G Suite. The new system uses Google Apps Scripts to store create and save timesheet backups and provides functionality for users to easily submit their timesheet to their manager. The system was adopted for all interns for 2017."
                                 ],
            "link":             "https://www.nielsen.com"
        },
        {
            "employer":         "Milliman, Inc.",
            "title":            "Actuarial Analyst",
            "dates":            "May 2015 - March 2017",
            "location":         "Tampa, FL",
            "responsibilities": ["Developed VBA macros to reduce monthly valuation process from 30 hours per month to fewer than seven hours per month",
                                  "Created team that developed and implemented week-long training program for new hires"
                                 ],
            "link":              "https://www.milliman.com"
        }
    ]
};

var projects = {
    "projects" : [
        {
            "name":        "Excellent Actuary",
            "date":        "2017",
            "description": "Excellent Actuary provides basic training in Microsoft Excel while introducing users to basic actuarial & insurance knowledge. The website is currently front-end only and utilizes HTML, CSS, and JavaScript.",
            "link":        "http://www.excellentactuary.com"
        },
        {
            "name":        "Wift",
            "date":        "Summer 2016 - Summer 2017",
            "description": "Wift was a mobile food-ordering platform. I developed the client in Swift and added custom server-side logic in Python/Flask to accomodate the Braintree payment gateway and device-to-device push notifications. Data is stored in Firebase and the server is hosted on the Google Cloud Platform. Wift achieved a beta release with an agreement with Bayside Cafe in Tampa, Florida, but has been put on hold.",
            "link":        "http://www.wiftapp.com"
        },
        {
            "name":        "SwiftyFont",
            "date":        "2017",
            "description": "SwiftyFont is an iOS application written in Swift that allows iOS developers see what each available Swift font looks like on a variety of background colors.",
            "link":        "https://SwiftyFont.wordpress.com"
        },
        {
            "name":        "Google Apps Script Meetup Presentation",
            "date":        "September 5, 2017",
            "description": "I will give a presentation on how to use Google Apps Scripts to enhance Google Sheets using SpreadsheetApp, DriveApp, and MailApp. A video walkthrough of the project can be found at the link in the title of this project.",
            "link":        "http://www.ryanhatter.me/meetup"
        }
    ]
}

var education = {
    "schools" : [
        {
            "name":        "University of South Florida",
            "city":        "Tampa, FL",
            "gpa":         "3.6",
            "involvement": "Actuarial Society - Treasurer",
            "majors":      ["Statistics"],
            "dates":       "Graduated: 2015",
            "link":        "http://www.usf.edu"
        }
    ],
    "onlineCourses" : [
        {
            "title":  "Intro to Data Analysis",
            "school": "Udacity",
            "date":   2017,
            "url":    "https://www.udacity.com/course/intro-to-data-analysis--ud170"
        },
        {
            "title":  "Intro to Hadoop and MapReduce",
            "school": "Udacity",
            "date":   2017,
            "url":    "https://www.udacity.com/course/intro-to-hadoop-and-mapreduce--ud617"
        },
        {
            "title":  "Python, Flask",
            "school": "Treehouse",
            "date":   2016,
            "url":    "https://teamtreehouse.com/tracks/learn-flask"
        },
        {
            "title":  "Swift",
            "school": "Treehouse",
            "date":   2016,
            "url":    "https://teamtreehouse.com/tracks/ios-development-with-swift-20"
        }
    ]
};

var formattedName     = HTMLheaderName.replace("%data%", bio.name);
var formattedRole     = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail    = HTMLemail.replace("%data%", bio.email);
var formattedPhone    = HTMLmobile.replace("%data%", bio.phone);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);
var formattedPicture  = HTMLbioPic

var formattedBio = [formattedName,
                    formattedRole
                    ];

var details = [formattedEmail,
                 formattedPhone,
                 formattedLocation
                ];

for (var item in formattedBio) {
    $("#header").append(formattedBio[item]);
}

for (var item in details) {
    $("#header").append(details[item]);
}

$("#header").append(formattedPicture);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedProficientSkill = HTMLproficientSkills
    $("#skills").append(formattedProficientSkill);

    for (i = 0; i < proficientSkills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }

    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'work-skills-start');
    document.getElementById('header').append(newDiv);

    var formattedWorkingSkill = HTMLworkingSkills;
    $("#work-skills-start").append(formattedWorkingSkill);

    for (i = workingSkills.length - 1; i >= 0; i--) {
        var formattedSkill = HTMLworkingSkill.replace("%data%", bio.workingSkills[i]);
        $("#working-skills").after(formattedSkill);
    }

    $("#header").append(HTMLhobbiesStart);

    var hobbiesDiv = document.createElement('div');
    hobbiesDiv.setAttribute('id', 'hobbies-start');
    document.getElementById('header').append(hobbiesDiv);

    for (i = 0; i < hobbies.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", hobbies[i]);
        $("#hobbies-start").append(formattedSkill);
    }

}

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer      = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    formattedEmployer          = formattedEmployer.replace('%#%', work.jobs[job].link);
    var formattedTitle         = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedWorkDates     = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedWorkLocation  = HTMLworkLocation.replace("%data%", work.jobs[job].location);

    $(".work-entry:last").append(formattedEmployerTitle, formattedWorkDates, formattedWorkLocation);

    for (responsibility in work.jobs[job].responsibilities) {
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", "- " + work.jobs[job].responsibilities[responsibility]);
        $(".work-entry:last").append(formattedWorkDescription);
    };

};

for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectName        = HTMLprojectTitle.replace("%data%", projects.projects[project].name);
    formattedProjectName            = formattedProjectName.replace("%#%", projects.projects[project].link);
    var formattedProjectDate        = HTMLprojectDates.replace("%data%", projects.projects[project].date);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", "- " + projects.projects[project].description);

    $(".project-entry:last").append(formattedProjectName, formattedProjectDate, formattedProjectDescription);
}

$("#education").append(HTMLcollege);

for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchool      = HTMLschoolName.replace("%data%", education.schools[school].name);
    formattedSchool          = formattedSchool.replace("%#%", education.schools[school].link);
    var formattedGraduation  = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedLocation    = HTMLschoolLocation.replace("%data%", education.schools[school].city);
    var formattedMajor       = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    var formattedGPA         = HTMLschoolGPA.replace("%data%", education.schools[school].gpa);
    var formattedInvolvement = HTMLschoolInvolvement.replace("%data%", education.schools[school].involvement);

    $(".education-entry:last").append(formattedSchool, formattedGraduation, formattedLocation, formattedMajor, formattedGPA, formattedInvolvement);
};

$("#education").append(HTMLonlineClasses);

for (course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);

    var formattedOnlineCourse = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    formattedOnlineCourse     = formattedOnlineCourse.replace("#", education.onlineCourses[course].url);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedOnlineDate   = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
    var formattedCourseSchool = formattedOnlineCourse + formattedOnlineSchool;

    $(".education-entry:last").append(formattedCourseSchool, formattedOnlineDate);
}




