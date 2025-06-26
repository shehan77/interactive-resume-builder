//HTML//
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YOUR RESUME</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>

   
</head>
<body>
    <div class="shehan">
        <div class="header">
            <h1>Interactive Resume Builder</h1>
            <p>Create your resume your way</p>
            <div class="progress-bar-container">
                <div class="progress-bar" id="progressBar"></div>
            </div>
        </div>

        <div class="main-content">
            <div class="form-section">
                <form id="resumeForm">
                    <h2 class="section-title">Personal Information</h2>
                    
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your full name">
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="your.email@example.com">
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567">
                    </div>
                    <div class="form-group">
                        <label for="github">GitHub Profile</label>
                        <input type="url" id="github" name="github" placeholder="https://github.com/yourusername">
                    </div>
                    <div class="form-group">
                        <label for="linkedin">LinkedIn Profile</label>
                        <input type="url" id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/yourusername">
                    </div>

                    <div class="form-group">
                        <label for="summary">Profile Summary</label>
                        <textarea id="summary" name="summary" placeholder="Write a brief professional summary about yourself..."></textarea>
                    </div>

                    <h2 class="section-title">Skills</h2>
                    <div class="form-group">
                        <label for="skillInput">Add Skills</label>
                        <input type="text" id="skillInput" placeholder="Type a skill and press Enter">
                        <div class="skills-container" id="skillsContainer"></div>
                    </div>

                    <h2 class="section-title">Education</h2>
                    <div class="dynamic-section" id="educationSection">
                        <div class="dynamic-item">
                            <div class="form-group">
                                <label>Institution</label>
                                <input type="text" class="education-institution" placeholder="University/School name">
                            </div>
                            <div class="form-group">
                                <label>Degree</label>
                                <input type="text" class="education-degree" placeholder="Degree/Certificate">
                            </div>
                            <div class="form-group">
                                <label>Year</label>
                                <input type="text" class="education-year" placeholder="2020-2024">
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary" onclick="addEducation()">+ Add Education</button>
                    </div>

                    <h2 class="section-title">Experience</h2>
                    <div class="dynamic-section" id="experienceSection">
                        <div class="dynamic-item">
                            <div class="form-group">
                                <label>Company</label>
                                <input type="text" class="experience-company" placeholder="Company name">
                            </div>
                            <div class="form-group">
                                <label>Position</label>
                                <input type="text" class="experience-position" placeholder="Job title">
                            </div>
                            <div class="form-group">
                                <label>Duration</label>
                                <input type="text" class="experience-duration" placeholder="Jan 2022 - Present">
                            </div>
                            <div class="form-group">
                                <label>Description</label>
                                <textarea class="experience-description" placeholder="Describe your role and achievements..."></textarea>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary" onclick="addExperience()">+ Add Experience</button>
                    </div>

                    <div class="btn-group">
                        <button type="button" class="btn btn-danger" onclick="clearForm()">Clear Form</button>
                        <button type="button" class="btn btn-success" onclick="downloadPDF()">Download PDF</button>
                    </div>
                </form>
            </div>

            <div class="preview-section">
                <h2 class="section-title">Resume Preview</h2>
                <div class="resume-preview" id="resumePreview">
                    <div class="empty-state">
                        <p>Start filling out the form to see your resume preview</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  
</body>
</html>

//CSS//

* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Times New Roman', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0f60da 0%, #c3cfe2 100%);
            min-height: 100vh;
            color: #220202;
        }

        .shehan {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
            color: #ef078b;
        }

        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            animation: fadeInDown 1s ease-out;
            color: #d2ed08;
        }

        .header p {
            font-size: 1.1rem;
            opacity: 0.9;
            animation: fadeInUp 1s ease-out 0.3s both;
            color: #3ef308;
        }

        .progress-bar-container {
            width: 100%;
            height: 6px;
            background: #e0e7ef;
            border-radius: 3px;
            margin: 20px 0;
            overflow: hidden;
        }

        .progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #04f4a8, #185a9d);
            width: 0%;
            transition: width 0.3s ease;
            border-radius: 3px;
        }

        .main-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            animation: fadeIn 1s ease-out 0.5s both;
        }

        .form-section {
            background: #ffffff;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(24, 90, 157, 0.08);
            height: fit-content;
        }

        .preview-section {
            background: #f7faff;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(24, 90, 157, 0.08);
            position: sticky;
            top: 20px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #185a9d;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid #b0bec5;
            border-radius: 8px;
            font-size: 16px;
            transition: all 0.3s ease;
            background: #f5f7fa;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #43cea2;
            background: #fff;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(67, 206, 162, 0.1);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 100px;
        }

        .skills-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
        }

        .skill-tag {
            background: #43cea2;
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 5px;
            animation: slideInUp 0.3s ease;
        }

        .skill-tag .remove-skill {
            cursor: pointer;
            font-weight: bold;
            opacity: 0.7;
            transition: opacity 0.2s;
        }

        .skill-tag .remove-skill:hover {
            opacity: 1;
        }

        .dynamic-section {
            border: 2px dashed #b0bec5;
            border-radius: 8px;
            padding: 15px;
            margin: 15px 0;
            background: #f5f7fa;
        }

        .dynamic-item {
            background: #fff;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 15px;
            border-left: 4px solid #43cea2;
            animation: slideInLeft 0.3s ease;
        }

        .btn {
            padding: 12px 25px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .btn-primary {
            background: linear-gradient(135deg, #43cea2, #185a9d);
            color: white;
        }

        .btn-secondary {
            background: #b0bec5;
            color: #222;
        }

        .btn-danger {
            background: #ff6f61;
            color: white;
        }

        .btn-success {
            background: #43cea2;
            color: white;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(67, 206, 162, 0.1);
        }

        .btn-group {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }

        
        .resume-preview {
            max-height: 80vh;
            overflow-y: auto;
            background: #f7faff;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(24, 90, 157, 0.08);
        }

        .resume-header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #43cea2;
        }

        .resume-name {
            font-size: 2.2rem;
            font-weight: bold;
            color: #185a9d;
            margin-bottom: 10px;
            animation: fadeInUp 0.5s ease;
        }

        .resume-contact {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            color: #185a9d;
            animation: fadeInUp 0.5s ease 0.1s both;
        }

        .resume-section {
            margin-bottom: 25px;
            animation: slideInUp 0.5s ease;
        }

        .resume-section h3 {
            font-size: 1.3rem;
            color: #185a9d;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 2px solid #43cea2;
            padding-bottom: 5px;
        }

        .resume-item {
            margin-bottom: 15px;
            padding: 10px 0;
            animation: fadeInLeft 0.5s ease;
        }

        .resume-item h4 {
            font-weight: 600;
            color: #185a9d;
            margin-bottom: 5px;
        }

        .resume-item .subtitle {
            color: #43cea2;
            font-style: italic;
            margin-bottom: 5px;
        }

        .resume-skills {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .resume-skill {
            background: #43cea2;
            color: white;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 14px;
            animation: bounceIn 0.5s ease;
        }

        .empty-state {
            text-align: center;
            color: #999;
            font-style: italic;
            padding: 40px 20px;
        }

        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-10px); }
            to { opacity: 1; transform: translateX(0); }
        }

        @keyframes bounceIn {
            0% { opacity: 0; transform: scale(0.3); }
            50% { opacity: 1; transform: scale(1.05); }
            70% { transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
        }

        
        @media (max-width: 1024px) {
            .main-content {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .preview-section {
                position: static;
            }
        }

        @media (max-width: 768px) {
            .header h1 {
                font-size: 2rem;
            }
            
            .form-section,
            .preview-section {
                padding: 20px;
            }
            
            .resume-contact {
                flex-direction: column;
                gap: 10px;
            }
            
            .btn-group {
                flex-direction: column;
            }
            
            .shehan {
                padding: 10px;
            }
        }

        @media (max-width: 480px) {
            .header h1 {
                font-size: 1.8rem;
            }
            
            .form-section,
            .preview-section {
                padding: 15px;
            }
            
            .resume-name {
                font-size: 1.8rem;
            }
            
            .form-group input,
            .form-group textarea {
                font-size: 14px;
            }
        }

        .section-title {
            color: #185a9d;
            font-size: 1.2rem;
            margin: 25px 0 15px 0;
            padding-bottom: 5px;
            border-bottom: 2px solid #43cea2;
        }


// javascript//


  
      
        let skills = [];
        let formData = {};

        
        document.addEventListener('DOMContentLoaded', function() {
            setupEventListeners();
            updatePreview();
        });

        function setupEventListeners() {
            
            const inputs = document.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('input', updatePreview);
            });

          
            document.getElementById('skillInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    addSkill();
                }
            });

           
            document.addEventListener('input', function(e) {
                if (e.target.matches('.education-institution, .education-degree, .education-year, .experience-company, .experience-position, .experience-duration, .experience-description')) {
                    updatePreview();
                }
            });
        }

        function addSkill() {
            const skillInput = document.getElementById('skillInput');
            const skill = skillInput.value.trim();
            
            if (skill && !skills.includes(skill)) {
                skills.push(skill);
                skillInput.value = '';
                renderSkills();
                updatePreview();
            }
        }

        function removeSkill(skill) {
            skills = skills.filter(s => s !== skill);
            renderSkills();
            updatePreview();
        }

        function renderSkills() {
            const container = document.getElementById('skillsContainer');
            container.innerHTML = '';
            
            skills.forEach(skill => {
                const skillTag = document.createElement('div');
                skillTag.className = 'skill-tag';
                skillTag.innerHTML = `
                    ${skill}
                    <span class="remove-skill" onclick="removeSkill('${skill}')">&times;</span>
                `;
                container.appendChild(skillTag);
            });
        }

        function addEducation() {
            const section = document.getElementById('educationSection');
            const newItem = document.createElement('div');
            newItem.className = 'dynamic-item';
            newItem.innerHTML = `
                <div class="form-group">
                    <label>Institution</label>
                    <input type="text" class="education-institution" placeholder="University/School name">
                </div>
                <div class="form-group">
                    <label>Degree</label>
                    <input type="text" class="education-degree" placeholder="Degree/Certificate">
                </div>
                <div class="form-group">
                    <label>Year</label>
                    <input type="text" class="education-year" placeholder="2020-2024">
                </div>
                <button type="button" class="btn btn-danger" onclick="removeItem(this)">Remove</button>
            `;
            
            section.insertBefore(newItem, section.lastElementChild);
            updatePreview();
        }

        function addExperience() {
            const section = document.getElementById('experienceSection');
            const newItem = document.createElement('div');
            newItem.className = 'dynamic-item';
            newItem.innerHTML = `
                <div class="form-group">
                    <label>Company</label>
                    <input type="text" class="experience-company" placeholder="Company name">
                </div>
                <div class="form-group">
                    <label>Position</label>
                    <input type="text" class="experience-position" placeholder="Job title">
                </div>
                <div class="form-group">
                    <label>Duration</label>
                    <input type="text" class="experience-duration" placeholder="Jan 2022 - Present">
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea class="experience-description" placeholder="Describe your role and achievements..."></textarea>
                </div>
                <button type="button" class="btn btn-danger" onclick="removeItem(this)">Remove</button>
            `;
            
            section.insertBefore(newItem, section.lastElementChild);
            updatePreview();
        }

        function removeItem(button) {
            button.parentElement.remove();
            updatePreview();
        }

        function updatePreview() {
            const preview = document.getElementById('resumePreview');
            
            preview.classList.remove('template2', 'template3');
            

            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const summary = document.getElementById('summary').value;
            
            
            const educationItems = document.querySelectorAll('#educationSection .dynamic-item');
            const education = Array.from(educationItems).map(item => ({
                institution: item.querySelector('.education-institution').value,
                degree: item.querySelector('.education-degree').value,
                year: item.querySelector('.education-year').value
            })).filter(item => item.institution || item.degree || item.year);
            
            
            const experienceItems = document.querySelectorAll('#experienceSection .dynamic-item');
            const experience = Array.from(experienceItems).map(item => ({
                company: item.querySelector('.experience-company').value,
                position: item.querySelector('.experience-position').value,
                duration: item.querySelector('.experience-duration').value,
                description: item.querySelector('.experience-description').value
            })).filter(item => item.company || item.position);

            
            const hasData = name || email || phone || summary || education.length > 0 || experience.length > 0 || skills.length > 0;
            
            if (!hasData) {
                preview.innerHTML = '<div class="empty-state"><p>Start filling out the form to see your resume preview</p></div>';
                updateProgressBar(0);
                return;
            }

           
            let resumeHTML = '';
            
           
            if (name || email || phone) {
                resumeHTML += '<div class="resume-header">';
                if (name) resumeHTML += `<div class="resume-name">${name}</div>`;
                if (email || phone) {
                    resumeHTML += '<div class="resume-contact">';
                    if (email) resumeHTML += `<span>${email}</span>`;
                    if (phone) resumeHTML += `<span>${phone}</span>`;
                    resumeHTML += '</div>';
                }
                resumeHTML += '</div>';
            }

           
            if (summary) {
                resumeHTML += `
                    <div class="resume-section">
                        <h3>Professional Summary</h3>
                        <p>${summary}</p>
                    </div>
                `;
            }

            
            if (skills.length > 0) {
                resumeHTML += `
                    <div class="resume-section">
                        <h3>Skills</h3>
                        <div class="resume-skills">
                            ${skills.map(skill => `<span class="resume-skill">${skill}</span>`).join('')}
                        </div>
                    </div>
                `;
            }

            // Experience
            if (experience.length > 0) {
                resumeHTML += '<div class="resume-section"><h3>Experience</h3>';
                experience.forEach(exp => {
                    if (exp.company || exp.position) {
                        resumeHTML += '<div class="resume-item">';
                        if (exp.position) resumeHTML += `<h4>${exp.position}</h4>`;
                        if (exp.company) resumeHTML += `<div class="subtitle">${exp.company}</div>`;
                        if (exp.duration) resumeHTML += `<div class="subtitle">${exp.duration}</div>`;
                        if (exp.description) resumeHTML += `<p>${exp.description}</p>`;
                        resumeHTML += '</div>';
                    }
                });
                resumeHTML += '</div>';
            }

            // Education
            if (education.length > 0) {
                resumeHTML += '<div class="resume-section"><h3>Education</h3>';
                education.forEach(edu => {
                    if (edu.institution || edu.degree) {
                        resumeHTML += '<div class="resume-item">';
                        if (edu.degree) resumeHTML += `<h4>${edu.degree}</h4>`;
                        if (edu.institution) resumeHTML += `<div class="subtitle">${edu.institution}</div>`;
                        if (edu.year) resumeHTML += `<div class="subtitle">${edu.year}</div>`;
                        resumeHTML += '</div>';
                    }
                });
                resumeHTML += '</div>';
            }

            preview.innerHTML = resumeHTML;
            updateProgressBar(calculateProgress());
        }

        function calculateProgress() {
            const fields = [
                document.getElementById('name').value,
                document.getElementById('email').value,
                document.getElementById('phone').value,
                document.getElementById('summary').value
            ];
            
            const basicFieldsCompleted = fields.filter(field => field.trim()).length;
            const hasSkills = skills.length > 0 ? 1 : 0;
            const hasEducation = document.querySelectorAll('#educationSection .education-institution').length > 0 ? 1 : 0;
            const hasExperience = document.querySelectorAll('#experienceSection .experience-company').length > 0 ? 1 : 0;
            
            const totalFields = 7; 
            const completedFields = basicFieldsCompleted + hasSkills + hasEducation + hasExperience;
            
            return (completedFields / totalFields) * 100;
        }

        function updateProgressBar(percentage) {
            const progressBar = document.getElementById('progressBar');
            progressBar.style.width = percentage + '%';
        }

        function clearForm() {
            document.getElementById('resumeForm').reset();
            skills = [];
            renderSkills();
            updatePreview();
        }

        function downloadPDF() {
            
            const resumeContent = document.getElementById('resumePreview').innerHTML;

            if (!resumeContent || resumeContent.includes('empty-state')) {
                alert('Please fill out the form first before downloading.');
                return;
            }

            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Resume</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
                        .resume-header { text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #667eea; }
                        .resume-name { font-size: 2rem; font-weight: bold; margin-bottom: 10px; }
                        .resume-contact { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; color: #666; }
                        .resume-section { margin-bottom: 25px; }
                        .resume-section h3 { font-size: 1.2rem; color: #667eea; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #667eea; padding-bottom: 5px; }
                        .resume-item { margin-bottom: 15px; padding: 10px 0; }
                        .resume-item h4 { font-weight: 600; margin-bottom: 5px; }
                        .resume-item .subtitle { color: #666; font-style: italic; margin-bottom: 5px; }
                        .resume-skills { display: flex; flex-wrap: wrap; gap: 8px; }
                        .resume-skill { background: #667eea; color: white; padding: 4px 12px; border-radius: 15px; font-size: 14px; }
                        @media print { body { margin: 0; } }
                    </style>
                </head>
                <body>
                    <div class="resume-preview">
                        ${resumeContent}
                    </div>
                </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        }
   
