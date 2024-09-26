document.getElementById('jobType').addEventListener('change', function() {
  const jobType = this.value;
  const jobDescription = document.getElementById('jobDescription');
  const descriptionText = document.getElementById('descriptionText');
  const applyButton = document.getElementById('applyButton');
  const confirmRead = document.getElementById('confirmRead');

  if (jobType) {
      // Show job description based on the job type selected
      let descriptions = {
        "Software Development": "As a Secure Software Developer, you will be responsible for creating secure applications by implementing secure coding practices and understanding common vulnerabilities. You will work in a team to develop, test, and maintain software solutions.",
        "Website Development": "As a Secure Website Developer, you will focus on building websites that are secure from vulnerabilities. Your responsibilities include developing website functionality and ensuring that web applications are safe from threats.",
        "Cyber Security": "As a Chief Security Officer, you will oversee the entire security function within the organization, developing security strategies, implementing risk assessments, and leading incident response efforts.",
        "Application Developer": "As a Secure Application Developer, you will design and implement applications while adhering to security best practices. Your role includes testing and ensuring that applications are free from vulnerabilities.",
        "Frontend Developer": "As a Secure Frontend Developer, you will create responsive and secure user interfaces using HTML, CSS, and JavaScript. You will focus on enhancing user experience while maintaining security.",
        "WordPress Developer": "As a WordPress Developer Intern, you will assist in developing and maintaining WordPress websites. Your role includes customizing themes, plugins, and ensuring the sites are secure and optimized.",
        "Flutter Developer": "As a Flutter Developer Intern, you will help build natively compiled applications for mobile, web, and desktop from a single codebase using the Flutter framework. You will focus on secure coding practices in mobile app development.",
        "UI/UX Developer": "As a UI/UX Designer Intern, you will work on improving user experience by designing user interfaces that are both functional and visually appealing. You will conduct user research to inform design decisions.",
        "Java Developer": "As a Java Development Intern, you will learn to develop Java-based applications, focusing on coding standards and secure programming techniques to build reliable applications.",
        "Kotlin Developer": "As a Kotlin Development Intern, you will work on developing Android applications using Kotlin, ensuring that your code is secure and efficient, while also collaborating with the development team.",
        "React Developer": "As a React Development Intern, you will build user interfaces for web applications using React. You will focus on creating reusable components and ensuring secure application practices."
    };

      descriptionText.textContent = descriptions[jobType] || 'Job description not available.';
      jobDescription.style.display = 'block';
  } else {
      jobDescription.style.display = 'none';
      applyButton.disabled = true;
  }

  // Disable apply button if the job description is not confirmed as read
  confirmRead.checked = false;
  confirmRead.addEventListener('change', function() {
      applyButton.disabled = !this.checked;
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

  // Check if all fields are filled
  if (!name || !skills || !jobType || !duration || !salary || !resumeLink || !appType) {
      alert('Please fill out all the fields.');
      return;
  }

  // Create the mailto link
  const hrEmail = 'hr@cehpoint.co.in';
  const subject = `${appType} Application for ${jobType} - ${name}`;
  const body = `Dear HR Team,\n\n` +
               `I would like to apply for the ${appType.toLowerCase()} position of ${jobType} at Cehpoint. Below are my details:\n\n` +
               `Name: ${name}\n` +
               `Skills: ${skills}\n` +
               `Type of Internship/Job: ${jobType}\n` +
               `${appType} Duration: ${duration}\n` +
               `Expected ${appType === 'Job' ? 'Salary' : 'Stipend'}: ${salary}\n\n` +
               `You can find my resume here: ${resumeLink}\n\n` +
               `I look forward to hearing from you regarding this opportunity.\n\n` +
               `Best regards,\n${name}`;

  // Redirect to mail client
  window.location.href = `mailto:${hrEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
