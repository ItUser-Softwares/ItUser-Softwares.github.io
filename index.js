
// Enhanced project data with all your projects
const projectData = {
    'food-wastage': {
        title: 'Food Wastage Calculator',
        description: 'Combat food waste with smart calculations! This C++ application helps restaurants and households track leftover food, calculate disposal costs, and promote sustainable practices. Features intuitive web interface, real-time cost estimation, comprehensive reporting with detailed analytics, custom disposal mechanisms, export functionality, and responsive design for desktop and mobile with database integration for historical data.',
        tech: ['C++', 'Web Interface', 'Real-time Analytics', 'Database Integration', 'Responsive Design'],
        liveLink: 'https://your-food-wastage-demo.com',
        githubLink: 'https://github.com/yourusername/food-wastage-calculator'
    },
    'flutter-firebase': {
        title: 'Flutter Firebase Integration System',
        description: 'Seamless mobile app development with powerful backend integration! This Flutter project demonstrates complete Firebase integration, including authentication, real-time database, and cloud storage. Features Google OAuth authentication with secure login flow, real-time data synchronization across devices, cloud storage for media and file management, responsive UI with modern Material Design, cross-platform iOS and Android compatibility, scalable backend infrastructure, and push notifications with user management.',
        tech: ['Flutter', 'Firebase', 'Google OAuth', 'Real-time Database', 'Cloud Storage', 'Material Design'],
        liveLink: 'https://your-flutter-demo.com',
        githubLink: 'https://github.com/yourusername/flutter-firebase-integration'
    },
    'face-detection': {
        title: 'AI Face Detection App',
        description: 'Transform your images with cutting-edge AI technology! This Python-powered face detection application uses advanced computer vision algorithms to automatically identify and highlight faces in real-time. Features real-time face detection with precise boundary marking, clean intuitive user interface for seamless experience, high-accuracy detection using OpenCV and machine learning, instant processing with visual feedback, scalable architecture for multiple face recognition, and cross-platform compatibility.',
        tech: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision', 'Real-time Processing'],
        liveLink: 'https://your-face-detection-demo.com',
        githubLink: 'https://github.com/yourusername/ai-face-detection'
    },
    'cpp-backend': {
        title: 'C++ Backend & Unit Testing',
        description: 'A C++-based backend project designed for food tracking and record management, complete with unit testing and build automation. Features modular codebase with .cc and .h files for leftover_record, leftover_report, and leftover_tracker. Clear separation of logic, backend, and main control with fully integrated Makefile for automated build and test operations. Usage of Google Test (GTest) framework for functional unit tests, backend integration test coverage, and accurate and reliable result validation.',
        tech: ['C++', 'Google Test', 'Makefile', 'Unit Testing', 'Modular Architecture'],
        liveLink: 'https://your-cpp-backend-demo.com',
        githubLink: 'https://github.com/yourusername/cpp-backend-testing'
    },
    'business-website': {
        title: 'Business Website with PDF Design Viewer',
        description: 'Developed a sleek and professional business website for a software service brand—"Ammar Advertiser"—focused on promoting digital services with a modern and user-friendly interface. Features clean multi-section layout including About, Services, Why Us, and Contact sections. Visually rich and responsive UI design with appealing dark-themed branding and engaging hero section with service highlights. Special functionality includes PDF Viewer Integration to let clients preview design proposals or wireframes directly on the website.',
        tech: ['HTML/CSS', 'JavaScript', 'PDF Integration', 'Responsive Design', 'Dark Theme'],
        liveLink: 'https://your-business-website-demo.com',
        githubLink: 'https://github.com/yourusername/business-website-pdf-viewer'
    },
    'network-sim': {
        title: 'Enterprise Network Simulation',
        description: 'A comprehensive simulation project that replicates a real-world enterprise IT infrastructure using Cisco Packet Tracer. Features multi-zone architecture including Home Network with wireless access via Access Point for laptops and smartphones, Office Network with wired PCs, shared printer, and secure work laptop, and Server Farm with centralized servers including DNS, DHCP, HTTP, FTP, and Email services. Complete enterprise-grade network topology with security protocols and redundancy.',
        tech: ['Cisco Packet Tracer', 'Network Design', 'Enterprise Architecture', 'Security Protocols'],
        liveLink: 'https://your-network-sim-demo.com',
        githubLink: 'https://github.com/yourusername/enterprise-network-simulation'
    },
    'url-shortener': {
        title: 'URL Shortener Web App',
        description: 'A simple URL Shortener web application built with Express.js, MongoDB, and ShortID. This application allows users to shorten URLs, validates the URL input, and provides functionality to copy the shortened URL to the clipboard. Features include URL shortening to make long URLs more manageable, MongoDB for storing and managing shortened URLs, ShortID for generating unique and short IDs, input validation to ensure provided URLs are valid, and copy to clipboard functionality for easy sharing.',
        tech: ['Express.js', 'MongoDB', 'ShortID', 'URL Validation', 'Clipboard API'],
        liveLink: 'https://your-url-shortener-demo.com',
        githubLink: 'https://github.com/yourusername/url-shortener'
    },
    'restaurant-mgmt': {
        title: 'Restaurant Management System',
        description: 'A comprehensive web application for restaurant management built with Express.js. Features include inventory management to manage stock of ingredients and track restocking needs, inventory tracking to monitor usage in real-time with minimum stock notifications, report generation with detailed analysis of operations, reservation management with table assignments and booking status, order processing with real-time status tracking, and Sequelize ORM for smooth database operations with CRUD functionality.',
        tech: ['Express.js', 'Sequelize', 'MySQL', 'Real-time Tracking', 'Report Generation'],
        liveLink: 'https://your-restaurant-mgmt-demo.com',
        githubLink: 'https://github.com/yourusername/restaurant-management'
    },
    'job-board': {
        title: 'Job Board Platform',
        description: 'A modern and feature-rich job board platform built using Express.js, designed to connect job seekers and employers seamlessly. Features secure authentication for both candidates and employers, job listings where employers can post openings and candidates can explore and apply, rich candidate profiles with personal information and skills, resume upload and management system, application tracking to monitor status with ease, unique ID generation using shortid for maintaining database integrity, and comprehensive admin panel for managing users, jobs, and applications.',
        tech: ['Express.js', 'Authentication', 'File Uploads', 'ShortID', 'Admin Panel'],
        liveLink: 'https://your-job-board-demo.com',
        githubLink: 'https://github.com/yourusername/job-board-platform'
    },
    'galaxian': {
        title: 'Galaxian Space Shooter Game',
        description: 'A retro-style space shooter game inspired by the classic Galaxian, built with SFML. Features welcome screen with game title and instructions, fast-paced arcade-style gameplay, player spaceship with controllable movement, multiple enemy types with different behaviors, scrolling space background for immersive experience, comprehensive score tracking system, and custom fonts and graphics for authentic retro feel. Complete game loop with collision detection and power-ups.',
        tech: ['C++', 'SFML', 'Game Development', 'Graphics Programming', 'Audio Integration'],
        liveLink: 'https://your-galaxian-demo.com',
        githubLink: 'https://github.com/yourusername/galaxian-game'
    }
};

