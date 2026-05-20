@echo off
echo Iniciando backend...
cd /d "C:\Users\polan\Documents\ESTRUCTURA DE DATOS\turnos_app_codigo P1\backend-turnos"
start "Backend Spring Boot" cmd /k ".\mvnw.cmd spring-boot:run"

echo Esperando 20 segundos para que el backend arranque...
timeout /t 20 /nobreak

echo Iniciando frontend...
cd /d "C:\Users\polan\Documents\ESTRUCTURA DE DATOS\turnos_app_codigo P1\turnos-app"
start "Frontend Vite" cmd /k "npm run dev"

echo.
echo Listo! Abre http://localhost:5173
pause