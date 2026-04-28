<!DOCTYPE html>



<html class="dark" lang="en"><head>

<meta charset="utf-8"/>

<meta content="width=device-width, initial-scale=1.0" name="viewport"/>

<title>MD. Shohrab Hossain | Senior Software Engineer Portfolio</title>

<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>

<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700\&amp;family=Inter:wght@300;400;500;600\&amp;display=swap" rel="stylesheet"/>

<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1\&amp;display=swap" rel="stylesheet"/>

<script id="tailwind-config">

&#x20;       tailwind.config = {

&#x20;           darkMode: "class",

&#x20;           theme: {

&#x20;               extend: {

&#x20;                   "colors": {

&#x20;                       "primary-fixed": "#74f5ff",

&#x20;                       "primary-fixed-dim": "#00dbe7",

&#x20;                       "tertiary-fixed": "#8bf2ff",

&#x20;                       "inverse-surface": "#e0e2ea",

&#x20;                       "surface-container-highest": "#31353b",

&#x20;                       "inverse-primary": "#00696f",

&#x20;                       "inverse-on-surface": "#2d3136",

&#x20;                       "secondary-container": "#0266ff",

&#x20;                       "tertiary": "#e4fcff",

&#x20;                       "on-primary-fixed-variant": "#004f54",

&#x20;                       "on-tertiary-fixed": "#001f23",

&#x20;                       "on-error": "#690005",

&#x20;                       "surface-variant": "#31353b",

&#x20;                       "surface-container-lowest": "#0a0e13",

&#x20;                       "tertiary-fixed-dim": "#43d9e9",

&#x20;                       "primary-container": "#00f2ff",

&#x20;                       "outline": "#849495",

&#x20;                       "on-error-container": "#ffdad6",

&#x20;                       "surface-container-high": "#262a30",

&#x20;                       "surface-container-low": "#181c21",

&#x20;                       "on-primary-container": "#006a71",

&#x20;                       "secondary": "#b3c5ff",

&#x20;                       "on-tertiary-fixed-variant": "#004f56",

&#x20;                       "on-tertiary-container": "#006a73",

&#x20;                       "error": "#ffb4ab",

&#x20;                       "secondary-fixed-dim": "#b3c5ff",

&#x20;                       "background": "#0b0f14",

&#x20;                       "surface": "#0b0f14",

&#x20;                       "secondary-fixed": "#dae1ff",

&#x20;                       "on-primary": "#00363a",

&#x20;                       "on-secondary-fixed": "#001849",

&#x20;                       "surface-dim": "#0b0f14",

&#x20;                       "on-secondary-container": "#f9f7ff",

&#x20;                       "on-surface": "#e0e2ea",

&#x20;                       "on-secondary": "#002b75",

&#x20;                       "tertiary-container": "#5feefe",

&#x20;                       "on-secondary-fixed-variant": "#003fa4",

&#x20;                       "error-container": "#93000a",

&#x20;                       "on-background": "#e0e2ea",

&#x20;                       "on-surface-variant": "#b9cacb",

&#x20;                       "on-tertiary": "#00363b",

&#x20;                       "surface-tint": "#00dbe7",

&#x20;                       "surface-container": "#1c2025",

&#x20;                       "primary": "#e1fdff",

&#x20;                       "outline-variant": "#3a494b",

&#x20;                       "on-primary-fixed": "#002022",

&#x20;                       "surface-bright": "#36393f"

&#x20;                   },

&#x20;                   "borderRadius": {

&#x20;                       "DEFAULT": "0.25rem",

&#x20;                       "lg": "0.5rem",

&#x20;                       "xl": "0.75rem",

&#x20;                       "full": "9999px"

&#x20;                   },

&#x20;                   "spacing": {

&#x20;                       "margin-page": "64px",

&#x20;                       "gutter": "24px",

&#x20;                       "section-gap": "128px",

&#x20;                       "container-max": "1200px",

&#x20;                       "unit": "8px"

&#x20;                   },

&#x20;                   "fontFamily": {

&#x20;                       "code": \["monospace"],

&#x20;                       "body-md": \["Inter"],

&#x20;                       "h3": \["Space Grotesk"],

&#x20;                       "h1": \["Space Grotesk"],

&#x20;                       "body-lg": \["Inter"],

&#x20;                       "h2": \["Space Grotesk"],

&#x20;                       "label-caps": \["Space Grotesk"]

