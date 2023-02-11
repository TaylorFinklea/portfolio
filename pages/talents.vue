<script setup lang="ts">
const talents: TalentGroup[] = [
  {
    label: 'Leadership',
    items: ['Management', 'IT Management', 'Project Management', 'Agile'],
  },
  {
    label: 'DevOps',
    items: [
      'DevSecOps',
      'Kuberentes',
      'Helm Charts',
      'Rancher',
      'GitHub Actions',
      'GitHub Codespaces',
      'Azure DevOps',
      'CI/CD',
      'AKS',
      'EKS',
      'K3s',
      'RKE2',
      'Docker',
      'IaC',
      'Terraform',
      'Packer',
      'Ansible',
      'GitHub',
      'Git',
      'Vagrant',
    ],
  },
  {
    label: 'Infrastructure',
    items: [
      'Microsoft Azure',
      'AWS',
      'GCP',
      'Cloudflare',
      'Microsoft 365',
      'Active Directory',
      'Azure AD',
      'Prometheus',
      'Grafana',
      'Linux',
      'Linux Servers',
      'Windows Servers',
      'Azure CLI',
      'System Admin',
      'Network Admin',
      'Tailscale',
      'Jamf',
      'Microsoft Intune',
      'Ubiquiti',
      'Juniper'
    ],
  },
  {
    label: 'Development',
    items: [
      'Swift',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Golang',
      'Python',
      'Powershell',
      'Bash',
      'Postgresql',
      'Influxdb',
      'MySQL',
      'Nuxt.js',
      'Vue.js',
      'Supabase',
      'Firebase',
      'Cloudflare Pages',
      'Cloudflare Workers',
      'Fly.io',
      'Railway.app',
      'Netlify',
      'Vercel',
      'Prisma',
      'Figma',
    ],
  },
  {
    label: 'Information Security',
    items: [
      'IT Audit',
      'SOC II Type II',
      'Nessus',
      'Tenable.io',
      'Vuln Scanning',
      'Dependabot',
      'SSL Certs',
      'Pentest',
      'Kali',
      'Defender',
      'Jamf Protect',
      'Mimecast',
      'Sentinel',
      'PIM',
      'Upguard',
      'Security Scorecard',
    ],
  },
]
</script>
<template>
  <div
    class="grid grid-cols-2 gap-y-16 mt-16 lg:grid-cols-4 lg:grid-rows-[auto-1fr] lg:gap-y-0"
  >
    <div class="col-span-4">
      <h1
        class="text-4xl font-bold tracking-tight text-primary-dark-800 dark:text-primary-light-100 sm:text-5xl"
      >
        A list of my skills and experiences.
      </h1>
    </div>
    <div
      class="mt-6 col-span-3 space-y-4 text-base text-primary-dark-600 dark:text-primary-light-300"
    >
      <p>
        I am passionate about DevOps and strive to implement modern
        best-practices. This will give you a glimpse of my strengths and ability
        to learn new things in an ever-changing industry.
      </p>
    </div>
    <div></div>
    <div class="col-span-4 mt-16">
      <TalentList
        v-for="item in talents"
        :label="item.label"
        :items="item.items"
      />
    </div>
  </div>
</template>
