import { h } from 'vue'
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import Timeline from './components/Timeline.vue';
import ProjectCard from './components/ProjectCard.vue';
import SkillGrid from './components/SkillGrid.vue';
import KanaksanEcosystem from './components/KanaksanEcosystem.vue';

import './custom.css';
import ResumeDownload from './components/ResumeDownload.vue';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(ResumeDownload)
    })
  },
  enhanceApp({ app }) {
    app.component('Timeline', Timeline);
    app.component('ProjectCard', ProjectCard);
    app.component('SkillGrid', SkillGrid);
    app.component('KanaksanEcosystem', KanaksanEcosystem);
  },
} satisfies Theme;