&#x20;                   },

&#x20;                   "fontSize": {

&#x20;                       "code": \["14px", {"lineHeight": "1.5", "fontWeight": "400"}],

&#x20;                       "body-md": \["16px", {"lineHeight": "1.6", "fontWeight": "400"}],

&#x20;                       "h3": \["32px", {"lineHeight": "1.3", "letterSpacing": "0", "fontWeight": "600"}],

&#x20;                       "h1": \["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],

&#x20;                       "body-lg": \["18px", {"lineHeight": "1.6", "fontWeight": "400"}],

&#x20;                       "h2": \["48px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],

&#x20;                       "label-caps": \["14px", {"lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "500"}]

&#x20;                   }

&#x20;               }

&#x20;           }

&#x20;       }

&#x20;   </script>

<style>

&#x20;       html { scroll-behavior: smooth; }

&#x20;       .glass-card {

&#x20;           background: rgba(22, 27, 34, 0.7);

&#x20;           backdrop-filter: blur(12px);

&#x20;           border: 1px solid rgba(116, 245, 255, 0.1);

&#x20;       }

&#x20;       .glass-card:hover {

&#x20;           border-color: rgba(116, 245, 255, 0.4);

&#x20;           box-shadow: 0 0 30px rgba(0, 242, 255, 0.08);

&#x20;       }

&#x20;       .gradient-text {

&#x20;           background: linear-gradient(90deg, #74f5ff, #0266ff);

&#x20;           -webkit-background-clip: text;

&#x20;           -webkit-text-fill-color: transparent;

&#x20;       }

&#x20;       .glow-button {

&#x20;           box-shadow: 0 0 15px rgba(0, 219, 231, 0.2);

&#x20;       }

&#x20;       .glow-button:hover {

&#x20;           box-shadow: 0 0 25px rgba(0, 219, 231, 0.4);

&#x20;       }

&#x20;       .timeline-gradient {

&#x20;           background: linear-gradient(to bottom, transparent, #00dbe7, transparent);

&#x20;       }

&#x20;       .progress-bar-fill {

&#x20;           transition: width 1.5s cubic-bezier(0.65, 0, 0.35, 1);

&#x20;       }

&#x20;       .skill-group:hover .progress-bar-fill {

&#x20;           filter: brightness(1.2);

&#x20;       }

&#x20;   </style>

</head>

<body class="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container">

<!-- TopNavBar -->

<nav class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 h-20">

<div class="flex justify-between items-center max-w-7xl mx-auto px-8 h-full">

<div class="text-2xl font-black tracking-tighter text-white uppercase font-\['Space\_Grotesk']">SHOHRAB</div>

<div class="hidden lg:flex items-center gap-6 font-\['Space\_Grotesk'] uppercase tracking-widest text-\[10px] font-bold">

<a class="text-cyan-400 border-b-2 border-cyan-400 pb-1 hover:text-cyan-300 transition-all" href="#home">Home</a>

<a class="text-slate-400 hover:text-cyan-300 transition-all" href="#about">About</a>

<a class="text-slate-400 hover:text-cyan-300 transition-all" href="#skills">Skills</a>

<a class="text-slate-400 hover:text-cyan-300 transition-all" href="#experience">Experience</a>

<a class="text-slate-400 hover:text-cyan-300 transition-all" href="#projects">Projects</a>

<a class="text-slate-400 hover:text-cyan-300 transition-all" href="#education">Education</a>

<a class="text-slate-400 hover:text-cyan-300 transition-all" href="#contact">Contact</a>

</div>

<button class="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold uppercase text-\[10px] tracking-widest hover:scale-105 active:scale-95 transition-all">Resume</button>

</div>

</nav>

<main class="relative">

<!-- Hero Section -->

<section class="min-h-screen flex flex-col items-center justify-center pt-32 px-gutter relative overflow-hidden" id="home">

<div class="absolute inset-0 z-0 bg-\[radial-gradient(circle\_at\_50%\_50%,rgba(0,219,231,0.05),transparent\_70%)]"></div>

<div class="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">

<div class="md:col-span-7">

<div class="inline-block px-4 py-1 rounded-full border border-primary-fixed/20 bg-primary-fixed/5 text-primary-fixed text-label-caps mb-6">AVAILABLE FOR NEW OPPORTUNITIES</div>

<h1 class="font-h1 text-h1 text-on-surface mb-6 leading-tight">

