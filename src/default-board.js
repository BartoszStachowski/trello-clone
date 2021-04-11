import { uuid } from './utils';

export default {
  name: 'workshop',
  columns: [
    {
      name: 'todo',
      tasks: [
        {
          description: 'Event for you I have something sweet.',
          name: 'first task',
          id: uuid(),
          userAssigned: null,
        },
        {
          description: 'Doctor Howard please get rid this sample.',
          name: 'second task',
          id: uuid(),
          userAssigned: null,
        },
        {
          description: 'It is not human',
          name: 'and thrid',
          id: uuid(),
          userAssigned: null,
        },
      ],
    },
    {
      name: 'in-progress',
      tasks: [
        {
          description: 'My name is Bartek',
          name: 'first task',
          id: uuid(),
          userAssigned: null,
        },
      ],
    },
    {
      name: 'done',
      tasks: [
        {
          description: 'My son is gamer',
          name: 'first task',
          id: uuid(),
          userAssigned: null,
        },
      ],
    },
  ],
};
