import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Box, Typography, useTheme } from "@mui/material";

export default function HeroSection() {
  const theme = useTheme();
  const containerRef = useRef(null);

  const mixerRef = useRef(null);
  const actionsRef = useRef([]);
  const rootRef = useRef(null);
  const clock = useRef(new THREE.Clock());

  const explodedRef = useRef(false);
  const [loaded, setLoaded] = useState(false);

  // Color refs for transitions
  const sceneRef = useRef(null);
  const backgroundColorRef = useRef(new THREE.Color());
  const fogRef = useRef(null);

  useEffect(() => {
    const isDark = theme.palette.mode === "dark";

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const backgroundColor = isDark ? new THREE.Color("#000000") : new THREE.Color("#D3D3D3");
    scene.background = backgroundColor;
    backgroundColorRef.current.copy(backgroundColor);

    if (!isDark) {
      const fog = new THREE.Fog("#D3D3D3", 1, 8);
      scene.fog = fog;
      fogRef.current = fog;
    }

    const container = containerRef.current;
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(1, 0.5, 3);
    camera.lookAt(-1, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(backgroundColor);
    container.appendChild(renderer.domElement);

    const spot = new THREE.SpotLight(0xffffff, 3);
    spot.position.set(0, 2, 0);
    spot.angle = Math.PI / 3;
    spot.penumbra = 0.3;
    spot.decay = 1;
    spot.distance = 20;
    spot.castShadow = true;
    scene.add(spot);
    spot.target.position.set(0, 0, 0);
    scene.add(spot.target);

    const spot2 = new THREE.SpotLight(0xffffff, 3);
    spot2.position.set(0, 2, 1);
    spot2.angle = Math.PI / 4;
    spot2.penumbra = 0.3;
    spot2.decay = 2;
    spot2.distance = 20;
    spot2.castShadow = false;
    scene.add(spot2);
    spot2.target.position.set(0, 0, 0);
    scene.add(spot2.target);

    const floorColor = isDark ? 0x333333 : 0xd0d0d0;
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.MeshStandardMaterial({ color: floorColor, roughness: 1, metalness: 0 })
    );
    floor.receiveShadow = true;
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.3;
    scene.add(floor);

    new GLTFLoader().load("/model/continent_animated.glb", (gltf) => {
      const root = gltf.scene;
      root.scale.setScalar(0.1);
      root.traverse((m) => {
        if (m.isMesh) {
          m.castShadow = true;
          m.receiveShadow = true;
        }
      });
      scene.add(root);
      rootRef.current = root;

      const mixer = new THREE.AnimationMixer(root);
      mixerRef.current = mixer;

      actionsRef.current = gltf.animations.map((clip) => {
        const a = mixer.clipAction(clip);
        a.clampWhenFinished = true;
        a.setLoop(THREE.LoopOnce);
        a.play();
        a.paused = true;
        return a;
      });

      setLoaded(true);
    });

    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    const targetRot = { x: 0, y: 0 };
    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetRot.x = -ny * 0.2;
      targetRot.y = nx * 0.4;
    };

    const playDir = (dir) => {
      actionsRef.current.forEach((a) => {
        a.timeScale = dir;
        a.paused = false;
      });
      explodedRef.current = dir === 1;
    };

    const onEnter = () => {
      if (!explodedRef.current) playDir(+1);
    };
    const onLeave = () => {
      if (explodedRef.current) playDir(-1);
    };

    container.addEventListener("pointerover", onEnter);
    container.addEventListener("pointerout", onLeave);
    container.addEventListener("pointermove", onMove);

    let raf;
    const animate = () => {
      raf = requestAnimationFrame(animate);

      const dt = clock.current.getDelta();
      if (mixerRef.current) mixerRef.current.update(dt);

      if (rootRef.current) {
        rootRef.current.rotation.x = THREE.MathUtils.lerp(
          rootRef.current.rotation.x,
          targetRot.x,
          0.1
        );
        rootRef.current.rotation.y = THREE.MathUtils.lerp(
          rootRef.current.rotation.y,
          targetRot.y,
          0.1
        );
      }

      // Smooth background color transition
      const desiredBg = new THREE.Color(theme.palette.mode === "dark" ? "#000000" : "#D3D3D3");
      backgroundColorRef.current.lerp(desiredBg, 0.003);
      scene.background = backgroundColorRef.current;
      renderer.setClearColor(backgroundColorRef.current);

      // Animate fog color (light mode only)
      if (theme.palette.mode === "light" && fogRef.current) {
        fogRef.current.color.lerp(new THREE.Color("#D3D3D3"), 0.05);
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("pointerover", onEnter);
      container.removeEventListener("pointerout", onLeave);
      container.removeEventListener("pointermove", onMove);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [theme]);

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      <Box
        sx={{
          position: "absolute",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "space-between", md: "center" },
          textAlign: { xs: "center", md: "left" },
          height: "100%",
          width: { xs: "100%", md: "50%" },
          py: { xs: 10, md: 20 },
          pl: { md: 10 },
          pr: { xs: 4, md: 0 },
        }}
      >
        <Typography
          component="h1"
          sx={(theme) => ({
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            fontWeight: "bold",
            mb: 4,
            color: theme.palette.brand.basePink,
          })}
        >
          Template
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1.125rem", md: "1.25rem" },
            color: "inherit",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim,
          justo ac lobortis cursus, tellus nisi porta justo, in mattis risus urna
          sit amet lorem.
        </Typography>
      </Box>

      <Box ref={containerRef} sx={{ width: "100%", height: "100%" }} />
    </Box>
  );
}
