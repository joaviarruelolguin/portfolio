import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="min-h-screen bg-ivory dark:bg-night text-ink dark:text-nightink">
      <!-- ── Header ── -->
      <header class="site-header fixed inset-x-0 top-0 z-50 border-b border-line/70 dark:border-nightline/70 bg-ivory/80 dark:bg-night/80 backdrop-blur-md">
        <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-12">
          <a routerLink="" class="font-mono text-lg font-bold tracking-tight">
            &lt;JV /&gt;
          </a>

          <nav class="hidden items-center gap-8 md:flex">
            @for (item of NAV_ITEMS; track item.path) {
              <a
                routerLink="{{ item.path }}"
                routerLinkActive="nav-active"
                [routerLinkActiveOptions]="{ exact: item.path === '' }"
                class="text-sm font-medium text-muted dark:text-nightmuted transition-colors hover:text-ink dark:hover:text-nightink"
              >
                {{ item.label }}
              </a>
            }
          </nav>

          <div class="flex items-center gap-2">
            <!-- Toggle dark mode -->
            <button
              type="button"
              (click)="toggleTheme()"
              [attr.aria-label]="isDark() ? 'Activar modo claro' : 'Activar modo oscuro'"
              class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line dark:border-nightline text-muted dark:text-nightmuted transition-colors hover:text-ink dark:hover:text-nightink"
            >
              @if (isDark()) {
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                </svg>
              } @else {
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              }
            </button>

            <a
              routerLink="proyectos"
              class="hidden sm:inline-flex items-center justify-center rounded-lg bg-ink dark:bg-nightink px-4 py-2 text-sm font-medium text-ivory dark:text-night transition-all hover:scale-[1.03] hover:shadow-md"
            >
              Ver proyectos
            </a>

            <!-- Hamburguesa -->
            <button
              type="button"
              (click)="toggleMenu()"
              [attr.aria-expanded]="showMenu()"
              aria-label="Abrir menú"
              class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line dark:border-nightline text-muted dark:text-nightmuted transition-colors hover:text-ink dark:hover:text-nightink md:hidden"
            >
              @if (showMenu()) {
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              } @else {
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              }
            </button>
          </div>
        </div>

        @if (showMenu()) {
          <div class="md:hidden border-t border-line dark:border-nightline bg-ivory dark:bg-night px-6 py-4 shadow-lg">
            @for (item of NAV_ITEMS; track item.path) {
              <a
                routerLink="{{ item.path }}"
                routerLinkActive="nav-active"
                [routerLinkActiveOptions]="{ exact: item.path === '' }"
                class="block py-2.5 text-sm font-medium text-muted dark:text-nightmuted transition-colors hover:text-ink dark:hover:text-nightink"
                (click)="closeMenu()"
              >
                {{ item.label }}
              </a>
            }
            <a
              routerLink="proyectos"
              (click)="closeMenu()"
              class="mt-2 inline-flex items-center justify-center rounded-lg bg-ink dark:bg-nightink px-4 py-2 text-sm font-medium text-ivory dark:text-night"
            >
              Ver proyectos
            </a>
          </div>
        }
      </header>

      <!-- ── Contenido ── -->
      <main class="pt-16">
        <router-outlet></router-outlet>
      </main>

      <!-- ── Footer ── -->
      <footer class="border-t border-line dark:border-nightline">
        <div class="mx-auto max-w-6xl px-6 md:px-12 py-10">
          <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p class="font-mono text-sm font-bold">&lt;JV /&gt;</p>
            <p class="text-sm text-muted dark:text-nightmuted">
              &copy; {{ currentYear() }} — Hecho con Angular y Tailwind
            </p>
          </div>
        </div>
      </footer>
    </div>
  `,
})
export class Layout {
  NAV_ITEMS = [
    { label: 'Inicio', path: '' },
    { label: 'Proyectos', path: 'proyectos' },
    { label: 'Sobre mí', path: 'sobre-mi' },
    { label: 'Contacto', path: 'contacto' },
  ];

  showMenu = signal(false);
  isDark = signal(false);
  currentYear = signal(new Date().getFullYear());

  constructor() {
    this.isDark.set(
      typeof document !== 'undefined' &&
        document.documentElement.classList.contains('dark'),
    );
  }

  toggleMenu(): void {
    this.showMenu.update((v) => !v);
  }

  closeMenu(): void {
    this.showMenu.set(false);
  }

  toggleTheme(): void {
    const next = !this.isDark();
    this.isDark.set(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      /* sin almacenamiento */
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  /** Cierra el menú mobile al hacer click fuera del header/menú. */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement | null;
    if (target && !target.closest('.site-header')) {
      this.closeMenu();
    }
  }
}
