document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (validateUsername(username) && validatePassword(password)) {
        errorMessage.textContent = '';
        window.location.href = 'index.html';
        
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});

function validateUsername(username) {

    return username === "Michael"
}

function validatePassword(password) {
    return password === "notobviouspassword"
}






document.getElementById('keywordInput').addEventListener('submit', function() {
    var keyword = this.value.toLowerCase();
    var response = document.getElementById('response');

    if (keyword === "basketball") {
        response.textContent = "Basketball is a fast-paced team sport where two teams of five players each compete to score points by shooting a ball through the opponent’s hoop. The game is played on a rectangular court with a hoop at each end. Players must dribble the ball while moving, and they aim to score either 2 or 3 points per field goal, or 1 point per free throw. The game consists of four quarters, with a shot clock limiting the time to take a shot. Key positions include the point guard, shooting guard, small forward, power forward, and center, each with distinct roles in scoring, defending, and playmaking.";
    } else if (keyword === "soccer") {
        response.textContent = "Soccer, also known as football outside North America, is a team sport played on a rectangular field with a goal at each end. Each team has eleven players, including a goalkeeper, and the objective is to score goals by getting the ball into the opposing team’s net. The game is played in two halves of 45 minutes each, with additional stoppage time added at the referee's discretion. Players can use any part of their body except their arms and hands to control the ball, except for the goalkeeper, who can use their hands within their penalty area. The team with the most goals at the end of the match wins, and if the score is tied, the game may go into extra time or a penalty shootout, depending on the competition rules.";
    } else if (keyword === "piano") {
        response.textContent = "The piano is a versatile keyboard instrument with 88 keys, including both white and black keys, that produce sound when struck by hammers inside the instrument. It has a wide range of pitches, spanning seven octaves plus a minor third, from deep bass notes to high treble notes. The piano's keys are organized in a pattern of repeating octaves, and players use their fingers to press the keys, which causes the hammers to hit the corresponding strings. This action creates a rich variety of tones and dynamics, making the piano suitable for many music genres, from classical to jazz and pop. It is often used for solo performances, accompaniment, and composition.";
    } else if (keyword === "python") {
        response.textContent = "Python is a high-level, interpreted programming language known for its simplicity and readability, making it an excellent choice for both beginners and experienced developers. Its syntax emphasizes code readability with a focus on whitespace, and it supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python has a vast standard library and a rich ecosystem of third-party packages, allowing it to be used for a wide range of applications, from web development and data analysis to artificial intelligence and scientific computing. Its versatility and ease of use have made it one of the most popular programming languages in the world.";
    } else if (keyword === "html") {
        response.textContent = "HTML (HyperText Markup Language) is the foundational language for creating and structuring web pages. It uses a system of tags and elements to define and organize content, such as headings, paragraphs, links, and images, within a webpage. Each element is enclosed in angle brackets (e.g., `<h1>`, `<p>`, `<a>`) and can include attributes that provide additional details or functionality. HTML documents form the backbone of web content, providing the structure that is styled and enhanced by CSS and made interactive with JavaScript.";
    } else if (keyword === "css") {
        response.textContent = "CSS (Cascading Style Sheets) is a language used to describe the presentation and layout of HTML elements on a webpage. It allows developers to control the visual appearance of web content by applying styles such as colors, fonts, spacing, and positioning. CSS works by selecting HTML elements through selectors and then applying styles through rules, which include properties and values (e.g., `color: red;`, `font-size: 16px;`). CSS enables responsive design, making web pages adaptable to different screen sizes and devices, and can be included directly within HTML documents or linked as separate stylesheets.";
    } else if (keyword === "javascript") {
        response.textContent = "JavaScript is a versatile, high-level programming language primarily used to create interactive and dynamic features on web pages. It enables developers to manipulate HTML and CSS elements in real-time, handle user inputs, and control various web behaviors through scripting. JavaScript runs in the browser, allowing for client-side programming that can respond to events like clicks and form submissions without needing to reload the page. It supports a wide range of functionalities, from simple animations and form validations to complex web applications and server-side programming with environments like Node.js. Its ability to work seamlessly with HTML and CSS makes it an essential tool for modern web development.";
    } else if (keyword === "rubiks cubes") {
        response.textContentt = "The Rubik's Cube is a 3-dimensional combination puzzle invented by Ernő Rubik in 1974. It consists of a 3x3x3 grid of smaller cubes, or cubies, that can be rotated along different axes. The goal is to align the colors of each face of the cube so that each side displays a single, uniform color. The puzzle challenges spatial reasoning and problem-solving skills, with a vast number of possible permutations. Solving the Rubik's Cube involves a series of algorithms and strategies to systematically position the pieces, and it has become a popular pastime and competitive sport, with various solving techniques and world records.";
    } else if (keyword === "basic life skills") {
        response.textContent = "Basic life skills are essential abilities that help individuals manage everyday tasks and navigate various aspects of life effectively. These skills include practical tasks such as cooking, cleaning, and managing personal finances, as well as interpersonal skills like communication, problem-solving, and time management. Additionally, basic life skills involve self-care practices such as maintaining hygiene, understanding health and nutrition, and setting personal goals. Mastery of these skills fosters independence, resilience, and the ability to handle challenges, contributing to overall well-being and success in both personal and professional contexts.";
    } else {
        response.textContent = "Ask the AI";
    }
});