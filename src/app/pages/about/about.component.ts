import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  template: `
    <section class="mx-auto max-w-3xl px-6 md:px-12 py-20 md:py-28">
      <p class="font-mono text-sm font-medium text-accent dark:text-accentlight">
        02 — Sobre mí
      </p>
      <h1 class="mt-2 text-4xl font-bold tracking-tight text-ink dark:text-nightink sm:text-5xl">
        Un poco sobre mí
      </h1>

      <div class="mt-8 space-y-5 text-lg leading-relaxed text-muted dark:text-nightmuted">
        <p>
          Hola. Soy <span class="font-semibold text-ink dark:text-nightink">Joaquín Viarruel</span>,
          desarrollador web full stack orientado a Angular y Supabase. Actualmente
          construyo <span class="font-semibold text-ink dark:text-nightink">GestiAll</span>,
          una plataforma SaaS multi-tenant de gestión para clubes, gimnasios y academias.
        </p>
        <p>
          También soy docente virtual en herramientas digitales para escuelas de
          Colombia, y trabajo freelance en desarrollo web y aplicaciones de gestión
          de punta a punta. Me apasiona escribir código limpio, mantenible y accesible.
        </p>
        <p>
          Mi enfoque combina un ojo por el diseño minimalista con la disciplina
          técnica que exige Angular: creo firmemente en sitios rápidos y accesibles,
          porque una web veloz es una web para todos.
        </p>
      </div>

      <!-- Conocimientos (agrupados) -->
      <div class="mt-14">
        <h2 class="text-xl font-bold text-ink dark:text-nightink">Conocimientos</h2>
        <div class="mt-6 space-y-6">
          @for (group of SKILL_GROUPS; track group.group) {
            <div>
              <p class="text-sm font-semibold text-ink dark:text-nightink">{{ group.group }}</p>
              <ul class="mt-2.5 flex flex-wrap gap-2">
                @for (skill of group.items; track skill) {
                  <li
                    class="rounded-full border border-line dark:border-nightline bg-surface dark:bg-nightsurface px-4 py-1.5 text-sm font-medium text-muted dark:text-nightmuted"
                  >
                    {{ skill }}
                  </li>
                }
              </ul>
            </div>
          }
        </div>
      </div>

      <!-- Experiencia -->
      <div class="mt-14">
        <h2 class="text-xl font-bold text-ink dark:text-nightink">Experiencia</h2>
        <ul class="mt-8 space-y-10">
          @for (exp of EXPERIENCE; track exp.role) {
            <li class="relative pl-8">
              <span
                class="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent dark:border-accentlight bg-ivory dark:bg-night"
              ></span>
              <span
                class="absolute left-[5px] top-5 h-full w-px bg-line dark:bg-nightline"
                aria-hidden="true"
              ></span>
              <div>
                <h3 class="text-lg font-semibold text-ink dark:text-nightink">
                  {{ exp.role }}
                </h3>
                <p class="mt-0.5 font-mono text-sm text-muted dark:text-nightmuted">
                  {{ exp.company }} · {{ exp.period }}
                </p>
                <p class="mt-3 leading-relaxed text-muted dark:text-nightmuted">
                  {{ exp.description }}
                </p>
              </div>
            </li>
          }
        </ul>
      </div>

      <!-- Educación -->
      <div class="mt-14">
        <h2 class="text-xl font-bold text-ink dark:text-nightink">Educación</h2>
        <ul class="mt-8 space-y-8">
          @for (edu of EDUCATION; track edu.title) {
            <li class="relative pl-8">
              <span
                class="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-line dark:border-nightline bg-ivory dark:bg-night"
              ></span>
              <span
                class="absolute left-[5px] top-5 h-full w-px bg-line dark:bg-nightline"
                aria-hidden="true"
              ></span>
              <div>
                <h3 class="text-base font-semibold text-ink dark:text-nightink">
                  {{ edu.title }}
                </h3>
                <p class="mt-0.5 font-mono text-sm text-muted dark:text-nightmuted">
                  {{ edu.institution }} · {{ edu.period }}
                </p>
              </div>
            </li>
          }
        </ul>
      </div>

      <!-- Idiomas -->
      <div class="mt-14">
        <h2 class="text-xl font-bold text-ink dark:text-nightink">Idiomas</h2>
        <ul class="mt-6 space-y-4">
          @for (lang of LANGUAGES; track lang.name) {
            <li
              class="rounded-2xl border border-line dark:border-nightline bg-surface dark:bg-nightsurface p-5"
            >
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <p class="font-semibold text-ink dark:text-nightink">{{ lang.name }}</p>
                <p class="font-mono text-sm text-accent dark:text-accentlight">{{ lang.level }}</p>
              </div>
              <p class="mt-2 text-sm leading-relaxed text-muted dark:text-nightmuted">
                {{ lang.detail }}
              </p>
            </li>
          }
        </ul>
      </div>

      <div class="mt-14">
        <a
          routerLink="contacto"
          class="inline-flex items-center gap-2 text-sm font-semibold text-ink dark:text-nightink underline decoration-line dark:decoration-nightline underline-offset-4 transition-colors hover:text-accent dark:hover:text-accentlight hover:decoration-accent dark:hover:decoration-accentlight"
        >
          ¿Te interesa trabajar juntos?
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  `,
})
export class AboutComponent {
  SKILL_GROUPS = [
    { group: 'Lenguajes de programación', items: ['Python', 'JavaScript', 'TypeScript', 'Java'] },
    { group: 'Frontend', items: ['Angular', 'Tailwind', 'HTML / CSS'] },
    { group: 'Backend', items: ['Node.js', 'Express.js'] },
    { group: 'Bases de datos / Servicios', items: ['PostgreSQL', 'Firebase', 'Supabase'] },
    { group: 'Control de versiones', items: ['Git', 'GitHub'] },
  ];

