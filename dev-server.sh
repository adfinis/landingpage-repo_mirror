#!/bin/bash

function tear_down() {
  pkill -f -c ./cors-proxy.py
}

trap tear_down EXIT

./cors-proxy.py & cd solid && yarn run dev
