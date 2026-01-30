/**
 * Electric Cursor VFX
 * Creates a lightning effect around the mouse cursor using HTML5 Canvas.
 */

(function () {
    // Create Canvas Element
    const canvas = document.createElement('canvas');
    canvas.id = 'electric-vfx-canvas';
    Object.assign(canvas.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: '9999',
        mixBlendMode: 'screen' // Lightens the background
    });
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width, height;
    let mouse = { x: 0, y: 0, moved: false };
    let bolts = [];

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

    // Lightning Bolt Class
    class Bolt {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.age = 0;
            this.life = Math.random() * 10 + 5; // Frames to live
            this.segments = [];
            this.color = Math.random() > 0.5 ? '#00f0ff' : '#bc13fe'; // Cyan or Purple
            if (Math.random() > 0.8) this.color = '#ffffff'; // Occasional white

            this.generate();
        }

        generate() {
            let currX = this.x;
            let currY = this.y;
            // Number of segments in the bolt
            const count = Math.floor(Math.random() * 5) + 3;

            for (let i = 0; i < count; i++) {
                // Random direction/length
                const angle = Math.random() * Math.PI * 2;
                const length = Math.random() * 30 + 10;

                const nextX = currX + Math.cos(angle) * length;
                const nextY = currY + Math.sin(angle) * length;

                this.segments.push({
                    x1: currX, y1: currY,
                    x2: nextX, y2: nextY
                });

                currX = nextX;
                currY = nextY;

                // Chance to branch? Maybe later.
            }
        }

        draw(ctx) {
            const alpha = 1 - (this.age / this.life);
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.globalAlpha = alpha;
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;

            for (let seg of this.segments) {
                ctx.moveTo(seg.x1, seg.y1);
                ctx.lineTo(seg.x2, seg.y2);
            }
            ctx.stroke();

            // Reset context
            ctx.shadowBlur = 0;
            ctx.globalAlpha = 1;
        }

        update() {
            this.age++;
            // Jitter effect: slightly move segments? 
            // For now, static shape, fading out.
        }

        isDead() {
            return this.age >= this.life;
        }
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Determine if we should spawn a bolt
        // If mouse moved recently, spawn more freq
        // Even if static, spawn occasionally (idle electricity)
        const spawnChance = mouse.moved ? 0.8 : 0.1;

        if (Math.random() < spawnChance) {
            // Spawn around mouse with slight offset
            const offsetX = (Math.random() - 0.5) * 20;
            const offsetY = (Math.random() - 0.5) * 20;
            bolts.push(new Bolt(mouse.x + offsetX, mouse.y + offsetY));
        }

        mouse.moved = false; // Reset move flag

        // Update and draw bolts
        for (let i = bolts.length - 1; i >= 0; i--) {
            bolts[i].update();
            bolts[i].draw(ctx);
            if (bolts[i].isDead()) {
                bolts.splice(i, 1);
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
})();
