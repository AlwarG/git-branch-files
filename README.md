# Git-Branch-Files for VS Code

The extension will open the files for the current branch.

## 1. open changed files
![open-files](https://user-images.githubusercontent.com/31626278/124465851-88446400-ddb3-11eb-9a0e-4d2e8c0e954e.gif)

## 2. close current and open changed files
![open-close-files](https://user-images.githubusercontent.com/31626278/124466014-c2156a80-ddb3-11eb-98dc-3e0a4ef7a155.gif)


# Requirements
1. Your branch name should not be a source(master or main) branch.
2. It will open only the first 15 changed files.

# Configuration
  
```javascript
"git-branch-files": {
  "maximum_limit": 15,
  "source_branch": "master",
  "excluded_filetypes": []
},
```
1. **maximum_limit** - The maximum number of files to be open and its default value is 15.
2. **excluded_filetypes** - Here, you can give the file types which should not be open(example: 'json').
3. **source_branch** - The source branch of the repository and its default value is master.

# License
This project is licensed under the [MIT License](https://github.com/AlwarG/git-branch-files/blob/main/LICENSE).
