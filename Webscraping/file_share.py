import paramiko
import sys

host = sys.argv[1]
port = sys.argv[2]
user = sys.argv[3]
passw = sys.argv[4]
src = sys.argv[5]
dest = sys.argv[6]

s = paramiko.SSHClient()
s.set_missing_host_key_policy(paramiko.AutoAddPolicy())
s.connect(host,port,username=user,password=passw,timeout=4)

sftp = s.open_sftp()
sftp.put(src,dest)
