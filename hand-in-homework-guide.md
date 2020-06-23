# How to hand in homework

In this module you'll submit your homework only using GIT and GitHub.

1. [GitHub](https://www.github.com/HackYourFuture/React)

## 1. GitHub homework guide

<a href="http://www.youtube.com/watch?feature=player_embedded&v=CpYARPYGQU8" target="_blank"><img src="./assets/submit-homework.png" width="400" height="250" alt="HYF Video" /></a>

Watch the video (by clicking the image) or go through the following walk-through to learn how to submit your homework:

ONE TIME ONLY (START OF EVERY MODULE)

1. Create a [fork](https://help.github.com/en/articles/fork-a-repo) of the teacher's forked repository (ask in Slack what the URL for it is). You do this by using the `fork` option on the top right
2. Navigate to the URL of the cloned repository (it should be in your personal GitHub account, under "repositories")
3. Clone the repository, using SSH, to your local machine. You can do this by typing in `git clone <git url>` in the command line
4. On your local machine, navigate to the folder using the command line
5. Make sure you've cloned it correctly by running `git status` from the command line.

EVERY WEEK

1. Create a new branch for each week you have homework. For example, for the week 1 homework for React create a branch called `week-1-homework-YOUR_NAME`
2. Inside the correct week folder, create another folder called `homework`. Make your homework files in there, while on the correct branch
3. Once you're finished, add and commit everything. Make the commit message meaningful, for example `finished project for homework week1`
4. deploy the homework on netlify/now and copy the the deplyed link.
5. Push the branch to your forked repository
6. On the GitHub page of your forked repository, click on the `create pull request` button. Make sure the `base repository` is your teacher's repository, on branch master
7. Give the pull request a title in the following format:

```markdown
Homework week 1 <Your name>
```

8. add the deployed url of the homework to the pull request description.
9. Submit the pull request from your forked repository branch into the `master` branch
10. Do a little victory dance because you did it! Good job!

For a visual walkthrough the steps please watch the following video one of our teachers, Unmesh Joshi, has made:

-   [GitHub Homework flow](https://www.youtube.com/watch?v=2qJPAVTiKPE)

If you have any questions or if something is not entirely clear ¯\\\_(ツ)\_/¯, please ask/comment on Slack!
