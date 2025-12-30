// Image Gallery Functionality - Single Modal System
document.addEventListener('DOMContentLoaded', function() {
    console.log('Gallery script loaded');
    
    // Remove any existing duplicate modals
    const existingModals = document.querySelectorAll('.image-gallery-modal, #project-modal');
    existingModals.forEach(modal => {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    });
    
    // Create ONE image gallery modal
    const galleryModal = document.createElement('div');
    galleryModal.className = 'image-gallery-modal';
    galleryModal.innerHTML = `
        <div class="image-gallery-content">
            <button class="close-gallery" aria-label="Close gallery">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div class="image-container">
                <img class="enlarged-image" src="" alt="">
                <div class="image-loading">Loading...</div>
            </div>
            <div class="image-description"></div>
        </div>
    `;
    document.body.appendChild(galleryModal);

    console.log('Single gallery modal created');

    // Get elements
    const closeGalleryBtn = galleryModal.querySelector('.close-gallery');
    const enlargedImage = galleryModal.querySelector('.enlarged-image');
    const imageDescription = galleryModal.querySelector('.image-description');
    const imageContainer = galleryModal.querySelector('.image-container');
    const loadingElement = galleryModal.querySelector('.image-loading');

    // Track if modal is open
    let isModalOpen = false;

    // Function to open image gallery
    function openImageGallery(imageSrc, altText, description) {
        if (isModalOpen) return;
        
        console.log('Opening gallery with image:', imageSrc);
        
        // Show loading
        loadingElement.style.display = 'block';
        enlargedImage.style.opacity = '0';
        
        // Set image source
        enlargedImage.src = imageSrc;
        enlargedImage.alt = altText || 'Project screenshot';
        
        // Set description
        imageDescription.textContent = description || altText || '';
        
        // Show modal
        galleryModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        isModalOpen = true;
        
        // Remove loading when image loads
        enlargedImage.onload = function() {
            console.log('Image loaded successfully');
            loadingElement.style.display = 'none';
            enlargedImage.style.opacity = '1';
        };
        
        // Handle image error
        enlargedImage.onerror = function() {
            console.error('Failed to load image:', imageSrc);
            loadingElement.style.display = 'none';
            enlargedImage.alt = 'Image failed to load';
            enlargedImage.style.opacity = '1';
            imageDescription.textContent = 'Image failed to load. Please try again.';
        };
    }

    // Function to close image gallery
    function closeImageGallery() {
        if (!isModalOpen) return;
        
        console.log('Closing gallery');
        galleryModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        isModalOpen = false;
        
        // Clear the image source after animation
        setTimeout(() => {
            enlargedImage.src = '';
            enlargedImage.alt = '';
            imageDescription.textContent = '';
        }, 300);
    }

    // Add click event to ALL work cards using event delegation
    document.addEventListener('click', function(e) {
        // Check if click is on a gallery trigger or its image
        let trigger = e.target.closest('[data-gallery-trigger]');
        
        // If clicked directly on image inside trigger
        if (!trigger && e.target.tagName === 'IMG') {
            trigger = e.target.closest('[data-gallery-trigger]');
        }
        
        if (trigger) {
            e.preventDefault();
            e.stopPropagation();
            
            const img = trigger.querySelector('img');
            if (img) {
                const imageSrc = img.getAttribute('data-full-image') || img.src;
                const altText = img.alt;
                const description = img.getAttribute('data-description') || altText;
                
                console.log('Opening image:', imageSrc);
                openImageGallery(imageSrc, altText, description);
            }
        }
    });

    // Close gallery on button click
    closeGalleryBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeImageGallery();
    });

    // Close gallery on overlay click (click outside content)
    galleryModal.addEventListener('click', function(e) {
        if (e.target === galleryModal) {
            closeImageGallery();
        }
    });

    // Prevent clicks inside content from closing
    const galleryContent = galleryModal.querySelector('.image-gallery-content');
    if (galleryContent) {
        galleryContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Close gallery on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isModalOpen) {
            closeImageGallery();
        }
    });

    console.log('Gallery setup complete - Single modal system');
});