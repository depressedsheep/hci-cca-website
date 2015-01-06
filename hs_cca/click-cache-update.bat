@echo off

:LOOP
call cache.bat > cache.appcache
call humans.bat > humans.txt
echo Press any key to update cache...
pause > nul
cls
goto LOOP