
        // Global variables
        let skills = [];
        let formData = {};

        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            setupEventListeners();
            updatePreview();
        });

        function setupEventListeners() {
            // Form input listeners
            const inputs = document.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('input', updatePreview);
            });

            // Skills input listener
            document.getElementById('skillInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    addSkill();
                }
            });

            // Dynamic form listeners
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
            // Remove all template classes before adding the current one
            preview.classList.remove('template2', 'template3');
            // No template logic

            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const summary = document.getElementById('summary').value;
            
            // Get education data
            const educationItems = document.querySelectorAll('#educationSection .dynamic-item');
            const education = Array.from(educationItems).map(item => ({
                institution: item.querySelector('.education-institution').value,
                degree: item.querySelector('.education-degree').value,
                year: item.querySelector('.education-year').value
            })).filter(item => item.institution || item.degree || item.year);
            
            // Get experience data
            const experienceItems = document.querySelectorAll('#experienceSection .dynamic-item');
            const experience = Array.from(experienceItems).map(item => ({
                company: item.querySelector('.experience-company').value,
                position: item.querySelector('.experience-position').value,
                duration: item.querySelector('.experience-duration').value,
                description: item.querySelector('.experience-description').value
            })).filter(item => item.company || item.position);

            // Check if form has any data
            const hasData = name || email || phone || summary || education.length > 0 || experience.length > 0 || skills.length > 0;
            
            if (!hasData) {
                preview.innerHTML = '<div class="empty-state"><p>Start filling out the form to see your resume preview</p></div>';
                updateProgressBar(0);
                return;
            }

            // Generate resume HTML
            let resumeHTML = '';
            
            // Header
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

            // Summary
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
            
            const totalFields = 7; // 4 basic + skills + education + experience
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
            // Simple PDF generation using window.print()
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
   