&#x20;                   Building Scalable and <br/>

<span class="gradient-text">High-Performance</span> <br/>

&#x20;                   Applications

&#x20;               </h1>

<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed">

&#x20;                   Senior Software Engineer specializing in the MERN stack. I design and build mission-critical scalable systems and high-concurrency mobile applications that deliver exceptional user experiences.

&#x20;               </p>

<div class="flex flex-wrap gap-6 mb-12">

<a class="glow-button bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95" href="#projects">View Projects</a>

<a class="border border-outline-variant hover:border-primary-fixed text-on-surface px-8 py-4 rounded-xl font-bold transition-all hover:bg-surface-container-low" href="#">Download Resume</a>

</div>

<div class="flex gap-6 items-center">

<span class="text-label-caps text-outline uppercase">Connect</span>

<div class="w-12 h-\[1px] bg-outline-variant"></div>

<a class="text-on-surface hover:text-primary-fixed transition-colors flex items-center gap-2" href="#"><span class="material-symbols-outlined text-lg">terminal</span> <span class="text-xs font-bold uppercase tracking-widest">GitHub</span></a>

<a class="text-on-surface hover:text-primary-fixed transition-colors flex items-center gap-2" href="#"><span class="material-symbols-outlined text-lg">hub</span> <span class="text-xs font-bold uppercase tracking-widest">LinkedIn</span></a>

</div>

</div>

<div class="md:col-span-5 relative group">

<div class="absolute -inset-4 bg-primary-fixed/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>

<div class="relative rounded-\[2.5rem] overflow-hidden border border-primary-fixed/30 aspect-\[4/5] shadow-\[0\_0\_50px\_-12px\_rgba(0,242,255,0.3)] bg-surface-container-low">

<img class="w-full h-full object-cover grayscale-\[20%] hover:grayscale-0 transition-all duration-700" data-alt="Portrait of MD. Shohrab Hossain" src="https://lh3.googleusercontent.com/aida/ADBb0ujKtXjU7w7PQ4icyxOoOitujaCVniM9WnFR\_fPa0ioye0hO9zIfp8JRxYMuotFAYs2J6UkKP71WMjt8ZHi3k6poc6du1O7HQpDM6J780NAJVCT5QUPb-KWANbYpYWOSwbBTmxBKw4uUE4XnhSxc4ZwkMiiNzePjDz7dth32cWpmX9DHOHVKkPvxUaY88YM5sTyxV4lkV1ZUwJjN7QY-KOKzfoL53vxVELBmd-uxDchxi8a-fTr8vW4Q87E\_N5KkKQWzsN-0kjO2"/>

</div>

<!-- Floating Tech Icons -->

<div class="absolute -top-6 -right-6 w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg animate-bounce duration-\[3000ms] z-20">

<span class="text-\[10px] font-bold text-primary-fixed leading-none text-center uppercase tracking-tighter">Node<br/>JS</span>

</div>

<div class="absolute top-1/2 -left-10 w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg animate-pulse duration-\[4000ms] z-20">

<span class="text-\[10px] font-bold text-secondary leading-none text-center uppercase tracking-tighter">Type<br/>Script</span>

</div>

<div class="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg animate-bounce duration-\[3500ms] z-20">

<span class="text-\[10px] font-bold text-tertiary-fixed-dim leading-none text-center uppercase tracking-tighter">Graph<br/>QL</span>

</div>

<div class="absolute bottom-1/4 -right-8 w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg animate-pulse duration-\[2500ms] z-20">

<span class="material-symbols-outlined text-primary-container text-xl">psychology</span>

</div>

</div>

</div>

</section>

<!-- About Section -->

<section class="py-section-gap bg-surface-container-lowest" id="about">

<div class="max-w-7xl mx-auto px-8">

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div>

<span class="font-label-caps text-primary-fixed uppercase tracking-\[0.2em] mb-4 block">Background</span>

<h2 class="font-h2 text-h2 text-white mb-8 leading-tight">Driven by Engineering Excellence</h2>

<div class="space-y-6 text-on-surface-variant font-body-md text-body-lg">

<p>I am a Software Engineer based in Bangladesh with a relentless drive for building high-performance web and mobile applications. My journey started with a fascination for computer architecture, evolving into a career dedicated to the MERN stack.</p>

<p>Specializing in Node.js and React, I have successfully engineered scalable architectures for fintech, e-commerce, and enterprise SaaS platforms. I thrive on solving complex concurrency problems and optimizing system latency.</p>

