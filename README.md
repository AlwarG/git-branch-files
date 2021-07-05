# Git-Branch-Files for VS Code

The extension will open the files for the current branch.


# Requirements
1. Your branch name should not be a source(master or main) branch.
2. It will open only the first 15 changed files.

# Configuration
  
```javascript
"git-branch-files": {
  "maximum_limit": 15,
  "excluded_filetypes": []
},
```
1. **maximum_limit** - The maximum number of files to be open and its default value is 15.
2. **excluded_filetypes** - Here, you can give the file types which should not be open(example: 'json').

# License
This project is licensed under the [MIT License](https://github.com/AlwarG/git-branch-files/blob/main/LICENSE).
