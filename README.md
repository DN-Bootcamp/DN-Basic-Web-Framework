# DN Basic Web Framework
Using **HTML**, **CSS** and **JavaScript**.

This framework allows you to practice developing basic webpages in HTML, CSS, JavaScript.

What are Web Frameworks? - [mdn web docs](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Web_frameworks)

## Contents
1. [Clone the Repository](#1-clone-the-repository)
2. [Project Folders](#2-project-folders)
3. [How to use the Framework](#3-how-to-use-the-framework)
    - [Starting the Project](#starting-the-project)
    - [Adding HTML](#adding-html)
    - [Adding CSS](#adding-css)
    - [Adding JavaScript](#adding-javascript)
4. [Single Page Navigation Example](#4-single-page-navigation-example)
    - [Overview](#overview)
    - [index.html](#indexhtml)
    - [script.js](#scriptjs)


## 1. Clone the Repository
We advise that you use `Git` to clone this GitHub repository. Alternativly you can download this repo as a `.zip` file through GitHub.

What is Git? - [Getting Started - What is Git?](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F)

How to install Git? - [Getting Started - Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## 2. Project Folders
#### ./src
This folder contains all of the project files.
#### ./src/assets
This folder contains all of the assets that will be used by the project, such as, images, scripts and stylesheets.

## 3. How to use the Framework
### Starting the Project
Open the `.src/index.html` file in a browser.

### Adding HTML
HTML can be added to the `index.html` file within the `./src` directory.

### Adding CSS
CSS can be added to the `styles.css` file into the `./src/assets` directory.

New `.css` files added to the `./src/assets` directory must be referenced in your target `.html` file, for example:

`<link rel="stylesheet" type="text/css" href="assets/styles.css">`

### Adding JavaScript
JavaScript can be added to the project by adding a `.js` file into the `./src/assets` directory.

Any JavaScript that you would like to include with your page, must be included as a html script tag. For Example:

`<script src="assets/script.js"></script>`

## 4. Single Page Navigation Example
### Overview
This example demonstrates how elements can be manipulated to create a single page application.

### index.html
Within the `index.html` file there is a `<div id="section">` which acts as a container for the inserted content.

```html
<div class="section-container">
    <div id="section" class="section">
        <!-- Contents Inserted by script.js -->
    </div>
</div>
```
### script.js

The content that is inserted into this element is determined by the [URL Hash](https://developer.mozilla.org/en-US/docs/Web/API/Location/hash). 
In this example we are setting the hash value using `<a>` elements with the href attribute set to the required value.

```html
<a href="#section1" class="nav-link green-btn">Section 1</a>
<a href="#section2" class="nav-link green-btn">Section 2</a>
<a href="#section3" class="nav-link green-btn">Section 3</a>
```

By default the Hash is set to `#section1` and the content is updated.

```JavaScript
//Set the hash to default
if(!location.hash){
    location.hash = "#section1";
};

//Update Section on Load
UpdateSection();
```
The Code below listens for when the `location.hash` is changed, when triggered the `UpdateSection();` function is called.

```JavaScript
//Update Section Contents when hash is changed.
window.addEventListener("hashchange", () =>{
    UpdateSection();
})
```

This function calls the `UpdateSectionContent(sectionName)` function.
```JavaScript
function UpdateSection(){
    var sectionName = location.hash.substring(1);
    SectionContentManager.UpdateSectionContent(sectionName);
}
```

The `UpdateSectionContent(sectionName)` function sets the section elements innerHTML to that value returned from `GetSectionContent(sectionName)`.

```JavaScript
//Reference Section Element
const Section = document.getElementById("section");

//Updates the innerHTML of the section element.
function UpdateSectionContent(sectionName){
    Section.innerHTML = GetSectionContent(sectionName);
}
```

The `GetSectionContent(sectionName)` function takes in a section name and returns the content for the requested section.

```JavaScript
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
```

The below functions return a html string that is to be inserted for that section. These can also be treated as templates.

```JavaScript
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


```