<p>Beyond the code, I am passionate about creating user-centric designs that make complex systems feel intuitive. My experience with React Native allows me to bridge the gap between web and mobile seamlessly.</p>

</div>

</div>

<div class="grid grid-cols-2 gap-6">

<div class="glass-card p-8 rounded-2xl text-center">

<div class="text-primary-fixed text-h2 font-h1 mb-2">4+</div>

<div class="font-label-caps text-outline uppercase text-xs">Years Professional Experience</div>

</div>

<div class="glass-card p-8 rounded-2xl text-center">

<div class="text-primary-fixed text-h2 font-h1 mb-2">20+</div>

<div class="font-label-caps text-outline uppercase text-xs">Complex Projects Delivered</div>

</div>

<div class="glass-card p-8 rounded-2xl text-center">

<div class="text-primary-fixed text-h2 font-h1 mb-2">MERN</div>

<div class="font-label-caps text-outline uppercase text-xs">Core Specialization</div>

</div>

<div class="glass-card p-8 rounded-2xl text-center">

<div class="text-primary-fixed text-h2 font-h1 mb-2">99%</div>

<div class="font-label-caps text-outline uppercase text-xs">Code Quality \&amp; Stability</div>

</div>

</div>

</div>

</div>

</section>

<!-- Skills Section -->

<section class="py-section-gap px-8" id="skills">

<div class="max-w-7xl mx-auto">

<div class="text-center mb-16">

<span class="font-label-caps text-primary-fixed uppercase tracking-\[0.2em] mb-4 block">Technical Expertise</span>

<h2 class="font-h2 text-h2 text-white">Full-Stack Capabilities</h2>

</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<!-- Frontend -->

<div class="glass-card p-8 rounded-3xl skill-group border-t-2 border-primary-fixed/30">

<div class="mb-6 flex items-center justify-between">

<span class="material-symbols-outlined text-3xl text-primary-fixed">desktop\_windows</span>

<span class="font-label-caps text-xs text-primary-fixed">Frontend</span>

</div>

<div class="space-y-6">

<div>

<div class="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>React / Next.js</span><span>95%</span></div>

<div class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div class="h-full bg-primary-container progress-bar-fill w-\[95%]"></div></div>

</div>

<div>

<div class="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>Tailwind CSS</span><span>98%</span></div>

<div class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div class="h-full bg-primary-container progress-bar-fill w-\[98%]"></div></div>

</div>

<div>

<div class="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>TypeScript</span><span>90%</span></div>

<div class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div class="h-full bg-primary-container progress-bar-fill w-\[90%]"></div></div>

</div>

</div>

</div>

<!-- Backend -->

<div class="glass-card p-8 rounded-3xl skill-group border-t-2 border-secondary-container/30">

<div class="mb-6 flex items-center justify-between">

<span class="material-symbols-outlined text-3xl text-secondary">terminal</span>

<span class="font-label-caps text-xs text-secondary">Backend</span>

</div>

<div class="space-y-6">

<div>

<div class="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>Node / Express</span><span>92%</span></div>

<div class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div class="h-full bg-secondary-container progress-bar-fill w-\[92%]"></div></div>

</div>

<div>

<div class="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>GraphQL / Apollo</span><span>85%</span></div>

<div class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div class="h-full bg-secondary-container progress-bar-fill w-\[85%]"></div></div>

</div>

<div>

<div class="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>REST APIs</span><span>95%</span></div>

<div class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div class="h-full bg-secondary-container progress-bar-fill w-\[95%]"></div></div>

</div>

</div>

</div>

<!-- Database -->

<div class="glass-card p-8 rounded-3xl skill-group border-t-2 border-tertiary-fixed/30">

<div class="mb-6 flex items-center justify-between">

<span class="material-symbols-outlined text-3xl text-tertiary-fixed-dim">database</span>

<span class="font-label-caps text-xs text-tertiary-fixed-dim">Database</span>

</div>

<div class="space-y-6">

<div>

<div class="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>MongoDB</span><span>90%</span></div>

<div class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div class="h-full bg-tertiary-container progress-bar-fill w-\[90%]"></div></div>

</div>

<div>

<div class="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>PostgreSQL</span><span>80%</span></div>

<div class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div class="h-full bg-tertiary-container progress-bar-fill w-\[80%]"></div></div>

</div>

<div>

