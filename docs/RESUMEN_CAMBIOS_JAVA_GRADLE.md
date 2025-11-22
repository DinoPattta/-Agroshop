# Resumen de cambios: Solución error "invalid source release: 21"

Fecha: 21-11-2025

Breve: Se produjo un fallo al compilar Android porque varios Gradle solicitaban Java 21 mientras la JDK disponible era la 17. Aplicamos varias correcciones y añadimos un parche persistente que fuerza Java 17 en todos los subproyectos.

**Archivos modificados (rutas relativas al repo)**

- `android/build.gradle` (RAÍZ)
  - Cambiado: se añadió un bloque `subprojects { proj -> proj.afterEvaluate { ... } }` que fuerza:
    ```groovy
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
    ```
  - Propósito: Sobrescribe las configuraciones generadas por Capacitor (por ejemplo `capacitor.build.gradle`) en tiempo de evaluación. Esta es la solución persistente y recomendada.

- `android/app/capacitor.build.gradle` (GENERADO)
  - Cambiado: `JavaVersion.VERSION_21` → `JavaVersion.VERSION_17`.
  - Nota: Este archivo se regenera con `npx cap update`; por eso lo complementamos con la solución en `android/build.gradle`.

- `android/capacitor-cordova-android-plugins/build.gradle` (GENERADO)
  - Cambiado: `JavaVersion.VERSION_21` → `JavaVersion.VERSION_17`.

- `node_modules/@capacitor/android/capacitor/build.gradle` (DEPENDENCIA)
  - Cambiado: `JavaVersion.VERSION_21` → `JavaVersion.VERSION_17`.
  - Nota: Cambios en `node_modules` son temporales (se perderán con reinstalaciones). Automáticamente parcheamos esto con un script.

- `scripts/patch-java-version.ps1` (NUEVO)
  - Script PowerShell que reemplaza `JavaVersion.VERSION_21` por `JavaVersion.VERSION_17` en los archivos generados y en `node_modules` listados.
  - Ruta: `scripts/patch-java-version.ps1`.
  - Uso recomendado tras regeneraciones: `.iles\scripts\patch-java-version.ps1` o `powershell -ExecutionPolicy Bypass -File .\scripts\patch-java-version.ps1`.


**Por qué funcionó**

- El error `invalid source release: 21` ocurría porque Gradle invocaba `javac --release 21` (o pedía source level 21) y la JDK instalada es 17.
- Cambiar archivos generados ayuda, pero no es persistente. Forzar `sourceCompatibility/targetCompatibility = VERSION_17` a nivel raíz y *después* de la evaluación de cada subproyecto garantiza que esas propiedades sustituyan las configuraciones generadas.


**Comandos para reproducir/validar**

- Ver versión Java actual:
```powershell
java -version
javac -version
```

- Ejecutar build (desde la raíz del repo):
```powershell
npx cap update
# opcional si quieres aplicar parche a node_modules/generated files
powershell -ExecutionPolicy Bypass -File .\scripts\patch-java-version.ps1
npx cap run android
```

- Para más detalle de errores de Gradle:
```powershell
cd android
.\gradlew assembleDebug --stacktrace --info
```


**Recomendaciones de mantenimiento**

- Mantén `android/build.gradle` con el bloque `subprojects` (commiteado).
- Añade `scripts/patch-java-version.ps1` al control de versiones (ya está en `scripts/`).
- Opcionalmente automatiza la ejecución del script con un `postinstall` en `package.json` o usa `patch-package` para parchear `node_modules` (más robusto para dependencias).

Ejemplo `package.json` (fragmento para `postinstall`):
```json
"scripts": {
  "postinstall": "powershell -ExecutionPolicy Bypass -File .\\scripts\\patch-java-version.ps1"
}
```

- Documenta en el README del proyecto (o en `docs/`) este archivo para que otros colaboradores sepan el porqué de la configuración.


**Notas finales / riesgos**

- Forzar `sourceCompatibility`/`targetCompatibility` a nivel raíz es seguro si tu código y dependencias son compatibles con Java 17. Si alguna dependencia requiere Java 21 por características, deberías actualizar la JDK a 21 en lugar de forzar 17.
- Cambios en `node_modules` son temporales: usar `postinstall` o `patch-package` evita regressiones tras reinstalaciones.


Si quieres, puedo:
- Añadir el `postinstall` al `package.json` ahora mismo.
- Crear un parche con `patch-package` (instalar `patch-package` y generar el parche) y documentar cómo usarlo.

---
Archivo generado por la asistencia técnica; guarda este `docs/RESUMEN_CAMBIOS_JAVA_GRADLE.md` en tu repo y haz `git add` + `git commit` para conservar la documentación.