// Enhanced expand/collapse functionality
document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const projectsGrid = document.getElementById(targetId);
        const icon = btn.querySelector('.expand-icon');

        if (projectsGrid.classList.contains('expanded')) {
            projectsGrid.classList.remove('expanded');
            btn.classList.remove('expanded');
            btn.querySelector('span:first-child').textContent = 'View Projects';
        } else {
            projectsGrid.classList.add('expanded');
            btn.classList.add('expanded');
            btn.querySelector('span:first-child').textContent = 'Hide Projects';
        }
    });
});

// Enhanced project modal functionality
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalTech = document.getElementById('modalTech');
const modalLiveLink = document.getElementById('modalLiveLink');
const modalGithubLink = document.getElementById('modalGithubLink');
const modalClose = document.querySelector('.modal-close');

// Add click listeners to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const project = projectData[projectId];

        if (project) {
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalLiveLink.href = project.liveLink;
            modalGithubLink.href = project.githubLink;

            // Clear and populate tech tags
            modalTech.innerHTML = '';
            project.tech.forEach(tech => {
                const techTag = document.createElement('span');
                techTag.className = 'tech-tag';
                techTag.textContent = tech;
                modalTech.appendChild(techTag);
            });

            // Show modal
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal functionality
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// Enhanced smooth scrolling
document.querySelectorAll('nav a, .btn-3d').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let target;
        if (this.classList.contains('btn-3d')) {
            target = document.querySelector('#projects');
        } else {
            target = document.querySelector(this.getAttribute('href'));
        }
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Enhanced scroll animations with intersection observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Enhanced 3D hover effects
document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
});

// Enhanced particle system
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = Math.random() * 4 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = `linear-gradient(45deg, #00d4ff, #ff006e, #7c3aed)`;
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';
    particle.style.opacity = '0.8';

    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 10;

    particle.style.left = startX + 'px';
    particle.style.top = startY + 'px';

    document.body.appendChild(particle);

    const animation = particle.animate([
        {
            transform: `translateY(0px) rotate(0deg) scale(1)`,
            opacity: 0.8
        },
        {
            transform: `translateY(-${window.innerHeight + 100}px) rotate(360deg) scale(0)`,
            opacity: 0
        }
    ], {
        duration: 4000 + Math.random() * 3000,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    });

    animation.onfinish = () => particle.remove();
}

// Create particles with varying intervals
setInterval(createParticle, 300);

// Additional floating elements
function createFloatingIcon() {
    const icons = ['💻', '🚀', '⚡', '🎨', '🔥', '✨', '🌟', '💫'];
    const icon = document.createElement('div');
    icon.textContent = icons[Math.floor(Math.random() * icons.length)];
    icon.style.position = 'fixed';
    icon.style.fontSize = '2rem';
    icon.style.pointerEvents = 'none';
    icon.style.zIndex = '1';
    icon.style.opacity = '0.3';

    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 50;

    icon.style.left = startX + 'px';
    icon.style.top = startY + 'px';

    document.body.appendChild(icon);

    const animation = icon.animate([
        {
            transform: `translateY(0px) rotate(0deg)`,
            opacity: 0.3
        },
        {
            transform: `translateY(-${window.innerHeight + 200}px) rotate(720deg)`,
            opacity: 0
        }
    ], {
        duration: 8000 + Math.random() * 4000,
        easing: 'linear'
    });

    animation.onfinish = () => icon.remove();
}

setInterval(createFloatingIcon, 2000);

// Enhanced navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});