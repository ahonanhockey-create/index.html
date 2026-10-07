# index.html<!DOCTYPE html>
<html>
<head>
    <title>My First GitHub Website</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>Welcome to my brand new website built with GitHub Pages!</p>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Web Development Class Project</title>
</head>
<body>

    <h1>Welcome to Web Development 101</h1>

    <p>This is my brand new website created during our class! In this class, we are learning the fundamentals of building and hosting websites using HTML, CSS, and GitHub Pages.</p>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Web Development Class Project</title>
    <style>
        /* 1. Page Background & Main Font */
        body {
            font-family: Arial, sans-serif; /* Clean, easy-to-read text */
            background-color: #eef2f5;       /* Soft light blue/gray background */
            color: #333333;                  /* Dark gray text color */
            padding: 40px 20px;              /* Space around the page content */
            display: flex;                   /* Centers our container box */
            justify-content: center;
        }

        /* 2. Content Card Container */
        .card {
            background-color: #ffffff;      /* White background for text box */
            padding: 30px;                   /* Inner spacing around text */
            border-radius: 12px;             /* Rounded corners on the box */
            max-width: 600px;                /* Limits box width for easy reading */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
        }

        /* 3. Heading Styling */
        h1 {
            color: #0056b3;                  /* Deep blue heading color */
            margin-top: 0;                   /* Removes extra space at the top */
        }

        /* 4. Paragraph Styling */
        p {
            font-size: 18px;                 /* Larger text size */
            line-height: 1.6;                /* Adds space between lines of text */
        }
    </style>
</head>
<body>

    <div class="card">
        <h1>Welcome to Web Development 101</h1>
        <p>This is my brand new website created during our class! In this class, we are learning the fundamentals of building and hosting websites using HTML, CSS, and GitHub Pages.</p>
    </div>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Web Development Class Project</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #eef2f5;
            color: #333333;
            padding: 40px 20px;
            display: flex;
            justify-content: center;
        }

        .card {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 12px;
            max-width: 600px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        /* Responsive Image Styling */
        .page-image {
            width: 100%;           /* Fills the container width */
            max-height: 300px;     /* Limits vertical height */
            object-fit: cover;     /* Crops image cleanly without distortion */
            border-radius: 8px;    /* Rounded corners matching the card */
            margin-bottom: 20px;   /* Space between image and heading */
        }

        h1 {
            color: #0056b3;
            margin-top: 0;
        }

        p {
            font-size: 18px;
            line-height: 1.6;
        }
    </style>
</head>
<body>

    <div class="card">
        <!-- Make sure the filename in src="..." matches your image filename exactly -->
        <img src="banner.jpg" alt="A laptop on a clean wooden desk showing computer code" class="page-image">

        <h1>Welcome to Web Development 101</h1>
        <p>This is my brand new website created during our class! In this class, we are learning the fundamentals of building and hosting websites using HTML, CSS, and GitHub Pages.</p>
    </div>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Web Development Class Project</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #eef2f5;
            color: #333333;
            padding: 40px 20px;
            display: flex;
            justify-content: center;
        }

        .card {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 12px;
            max-width: 600px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .page-image {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 20px;
        }

        h1 {
            color: #0056b3;
            margin-top: 0;
        }

        p {
            font-size: 18px;
            line-height: 1.6;
        }

        /* Styling for clickable links */
        .external-link {
            display: inline-block;
            margin-top: 15px;
            color: #0056b3;
            font-weight: bold;
            text-decoration: none; /* Removes the default underline */
        }

        .external-link:hover {
            text-decoration: underline; /* Adds underline back when hovering */
            color: #003d80;
        }
    </style>
</head>
<body>

    <div class="card">
        <img src="banner.jpg" alt="A laptop on a clean wooden desk showing computer code" class="page-image">

        <h1>Welcome to Web Development 101</h1>
        <p>This is my brand new website created during our class! In this class, we are learning the fundamentals of building and hosting websites using HTML, CSS, and GitHub Pages.</p>

        <!-- Clickable Link Element -->
        <a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer" class="external-link">
            Visit Wikipedia to learn more &rarr;
        </a>
    </div>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- Ensures proper scaling on mobile devices -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Development Class Project</title>
    <style>
        /* Base page reset and centering */
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

        /* Content Card */
        .card {
            background-color: #ffffff;
            padding: 32px;
            border-radius: 12px;
            max-width: 550px;
            width: 100%;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        /* Top Image */
        .page-image {
            width: 100%;
            height: 220px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 24px;
        }

        /* Typography */
        h1 {
            color: #0056b3;
            font-size: 26px;
            margin-bottom: 12px;
        }

        p {
            font-size: 16px;
            line-height: 1.6;
            color: #555555;
            margin-bottom: 24px;
        }

        /* Styled Button Link */
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
        }

        .external-btn:hover {
            background-color: #004085;
            transform: translateY(-1px);
        }
    </style>
</head>
<body>

    <main class="card">
        <!-- Make sure banner.jpg exists in your GitHub repository -->
        <img src="banner.jpg" alt="A laptop on a clean wooden desk showing computer code" class="page-image">

        <h1>Welcome to Web Development 101</h1>
        <p>This is my brand new website created during class! Here, we are learning the fundamentals of building and hosting websites using HTML, CSS, and GitHub Pages.</p>

        <a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer" class="external-btn">
            Visit Wikipedia &rarr;
        </a>
    </main>

</body>
</html>
