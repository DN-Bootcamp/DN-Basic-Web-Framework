//Set the hash to default
if(!location.hash){
    location.hash = "#section1";
};

//Reference Section Element
const Section = document.getElementById("section");

//Update Section on Load
UpdateSection();

//Update Section Contents when hash is changed.
window.addEventListener("hashchange", () =>{
    UpdateSection();
})

function UpdateSection(){
    var sectionName = location.hash.substring(1);
    console.log(sectionName);
    UpdateSectionContent(sectionName);
}

//Updates the innerHTML of the section element.
function UpdateSectionContent(sectionName){
    Section.innerHTML = GetSectionContent(sectionName);
}

//Get Section Content based on the SectionName
function GetSectionContent(sectionName){
    if(sectionName == "section1")
        return Section1Content();
    else if(sectionName == "section2")
        return Section2Content();
    else if(sectionName == "section3")
        return Section3Content();
    else
        return SectionNotFoundContent();
}

//Section Template Functions - Returning html for that section.
function Section1Content(){
    return `
    <p class="section-title">Section 1</p>
    <div class="section-nav">
        <a href="#section1" class="nav-link green-btn btn-disabled">Section 1</a>
        <a href="#section2" class="nav-link green-btn">Section 2</a>
        <a href="#section3" class="nav-link green-btn">Section 3</a>
    </div>
    `;
}

function Section2Content(){
    return `
    <p class="section-title">Section 2</p>
    <div class="section-nav">
    <a href="#section1" class="nav-link green-btn">Section 1</a>
    <a href="#section2" class="nav-link green-btn btn-disabled">Section 2</a>
    <a href="#section3" class="nav-link green-btn">Section 3</a>
    </div>
    `;
}

function Section3Content(){
    return `
    <p class="section-title">Section 3</p>
    <div class="section-nav">
    <a href="#section1" class="nav-link green-btn">Section 1</a>
    <a href="#section2" class="nav-link green-btn">Section 2</a>
    <a href="#section3" class="nav-link green-btn btn-disabled">Section 3</a>
    </div>
    `;
}

function SectionNotFoundContent(){
    return `
    <p class="section-title">Section was not found. Please Select a Section</p>
    <div class="section-nav">
        <a href="#section1" class="nav-link green-btn">Section 1</a>
        <a href="#section2" class="nav-link green-btn">Section 2</a>
        <a href="#section3" class="nav-link green-btn">Section 3</a>
    </div> `;
}
