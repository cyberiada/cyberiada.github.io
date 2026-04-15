/* ── Shared Zoom Modal (created once, reused) ── */
let zoomModal = null;
let zoomImg = null;
let activeCarousel = null;

function getZoomModal() {
    if (zoomModal) return zoomModal;

    zoomModal = document.createElement('div');
    zoomModal.className = 'zoom-modal';

    zoomImg = document.createElement('img');
    zoomImg.alt = 'Zoomed view';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'zoom-modal-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', closeZoom);

    zoomModal.appendChild(zoomImg);
    zoomModal.appendChild(closeBtn);
    document.body.appendChild(zoomModal);

    // Close on backdrop click (but not on the image itself)
    zoomModal.addEventListener('click', (e) => {
        if (e.target === zoomModal) closeZoom();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && zoomModal.classList.contains('active')) {
            closeZoom();
        }
    });

    return zoomModal;
}

function openZoom(src, carousel) {
    const modal = getZoomModal();
    zoomImg.src = src;
    activeCarousel = carousel;
    if (activeCarousel) activeCarousel.stopAutoPlay();
    // Force reflow so the transition triggers
    void modal.offsetWidth;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeZoom() {
    if (!zoomModal) return;
    zoomModal.classList.remove('active');
    document.body.style.overflow = '';
    if (activeCarousel) {
        activeCarousel.startAutoPlay();
        activeCarousel = null;
    }
}

/* ── Carousel Class ── */
class Carousel {
    constructor(container) {
        this.container = container;
        this.slidesContainer = container.querySelector('.slides');
        this.slides = container.querySelectorAll('.slides img');
        this.dots = container.querySelectorAll('.dot');
        this.leftArrow = container.querySelector('.arrow.left');
        this.rightArrow = container.querySelector('.arrow.right');

        this.totalSlides = this.slides.length;
        this.index = 0;
        this.autoPlayInterval = null;

        this.init();
    }

    init() {
        if (!this.slidesContainer || this.totalSlides === 0) return;

        // Arrow listeners
        if (this.leftArrow) {
            this.leftArrow.addEventListener('click', () => {
                this.stopAutoPlay();
                this.prevSlide();
                this.startAutoPlay();
            });
        }

        if (this.rightArrow) {
            this.rightArrow.addEventListener('click', () => {
                this.stopAutoPlay();
                this.nextSlide();
                this.startAutoPlay();
            });
        }

        // Dot listeners
        this.dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                this.stopAutoPlay();
                this.goToSlide(i);
                this.startAutoPlay();
            });
        });

        // Zoom-on-click for each slide image
        this.slides.forEach((img) => {
            img.addEventListener('click', () => {
                openZoom(img.src, this);
            });
        });

        // Initialize state
        this.goToSlide(0);
        this.startAutoPlay();
    }

    goToSlide(i) {
        this.index = (i + this.totalSlides) % this.totalSlides;
        this.slides.forEach((img, idx) => {
            img.classList.toggle('rslide-active', idx === this.index);
        });
        this.updateDots();
    }

    updateDots() {
        this.dots.forEach(dot => dot.classList.remove('active'));
        if (this.dots[this.index]) {
            this.dots[this.index].classList.add('active');
        }
    }

    nextSlide() {
        this.goToSlide(this.index + 1);
    }

    prevSlide() {
        this.goToSlide(this.index - 1);
    }

    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 3000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Auto-initialize all sliders on the page
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => new Carousel(slider));

    // Scroll to Top Button Logic
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Tabs Logic for Samples Section & Panel Sliders
    const tabContainers = document.querySelectorAll('.samples-container, .panel-slider');

    tabContainers.forEach(container => {
        const tabBtns = container.querySelectorAll('.tab-btn');
        const tabContents = container.querySelectorAll('.tab-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                btn.classList.add('active');

                const targetId = btn.getAttribute('data-target');
                const targetContent = document.getElementById(targetId) || container.querySelector(`#${targetId}`);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    });

    // Panel Image Zoom-on-click logic
    const panelImages = document.querySelectorAll('.panel-image');
    panelImages.forEach(img => {
        img.addEventListener('click', () => {
            openZoom(img.src, null);
        });
    });
});