![Coding Quiz](readme/cqLogo.png)

# Coding Quiz

Coding Quiz is a place to check the knowledge of a user in 3 specific coding language, **HTML**, **CSS** and **Javascript**. User of a website will have an option to chose from 3 different coding language they want to test their knowledge on. They will be asked 10 questions from the language they selected and at the end of 10 questions, it will display the score to the user. 

---

## Demo

A live demo of this website can be found [here](https://nofursad.github.io/codingquiz/)

[GitHub Repo](https://github.com/nofursad/codingquiz.git)

![Responsiveness](readme/responsivness.png)

---

## Strategy

The main purpose of this website is to test the knowledge of the user on HTML, CSS and Javascript programming language. This website is targeted towards the coder like myself where they can check their knowledge on the coding language.

---

## Technologies

1. HTML5
2. CSS3
3. Javascript

---

## Features

 ### **The Header**
  * The header section only consist of logo for the website with the name of website.

  ![Header](readme/cqLogo.png)

### **Navigation Bar**
  * Navigation Bar is just below the header section with 3 buttons.
  * The buttons are not linked to new page but is programmed using Javascript to get the questions from different coding language.
  * The event handler in the script.js file listen to click on the button and response to them.
  * The button of the selected category will be highlighted so user can be aware of what category quiz they are doing.

  ![Navigation](readme/nav.png)

### **Question Area**
  * When the page finish loading, the question area will be populated using HTML question as a default category. User can select from the navigation button to try the different catefory. The user will be asked 10 question from the selected category before displaying the result of the quiz.

  ![Question Area](readme/queArea.png)

### **Answer Area**
  * HTML is the category selected by default when user load the page. Answer area will be populated with 4 options for the question that is displayed. When user hover over the answer buttons, it will change the background color and scale to 1.02 times its original size.

  ![Answer Area](readme/ansArea.png)

### **Score Board**
  * User can view their score, the time they took on the quiz and the number of question they have attempted. Score will be updated everytime when user get the answer correct. Time will reset when user change the category. And question number will be updated everything user answer the question.

  ![Score Board](readme/scoreBoard.png)

### **Footer**
  * Footer section is positioned at the very buttom of the page.
  * Footer consist of Copyright message and social-media icons.
  * Social media icon is linked to the Facebook, twitter, youtube and instagram.

  ![Footer](readme/footer.png)

---

## Testing

### 1. Functionality

| **Test Label**  | **Test Action**  | **Expected Outcome**  | **Test Outcome**  |
|---|---|---|---|
| Quiz initial loadup  | Navigate to the quiz page  | Page should load with quiz rules  | Pass  |
| Default quiz to be HTML Category  | Load the page and check the highlight button  | Html button to be highlighted  |  Pass |
| Quiz Category Change  | Click CSS/Javascript button to change the quiz category  | User get question from selected category  | Pass  |
|Quiz Timer | Check the 30 sec timer in quiz | User to move to next question if no response in 30 sec | Pass |
  
### 2. Browser Compatibility
 Testing has been carried out on the following browsers :
* Chrome Version 95.0.4638.69 (Official Build) (64-bit)
* Firefox Version 94.0.1 (64-bit)
* Edge Version 95.0.1020.44 (Official build) (64-bit)
* Safari on macOS Big Sur Ver 11.6.1 (Safari Version 15.1 (16612.2.9.1.30, 16612))

### 3. Responsiveness
* I have tested the website for its responsiveness on different screen size device using the devtools device toolbar in chrome browser.I have tested for very small screen (iPhone 5 with width 320px) and very large screen (5k iMac Pro with resolution 5120 x 2880 px).* I have confirmed that all the text in all section of the website are readable and easy to understand.

---

## Bugs

### **Solved Bugs**
When i tested the javascript codes in the jshint.com, I found out that I was missing some of the semicolon after finishing my code.  
I went back and corrected that in script.js file by adding semicolon wherever it was missing.  
  
### **Unfixed Bug**
No Unfixed Bugs.  
  
## Validator Testing
* **HTML**: I tested the code through the official **W3C validator** and all test pass without any error.

![Html Validator](readme/htmlValidator.png)
  
* **CSS**:  I tested the code through the official **W3C (Jigsaw) validator** and all test pass without any error.

![Css Validator](readme/cssValidator.png)
  
* **Javascript**: I tested the javascript code throught the website **JSHINT.COM** and all code pass without any error.

![Js Validator](readme/jsValidator.png)
  
* **Accessibility**: I have confirmed that texts on the website are easy to read by choosing the right color and fonts. And confirm website is accessible by running it through **lighthouse** in devtools.  
  
![Accessibility](readme/accessibilitye.png)

 ## **Deployment**
I deployed the website on GitHub pages via the following:

1. From the projects repository go to the **settings** tab which will take you to settings page.
1. On the left hand menu near the bottom click on the **pages** link which will open the GitHub Pages tab.
1. Under **Source** section, click on the dropdown menu to get the option available.
1. Select the first option **Main** and then click on **Save** button to save the changes.
1. At the top of the GiHub Pages tab, message will appear saying  **Your site is ready to be published** following with the link to access the page.
1. Once the site is published to the link provided, the message will change to **Your site is published** following with the link to access the page.

You can access the live site via the following link [A Game of Snake](https://gibbo101.github.io/snake-game/).