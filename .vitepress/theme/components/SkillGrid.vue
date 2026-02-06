<script setup lang="ts">
interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

defineProps<{
  categories: SkillCategory[];
}>();
</script>

<template>
  <div class="skill-grid">
    <div v-for="cat in categories" :key="cat.category" class="skill-category">
      <div class="skill-header">
        <span class="skill-icon">{{ cat.icon }}</span>
        <h3 class="skill-title">{{ cat.category }}</h3>
      </div>
      <div class="skill-tags">
        <span v-for="skill in cat.skills" :key="skill" class="tech-tag">{{ skill }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.skill-category {
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: border-color 0.2s ease;
}

.skill-category:hover {
  border-color: var(--vp-c-brand-1);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.skill-icon {
  font-size: 1.5rem;
}

.skill-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: var(--vp-c-text-1);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
</style>