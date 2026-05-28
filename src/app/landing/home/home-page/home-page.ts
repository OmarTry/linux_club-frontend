import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { AppSidebar } from "../../../shared/components/app-sidebar/app-sidebar";

interface LogEntry {
  time: string;
  phrase: string;
}

@Component({
  selector: 'app-home-page',
  imports: [AppSidebar],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage implements OnInit, OnDestroy {

  private phrases: string[] = [
    "INFO: User 'torvalds' logged into session #4",
    "WARN: High CPU usage detected in /usr/bin/python",
    "SYSTEM: Network interface eth0 established link",
    "EVENT: Coffee break routine initiated",
    "INFO: Git commit pushed to origin/master",
    "SYSTEM: Package updates available (42 items)",
    "DEBUG: Garbage collector reclaimed 124MiB"
  ];

  // Usamos una Signal para los logs estáticos iniciales y dinámicos (Reactividad pura)
  public logs = signal<LogEntry[]>([
    { time: '[2023-10-20 09:12]', phrase: 'SYSTEM: Initialization complete.' },
    { time: '[2023-10-21 14:00]', phrase: 'EVENT: Kernel Workshop @ Library_A' },
    { time: '[2023-10-22 18:30]', phrase: 'EVENT: Bash Scripting speedrun session' },
    { time: '[2023-10-24 18:00]', phrase: 'EVENT: Installfest @ Root-HQ [UPCOMING]' },
    { time: '[2023-10-25 10:00]', phrase: 'CRON: Automated system backup initiated...' },
    { time: '[2023-10-26 21:00]', phrase: 'EVENT: Movie Night: "Revolution OS"' },
    { time: '[2023-10-28 12:00]', phrase: 'EVENT: FOSS Hackathon [48h]' }
  ]);

  private intervalId: any;

  ngOnInit(): void {
    // Iniciamos la simulación del tail -f cada 4 segundos
    this.intervalId = setInterval(() => {
      this.addLog();
    }, 4000);
  }

  ngOnDestroy(): void {
    // 🛡️ Seguridad de memoria: Si el usuario sale de la Home, apagamos el timer
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private addLog(): void {
    const now = new Date();
    const timeFormatted = `[${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}]`;
    const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];

    // Creamos la nueva línea
    const newEntry: LogEntry = { time: timeFormatted, phrase: randomPhrase };

    // Actualizamos la Signal manteniendo un máximo de 20 elementos para no colapsar la RAM
    this.logs.update(currentLogs => {
      const updated = [...currentLogs, newEntry];
      if (updated.length > 20) {
        updated.shift(); // Removemos el primer log antiguo
      }
      return updated;
    });

    // Forzamos el scroll automático al fondo después de que Angular renderice la nueva línea
    setTimeout(() => {
      const container = document.getElementById('log-container');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 50);
  }
}
