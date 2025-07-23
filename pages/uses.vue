<script setup lang="ts">
const uses: Use[] = [
  {
    label: "Hardware",
    items: [
      {
        title: '14" MacBook Pro, M3 Max, 128GB RAM',
        subtitle:
          "The M3 Max with 128GB RAM handles everything from local LLM inference to complex multi-container AI deployments. Perfect for running multiple AI models simultaneously while maintaining excellent performance.",
      },
      {
        title: "LG IPS 4K Ultra-wide Monitors",
        subtitle:
          "Dual ultra-wide displays provide massive screen real estate essential for managing multiple terminals, code editors, AI monitoring dashboards, and documentation simultaneously.",
      },
      {
        title: "Custom Ferris Sweep Split Keyboard",
        subtitle:
          "Ultra-minimalist 34-key split keyboard that eliminates unnecessary keys and promotes better ergonomics. The custom layout is optimized for programming symbols and Vim motions.",
      },
      {
        title: "Ploopy Adept Trackball",
        subtitle:
          "Precise pointing device that reduces wrist movement and provides consistent accuracy for detailed work. Perfect for long coding sessions and precise UI interactions.",
      },
      {
        title: "Secretlab TITAN Evo 2022",
        subtitle:
          "When you spend most of your day building AI systems, comfort is essential. This chair provides excellent support for extended development sessions.",
      },
    ],
  },
  {
    label: "Development",
    items: [
      {
        title: "Zed Editor",
        subtitle:
          "My primary GUI editor, chosen specifically for its exceptional AI integration. I extensively use its agent mode capabilities, Model Context Protocol (MCP) servers, and custom rules. Love how it makes Vim first-class while providing modern AI-assisted development.",
      },
      {
        title: "Neovim",
        subtitle:
          "My go-to terminal-based editor for quick edits, remote work, and when I want the pure efficiency of a keyboard-driven workflow. Heavily customized with plugins for AI integration.",
      },
      {
        title: "Doom Emacs",
        subtitle:
          "Used primarily for Orgmode, which remains unmatched for knowledge management and planning. Nothing is better than Orgmode - everyone just tries to copy it and fails.",
      },
      {
        title: "Ghostty & WezTerm",
        subtitle:
          "Ghostty for fast, GPU-accelerated terminal performance, and WezTerm for powerful configuration options and multiplexing capabilities.",
      },
      {
        title: "OpenAI Codex & Claude CLI",
        subtitle:
          "Command-line access to powerful coding models for automated code generation, debugging, and code review directly from the terminal.",
      },
      {
        title: "Google Jules",
        subtitle:
          "Integrated development assistance for complex problem-solving and architectural decisions in AI system development.",
      },
      {
        title: "Insomnia",
        subtitle:
          "Much more intuitive than Postman for API testing, especially when working with AI-related APIs and testing agent integrations.",
      },
    ],
  },
  {
    label: "Design / Content",
    items: [
      {
        title: "Excalidraw",
        subtitle:
          "Essential for capturing ideas and extending physical whiteboards. It's a powerful tool for brainstorming and visualizing complex concepts.",
      },
      {
        title: "Photoshop",
        subtitle:
          "Advanced image editing and manipulation, often used alongside AI image generation tools for final touch-ups.",
      },
      {
        title: "iMovie",
        subtitle:
          "Video editing for my YouTube content where I make AI and browser agents accessible to everyone.",
      },
      {
        title: "Recraft.ai",
        subtitle:
          "AI-powered design asset generation that speeds up the creation of logos, icons, and marketing materials.",
      },
      {
        title: "Replicate.com",
        subtitle:
          "Running custom AI models for specialized creative tasks and experimenting with the latest open-source models.",
      },
      {
        title: "Google Veo 3 & Imagen 4",
        subtitle:
          "Cutting-edge AI video and image generation tools for creating high-quality visual content.",
      },
      {
        title: "OpenAI Sora",
        subtitle:
          "Experimental video generation capabilities for creating unique video content and demonstrations.",
      },
    ],
  },
  {
    label: "Productivity",
    items: [
      {
        title: "AeroSpace Tiling Window Manager",
        subtitle:
          "Automatically organizes windows for maximum efficiency. Essential when managing multiple terminal sessions, editors, and AI monitoring tools simultaneously.",
      },
      {
        title: "Raycast with AI, MCPs, Scripts",
        subtitle:
          "The center of everything I do. Raycast serves as my command center with AI integration, Model Context Protocol servers, custom snippets, scripts, and clipboard management. Absolutely essential to my workflow.",
      },
      {
        title: "Doom Emacs with Orgmode",
        subtitle:
          "Nothing is better than Orgmode for hierarchical note-taking, project planning, and knowledge management. It remains the gold standard that others try to copy.",
      },
      {
        title: "Anytype",
        subtitle:
          "For notes that I need to collaborate with others on, since not everyone uses Emacs. Great for team knowledge sharing.",
      },
    ],
  },
  {
    label: "AI Tooling",
    items: [
      {
        title: "ChatGPT Plus, Gemini Pro, Claude Pro",
        subtitle:
          "Access to the most capable AI models available. Each has strengths for different types of reasoning, coding, and problem-solving tasks.",
      },
      {
        title: "Raycast AI",
        subtitle:
          "Integrated AI assistance directly in my command center, providing instant access to AI capabilities without context switching.",
      },
      {
        title: "Local LLMs: Qwen 3, Gemma, PHI 4",
        subtitle:
          "Running local models with Ollama and LM Studio for privacy-sensitive work and offline development. These are some of my favorite models for coding and technical tasks.",
      },
      {
        title: "Librechat, Open WebUI, Msty",
        subtitle:
          "Self-hosted AI interfaces that give me complete control over my AI interactions and allow me to work with multiple models seamlessly.",
      },
      {
        title: "AI Monitoring: LangSmith, Langfuse, Langwatch",
        subtitle:
          "Comprehensive monitoring and observability platforms for tracking AI agent performance, debugging issues, and optimizing model interactions.",
      },
      {
        title: "Comet Opik & Latitude.so",
        subtitle:
          "Advanced AI monitoring and experiment tracking platforms that help optimize agent performance and track model behavior over time.",
      },
    ],
  },
];
</script>
<template>
  <div
    class="grid grid-cols-2 gap-y-16 mt-16 lg:grid-cols-4 lg:grid-rows-[auto-1fr] lg:gap-y-0"
  >
    <div class="col-span-3">
      <h1
        class="text-4xl font-bold tracking-tight text-primary-dark-800 dark:text-primary-light-100 sm:text-5xl"
      >
        My AI-powered development setup and the tools that keep me building
        intelligent systems.
      </h1>
    </div>
    <div
      class="mt-6 col-span-3 space-y-4 text-base text-primary-dark-600 dark:text-primary-light-300"
    >
      <p>
        Building AI agents and intelligent automation systems requires a
        carefully curated toolkit. This is my current setup optimized for AI
        development, from browser agents to complex agentic workflows. Every
        tool has been chosen for its ability to integrate with AI or enhance the
        development of AI systems.
      </p>
    </div>
    <div></div>
    <div class="col-span-4 mt-16">
      <Uses v-for="use in uses" :label="use.label" :items="use.items" />
    </div>
  </div>
</template>
