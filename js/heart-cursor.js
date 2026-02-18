/**
 * Heart Cursor VFX
 * Creates a radial heart effect around the mouse cursor using HTML5 Canvas.
 * Customized for Cute Beam & Explosion page.
 */

(function () {
    // Create Canvas Element
    const canvas = document.createElement('canvas');
    canvas.id = 'heart-vfx-canvas';
    Object.assign(canvas.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: '9999',
        // No mixBlendMode or specific one? 'screen' might be good for glowing hearts.
        // Or 'normal' for solid pink. Let's try 'screen' for a bit of glow against dark bg.
        mixBlendMode: 'screen' 
    });
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width, height;
    let mouse = { x: 0, y: 0, moved: false };
    let hearts = [];

    // Resize Handler
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // Mouse Handler
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.moved = true;
    });

    // Heart Particle Class
    class Heart {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.age = 0;
            this.life = Math.random() * 30 + 20; // Frames to live
            this.size = Math.random() * 8 + 4;   // Size
            
            // Radial velocity
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 2 + 0.5;
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;

            // Pink colors
            // #FF69B4 (HotPink), #FF1493 (DeepPink), #FFB6C1 (LightPink)
            // Accent gradient is roughly #bf00ff (purple) to #00f0ff (cyan)
            // User requested "Pink like in the video".
            const colors = ['#FF69B4', '#FF1493', '#FFB6C1', '#F06292'];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        draw(ctx) {
            const alpha = 1 - (this.age / this.life);
            ctx.globalAlpha = alpha;
            ctx.fillStyle = this.color;
            
            // Draw Heart
            // Reset transform is handled by save/restore in main loop presumably? No, let's do it here.
            ctx.save();
            ctx.translate(this.x, this.y);
            
            ctx.beginPath();
            // Scaling
            const s = this.size / 10; 
            ctx.scale(s, s);
            
            // Heart shape path
            // M 0 -5 C -5 -10 -10 -5 0 5 C 10 -5 5 -10 0 -5
            // Better path:
            // Top bezier curves
            ctx.moveTo(0, -3);
            ctx.bezierCurveTo(-5, -8, -10, 0, 0, 10);
            ctx.bezierCurveTo(10, 0, 5, -8, 0, -3);

            ctx.fill();
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color; // Glow
            ctx.restore();

            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.age++;
        }

        isDead() {
            return this.age >= this.life;
        }
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Spawn logic
        // Only spawn if mouse moved? Or continuously?
        // User: "カーソルのホバー中" (while hovering/moving).
        // "視認性を悪化させないように数は多く出しすぎない" -> Low spawn rate.
        
        if (mouse.moved) {
            // Spawn limited number
            if (Math.random() < 0.3) { // 30% chance per frame while moving
                hearts.push(new Heart(mouse.x, mouse.y));
            }
        }
        
        mouse.moved = false; // Reset move flag (requires continuous movement to keep spawning)
        // If we want it to spawn for a few frames after stop, we could use a timer, but this is simple.

        // Update and draw
        for (let i = hearts.length - 1; i >= 0; i--) {
            hearts[i].update();
            hearts[i].draw(ctx);
            if (hearts[i].isDead()) {
                hearts.splice(i, 1);
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
})();
