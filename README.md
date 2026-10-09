<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Development Class Project</title>
    <style>
        /* CSS Reset & General Rules */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #eef2f5;
            color: #333333;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        /* Content Card Container */
        .card {
            background-color: #ffffff;
            padding: 32px;
            border-radius: 12px;
            max-width: 550px;
            width: 100%;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        /* Shared Styling for All Images */
        .section-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 20px;
        }

        /* Typography */
        h1 {
            color: #0056b3;
            font-size: 26px;
            margin-bottom: 12px;
        }

        h2 {
            color: #0056b3;
            font-size: 20px;
            margin-top: 24px;
            margin-bottom: 12px;
        }

        p {
            font-size: 16px;
            line-height: 1.6;
            color: #555555;
            margin-bottom: 16px;
        }

        /* Inline Meaningful Link Styling */
        .meaningful-link {
            color: #0056b3;
            font-weight: bold;
            text-decoration: underline;
        }

        .meaningful-link:hover {
            color: #003d80;
        }

        /* Ordered List Styling */
        .topic-list {
            margin-bottom: 16px;
            padding-left: 20px;
        }

        .topic-list li {
            font-size: 16px;
            line-height: 1.6;
            color: #444444;
            margin-bottom: 8px;
        }

        /* Call-to-Action Button Link */
        .external-btn {
            display: inline-block;
            background-color: #0056b3;
            color: #ffffff;
            font-weight: bold;
            font-size: 15px;
            padding: 12px 20px;
            border-radius: 6px;
            text-decoration: none;
            transition: background-color 0.2s ease, transform 0.1s ease;
            margin-top: 8px;
        }

        .external-btn:hover {
            background-color: #004085;
            transform: translateY(-1px);
        }
    </style>
</head>
<body>

    <main class="card">
        
        <!-- SECTION 1: Welcome Header -->
        <header>
            <!-- Image 1: Main Banner Header -->
            <img src="banner.jpg" alt="A laptop on a clean wooden desk showing computer code on the screen" class="section-image">
            
            <h1>Welcome to Web Development 101</h1>
            <p>This is my brand new website created during class! In this course, we learn how to create and style modern web pages from scratch.</p>
        </header>

        <!-- SECTION 2: What We Are Learning (Ordered List + Link 1) -->
        <section>
            <h2>What We Are Learning</h2>
            
            <!-- Image 2: Code Editor for Learning Section -->
            <img src="code-editor.jpg" alt="Close-up of HTML and CSS lines of code inside a text editor" class="section-image">

            <ol class="topic-list">
                <li>Structuring web pages with <strong>HTML5</strong></li>
                <li>Styling and layout design with <strong>CSS3</strong></li>
                <li>Deploying websites using <strong>GitHub Pages</strong></li>
            </ol>

            <!-- Meaningful Link 1 -->
            <p>To master coding markup, we follow the <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML" target="_blank" rel="noopener noreferrer" class="meaningful-link">MDN Web Docs HTML Learning Guide</a>.</p>
        </section>

        <!-- SECTION 3: Workspace & Resources (Link 2) -->
        <section>
            <h2>Our Deployment Workflow</h2>
            
            <!-- Image 3: Developer Setup for Workspace Section -->
            <img src="workspace.jpg" alt="A developer workstation setup with dual monitors, keyboard, and coffee cup" class="section-image">

            <p>Publishing code live to the web is essential for showing off projects to classmates and future clients.</p>

            <!-- Meaningful Link 2 (Button Style) -->
            <a href="https://docs.github.com/en/pages" target="_blank" rel="noopener noreferrer" class="external-btn">
                Read the GitHub Pages Documentation &rarr;
            </a>
        </section>

    </main>

</body>
</html>

