INFSCI1570 - Assignment 1
By: Zachary Lehning     zal36

1. What kind of website did you make and why?

I made a website about a few marine animals I find very interesting. The website is meant to serve as both educational and informational, teaching readers/users about different marine animals including appearance, habitats, behaviors, etc. On the home page for my website I also included a short reading comprehension quiz to see if readers paid attention to the reading or not. 
As for why I choose to talk about marine animals specifically, I've been fascinated with the ocean and by extension marine life for as long as I can remember. In fact, I originally intended to study marine biology and peruse a PhD program for it, with the hope of getting to work with or on one of the deep sea exploration missions to find new marine life. However, due to the time and financial concern I decided to pivot to a more attainable area of interest of mine in Information Science. That being said I still love learning and discussing marine life, both in the ocean and any other body of water.


2. Briefly describe the 5 pages created for your site.

The pages I created each contain a short description of a different marine animal and include two pictures of said animal. There is also a bibliography page containing the resources I used to gather information.
Side note for the sources page, yes I did in fact use Wikipedia as one of my main sources. To defend myself some of these animals have very limited public resources about them as lot of information is locked behind research paper pay walls that I am unwilling to pay for this assignment. 


3. What HTML elements were used and why did you choose them?

Element                 Use
<html>                  Root container that wraps all HTML content.                                             
<head>                  Holds metadata, page title, and links to external resources like CSS.                   
<link>                  Connects the page to external stylesheets for styling.                                  
<title>                 Specifies the page’s title shown in the browser tab.                                    
<body>                  Contains all visible content displayed on the page.                                     
<header>                Defines the site’s header area, including title and navigation.                         
<section>               Groups related content into logical sections for structure and readability.             
<footer>                Creates the page footer, often used for credits or additional info.                     
<div>                   Generic container used to group, structure, and style elements.                         
<nav>                   Defines a navigation block with links to other pages.                                   
<ul>                    Creates an unordered list, used for navigation menus.                                   
<li>                    Represents a list item inside a navigation or list structure.                           
<a>                     Creates a hyperlink to navigate between pages or sections.                              
<h1>                    Main heading for the page, typically the site title or main topic.                      
<h3>                    Subheadings used to organize content and improve readability.                           
<p>                     Paragraph element used for descriptive text and explanations.                           
<b>                     Makes text bold to emphasize key points.                                                
<em>                    Italicizes text, often used for scientific names or emphasis.                           
<form>                  Wraps interactive quiz elements and handles user submissions.                           
<label>                 Associates descriptive text with form inputs, improving accessibility.                  
<input type="radio">    Allows users to select a single answer option in quiz questions.                        
<button>                Adds a clickable button to submit the form.                                             
<img>                   Embeds images such as icons and animal pictures.                                        
<table>                 Structures citation data into a clear tabular format.                                   
<tr>                    Defines a row within a table.                                                           
<th>                    Table header cell, used for column titles.                                              
<td>                    Table data cell containing text or nested elements.                                     
<ol>                    Ordered list used for numbered reference sources.                                       
<li> (inside <ol>)      Represents an individual citation in an ordered list.                                   
<script>                Links external JavaScript files to add interactivity. 


4. What CSS styles did you apply to change the visual design?

Class                                       Purpose
body                                        Removes default margins and sets consistent monospace font across the site.                             
footer                                      Adds a dark background, light text, italic style, and centered alignment to visually separate the footer. 
header                                      Uses a bold background and centered text to clearly define the site’s header area.                        
.headerContainer                            Uses flexbox to neatly space out the title and navigation elements.                                       
.menubtn & .menubtn img                     Styles the menu button to be clickable and responsive in size.                                            
.menucontents                               Styles the dropdown navigation menu with background color, borders, and positioning for a clean layout.   
.menucontents.show                          Controls the menu’s visibility for a toggled dropdown effect.                                             
.menucontents a, a:visited, a:hover         Styles navigation links with colors and hover effects for better usability and feedback.                  
.menucontents li                            Adds spacing and borders between dropdown items for visual clarity.                                       
.navContainer                               Uses flexbox to center navigation buttons on the homepage.                                                
.navContainer > a                           Adds spacing and padding to navigation links for better click targets.                                    
.navButton                                  Creates styled buttons with borders, colors, and transitions for an interactive look.                     
.navButton:hover                            Inverts button colors on hover to provide visual feedback.                                                
.homepage                                   Centers homepage content with padding and a soft background color.                                        
.intro h3                                   Enlarges and underlines the intro heading to draw attention.                                              
.intro p                                    Adjusts text size, line spacing, and width for better readability.                                        
.contentContainer                           Uses flexbox to center content sections for balanced page layout.                                         
.info-box                                   Adds a colored background, borders, and padding to emphasize informational content.                       
.info-box h3 & .info-box p                  Adjusts font sizes and colors for hierarchy and readability.                                              
.stackedImages                              Aligns multiple images vertically and centers them.                                                       
.stackedImages img                          Sets responsive image sizing and adds a colored border for emphasis.                                      
.quiz                                       Styles the quiz section with a light background, borders, and padding for readability.                    
.quiz p                                     Left-aligns question text for a cleaner layout.                                                           
.quiz label                                 Uses flex layout and spacing to align radio buttons with their labels.                                    
.quiz input[type="radio"]                   Adds spacing and accent color to radio buttons for better visibility.                                     
button                                      Styles buttons with a bold background, padding, and pointer cursor to highlight interactivity.            
table                                       Removes default spacing and ensures tables scale responsively.                                            
th                                          Styles table headers with bold background color and borders for clear column distinction.                 
td                                          Styles table data cells with padding, colors, and borders for readability.                                
td ol li                                    Adjusts citation text size to fit well within the table layout.                                           


5. Describe the Javascript code you wrote to add interactivity.

The toggleMenu() function controls the visibility of the navigation dropdown in the website’s header. When the user clicks the menu button, the function checks if the menu is currently shown. If it’s hidden it adds the show class to make it visible, if it’s visible it removes the class to hide it.
The event listener activates once the page’s content has fully loaded, ensuring that all quiz elements are accessible before any interaction occurs. It listens for the quiz form submission, prevents the default page refresh, and then grades questions 1–6 by checking whether the selected answers are correct. The script calculates the user’s score, displays the result in the browser, and responds to question 7 (opinion question) with a personalized message based on the user’s input.