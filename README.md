# 🎬 Movie Streaming Website on AWS EC2

A responsive movie streaming website hosted on an **Amazon EC2** instance. Movie posters and trailer videos are stored in **Amazon S3**, while the website is served from an Apache web server running on Ubuntu.

---

## 📌 Project Overview

This project demonstrates how to host a static website on an AWS EC2 instance and integrate media files stored in Amazon S3.

The website displays five movie posters. Clicking the **Play Trailer** button opens the corresponding trailer in a popup video player with a **Close** button.

---

## 🚀 Features

- Responsive movie gallery
- Hosted on Amazon EC2
- Movie posters stored in Amazon S3
- Trailer videos stored in Amazon S3
- Popup video player
- Close button to exit trailer
- Modern dark-themed UI

---

## 🛠 Technologies Used

- Amazon EC2
- Amazon S3
- Ubuntu
- Apache2
- HTML5
- CSS3
- JavaScript

---

# ☁️ AWS Architecture

```
                User
                  │
                  ▼
        Amazon EC2 (Ubuntu + Apache)
                  │
                  ▼
        Website (HTML/CSS/JavaScript)
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
 Amazon S3 Bucket      Amazon S3 Bucket
(Movie Posters)        (Trailer Videos)
```

---

# 📂 Project Structure

```
movie-website/
│
├── index.html
├── style.css
├── app.js
│
├── 1.jpg
├── 2.jpg
├── 3.jpg
├── 4.jpg
├── 5.jpg
│
├── trailer1.mp4
├── trailer2.mp4
├── trailer3.mp4
├── trailer4.mp4
├── trailer5.mp4
│
└── README.md
```

---

# 🎥 Movies Included

| Poster | Movie |
|---------|-----------------------------|
| 1 | Interstellar |
| 2 | Obsession |
| 3 | Drishyam |
| 4 | The Punisher: One Last Kill |
| 5 | Train to Busan |

---

# ⚙️ Workflow

1. User opens the Movie Website.
2. Website is hosted on Amazon EC2 using Apache.
3. Posters are loaded from Amazon S3.
4. User clicks **Play Trailer**.
5. JavaScript opens a popup.
6. Trailer video is streamed directly from Amazon S3.
7. User clicks **Close** to exit the popup.

---

# 📸 Project Screenshots

## Amazon S3 Bucket

![Amazon S3](<Screenshot 2026-07-17 100316.png>)

## Project Files

![Project Files](<Screenshot 2026-07-17 100343.png>)

## Home Page

![Home Page](<Screenshot 2026-07-17 100523.png>)

## Trailer Popup

![Trailer Popup](<Screenshot 2026-07-17 100540.png>)

## EC2 Instance

![EC2 Instance](<Screenshot 2026-07-17 100552.png>)

# 🎯 Learning Outcomes

- Hosting a website on Amazon EC2
- Configuring Apache Web Server
- Using Amazon S3 for media storage
- Integrating S3 with JavaScript
- Working with popup modals
- Deploying a cloud-based web application

---

# 👨‍💻 Author

**Darshan Desale**

AWS with Python Student

---

# 🙏 Acknowledgements

Special thanks to:

- **Mr. Vishal Bafana** for his guidance and mentorship.
- **Symbiosis Institute of Technology, Pune** for conducting the **AWS with Python** course.
- **Capgemini** for offering the training program.
- **R. C. Patel Placement Department** for recommending this industry-oriented course.

---

## ⭐ If you like this project, consider giving it a Star.
