// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { SOCKET } from "@/socket";
import { handlePlayerMovement } from "../../utils/playerMovement";
import { StaminaManager } from "../../utils/staminaManager";
import { io, Socket } from "socket.io-client";
/* END-USER-IMPORTS */

interface PlayerState {
    x: number;
    y: number;
    health: number;
    flipX: boolean;
    velocityX: number;
    velocityY: number;
    sprite: Phaser.Physics.Arcade.Sprite;
}

export default class M_Game extends Phaser.Scene {
    constructor() {
        super("M_Game");

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    // Add socket and multiplayer properties
    socket!: Socket;
    playerId?: string;
    otherPlayers: { [id: string]: Phaser.Physics.Arcade.Sprite } = {};

    myPlayer: PlayerState;
    otherPlayer: PlayerState;

    // Establish connection in preload
    preload() {
        // Connect to the socket server - adjust URL for your environment
        this.socket = SOCKET;
        this.socket.connect();

        // Log connection status
        // this.socket.on("connect", () => {
        // 	console.log("Connected to server with ID:", this.socket.id);
        // 	this.playerId = this.socket.id;
        // });
    }

    editorCreate(): void {
        // bgIMAGE
        const bgIMAGE = this.add.image(960, 528, "2M_mapBG");
        bgIMAGE.scaleX = 1.0264943761149121;
        bgIMAGE.scaleY = 1.0264943761149121;
        bgIMAGE.alpha = 0.3;
        bgIMAGE.alphaTopLeft = 0.3;
        bgIMAGE.alphaTopRight = 0.3;
        bgIMAGE.alphaBottomLeft = 0.3;
        bgIMAGE.alphaBottomRight = 0.3;

        // tilesprite_1
        const tilesprite_1 = this.add.tileSprite(
            32,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_1.scaleX = 1.3;
        tilesprite_1.scaleY = 1.3;
        this.physics.add.existing(tilesprite_1, true);
        tilesprite_1.body.moves = false;
        tilesprite_1.body.allowGravity = false;
        tilesprite_1.body.allowDrag = false;
        tilesprite_1.body.allowRotation = false;
        tilesprite_1.body.pushable = false;
        tilesprite_1.body.immovable = true;
        tilesprite_1.body.setSize(84, 84, false);

        // tilesprite
        const tilesprite = this.add.tileSprite(
            112,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite.scaleX = 1.3;
        tilesprite.scaleY = 1.3;
        this.physics.add.existing(tilesprite, true);
        tilesprite.body.moves = false;
        tilesprite.body.allowGravity = false;
        tilesprite.body.allowDrag = false;
        tilesprite.body.allowRotation = false;
        tilesprite.body.pushable = false;
        tilesprite.body.immovable = true;
        tilesprite.body.setSize(84, 84, false);

        // tilesprite_2
        const tilesprite_2 = this.add.tileSprite(
            192,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_2.scaleX = 1.3;
        tilesprite_2.scaleY = 1.3;
        this.physics.add.existing(tilesprite_2, true);
        tilesprite_2.body.moves = false;
        tilesprite_2.body.allowGravity = false;
        tilesprite_2.body.allowDrag = false;
        tilesprite_2.body.allowRotation = false;
        tilesprite_2.body.pushable = false;
        tilesprite_2.body.immovable = true;
        tilesprite_2.body.setSize(84, 84, false);

        // tilesprite_3
        const tilesprite_3 = this.add.tileSprite(
            272,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_3.scaleX = 1.3;
        tilesprite_3.scaleY = 1.3;
        this.physics.add.existing(tilesprite_3, true);
        tilesprite_3.body.moves = false;
        tilesprite_3.body.allowGravity = false;
        tilesprite_3.body.allowDrag = false;
        tilesprite_3.body.allowRotation = false;
        tilesprite_3.body.pushable = false;
        tilesprite_3.body.immovable = true;
        tilesprite_3.body.setSize(84, 84, false);

        // tilesprite_4
        const tilesprite_4 = this.add.tileSprite(
            352,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_4.scaleX = 1.3;
        tilesprite_4.scaleY = 1.3;
        this.physics.add.existing(tilesprite_4, true);
        tilesprite_4.body.moves = false;
        tilesprite_4.body.allowGravity = false;
        tilesprite_4.body.allowDrag = false;
        tilesprite_4.body.allowRotation = false;
        tilesprite_4.body.pushable = false;
        tilesprite_4.body.immovable = true;
        tilesprite_4.body.setSize(84, 84, false);

        // tilesprite_5
        const tilesprite_5 = this.add.tileSprite(
            432,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_5.scaleX = 1.3;
        tilesprite_5.scaleY = 1.3;
        this.physics.add.existing(tilesprite_5, true);
        tilesprite_5.body.moves = false;
        tilesprite_5.body.allowGravity = false;
        tilesprite_5.body.allowDrag = false;
        tilesprite_5.body.allowRotation = false;
        tilesprite_5.body.pushable = false;
        tilesprite_5.body.immovable = true;
        tilesprite_5.body.setSize(84, 84, false);

        // tilesprite_6
        const tilesprite_6 = this.add.tileSprite(
            512,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_6.scaleX = 1.3;
        tilesprite_6.scaleY = 1.3;
        this.physics.add.existing(tilesprite_6, true);
        tilesprite_6.body.moves = false;
        tilesprite_6.body.allowGravity = false;
        tilesprite_6.body.allowDrag = false;
        tilesprite_6.body.allowRotation = false;
        tilesprite_6.body.pushable = false;
        tilesprite_6.body.immovable = true;
        tilesprite_6.body.setSize(84, 84, false);

        // tilesprite_7
        const tilesprite_7 = this.add.tileSprite(
            592,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_7.scaleX = 1.3;
        tilesprite_7.scaleY = 1.3;
        this.physics.add.existing(tilesprite_7, true);
        tilesprite_7.body.moves = false;
        tilesprite_7.body.allowGravity = false;
        tilesprite_7.body.allowDrag = false;
        tilesprite_7.body.allowRotation = false;
        tilesprite_7.body.pushable = false;
        tilesprite_7.body.immovable = true;
        tilesprite_7.body.setSize(84, 84, false);

        // tilesprite_8
        const tilesprite_8 = this.add.tileSprite(
            672,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_8.scaleX = 1.3;
        tilesprite_8.scaleY = 1.3;
        this.physics.add.existing(tilesprite_8, true);
        tilesprite_8.body.moves = false;
        tilesprite_8.body.allowGravity = false;
        tilesprite_8.body.allowDrag = false;
        tilesprite_8.body.allowRotation = false;
        tilesprite_8.body.pushable = false;
        tilesprite_8.body.immovable = true;
        tilesprite_8.body.setSize(84, 84, false);

        // tilesprite_9
        const tilesprite_9 = this.add.tileSprite(
            752,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_9.scaleX = 1.3;
        tilesprite_9.scaleY = 1.3;
        this.physics.add.existing(tilesprite_9, true);
        tilesprite_9.body.moves = false;
        tilesprite_9.body.allowGravity = false;
        tilesprite_9.body.allowDrag = false;
        tilesprite_9.body.allowRotation = false;
        tilesprite_9.body.pushable = false;
        tilesprite_9.body.immovable = true;
        tilesprite_9.body.setSize(84, 84, false);

        // tilesprite_10
        const tilesprite_10 = this.add.tileSprite(
            832,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_10.scaleX = 1.3;
        tilesprite_10.scaleY = 1.3;
        this.physics.add.existing(tilesprite_10, true);
        tilesprite_10.body.moves = false;
        tilesprite_10.body.allowGravity = false;
        tilesprite_10.body.allowDrag = false;
        tilesprite_10.body.allowRotation = false;
        tilesprite_10.body.pushable = false;
        tilesprite_10.body.immovable = true;
        tilesprite_10.body.setSize(84, 84, false);

        // tilesprite_11
        const tilesprite_11 = this.add.tileSprite(
            912,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_11.scaleX = 1.3;
        tilesprite_11.scaleY = 1.3;
        this.physics.add.existing(tilesprite_11, true);
        tilesprite_11.body.moves = false;
        tilesprite_11.body.allowGravity = false;
        tilesprite_11.body.allowDrag = false;
        tilesprite_11.body.allowRotation = false;
        tilesprite_11.body.pushable = false;
        tilesprite_11.body.immovable = true;
        tilesprite_11.body.setSize(84, 84, false);

        // tilesprite_12
        const tilesprite_12 = this.add.tileSprite(
            992,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_12.scaleX = 1.3;
        tilesprite_12.scaleY = 1.3;
        this.physics.add.existing(tilesprite_12, true);
        tilesprite_12.body.moves = false;
        tilesprite_12.body.allowGravity = false;
        tilesprite_12.body.allowDrag = false;
        tilesprite_12.body.allowRotation = false;
        tilesprite_12.body.pushable = false;
        tilesprite_12.body.immovable = true;
        tilesprite_12.body.setSize(84, 84, false);

        // tilesprite_13
        const tilesprite_13 = this.add.tileSprite(
            1072,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_13.scaleX = 1.3;
        tilesprite_13.scaleY = 1.3;
        this.physics.add.existing(tilesprite_13, true);
        tilesprite_13.body.moves = false;
        tilesprite_13.body.allowGravity = false;
        tilesprite_13.body.allowDrag = false;
        tilesprite_13.body.allowRotation = false;
        tilesprite_13.body.pushable = false;
        tilesprite_13.body.immovable = true;
        tilesprite_13.body.setSize(84, 84, false);

        // tilesprite_14
        const tilesprite_14 = this.add.tileSprite(
            1152,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_14.scaleX = 1.3;
        tilesprite_14.scaleY = 1.3;
        this.physics.add.existing(tilesprite_14, true);
        tilesprite_14.body.moves = false;
        tilesprite_14.body.allowGravity = false;
        tilesprite_14.body.allowDrag = false;
        tilesprite_14.body.allowRotation = false;
        tilesprite_14.body.pushable = false;
        tilesprite_14.body.immovable = true;
        tilesprite_14.body.setSize(84, 84, false);

        // tilesprite_15
        const tilesprite_15 = this.add.tileSprite(
            1232,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_15.scaleX = 1.3;
        tilesprite_15.scaleY = 1.3;
        this.physics.add.existing(tilesprite_15, true);
        tilesprite_15.body.moves = false;
        tilesprite_15.body.allowGravity = false;
        tilesprite_15.body.allowDrag = false;
        tilesprite_15.body.allowRotation = false;
        tilesprite_15.body.pushable = false;
        tilesprite_15.body.immovable = true;
        tilesprite_15.body.setSize(84, 84, false);

        // tilesprite_16
        const tilesprite_16 = this.add.tileSprite(
            1312,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_16.scaleX = 1.3;
        tilesprite_16.scaleY = 1.3;
        this.physics.add.existing(tilesprite_16, true);
        tilesprite_16.body.moves = false;
        tilesprite_16.body.allowGravity = false;
        tilesprite_16.body.allowDrag = false;
        tilesprite_16.body.allowRotation = false;
        tilesprite_16.body.pushable = false;
        tilesprite_16.body.immovable = true;
        tilesprite_16.body.setSize(84, 84, false);

        // tilesprite_17
        const tilesprite_17 = this.add.tileSprite(
            1392,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_17.scaleX = 1.3;
        tilesprite_17.scaleY = 1.3;
        this.physics.add.existing(tilesprite_17, true);
        tilesprite_17.body.moves = false;
        tilesprite_17.body.allowGravity = false;
        tilesprite_17.body.allowDrag = false;
        tilesprite_17.body.allowRotation = false;
        tilesprite_17.body.pushable = false;
        tilesprite_17.body.immovable = true;
        tilesprite_17.body.setSize(84, 84, false);

        // tilesprite_18
        const tilesprite_18 = this.add.tileSprite(
            1472,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_18.scaleX = 1.3;
        tilesprite_18.scaleY = 1.3;
        this.physics.add.existing(tilesprite_18, true);
        tilesprite_18.body.moves = false;
        tilesprite_18.body.allowGravity = false;
        tilesprite_18.body.allowDrag = false;
        tilesprite_18.body.allowRotation = false;
        tilesprite_18.body.pushable = false;
        tilesprite_18.body.immovable = true;
        tilesprite_18.body.setSize(84, 84, false);

        // tilesprite_19
        const tilesprite_19 = this.add.tileSprite(
            1552,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_19.scaleX = 1.3;
        tilesprite_19.scaleY = 1.3;
        this.physics.add.existing(tilesprite_19, true);
        tilesprite_19.body.moves = false;
        tilesprite_19.body.allowGravity = false;
        tilesprite_19.body.allowDrag = false;
        tilesprite_19.body.allowRotation = false;
        tilesprite_19.body.pushable = false;
        tilesprite_19.body.immovable = true;
        tilesprite_19.body.setSize(84, 84, false);

        // tilesprite_20
        const tilesprite_20 = this.add.tileSprite(
            1632,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_20.scaleX = 1.3;
        tilesprite_20.scaleY = 1.3;
        this.physics.add.existing(tilesprite_20, true);
        tilesprite_20.body.moves = false;
        tilesprite_20.body.allowGravity = false;
        tilesprite_20.body.allowDrag = false;
        tilesprite_20.body.allowRotation = false;
        tilesprite_20.body.pushable = false;
        tilesprite_20.body.immovable = true;
        tilesprite_20.body.setSize(84, 84, false);

        // tilesprite_21
        const tilesprite_21 = this.add.tileSprite(
            1712,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_21.scaleX = 1.3;
        tilesprite_21.scaleY = 1.3;
        this.physics.add.existing(tilesprite_21, true);
        tilesprite_21.body.moves = false;
        tilesprite_21.body.allowGravity = false;
        tilesprite_21.body.allowDrag = false;
        tilesprite_21.body.allowRotation = false;
        tilesprite_21.body.pushable = false;
        tilesprite_21.body.immovable = true;
        tilesprite_21.body.setSize(84, 84, false);

        // tilesprite_22
        const tilesprite_22 = this.add.tileSprite(
            1792,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_22.scaleX = 1.3;
        tilesprite_22.scaleY = 1.3;
        this.physics.add.existing(tilesprite_22, true);
        tilesprite_22.body.moves = false;
        tilesprite_22.body.allowGravity = false;
        tilesprite_22.body.allowDrag = false;
        tilesprite_22.body.allowRotation = false;
        tilesprite_22.body.pushable = false;
        tilesprite_22.body.immovable = true;
        tilesprite_22.body.setSize(84, 84, false);

        // tilesprite_23
        const tilesprite_23 = this.add.tileSprite(
            1872,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_23.scaleX = 1.3;
        tilesprite_23.scaleY = 1.3;
        this.physics.add.existing(tilesprite_23, true);
        tilesprite_23.body.moves = false;
        tilesprite_23.body.allowGravity = false;
        tilesprite_23.body.allowDrag = false;
        tilesprite_23.body.allowRotation = false;
        tilesprite_23.body.pushable = false;
        tilesprite_23.body.immovable = true;
        tilesprite_23.body.setSize(84, 84, false);

        // tilesprite_24
        const tilesprite_24 = this.add.tileSprite(
            1952,
            1040,
            64,
            64,
            "world_tileset",
            1
        ) as Phaser.GameObjects.TileSprite & {
            body: Phaser.Physics.Arcade.StaticBody;
        };
        tilesprite_24.scaleX = 1.3;
        tilesprite_24.scaleY = 1.3;
        this.physics.add.existing(tilesprite_24, true);
        tilesprite_24.body.moves = false;
        tilesprite_24.body.allowGravity = false;
        tilesprite_24.body.allowDrag = false;
        tilesprite_24.body.allowRotation = false;
        tilesprite_24.body.pushable = false;
        tilesprite_24.body.immovable = true;
        tilesprite_24.body.setSize(84, 84, false);

        // player1HP
        const player1HP = this.add.text(678, 708, "", {});
        player1HP.text = "Player 1 (100/100 HP)";
        player1HP.setStyle({ fontSize: "24px", fontStyle: "bold italic" });

        // player1STA
        const player1STA = this.add.text(672, 736, "", {});
        player1STA.text = "Player 1 (100/100 STA)";
        player1STA.setStyle({ fontSize: "24px", fontStyle: "bold italic" });

        // p1infoContainer
        const p1infoContainer = this.add.image(
            336,
            112,
            "PlayerStats_Container"
        );
        p1infoContainer.scaleX = 1.07;
        p1infoContainer.scaleY = 1.07;
        p1infoContainer.alpha = 0.8;
        p1infoContainer.alphaTopLeft = 0.8;
        p1infoContainer.alphaTopRight = 0.8;
        p1infoContainer.alphaBottomLeft = 0.8;
        p1infoContainer.alphaBottomRight = 0.8;

        // p2infoContainer
        const p2infoContainer = this.add.image(
            1584,
            112,
            "PlayerStats_Container"
        );
        p2infoContainer.scaleX = 1.07;
        p2infoContainer.scaleY = 1.07;
        p2infoContainer.flipX = true;
        p2infoContainer.alpha = 0.8;
        p2infoContainer.alphaTopLeft = 0.8;
        p2infoContainer.alphaTopRight = 0.8;
        p2infoContainer.alphaBottomLeft = 0.8;
        p2infoContainer.alphaBottomRight = 0.8;

        // skillContainerCTR
        const skillContainerCTR = this.add.container(16, 912);
        skillContainerCTR.blendMode = Phaser.BlendModes.SKIP_CHECK;
        skillContainerCTR.scaleX = 1.1450674740873885;
        skillContainerCTR.scaleY = 1.1450674740873885;

        // uiSkillContainer
        const uiSkillContainer = this.add.image(256, 80, "Skill_Container");
        uiSkillContainer.scaleX = 0.5;
        uiSkillContainer.scaleY = 0.5;
        skillContainerCTR.add(uiSkillContainer);

        // uiSkillONE
        const uiSkillONE = this.add.image(293, 84, "E_skill_icon");
        uiSkillONE.scaleX = 0.4;
        uiSkillONE.scaleY = 0.4;
        skillContainerCTR.add(uiSkillONE);

        // uiSkillTWO
        const uiSkillTWO = this.add.image(182, 84, "Q_Skill_Icon");
        uiSkillTWO.scaleX = 0.4;
        uiSkillTWO.scaleY = 0.4;
        skillContainerCTR.add(uiSkillTWO);

        // uiSkillTHREE
        const uiSkillTHREE = this.add.image(405, 84, "R_skill_icon");
        uiSkillTHREE.scaleX = 0.4;
        uiSkillTHREE.scaleY = 0.4;
        skillContainerCTR.add(uiSkillTHREE);

        // uiTimer
        const uiTimer = this.add.sprite(
            1760,
            1008,
            "Timer_Container_Frames",
            0
        );
        uiTimer.scaleX = 0.8191303940245613;
        uiTimer.scaleY = 0.8191303940245613;
        uiTimer.play("matchTimerAnimTimer_Container_Frames");

        // matchTimerText
        const matchTimerText = this.add.text(1728, 986, "", {});
        matchTimerText.text = "XX:XX";
        matchTimerText.setStyle({
            align: "center",
            fontFamily: "Sans-serif",
            fontSize: "42px",
            fontStyle: "bold italic",
            "shadow.stroke": true,
        });

        // player1Name
        const player1Name = this.add.text(256, 80, "", {});
        player1Name.scaleX = 0.8749634497392944;
        player1Name.scaleY = 0.8749634497392944;
        player1Name.text = "Player 1 Name";
        player1Name.setStyle({
            align: "center",
            fontFamily: "Sans-serif",
            fontSize: "42px",
            fontStyle: "bold italic",
            "shadow.stroke": true,
        });

        // player2Name
        const player2Name = this.add.text(1408, 80, "", {});
        player2Name.scaleX = 0.8749634497392944;
        player2Name.scaleY = 0.8749634497392944;
        player2Name.text = "Player 2 Name";
        player2Name.setStyle({
            align: "center",
            fontFamily: "Sans-serif",
            fontSize: "42px",
            fontStyle: "bold italic",
            "shadow.stroke": true,
        });

        // player2HP
        const player2HP = this.add.text(1200, 704, "", {});
        player2HP.text = "Player 2 (100/100 HP)";
        player2HP.setStyle({ fontSize: "24px", fontStyle: "bold italic" });

        // player2STA
        const player2STA = this.add.text(1200, 736, "", {});
        player2STA.text = "Player 2 (100/100 STA)";
        player2STA.setStyle({ fontSize: "24px", fontStyle: "bold italic" });

        // collider
        this.physics.add.collider(this.myPlayer.sprite, tilesprite_1);

        this.bgIMAGE = bgIMAGE;
        this.tilesprite_1 = tilesprite_1;
        this.tilesprite = tilesprite;
        this.tilesprite_2 = tilesprite_2;
        this.tilesprite_3 = tilesprite_3;
        this.tilesprite_4 = tilesprite_4;
        this.tilesprite_5 = tilesprite_5;
        this.tilesprite_6 = tilesprite_6;
        this.tilesprite_7 = tilesprite_7;
        this.tilesprite_8 = tilesprite_8;
        this.tilesprite_9 = tilesprite_9;
        this.tilesprite_10 = tilesprite_10;
        this.tilesprite_11 = tilesprite_11;
        this.tilesprite_12 = tilesprite_12;
        this.tilesprite_13 = tilesprite_13;
        this.tilesprite_14 = tilesprite_14;
        this.tilesprite_15 = tilesprite_15;
        this.tilesprite_16 = tilesprite_16;
        this.tilesprite_17 = tilesprite_17;
        this.tilesprite_18 = tilesprite_18;
        this.tilesprite_19 = tilesprite_19;
        this.tilesprite_20 = tilesprite_20;
        this.tilesprite_21 = tilesprite_21;
        this.tilesprite_22 = tilesprite_22;
        this.tilesprite_23 = tilesprite_23;
        this.tilesprite_24 = tilesprite_24;
        this.player1HP = player1HP;
        this.player1STA = player1STA;
        this.p1infoContainer = p1infoContainer;
        this.p2infoContainer = p2infoContainer;
        this.uiSkillContainer = uiSkillContainer;
        this.uiSkillONE = uiSkillONE;
        this.uiSkillTWO = uiSkillTWO;
        this.uiSkillTHREE = uiSkillTHREE;
        this.uiTimer = uiTimer;
        this.matchTimerText = matchTimerText;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.player2HP = player2HP;
        this.player2STA = player2STA;

        this.events.emit("scene-awake");
    }

    private bgIMAGE!: Phaser.GameObjects.Image;
    private tilesprite_1!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_2!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_3!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_4!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_5!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_6!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_7!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_8!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_9!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_10!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_11!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_12!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_13!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_14!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_15!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_16!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_17!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_18!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_19!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_20!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_21!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_22!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_23!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private tilesprite_24!: Phaser.GameObjects.TileSprite & {
        body: Phaser.Physics.Arcade.StaticBody;
    };
    private player!: Phaser.Physics.Arcade.Sprite;
    private player1HP!: Phaser.GameObjects.Text;
    private player1STA!: Phaser.GameObjects.Text;
    private p1infoContainer!: Phaser.GameObjects.Image;
    private p2infoContainer!: Phaser.GameObjects.Image;
    private uiSkillContainer!: Phaser.GameObjects.Image;
    private uiSkillONE!: Phaser.GameObjects.Image;
    private uiSkillTWO!: Phaser.GameObjects.Image;
    private uiSkillTHREE!: Phaser.GameObjects.Image;
    private uiTimer!: Phaser.GameObjects.Sprite;
    private matchTimerText!: Phaser.GameObjects.Text;
    private player1Name!: Phaser.GameObjects.Text;
    private player2Name!: Phaser.GameObjects.Text;
    private player2HP!: Phaser.GameObjects.Text;
    private player2STA!: Phaser.GameObjects.Text;

    /* START-USER-CODE */

    // Define movement speed and jump power
    private walkSpeed = 200;
    private runSpeed = 400;
    private jumpSpeed = -2000;
    private crouchSpeed = 150;
    private cursors!: any;
    private staminaManager!: StaminaManager;
    private bestZoom = 1.5; // Increased from 0.7 for a closer view of the player
    private parallaxFactor = 0.4; // How much the background moves relative to the camera (0 = fixed, 1 = moves with camera)
    private uiCamera!: Phaser.Cameras.Scene2D.Camera;
    private mainCamera!: Phaser.Cameras.Scene2D.Camera;
    private matchTime: number = 90; // 1 minute and 30 seconds
    private matchTimerEvent: Phaser.Time.TimerEvent | null = null;
    private preventDefaultHandler: ((e: KeyboardEvent) => void) | null = null;
    private lastSentPosition = { x: 0, y: 0 };
    private positionUpdateInterval = 50; // ms between position updates
    private lastPositionUpdate = 0;

    // Write your code here
    create() {
        this.myPlayer.sprite = this.physics.add.sprite(608, 752, "_Idle", 0);
        this.myPlayer.sprite.setInteractive(
            new Phaser.Geom.Rectangle(0, 0, 120, 80),
            Phaser.Geom.Rectangle.Contains
        );
        this.myPlayer.sprite.scaleX = 3;
        this.myPlayer.sprite.scaleY = 3;
        this.myPlayer.sprite.setOrigin(0, 0);
        this.myPlayer.sprite.body!.gravity.y = 10000;
        this.myPlayer.sprite.body!.setOffset(45, 40);
        this.myPlayer.sprite.body!.setSize(30, 40, false);

        this.otherPlayer.sprite = this.physics.add.sprite(608, 752, "_Idle", 0);
        this.otherPlayer.sprite.setInteractive(
            new Phaser.Geom.Rectangle(0, 0, 120, 80),
            Phaser.Geom.Rectangle.Contains
        );
        this.otherPlayer.sprite.scaleX = 3;
        this.otherPlayer.sprite.scaleY = 3;
        this.otherPlayer.sprite.setOrigin(0, 0);
        this.otherPlayer.sprite.body!.gravity.y = 10000;
        this.otherPlayer.sprite.body!.setOffset(45, 40);
        this.otherPlayer.sprite.body!.setSize(30, 40, false);
        this.editorCreate();

        // Initialize all player animations
        // Prevent spacebar and ctrl from scrolling the page and other default behaviors
        const preventDefaultKeys = (e: KeyboardEvent) => {
            if (e.code === "Space" || e.ctrlKey) {
                e.preventDefault();
            }
        };

        // Add event listeners to prevent spacebar and ctrl default behavior
        window.addEventListener("keydown", preventDefaultKeys);

        // Store the event handler for cleanup
        this.preventDefaultHandler = preventDefaultKeys;

        // Store reference to main camera
        this.mainCamera = this.cameras.main;

        // Create a separate UI camera that doesn't zoom
        this.uiCamera = this.cameras.add();
        this.uiCamera.setScroll(0, 0);
        this.uiCamera.ignore([
            this.bgIMAGE,
            this.player,
            // Ignore all tilesprites
            this.tilesprite_1,
            this.tilesprite,
            this.tilesprite_2,
            this.tilesprite_3,
            this.tilesprite_4,
            this.tilesprite_5,
            this.tilesprite_6,
            this.tilesprite_7,
            this.tilesprite_8,
            this.tilesprite_9,
            this.tilesprite_10,
            this.tilesprite_11,
            this.tilesprite_12,
            this.tilesprite_13,
            this.tilesprite_14,
            this.tilesprite_15,
            this.tilesprite_16,
            this.tilesprite_17,
            this.tilesprite_18,
            this.tilesprite_19,
            this.tilesprite_20,
            this.tilesprite_21,
            this.tilesprite_22,
            this.tilesprite_23,
            this.tilesprite_24,
            this.player1HP,
            this.player1STA,
            this.player2HP,
            this.player2STA,
        ]);

        // Play the match timer animation
        // Alternative method with options
        // this.uiTimer.play({
        //     key: 'matchTimerAnim',
        //     repeat: -1, // Loop infinitely
        //     frameRate: 12 // Adjust speed if needed
        // });

        // Make the uiCamera ignore physics debug graphics
        this.events.once("postupdate", () => {
            // Physics debug graphics are created after the first update
            // Find any physics debug graphics and ignore them in the UI camera
            this.children.each((child) => {
                // Check if this is a physics debug graphics object
                if (
                    child instanceof Phaser.GameObjects.Graphics &&
                    (child.name === "__debugGraphics" ||
                        child.getData("isPhysicsDebug"))
                ) {
                    this.uiCamera.ignore(child);
                }
            });
        });

        // If debug is enabled at any point, make sure UI camera ignores it
        if (this.physics.world.debugGraphic) {
            this.uiCamera.ignore(this.physics.world.debugGraphic);
        }

        // Have main camera ignore UI elements
        this.mainCamera.ignore([
            this.p1infoContainer,
            this.p2infoContainer,
            this.uiSkillContainer,
            this.uiSkillONE,
            this.uiSkillTWO,
            this.uiSkillTHREE,
            this.uiTimer,
            this.matchTimerText,
            this.player1Name,
            this.player2Name,
        ]);

        // Set UI elements to high depth so they're always on top
        this.p1infoContainer.setDepth(100);
        this.p2infoContainer.setDepth(100);

        // Configure the background for parallax effect
        this.bgIMAGE.setScrollFactor(this.parallaxFactor);

        // Optional: add subtle animation to the background
        this.tweens.add({
            targets: this.bgIMAGE,
            y: "+=5",
            duration: 3000,
            yoyo: true,
            repeat: -1,
            ease: "Sine.easeInOut",
        });

        // Add a camera zoom effect - starting further out for a dramatic zoom in
        this.mainCamera.setZoom(0.3);
        this.tweens.add({
            targets: this.mainCamera,
            zoom: this.bestZoom, // Now zooming in closer to the player
            duration: 1200, // Slightly longer for more dramatic effect
            ease: "Power2",
        });

        // Set up camera to follow player with adjusted offset for closer zoom
        this.mainCamera.startFollow(this.player, true);
        this.mainCamera.setFollowOffset(0, -80); // Adjusted to better frame the player with closer zoom

        // Adjust camera bounds if needed for the closer zoom
        this.mainCamera.setBounds(0, 0, 1920, 1080);

        // Create an array of all tilesprites
        const tileSprites = [
            this.tilesprite,
            this.tilesprite_1,
            this.tilesprite_2,
            this.tilesprite_3,
            this.tilesprite_4,
            this.tilesprite_5,
            this.tilesprite_6,
            this.tilesprite_7,
            this.tilesprite_8,
            this.tilesprite_9,
            this.tilesprite_10,
            this.tilesprite_11,
            this.tilesprite_12,
            this.tilesprite_13,
            this.tilesprite_14,
            this.tilesprite_15,
            this.tilesprite_16,
            this.tilesprite_17,
            this.tilesprite_18,
            this.tilesprite_19,
            this.tilesprite_20,
            this.tilesprite_21,
            this.tilesprite_22,
            this.tilesprite_23,
            this.tilesprite_24,
        ];

        // Add colliders for all tilesprites in a single loop
        tileSprites.forEach((tile) => {
            this.physics.add.collider(this.player, tile);
        });

        // Position the HP text initially above the player
        this.positionHPTextAbovePlayer();

        // Define controls with simplified inputs and skill buttons
        this.cursors = this.input.keyboard!.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.SPACE,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
            ctrl: Phaser.Input.Keyboard.KeyCodes.CTRL,
            // Add skill keys
            skillE: Phaser.Input.Keyboard.KeyCodes.E,
            skillQ: Phaser.Input.Keyboard.KeyCodes.Q,
            skillR: Phaser.Input.Keyboard.KeyCodes.R,
        });

        // Initialize the stamina manager
        this.staminaManager = new StaminaManager(this, this.player1STA, {
            maxStamina: 100,
            regenRate: 0.5, // Amount to regenerate per tick
            regenDelay: 1000, // Delay before stamina starts regenerating
            updateFrequency: 100, // How often to update stamina regeneration
        });

        // Set initial animation - using the new animation system
        this.myPlayer.sprite.play("Idle");

        // Initialize and start the match timer
        this.startMatchTimer();

        // Set initial position to send to server
        this.lastSentPosition = {
            x: this.myPlayer.sprite.x,
            y: this.myPlayer.sprite.y,
        };

        // ======== MULTIPLAYER SECTION ========

        // Remove any previous listeners to prevent duplicates
        // this.socket.off("currentPlayers");
        // this.socket.off("newPlayer");
        // this.socket.off("playerDisconnected");
        // this.socket.off("playerMoved");

        // Register player with server
        // this.socket.emit("playerJoined", {
        //     x: this.myPlayer.sprite.x,
        //     y: this.myPlayer.sprite.y,
        //     animation: "Idle",
        // });

        this.socket.on("arenaStateChanged", (data) => {
            console.log(data);
            console.log(SOCKET.id);

            // const otherPlayer = this.otherPlayers[id];
            // if (!otherPlayer) {
            // 	console.log(`Player ${id} not found in otherPlayers!`);
            // 	return;
            // }

            // console.log(
            // 	`Updating player ${id} position to (${playerInfo.x.toFixed(
            // 		2
            // 	)}, ${playerInfo.y.toFixed(2)})`
            // );

            // // Update flip X based on velocity
            // if (playerInfo.flipX !== undefined) {
            // 	otherPlayer.setFlipX(playerInfo.flipX);
            // } else if (playerInfo.velocityX !== undefined) {
            // 	// If flipX not provided, infer from velocity
            // 	if (playerInfo.velocityX < 0) {
            // 		otherPlayer.setFlipX(true);
            // 	} else if (playerInfo.velocityX > 0) {
            // 		otherPlayer.setFlipX(false);
            // 	}
            // }

            // // Directly set position for immediate feedback (optional, can remove if too jittery)
            // otherPlayer.setPosition(playerInfo.x, playerInfo.y);

            // // Smoothly move the player to the new position
            // this.tweens.add({
            // 	targets: otherPlayer,
            // 	x: playerInfo.x,
            // 	y: playerInfo.y,
            // 	duration: 80, // Even shorter duration for smoother movement
            // 	ease: "Linear",
            // });

            // // Update animation state if provided
            // if (
            // 	playerInfo.animation &&
            // 	otherPlayer.anims.currentAnim?.key !== playerInfo.animation
            // ) {
            // 	otherPlayer.play(playerInfo.animation);
            // }

            // // Update the name tag position
            // const nameTag = otherPlayer.getData("nameTag");
            // if (nameTag) {
            // 	nameTag.setPosition(
            // 		playerInfo.x + otherPlayer.displayWidth / 2,
            // 		playerInfo.y - 20
            // 	);
            // }
            // console.log("Current players:", players);

            // // Create sprites for existing players, excluding this client
            // Object.keys(players).forEach((id) => {
            //     if (id !== this.socket.id && !this.otherPlayers[id]) {
            //         this.addOtherPlayer(id, players[id]);
            //     }
            // });
        });

        // Handle current players already in the game
        // this.socket.on("currentPlayers", (players) => {
        //     console.log("Current players:", players);

        //     // Create sprites for existing players, excluding this client
        //     Object.keys(players).forEach((id) => {
        //         if (id !== this.socket.id && !this.otherPlayers[id]) {
        //             this.addOtherPlayer(id, players[id]);
        //         }
        //     });
        // });

        // Handle new player connections
        // this.socket.on("newPlayer", (playerInfo) => {
        //     console.log("New player joined:", playerInfo.id);
        //     // Only add if this isn't our player and doesn't already exist
        //     if (
        //         playerInfo.id !== this.socket.id &&
        //         !this.otherPlayers[playerInfo.id]
        //     ) {
        //         this.addOtherPlayer(playerInfo.id, playerInfo);
        //         // Refresh UI camera ignore settings
        //         this.refreshUICameraIgnoreList();
        //     }
        // });

        // Handle player disconnection
        this.socket.on("playerDisconnected", (id) => {
            console.log("Player disconnected:", id);
            if (this.otherPlayers[id]) {
                this.otherPlayers[id].destroy();
                delete this.otherPlayers[id];
            }
        });

        // Handle player movements
        this.socket.on("playerMoved", (playerInfo) => {
            if (
                playerInfo.id !== this.socket.id &&
                this.otherPlayers[playerInfo.id]
            ) {
                this.updateOtherPlayer(playerInfo.id, playerInfo);
            }
        });

        this.input.on("pointerdown", (pointer: Phaser.Input.Pointer) => {
            if (pointer.leftButtonDown()) {
                this.handleAttack("left");
            } else if (pointer.rightButtonDown()) {
                this.handleAttack("right");
            }
        });

        this.game.canvas.addEventListener("contextmenu", (e) => {
            e.preventDefault();
        });
    }
    private handleAttack(attackType: "left" | "right"): void {
        // Don't allow attacks if already attacking
        if (
            this.player.anims.currentAnim?.key.includes("_Attack") ||
            this.player.getData("isAttacking")
        ) {
            console.log("Attack canceled - already attacking");
            return;
        }

        // Play appropriate animation based on attack type
        const animationKey = attackType === "left" ? "_Attack" : "_Attack2";

        // console.log("Attempting to play animation:", animationKey);

        this.player.setData("isAttacking", true);

        if (attackType === "right") {
            this.player.setVelocityY(0);
        }

        this.player.play({
            key: animationKey,
            frameRate: attackType === "left" ? 10 : 8, // Slower for heavy attack
            repeat: 0,
        });

        if (attackType === "right") {
            this.player.setVelocityX(0);
        }

        // Send attack to server for multiplayer
        this.socket.emit("playerMovement", {
            x: this.player.x,
            y: this.player.y,
            animation: animationKey,
            flipX: this.player.flipX,
            isAttacking: true,
        });

        // Return to idle state ONLY when animation is fully complete
        this.player.once("animationcomplete", () => {
            console.log("Attack animation complete, returning to idle");
            this.player.setData("isAttacking", false);
            // Use the correct idle animation
            this.player.play("_Idle_Idle");

            // IMPORTANT: Tell other players that we're done attacking
            this.socket.emit("playerMovement", {
                x: this.player.x,
                y: this.player.y,
                animation: "_Idle_Idle",
                flipX: this.player.flipX,
                isAttacking: false,
            });
        });
    }

    update(time: number, delta: number) {
        // Check if player is currently attacking
        if (this.player.getData("isAttacking")) {
            // Only handle gravity and position HP text while attacking
            this.positionHPTextAbovePlayer();
            return; // Skip normal movement handling during attack animation
        }

        // Use the simplified movement system with stamina integration
        // Handle player 1 movement with WASD controls
        const movementResult = handlePlayerMovement(
            this.player,
            this.cursors,
            {
                walkSpeed: this.walkSpeed,
                runSpeed: this.runSpeed,
                jumpSpeed: this.jumpSpeed,
                crouchSpeed: this.crouchSpeed,
            },
            {
                idle: "_Idle_Idle",
                walk: "_Run",
                jump: "_Jump",
                fall: "_Fall",
                run: "_Run",
                crouch: "_CrouchFull",
                crouchWalk: "_CrouchWalk",
            },
            this.staminaManager,
            {
                skillE: this.uiSkillONE,
                skillQ: this.uiSkillTWO,
                skillR: this.uiSkillTHREE,
            }
        );

        // Update HP text position to follow the player
        this.positionHPTextAbovePlayer();

        // ===== MULTIPLAYER: Send position updates to server =====
        // Always send position updates if there's any movement
        const positionChanged =
            Math.abs(this.myPlayer.sprite.x - this.lastSentPosition.x) > 0.5 ||
            Math.abs(this.myPlayer.sprite.y - this.lastSentPosition.y) > 0.5;

        if (
            positionChanged &&
            time - this.lastPositionUpdate > this.positionUpdateInterval
        ) {
            // Store current position
            this.lastSentPosition.x = this.myPlayer.sprite.x;
            this.lastSentPosition.y = this.myPlayer.sprite.y;
            this.lastPositionUpdate = time;

            // Debug: log that we're sending position
            console.log(
                `Sending position: (${this.myPlayer.sprite.x.toFixed(
                    2
                )}, ${this.myPlayer.sprite.y.toFixed(2)})`
            );

            // Send position and animation state to server
            this.socket.emit("playerMoved", {
                x: this.myPlayer.sprite.x,
                y: this.myPlayer.sprite.y,
                flipX: this.myPlayer.sprite.flipX,
                velocityX: this.myPlayer.sprite.body!.velocity.x,
                velocityY: this.myPlayer.sprite.body!.velocity.y,
            });
            // this.socket.emit("playerMovement", {
            //     x: this.myPlayer.sprite.x,
            //     y: this.myPlayer.sprite.y,
            //     animation: this.myPlayer.sprite.anims.currentAnim?.key || "Idle",
            //     flipX: this.myPlayer.sprite.flipX,
            //     velocityX: this.myPlayer.sprite.body.velocity.x,
            //     velocityY: this.myPlayer.sprite.body.velocity.y,
            // });
        }

        const playerSpeed = Math.abs(this.myPlayer.sprite.body!.velocity.x);
        if (playerSpeed > this.runSpeed * 0.8) {
            // Slightly zoom out when running fast
            const runningZoom = this.bestZoom * 0.9;
            if (Math.abs(this.mainCamera.zoom - runningZoom) > 0.05) {
                this.tweens.add({
                    targets: this.mainCamera,
                    zoom: runningZoom,
                    duration: 200,
                    ease: "Sine.easeOut",
                });
            }
        } else if (this.mainCamera.zoom < this.bestZoom) {
            // Return to normal zoom when not running
            this.tweens.add({
                targets: this.mainCamera,
                zoom: this.bestZoom,
                duration: 300,
                ease: "Sine.easeOut",
            });
        }
    }

    // Position the HP and STA text centered above the player's head
    private positionHPTextAbovePlayer() {
        // Calculate position above player (adjust the Y offset as needed)
        const hpYOffset = -40; // Distance above player's head
        const staYOffset = -15; // Distance above player's head but below HP text

        // Center the texts horizontally on the player
        this.player1HP.setPosition(
            this.myPlayer.sprite.x - this.player1HP.width / 2,
            this.myPlayer.sprite.y + hpYOffset
        );

        this.player1STA.setPosition(
            this.myPlayer.sprite.x - this.player1STA.width / 2,
            this.myPlayer.sprite.y + staYOffset
        );
    }

    // Add a method to dynamically adjust parallax factor (optional)
    setParallaxFactor(factor: number) {
        this.parallaxFactor = factor;
        this.bgIMAGE.setScrollFactor(factor);
    }

    // Add a method to smoothly adjust zoom
    adjustZoom(targetZoom: number) {
        // Clamp the value to reasonable limits
        targetZoom = Phaser.Math.Clamp(targetZoom, 0.5, 2.0);

        this.tweens.add({
            targets: this.mainCamera,
            zoom: targetZoom,
            duration: 300,
            ease: "Sine.easeInOut",
            onComplete: () => {
                this.bestZoom = targetZoom; // Update the best zoom value
            },
        });
    }

    // Add timer functionality methods
    private startMatchTimer(): void {
        // Set initial time to 1 minute and 30 seconds
        this.matchTime = 90;

        // Update the display initially
        this.updateMatchTimerDisplay();

        // Create a timer event that fires every second
        this.matchTimerEvent = this.time.addEvent({
            delay: 1000,
            callback: this.updateMatchTimer,
            callbackScope: this,
            loop: true,
        });
    }

    private updateMatchTimer(): void {
        // Decrease the remaining time
        this.matchTime--;

        // Update the display
        this.updateMatchTimerDisplay();

        // Check if timer has reached zero
        if (this.matchTime <= 0) {
            // Stop the timer
            if (this.matchTimerEvent) {
                this.matchTimerEvent.remove();
                this.matchTimerEvent = null;
            }

            // Handle end of match logic
            this.handleMatchEnd();
        }
    }

    private updateMatchTimerDisplay(): void {
        // Calculate minutes and seconds
        const minutes = Math.floor(this.matchTime / 60);
        const seconds = this.matchTime % 60;

        // Format as XX:XX
        const formattedTime =
            (minutes < 10 ? "0" : "") +
            minutes +
            ":" +
            (seconds < 10 ? "0" : "") +
            seconds;

        // Update the text
        this.matchTimerText.setText(formattedTime);
    }

    private handleMatchEnd(): void {
        // Logic for when the match timer hits zero
        this.matchTimerText.setText("00:00");

        // You can add additional end-of-match logic here
        console.log("Match time has ended!");

        // For example, show a match end message, determine winner, etc.
    }

    // ===== MULTIPLAYER HELPER METHODS =====

    // Create a new player sprite for other connected players
    private addOtherPlayer(id: string, playerInfo: any) {
        // Create a new sprite for the other player
        const otherPlayer = this.physics.add.sprite(
            playerInfo.x,
            playerInfo.y,
            "_Idle",
            0
        );

        // Configure other player sprite similar to local player
        otherPlayer.setInteractive(
            new Phaser.Geom.Rectangle(0, 0, 120, 80),
            Phaser.Geom.Rectangle.Contains
        );
        otherPlayer.scaleX = 3;
        otherPlayer.scaleY = 3;
        otherPlayer.setOrigin(0, 0);
        otherPlayer.body.gravity.y = 10000;
        otherPlayer.body.setOffset(45, 40);
        otherPlayer.body.setSize(30, 40, false);

        // Set player color tint to differentiate from local player
        otherPlayer.setTint(0xaaaaaa); // Light grey tint

        // Store the player in our registry
        this.otherPlayers[id] = otherPlayer;

        // Create floating name tag above other player
        const nameTag = this.add.text(
            otherPlayer.x,
            otherPlayer.y - 60,
            `Player ${id.substring(0, 4)}`, // Show part of the ID as name
            {
                fontSize: "16px",
                color: "#FFFFFF",
                stroke: "#000000",
                strokeThickness: 3,
            }
        );
        nameTag.setOrigin(0.5, 1);
        nameTag.setDepth(100);

        // Store the name tag as a property of the player
        otherPlayer.setData("nameTag", nameTag);

        // Make UI camera ignore other players' elements
        if (this.uiCamera) {
            this.uiCamera.ignore([otherPlayer, nameTag]);
        }

        // Add colliders with the tilesprites
        const tileSprites = [
            this.tilesprite,
            this.tilesprite_1,
            this.tilesprite_2,
            this.tilesprite_3,
            this.tilesprite_4,
            this.tilesprite_5,
            this.tilesprite_6,
            this.tilesprite_7,
            this.tilesprite_8,
            this.tilesprite_9,
            this.tilesprite_10,
            this.tilesprite_11,
            this.tilesprite_12,
            this.tilesprite_13,
            this.tilesprite_14,
            this.tilesprite_15,
            this.tilesprite_16,
            this.tilesprite_17,
            this.tilesprite_18,
            this.tilesprite_19,
            this.tilesprite_20,
            this.tilesprite_21,
            this.tilesprite_22,
            this.tilesprite_23,
            this.tilesprite_24,
        ];

        tileSprites.forEach((tile) => {
            this.physics.add.collider(otherPlayer, tile);
        });

        // Set initial animation if provided
        if (playerInfo.animation) {
            otherPlayer.play(playerInfo.animation);
        } else {
            otherPlayer.play("Idle");
        }

        return otherPlayer;
    }

    // Update other player's position and animation
    private updateOtherPlayer(id: string, playerInfo: any): void {
        const otherPlayer = this.otherPlayers[id];
        if (!otherPlayer) {
            console.log(`Player ${id} not found in otherPlayers!`);
            return;
        }

        // Update position
        otherPlayer.setPosition(playerInfo.x, playerInfo.y);

        // Smoothly move the player to the new position
        this.tweens.add({
            targets: otherPlayer,
            x: playerInfo.x,
            y: playerInfo.y,
            duration: 80,
            ease: "Linear",
        });

        // Update flip X based on velocity or provided flipX
        if (playerInfo.flipX !== undefined) {
            otherPlayer.setFlipX(playerInfo.flipX);
        } else if (
            playerInfo.velocityX !== undefined &&
            playerInfo.velocityX !== 0
        ) {
            otherPlayer.setFlipX(playerInfo.velocityX < 0);
        }

        // Handle attack state
        const wasAttacking = otherPlayer.getData("isAttacking") === true;

        // Update attack state data if provided
        if (playerInfo.isAttacking !== undefined) {
            otherPlayer.setData("isAttacking", playerInfo.isAttacking);
        }

        // Handle animation changes
        if (playerInfo.animation) {
            const currentAnim = otherPlayer.anims.currentAnim?.key || "";
            const newAnim = playerInfo.animation;

            // Detect animation changes
            const isNewAttack = newAnim.includes("_Attack");
            const isNewIdle = newAnim.includes("_Idle");
            const isCurrentAttack = currentAnim.includes("_Attack");

            // Special case: Always force exit from attack to idle
            if (wasAttacking && playerInfo.isAttacking === false) {
                // If we were attacking but now we're not, immediately go to idle
                otherPlayer.play("_Idle_Idle");
                console.log(`Player ${id} forced to idle after attack ended`);
            }
            // Case 1: Starting a new attack - always allow this
            else if (isNewAttack && !isCurrentAttack) {
                otherPlayer.play(newAnim);

                // Set up auto-transition to idle when attack animation completes
                otherPlayer.once("animationcomplete", () => {
                    // Only transition to idle if we're still in the same attack animation
                    if (otherPlayer.anims.currentAnim?.key === newAnim) {
                        otherPlayer.play("_Idle_Idle");
                        console.log(
                            `Attack animation completed for player ${id}, auto-transitioning to idle`
                        );
                    }
                });
            }
            // Case 2: Regular animation transitions (not attacks)
            else if (!isCurrentAttack && currentAnim !== newAnim) {
                // Only change non-attack animations if we're not in the middle of an attack
                otherPlayer.play(newAnim);
            }
        }

        // Update the name tag position
        const nameTag = otherPlayer.getData("nameTag");
        if (nameTag) {
            nameTag.setPosition(
                playerInfo.x + otherPlayer.displayWidth / 2,
                playerInfo.y - 20
            );
        }
    }

    // NEW: Add a helper method to refresh the UI camera ignore list
    private refreshUICameraIgnoreList(): void {
        if (!this.uiCamera) return;

        // Make sure UI camera ignores all other player sprites and their name tags
        Object.values(this.otherPlayers).forEach((otherPlayer) => {
            this.uiCamera.ignore(otherPlayer);

            const nameTag = otherPlayer.getData("nameTag");
            if (nameTag) {
                this.uiCamera.ignore(nameTag);
            }
        });
    }

    // Clean up when scene is shut down
    shutdown() {
        // Clean up stamina manager resources
        if (this.staminaManager) {
            this.staminaManager.destroy();
        }

        // Clean up the UI camera
        if (this.uiCamera) {
            this.uiCamera.destroy();
        }

        // Clean up the timer when the scene is shut down
        if (this.matchTimerEvent) {
            this.matchTimerEvent.remove();
            this.matchTimerEvent = null;
        }

        // Remove the event listener when the scene is shut down
        if (this.preventDefaultHandler) {
            window.removeEventListener("keydown", this.preventDefaultHandler);
            this.preventDefaultHandler = null;
        }

        // Disconnect from socket server
        if (this.socket && this.socket.connected) {
            this.socket.disconnect();
        }

        // Clean up socket event listeners
        this.socket.off("currentPlayers");
        this.socket.off("newPlayer");
        this.socket.off("playerDisconnected");
        this.socket.off("playerMoved");

        // Clean up all other player sprites
        Object.values(this.otherPlayers).forEach((player) => {
            const nameTag = player.getData("nameTag");
            if (nameTag) nameTag.destroy();
            player.destroy();
        });
        this.otherPlayers = {};
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

