<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the InstantaneousGramme and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** RyanGC93, Quiz.md, twitter_handle, ryangconk@gmail.com, project_title, This a clone of Instagram that is built with 
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Linked In][linkedin-shield]][linkedin-url]
[linkedin-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/RyanGC93/Quiz.md">
    <img src="https://i.imgur.com/JbX5XyW.png" alt="Logo" width="300" height="100">
  </a>

  <h3 align="center">Quiz.md</h3>
  <p align="center">
    A learning site built upon a Flask Backend and React/Redux frontend that allows software engineers to study various topics using a markdown template
    <br />
    <a href="https://github.com/RyanGC93/Quiz.md/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/RyanGC93/Quiz.md">View Demo</a>
    ·
    <a href="https://github.com/RyanGC93/Quiz.md/issues">Report Bug</a>
    ·
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#project-challenges">Project Challenges</a></li>
    <li><a href="#feature-highlights">Feature Highlights</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![product-screenshot](https://i.imgur.com/2Bm1Haq.png)




### Built With

* [Flask](https://flask.palletsprojects.com/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy and (optional: a heroku deployed version) up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* pipenv
  ```sh
  pipenv install
  ```
### Installation

1. Clone Quiz.md
   ```sh
   git clone https://github.com/RyanGC93/Quiz.md
   ```

2. Backend Installation
- Follow Instructions for Backend [Instructions](https://github.com/RyanGC93/Quiz.md/blob/readme/README_BACKEND.md)

3. Frontend Installation
- Follow Instructions for Frontend [Instructions](https://github.com/RyanGC93/Quiz.md/blob/readme/README_FRONTEND.md)

## project-challenges
### Paragraph formatting
The project was particular challenging on handling formatted paragraph. It proved to be difficult to take formatted text area from the front end, save it server side and display it on the front end displaying it with correct formatting as a textarea and in Markdown

## Feature Highlights

### (1) Auto Saving Changes While Editing 
<details>
  <summary>Click to expand!</summary>
  
  ### Summary
  An autosave feature was implemented for editing inputs and saving the values to allow for a simpler UI and user experience. This was implemented by using a timeout. If any values were changed an onchange called a the following code snippet. If more changes were made within three second the timeout was reset by storing the callback in the local react state. If after 3 seconds of no additional onchange events the timeout dispatches a redux thunk that updates the changes by updating the resources on the server side
  ### Code Snippet
  ```
	const timedDataUpdate = () => {
		if (timedUpdate) clearTimeout(timedUpdate);

		const updateTime = 3000;
		let timedSave = setTimeout(function () {
			dispatch(editRepo(para.id, repoTitle));
			autoSaveDisplay();
		}, updateTime);
		setTimedUpdate(() => timedSave);
	};
  ```
</details>


<!-- USAGE EXAMPLES -->
## Usage

> Quiz.md was created to solve the problem of studying language methods with syntax highlighting and serves as a learning aid application that renders in Markdown



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/RyanGC93/Quiz.md/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Ryan Conk- [Github](https://github.com/RyanGC93) - ryangconk@gmail.com

<!-- ACKNOWLEDGEMENTS -->





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/RyanGC93/Quiz.md.svg?style=for-the-badge
[contributors-url]: https://github.com/RyanGC93/Quiz.md/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/RyanGC93/Quiz.md.svg?style=for-the-badge
[forks-url]: https://github.com/RyanGC93/Quiz.md/network/members
[stars-shield]: https://img.shields.io/github/stars/RyanGC93/Quiz.md.svg?style=for-the-badge
[stars-url]: https://github.com/RyanGC93/Quiz.md/stargazers
[issues-shield]: https://img.shields.io/github/issues/RyanGC93/Quiz.md.svg?style=for-the-badge
[issues-url]: https://github.com/RyanGC93/Quiz.md/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/TolulopeVerissimo
