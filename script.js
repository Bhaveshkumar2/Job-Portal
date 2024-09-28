document.getElementById('jobType').addEventListener('change', function() {
  const jobType = this.value;
  const jobDescription = document.getElementById('jobDescription');
  const descriptionText = document.getElementById('descriptionText');
  const applyButton = document.getElementById('applyButton');
  const confirmRead = document.getElementById('confirmRead');

  if (jobType) {
    let descriptions = {
      "Software Development": "We are looking for a talented Secure Software Developer to join our remote team. This role involves designing, developing, and maintaining secure software applications using our technology stack. The ideal candidate will have a strong grasp of security principles and hands-on experience with software development in MERN, Flutter, Firebase, Angular, and Next.js.",
      "Website Development":"We are seeking a skilled Secure Website Developer to join our dynamic team remotely. This role involves designing, developing, and maintaining secure websites and web applications using our technology stack. The ideal candidate will have a robust understanding of security best practices and be proficient in MERN, Flutter, Firebase, Angular, and Next.js.",
      "Cyber Security": "We are seeking a highly experienced Chief Cyber Security Officer (CISO) to lead our cybersecurity strategy and operations remotely. This executive role involves developing and implementing robust security strategies to protect our company’s and clients’ digital assets. The ideal candidate will have a deep understanding of cybersecurity best practices, advanced threat management, and a proven track record of leading cybersecurity initiatives.",
      "Application Developer":"We are seeking a skilled Secure Application Developer to join our remote team. This role involves designing, developing, and maintaining secure mobile applications using React Native and Flutter with Firebase. The ideal candidate will have a strong understanding of security best practices and a proven track record in developing secure applications.",
      "Frontend Developer": "We are looking for a talented Secure Frontend Developer to join our remote team. This role involves designing, developing, and maintaining secure frontend applications using modern technologies. The ideal candidate will have expertise in creating secure and efficient user interfaces, with a strong understanding of security best practices.",
      "WordPress Developer":"We are seeking a motivated and enthusiastic WordPress Development Intern to join our team remotely. This internship offers an excellent opportunity to gain hands-on experience in WordPress development while contributing to real-world projects. The ideal candidate will have a passion for web development, a keen interest in WordPress, and a willingness to learn and grow within a supportive environment.",
      "Flutter Developer":"We are looking for a motivated and enthusiastic Flutter Developer Intern to join our team remotely. This internship offers a valuable opportunity to gain hands-on experience in mobile app development using Flutter. The ideal candidate will have a passion for mobile technology, a desire to learn, and a commitment to contributing to impactful projects.",
      "UI/UX Developer":"We are seeking a creative and detail-oriented UI/UX Designer Intern to join our team remotely. This internship provides a valuable opportunity to gain practical experience in user interface and user experience design while contributing to real-world projects. The ideal candidate will have a passion for design, a keen eye for detail, and a desire to create user-centered, visually appealing digital experiences.",
      "Java Developer": "We are looking for an enthusiastic and driven Java Development Intern to join our team remotely. This internship provides an excellent opportunity to gain practical experience in Java development while contributing to meaningful projects. The ideal candidate will have a passion for coding, a strong interest in software development, and a willingness to learn and grow.",
      "Kotlin Developer": "We are seeking a motivated and enthusiastic Kotlin Development Intern to join our team remotely. This internship offers a fantastic opportunity to gain hands-on experience in Kotlin development while contributing to impactful projects. The ideal candidate will have a passion for mobile app development, a solid understanding of Kotlin, and a willingness to learn and grow in a supportive environment.",
      "React Developer": "We are looking for an enthusiastic and motivated React Development Intern to join our team remotely. This internship provides an excellent opportunity to gain practical experience in React development while working on meaningful projects. The ideal candidate will have a passion for front-end development, a solid understanding of React, and a desire to learn and contribute."
  };


      descriptionText.textContent = descriptions[jobType] || 'Job description not available.';
      jobDescription.style.display = 'block';

  } else {
      jobDescription.style.display = 'none';
      applyButton.disabled = true;
  }

  confirmRead.checked = false;
  confirmRead.addEventListener('change', function() {
      applyButton.disabled = !this.checked;
      if (this.checked) {
        this.nextElementSibling.classList.add('checked-label');
    } else {
        this.nextElementSibling.classList.remove('checked-label');
    }
  });
});

document.getElementById('applyButton').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const skills = document.getElementById('skills').value;
  const jobType = document.getElementById('jobType').value;
  const duration = document.getElementById('duration').value;
  const salary = document.getElementById('salary').value;
  const resumeLink = document.getElementById('resumeLink').value;
  const appType = document.getElementById('appType').value;

  if (!name || !skills || !jobType || !duration || !salary || !resumeLink || !appType) {
      alert('Please fill out all the fields.');
      return;
  }

  const hrEmail = 'hr@cehpoint.co.in';
  const subject = `${appType} Application for ${jobType} - ${name}`;
  const body = `Dear HR Team,\n\n` +
               `I would like to apply for the ${appType.toLowerCase()} position of ${jobType} at Cehpoint. Below are my details:\n\n` +
               `Name: ${name}\n` +
               `Skills: ${skills}\n` +
               `Type of Internship/Job: ${jobType}\n` +
               `${appType} Duration: ${duration}\n` +
               `Expected ${appType === 'Job' ? 'Salary' : 'Stipend'}: ${salary}\n\n` +
               `Resume Link: ${resumeLink}\n\n` +
               "I have carefully read the job description and roles before applying\n\n" +
               `Thank you for considering my application.\n\n` +
               `Best Regards,\n${name}`;

  const mailtoLink = `mailto:${hrEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
});
