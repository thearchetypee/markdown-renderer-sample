import Markdown from "markdown-to-jsx";

const markdown = `# Hello, Markdown!
## Lists

### Ordered List
1. Item 1
2. Item 2
3. Item 3

### Unordered List
- Bullet 1
- Bullet 2
  - Sub-bullet A
  - Sub-bullet B
- Bullet 3

## Images

![Alt text](https://picsum.photos/200/300)

## Links

[Visit Google](https://www.google.com)

## Quotes

> This is a blockquote.
> It can span multiple lines.

<inlinecode>Inline code</inlinecode>`;

const BlogRenderer = () => {
  return (
    <Markdown
      options={{
        overrides: {
          inlinecode: InlineCode,
        },
      }}
    >
      {markdown}
    </Markdown>
  );
};

export default BlogRenderer;

const InlineCode = ({ children }) => {
  return (
    <span
      style={{
        "border-radius": "5px",
        background: "rgba(238, 237, 237, 0.823)",
        border: "1px solid #adadad",
        padding: "0px 6px",
        display: "inline",
      }}
    >
      {" "}
      {children}{" "}
    </span>
  );
};
