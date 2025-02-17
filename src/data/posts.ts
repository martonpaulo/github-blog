import { PostType } from "@/types/post";

export const posts: PostType[] = [
  {
    id: "1",
    title: "JavaScript data types and data structures",
    authorUsername: "martonpaulo",
    timestamp: "2021-09-01T12:00:00Z",
    commentsCount: 5,
    content: `
Welcome to an extensive guide on JavaScript **primitives** and **objects**. Below you'll find:

- **Primitive Types**: \`string\`, \`number\`, \`boolean\`, \`undefined\`, \`null\`, \`symbol\`, \`bigint\`.
- **Complex Types**: Arrays, Objects, Functions.

> **Tip:** Always check data types before performing operations!

## Examples

\`\`\`javascript
const num = 42;
const str = "Hello, World!";
\`\`\`

Enjoy exploring the diverse data structures that power your applications.
    `,
  },
  {
    id: "2",
    title: "React component patterns",
    authorUsername: "martonpaulo",
    timestamp: "2021-09-02T12:00:00Z",
    commentsCount: 3,
    content: `
Discover multiple patterns to compose your React components:

1. **Higher-Order Components (HOC)**
2. **Render Props**
3. **Custom Hooks**

---

**Example of a Render Prop:**

\`\`\`jsx
<RoleProvider>
  {(role) => <Display role={role} />}
</RoleProvider>
\`\`\`

*Note:* Experiment with each technique to find what suits your project best.
    `,
  },
  {
    id: "3",
    title: "Understanding TypeScript",
    authorUsername: "martonpaulo",
    timestamp: "2021-09-03T12:00:00Z",
    commentsCount: 4,
    content: `
TypeScript adds powerful static types to JavaScript. This guide covers:

- **Type Inference**
- **Interfaces & Types**
- **Generics**

> “TypeScript is a superset of JavaScript, which means any valid JavaScript code is also valid TypeScript.” – *Microsoft*

For instance, here's a simple interface:

\`\`\`ts
interface User {
  name: string;
  age: number;
}
\`\`\`

Stay curious and keep experimenting with types to build robust applications.
    `,
  },
  {
    id: "4",
    title: "Advanced CSS Techniques",
    authorUsername: "martonpaulo",
    timestamp: "2021-09-04T12:00:00Z",
    commentsCount: 2,
    content: `
Elevate your CSS skills with techniques such as:

- **Flexbox & Grid Layouts**
- **CSS Animations & Transitions**
- **Responsive Design**

| Technique         | Usage Example                 |
| ----------------- | ----------------------------- |
| Flexbox           | Centering items easily        |
| Grid              | Creating complex layouts      |

> **Did You Know?**
> CSS can also be used to create art and illustrations!

Experiment with pseudo-selectors, media queries, and custom properties to achieve amazing designs.
    `,
  },
  {
    id: "5",
    title: "Node.js Performance Optimization",
    authorUsername: "martonpaulo",
    timestamp: "2021-09-05T12:00:00Z",
    commentsCount: 6,
    content: `
Improve your Node.js applications using techniques like:

- **Asynchronous Programming**
- **Caching Strategies**
- **Load Balancing**

\`\`\`bash
# Running your app in production mode
node --max-old-space-size=4096 app.js
\`\`\`

**Highlights:**
- Use **clusters** to utilize multi-core systems.
- Monitor performance with tools like **PM2**.

Dive into the optimization strategies and measure the impact on your app's performance.
    `,
  },
  {
    id: "6",
    title: "GraphQL vs REST",
    authorUsername: "martonpaulo",
    timestamp: "2021-09-06T12:00:00Z",
    commentsCount: 7,
    content: `
A comprehensive comparison:

## REST
- **Stateless** architecture.
- **Multiple Endpoints** for different resources.

## GraphQL
- Uses a **single endpoint**.
- **Flexible queries** to fetch only the necessary data.

### Comparison Table

| Feature              | REST               | GraphQL             |
| -------------------- | ------------------ | ------------------- |
| Endpoints            | Multiple           | Single              |
| Data Fetching        | Over-fetching      | Precise             |

> **Insight:** Choose GraphQL if you need efficient data retrieval; go with REST for simplicity and caching.

Try combining both paradigms to benefit from their strengths.
    `,
  },
  {
    id: "7",
    title: "Deno: Secure JavaScript Runtime",
    authorUsername: "martonpaulo",
    timestamp: "2024-09-07T12:00:00Z",
    commentsCount: 0,
    content: `
Deno is a modern, secure, and efficient runtime for JavaScript and TypeScript, designed to address many of Node.js’s shortcomings.  

---

## 🔥 Key Features  

| Feature               | Description                                                                 |
|-----------------------|---------------------------------------------------------------------------|
| ✅ **Secure by Default** | No file, network, or environment access unless explicitly enabled.        |
| ⚡ **TypeScript Support** | Runs TypeScript out of the box, no extra setup needed.                    |
| 🧪 **Built-in Testing** | Native test runner, no external libraries required.                      |
| 📦 **Standard Library** | Comes with a rich standard library for common functionalities.           |
| 🏗 **Single Executable** | Ships as a single binary with no need for \`node_modules\`.               |
| 🌎 **URL-Based Imports** | Import dependencies directly from URLs, eliminating package managers.  |

---

## 📌 How to Install Deno  

1. **Using Shell (Mac/Linux)**  
   \`\`\`sh
   curl -fsSL https://deno.land/install.sh | sh
   \`\`\`
2. **Using PowerShell (Windows)**  
   \`\`\`powershell
   iwr https://deno.land/install.ps1 -useb | iex
   \`\`\`
3. **Using Homebrew (Mac)**  
   \`\`\`sh
   brew install deno
   \`\`\`
4. **Using Scoop (Windows)**  
   \`\`\`sh
   scoop install deno
   \`\`\`
5. **Using Cargo (Rust)**  
   \`\`\`sh
   cargo install deno
   \`\`\`

---

## 🛠 Quick Example  

\`\`\`typescript
import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 8000 });

console.log("Server running on http://localhost:8000");

for await (const req of server) {
  req.respond({ body: "Hello, Deno!" });
}
\`\`\`

---

## ✅ To-Do List  

- [x] Install Deno  
- [x] Run a simple server  
- [ ] Explore the standard library  
- [ ] Build a full project  

---

## 🤯 Did You Know?  

> **Deno was created by [Ryan Dahl](https://github.com/ry) in 2018, the same developer who built Node.js.**  
> He designed Deno to fix many of the issues he regretted in Node.js, such as security flaws and complex module management.  

---

## 🔗 Useful Links  

- 📖 [Official Documentation](https://deno.land/manual)  
- 🛠 [Deno Standard Library](https://deno.land/std)  
- 📰 [Deno Blog](https://deno.com/blog)  
- 💬 [Community & Discord](https://discord.gg/deno)  

---

### Additional Markdown Features  

- **Bold Text**: **Deno is fast!**  
- *Italic Text*: *Deno supports TypeScript natively.*  
- ~~Strikethrough~~: ~~Deno requires package.json~~ (it doesn’t)  
- ==Highlighting==: ==Deno has built-in testing==  
- Superscript: Deno^2^ is powerful  
- Subscript: H~2~O runs on Deno  
- Emoji: Deno is awesome! 🚀🔥  
- Footnote: Deno is written in Rust[^1]  

[^1]: Rust is a systems programming language known for safety and performance.  

---

### My Great Heading {#custom-id}  

#### Definition List  

Deno  
: A secure runtime for JavaScript and TypeScript  

Node.js  
: An older JavaScript runtime built on V8  

---

Happy coding with **Deno!** 🎉    `,
  },
];
