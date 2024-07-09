// Defining Global Variables //
var teacherTitle = [];
var teacherBody = [];
var teacherGrade9 = [];
var teacherGrade10 = [];
var teacherGrade11 = [];
var teacherGrade12 = [];
var teacherGradeAll = [];
var teacherGenderAll = [];
var teacherGenderFemale = [];
var teacherGenderMale = [];
var teacherGenderOther = [];
var teacherClubs = [];
var teacherBeforeSchool = [];
var teacherLunch = [];
var teacherAfterSchool = [];
var studentGrade9 
var studentGrade10 
var studentGrade11 
var studentGrade12  
var studentGradeAll 
var studentGenderAll 
var studentGenderMale 
var studentGenderFemale
var studentGenderOther
var studentClubs
var studentBeforeSchool 
var studentAfterSchool 
var studentLunch 
var announcementTitleHolder = " "
var announcementBodyHolder = " "

// Function for displaying results when the student result page is loaded // 

function displayResults () {

    // Assigning the variables to the value of their respective keys in the local storage //
    // JASON.parse to convert the the data into original data type //

     teacherTitle = JSON.parse (localStorage.getItem ("teacherAnnouncementTitleKey"))
     teacherBody = JSON.parse (localStorage.getItem ("teacherAnnouncementBodyKey"))
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
     teacherAfterSchool = JSON.parse (localStorage.getItem ("teacherAfterSchoolKey") )


     studentGrade9 = JSON.parse (localStorage.getItem ("studentGrade9Key"))
     studentGrade10 = JSON.parse (localStorage.getItem ("studentGrade10Key"))
     studentGrade11 = JSON.parse(localStorage.getItem ("studentGrade11Key"))
     studentGrade12 = JSON.parse (localStorage.getItem ("studentGrade12Key"))
     studentGradeAll = JSON.parse (localStorage.getItem ("studentGradeAllKey"))
     studentGenderMale = JSON.parse(localStorage.getItem ("studentGenderMaleKey"))
     studentGenderFemale = JSON.parse (localStorage.getItem ("studentGenderFemaleKey"))
     studentGenderOther =  JSON.parse(localStorage.getItem ("studentGenderOtherKey"))
     studentGenderAll = JSON.parse ( localStorage.getItem ("studentGenderAllKey"))
     studentClubs =  (localStorage.getItem ("studentClubsKey"))
     studentBeforeSchool = JSON.parse  (localStorage.getItem ("studentBeforeSchoolKey"))
     studentLunch =  JSON.parse (localStorage.getItem ("studentLunchKey"))
     studentAfterSchool =  JSON.parse(localStorage.getItem ("studentAfterSchoolKey"))

// For loop for checking through multiple announcement which are stored in arrays //

    for ( let i = 0; i<teacherGrade9.length; i++) {

// Another nested for loop for the ALL criteria, that assigns teacher variables to true if ALL is selected //

        for ( let x=0; x < teacherGrade9.length; x++){
            if (teacherGradeAll[x] == true && studentGrade9 != false) {
                teacherGrade9[x] = true
            } 
            if (teacherGradeAll[x] == true && studentGrade10 != false) {
                teacherGrade10[x] = true
            }
            if (teacherGradeAll[x] == true && studentGrade11 != false) {
                teacherGrade11[x] = true
            }
            if (teacherGradeAll[x] == true && studentGrade12 != false) {
                teacherGrade12[x] = true
            }
            if (teacherGenderAll[x] == true && studentGenderFemale != false) {
                teacherGenderFemale[x] = true
            }
            if (teacherGenderAll[x] == true && studentGenderMale != false) {
                teacherGenderMale[x] = true
            }
            if (teacherGenderAll[x] == true && studentGenderOther != false) {
                teacherGenderOther[x] = true
            }
           
        }

// If statement for finding a matching announcement by comparing teacher and student variables //

    
        if ((( studentGrade9 == teacherGrade9[i] && teacherGrade9[i] == true || studentGradeAll == true) ||  
        (studentGrade10 == teacherGrade10[i] && teacherGrade10[i] == true || studentGradeAll == true) ||
        (studentGrade11 == teacherGrade11[i] && teacherGrade11[i] == true || studentGradeAll == true) || 
        (studentGrade12 == teacherGrade12[i] && teacherGrade12[i] == true || studentGradeAll == true) ||
        (studentGradeAll == teacherGradeAll[i] && teacherGradeAll[i] == true)) &&

        ((studentGenderMale == teacherGenderMale[i] && teacherGenderMale[i] == true || studentGenderAll == true) ||
        (studentGenderFemale == teacherGenderFemale[i] && teacherGenderFemale[i] == true || studentGenderAll == true) ||
        (studentGenderAll == teacherGenderAll[i] && teacherGenderAll[i] == true || studentGenderAll == true) ||
        (studentGenderOther == teacherGenderOther[i] && teacherGenderOther[i] == true || studentGenderAll == true)) &&

        ((studentClubs == teacherClubs[i] && teacherClubs[i] != "Select One" )) &&

        ((teacherAfterSchool[i] == studentAfterSchool && teacherAfterSchool[i] == true ) ||
        (studentBeforeSchool == teacherBeforeSchool [i] && teacherBeforeSchool[i] == true ) ||
        (studentLunch == teacherLunch[i] && teacherLunch[i] == true))) {
                announcementTitleHolder += teacherTitle[i] 
                announcementBodyHolder  += teacherBody[i] 
        
        } 

// If statement for when the matching results are found and else statement if there are no results //

        if (announcementTitleHolder && announcementBodyHolder != " " ) {
            document.getElementById("htmlSRAnnouncementTitle").innerHTML= announcementTitleHolder
            document.getElementById ("htmlSRAnnouncementBody").innerHTML= announcementBodyHolder      
        } else {
        document.getElementById("htmlSRAnnouncementTitle").innerHTML= "Sorry No Match Found"
        document.getElementById ("htmlSRAnnouncementBody").innerHTML= "Please try again."
        }
    
    }

}




