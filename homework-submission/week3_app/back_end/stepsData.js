const stepsData = {
  steps: [
    { number: 1, description: 'Create React App.' },
    { number: 2, description: 'Creat simple NodeJs Express Server.' },
    { number: 3, description: 'Make connection between the both.' },
    {
      number: 4,
      description:
        "Test the connection: send HTTP request from React App by using Fetch('/steps'), then reforming the JSON Response to JSX Elements.",
    },
    {
      number: 5,
      description:
        'Fetching data from API point foreign source, then reforming the JSON Response to JSX Elements.',
    },
    {
      number: 6,
      description: 'Finish developing stage, and move on to production stage.',
    },
    {
      number: 7,
      description: 'Problem: the content is rendered twice.',
    },
    {
      number: 8,
      description: 'Problem: after hosting on netlify.com, Fetch from Origin is not working.',
    },
    {
      number: 9,
      description: 'Add build in static Data, require it and reform it as JSX elements.',
    },
    {
      number: 10,
      description: 'Rebuild and reupload on netlify.com.',
    },
  ],
};

module.exports = stepsData;