<div class="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>Redis Cache</span><span>75%</span></div>

<div class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div class="h-full bg-tertiary-container progress-bar-fill w-\[75%]"></div></div>

</div>

</div>

</div>

<!-- Tools/DevOps -->

<div class="glass-card p-8 rounded-3xl skill-group border-t-2 border-primary-fixed-dim/30">

<div class="mb-6 flex items-center justify-between">

<span class="material-symbols-outlined text-3xl text-primary-fixed-dim">settings</span>

<span class="font-label-caps text-xs text-primary-fixed-dim">Tools</span>

</div>

<div class="space-y-6">

<div>

<div class="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>Docker / AWS</span><span>75%</span></div>

<div class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div class="h-full bg-primary-fixed-dim progress-bar-fill w-\[75%]"></div></div>

</div>

<div>

<div class="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>Firebase / GCP</span><span>88%</span></div>

<div class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div class="h-full bg-primary-fixed-dim progress-bar-fill w-\[88%]"></div></div>

</div>

<div>

<div class="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>CI/CD Pipelines</span><span>82%</span></div>

<div class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div class="h-full bg-primary-fixed-dim progress-bar-fill w-\[82%]"></div></div>

</div>

</div>

</div>

</div>

</div>

</section>

<!-- Experience Section -->

<section class="py-section-gap bg-surface-container-low relative" id="experience">

<div class="max-w-5xl mx-auto px-8 relative">

<div class="text-center mb-20">

<span class="font-label-caps text-primary-fixed uppercase tracking-\[0.2em] mb-4 block">Professional Journey</span>

<h2 class="font-h2 text-h2 text-white">Experience</h2>

</div>

<div class="absolute left-1/2 top-\[220px] bottom-10 w-px timeline-gradient hidden md:block"></div>

<div class="space-y-16">

<!-- Infinisoft -->

<div class="flex flex-col md:flex-row gap-12 items-start relative">

<div class="flex-1 md:text-right">

<div class="inline-block px-4 py-1 rounded-full bg-primary-container/10 text-primary-container text-\[10px] font-bold uppercase mb-4">JAN 2022 - PRESENT</div>

<h3 class="font-h3 text-h3 text-white mb-1">Senior Software Engineer</h3>

<div class="text-primary-fixed-dim font-bold text-sm mb-6 uppercase tracking-widest">Infinisoft Solutions</div>

<ul class="text-on-surface-variant font-body-md space-y-2 md:inline-block text-left">

<li class="flex items-start gap-2"><span class="text-primary-fixed mt-1">•</span> Architected high-performance MERN applications for enterprise clients.</li>

<li class="flex items-start gap-2"><span class="text-primary-fixed mt-1">•</span> Reduced server latency by 40% through optimized database indexing.</li>

<li class="flex items-start gap-2"><span class="text-primary-fixed mt-1">•</span> Led a team of 5 developers in implementing mission-critical features.</li>

</ul>

</div>

<div class="absolute left-1/2 top-4 -translate-x-1/2 z-10 hidden md:block">

<div class="w-4 h-4 rounded-full bg-primary-container shadow-\[0\_0\_15px\_rgba(0,242,255,0.8)] border-4 border-slate-950"></div>

</div>

<div class="flex-1"></div>

</div>

<!-- Codethinker -->

<div class="flex flex-col md:flex-row gap-12 items-start relative">

<div class="flex-1"></div>

<div class="absolute left-1/2 top-4 -translate-x-1/2 z-10 hidden md:block">

<div class="w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-950"></div>

</div>

<div class="flex-1">

<div class="inline-block px-4 py-1 rounded-full bg-surface-container-highest text-outline text-\[10px] font-bold uppercase mb-4">JUNE 2020 - DEC 2021</div>

<h3 class="font-h3 text-h3 text-white mb-1">Software Developer</h3>

<div class="text-primary-fixed-dim font-bold text-sm mb-6 uppercase tracking-widest">Codethinker Ltd.</div>

<ul class="text-on-surface-variant font-body-md space-y-2">

<li class="flex items-start gap-2"><span class="text-primary-fixed mt-1">•</span> Developed and maintained 10+ web and mobile applications.</li>

<li class="flex items-start gap-2"><span class="text-primary-fixed mt-1">•</span> Integrated third-party payment gateways and real-time notification systems.</li>

<li class="flex items-start gap-2"><span class="text-primary-fixed mt-1">•</span> Streamlined development workflows using CI/CD and Docker.</li>

