<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Development Class Project</title>
    <style>
        /* Base Reset */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        /* Page Layout */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333333;
            line-height: 1.6;
            padding: 20px;
        }

        /* Card Container */
        .card {
            background-color: #ffffff;
            max-width: 600px;
            margin: 0 auto;
            padding: 25px;
            border: 1px solid #dddddd;
            border-radius: 8px;
        }

        /* Headings */
        h1 {
            color: #0056b3;
            font-size: 24px;
            margin-top: 10px;
            margin-bottom: 15px;
        }

        h2 {
            color: #0056b3;
            font-size: 18px;
            margin-top: 25px;
            margin-bottom: 15px;
        }

        /* Paragraphs */
        p {
            font-size: 15px;
            margin-bottom: 15px;
            color: #555555;
        }

        /* Images */
        img {
            width: 100%;
            height: auto;
            border-radius: 6px;
            margin-bottom: 15px;
            display: block;
        }

        /* Ordered List */
        ol {
            margin-bottom: 15px;
            padding-left: 25px;
        }

        ol li {
            font-size: 15px;
            margin-bottom: 8px;
            color: #444444;
        }

        /* Links */
        a {
            color: #0056b3;
            font-weight: bold;
            text-decoration: underline;
        }
    </style>
</head>
<body>

    <div class="card">

        <!-- Section 1: Header -->
        <header>
            <img src="banner.jpg" alt="A laptop on a desk displaying computer code">
            <h1>Welcome to Web Development 101</h1>
            <p>
                This is my website created during class to learn HTML, CSS, and JavaScript.
            </p>
        </header>

        <!-- Section 2: Learning Topics -->
        <section>
            <h2>What We Are Learning</h2>
            <img src="code-editor.jpg" alt="Close-up of HTML and CSS code in a text editor">

            <ol>
                <li><strong>HTML</strong> – structure</li>
                <li><strong>CSS</strong> – styling</li>
                <li><strong>JavaScript</strong> – functionality</li>
            </ol>

            <p>
                To learn more, read the 
                <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML" target="_blank">
                    MDN Web Docs HTML Learning Guide
                </a>.
            </p>
        </section>

        <!-- Section 3: Deployment -->
        <section>
            <h2>Our Deployment Workflow</h2>
            <img src="workspace.jpg" alt="Developer workstation setup with dual monitors">

            <p>
                Publishing projects online allows us to share our work with classmates.
            </p>

            <p>
                Read the official 
                <a href="https://docs.github.com/en/pages" target="_blank">
                    GitHub Pages Documentation
                </a> 
                to learn how site hosting works.
            </p>
        </section>

    </div>

</body>
</html>
