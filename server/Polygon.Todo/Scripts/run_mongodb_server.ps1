$DOCDIR = [System.Environment]::GetFolderPath("MyDocuments")
$TARGETDIR = "$DOCDIR\databases\mongo\"
$MONGO_PAHT = "C:\Program Files\MongoDB\Server\3.6\bin\"


if ((Test-Path -Path $TARGETDIR) -and (Test-Path -Path $MONGO_PAHT)) {
	$MONGO_CLIENT_START = "$MONGO_PAHT\mongo.exe"
	Invoke-Expression $MONGO_CLIENT_START
} else {
	Write-Error "MongoDB is not installed at the computer."
}