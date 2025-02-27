---
{
  layout: '../../../layouts/Blog.astro',
  scheme: "tech",
  title: "Design Follows Development",
  description: "As a play on Form Follows Function, I rant a bit about web design being deferential to development. Less Subtly; Designers need to stop telling me what to do! Especially when they're wrong. <3",
  pubDate: '2023-03-10',
  updatedDate: '2023-03-10',
  tag: "design"
}
---
A designer, assuming they're not also a code expert, works with a client to create a visual representation of their brand and content.

They create artwork, approximating the look and feel of the client's vision, with consideration for the subtleties and art of visual communication.

The developer's job is to take that approximation and translate it into a real, functioning system of code and assets appropriate for the medium.

For the web, that medium is the browser. That in itself is complex because there's no such thing as a singular browser experience. The constraints of shape, size and bandwidth are never the same from user to user, device to device.

Therefore, it is the job of those experts of UI development to understand how browsers work. This is a large domain of knowledge.

The developer must work hard to honor the choices made by the designer in planning.  They must aim to achieve the aesthetic represented by, sometimes, months of work.

However, design must be true to the medium and this medium is algorithmic. It's purpose is to serve content, primarily text, of unpredictable scale and quantity.

To keep the software performant and maintainable long into the future, a developer must work with the browser's natural ways of rendering content.  When the developer subverts that highest order principle in the name of non-systematic aesthetics (exceptions), you begin the inevitable March toward technical debt and unmaintainability.

It is up to the cooperation of designer and developer to identify the axioms that underly the design so they can be codified into software.  In cases where a choice in the design does not conform to the underlying system (an exception), we must err on the side of the system, and therefore the browser.

Let the browser do the work. Don't fight with the browser's natural behavior.

A designer who is not also an expert in code should concede to the expertise of the developer who is, when appropriate.

A designer who IS also an expert in code, should already understand this.
