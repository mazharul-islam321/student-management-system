let collectionOfStd = [];
let studentInfo = {};
let students;

let saveStudent = () => {
   
    let studentid = document.getElementById("studentId").value;
    let firstName = document.getElementById('firstNameInput').value;
    let lastName = document.getElementById("lastNameInput").value;
    let gender = document.getElementById("genderInput").value;
    let age = document.getElementById("ageInput").value;
    let batch = document.getElementById("batchInput").value;
    let mobileNo = document.getElementById("numberInput").value;

    let studentIdAlert = document.getElementById("studentIdAlert");
    let firstNameAlert = document.getElementById("firstNameAlert");
    let lastNameAlert = document.getElementById("lastNameAlert");
    // let ageAlert = document.getElementById("ageAlert");
    // let batchAlert = document.getElementById("batchAlert");
    // let numberAlert = document.getElementById("numberAlert");


    // form validation

    if(studentid == "" || firstName =="" || lastName ==""){
        if(studentid == "" ){
            studentIdAlert.innerHTML=("Student ID is required");
            studentId.style.border = "1px solid red";
            studentId.focus();        
        }
        if(firstName == "" ){
            firstNameAlert.innerHTML=("FirstName is required");
            firstNameInput.style.border = "1px solid red";
            // firstNameInput.focus();          
        }
        if(lastName == "" ){
            lastNameAlert.innerHTML=("LastName is required");
            lastNameInput.style.border = "1px solid red";
            // lastNameInput.focus();          
        }
        return false;          
    }
    else if(studentid !=="" || firstName !=="" || lastName !==""){
        if(studentid!==""){
            studentIdAlert.innerHTML = ''; 
            studentId.style.border = '';
        }
         if(firstName !==""){
            firstNameAlert.innerHTML = '';
            firstNameInput.style.border = '';
         }
         if(lastName !==""){
            lastNameAlert.innerHTML = '';
            lastNameInput.style.border = '';
         }
        
        pushdata();
    }


    function pushdata(){
        studentInfo.studentID = studentid;
        studentInfo.firstName = firstName;
        studentInfo.lastName = lastName;
        studentInfo.gender = gender;
        studentInfo.age = age;
        studentInfo.batch = batch;
        studentInfo.mobileNo = mobileNo;
        
        collectionOfStd.push(studentInfo);
        
        studentInfo = {}
        localStorage.setItem("collectionOfStd", JSON.stringify(collectionOfStd));
    
        console.log(collectionOfStd);
       
        document.getElementById("myForm").reset();
    }
     
}



// delete-student-info

function deleteStudentInfo(id) {
    
    var student =JSON.parse(localStorage.getItem('collectionOfStd'));
    student.splice(id, 1);
  
    localStorage.setItem("collectionOfStd", JSON.stringify(student));
  
    fetchstudents();
}


// Edit_student-info


let studentidEdit = document.getElementById("studentIdEdit");
let firstNamEdit = document.getElementById("firstNameEdit");
let lastNamEdit = document.getElementById("lastNameEdit");
let gendersEdit = document.getElementById("genderEdit");
let agesEdit = document.getElementById("ageEdit");
let batchsEdit = document.getElementById("batchEdit");
let numbersEdit = document.getElementById("numberEdit");
let indexItem =  document.getElementById("indexItem");

function editStudentInfo(id){
    studentidEdit.value = students[id].studentID;
    firstNamEdit.value = students[id].firstName;
    lastNamEdit.value = students[id].lastName;
    gendersEdit.value = students[id].gender;
    agesEdit.value = students[id].age;
    batchsEdit.value = students[id].batch;
    numbersEdit.value = students[id].mobileNo;
    indexItem.value=id; 
}

function updateStudent(){

    students[indexItem.value].studentID = studentidEdit.value;
    students[indexItem.value].firstName = firstNamEdit.value;
    students[indexItem.value].lastName = lastNamEdit.value;
    students[indexItem.value].gender = gendersEdit.value;
    students[indexItem.value].age = agesEdit.value;
    students[indexItem.value].batch = batchsEdit.value;
    students[indexItem.value].mobileNo = numbersEdit.value;

    localStorage.setItem("collectionOfStd", JSON.stringify(students));
    fetchstudents();
}



// search function

