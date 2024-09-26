document.getElementById('applyButton').addEventListener('click', function() {
   const name = document.getElementById('name').value;
   const skills = document.getElementById('skills').value.toLowerCase(); // Convert skills to lowercase for comparison
   const jobType = document.getElementById('jobType').value;
   const duration = document.getElementById('duration').value;
   const salary = document.getElementById('salary').value;
   const resumeLink = document.getElementById('resumeLink').value;
   const appType = document.getElementById('appType').value;
  
   // Define required skills for each job type
   const jobSkills = {
   "Software Development": ["java", "python", "c++", "secure coding"],
   "Website Development": ["html", "css", "javascript", "secure web development"],
   "Cyber Security": ["penetration testing", "network security", "firewall"],
   "Application Developer": ["java", "swift", "kotlin"],
   "Frontend Developer": ["react", "javascript", "html", "css"],
   // Add other roles as needed
   };
  
   // Check if all fields are filled
   if (!name || !skills || !jobType || !duration || !salary || !resumeLink || !appType) {
   alert('Please fill out all the fields.');
   return;
 }
  
   // Match entered skills with required skills for the selected job type
   const requiredSkills = jobSkills[jobType] || [];
   const enteredSkills = skills.split(',').map(skill => skill.trim());
  
   const skillsMatch = enteredSkills.some(skill => requiredSkills.includes(skill));
  
   if (!skillsMatch) {
   alert(`Your skills do not match the required skills for the ${jobType}. Required skills: ${requiredSkills.join(', ')}`);
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
  