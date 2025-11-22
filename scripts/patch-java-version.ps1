# Script para parchear archivos Gradle generados después de 'npx cap update'
# Este script cambia JavaVersion.VERSION_21 a JavaVersion.VERSION_17 para compatibilidad con JDK 17

param(
    [string]$AndroidDir = "$(Split-Path -Parent $PSScriptRoot)\android"
)

$filesToPatch = @(
    "$AndroidDir\capacitor-cordova-android-plugins\build.gradle",
    "$AndroidDir\app\capacitor.build.gradle",
    "$(Split-Path -Parent $AndroidDir)\node_modules\@capacitor\android\capacitor\build.gradle"
)

Write-Host "Parchando archivos Gradle para Java 17..." -ForegroundColor Cyan

foreach ($file in $filesToPatch) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        if ($content -match 'JavaVersion\.VERSION_21') {
            Write-Host "  Actualizando: $file" -ForegroundColor Yellow
            $newContent = $content -replace 'JavaVersion\.VERSION_21', 'JavaVersion.VERSION_17'
            Set-Content -Path $file -Value $newContent -Encoding UTF8 -NoNewline
            Write-Host "    ✓ Completado" -ForegroundColor Green
        }
        else {
            Write-Host "  Ya está correcto: $file" -ForegroundColor Gray
        }
    }
    else {
        Write-Host "  Archivo no encontrado: $file" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Parcheo completado." -ForegroundColor Green
