@echo off

:LOOP
echo Waiting 30 Minutes before next update...
timeout /T 1800 /nobreak

call cache.bat > cache.appcache
call humans.bat > humans.txt

goto LOOP