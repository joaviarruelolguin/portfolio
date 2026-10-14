import { Component, input } from '@angular/core';
import { SlicePipe } from '@angular/common';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
}

@Component({
  selector: 'app-project-card',
  imports: [SlicePipe],
  host: {
    class: 'group relative flex flex-col overflow-hidden rounded-2xl border border-line dark:border-nightline bg-surface dark:bg-nightsurface shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1',
  },
  template: `
    <!-- Visual del proyecto: gradiente + blur + ícono -->
    <div
      class="relative aspect-video overflow-hidden bg-gradient-to-br from-accent/15 via-surface dark:from-accentlight/15 dark:via-nightsurface to-transparent"
    >
      @if (project().image) {
        <img
          [src]="project().image"
          [alt]="project().title"
          loading="lazy"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      }
      <!-- Marca de agua / ícono central con blur -->
      <div
        class="absolute inset-0 flex items-center justify-center backdrop-blur-[2px]"
      >
        <span
          class="flex h-14 w-14 items-center justify-center rounded-2xl border border-line/60 dark:border-nightline/60 bg-surface/70 dark:bg-nightsurface/70 font-mono text-xl font-bold text-accent dark:text-accentlight backdrop-blur-md transition-transform duration-300 group-hover:scale-110"
        >
          {{ project().title | slice:0:1 }}
        </span>
      </div>
    </div>

    <div class="flex flex-1 flex-col p-6">
      <h3 class="text-lg font-semibold tracking-tight text-ink dark:text-nightink">
        {{ project().title }}
      </h3>
      <p class="mt-2 text-sm leading-relaxed text-muted dark:text-nightmuted">
        {{ project().description }}
      </p>

      @if (project().tags.length) {
        <ul class="mt-4 flex flex-wrap gap-2">
          @for (tag of project().tags; track tag) {
            <li
              class="rounded-full bg-ivory dark:bg-night px-2.5 py-1 text-xs font-medium text-muted dark:text-nightmuted border border-line dark:border-nightline"
            >
              {{ tag }}
            </li>
          }
        </ul>
      }

      <div class="mt-6 flex items-center gap-4 border-t border-line dark:border-nightline pt-4">
        @if (project().liveUrl) {
          <a
            [href]="project().liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-sm font-medium text-ink dark:text-nightink transition-colors hover:text-accent dark:hover:text-accentlight"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
            {{ project().liveLabel || 'Demo' }}
          </a>
        }
        @if (project().repoUrl) {
          <a
            [href]="project().repoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-sm font-medium text-muted dark:text-nightmuted transition-colors hover:text-ink dark:hover:text-nightink"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            Código
          </a>
        }
      </div>
    </div>
  `,
})
export class ProjectCard {
  project = input.required<Project>();
}
