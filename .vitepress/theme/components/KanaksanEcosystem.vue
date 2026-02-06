<template>
  <div class="ecosystem">
    <div class="ecosystem-grid">
      <a href="https://author.kanaksan.com" class="eco-card eco-active">
        <span class="eco-icon">✍️</span>
        <strong>author</strong>
        <span class="eco-desc">Portfolio & Story</span>
      </a>
      <a href="https://learn.kanaksan.com" class="eco-card" target="_blank" rel="noopener">
        <span class="eco-icon">📚</span>
        <strong>learn</strong>
        <span class="eco-desc">Tutorials & Courses</span>
      </a>
      <a href="https://calendar.kanaksan.com" class="eco-card" target="_blank" rel="noopener">
        <span class="eco-icon">📅</span>
        <strong>calendar</strong>
        <span class="eco-desc">Schedule & Events</span>
      </a>
      <a href="https://kanaksan.com" class="eco-card" target="_blank" rel="noopener">
        <span class="eco-icon">🏠</span>
        <strong>kanaksan</strong>
        <span class="eco-desc">Main Hub</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.ecosystem-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.eco-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 1.25rem 1rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: all 0.2s ease;
  text-align: center;
}

.eco-card:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.eco-active {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.eco-icon {
  font-size: 1.8rem;
}

.eco-card strong {
  font-size: 0.95rem;
}

.eco-desc {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}
</style>