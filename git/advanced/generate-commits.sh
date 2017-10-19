for d in {1..15};
 do touch file$d.md;
 git add file$d.md;
 git commit -m "adding file $d";
 done