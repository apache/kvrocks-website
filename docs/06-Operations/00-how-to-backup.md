# How to backup
## Full backup
Use `bgsave` command to trigger Kvrocks to generate a backup, and use `rsync` tool to copy all files of backup to remote server.

## Incremental backup
You can try use incremental backup if your kvrocks database doesn't be changed quickly, this way could use less network bandwidth.

This solution is similar with kvrocks resuming broken transfer based files on full synchronization.
Firstly, you should get old remote backup files list, and current new backup files list (by `bgsave` command and read `backup` directory); Secondly, by comparing them, you will know invalid files of old remote backup and delete them, please notice that `CURRENT` file may be invalid, you should always fetch it; Finally, you only copy files that old remote backup doesn't have but new backup has, and store into remote server.
