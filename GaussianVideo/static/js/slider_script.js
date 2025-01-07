document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('videoComparison1');
    const slider = document.getElementById('slider1');
    const videoLeftWrapper = document.getElementById('videoLeftWrapper1');
    const leftVideo = document.getElementById('leftVideo1');
    const rightVideo = document.getElementById('rightVideo1');

    function setVideoPosition(x) {
        const containerWidth = container.offsetWidth;
        const percentage = (x / containerWidth) * 100;
        
        videoLeftWrapper.style.width = `${percentage}%`;
        slider.style.left = `${percentage}%`;
    }

    function handleMove(e) {
        const containerRect = container.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        
        // Constrain movement within container
        const constrainedX = Math.max(0, Math.min(x, containerRect.width));
        
        setVideoPosition(constrainedX);
    }

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMove);
        });
    });

    container.addEventListener('mousemove', handleMove);

    // Ensure both videos play/pause together
    leftVideo.addEventListener('play', () => {
        rightVideo.play();
    });
    leftVideo.addEventListener('pause', () => {
        rightVideo.pause();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('videoComparison2');
    const slider = document.getElementById('slider2');
    const videoLeftWrapper = document.getElementById('videoLeftWrapper2');
    const leftVideo = document.getElementById('leftVideo2');
    const rightVideo = document.getElementById('rightVideo2');

    function setVideoPosition(x) {
        const containerWidth = container.offsetWidth;
        const percentage = (x / containerWidth) * 100;
        
        videoLeftWrapper.style.width = `${percentage}%`;
        slider.style.left = `${percentage}%`;
    }

    function handleMove(e) {
        const containerRect = container.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        
        // Constrain movement within container
        const constrainedX = Math.max(0, Math.min(x, containerRect.width));
        
        setVideoPosition(constrainedX);
    }

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMove);
        });
    });

    container.addEventListener('mousemove', handleMove);

    // Ensure both videos play/pause together
    leftVideo.addEventListener('play', () => {
        rightVideo.play();
    });
    leftVideo.addEventListener('pause', () => {
        rightVideo.pause();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('videoComparison3');
    const slider = document.getElementById('slider3');
    const videoLeftWrapper = document.getElementById('videoLeftWrapper3');
    const leftVideo = document.getElementById('leftVideo3');
    const rightVideo = document.getElementById('rightVideo3');

    function setVideoPosition(x) {
        const containerWidth = container.offsetWidth;
        const percentage = (x / containerWidth) * 100;
        
        videoLeftWrapper.style.width = `${percentage}%`;
        slider.style.left = `${percentage}%`;
    }

    function handleMove(e) {
        const containerRect = container.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        
        // Constrain movement within container
        const constrainedX = Math.max(0, Math.min(x, containerRect.width));
        
        setVideoPosition(constrainedX);
    }

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMove);
        });
    });

    container.addEventListener('mousemove', handleMove);

    // Ensure both videos play/pause together
    leftVideo.addEventListener('play', () => {
        rightVideo.play();
    });
    leftVideo.addEventListener('pause', () => {
        rightVideo.pause();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('videoComparison4');
    const slider = document.getElementById('slider4');
    const videoLeftWrapper = document.getElementById('videoLeftWrapper4');
    const leftVideo = document.getElementById('leftVideo4');
    const rightVideo = document.getElementById('rightVideo4');

    function setVideoPosition(x) {
        const containerWidth = container.offsetWidth;
        const percentage = (x / containerWidth) * 100;
        
        videoLeftWrapper.style.width = `${percentage}%`;
        slider.style.left = `${percentage}%`;
    }

    function handleMove(e) {
        const containerRect = container.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        
        // Constrain movement within container
        const constrainedX = Math.max(0, Math.min(x, containerRect.width));
        
        setVideoPosition(constrainedX);
    }

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMove);
        });
    });

    container.addEventListener('mousemove', handleMove);

    // Ensure both videos play/pause together
    leftVideo.addEventListener('play', () => {
        rightVideo.play();
    });
    leftVideo.addEventListener('pause', () => {
        rightVideo.pause();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('videoComparison5');
    const slider = document.getElementById('slider5');
    const videoLeftWrapper = document.getElementById('videoLeftWrapper5');
    const leftVideo = document.getElementById('leftVideo5');
    const rightVideo = document.getElementById('rightVideo5');

    function setVideoPosition(x) {
        const containerWidth = container.offsetWidth;
        const percentage = (x / containerWidth) * 100;
        
        videoLeftWrapper.style.width = `${percentage}%`;
        slider.style.left = `${percentage}%`;
    }

    function handleMove(e) {
        const containerRect = container.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        
        // Constrain movement within container
        const constrainedX = Math.max(0, Math.min(x, containerRect.width));
        
        setVideoPosition(constrainedX);
    }

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMove);
        });
    });

    container.addEventListener('mousemove', handleMove);

    // Ensure both videos play/pause together
    leftVideo.addEventListener('play', () => {
        rightVideo.play();
    });
    leftVideo.addEventListener('pause', () => {
        rightVideo.pause();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('videoComparison6');
    const slider = document.getElementById('slider6');
    const videoLeftWrapper = document.getElementById('videoLeftWrapper6');
    const leftVideo = document.getElementById('leftVideo6');
    const rightVideo = document.getElementById('rightVideo6');

    function setVideoPosition(x) {
        const containerWidth = container.offsetWidth;
        const percentage = (x / containerWidth) * 100;
        
        videoLeftWrapper.style.width = `${percentage}%`;
        slider.style.left = `${percentage}%`;
    }

    function handleMove(e) {
        const containerRect = container.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        
        // Constrain movement within container
        const constrainedX = Math.max(0, Math.min(x, containerRect.width));
        
        setVideoPosition(constrainedX);
    }

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMove);
        });
    });

    container.addEventListener('mousemove', handleMove);

    // Ensure both videos play/pause together
    leftVideo.addEventListener('play', () => {
        rightVideo.play();
    });
    leftVideo.addEventListener('pause', () => {
        rightVideo.pause();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('videoComparison7');
    const slider = document.getElementById('slider7');
    const videoLeftWrapper = document.getElementById('videoLeftWrapper7');
    const leftVideo = document.getElementById('leftVideo7');
    const rightVideo = document.getElementById('rightVideo7');

    function setVideoPosition(x) {
        const containerWidth = container.offsetWidth;
        const percentage = (x / containerWidth) * 100;
        
        videoLeftWrapper.style.width = `${percentage}%`;
        slider.style.left = `${percentage}%`;
    }

    function handleMove(e) {
        const containerRect = container.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        
        // Constrain movement within container
        const constrainedX = Math.max(0, Math.min(x, containerRect.width));
        
        setVideoPosition(constrainedX);
    }

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMove);
        });
    });

    container.addEventListener('mousemove', handleMove);

    // Ensure both videos play/pause together
    leftVideo.addEventListener('play', () => {
        rightVideo.play();
    });
    leftVideo.addEventListener('pause', () => {
        rightVideo.pause();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('videoComparison8');
    const slider = document.getElementById('slider8');
    const videoLeftWrapper = document.getElementById('videoLeftWrapper8');
    const leftVideo = document.getElementById('leftVideo8');
    const rightVideo = document.getElementById('rightVideo8');

    function setVideoPosition(x) {
        const containerWidth = container.offsetWidth;
        const percentage = (x / containerWidth) * 100;
        
        videoLeftWrapper.style.width = `${percentage}%`;
        slider.style.left = `${percentage}%`;
    }

    function handleMove(e) {
        const containerRect = container.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        
        // Constrain movement within container
        const constrainedX = Math.max(0, Math.min(x, containerRect.width));
        
        setVideoPosition(constrainedX);
    }

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMove);
        });
    });

    container.addEventListener('mousemove', handleMove);

    // Ensure both videos play/pause together
    leftVideo.addEventListener('play', () => {
        rightVideo.play();
    });
    leftVideo.addEventListener('pause', () => {
        rightVideo.pause();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('videoComparison9');
    const slider = document.getElementById('slider9');
    const videoLeftWrapper = document.getElementById('videoLeftWrapper9');
    const leftVideo = document.getElementById('leftVideo9');
    const rightVideo = document.getElementById('rightVideo9');

    function setVideoPosition(x) {
        const containerWidth = container.offsetWidth;
        const percentage = (x / containerWidth) * 100;
        
        videoLeftWrapper.style.width = `${percentage}%`;
        slider.style.left = `${percentage}%`;
    }

    function handleMove(e) {
        const containerRect = container.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        
        // Constrain movement within container
        const constrainedX = Math.max(0, Math.min(x, containerRect.width));
        
        setVideoPosition(constrainedX);
    }

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMove);
        });
    });

    container.addEventListener('mousemove', handleMove);

    // Ensure both videos play/pause together
    leftVideo.addEventListener('play', () => {
        rightVideo.play();
    });
    leftVideo.addEventListener('pause', () => {
        rightVideo.pause();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('videoComparison10');
    const slider = document.getElementById('slider10');
    const videoLeftWrapper = document.getElementById('videoLeftWrapper10');
    const leftVideo = document.getElementById('leftVideo10');
    const rightVideo = document.getElementById('rightVideo10');

    function setVideoPosition(x) {
        const containerWidth = container.offsetWidth;
        const percentage = (x / containerWidth) * 100;
        
        videoLeftWrapper.style.width = `${percentage}%`;
        slider.style.left = `${percentage}%`;
    }

    function handleMove(e) {
        const containerRect = container.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        
        // Constrain movement within container
        const constrainedX = Math.max(0, Math.min(x, containerRect.width));
        
        setVideoPosition(constrainedX);
    }

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMove);
        });
    });

    container.addEventListener('mousemove', handleMove);

    // Ensure both videos play/pause together
    leftVideo.addEventListener('play', () => {
        rightVideo.play();
    });
    leftVideo.addEventListener('pause', () => {
        rightVideo.pause();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('videoComparison11');
    const slider = document.getElementById('slider11');
    const videoLeftWrapper = document.getElementById('videoLeftWrapper11');
    const leftVideo = document.getElementById('leftVideo11');
    const rightVideo = document.getElementById('rightVideo11');

    function setVideoPosition(x) {
        const containerWidth = container.offsetWidth;
        const percentage = (x / containerWidth) * 100;
        
        videoLeftWrapper.style.width = `${percentage}%`;
        slider.style.left = `${percentage}%`;
    }

    function handleMove(e) {
        const containerRect = container.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        
        // Constrain movement within container
        const constrainedX = Math.max(0, Math.min(x, containerRect.width));
        
        setVideoPosition(constrainedX);
    }

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMove);
        });
    });

    container.addEventListener('mousemove', handleMove);

    // Ensure both videos play/pause together
    leftVideo.addEventListener('play', () => {
        rightVideo.play();
    });
    leftVideo.addEventListener('pause', () => {
        rightVideo.pause();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('videoComparison12');
    const slider = document.getElementById('slider12');
    const videoLeftWrapper = document.getElementById('videoLeftWrapper12');
    const leftVideo = document.getElementById('leftVideo12');
    const rightVideo = document.getElementById('rightVideo12');

    function setVideoPosition(x) {
        const containerWidth = container.offsetWidth;
        const percentage = (x / containerWidth) * 100;
        
        videoLeftWrapper.style.width = `${percentage}%`;
        slider.style.left = `${percentage}%`;
    }

    function handleMove(e) {
        const containerRect = container.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        
        // Constrain movement within container
        const constrainedX = Math.max(0, Math.min(x, containerRect.width));
        
        setVideoPosition(constrainedX);
    }

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMove);
        });
    });

    container.addEventListener('mousemove', handleMove);

    // Ensure both videos play/pause together
    leftVideo.addEventListener('play', () => {
        rightVideo.play();
    });
    leftVideo.addEventListener('pause', () => {
        rightVideo.pause();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('videoComparison13');
    const slider = document.getElementById('slider13');
    const videoLeftWrapper = document.getElementById('videoLeftWrapper13');
    const leftVideo = document.getElementById('leftVideo13');
    const rightVideo = document.getElementById('rightVideo13');

    function setVideoPosition(x) {
        const containerWidth = container.offsetWidth;
        const percentage = (x / containerWidth) * 100;
        
        videoLeftWrapper.style.width = `${percentage}%`;
        slider.style.left = `${percentage}%`;
    }

    function handleMove(e) {
        const containerRect = container.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        
        // Constrain movement within container
        const constrainedX = Math.max(0, Math.min(x, containerRect.width));
        
        setVideoPosition(constrainedX);
    }

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMove);
        });
    });

    container.addEventListener('mousemove', handleMove);

    // Ensure both videos play/pause together
    leftVideo.addEventListener('play', () => {
        rightVideo.play();
    });
    leftVideo.addEventListener('pause', () => {
        rightVideo.pause();
    });
});