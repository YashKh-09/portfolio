document.addEventListener('DOMContentLoaded', function() {
        // Fix for any missing favicon
        if (!document.querySelector('link[rel="icon"]')) {
          const favicon = document.createElement('link');
          favicon.rel = 'icon';
          favicon.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👤</text></svg>';
          document.head.appendChild(favicon);
        }

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              const navHeight = document.querySelector('nav').offsetHeight;
              const targetPosition = targetElement.offsetTop - navHeight;
              
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
              });
            }
          });
        });

        // Timeline scroll animation
        const sections = ['hero', 'projects', 'about', 'contact'];
        const timelineDots = document.querySelectorAll('.timeline-dot');
        const timelineLines = document.querySelectorAll('.timeline-line');
        
        function updateTimeline() {
          const scrollPosition = window.scrollY + 100;
          
          // Reset all dots to empty
          timelineDots.forEach(dot => {
            dot.classList.remove('filled');
            dot.classList.add('empty');
          });
          
          // Reset all lines
          timelineLines.forEach(line => {
            line.classList.remove('active');
          });
          
          // Check which section is currently in view
          let activeSectionIndex = -1;
          
          sections.forEach((sectionId, index) => {
            const section = document.getElementById(sectionId);
            if (section) {
              const sectionTop = section.offsetTop;
              const sectionBottom = sectionTop + section.offsetHeight;
              
              if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = index;
              }
            }
          });
          
          // Fill dots and lines up to active section
          for (let i = 0; i <= activeSectionIndex; i++) {
            if (timelineDots[i]) {
              timelineDots[i].classList.remove('empty');
              timelineDots[i].classList.add('filled');
            }
            
            // Fill the line above the dot (except for first dot)
            if (i > 0 && timelineLines[i - 1]) {
              timelineLines[i - 1].classList.add('active');
            }
          }
          
          // If no section is active (at the very top), show first dot filled
          if (activeSectionIndex === -1 && timelineDots[0]) {
            timelineDots[0].classList.remove('empty');
            timelineDots[0].classList.add('filled');
          }
        }
        
        // Initial update
        updateTimeline();
        
        // Update on scroll
        window.addEventListener('scroll', updateTimeline);
        
        // Update on resize (in case layout changes)
        window.addEventListener('resize', updateTimeline);
      });