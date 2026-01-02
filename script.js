 // Image Gallery Functionality
      document.addEventListener('DOMContentLoaded', function() {
        console.log('Image gallery script loaded');
        
        const galleryModal = document.getElementById('image-gallery-modal');
        const closeGalleryBtn = document.getElementById('close-gallery');
        const galleryImage = document.getElementById('gallery-image');
        const galleryDescription = document.getElementById('gallery-description');
        const galleryLoading = document.getElementById('gallery-loading');
        
        // Get all work cards with image gallery data
        const workCards = document.querySelectorAll('.work-card[data-image-gallery]');
        
        console.log('Found work cards:', workCards.length);
        
        // Add click event to each work card
        workCards.forEach(card => {
          card.addEventListener('click', function(e) {
            // Don't trigger if clicking on a link inside the card
            if (e.target.tagName === 'A' || e.target.closest('a')) {
              return;
            }
            
            const imageSrc = this.getAttribute('data-image-gallery');
            const imageTitle = this.getAttribute('data-image-title');
            const imageDesc = this.getAttribute('data-image-description');
            
            console.log('Opening image:', imageSrc);
            
            // Show loading
            galleryLoading.classList.remove('hidden');
            galleryImage.classList.add('hidden');
            galleryDescription.textContent = '';
            
            // Set image source
            galleryImage.src = imageSrc;
            galleryImage.alt = imageTitle;
            
            // Show modal
            galleryModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            
            // Load image
            galleryImage.onload = function() {
              console.log('Image loaded successfully');
              galleryLoading.classList.add('hidden');
              galleryImage.classList.remove('hidden');
              
              // Set description
              if (imageDesc) {
                galleryDescription.textContent = imageDesc;
              }
            };
            
            galleryImage.onerror = function() {
              console.error('Failed to load image:', imageSrc);
              galleryLoading.classList.add('hidden');
              galleryImage.alt = 'Image failed to load';
              galleryImage.classList.remove('hidden');
              galleryDescription.textContent = 'Failed to load image. Please try again.';
            };
          });
        });
        
        // Close gallery function
        function closeGallery() {
          console.log('Closing gallery');
          galleryModal.classList.add('hidden');
          document.body.style.overflow = '';
          galleryImage.src = '';
          galleryImage.alt = '';
          galleryDescription.textContent = '';
        }
        
        // Close button
        closeGalleryBtn.addEventListener('click', closeGallery);
        
        // Close on overlay click
        galleryModal.addEventListener('click', function(e) {
          if (e.target === galleryModal) {
            closeGallery();
          }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape' && !galleryModal.classList.contains('hidden')) {
            closeGallery();
          }
        });
        
        console.log('Image gallery setup complete');
      });