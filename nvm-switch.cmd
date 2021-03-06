@echo off
nvm ls
for /f "delims="  %%i in ('nvm ls') do (
    @echo;%%i|find "*">nul 2>nul || (
        nvm use %%i
        goto ends
    )
)

:ends