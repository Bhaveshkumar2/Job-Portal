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
    
    document.getElementById('navbarToggle').addEventListener('click', function() {
    const menu = document.getElementById('item');
    menu.classList.toggle('active');
    });
    