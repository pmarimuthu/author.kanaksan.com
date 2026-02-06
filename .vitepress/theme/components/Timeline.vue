<script setup lang="ts">
interface TimelineItem {
  period: string;
  role: string;
  company: string;
  companySuffix?: string;
  link?: string;
  location: string;
  summary: string;
  tech: string[];
}

defineProps<{
  items: TimelineItem[];
  variant?: "default" | "education";
}>();
</script>

<template>
  <div class="timeline" :class="`timeline--${variant ?? 'default'}`">
    <div v-for="(item, index) in items" :key="index" class="timeline-item">
      <div class="timeline-marker" />
      <div class="timeline-content">
        <span class="timeline-period">{{ item.period }}</span>
        <h3 class="timeline-role">{{ item.role }}</h3>
        <p class="timeline-company">
          <a
            v-if="item.link"
            :href="item.link"
            target="_blank"
            rel="noopener"
            class="timeline-link"
          >
            {{ item.company }}
          </a>
          <span v-else>{{ item.company }}</span>
          <span v-if="item.companySuffix">{{ item.companySuffix }}</span>
          · {{ item.location }}
        </p>
        <p class="timeline-summary">{{ item.summary }}</p>
        <div class="timeline-tech">
          <span v-for="tech in item.tech" :key="tech" class="tech-tag">{{
            tech
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  --timeline-color: var(--vp-c-brand-1);
  position: relative;
  padding-left: 2rem;
  margin: 2rem 0;
}

.timeline--education {
  --timeline-color: #059669;
}

:root.dark .timeline--education {
  --timeline-color: #6ee7b7;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--vp-c-divider);
}

.timeline-item {
  position: relative;
  padding-bottom: 2.5rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 4px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--timeline-color);
  border: 3px solid var(--vp-c-bg);
  box-shadow: 0 0 0 2px var(--timeline-color);
  z-index: 1;
}

.timeline-item:first-child .timeline-marker {
  width: 22px;
  height: 22px;
  left: calc(-2rem - 2px);
  top: 2px;
}

.timeline-content {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  transition: box-shadow 0.2s ease;
}

.timeline-content:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.timeline-period {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--timeline-color);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.timeline-role {
  margin: 0.3rem 0 0.15rem;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.timeline-company {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0 0 0.6rem;
}

.timeline-link {
  color: var(--timeline-color);
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.timeline-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.timeline-summary {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0 0 0.8rem;
}

.timeline-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

/* Education variant tech tags */
.timeline--education .tech-tag {
  background: rgba(5, 150, 105, 0.08);
  color: #059669;
  border-color: #059669;
}

:root.dark .timeline--education .tech-tag {
  background: rgba(110, 231, 183, 0.1);
  color: #6ee7b7;
  border-color: #6ee7b7;
}

.timeline--education .tech-tag:hover {
  background: #059669;
  color: #fff;
}

:root.dark .timeline--education .tech-tag:hover {
  background: #6ee7b7;
  color: #000;
}
</style>
