#!/usr/bin/env bash

testfile=$1
reffile=$2
output="$(node $1)"
ref="$(cat $2)"

if [ "$output" = "$ref" ]
then
    echo "[TEST] $1: Passed" && exit 0
else
    echo "[TEST] $1: Failed" && exit 1
fi
