$DOCDIR = [System.Environment]::GetFolderPath("MyDocuments")
$TARGETDIR = "$DOCDIR\databases\mongo\"

if (!(Test-Path -Path $TARGETDIR)) {
	New-Item -ItemType directory -Path $TARGETDIR
}

$MONGO_PAHT = "C:\Program Files\MongoDB\Server\3.6\bin\"
if (Test-Path -Path $MONGO_PAHT) {
	$MONGO_SERVER_START = "$MONGO_PAHT\mongod.exe --dbpath $TARGETDIR"
	Invoke-Expression $MONGO_SERVER_START

	$DATABASE_SETUP_FILE = Join-Path (Get-Item -Path ".\").FullName "database_setup.js"
	$MONGO_CLIENT_START = "$MONGO_PAHT\mongo.exe $DATABASE_SETUP_FILE"
	Invoke-Expression $MONGO_CLIENT_START
} else {
	Write-Error "MongoDB is not installed at the computer."
}





