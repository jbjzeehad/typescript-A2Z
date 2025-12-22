### String methods

- charAt() : Returns the character at the given index

```ts
let str: string = "Hello";
console.log(str.charAt(1)); // "e"
```

- concat() : Returns a combination of the two or more specified strings

```ts
let str1: string = "Hello";
let str2: string = "World";
console.log(str1.concat(" ", str2)); // "Hello World"
```

- indexOf() : Returns an index of first occurence of the specified substring from a string

```ts
let str: string = "Hello World";
console.log(str.indexOf("o")); // 4
```

- replace() : Replaces the matched substring with a new substring

```ts
let str: string = "Hello World";
console.log(str.replace("World", "TypeScript")); // "Hello TypeScript"
```

- split() : Splits the string into substrings and returns an array

```ts
let str: string = "apple,banana,orange";
console.log(str.split(",")); // ["apple", "banana", "orange"]
```

- toUpperCase() : Converts all the characters of the string into upper case

```ts
let str: string = "hello";
console.log(str.toUpperCase()); // "HELLO"
```

- toLowerCase() : Converts all the characters of the string into lower case

```ts
let str: string = "HELLO";
console.log(str.toLowerCase()); // "hello"
```
