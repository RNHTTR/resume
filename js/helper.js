//Inject HTML

var HTMLheaderImage = '<img src="./images/tampa-bw.jpg" class="header-pic", alt="Header background image">';

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span id="role">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="contact-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="contact-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="contact-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="contact-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="contact-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="contact-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="contact-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="./images/professional-image.jpg" class="biopic", alt="Bio Picture">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Technology</h3><hr id="skills-hr"><ul id="skills" class="flex-row"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
// var HTMLworkingSkillsStart = '<ul id="skills" class="flex-row"></ul>';
var HTMLworkingSkill = '<li class="working-class"><span class="working-white-text white-text">%data%</span></li>';
var HTMLproficientSkills = '<span id="proficient-skills" class="contact-text">proficient</span>'
var HTMLworkingSkills = '<span id="working-skills" class="contact-text">working knowledge</span>'
// var HTMLskillsEnd = '</ul>'
var HTMLhobbiesStart = '<h3 id="skills-h3">Hobbies</h3><hr id="skills-hr">';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a class="title" href="%#%">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div><br><hr noshade class="break-hr">';
var HTMLworkDescription = '<p>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a class="title" href="%#%">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div><br><hr noshade class="break-hr">';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLcollege           = "<h3 class='education-header'>Undergraduate</h3>";
var HTMLschoolStart       = '<div class="education-entry"></div>';
var HTMLschoolName        = '<a class="title" href="%#%">%data%';
var HTMLschoolDegree      = ' -- %data%</a>';
var HTMLschoolDates       = '<div class="date-text">%data%</div>';
var HTMLschoolLocation    = '<div class="location-text" "school-location">%data%</div><br><hr noshade id="school-hr" class="break-hr">';
var HTMLschoolMajor       = '<p class="center-p">- Major: %data%</p>';
var HTMLschoolGPA         = '<p class="center-p">- GPA: %data%</p>';
var HTMLschoolInvolvement = '<p class="center-p">- Involvement: %data%</p>';

var HTMLonlineClasses = '<h3 class="education-header">Online Classes</h3>';
var HTMLonlineTitle = '<a class="education-url" href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

// var internationalizeButton = '<button>Internationalize</button>';

// $(document).ready(function() {
//   $('button').click(function() {
//     var $name = $('#name');
//     var iName = inName($name.text()) || function(){};
//     $name.html(iName);
//   });
// });