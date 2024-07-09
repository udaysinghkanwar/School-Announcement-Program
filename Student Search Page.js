
// Defining Variables //
var studentSearchBar ;
var studentGrade9 ;
var studentGrade10;
var studentGrade11 ;
var studentGrade12;
var studentGradeAll ;
var studentGenderMale ;
var studentGenderFemale;
var studentGenderOther;
var studentGenderAll;
var studentClubs;
var studentBeforeSchool;
var studentLunch;
var studentAfterSchool; 

// A new function for collecting and storing input from student search page // 
function getStudentInput() {
// assigning the variables the value of different elements from the html file //
    // search bar //
    studentSearchBar = document.getElementById ("htmlSSearch").value;
    // Grades //
    studentGrade9 = document.getElementById ("htmlSGrade9").checked;
    studentGrade10 = document.getElementById ("htmlSGrade10").checked;
    studentGrade11 = document.getElementById ("htmlSGrade11").checked;
    studentGrade12 = document.getElementById ("htmlSGrade12").checked;
    studentGradeAll = document.getElementById ("htmlSAll").checked;
    // Gender // 
    studentGenderMale = document.getElementById ("htmlSMale").checked;
    studentGenderFemale = document.getElementById ("htmlSFemale").checked;
    studentGenderOther = document.getElementById ("htmlSOther").checked;
    studentGenderAll = document.getElementById ("htmlSGenderAll").checked;
    // Club //
    studentClubs = document.getElementById ("htmlSClubs").value;
    // Time // 
    studentBeforeSchool = document.getElementById ("htmlSBeforeSchool") .checked;
    studentLunch = document.getElementById ("htmlSLunch").checked;
    studentAfterSchool = document.getElementById ("htmlSAfterSchool").checked;

    // Storing input data to local storage and asssigning keys to every variable //
    localStorage.setItem ("studentSearchBarKey",  studentSearchBar );
    localStorage.setItem ("studentGrade9Key",   studentGrade9 ) ;  
    localStorage.setItem ("studentGrade10Key",   studentGrade10 ) ;
    localStorage.setItem ("studentGrade11Key", studentGrade11 ) ;
    localStorage.setItem ("studentGrade12Key",  studentGrade12 ) ;
    localStorage.setItem ("studentGradeAllKey",studentGradeAll ) ; 
    localStorage.setItem ("studentGenderMaleKey",  studentGenderMale ) ;
    localStorage.setItem ("studentGenderFemaleKey",  studentGenderFemale ) ;
    localStorage.setItem ("studentGenderOtherKey", studentGenderOther ) ;
    localStorage.setItem ("studentGenderAllKey",  studentGenderAll ) ;
    localStorage.setItem ("studentClubsKey",  studentClubs);
    localStorage.setItem ("studentBeforeSchoolKey",  studentBeforeSchool);
    localStorage.setItem ("studentAfterSchoolKey",  studentAfterSchool);
    localStorage.setItem ("studentLunchKey", studentLunch);
}
