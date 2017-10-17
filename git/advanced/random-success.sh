#!/usr/bin/bash 

VAR=$((1 + RANDOM % 10))

if [ $((VAR%2)) -eq 0 ];
then
    echo "BUG";
else
    echo "OK";
fi