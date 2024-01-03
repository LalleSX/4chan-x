@echo off
setlocal

set "sourceFile=builds\4chan-XT.user.js"

:: Check if the source file exists
if not exist "%sourceFile%" (
    echo The specified file does not exist: %sourceFile%
    exit /b 1
)

:: Run npm build process, checking for errors
call npm run build
if %ERRORLEVEL% neq 0 (
    echo Error encountered during 'npm run build'.
    exit /b 2
)

:: Copy the content of the source file to clipboard
type "%sourceFile%" | clip
if %ERRORLEVEL% neq 0 (
    echo Failed to copy the file to clipboard: %sourceFile%
    exit /b 3
) else (
    echo File successfully copied to clipboard: %sourceFile%
)

:: End of the script
endlocal
