export function first() {
    const icons = [
        'img/Angular.png',
        'img/Bootstrap.png',
        'img/C.png',
        'img/CodeIgniter.png',
        'img/csharp.png',
        'img/CSS3.png',
        'img/Go.png',
        'img/HTML5.png',
        'img/Java.png',
        'img/JavaScript.png',
        'img/jQuery.png',
        'img/Laravel.png',
        'img/Next.js.png',
        'img/Node.js.png',
        'img/Nuxt JS.png',
        'img/PHP.png',
        'img/Python.png',
        'img/React.png',
        'img/Rust.png',
        'img/Svelte.png',
        'img/Swift.png',
        'img/Tailwind CSS.png',
    ];

    const personImg = document.getElementById('personImg');
    const pict = document.getElementById('pict');

    let isAnimating = false;
    let animationTimeout = null;
    let activeIcons = 0;
    let draggedIcon = null;
    let offsetX = 0;
    let offsetY = 0;
    let canvas, ctx;
    let imageLoaded = false;

    // Create canvas to check pixel transparency
    function setupImageDetection() {
        canvas = document.createElement('canvas');
        ctx = canvas.getContext('2d', { willReadFrequently: true });

        personImg.onload = function () {
            canvas.width = personImg.naturalWidth;
            canvas.height = personImg.naturalHeight;
            ctx.drawImage(personImg, 0, 0);
            imageLoaded = true;
        };

        // If image already loaded
        if (personImg.complete) {
            canvas.width = personImg.naturalWidth;
            canvas.height = personImg.naturalHeight;
            ctx.drawImage(personImg, 0, 0);
            imageLoaded = true;
        }
    }

    function isPersonPixel(e) {
        if (!imageLoaded) return false;

        const rect = personImg.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Convert to natural image coordinates
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const imageX = Math.floor(x * scaleX);
        const imageY = Math.floor(y * scaleY);

        if (imageX < 0 || imageY < 0 || imageX >= canvas.width || imageY >= canvas.height) {
            return false;
        }

        const pixel = ctx.getImageData(imageX, imageY, 1, 1).data;
        return pixel[3] > 50; // Check if alpha > 50 (not transparent)
    }

    setupImageDetection();

    function createFallingIcon() {
        const randomImg = icons[Math.floor(Math.random() * icons.length)];
        const randomX = Math.random() * (pict.offsetWidth - 40);
        const randomDuration = 8 + Math.random() * 5; // Faster: 8-13 seconds instead of 15-25
        const randomRotationSpeed = 6 + Math.random() * 6;

        const icon = document.createElement('img');
        icon.src = randomImg;
        icon.alt = 'Tech icon';
        icon.className = 'falling-icon';
        icon.style.left = `${randomX}px`;
        icon.style.top = '-100px'; // Set initial top position
        icon.style.animation = `fallDown ${randomDuration}s linear forwards, img-tilt ${randomRotationSpeed}s linear infinite`;
        icon.dataset.duration = randomDuration; // Store duration for later use

        pict.appendChild(icon);
        activeIcons++;

        // Add drag functionality
        icon.addEventListener('mousedown', startDrag);

        // DON'T set any timeout here - let it be handled when released
    }

    function startDrag(e) {
        draggedIcon = e.target;

        // Get the current computed position of the icon
        const rect = draggedIcon.getBoundingClientRect();
        const containerRect = pict.getBoundingClientRect();

        // Store current position relative to container
        const currentLeft = rect.left - containerRect.left;
        const currentTop = rect.top - containerRect.top;

        // Stop the animation and fix position
        draggedIcon.classList.add('dragging');
        draggedIcon.style.left = `${currentLeft}px`;
        draggedIcon.style.top = `${currentTop}px`;

        // Calculate offset from mouse to icon edge
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);

        e.preventDefault();
        e.stopPropagation();
    }

    function drag(e) {
        if (!draggedIcon) return;

        const containerRect = pict.getBoundingClientRect();

        let newX = e.clientX - containerRect.left - offsetX;
        let newY = e.clientY - containerRect.top - offsetY;

        // Constrain to container boundaries while dragging
        newX = Math.max(0, Math.min(newX, containerRect.width - 40));
        newY = Math.max(0, Math.min(newY, containerRect.height - 40));

        draggedIcon.style.left = `${newX}px`;
        draggedIcon.style.top = `${newY}px`;
        draggedIcon.style.opacity = '0.8';
    }

    function stopDrag() {
        if (draggedIcon) {
            const containerRect = pict.getBoundingClientRect();
            const currentTop = parseFloat(draggedIcon.style.top);

            draggedIcon.classList.remove('dragging');

            // Calculate remaining distance to fall
            const remainingDistance = containerRect.height - currentTop;
            const newDuration = Math.max(2, (remainingDistance / containerRect.height) * 10);

            // Reset animation and apply transition for falling
            draggedIcon.style.animation = 'img-tilt 6s linear infinite';
            draggedIcon.style.transition = `top ${newDuration}s linear, opacity 0.3s`;
            draggedIcon.style.top = `${containerRect.height + 100}px`;
            draggedIcon.style.opacity = '0.8';

            // Remove icon after animation completes
            const iconToRemove = draggedIcon;
            setTimeout(() => {
                if (iconToRemove && iconToRemove.parentNode) {
                    iconToRemove.remove();
                    activeIcons--;
                }
            }, newDuration * 1000);

            draggedIcon = null;
        }
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDrag);
    }

    function startAnimation() {
        if (!isAnimating) return;

        createFallingIcon();

        const nextDelay = 400 + Math.random() * 600; // Faster spawning: 400-1000ms instead of 800-2000ms
        animationTimeout = setTimeout(startAnimation, nextDelay);
    }

    function stopAnimation() {
        isAnimating = false;
        if (animationTimeout) {
            clearTimeout(animationTimeout);
            animationTimeout = null;
        }
    }

    personImg.addEventListener('mousemove', (e) => {
        if (isPersonPixel(e)) {
            if (!isAnimating) {
                isAnimating = true;
                createFallingIcon();
                startAnimation();
            }
        } else {
            if (isAnimating) {
                stopAnimation();
            }
        }
    });

    personImg.addEventListener('mouseleave', () => {
        stopAnimation();
    });
}