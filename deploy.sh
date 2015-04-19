#!/bin/bash

git checkout -b gh-pages
git checkout gh-pages
mkdir build
git clone -b master git@github.com:walien/angular-conference-planning.git build/
cd build/app
git add .
git commit -m 'Auto deploy'
git push -u origin gh-pages
git checkout master