function searchStudent(){
    studentOutput.innerHTML = '';
    let searchInput = document.getElementById("searchInput").value;
    let searchData = students.filter(function(value){
        return (value.firstName.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1 || value.lastName.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1)
    });
    passSearchData(searchData);                      
}
         
    function passSearchData(searchData){
        searchData.map(item => {
            studentOutput.innerHTML +=  '<div class="well  col-sm-4 border border-primary rounded-lg py-3">' +
                                    '<h6 >' + 'Student ID: ' + item.studentID + '</h6>' +
                                    '<h5>' +'FirstName: ' + item.firstName + '</h5>' +
                                    '<h5>' +'LastName: ' + item.lastName + '</h5>' +
                                    '<p>' + 'Gender: ' + item.gender + '</p>' +
                                    '<p>' + 'Age: ' + item.age + '</p>' +
                                    '<p>' + 'Batch: ' +item.batch + '</p>' +
                                    '<p>' + 'Mobile No: ' + item.mobileNo + '</p>' + 
                                    '<a onclick="editStudentInfo('+item+')" data-toggle="modal" data-target="#exampleModal" class="btn btn-warning">Edit</a> '+
                                    '<a onclick="deleteStudentInfo('+item+')" class="btn btn-danger">Delete</a>'+                                  
                                    '</div>';
            })
    }



// id-asc-sort
function sortStudentIdAsc(){
    studentOutput.innerHTML = '';
    let sortData = students.sort(function(a, b){return a.studentID - b.studentID});
    passData(sortData);
}
 
// id-dec-sort
function sortStudentIdDsc(){
    studentOutput.innerHTML = '';
    let sortData = students.sort(function(a, b){return b.studentID - a.studentID});
    passData(sortData);
}

// age-asc-sort
function sortStudentAgeAsc(){
    studentOutput.innerHTML = '';
    let sortData = students.sort(function(a, b){return a.age - b.age});
    passData(sortData);
}

// age-dec-sort
function sortStudentAgeDsc(){
    studentOutput.innerHTML = '';
    let sortData = students.sort(function(a, b){return b.age - a.age});
    passData(sortData);
}
// batch-asc-sort
function sortStudentBatchAsc(){
    studentOutput.innerHTML = '';
    let sortData = students.sort(function(a, b){return a.batch - b.batch});
    passData(sortData);
}
// batch-dec-sort
function sortStudentBatchDsc(){
    studentOutput.innerHTML = '';
    let sortData = students.sort(function(a, b){return b.batch - a.batch});
    passData(sortData);
}

function passData(sortData){
    sortData.map(item => {
        studentOutput.innerHTML +=  '<div class="well  col-sm-4 border border-primary rounded-lg py-3">' +
                                '<h6 >' + 'Student ID: ' + item.studentID + '</h6>' +
                                '<h5>' +'FirstName: ' + item.firstName + '</h5>' +
                                '<h5>' +'LastName: ' + item.lastName + '</h5>' +
                                '<p>' + 'Gender: ' + item.gender + '</p>' +
                                '<p>' + 'Age: ' + item.age + '</p>' +
                                '<p>' + 'Batch: ' +item.batch + '</p>' +
                                '<p>' + 'Mobile No: ' + item.mobileNo + '</p>' + 
                                '<a onclick="editStudentInfo('+item+')" data-toggle="modal" data-target="#exampleModal" class="btn btn-warning">Edit</a> '+
                                '<a onclick="deleteStudentInfo('+item+')" class="btn btn-danger">Delete</a>'+                                  
                                '</div>';
        })
}

// Pagination


// output function

function fetchstudents() {
students =JSON.parse(localStorage.getItem('collectionOfStd'));
let studentOutput = document.getElementById('studentOutput');

studentOutput.innerHTML = '';

for (let i = 0; i < students.length; i++) {
    let studentID = students[i].studentID;
    let firstName = students[i].firstName;
    let lastName = students[i].lastName;
    let gender = students[i].gender;
    let age = students[i].age;
    let batch = students[i].batch;
    let mobileNo = students[i].mobileNo;
    
    studentOutput.innerHTML +=  '<div class="well  col-sm-4 border border-primary rounded-lg py-3">' +
                                '<h6 >' + 'Student ID: ' + studentID + '</h6>' +
                                '<h5>' +'FirstName: ' + firstName + '</h5>' +
                                '<h5>' +'LastName: ' + lastName + '</h5>' +
                                '<p>' + 'Gender: ' + gender + '</p>' +
                                '<p>' + 'Age: ' + age + '</p>' +
                                '<p>' + 'Batch: ' +batch + '</p>' +
                                '<p>' + 'Mobile No: ' + mobileNo + '</p>' + 
                                '<a onclick="editStudentInfo('+i+')" data-toggle="modal" data-target="#exampleModal" class="btn btn-warning">Edit</a> '+
                                '<a onclick="deleteStudentInfo('+i+')" class="btn btn-danger">Delete</a>'+                                  
                                '</div>';
                                
    }   
}
