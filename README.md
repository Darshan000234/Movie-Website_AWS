# 🎬 AWS Movie Streaming Website

A responsive Movie Streaming Website hosted on **Amazon EC2** with movie posters and trailer videos stored in **Amazon S3**.

Users can browse movie posters and watch trailers inside a popup without leaving the page.

---

# Features

- Responsive Movie Gallery
- 5 Movie Posters
- 5 Trailer Videos
- Popup Video Player
- Close Button to Exit Trailer
- Posters and Videos stored in Amazon S3
- Website hosted on Amazon EC2

---

# Technologies Used

- HTML
- CSS
- JavaScript
- Amazon EC2
- Amazon S3

---

# Movies Included

- Interstellar
- Obsession
- Drishyam
- The Punisher: One Last Kill
- Train to Busan

---

# AWS Architecture

```
                User
                  │
                  ▼
          Amazon EC2 Instance
          (Hosts Website)
                  │
                  │ Requests Images & Videos
                  ▼
             Amazon S3 Bucket
      (Stores Posters & Trailers)
```

---

# Project Workflow

```
Upload Posters & Trailers
           │
           ▼
     Amazon S3 Bucket
           │
           ▼
Website Hosted on Amazon EC2
           │
           ▼
 User Opens Website
           │
           ▼
 Click "Play Trailer"
           │
           ▼
 Popup Opens
           │
           ▼
 Video Streams Directly From S3
```

---

# Project Screenshots

## Amazon S3 Bucket

![S3 Bucket](images/s3-bucket.png)

---

## Project Files

![Project Files](images/project-files.png)

---

## Homepage

![Homepage](images/homepage.png)

---

## Trailer Popup

![Trailer Popup](images/trailer-popup.png)

---

## EC2 Instance

![EC2](images/ec2-instance.png)

---

# S3 Bucket Structure

```
1.jpg
2.jpg
3.jpg
4.jpg
5.jpg

trailer1.mp4
trailer2.mp4
trailer3.mp4
trailer4.mp4
trailer5.mp4
```

---

# Deployment Steps

1. Launch an Amazon EC2 Instance.
2. Install Apache Web Server.
3. Upload project files to the EC2 instance.
4. Upload posters and trailer videos to Amazon S3.
5. Make S3 objects publicly accessible.
6. Update image and video URLs in JavaScript.
7. Access the website using the EC2 Public IP.

---

# Learning Outcomes

- Hosting a website on Amazon EC2
- Using Amazon S3 for media storage
- Integrating S3 resources with a web application
- Building a responsive movie gallery
- Implementing popup video playback using JavaScript

---

# Author

**Darshan Desale**

AWS Movie Streaming Website Project
