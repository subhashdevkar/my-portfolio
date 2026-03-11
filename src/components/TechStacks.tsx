import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { TECH_STACKS } from "@/constants";

const TechStacks = () => {
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const renderRef = useRef<Matter.Render | null>(null);
    const runnerRef = useRef<Matter.Runner | null>(null);

    // Force re-init on resize
    const [sceneKey, setSceneKey] = useState(0);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setSceneKey(prev => prev + 1);
            }, 500);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        if (!sceneRef.current) return;

        // Container dimensions
        const width = sceneRef.current.clientWidth;
        const height = sceneRef.current.clientHeight;

        // Determine device type for sizing
        const isMobile = width < 640;
        const isTablet = width >= 640 && width < 1024;

        // Sizing configurations
        let baseRadius = 50;
        let radiusMultiplier = 5;
        let fontSize = 14;
        const wallThickness = 500;

        if (isMobile) {
            baseRadius = 20;
            radiusMultiplier = 2.5;
            fontSize = 11;
        } else if (isTablet) {
            baseRadius = 35;
            radiusMultiplier = 3.5;
            fontSize = 12;
        }

        // Module aliases
        const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            World = Matter.World,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint,
            Composite = Matter.Composite,
            Events = Matter.Events,
            Body = Matter.Body;

        // Create engine
        const engine = Engine.create();
        const world = engine.world;
        engineRef.current = engine;

        // Create renderer
        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width,
                height,
                background: "transparent",
                wireframes: false,
                pixelRatio: window.devicePixelRatio,
            },
        });
        renderRef.current = render;

        // Create walls - INCREASED THICKNESS to prevent tunneling
        const wallOptions = {
            isStatic: true,
            render: { visible: false },
            friction: 0.1,
            restitution: 0.8
        };

        const walls = [
            Bodies.rectangle(width / 2, height + wallThickness / 2, width + 1000, wallThickness, wallOptions), // Bottom
            Bodies.rectangle(width / 2, -wallThickness / 2, width + 1000, wallThickness, wallOptions), // Top
            Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height + 1000, wallOptions), // Right
            Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height + 1000, wallOptions), // Left
        ];

        World.add(world, walls);

        // Tech stack bubbles
        const bubbles = TECH_STACKS.map((tech) => {
            const radius = Math.max(baseRadius, tech.name.length * radiusMultiplier + (isMobile ? 10 : 30));

            return Bodies.circle(
                Math.random() * (width - 200) + 100,
                Math.random() * (height - 200) + 100,
                radius,
                {
                    restitution: 0.9,
                    friction: 0.001,
                    frictionAir: 0.02, // Slow down movement slightly
                    render: {
                        fillStyle: "#ffffff", // White background for bubbles
                        strokeStyle: "#e2e8f0", // Light border
                        lineWidth: 1,
                    },
                    label: tech.name,
                }
            );
        });

        World.add(world, bubbles);

        // Add mouse control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });

        // Disable scroll capture by canvas safely
        if (mouse.element.removeEventListener) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            mouse.element.removeEventListener("wheel", (mouse as any).mousewheel);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            mouse.element.removeEventListener("DOMMouseScroll", (mouse as any).mousewheel);
        }

        World.add(world, mouseConstraint);

        // Enforce boundaries loop - Extra safety
        Events.on(engine, "beforeUpdate", () => {
            const bodies = Composite.allBodies(engine.world);
            bodies.forEach(body => {
                if (body.isStatic) return; // Skip walls

                const { x, y } = body.position;
                const buffer = 100; // Allow 100px buffer outside before teleporting

                // Use current canvas dimensions (closure capture is okay since we re-init on resize)
                if (x < -buffer || x > width + buffer || y < -buffer || y > height + buffer) {
                    Body.setPosition(body, {
                        x: Math.random() * (width - 200) + 100,
                        y: Math.random() * (height - 200) + 100
                    });
                    Body.setVelocity(body, { x: 0, y: 0 }); // Reset velocity
                }
            });
        });

        // Run the engine
        const runner = Runner.create();
        runnerRef.current = runner;
        Runner.run(runner, engine);
        Render.run(render);

        // Custom rendering for text
        Events.on(render, "afterRender", function () {
            const context = render.context;

            context.font = `500 ${fontSize}px Inter, sans-serif`;
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillStyle = "#0f172a"; // Slate-900

            bubbles.forEach((bubble) => {
                const { x, y } = bubble.position;
                context.save();
                context.translate(x, y);
                context.fillText(bubble.label, 0, 0);
                context.restore();
            });
        });

        // Cleanup
        return () => {
            Render.stop(render);
            Runner.stop(runner);
            if (render.canvas) {
                render.canvas.remove();
            }
            World.clear(world, false);
            Engine.clear(engine);
        };
    }, [sceneKey]);

    return (
        <section className="container py-24 sm:py-32 overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-linear-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Tech Stack
            </h2>
            <div
                ref={sceneRef}
                className="w-full h-[600px] border rounded-xl bg-slate-50/50 dark:bg-card/20 relative shadow-inner cursor-grab active:cursor-grabbing"
            >
                {/* Canvas will be injected here */}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
                Drag and throw the bubbles around!
            </p>
        </section>
    )
}

export default TechStacks