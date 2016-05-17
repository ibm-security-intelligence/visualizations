#!/bin/sh
FILE=com.ibm.offense_visualizer.0.0.1.zip

echo "Enter the IP or hostname of your QRadar console:"
read HOST
echo

DIR="`dirname $0`"
cd $DIR
mkdir -p app/static
cp *.py app
cp *.js app/static
cp *.css app/static
cp *.html app/static
rm -f $FILE
zip -r $FILE app manifest.json
rm -Rf app
echo

curl -u admin -k --header "Content-Type: application/zip" --data-binary "@$FILE" https://$HOST/api/gui_app_framework/application_creation_task

echo
echo "If the above text contains CREATING, then this operation succeeded. Wait a few minutes, then refresh the QRadar UI"
