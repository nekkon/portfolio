import os
print os.path.abspath(os.curdir)
os.chdir("..")
from subprocess import call
call('npm run ssr')