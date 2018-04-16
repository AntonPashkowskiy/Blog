$DOCDIR = [System.Environment]::GetFolderPath("MyDocuments")
$TARGETDIR = "$DOCDIR\databases\mongo\"
$MONGO_PAHT = "C:\Program Files\MongoDB\Server\3.6\bin\"


if ((Test-Path -Path $TARGETDIR) -and (Test-Path -Path $MONGO_PAHT)) {
	$MONGO_SERVER_START = "$MONGO_PAHT\mongod.exe --dbpath $TARGETDIR"
	Invoke-Expression $MONGO_SERVER_START
} else {
	Write-Error "MongoDB is not installed at the computer."
}