</ul>

</div>

</div>

</div>

</div>

</section>

<!-- Projects Section -->

<section class="py-section-gap px-8" id="projects">

<div class="max-w-7xl mx-auto">

<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">

<div>

<span class="font-label-caps text-primary-fixed uppercase tracking-\[0.2em] mb-4 block">Portfolio</span>

<h2 class="font-h2 text-h2 text-white">Featured Projects</h2>

</div>

<a class="text-primary-fixed hover:text-white transition-colors flex items-center gap-2 group text-xs font-bold tracking-widest uppercase" href="#">

&#x20;                   VIEW ALL REPOS <span class="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow\_right\_alt</span>

</a>

</div>

<div class="grid grid-cols-1 md:grid-cols-12 gap-8">

<!-- Project 1 -->

<div class="md:col-span-12 glass-card rounded-3xl overflow-hidden group">

<div class="grid grid-cols-1 md:grid-cols-2">

<div class="h-\[350px] overflow-hidden relative">

<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Event Management Dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq3WQKOBSV8veVEzVC3w24XE-\_YlNlZsT6SXiNlxUwRyvWKcb5ZpbP0je5\_Oi6z3Mblt90QSQR2XSVgmpi6RWhCbSLJAsjnRG2pcY0Biwgp9rCEkox7gGEXo84zPxe6noTiLe2FA1y0wV9gAt2YbJwRWkIiI7hq7BQolq3HLkfB5lVXhP8jB20MnY8IuV2\_AUoT15d-YYx6RQJPX5nld5uqEGvuj2leVDOiFGT2CuO3cfPfSsV4ch3xGfsr\_YQAMpCGWw0N-D\_-Og"/>

<div class="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors"></div>

</div>

<div class="p-10 flex flex-col justify-center">

<div class="flex gap-2 mb-6">

<span class="px-2 py-0.5 bg-primary-fixed/10 text-primary-fixed rounded-full text-\[10px] font-bold">NODE.JS</span>

<span class="px-2 py-0.5 bg-primary-fixed/10 text-primary-fixed rounded-full text-\[10px] font-bold">MONGODB</span>

<span class="px-2 py-0.5 bg-primary-fixed/10 text-primary-fixed rounded-full text-\[10px] font-bold">EXPRESS</span>

</div>

<h3 class="font-h2 text-h3 text-white mb-4">Event Management API</h3>

<p class="text-on-surface-variant font-body-md mb-8">A robust backend infrastructure supporting large-scale event registration and management with real-time seat tracking and secure payment processing.</p>

<div class="flex gap-4">

<button class="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:shadow-\[0\_0\_20px\_rgba(0,242,255,0.4)]">View Details</button>

<button class="p-2.5 border border-outline-variant rounded-xl hover:bg-surface-container-high transition-colors"><span class="material-symbols-outlined text-sm">launch</span></button>

</div>

</div>

</div>

</div>

<!-- Project 2 -->

<div class="md:col-span-6 glass-card rounded-3xl overflow-hidden group">

<div class="h-60 overflow-hidden">

<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Backend Blog App" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr9UBQvIBrE\_LdHGMS1RVl6SaPV1a29CQwqx9TBn63oPnnEpnZTLpvNt84AgnprzAt\_5Ga6mCiNSWLG6iRc3\_2\_-mJ49ym\_vnVxyNVLP3IrOPHdtUPg3vum4PnY0UrBRjILLC798TtUy0\_bZH6m8AxAtW8m8xziZTew03mPQbAV0vdsyFNlBM5XlQRM9FPrq0sZx\_U743RX\_E0v5dV7qcraCVY6QVjLrRWXX1kBVE9lniXSx-ou1uxjY0F16UrE60ozCZo72JN8mo"/>

</div>

<div class="p-8">

<div class="flex gap-2 mb-4">

<span class="px-2 py-0.5 bg-secondary/10 text-secondary rounded-full text-\[10px] font-bold">TYPESCRIPT</span>

<span class="px-2 py-0.5 bg-secondary/10 text-secondary rounded-full text-\[10px] font-bold">REDIS</span>

</div>

<h3 class="font-h3 text-2xl text-white mb-4">Backend Blog Platform</h3>

<p class="text-on-surface-variant font-body-md mb-6">High-performance blogging engine with Redis caching, advanced search capabilities, and automated content moderation.</p>

