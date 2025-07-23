<script setup lang="ts">
const social = [
  {
    label: "YouTube",
    icon: "mdi:youtube",
    href: "https://www.youtube.com/@taylor-finklea",
  },
  {
    label: "X (Twitter)",
    icon: "simple-icons:x",
    href: "https://x.com/Taylor_Finklea",
  },
  {
    label: "GitHub",
    icon: "mdi:github",
    href: "https://github.com/TaylorFinklea",
  },
  {
    label: "LinkedIn",
    icon: "mdi:linkedin",
    href: "https://www.linkedin.com/in/taylor-finklea-8614238b",
  },
  {
    label: "Unsplash",
    icon: "ri:unsplash-fill",
    href: "https://unsplash.com/@tfinklea",
  },
  {
    label: "Thingiverse",
    icon: "simple-icons:thingiverse",
    href: "https://www.thingiverse.com/taylorfinklea/designs",
  },
];

const techStack = [
  {
    category: "AI Platforms",
    items: [
      "LangChain",
      "LangGraph",
      "OpenAI SDK",
      "Google AI SDK",
      "Langflow",
      "Flowise",
      "n8n",
    ],
  },
  {
    category: "Development",
    items: [
      "Python",
      "Zed Editor",
      "Neovim",
      "Doom Emacs",
      "Ghostty",
      "WezTerm",
    ],
  },
  {
    category: "AI Models",
    items: [
      "ChatGPT Plus",
      "Claude Pro",
      "Gemini Pro",
      "Qwen 3",
      "Gemma",
      "PHI 4",
    ],
  },
];
</script>
<template>
  <div
    class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto-1fr] lg:gap-y-0"
  >
    <div class="lg:pl-20">
      <div class="max-w-xs px-2.5 lg:max-w-none">
        <NuxtImg src="/taylor2.jpg" class="rounded-3xl w-[300px]" />
      </div>
    </div>
    <div class="lg:order-first lg:row-span-2">
      <h1 class="base-h1">Hi, I'm Taylor Finklea.</h1>
      <h1 class="base-h1">
        I'm an AI Engineer bringing intelligent agents to everyone.
      </h1>
      <div
        class="mt-6 space-y-4 text-base text-primary-dark-600 dark:text-primary-light-300"
      >
        <p>

          API calls to architect robust systems where AI agents can reason,
          plan, and execute complex multi-step tasks to solve real-world
          business problems.
        </p>
        <p>
          As a YouTuber, I'm on a mission to make AI and browser agents
          accessible to everyone. I specialize in browser automation agents and
          have extensive experience with platforms like Skyvern, Stagehand,
          Playwright, Puppeteer, and many others. I believe that Python-first
          development is superior to low-code tools when building
          production-ready agents.
        </p>
        <p>
          My technical expertise spans the entire AI ecosystem - from Mastra
          and LangGraph for agent orchestration, to local LLMs running on my
          hardware with Ollama, to cloud-based solutions with OpenAI, Claude,
          and Gemini. I've built agents for website chat, email automation, lead
          research, API interactions, form filling, and repetitive task
          automation that's traditionally difficult to code.
        </p>
        <p>
          I'm deeply committed to open-source technology and data sovereignty.
          My development environment centers around Zed Editor (with its
          excellent agent mode), Neovim, and Doom Emacs. I use Raycast as my
          command center with AI, MCPs, and custom scripts - it's become
          essential to my workflow alongside Orgmode for knowledge management.
        </p>
        <p>
          When I'm not building AI systems, I love wildlife photography, hiking
          daily to connect with nature, and spending time with my family in
          Kansas City. I also maintain a self-hosted smart home with Home
          Assistant and continue my passion for 3D printing and making things
          work better through automation.
        </p>
      </div>

      <!-- Tech Stack Section -->
      <div class="mt-12">
        <h2 class="base-h2 mb-6">Current Tech Stack</h2>
        <div class="grid grid-cols-1 gap-6">
          <div
            v-for="stack in techStack"
            :key="stack.category"
            class="space-y-2"
          >
            <h3
              class="text-sm font-semibold text-primary-500 uppercase tracking-wide"
            >
              {{ stack.category }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="item in stack.items"
                :key="item"
                class="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-dark-800 text-primary-700 dark:text-primary-light-300 rounded-full"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:pl-20">
      <ul>
        <SocialLink
          v-for="link in social"
          :href="link.href"
          :label="link.label"
          :icon="link.icon"
        />
        <li
          class="mt-8 border-t border-primary-dark-100 pt-8 dark:border-primary-dark-700/40"
        >
          <SocialLink
            href="mailto:taylor@finklea.io"
            label="taylor@finklea.io"
            icon="mdi:email"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
