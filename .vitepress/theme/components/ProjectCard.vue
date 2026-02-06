<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link: string;
}>();
</script>

<template>
  <a :href="link" class="project-card">
    <div class="project-card-inner">
      <h3 class="project-title">{{ title }}</h3>
      <p class="project-subtitle">{{ subtitle }}</p>
      <p class="project-desc">{{ description }}</p>
      <div class="project-tech">
        <span v-for="t in tech" :key="t" class="tech-tag">{{ t }}</span>
      </div>
    </div>
  </a>
</template>

<style scoped>
.project-card {
  display: block;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  border-color: var(--vp-c-brand-1);
}

.project-card-inner {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 0.25rem;
}

.project-subtitle {
  font-size: 0.8rem;
  color: var(--vp-c-brand-1);
  font-weight: 500;
  margin: 0 0 0.75rem;
}

.project-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0 0 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
</style>