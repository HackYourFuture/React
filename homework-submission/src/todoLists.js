const staticList = [
  'Get out of bed, Wed Sep 13 2017',
  'Brush teeth, Thu Sep 14 2017',
  'Eat breakfast, Fri Sep 15 2017',
];

const dynamicList = [
  {
    id: 1,
    description: 'Get out of bed',
    deadline: '2017-09-11',
    done: true,
  },
  {
    id: 2,
    description: 'Brush teeth',
    deadline: '2017-09-10',
    done: false,
  },
  {
    id: 3,
    description: 'Eat breakfast',
    deadline: '2017-09-09',
    done: false,
  },
];

export { staticList, dynamicList };
