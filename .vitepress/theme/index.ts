import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import Timeline from './components/Timeline.vue';
import ProjectCard from './components/ProjectCard.vue';
import SkillGrid from './components/SkillGrid.vue';
import KanaksanEcosystem from './components/KanaksanEcosystem.vue';

import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Timeline', Timeline);
    app.component('ProjectCard', ProjectCard);
    app.component('SkillGrid', SkillGrid);
    app.component('KanaksanEcosystem', KanaksanEcosystem);
  },
} satisfies Theme;