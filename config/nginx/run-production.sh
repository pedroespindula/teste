#!/usr/bin/env bash
export DOLLAR='$'
envsubst < /config/nginx/nginx.conf.template > /config/nginx/site-confs/default
nginx -g "daemon off;"
