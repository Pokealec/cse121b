// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T",
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 25,
            days: "TTh",
            instructor: "Sis A",
        },
    ],
  

  enrollStudent: function (sectionNum) { // create enroll function that takes the sectionNum
    const sectionIndex = this.sections.findIndex( 
        (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) { // if section exists (it will have a sectionIndex), ...
        this.sections[sectionIndex].enrolled++; // add 1 to enrolled
        renderSections(this.sections);
    }
  },
  dropStudent: function (sectionNum) { // create drop function that takes the sectionNum
    const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) { // if section exists (it will have a sectionIndex), ...
        this.sections[sectionIndex].enrolled--; // subtract 1 from enrolled
        renderSections(this.sections);
    }
  },
  changeEnrollment: function (sectionNum, add = true) { // extra function from the assignment, condenses the two above into one function!
    // find the right section...Array.findIndex will work here
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else {
        this.sections[sectionIndex].enrolled--;
      }
      renderSections(this.sections);
    }
  }

};


function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    coursecode.textContent = course.code;
};

function renderSections(section) {
    const html = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
}

setCourseInfo(aCourse);
renderSections(aCourse.sections);

