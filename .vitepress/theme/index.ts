import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'

import Layout from './Layout.vue'

// Existing components
import KanaksanEcosystem from './components/KanaksanEcosystem.vue'
import ProjectCard        from './components/ProjectCard.vue'
import ResumeDownload     from './components/ResumeDownload.vue'
import SkillGrid          from './components/SkillGrid.vue'
import Timeline           from './components/Timeline.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('KanaksanEcosystem', KanaksanEcosystem)
    app.component('ProjectCard',        ProjectCard)
    app.component('ResumeDownload',     ResumeDownload)
    app.component('SkillGrid',          SkillGrid)
    app.component('Timeline',           Timeline)
  },
} satisfies Theme