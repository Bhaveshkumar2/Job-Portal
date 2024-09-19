
document.getElementById('applyButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const skills = document.getElementById('skills').value;
    const jobType = document.getElementById('jobType').value;
    const duration = document.getElementById('duration').value;
    const salary = document.getElementById('salary').value;
    const resumeLink = document.getElementById('resumeLink').value;
   

    
    if (!name || !skills || !jobType || !duration || !salary|| !resumeLink) {
        alert('Please fill out all the fields.');
        return; // Stop the function if validation fails
    }

    // Create the mailto link
    const hrEmail = 'hr@cehpoint.co.in';
    const subject = `Application for ${jobType} - ${name}`;
    const body = `Dear HR Team,\n\n` +
    `I would like to apply for the position of ${jobType} at Cehpoint. Below are my details:\n\n` +
    `Name: ${name}\n` +
    `Skills: ${skills}\n` +
    `Type of Internship/Job: ${jobType}\n` +
    `Expected Duration: ${duration}\n` +
    `Expected Stipend/Salary: ${salary}\n\n` +
    `You can find my resume here: ${resumeLink}\n\n`+
    `I look forward to hearing from you regarding this opportunity.\n\n` +
    `Best regards,\n${name}`;

    


    // Redirect to mail client
    window.location.href = `mailto:${hrEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
});


document.getElementById('navbarToggle').addEventListener('click', function() {
    const menu = document.getElementById('item');
    menu.classList.toggle('active');
    console.log('Menu class list:', menu.classList);
});