<button class="text-primary-fixed font-bold text-xs uppercase tracking-widest flex items-center gap-2 group/btn">DETAILS <span class="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow\_forward</span></button>

</div>

</div>

<!-- Project 3 -->

<div class="md:col-span-6 glass-card rounded-3xl overflow-hidden group">

<div class="h-60 overflow-hidden">

<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="React Redux App" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlTqmSgk6-KqvGA4cfE-ND3psrnRaI10OfQvOQP0ipgtflpiCLu28RgR5UYBNViUD971HhqWv8PF5FYdbRDv8vxUR-v6kgGFYh1rHFJ9k-HSYItSrDO3dutszYWHXRdkXb1ekYzmYhWAXviGXvi9SMGMa4d5fUMsAQnElb03\_A2dYmxU9NqO3YUh9UhVzxYHjpiEc1dihexxkUaEvcoSFmX5F\_x-m3AU6CUHDBYBJOKAoA1Orwqv-gQEqAIAfKj0TzjL0TSLVOwLU"/>

</div>

<div class="p-8">

<div class="flex gap-2 mb-4">

<span class="px-2 py-0.5 bg-tertiary-fixed/10 text-tertiary-fixed-dim rounded-full text-\[10px] font-bold">REACT</span>

<span class="px-2 py-0.5 bg-tertiary-fixed/10 text-tertiary-fixed-dim rounded-full text-\[10px] font-bold">REDUX</span>

</div>

<h3 class="font-h3 text-2xl text-white mb-4">Inventory Control Dashboard</h3>

<p class="text-on-surface-variant font-body-md mb-6">Complex state-managed dashboard for inventory logistics with real-time data visualization and offline support.</p>

<button class="text-primary-fixed font-bold text-xs uppercase tracking-widest flex items-center gap-2 group/btn">DETAILS <span class="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow\_forward</span></button>

</div>

</div>

</div>

</div>

</section>

<!-- Education \& Certifications -->

<section class="py-section-gap bg-surface-container-lowest" id="education">

<div class="max-w-7xl mx-auto px-8">

<div class="grid grid-cols-1 md:grid-cols-2 gap-16">

<div>

<span class="font-label-caps text-primary-fixed uppercase tracking-\[0.2em] mb-4 block">Academic</span>

<h2 class="font-h2 text-h2 text-white mb-8">Education</h2>

<div class="glass-card p-8 rounded-3xl relative overflow-hidden group">

<div class="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">

<span class="material-symbols-outlined text-6xl">school</span>

</div>

<div class="text-primary-container font-bold text-xs uppercase tracking-widest mb-2">Graduated</div>

<h3 class="font-h3 text-2xl text-white mb-2">B.Sc. in Computer Science \&amp; Engineering</h3>

<p class="text-on-surface-variant mb-4">Bangladesh University, Dhaka</p>

<p class="text-sm text-outline">Focused on Algorithm Analysis, Database Management Systems, and Software Design Patterns.</p>

</div>

</div>

<div>

<span class="font-label-caps text-secondary uppercase tracking-\[0.2em] mb-4 block">Credentials</span>

<h2 class="font-h2 text-h2 text-white mb-8">Certifications</h2>

<div class="space-y-4">

<div class="glass-card p-6 rounded-2xl flex items-center gap-6 group">

<div class="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">

<span class="material-symbols-outlined">workspace\_premium</span>

</div>

<div>

<h4 class="text-white font-bold">MERN Full Stack Development</h4>

<p class="text-xs text-outline uppercase tracking-widest">Ostad — Professional Certification</p>

</div>

</div>

<div class="glass-card p-6 rounded-2xl flex items-center gap-6 group">

<div class="w-12 h-12 rounded-xl bg-primary-fixed/10 flex items-center justify-center text-primary-fixed group-hover:scale-110 transition-transform">

<span class="material-symbols-outlined">verified</span>

</div>

<div>

<h4 class="text-white font-bold">Modern JavaScript (ES6+)</h4>

<p class="text-xs text-outline uppercase tracking-widest">Udemy — Advanced Level</p>

</div>

</div>

</div>

</div>

</div>

</div>

</section>

<!-- Contact Section -->

<section class="py-section-gap px-8" id="contact">

<div class="max-w-7xl mx-auto">

<div class="grid grid-cols-1 md:grid-cols-2 gap-16">

<div>

