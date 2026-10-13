import { Component, computed, signal } from '@angular/core';
import { Project, ProjectCard } from '../../shared/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  template: `
    <section class="mx-auto max-w-6xl px-6 md:px-12 py-20 md:py-28">
      <header class="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="font-mono text-sm font-medium text-accent dark:text-accentlight">
            01 — Trabajo
          </p>
          <h1 class="mt-2 text-4xl font-bold tracking-tight text-ink dark:text-nightink sm:text-5xl">
            Proyectos
          </h1>
          <p class="mt-4 max-w-xl text-lg leading-relaxed text-muted dark:text-nightmuted">
            Aplicaciones de gestión, plataformas SaaS, dashboards y
            sitios web.
          </p>
        </div>

        <!-- Filtros -->
        <nav class="flex flex-wrap gap-2" aria-label="Filtros de proyectos">
          @for (tag of ALL_TAGS; track tag) {
            <button
              type="button"
              (click)="selectTag(tag)"
              [attr.aria-pressed]="activeTag() === tag"
              class="rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200"
              [class.border-ink]="activeTag() === tag"
              [class.dark:border-nightink]="activeTag() === tag"
              [class.bg-ink]="activeTag() === tag"
              [class.dark:bg-nightink]="activeTag() === tag"
              [class.text-ivory]="activeTag() === tag"
              [class.dark:text-night]="activeTag() === tag"
              [class.border-line]="activeTag() !== tag"
              [class.dark:border-nightline]="activeTag() !== tag"
              [class.text-muted]="activeTag() !== tag"
              [class.dark:text-nightmuted]="activeTag() !== tag"
              [class.hover:border-ink/40]="activeTag() !== tag"
              [class.dark:hover:border-nightink/40]="activeTag() !== tag"
            >
              {{ tag }}
            </button>
          }
        </nav>
      </header>

      @if (filteredProjects().length === 0) {
        <div class="rounded-2xl border border-dashed border-line dark:border-nightline py-20 text-center">
          <p class="text-muted dark:text-nightmuted">
            No se encontraron proyectos con ese filtro.
          </p>
        </div>
      } @else {
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          @for (project of filteredProjects(); track project.id) {
            <app-project-card [project]="project" />
          }
        </div>
      }
    </section>
  `,
})
export class ProjectsComponent {
  PROJECTS_DATA: Project[] = [
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
    {
      id: '6',
      title: 'LoL Squad Stats',
      description:
        'Dashboard de League of Legends para un grupo de amigos: ranks, MVP semanal, análisis de partidas Flex con Coach IA, sinergias, premios y liga de customs — todo con datos reales de la API de Riot. Proyecto open source (MIT).',
      image: '',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Riot API', 'Open Source'],
      repoUrl: 'https://github.com/joaviarruelolguin/lol-squad',
    },
    {
      id: '7',
      title: 'Maps for Nerds',
      description:
        'Prototipo de app de mapas interactivo con lugares arqueológicos, culturales, reservas naturales e históricos — web + APK desde una sola codebase (Angular zoneless + Ionic + Leaflet). En desarrollo.',
      image: '',
      tags: ['Angular', 'Ionic', 'Leaflet', 'Tailwind', 'Capacitor'],
      repoUrl: 'https://github.com/joaviarruelolguin/maps-for-nerds',
    },
    {
      id: '8',
      title: 'Super De Todo',
      description:
        'Proyecto de la facultad: ejercicio de programación en Java con Maven, realizado durante la Tecnicatura en Desarrollo de Software.',
      image: '',
      tags: ['Java', 'Maven'],
      repoUrl: 'https://github.com/joaviarruelolguin/TP6-LAB1',
    },
  ];

  ALL_TAGS = ['Todos', 'Angular', 'TypeScript', 'Next.js', 'Java', 'Supabase', 'Node.js', 'Tailwind', 'Firebase', 'Ionic', 'Riot API', 'HTML', 'CSS', 'JavaScript'];

  activeTag = signal<string>('Todos');

  filteredProjects = computed(() => {
    const tag = this.activeTag();
    if (tag === 'Todos') {
      return this.PROJECTS_DATA;
    }
    return this.PROJECTS_DATA.filter((p: Project) => p.tags.includes(tag));
  });

  selectTag(tag: string): void {
    this.activeTag.set(tag);
  }
}
