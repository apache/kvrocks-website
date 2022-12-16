# Backup

## Full backup

You can use `bgsave` command to trigger Kvrocks to generate a backup, and use `rsync` tool to copy all files of backup to remote server.

## Incremental backup

You can try incremental backup if your Kvrocks database doesn't change quickly, this way could use less network bandwidth. This solution is similar with Kvrocks resuming broken transfer based files on full synchronization.

Firstly, you should get old remote backup files list, and current new backup files list (by `bgsave` command and read `backup` directory).

Secondly, by comparing them, figure out invalid files of old remote backup, and delete them. Please notice that `CURRENT` file may be invalid, but you should always fetch it.

Finally, copy only the files that old remote backup doesn't have but new backup has, and store into remote server.
