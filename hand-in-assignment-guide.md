# How to hand in assignments

In this module you'll submit your assignment only using GIT and GitHub.

1. [GitHub](https://www.github.com/HackYourFuture/React)

## 1. GitHub assignment guide

<a href="http://www.youtube.com/watch?feature=player_embedded&v=CpYARPYGQU8" target="_blank"><img src="./assets/submit-assignment.png" width="400" height="250" alt="HYF Video" /></a>

Watch the video (by clicking the image) or go through the following walk-through to learn how to submit your assignment:

ONE TIME ONLY (START OF EVERY MODULE)

1. Create a [fork](https://help.github.com/en/articles/fork-a-repo) of the assignment module repository. For JavaScript (as well as the next 2 modules), the assignment module repository is `https://www.github.com/HackYourAssignment/React-cohortXX` where XX is your cohort number. You do this by using the `fork` option on the top right
2. Navigate to the URL of the cloned repository (it should be in your personal GitHub account, under "repositories")
3. Clone the repository, using SSH, to your local machine. You can do this by typing in `git clone <git url>` in the command line
4. On your local machine, navigate to the folder using the command line
5. Make sure you've cloned it correctly by running `git status` from the command line.

EVERY WEEK

1. Do a `git pull` on your main branch to get the latest version.
2. Create a new branch for each week you have an assignment. For example, for the week 1 assignment for JavaScript create a branch called `YOUR_NAME-w1-JavaScript`. Don't forget to checkout this branch after creating it.
3. Make your assignment!
4. Once you're finished, add your assignment to a commit. Make sure you *only* commit your assignment files and nothing else. You can use `git add -p` if you only want to add a couple files. You can always check what is happening with the `git status` command (as one of our mentors always says, it is the console.log of git!). 
5. Create the commit (`git commit`). Make the commit message meaningful, for example `finished project for assignment week1`.
6. Deploy the assignment on netlify/now and copy the the deployed link.
7. Push the branch to your forked repository
8. On the GitHub page of your forked repository, click on the `create pull request` button. Make sure the `base repository` is your teacher's repository, on branch master
9. Give the pull request a title in the following format:

```markdown
assignment week 1 <Your name>
```

10. Add the deployed url of the assignment to the pull request description.
11. Submit the pull request from your forked repository branch into the `master` branch

If you have any questions or if something is not entirely clear ¯\\\_(ツ)\_/¯, please ask/comment on Slack!
