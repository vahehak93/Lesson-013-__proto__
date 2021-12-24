# Lesson 013 | `__proto__`

> Bellow is the Github link for all done homeworks.

[Homeworks 13 - Lesson 013 | `__proto__`](https://github.com/vahehak93/Lesson-013-__proto__.git)

---

> Tasks | proto

- Task 1\
 What will be output?
 ```javascript
const Human = {
    isHuman: true,
    hasBrain: () => (Math.random() > 0.9 ? true : false),
    breath: () => {
        if (Math.random() > 0.8) {
        console.log("breath");
        } else {
        console.log("😴 ");
        }
    },
};

const User = {
    __proto__: Human,
    name: "John",
    surname: "Doe",
    getFullName: () => `${User.name} ${User.surname}`,
};

const Programmer = {
    __proto__: User,
    code: () => {
        if (Math.random() > 0.2) {
        console.log("shit code");
        } else {
        console.log("code that still smells");
        }
    },
};

Programmer.breath();
```

- Task 2\
Write `Pagination` object that will get an `array` and `pageSize`, then will return the following.
  - prevPage
  - nextPage
  - firstPage
  - lastPage
  - goToPage
  - getPageItems
```javascript
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 4);
Pagination.getPageItems(); // ["a", "b", "c", "d"]
Pagination.nextPage(); // add the current page by one
Pagination.getPageItems(); // ["e", "f", "g", "h"]
Pagination.nextPage().nextPage(); // the ability to call chainable
Pagination.goToPage(3); // current page must be set to 3
```
- Task 3\
Write an Airplane object that initializes `name`.\
Give airplanes the ability to `.takeOff()` and `.land()`:
  - If a plane takes off, its `isFlying` property is set to true.
  - If a plane lands, its `isFlying` property is set to false.
