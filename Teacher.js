//  Defining Variables //

var teacherAnnouncementTitle = [];
var teacherAnnouncementBody = [];
var teacherGrade9 = [];
var teacherGrade10 = [];
var teacherGrade11 = [];
var teacherGrade12 = [];
var teacherGradeAll = [];
var teacherGenderMale = [];
var teacherGenderFemale = [];
var teacherGenderAll = [];
var teacherGenderOther = [];
var teacherClubs = [];
var teacherBeforeSchool = [];
var teacherLunch = [];
var teacherAfterSchool = [];
var counter = 0;

 // New Function for collecting and storing input from teacher announcement html page //
function getTeacherInput() {

// Calling the html elements to get input // 

    teacherAnnouncementTitle [counter] = document.getElementById ("htmlTTitle").value;
    teacherAnnouncementBody [counter]= document.getElementById ("htmlTbody").value;
// Grades //
    teacherGrade9 [counter] = document.getElementById ("htmlTGrade9").checked;
    teacherGrade10 [counter]= document.getElementById ("htmlTGrade10").checked;
    teacherGrade11 [counter]= document.getElementById ("htmlTGrade11").checked;
    teacherGrade12 [counter] = document.getElementById ("htmlTGrade12").checked;
    teacherGradeAll [counter] = document.getElementById ("htmlTAll").checked;
// Gender //
    teacherGenderMale [counter]= document.getElementById ("htmlTMale").checked;
    teacherGenderFemale [counter] = document.getElementById ("htmlTFemale").checked;
    teacherGenderOther [counter] = document.getElementById ("htmlTOther").checked;
    teacherGenderAll [counter]= document.getElementById ("htmlTGenderAll").checked;
// Clubs //
    teacherClubs [counter]= document.getElementById ("htmlTClubs").value;
// Time //
    teacherBeforeSchool [counter]= document.getElementById ("htmlTBeforeSchool") .checked;
    teacherLunch [counter]= document.getElementById ("htmlTLunch").checked;
    teacherAfterSchool [counter] = document.getElementById ("htmlTAfterSchool").checked;

        
// Storing input into local storage //

    localStorage.setItem ("teacherGrade9Key", JSON.stringify(teacherGrade9)) ;  
    localStorage.setItem ("teacherGrade10Key", JSON.stringify(teacherGrade10 )); 
    localStorage.setItem ("teacherGrade11Key", JSON.stringify(teacherGrade11 )) ;
    localStorage.setItem ("teacherGrade12Key", JSON.stringify(teacherGrade12 )) ;
    localStorage.setItem ("teacherGradeAllKey", JSON.stringify(teacherGradeAll )); 
    localStorage.setItem ("teacherGenderMaleKey", JSON.stringify(teacherGenderMale )); 
    localStorage.setItem ("teacherGenderFemaleKey", JSON.stringify(teacherGenderFemale )); 
    localStorage.setItem ("teacherGenderOtherKey", JSON.stringify(teacherGenderOther )) ;
    localStorage.setItem ("teacherGenderAllKey", JSON.stringify(teacherGenderAll)) ;
    localStorage.setItem ("teacherClubsKey", JSON.stringify(teacherClubs));
    localStorage.setItem ("teacherAnnouncementTitleKey", JSON.stringify(teacherAnnouncementTitle));
    localStorage.setItem ("teacherAnnouncementBodyKey", JSON.stringify(teacherAnnouncementBody));
    localStorage.setItem ("teacherBeforeSchoolKey", JSON.stringify(teacherBeforeSchool));
    localStorage.setItem ("teacherAfterSchoolKey", JSON.stringify(teacherAfterSchool));
    localStorage.setItem ("teacherLunchKey", JSON.stringify(teacherLunch));

    counter ++ 
} 
// To keep the existing announcements after the page is closed //
function getExistingAnnouncement() {
    if (JSON.parse(localStorage.getItem("teacherGrade10Key")) !=null ) {
        teacherAnnouncementTitle = JSON.parse (localStorage.getItem ("teacherAnnouncementTitleKey"))
        teacherAnnouncementBody = JSON.parse (localStorage.getItem ("teacherAnnouncementBodyKey"))
        teacherGrade9 =  JSON.parse (localStorage.getItem ("teacherGrade9Key"))
        teacherGrade10 = JSON.parse (localStorage.getItem ("teacherGrade10Key"))
        teacherGrade11 = JSON.parse (localStorage.getItem ("teacherGrade11Key"))
        teacherGrade12 = JSON.parse (localStorage.getItem ("teacherGrade12Key"))
        teacherGradeAll = JSON.parse (localStorage.getItem ("teacherGradeAllKey"))
        teacherGenderMale = JSON.parse (localStorage.getItem ("teacherGenderMaleKey"))
        teacherGenderFemale = JSON.parse (localStorage.getItem ("teacherGenderFemaleKey"))
        teacherGenderOther = JSON.parse (localStorage.getItem ("teacherGenderOtherKey"))
        teacherGenderAll = JSON.parse (localStorage.getItem ("teacherGenderAllKey"))
        teacherClubs = JSON.parse (localStorage.getItem ("teacherClubsKey"))
        teacherBeforeSchool = JSON.parse (localStorage.getItem ("teacherBeforeSchoolKey"))
        teacherLunch = JSON.parse (localStorage.getItem ("teacherLunchKey"))
        teacherAfterSchool = JSON.parse (localStorage.getItem ("teacherAfterSchoolKey"))

        counter = teacherGrade9.length
    }

}
