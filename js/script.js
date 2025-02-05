// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');  // Debug log
    
    // Add current year to any elements with class 'current-year'
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('.current-year').forEach(element => {
        element.textContent = currentYear;
    });

    // Theme switching
    const themeSwitch = document.querySelector('.theme-switch');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    console.log('Saved theme:', savedTheme);  // Debug log
    htmlElement.setAttribute('data-theme', savedTheme);

    themeSwitch.addEventListener('click', () => {
        console.log('Theme switch clicked');  // Debug log
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        console.log('Switching to theme:', newTheme);  // Debug log
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Add hover effect for job entries
    const jobEntries = document.querySelectorAll('.job');
    jobEntries.forEach(job => {
        job.addEventListener('mouseenter', () => {
            job.style.transform = 'translateX(10px)';
            job.style.transition = 'transform 0.3s ease';
        });
        
        job.addEventListener('mouseleave', () => {
            job.style.transform = 'translateX(0)';
        });
    });
}); 