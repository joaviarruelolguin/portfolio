import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgClass, RouterLink],
  template: `
    <section class="relative overflow-hidden">
      <!-- Glow decorativo -->
      <div
        class="pointer-events-none absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent/10 dark:bg-accentlight/10 blur-3xl"
        aria-hidden="true"
      ></div>

      <div class="mx-auto max-w-6xl px-6 md:px-12 py-20 md:py-28 lg:py-32">
        <div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

          <!-- ── Columna texto ── -->
          <div>
            <span
              class="animate-fade-in inline-flex items-center gap-2 rounded-full border border-line dark:border-nightline bg-surface dark:bg-nightsurface px-3 py-1 text-xs font-medium text-muted dark:text-nightmuted"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-accent dark:bg-accentlight"></span>
              Disponible para proyectos
            </span>

            <h1
              class="animate-fade-in-up mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-ink dark:text-nightink sm:text-6xl lg:text-7xl"
              style="animation-delay: 80ms"
            >
              Hola, soy<br />Joaquín Viarruel
            </h1>

            <p
              class="animate-fade-in-up mt-6 max-w-xl text-lg leading-relaxed text-muted dark:text-nightmuted"
              style="animation-delay: 160ms"
            >
              Desarrollador web full stack orientado a Angular y Supabase, y docente
              virtual en herramientas digitales. Construyo
              <span class="font-semibold text-ink dark:text-nightink">GestiAll</span>,
              una plataforma SaaS multi-tenant para clubes y academias, y desarrollo
              freelance de punta a punta.
            </p>

            <div
              class="animate-fade-in-up mt-10 flex flex-wrap items-center gap-4"
              style="animation-delay: 240ms"
            >
              <a
                routerLink="proyectos"
                class="inline-flex items-center justify-center gap-2 rounded-xl bg-ink dark:bg-nightink px-7 py-3.5 text-base font-semibold text-ivory dark:text-night transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Ver proyectos
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                routerLink="sobre-mi"
                class="inline-flex items-center justify-center rounded-xl border border-line dark:border-nightline bg-surface dark:bg-nightsurface px-7 py-3.5 text-base font-semibold text-ink dark:text-nightink transition-all duration-200 hover:scale-105 hover:border-ink/30 dark:hover:border-nightink/30"
              >
                Sobre mí
              </a>
            </div>

            <a
              href="mailto:joa.viarruel@gmail.com"
              class="animate-fade-in mt-12 inline-flex items-center gap-2 text-sm font-medium text-muted dark:text-nightmuted underline decoration-line dark:decoration-nightline underline-offset-4 transition-colors hover:text-ink dark:hover:text-nightink hover:decoration-ink dark:hover:decoration-nightink"
              style="animation-delay: 320ms"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              joa.viarruel@gmail.com
            </a>
          </div>

          <!-- ── Columna visual (bento) ── -->
          <div class="animate-fade-in relative" style="animation-delay: 200ms">
            <div
              class="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-accent/15 via-transparent to-accentlight/15 blur-2xl"
              aria-hidden="true"
            ></div>

            <div class="relative grid grid-cols-2 gap-4">
              <!-- Card grande -->
              <div
                class="col-span-2 flex items-center gap-4 rounded-2xl border border-line dark:border-nightline bg-surface dark:bg-nightsurface p-6 shadow-sm"
              >
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-xl bg-ink dark:bg-nightink font-mono text-lg font-bold text-ivory dark:text-night"
                >
                  &lt;/&gt;
                </div>
                <div>
                  <p class="font-semibold text-ink dark:text-nightink">Full Stack</p>
                  <p class="text-sm text-muted dark:text-nightmuted">
                    Angular · Supabase · Node.js
                  </p>
                </div>
              </div>

              <!-- Chips -->
              @for (chip of BENTO; track chip.label) {
                <div
                  class="group flex flex-col gap-3 rounded-2xl border border-line dark:border-nightline bg-surface dark:bg-nightsurface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <span
                    class="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold"
                    [ngClass]="chip.bg"
                  >
                    {{ chip.mono }}
                  </span>
                  <div>
                    <p class="text-sm font-semibold text-ink dark:text-nightink">{{ chip.label }}</p>
                    <p class="text-xs text-muted dark:text-nightmuted">{{ chip.sub }}</p>
                  </div>
                </div>
              }
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {
  BENTO = [
    { mono: 'An', label: 'Angular', sub: 'standalone · zoneless', bg: 'bg-accent/15 dark:bg-accentlight/15 text-accent dark:text-accentlight' },
    { mono: 'TS', label: 'TypeScript', sub: 'tipado estricto', bg: 'bg-sky-500/15 text-sky-600 dark:text-sky-400' },
    { mono: 'SB', label: 'Supabase', sub: 'PostgreSQL + RLS', bg: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400' },
    { mono: 'TW', label: 'Tailwind', sub: 'utility-first CSS', bg: 'bg-rose-500/15 text-rose-600 dark:text-rose-400' },
  ];
}
