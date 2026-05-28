# 🐧 LINUX_CLUB_OS -- FI-UCV v1.0-stable

<div align="center">
  <img src="https://img.shields.io/badge/Environment-Standalone_Components-50fa7b?style=flat-square&logo=angular&logoColor=white" alt="Angular">
  <img src="https://img.shields.io/badge/Styles-Tailwind_CSS_v4.0-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/Theme-Dracula_Variant-bd93f9?style=flat-square" alt="Theme">
  <img src="https://img.shields.io/badge/Host-FI--UCV-ffb4ab?style=flat-square" alt="UCV">
</div>

---

## 🖥️ neofetch --comunidad

```text
       .---.            user@fi_ucv_linux_club
      /     \           ----------------------
      \ (@ @) /         OS: Linux-Club-OS v1.0-stable
  ..---.`-'-'.---..     Host: Facultad de Ingeniería - UCV
 /    /  _ _  \    \    Kernel: Angular-19-Standalone
|    |  /   \  |    |   Shell: zsh 5.9 + Tailwind v4 [@theme]
 \    \ \___/ /    /    Status: Production Landing & Docs (Static)
  ..---'-----'---..     Target: Estudiantes & Tech FI-UCV
      /       \         
     /         \        [████████████████████] 100% Client-Side Ready
    /           \
```

## 📁 ls -R /secciones_actuales

La plataforma funciona actualmente como una SPA (Single Page Application) estática y reactiva, estructurada por componentes modulares para facilitar la navegación:

* **`bash — 80x24 (Hero Terminal)`**: Sección principal interactiva que emula una `tty` de bienvenida con animación de cursor parpadeante (`.cursor-blink`).
* **`system_info (Neofetch Block)`**: Vitrina de especificaciones simuladas del club y paleta de colores del entorno de desarrollo.
* **`ls -R /distros (Showcase Grid)`**: Tarjetas de configuración que muestran información estructurada (tipo JSON, YAML o Nix) de las distribuciones utilizadas por los miembros.
* **`tail -f /var/log/events.log`**: Un feed automatizado y reactivo controlado por ciclos de vida de Angular que simula el volcado de logs y próximos eventos del club.


## 🛠️ sys_init --setup

Si quieres clonar el proyecto para previsualizarlo localmente o empezar a maquetar tus componentes:

```bash
# 1. Clonar el repositorio oficial
$ git clone [https://github.com/tu-organizacion/linux-club-fiucv.git](https://github.com/tu-organizacion/linux-club-fiucv.git)

# 2. Entrar al directorio raíz
$ cd linux-club-fiucv

# 3. Instalar dependencias y el compilador nativo de Tailwind v4
$ npm install

# 4. Desplegar el servidor local de desarrollo (http://localhost:4200)
$ ng serve --open
```

## 🎨 theme_config --v4

El sistema visual está construido sobre el nuevo motor de Tailwind CSS v4, centralizando toda la paleta de colores Dracula, fuentes monoespaciadas (`JetBrains Mono`, `Space Mono`).

```bashbash
@theme {
  --color-background: #11131e;
  --color-surface-container: #1d1f2b;
  --color-primary-container: #50fa7b; /* Verde Terminal */
  --color-secondary: #75d4e8;         /* Cyan */
  --font-code-snippet: "JetBrains Mono", monospace;
}
```


## 🤝 git push origin aportes_fiucv -- ¿Cómo mostrar tu proyecto? (¡Aportes FI-UCV!)

📢 Esta plataforma es un espacio abierto para que cualquier estudiante de la Facultad de Ingeniería pueda dar a conocer sus proyectos técnicos, scripts y contribuciones de software libre. 

💡 ¡No necesitas ser un experto en Git para colaborar! Sigue estos sencillos pasos:

### 🍴 1. Haz una copia del proyecto (Fork)
Ve a la esquina superior derecha de este repositorio en GitHub y haz clic en el botón **Fork**. Esto creará una copia exacta de la página en tu perfil para que puedas editarla con total seguridad.

### 📥 2. Descarga tu copia y edita el código
Clona tu repositorio copiado en tu computadora y añade tus componentes *standalone*, scripts o información técnica dentro de la estructura del proyecto. 

*⚡ Tip técnico: Asegúrate de que tu proyecto compile sin errores ejecutando `ng serve` antes del siguiente paso.*

### 🚀 3. Envía tus cambios (Pull Request)
Cuando tu sección esté lista y se vea genial:

1. 📤 Sube los cambios a tu GitHub personal.
2. 🔄 Haz clic en el botón **"New Pull Request"** (Solicitud de fusión).
3. 🛠️ Los administradores del club revisarán que el diseño visual mantenga la estética de la terminal y ¡listo! Tu proyecto formará parte de la página oficial del club.