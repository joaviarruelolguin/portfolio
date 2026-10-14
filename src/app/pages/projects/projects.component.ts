import { Component } from '@angular/core';
import { Project, ProjectCard } from '../../shared/project-card/project-card.component';

interface ProjectGroup {
  title: string;
  projects: Project[];
}

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  template: `
    <section class="mx-auto max-w-6xl px-6 md:px-12 py-20 md:py-28">
      <header class="mb-14 max-w-2xl">
        <p class="font-mono text-sm font-medium text-accent dark:text-accentlight">
          01 — Trabajo
        </p>
        <h1 class="mt-2 text-4xl font-bold tracking-tight text-ink dark:text-nightink sm:text-5xl">
          Proyectos
        </h1>
        <p class="mt-4 text-lg leading-relaxed text-muted dark:text-nightmuted">
          Aplicaciones de gestión, plataformas SaaS, dashboards y
          sitios web.
        </p>
      </header>

      @for (group of PROJECT_GROUPS; track group.title) {
        <section class="mb-14 last:mb-0">
          <!-- Subtítulo de categoría + regla + contador -->
          <div class="mb-6 flex items-baseline gap-4">
            <h2 class="text-xl font-semibold tracking-tight text-ink dark:text-nightink">
              {{ group.title }}
            </h2>
            <span class="h-px flex-1 bg-line dark:bg-nightline"></span>
            <span class="font-mono text-sm text-muted dark:text-nightmuted">
              {{ group.projects.length }}
            </span>
          </div>

          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            @for (project of group.projects; track project.id) {
              <app-project-card [project]="project" />
            }
          </div>
        </section>
      }
    </section>
  `,
})
export class ProjectsComponent {
  PROJECT_GROUPS: ProjectGroup[] = [
    {
      title: 'Productos',
      projects: [
        {
          id: '1',
          title: 'GestiAll',
          description:
            'SaaS multi-tenant para clubes, gimnasios y academias: socios, categorías, pagos mensuales y comprobantes por email, con aislamiento por tenant (RLS) y RPCs de PostgreSQL. Pre-lanzamiento con Picahuesos Basquet Club (~300 socios).',
          image: '',
          tags: ['Angular', 'TypeScript', 'Supabase', 'Node.js'],
          liveUrl: 'https://gestiall.com',
          liveLabel: 'Producto',
        },
        {
          id: '2',
          title: 'Gestión de Stock',
          description:
            'App de inventario: productos, stock, ventas y comprobantes en PDF. Sección de finanzas con gráficos, control de egresos y múltiples usuarios.',
          image: '',
          tags: ['Angular', 'TypeScript', 'Tailwind', 'Firebase'],
          repoUrl: 'https://github.com/joaviarruelolguin/my-stock',
        },
      ],
    },
    {
      title: 'Open source',
      projects: [
        {
          id: '6',
          title: 'LoL Squad Stats',
          description:
            'Dashboard de League of Legends para un grupo de amigos: ranks, MVP semanal, análisis de partidas Flex con Coach IA, sinergias, premios y liga de customs — todo con datos reales de la API de Riot. Proyecto open source (MIT).',
          image: '',
          tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Riot API', 'Open Source'],
          repoUrl: 'https://github.com/joaviarruelolguin/lol-squad',
        },
      ],
    },
    {
      title: 'Sitios estáticos',
      projects: [
        {
          id: '3',
          title: 'AGAS Córdoba',
          description:
            'Sitio web estático para AGAS Córdoba. Diseño, maquetación y publicación con HTML, CSS, JavaScript y Tailwind.',
          image: '',
          tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
          liveUrl: 'https://agascba.com',
        },
        {
          id: '4',
          title: 'Get Electronics',
          description:
            'Sitio web estático para Get Electronics. Diseño, maquetación y publicación con HTML, CSS, JavaScript y Tailwind.',
          image: '',
          tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
          liveUrl: 'https://www.getelectronics.com.ar/',
        },
        {
          id: '5',
          title: 'ADN Electrónica',
          description:
            'Sitio web estático para ADN Electrónica. Diseño, maquetación y publicación con HTML, CSS, JavaScript y Tailwind.',
          image: '',
          tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
          liveUrl: 'https://www.adn-electronica.com.ar',
        },
      ],
    },
  ];
}
