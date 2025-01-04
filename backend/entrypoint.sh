#!/bin/sh
flask db upgrade
python wsgi.py 