  EXPERIENCE = [
    {
      role: 'Docente virtual en herramientas digitales',
      company: 'Crack the Code',
      period: '2026 — actualidad',
      description:
        'Clases 100% virtuales desde Argentina a estudiantes de 9°, 10° y 11° en escuelas de Colombia, que combinan mi clase virtual con un docente presencial en el aula. Curriculum orientado a desarrollo práctico: creación de aplicaciones sin código con App Builders (Softr), diseño y publicación de sitios web (Wix), fundamentos de HTML, CSS y JavaScript, y Excel avanzado.',
    },
    {
      role: 'Desarrollador Web Freelance',
      company: 'Independiente · Merlo, San Luis / Córdoba capital',
      period: '2023 — actualidad',
      description:
        'Aplicaciones web y sitios estáticos de punta a punta: GestiAll (SaaS multi-tenant para clubes y academias), un sistema de gestión de stock con finanzas y reportes, y sitios corporativos para clientes de distintos rubros.',
    },
  ];

  EDUCATION = [
    { title: 'Tecnicatura Universitaria en Desarrollo de Software', institution: 'Universidad de la Punta (ULP)', period: 'En curso' },
    { title: 'Testing Avanzado', institution: 'Universidad Tecnológica Nacional (UTN)', period: 'Nov 2023' },
    { title: 'Testing Manual y con Herramientas', institution: 'Universidad Tecnológica Nacional (UTN)', period: 'Abr 2023' },
    { title: 'Programa Oracle Next Education', institution: 'Alura', period: 'Jun 2022 — Nov 2022' },
    { title: 'Desarrollo Web Full Stack', institution: 'Argentina Programa', period: 'Feb 2022' },
  ];

  LANGUAGES = [
    { name: 'Inglés', level: 'Básico-intermedio', detail: 'Inglés técnico para desarrolladores de software (A1.2 MCER). Centro Universitario de Idiomas (CUI).' },
  ];
}
