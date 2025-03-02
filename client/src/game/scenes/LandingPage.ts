// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import bgClouds from "../../components/bgClouds";
/* END-USER-IMPORTS */

export default class LandingPage extends Phaser.Scene {

	constructor() {
		super("LandingPage");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// bgLayer
		const bgLayer = this.add.layer();
		bgLayer.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// playBtn
		const playBtn = this.add.image(960, 832, "Purple_Green_Pixel_Illustration_Game_Presentation-removebg-preview");
		playBtn.scaleX = 0.8596074937886975;
		playBtn.scaleY = 0.8596074937886975;

		// wildstrikeLogo
		const wildstrikeLogo = this.add.image(960, 480, "WildStrike-Logo-trans");
		wildstrikeLogo.scaleX = 0.41564372224194734;
		wildstrikeLogo.scaleY = 0.41564372224194734;

		this.playBtn = playBtn;

		this.events.emit("scene-awake");
	}

	private playBtn!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();

		this.cameras.main.fadeIn(180, 0, 0, 0);

			// Check if texture exists before creating clouds (defensive coding)
		if (this.textures.exists("2G_bgClouds_2")) {
			// Create background clouds that move
			// First cloud in the back
			const movingClouds1 = new bgClouds(this, 500, 300);
			this.add.existing(movingClouds1);

			// Second cloud a bit lower
			const movingClouds2 = new bgClouds(this, 1200, 450);
			this.add.existing(movingClouds2);
			movingClouds2.speed = 30; // Slower speed for parallax effect

			// Third cloud
			const movingClouds3 = new bgClouds(this, 900, 200);
			this.add.existing(movingClouds3);
			movingClouds3.speed = 40;
		} else {
			console.warn("Cloud texture '2G_bgClouds_2' not found. Clouds will not be displayed.");
		}

		// Make sure the bgCloudsONE is not moving (it's the original cloud image)
		// It will stay in place while the new clouds move

		const playBtn = this.playBtn; 
		playBtn.setInteractive({ cursor: 'pointer' });
        
        // Create a continuous pulsing/floating animation for the play button
        // to draw attention to it
        this.createPlayButtonIdleAnimation(playBtn);
        
        // Handle button interactions
		playBtn.on("pointerdown", () => {
            // Stop the idle animation
            this.tweens.killTweensOf(playBtn);
            
            // Play an explosive click effect
            this.createClickEffect(playBtn, () => {
                // Fade out camera
                this.cameras.main.fadeOut(180, 0, 0, 0);
                this.cameras.main.once('camerafadeoutcomplete', () => {
                    this.scene.start("MainMenu");
                });
            });
		});

		playBtn.on("pointerover", () => {
            // Stop the idle animation
            this.tweens.killTweensOf(playBtn);
            
            // Play enhanced hover animation
            this.tweens.add({
                targets: playBtn,
                scaleX: playBtn.scaleX * 1.15,
                scaleY: playBtn.scaleY * 1.15,
                rotation: 0.05, // slight rotation
                duration: 300,
                ease: 'Sine.easeOut',
                onComplete: () => {
                    // Add a subtle wiggle effect
                    this.tweens.add({
                        targets: playBtn,
                        rotation: -0.05,
                        duration: 600,
                        yoyo: true,
                        repeat: -1,
                        ease: 'Sine.easeInOut'
                    });
                }
            });
            
            // Add a shimmering effect with tint
            this.createShimmerEffect(playBtn);
		});

		playBtn.on("pointerout", () => {
            // Clear all tweens and effects
            this.tweens.killTweensOf(playBtn);
            playBtn.clearTint();
            playBtn.rotation = 0;
            
            // Smooth transition back to normal size
            this.tweens.add({
                targets: playBtn,
                scaleX: 0.86, // Original scale
                scaleY: 0.86, // Original scale
                rotation: 0,
                duration: 300,
                ease: 'Sine.easeOut',
                onComplete: () => {
                    // Restart the idle animation
                    this.createPlayButtonIdleAnimation(playBtn);
                }
            });
		});
	}
    
    // Creates a subtle floating/pulsing idle animation
    createPlayButtonIdleAnimation(button: Phaser.GameObjects.Image) {
        // Store the original position
        const originalY = button.y;
        
        // Create a subtle floating effect
        this.tweens.add({
            targets: button,
            y: originalY - 15, // Float up and down by 15px
            duration: 1800,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });
        
        // Add a subtle pulsing effect
        this.tweens.add({
            targets: button,
            scaleX: button.scaleX * 1.05,
            scaleY: button.scaleY * 1.05,
            duration: 1200,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut',
            delay: 400 // Offset from the float animation for more organic movement
        });
        
        // Add a subtle glow effect by periodically changing alpha
        this.tweens.add({
            targets: button,
            alpha: 0.8,
            duration: 2000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut',
            delay: 600 // Further offset
        });
    }
    
    // Creates a shimmering effect using tint transitions
    createShimmerEffect(button: Phaser.GameObjects.Image) {
        // Array of highlight colors to cycle through
        const colors = [0xffff66, 0xffffff, 0xffe066, 0xffffcc];
        let colorIndex = 0;
        
        // Create a timer to cycle colors
        this.time.addEvent({
            delay: 150,
            callback: () => {
                if (!button.active) return; // Safety check
                button.setTint(colors[colorIndex]);
                colorIndex = (colorIndex + 1) % colors.length;
            },
            repeat: 10,
            callbackScope: this
        });
    }
    
    // Creates an explosive click effect
    createClickEffect(button: Phaser.GameObjects.Image, callback: Function) {
        // First, quick shrink effect
        this.tweens.add({
            targets: button,
            scale: '*=0.85',
            duration: 100,
            ease: 'Bounce.easeIn',
            onComplete: () => {
                // Then, explosive expansion
                this.tweens.add({
                    targets: button,
                    scale: '*=1.8',
                    alpha: 0,
                    duration: 400,
                    ease: 'Back.easeOut',
                    onComplete: () => {
                        // Create particles for an explosive effect
                        if (this.particles) {
                            const particles = this.add.particles(button.x, button.y, 'particle', {
                                speed: { min: 300, max: 500 },
                                scale: { start: 0.6, end: 0 },
                                lifespan: 800,
                                blendMode: 'ADD',
                                emitting: false
                            });
                            
                            particles.explode(30);
                            
                            // Clean up particles after they're done
                            this.time.delayedCall(800, () => {
                                particles.destroy();
                                if (callback) callback();
                            });
                        } else {
                            // If particles aren't available, just call the callback
                            if (callback) callback();
                        }
                    }
                });
            }
        });
    }

    update() {

    }

    changeScene ()
    {
        // this.scene.start("MainMenu"); 
        this.scene.start("GM_SelectTeam"); 
    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here