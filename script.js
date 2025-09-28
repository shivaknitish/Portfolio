(function () {
	// Initialize particles background
	if (window.tsParticles) {
		tsParticles.load('tsparticles', {
			fpsLimit: 60,
			background: { color: { value: 'transparent' } },
			fullScreen: { enable: false },
			particles: {
				number: { 
					value: 50, 
					density: { 
						enable: true, 
						area: 800 
					} 
				},
				color: { 
					value: ['#6366f1', '#8b5cf6', '#22c55e', '#f59e0b'] 
				},
				links: { 
					enable: true, 
					color: '#334155', 
					distance: 150, 
					opacity: 0.3, 
					width: 1 
				},
				move: { 
					enable: true, 
					speed: 1.5, 
					outModes: { default: 'out' } 
				},
				opacity: { 
					value: 0.4 
				},
				size: { 
					value: { min: 1, max: 4 } 
				},
				shape: { 
					type: 'circle' 
				}
			},
			interactivity: {
				detectsOn: 'canvas',
				events: {
					onHover: {
						enable: true,
						mode: 'repulse'
					},
					onClick: {
						enable: true,
						mode: 'push'
					}
				}
			}
		});
	}

	// Mobile menu toggle functionality
	const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
	const navLinks = document.querySelector('.nav-links');

	if (mobileMenuToggle && navLinks) {
		mobileMenuToggle.addEventListener('click', () => {
			mobileMenuToggle.classList.toggle('active');
			navLinks.classList.toggle('active');
		});

		// Close mobile menu when clicking on a link
		navLinks.querySelectorAll('a').forEach(link => {
			link.addEventListener('click', () => {
				mobileMenuToggle.classList.remove('active');
				navLinks.classList.remove('active');
			});
		});

		// Close mobile menu when clicking outside
		document.addEventListener('click', (e) => {
			if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
				mobileMenuToggle.classList.remove('active');
				navLinks.classList.remove('active');
			}
		});
	}

	// Smooth scrolling for navigation links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	});

	// Add fade-in animation on scroll
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('fade-in-up');
			}
		});
	}, observerOptions);

	// Observe all sections
	document.querySelectorAll('.section').forEach(section => {
		observer.observe(section);
	});

	// About section fade-in animation
	const aboutObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const aboutText = entry.target.querySelector('.about-text');
				const profileImage = entry.target.querySelector('.profile-image');
				
				if (aboutText) {
					setTimeout(() => {
						aboutText.classList.add('animate');
					}, 100);
				}
				
				if (profileImage) {
					setTimeout(() => {
						profileImage.classList.add('animate');
					}, 300);
				}
			}
		});
	}, {
		threshold: 0.3,
		rootMargin: '0px 0px -50px 0px'
	});

	const aboutSection = document.querySelector('#about');
	if (aboutSection) {
		aboutObserver.observe(aboutSection);
	}

	// Skills section fade-in animation
	const skillsObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const skillCards = entry.target.querySelectorAll('.skill-card');
				skillCards.forEach((card, index) => {
					setTimeout(() => {
						card.classList.add('animate');
					}, index * 100);
				});
			}
		});
	}, {
		threshold: 0.3,
		rootMargin: '0px 0px -50px 0px'
	});

	const skillsSection = document.querySelector('#skills');
	if (skillsSection) {
		skillsObserver.observe(skillsSection);
	}

	// Experience section fade-in animation
	const experienceObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const experienceCards = entry.target.querySelectorAll('.experience-card');
				experienceCards.forEach((card, index) => {
					setTimeout(() => {
						card.classList.add('animate');
					}, index * 100);
				});
			}
		});
	}, {
		threshold: 0.3,
		rootMargin: '0px 0px -50px 0px'
	});

	const experienceSection = document.querySelector('#experience');
	if (experienceSection) {
		experienceObserver.observe(experienceSection);
	}

	// Navbar background on scroll
	window.addEventListener('scroll', () => {
		const navbar = document.querySelector('.navbar');
		if (window.scrollY > 50) {
			navbar.style.background = 'rgba(15, 23, 42, 0.95)';
		} else {
			navbar.style.background = 'rgba(15, 23, 42, 0.8)';
		}
	});
})();