<span class="font-label-caps text-primary-fixed uppercase tracking-\[0.2em] mb-4 block">Let's Connect</span>

<h2 class="font-h2 text-h2 text-white mb-8 leading-tight">Ready to start your next project?</h2>

<p class="text-on-surface-variant font-body-lg mb-12">I'm always open to discussing new opportunities, creative ideas, or architectural visions. Reach out and let's build something exceptional.</p>

<div class="space-y-6">

<div class="flex items-center gap-6 glass-card p-6 rounded-2xl group hover:-translate-x-2 transition-all">

<div class="w-12 h-12 rounded-xl bg-primary-fixed/10 flex items-center justify-center text-primary-fixed"><span class="material-symbols-outlined">mail</span></div>

<div><div class="text-\[10px] font-bold text-outline uppercase tracking-widest mb-1">EMAIL</div><div class="text-white font-bold">contact@shohrab.dev</div></div>

</div>

<div class="flex items-center gap-6 glass-card p-6 rounded-2xl group hover:-translate-x-2 transition-all">

<div class="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center text-secondary"><span class="material-symbols-outlined">call</span></div>

<div><div class="text-\[10px] font-bold text-outline uppercase tracking-widest mb-1">PHONE</div><div class="text-white font-bold">+880 1234 567890</div></div>

</div>

<div class="flex items-center gap-6 glass-card p-6 rounded-2xl group hover:-translate-x-2 transition-all">

<div class="w-12 h-12 rounded-xl bg-tertiary-fixed/10 flex items-center justify-center text-tertiary-fixed-dim"><span class="material-symbols-outlined">location\_on</span></div>

<div><div class="text-\[10px] font-bold text-outline uppercase tracking-widest mb-1">LOCATION</div><div class="text-white font-bold">Dhaka, Bangladesh</div></div>

</div>

</div>

</div>

<div class="glass-card p-10 rounded-3xl border border-white/5 bg-surface-container-low/40">

<form class="space-y-6">

<div class="space-y-2">

<label class="text-\[10px] font-bold text-outline uppercase tracking-widest block">Name</label>

<input class="w-full bg-surface-container-high/50 border border-outline-variant rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-all placeholder:text-slate-600" placeholder="Your Name" type="text"/>

</div>

<div class="space-y-2">

<label class="text-\[10px] font-bold text-outline uppercase tracking-widest block">Email</label>

<input class="w-full bg-surface-container-high/50 border border-outline-variant rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-all placeholder:text-slate-600" placeholder="your@email.com" type="email"/>

</div>

<div class="space-y-2">

<label class="text-\[10px] font-bold text-outline uppercase tracking-widest block">Message</label>

<textarea class="w-full bg-surface-container-high/50 border border-outline-variant rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-all placeholder:text-slate-600" placeholder="Tell me about your project..." rows="4"></textarea>

</div>

<button class="w-full glow-button bg-primary-container text-on-primary-container py-4 rounded-xl font-bold uppercase tracking-\[0.2em] text-\[10px] transition-all hover:scale-\[1.02] active:scale-\[0.98]" type="submit">Send Message</button>

</form>

</div>

</div>

</div>

</section>

</main>

<!-- Footer -->

<footer class="w-full py-16 mt-32 bg-surface-container-lowest border-t border-white/5">

<div class="max-w-7xl mx-auto px-8">

<div class="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">

<div class="text-3xl font-black tracking-tighter text-white uppercase font-\['Space\_Grotesk']">SHOHRAB</div>

<div class="flex gap-8 items-center">

<a class="text-slate-500 hover:text-white transition-colors" href="#"><span class="material-symbols-outlined">terminal</span></a>

<a class="text-slate-500 hover:text-white transition-colors" href="#"><span class="material-symbols-outlined">hub</span></a>

<a class="text-slate-500 hover:text-white transition-colors" href="#"><span class="material-symbols-outlined">public</span></a>

</div>

</div>

<div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">

<div class="text-\[10px] tracking-widest uppercase font-bold text-slate-500">© 2024 MD. SHOHRAB HOSSAIN. ALL RIGHTS RESERVED.</div>

<div class="flex gap-8 text-\[10px] tracking-widest uppercase font-bold text-slate-500">

<a class="hover:text-primary-fixed transition-colors" href="#home">Back to top</a>

<a class="hover:text-primary-fixed transition-colors" href="#">Privacy Policy</a>

</div>

</div>

</div>

</footer>

</body></html>

