import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  template: `
    <section class="mx-auto max-w-2xl px-6 md:px-12 py-20 md:py-28 text-center">
      <p class="font-mono text-sm font-medium text-accent dark:text-accentlight">
        03 — Contacto
      </p>
      <h1 class="mt-2 text-4xl font-bold tracking-tight text-ink dark:text-nightink sm:text-5xl">
        Hablemos
      </h1>
      <p class="mt-6 text-lg leading-relaxed text-muted dark:text-nightmuted">
        ¿Tenés un proyecto en mente o simplemente querés saludar?
        Me encantaría escuchar de ti.
      </p>

      <div class="mt-10">
        <a
          href="mailto:joa.viarruel@gmail.com"
          class="inline-flex items-center justify-center gap-2 rounded-xl bg-ink dark:bg-nightink px-8 py-4 text-base font-semibold text-ivory dark:text-night transition-all duration-200 hover:scale-105 hover:shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Envíame un correo
        </a>
      </div>

      <!-- Datos de contacto -->
      <div class="mt-12 grid gap-3 sm:grid-cols-2 text-left">

        <!-- Email -->
        <a
          href="mailto:joa.viarruel@gmail.com"
          aria-label="Email"
          class="group flex items-center gap-3 rounded-2xl border border-line dark:border-nightline bg-surface dark:bg-nightsurface p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/30 dark:hover:border-nightink/30 hover:shadow-md"
        >
          <span
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line dark:border-nightline bg-ivory dark:bg-night text-muted dark:text-nightmuted transition-colors group-hover:text-ink dark:group-hover:text-nightink"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </span>
          <span class="min-w-0">
            <span class="block text-xs font-medium uppercase tracking-wide text-muted dark:text-nightmuted">Email</span>
            <span class="block truncate text-sm font-semibold text-ink dark:text-nightink">joa.viarruel@gmail.com</span>
          </span>
        </a>

        <!-- Teléfono -->
        <a
          href="tel:+5493516139126"
          aria-label="Teléfono"
          class="group flex items-center gap-3 rounded-2xl border border-line dark:border-nightline bg-surface dark:bg-nightsurface p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/30 dark:hover:border-nightink/30 hover:shadow-md"
        >
          <span
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line dark:border-nightline bg-ivory dark:bg-night text-muted dark:text-nightmuted transition-colors group-hover:text-ink dark:group-hover:text-nightink"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          <span class="min-w-0">
            <span class="block text-xs font-medium uppercase tracking-wide text-muted dark:text-nightmuted">Teléfono</span>
            <span class="block truncate text-sm font-semibold text-ink dark:text-nightink">+54 9 351 613-9126</span>
          </span>
        </a>

        <!-- Ubicación -->
        <div
          class="group flex items-center gap-3 rounded-2xl border border-line dark:border-nightline bg-surface dark:bg-nightsurface p-4"
        >
          <span
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line dark:border-nightline bg-ivory dark:bg-night text-muted dark:text-nightmuted"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
            </svg>
          </span>
          <span class="min-w-0">
            <span class="block text-xs font-medium uppercase tracking-wide text-muted dark:text-nightmuted">Ubicación</span>
            <span class="block truncate text-sm font-semibold text-ink dark:text-nightink">San Luis, Argentina</span>
          </span>
        </div>

        <!-- LinkedIn -->
        <a
          href="https://linkedin.com/in/joaquinvx"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="group flex items-center gap-3 rounded-2xl border border-line dark:border-nightline bg-surface dark:bg-nightsurface p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/30 dark:hover:border-nightink/30 hover:shadow-md"
        >
          <span
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line dark:border-nightline bg-ivory dark:bg-night text-muted dark:text-nightmuted transition-colors group-hover:text-ink dark:group-hover:text-nightink"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
            </svg>
          </span>
          <span class="min-w-0">
            <span class="block text-xs font-medium uppercase tracking-wide text-muted dark:text-nightmuted">LinkedIn</span>
            <span class="block truncate text-sm font-semibold text-ink dark:text-nightink">/in/joaquinvx</span>
          </span>
        </a>

        <!-- GitHub -->
        <a
          href="https://github.com/joaviarruelolguin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="group flex items-center gap-3 rounded-2xl border border-line dark:border-nightline bg-surface dark:bg-nightsurface p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/30 dark:hover:border-nightink/30 hover:shadow-md"
        >
          <span
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line dark:border-nightline bg-ivory dark:bg-night text-muted dark:text-nightmuted transition-colors group-hover:text-ink dark:group-hover:text-nightink"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.112.82-.26.82-.577 0-.285-.012-1.227-.012-2.262-3.338.613-4.042-1.61-4.042-1.61-.547-1.387-1.333-1.756-1.333-1.756-1.088-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.841 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.22.69.825.577C20.565 21.795 24 17.292 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </span>
          <span class="min-w-0">
            <span class="block text-xs font-medium uppercase tracking-wide text-muted dark:text-nightmuted">GitHub</span>
            <span class="block truncate text-sm font-semibold text-ink dark:text-nightink">/joaviarruelolguin</span>
          </span>
        </a>
      </div>

      <p class="mt-14 text-sm text-muted dark:text-nightmuted">
        Generalmente respondo en menos de 24 horas.
      </p>
    </section>
  `,
})
export class ContactComponent {}
