export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
}

export const books: Book[] = [
  {
    id: '1',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    description:
      'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Clean Code is a must-read for every developer software engineer, project manager, team lead, or systems analyst.',
  },
  {
    id: '2',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    description:
      'The Pragmatic Programmer illustrates the best practices and major pitfalls of many different aspects of software development. It’s full of tips to help you become a better programmer.',
  },
  {
    id: '3',
    title: 'Refactoring',
    author: 'Martin Fowler',
    description:
      'Refactoring: Improving the Design of Existing Code provides a solid foundation for improving code structure without altering its functionality. It offers numerous refactoring techniques supported by real-world examples.',
  },
  {
    id: '4',
    title: 'You Don’t Know JS',
    author: 'Kyle Simpson',
    description:
      'This is a series of books diving deep into the core mechanisms of the JavaScript language. The books take a detailed look at how JavaScript works under the hood.',
  },
  {
    id: '5',
    title: 'Design Patterns',
    author: 'Erich Gamma et al.',
    description:
      'A catalog of simple and succinct solutions to common design problems. This book is one of the most influential books in the history of software engineering.',
  },
  {
    id: '6',
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    description:
      'This book explores a subset of JavaScript that’s more reliable, readable, and maintainable, and it’s a great introduction for developers aiming to use JavaScript more effectively.',
  },
  {
    id: '7',
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    description:
      'This book takes you through a modern introduction to programming using JavaScript, covering everything from basic syntax to advanced topics like closures and higher-order functions.',
  },
  {
    id: '8',
    title: 'Domain-Driven Design',
    author: 'Eric Evans',
    description:
      'Domain-Driven Design presents an approach to developing complex software in collaboration with domain experts. It emphasizes the importance of creating a unified model of the business domain.',
  },
  {
    id: '9',
    title: 'The Mythical Man-Month',
    author: 'Frederick P. Brooks Jr.',
    description:
      'This classic book on software project management draws from Brooks’s experiences managing the development of IBM’s System/360 family of computers and the OS/360 operating system.',
  },
  {
    id: '10',
    title: 'Working Effectively with Legacy Code',
    author: 'Michael Feathers',
    description:
      'If you work with legacy code, you know how challenging it can be. This book gives developers practical techniques for making legacy code easier to understand and change.',
  },
  {
    id: '11',
    title: 'Continuous Delivery',
    author: 'Jez Humble',
    description: 'Reliable Software Releases through Build, Test, and Deployment Automation',
  },
  {
    id: '12',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    description: 'Comprehensive algorithm textbook',
  },
  {
    id: '13',
    title: 'Structure and Interpretation of Computer Programs',
    author: 'Harold Abelson',
    description: 'Classic computer science textbook',
  },
  {
    id: '14',
    title: 'Soft Skills',
    author: 'John Sonmez',
    description: 'The software developer’s life manual',
  },
  {
    id: '15',
    title: 'Code Complete',
    author: 'Steve McConnell',
    description: 'A practical handbook of software construction',
  },
];


