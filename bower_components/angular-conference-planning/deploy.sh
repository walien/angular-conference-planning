#!/bin/bash

mkdir build
git clone -b gh-pages git@github.com:walien/angular-conference-planning.git build/
cp -Rf app/* build/
cd build
git add .
git commit -m 'Auto deploy'
git push
cd ..
rm -rf build


