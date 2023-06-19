const dummyBlog = [
  //   {
  //     title: "",
  //     desc: "",
  //     content: "",
  //     thumbnail: "",
  //     status: "",
  //     visibility: "",
  //     username: "",
  //     userId: "",
  //   },
  {
    title: "The Architecture of a Modern Startup",
    desc: "Hype wave, pragmatic evidence vs the need to move fast",
    content:
      "<p>The Tech side of startups can sometimes be very fluid and contain a lot of unknowns. What tech stack to use? Which components might be overkill for now but worth keeping an eye on in the future? How to balance the pace of business features development while keeping the quality bar high enough to have a maintainable codebase?</p><p>Here I want to share our experience building https://cleanbee.syzygy-ai.com/ from the ground up &mdash; how we shaped our processes based on needs and how our processes evolved as we extended our tech stack with new components.</p><p>Businesses want to conquer the market and engineers &mdash; try cool stuff and stretch their brains. Meanwhile, the industry produces new languages, frameworks, and libraries in such quantities that you will not be able to check them all. And, usually, if you scratch the shiny surface of the Next Big Thing, you will find a good old concept. Good, if you are lucky.</p><p>One of the most exciting topics to argue about is the processes &mdash; whether you rely on trunk-based development, prefer a more monstrous GitHub flow, are a fan of mobbing, or find it more efficient to spend time in PR-based code reviews.</p><p>I have experience working in an environment where artifacts were thrown away on users without any standardized process. In case of issues, developers had a lot of fun (nope!) trying to figure out what version of components was actually deployed.</p><p>On another spectrum is the never-ending queue to CI. After you create PR you have to entertain yourself in the nearest 30 minutes by betting whether the CI cluster will find a resource to run tests over your changes. Sometimes the platform team introduces new, exciting, and useful features that might break compatibility with existing boilerplate for CI. These may result in failing all your checks at the last minute, after an hour of waiting.</p><p>I strongly believe that, as usual, it all depends on team maturity, the kind of software you are building, and various business constraints, for example, the existence of error&rsquo;s budget and the importance of time-to-market versus SLXs.</p><p>I think what is important is to have some agreed processes in place that everyone is aware of and follows. It&rsquo;s also important to have the bravery to challenge and change it if there is evidence of a better alternative.</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/0*Ps0lgic20e019ANd.png",
    status: "publish",
    visibility: "public",
    username: "Dmitry Kruglov",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title: "UI Design using Midjourney",
    desc: "Text-to-image AI tools like Midjourney, Dalle-2, and Stable Diffusion can generate images from plain text. These days the internet is full of AI-generated images, but the question is, “Can text-to-image tools can be used for UI design?”",
    content:
      "<p>Now a days, ReactJs is widely used View library worldwide. So it becomes very important to apply best architecture practices to make code reusable, maintainable and also it would help to improve code readability.</p><p>However, as React only takes care of the view layer of an application, it doesn&rsquo;t enforce any specific architecture (such as MVC or MVVM). This can make it difficult to keep your code base organized as your React project grows.</p><p>In this article, you will learn what best architecture practices you should apply to the code while using ReactJS to create reusable library.</p><p>Directory Layout Originally, the styling and the code for our components were separated. All styles lived in a shared CSS file (we use SCSS for preprocessing). The actual component (in this case FilterSlider), was decoupled from the styles:</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:598/format:webp/1*Y2IZuga2L-AW9hb5lqiTCw.jpeg",
    status: "publish",
    visibility: "public",
    username: "Suneet Bansal",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title: "Login form UI design guide",
    desc: "How to design a login form, including portfolio annotations and hierarchy strips",
    content:
      "<p>Let&rsquo;s explore a simple, minimal login form, with potential options for further improvement.</p><p>When it comes to Log-in forms there are many different UX design patterns that work for specific scenarios. There are cases where you can log in with a magic link, so only an email field is required.</p><p>There are social media account logins, Apple&rsquo;s hidden-email logins, token-based logins, and two-factor authentication ones.</p><p>Here we&rsquo;re looking at a simple one, using a Twitter handle and a password. Of course, the Twitter handle can also be an email address and it will still work.</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/0*QILgN8hbtuzuR9jt.png",
    status: "publish",
    visibility: "public",
    username: "Michal Malewicz",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title: "Painless WebGPU Programming With taichi.js",
    desc: "Modern GPU compute and rendering in JavaScript",
    content:
      "<p>As a computer graphics and programming languages geek, I am delighted to have found myself working on several GPU compilers in the past two years.</p><p>This began in 2021 when I started to contribute to taichi, a Python library that compiles Python functions into GPU kernels in CUDA, Metal, or Vulkan. Later on, I joined Meta and started working on SparkSL, which is the shader language that powers cross-platform GPU programming for AR effects on Instagram and Facebook.</p><p>Aside from personal pleasure, I have always believed, or at least hoped, that these frameworks were quite useful. They make GPU programming more accessible to non-experts, empowering people to create fascinating graphics content without having to master complex GPU concepts.</p><p>In my latest installment of compilers, I turned my eyes to WebGPU &mdash; the next-generation graphics API for the web. WebGPU promises to bring high-performance graphics via low CPU overhead and explicit GPU control, aligning with the trend started by Vulkan and D3D12 some seven years ago.</p><p>Just like Vulkan, the performance benefits of WebGPU come at the cost of a steep learning curve. Although I&rsquo;m confident this won&rsquo;t stop talented programmers worldwide from building amazing content with WebGPU, I wanted to provide people with a way to play with WebGPU without having to confront its complexity. This is how taichi.js came to be.</p><p>Under the taichi.js programming model, programmers don't have to reason about WebGPU concepts such as devices, command queues, bind groups, etc. Instead, they write plain JavaScript functions, and the compiler translates those functions into WebGPU compute or render pipelines. This means anyone can write WebGPU code via taichi.js, as long as they are familiar with basic JavaScript syntax.</p><p>The remainder of this article will demonstrate the programming model of taichi.js via a &quot;Game of Life&quot; program. As you will see, with less than 100 lines of code, we will create a fully parallel WebGPU program containing three GPU compute pipelines plus a render pipeline. The full source code of the demo can be found here, and if you want to play with the code without having to set up any local environments, go to this page.</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:640/1*BVb4Q01xLSswe6ulD-SU0A.gif",
    status: "publish",
    visibility: "public",
    username: "Dunfan Lu",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title: "The end of brands as we know them",
    desc: "The evolution of brands and creativity in the age of AI.",
    content:
      "<p>In her early thirties with two kids, Ayako Tanaka is a Japanese Instagrammer with a focus on fashion and motherhood. She has 168k followers on Instagram, a respectable but modest following compared to numerous influencers with many more followers these days.</p><p>Not too long ago, she curated a two-day pop-up shopping event during which she supposedly generated as much revenue as a flagship store of a major international apparel brand would on its opening day.</p><p>A decade ago, an individual with adequate reach selling as much as a major brand with an ample amount of awareness was inconceivable. What happened over the last decade that makes this possible now?</p><p>Back in 2013, I wrote an article called &ldquo;The End of Advertising as We Know It &mdash; and What to Do Now&rdquo; in which I observed several paradigm shifts marketers and brand builders needed to embrace in order to prepare for the impact we would see in the near future. In the subsequent years, those shifts drove a structural change in how we perceived brands.</p><p>Now in 2023, when individuals can outsell institutions, it may be the end of brands as we know them.</p><p>With the arrival of generative AI, we find ourselves in the midst of another structural change. Put another way, it&rsquo;s as if the operating system of human civilization is going through an upgrade right before our eyes.</p><p>Upgrades to Our Cognitive OS Japanese historian and podcaster Ryunosuke Fukai argues that &ldquo;the Cognitive OS of human society&rdquo; goes through an upgrade when there is an advancement in information communications technology:</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*KSt6Gc-hQRhCnCDp.jpeg",
    status: "publish",
    visibility: "public",
    username: "Rei Inamoto",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title:
      "Uploading Multiple Images on Cloudinary using Express Js and MongoDB",
    desc: "This is part three from the series of REST API with Express and MongoDB, in this part, we will discuss how to upload multiple images to Cloudinary using Express and MongoDB.",
    content:
      "<p>This is just the beginning for style queries. In the future, we&rsquo;ll have Boolean queries to determine if a custom property value exists and reduce code repetition, and currently in discussion are range queries to apply styles based on a range of values. This would make it possible to apply the styles shown here using a percent value for the chance of rain or cloud cover.</p><p>You can learn more and see more demos in blog post on style queries.</p><p>&#55357;&#56393; :has() Speaking of powerful, dynamic features, the :has() selector is one of the most powerful new CSS capabilities landing in modern browsers. With :has(), you can apply styles by checking to see if a parent element contains the presence of specific children, or if those children are in a specific state. This means, we essentially now have a parent selector.</p><p>Building on the container query example, you can use :has() to make the components even more dynamic. In it, an item with a &quot;star&quot; element gets a gray background applied to it, and an item with a checked checkbox a blue background.</p><p>But this API isn&rsquo;t limited to parent selection. You can also style any children within the parent. For example, the title is bold when the item has the star element present. This is accomplished with .item:has(.star) .title. Using the :has() selector gives you access to parent elements, child elements, and even sibling elements, making this a really flexible API, with new use cases popping up every day.</p><p>To prevent rendering performance slowdowns in large DOM trees, we recommend that you scope this selector as closely as possible. For example, using :has() to check for matches on the root html element would be slower than checking for matches in a nav bar or in a card element with a smaller tree.</p><p>&#55357;&#56393;nth-of syntax The web platform now has more advanced nth-child selection. The advanced nth-child syntax gives a new keyword (&ldquo;of&rdquo;), which lets you use the existing micro syntax of An+B, with a more specific subset within which to search.</p><p>If you use regular nth-child, such as :nth-child(2) on the special class, the browser will select the element that has the class special applied to it, and also is the second child. This is in contrast to :nth-child(2 of .special) which will first pre-filter all .special elements, and then pick the second one from that list.</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*JVbC-_VRp4LUbBYp9g_cjg.png",
    status: "publish",
    visibility: "public",
    username: "Ermias Asmare",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title: "The Architecture of a Modern Startup",
    desc: "Hype wave, pragmatic evidence vs the need to move fast",
    content:
      "<p>The Tech side of startups can sometimes be very fluid and contain a lot of unknowns. What tech stack to use? Which components might be overkill for now but worth keeping an eye on in the future? How to balance the pace of business features development while keeping the quality bar high enough to have a maintainable codebase?</p><p>Here I want to share our experience building https://cleanbee.syzygy-ai.com/ from the ground up &mdash; how we shaped our processes based on needs and how our processes evolved as we extended our tech stack with new components.</p><p>Businesses want to conquer the market and engineers &mdash; try cool stuff and stretch their brains. Meanwhile, the industry produces new languages, frameworks, and libraries in such quantities that you will not be able to check them all. And, usually, if you scratch the shiny surface of the Next Big Thing, you will find a good old concept. Good, if you are lucky.</p><p>One of the most exciting topics to argue about is the processes &mdash; whether you rely on trunk-based development, prefer a more monstrous GitHub flow, are a fan of mobbing, or find it more efficient to spend time in PR-based code reviews.</p><p>I have experience working in an environment where artifacts were thrown away on users without any standardized process. In case of issues, developers had a lot of fun (nope!) trying to figure out what version of components was actually deployed.</p><p>On another spectrum is the never-ending queue to CI. After you create PR you have to entertain yourself in the nearest 30 minutes by betting whether the CI cluster will find a resource to run tests over your changes. Sometimes the platform team introduces new, exciting, and useful features that might break compatibility with existing boilerplate for CI. These may result in failing all your checks at the last minute, after an hour of waiting.</p><p>I strongly believe that, as usual, it all depends on team maturity, the kind of software you are building, and various business constraints, for example, the existence of error&rsquo;s budget and the importance of time-to-market versus SLXs.</p><p>I think what is important is to have some agreed processes in place that everyone is aware of and follows. It&rsquo;s also important to have the bravery to challenge and change it if there is evidence of a better alternative.</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/0*Ps0lgic20e019ANd.png",
    status: "publish",
    visibility: "public",
    username: "Dmitry Kruglov",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title: "UI Design using Midjourney",
    desc: "Text-to-image AI tools like Midjourney, Dalle-2, and Stable Diffusion can generate images from plain text. These days the internet is full of AI-generated images, but the question is, “Can text-to-image tools can be used for UI design?”",
    content:
      "<p>Now a days, ReactJs is widely used View library worldwide. So it becomes very important to apply best architecture practices to make code reusable, maintainable and also it would help to improve code readability.</p><p>However, as React only takes care of the view layer of an application, it doesn&rsquo;t enforce any specific architecture (such as MVC or MVVM). This can make it difficult to keep your code base organized as your React project grows.</p><p>In this article, you will learn what best architecture practices you should apply to the code while using ReactJS to create reusable library.</p><p>Directory Layout Originally, the styling and the code for our components were separated. All styles lived in a shared CSS file (we use SCSS for preprocessing). The actual component (in this case FilterSlider), was decoupled from the styles:</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:598/format:webp/1*Y2IZuga2L-AW9hb5lqiTCw.jpeg",
    status: "publish",
    visibility: "public",
    username: "Suneet Bansal",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title: "Login form UI design guide",
    desc: "How to design a login form, including portfolio annotations and hierarchy strips",
    content:
      "<p>Let&rsquo;s explore a simple, minimal login form, with potential options for further improvement.</p><p>When it comes to Log-in forms there are many different UX design patterns that work for specific scenarios. There are cases where you can log in with a magic link, so only an email field is required.</p><p>There are social media account logins, Apple&rsquo;s hidden-email logins, token-based logins, and two-factor authentication ones.</p><p>Here we&rsquo;re looking at a simple one, using a Twitter handle and a password. Of course, the Twitter handle can also be an email address and it will still work.</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/0*QILgN8hbtuzuR9jt.png",
    status: "publish",
    visibility: "public",
    username: "Michal Malewicz",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title: "Painless WebGPU Programming With taichi.js",
    desc: "Modern GPU compute and rendering in JavaScript",
    content:
      "<p>As a computer graphics and programming languages geek, I am delighted to have found myself working on several GPU compilers in the past two years.</p><p>This began in 2021 when I started to contribute to taichi, a Python library that compiles Python functions into GPU kernels in CUDA, Metal, or Vulkan. Later on, I joined Meta and started working on SparkSL, which is the shader language that powers cross-platform GPU programming for AR effects on Instagram and Facebook.</p><p>Aside from personal pleasure, I have always believed, or at least hoped, that these frameworks were quite useful. They make GPU programming more accessible to non-experts, empowering people to create fascinating graphics content without having to master complex GPU concepts.</p><p>In my latest installment of compilers, I turned my eyes to WebGPU &mdash; the next-generation graphics API for the web. WebGPU promises to bring high-performance graphics via low CPU overhead and explicit GPU control, aligning with the trend started by Vulkan and D3D12 some seven years ago.</p><p>Just like Vulkan, the performance benefits of WebGPU come at the cost of a steep learning curve. Although I&rsquo;m confident this won&rsquo;t stop talented programmers worldwide from building amazing content with WebGPU, I wanted to provide people with a way to play with WebGPU without having to confront its complexity. This is how taichi.js came to be.</p><p>Under the taichi.js programming model, programmers don't have to reason about WebGPU concepts such as devices, command queues, bind groups, etc. Instead, they write plain JavaScript functions, and the compiler translates those functions into WebGPU compute or render pipelines. This means anyone can write WebGPU code via taichi.js, as long as they are familiar with basic JavaScript syntax.</p><p>The remainder of this article will demonstrate the programming model of taichi.js via a &quot;Game of Life&quot; program. As you will see, with less than 100 lines of code, we will create a fully parallel WebGPU program containing three GPU compute pipelines plus a render pipeline. The full source code of the demo can be found here, and if you want to play with the code without having to set up any local environments, go to this page.</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:640/1*BVb4Q01xLSswe6ulD-SU0A.gif",
    status: "publish",
    visibility: "public",
    username: "Dunfan Lu",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title: "The end of brands as we know them",
    desc: "The evolution of brands and creativity in the age of AI.",
    content:
      "<p>In her early thirties with two kids, Ayako Tanaka is a Japanese Instagrammer with a focus on fashion and motherhood. She has 168k followers on Instagram, a respectable but modest following compared to numerous influencers with many more followers these days.</p><p>Not too long ago, she curated a two-day pop-up shopping event during which she supposedly generated as much revenue as a flagship store of a major international apparel brand would on its opening day.</p><p>A decade ago, an individual with adequate reach selling as much as a major brand with an ample amount of awareness was inconceivable. What happened over the last decade that makes this possible now?</p><p>Back in 2013, I wrote an article called &ldquo;The End of Advertising as We Know It &mdash; and What to Do Now&rdquo; in which I observed several paradigm shifts marketers and brand builders needed to embrace in order to prepare for the impact we would see in the near future. In the subsequent years, those shifts drove a structural change in how we perceived brands.</p><p>Now in 2023, when individuals can outsell institutions, it may be the end of brands as we know them.</p><p>With the arrival of generative AI, we find ourselves in the midst of another structural change. Put another way, it&rsquo;s as if the operating system of human civilization is going through an upgrade right before our eyes.</p><p>Upgrades to Our Cognitive OS Japanese historian and podcaster Ryunosuke Fukai argues that &ldquo;the Cognitive OS of human society&rdquo; goes through an upgrade when there is an advancement in information communications technology:</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*KSt6Gc-hQRhCnCDp.jpeg",
    status: "publish",
    visibility: "public",
    username: "Rei Inamoto",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title:
      "Uploading Multiple Images on Cloudinary using Express Js and MongoDB",
    desc: "This is part three from the series of REST API with Express and MongoDB, in this part, we will discuss how to upload multiple images to Cloudinary using Express and MongoDB.",
    content:
      "<p>This is just the beginning for style queries. In the future, we&rsquo;ll have Boolean queries to determine if a custom property value exists and reduce code repetition, and currently in discussion are range queries to apply styles based on a range of values. This would make it possible to apply the styles shown here using a percent value for the chance of rain or cloud cover.</p><p>You can learn more and see more demos in blog post on style queries.</p><p>&#55357;&#56393; :has() Speaking of powerful, dynamic features, the :has() selector is one of the most powerful new CSS capabilities landing in modern browsers. With :has(), you can apply styles by checking to see if a parent element contains the presence of specific children, or if those children are in a specific state. This means, we essentially now have a parent selector.</p><p>Building on the container query example, you can use :has() to make the components even more dynamic. In it, an item with a &quot;star&quot; element gets a gray background applied to it, and an item with a checked checkbox a blue background.</p><p>But this API isn&rsquo;t limited to parent selection. You can also style any children within the parent. For example, the title is bold when the item has the star element present. This is accomplished with .item:has(.star) .title. Using the :has() selector gives you access to parent elements, child elements, and even sibling elements, making this a really flexible API, with new use cases popping up every day.</p><p>To prevent rendering performance slowdowns in large DOM trees, we recommend that you scope this selector as closely as possible. For example, using :has() to check for matches on the root html element would be slower than checking for matches in a nav bar or in a card element with a smaller tree.</p><p>&#55357;&#56393;nth-of syntax The web platform now has more advanced nth-child selection. The advanced nth-child syntax gives a new keyword (&ldquo;of&rdquo;), which lets you use the existing micro syntax of An+B, with a more specific subset within which to search.</p><p>If you use regular nth-child, such as :nth-child(2) on the special class, the browser will select the element that has the class special applied to it, and also is the second child. This is in contrast to :nth-child(2 of .special) which will first pre-filter all .special elements, and then pick the second one from that list.</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*JVbC-_VRp4LUbBYp9g_cjg.png",
    status: "publish",
    visibility: "public",
    username: "Ermias Asmare",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title: "The Architecture of a Modern Startup",
    desc: "Hype wave, pragmatic evidence vs the need to move fast",
    content:
      "<p>The Tech side of startups can sometimes be very fluid and contain a lot of unknowns. What tech stack to use? Which components might be overkill for now but worth keeping an eye on in the future? How to balance the pace of business features development while keeping the quality bar high enough to have a maintainable codebase?</p><p>Here I want to share our experience building https://cleanbee.syzygy-ai.com/ from the ground up &mdash; how we shaped our processes based on needs and how our processes evolved as we extended our tech stack with new components.</p><p>Businesses want to conquer the market and engineers &mdash; try cool stuff and stretch their brains. Meanwhile, the industry produces new languages, frameworks, and libraries in such quantities that you will not be able to check them all. And, usually, if you scratch the shiny surface of the Next Big Thing, you will find a good old concept. Good, if you are lucky.</p><p>One of the most exciting topics to argue about is the processes &mdash; whether you rely on trunk-based development, prefer a more monstrous GitHub flow, are a fan of mobbing, or find it more efficient to spend time in PR-based code reviews.</p><p>I have experience working in an environment where artifacts were thrown away on users without any standardized process. In case of issues, developers had a lot of fun (nope!) trying to figure out what version of components was actually deployed.</p><p>On another spectrum is the never-ending queue to CI. After you create PR you have to entertain yourself in the nearest 30 minutes by betting whether the CI cluster will find a resource to run tests over your changes. Sometimes the platform team introduces new, exciting, and useful features that might break compatibility with existing boilerplate for CI. These may result in failing all your checks at the last minute, after an hour of waiting.</p><p>I strongly believe that, as usual, it all depends on team maturity, the kind of software you are building, and various business constraints, for example, the existence of error&rsquo;s budget and the importance of time-to-market versus SLXs.</p><p>I think what is important is to have some agreed processes in place that everyone is aware of and follows. It&rsquo;s also important to have the bravery to challenge and change it if there is evidence of a better alternative.</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/0*Ps0lgic20e019ANd.png",
    status: "publish",
    visibility: "public",
    username: "Dmitry Kruglov",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title: "UI Design using Midjourney",
    desc: "Text-to-image AI tools like Midjourney, Dalle-2, and Stable Diffusion can generate images from plain text. These days the internet is full of AI-generated images, but the question is, “Can text-to-image tools can be used for UI design?”",
    content:
      "<p>Now a days, ReactJs is widely used View library worldwide. So it becomes very important to apply best architecture practices to make code reusable, maintainable and also it would help to improve code readability.</p><p>However, as React only takes care of the view layer of an application, it doesn&rsquo;t enforce any specific architecture (such as MVC or MVVM). This can make it difficult to keep your code base organized as your React project grows.</p><p>In this article, you will learn what best architecture practices you should apply to the code while using ReactJS to create reusable library.</p><p>Directory Layout Originally, the styling and the code for our components were separated. All styles lived in a shared CSS file (we use SCSS for preprocessing). The actual component (in this case FilterSlider), was decoupled from the styles:</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:598/format:webp/1*Y2IZuga2L-AW9hb5lqiTCw.jpeg",
    status: "publish",
    visibility: "public",
    username: "Suneet Bansal",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title: "Login form UI design guide",
    desc: "How to design a login form, including portfolio annotations and hierarchy strips",
    content:
      "<p>Let&rsquo;s explore a simple, minimal login form, with potential options for further improvement.</p><p>When it comes to Log-in forms there are many different UX design patterns that work for specific scenarios. There are cases where you can log in with a magic link, so only an email field is required.</p><p>There are social media account logins, Apple&rsquo;s hidden-email logins, token-based logins, and two-factor authentication ones.</p><p>Here we&rsquo;re looking at a simple one, using a Twitter handle and a password. Of course, the Twitter handle can also be an email address and it will still work.</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/0*QILgN8hbtuzuR9jt.png",
    status: "publish",
    visibility: "public",
    username: "Michal Malewicz",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title: "Painless WebGPU Programming With taichi.js",
    desc: "Modern GPU compute and rendering in JavaScript",
    content:
      "<p>As a computer graphics and programming languages geek, I am delighted to have found myself working on several GPU compilers in the past two years.</p><p>This began in 2021 when I started to contribute to taichi, a Python library that compiles Python functions into GPU kernels in CUDA, Metal, or Vulkan. Later on, I joined Meta and started working on SparkSL, which is the shader language that powers cross-platform GPU programming for AR effects on Instagram and Facebook.</p><p>Aside from personal pleasure, I have always believed, or at least hoped, that these frameworks were quite useful. They make GPU programming more accessible to non-experts, empowering people to create fascinating graphics content without having to master complex GPU concepts.</p><p>In my latest installment of compilers, I turned my eyes to WebGPU &mdash; the next-generation graphics API for the web. WebGPU promises to bring high-performance graphics via low CPU overhead and explicit GPU control, aligning with the trend started by Vulkan and D3D12 some seven years ago.</p><p>Just like Vulkan, the performance benefits of WebGPU come at the cost of a steep learning curve. Although I&rsquo;m confident this won&rsquo;t stop talented programmers worldwide from building amazing content with WebGPU, I wanted to provide people with a way to play with WebGPU without having to confront its complexity. This is how taichi.js came to be.</p><p>Under the taichi.js programming model, programmers don't have to reason about WebGPU concepts such as devices, command queues, bind groups, etc. Instead, they write plain JavaScript functions, and the compiler translates those functions into WebGPU compute or render pipelines. This means anyone can write WebGPU code via taichi.js, as long as they are familiar with basic JavaScript syntax.</p><p>The remainder of this article will demonstrate the programming model of taichi.js via a &quot;Game of Life&quot; program. As you will see, with less than 100 lines of code, we will create a fully parallel WebGPU program containing three GPU compute pipelines plus a render pipeline. The full source code of the demo can be found here, and if you want to play with the code without having to set up any local environments, go to this page.</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:640/1*BVb4Q01xLSswe6ulD-SU0A.gif",
    status: "publish",
    visibility: "public",
    username: "Dunfan Lu",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title: "The end of brands as we know them",
    desc: "The evolution of brands and creativity in the age of AI.",
    content:
      "<p>In her early thirties with two kids, Ayako Tanaka is a Japanese Instagrammer with a focus on fashion and motherhood. She has 168k followers on Instagram, a respectable but modest following compared to numerous influencers with many more followers these days.</p><p>Not too long ago, she curated a two-day pop-up shopping event during which she supposedly generated as much revenue as a flagship store of a major international apparel brand would on its opening day.</p><p>A decade ago, an individual with adequate reach selling as much as a major brand with an ample amount of awareness was inconceivable. What happened over the last decade that makes this possible now?</p><p>Back in 2013, I wrote an article called &ldquo;The End of Advertising as We Know It &mdash; and What to Do Now&rdquo; in which I observed several paradigm shifts marketers and brand builders needed to embrace in order to prepare for the impact we would see in the near future. In the subsequent years, those shifts drove a structural change in how we perceived brands.</p><p>Now in 2023, when individuals can outsell institutions, it may be the end of brands as we know them.</p><p>With the arrival of generative AI, we find ourselves in the midst of another structural change. Put another way, it&rsquo;s as if the operating system of human civilization is going through an upgrade right before our eyes.</p><p>Upgrades to Our Cognitive OS Japanese historian and podcaster Ryunosuke Fukai argues that &ldquo;the Cognitive OS of human society&rdquo; goes through an upgrade when there is an advancement in information communications technology:</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*KSt6Gc-hQRhCnCDp.jpeg",
    status: "publish",
    visibility: "public",
    username: "Rei Inamoto",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title:
      "Uploading Multiple Images on Cloudinary using Express Js and MongoDB",
    desc: "This is part three from the series of REST API with Express and MongoDB, in this part, we will discuss how to upload multiple images to Cloudinary using Express and MongoDB.",
    content:
      "<p>This is just the beginning for style queries. In the future, we&rsquo;ll have Boolean queries to determine if a custom property value exists and reduce code repetition, and currently in discussion are range queries to apply styles based on a range of values. This would make it possible to apply the styles shown here using a percent value for the chance of rain or cloud cover.</p><p>You can learn more and see more demos in blog post on style queries.</p><p>&#55357;&#56393; :has() Speaking of powerful, dynamic features, the :has() selector is one of the most powerful new CSS capabilities landing in modern browsers. With :has(), you can apply styles by checking to see if a parent element contains the presence of specific children, or if those children are in a specific state. This means, we essentially now have a parent selector.</p><p>Building on the container query example, you can use :has() to make the components even more dynamic. In it, an item with a &quot;star&quot; element gets a gray background applied to it, and an item with a checked checkbox a blue background.</p><p>But this API isn&rsquo;t limited to parent selection. You can also style any children within the parent. For example, the title is bold when the item has the star element present. This is accomplished with .item:has(.star) .title. Using the :has() selector gives you access to parent elements, child elements, and even sibling elements, making this a really flexible API, with new use cases popping up every day.</p><p>To prevent rendering performance slowdowns in large DOM trees, we recommend that you scope this selector as closely as possible. For example, using :has() to check for matches on the root html element would be slower than checking for matches in a nav bar or in a card element with a smaller tree.</p><p>&#55357;&#56393;nth-of syntax The web platform now has more advanced nth-child selection. The advanced nth-child syntax gives a new keyword (&ldquo;of&rdquo;), which lets you use the existing micro syntax of An+B, with a more specific subset within which to search.</p><p>If you use regular nth-child, such as :nth-child(2) on the special class, the browser will select the element that has the class special applied to it, and also is the second child. This is in contrast to :nth-child(2 of .special) which will first pre-filter all .special elements, and then pick the second one from that list.</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*JVbC-_VRp4LUbBYp9g_cjg.png",
    status: "publish",
    visibility: "public",
    username: "Ermias Asmare",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title: "The Architecture of a Modern Startup",
    desc: "Hype wave, pragmatic evidence vs the need to move fast",
    content:
      "<p>The Tech side of startups can sometimes be very fluid and contain a lot of unknowns. What tech stack to use? Which components might be overkill for now but worth keeping an eye on in the future? How to balance the pace of business features development while keeping the quality bar high enough to have a maintainable codebase?</p><p>Here I want to share our experience building https://cleanbee.syzygy-ai.com/ from the ground up &mdash; how we shaped our processes based on needs and how our processes evolved as we extended our tech stack with new components.</p><p>Businesses want to conquer the market and engineers &mdash; try cool stuff and stretch their brains. Meanwhile, the industry produces new languages, frameworks, and libraries in such quantities that you will not be able to check them all. And, usually, if you scratch the shiny surface of the Next Big Thing, you will find a good old concept. Good, if you are lucky.</p><p>One of the most exciting topics to argue about is the processes &mdash; whether you rely on trunk-based development, prefer a more monstrous GitHub flow, are a fan of mobbing, or find it more efficient to spend time in PR-based code reviews.</p><p>I have experience working in an environment where artifacts were thrown away on users without any standardized process. In case of issues, developers had a lot of fun (nope!) trying to figure out what version of components was actually deployed.</p><p>On another spectrum is the never-ending queue to CI. After you create PR you have to entertain yourself in the nearest 30 minutes by betting whether the CI cluster will find a resource to run tests over your changes. Sometimes the platform team introduces new, exciting, and useful features that might break compatibility with existing boilerplate for CI. These may result in failing all your checks at the last minute, after an hour of waiting.</p><p>I strongly believe that, as usual, it all depends on team maturity, the kind of software you are building, and various business constraints, for example, the existence of error&rsquo;s budget and the importance of time-to-market versus SLXs.</p><p>I think what is important is to have some agreed processes in place that everyone is aware of and follows. It&rsquo;s also important to have the bravery to challenge and change it if there is evidence of a better alternative.</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/0*Ps0lgic20e019ANd.png",
    status: "publish",
    visibility: "public",
    username: "Dmitry Kruglov",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title: "UI Design using Midjourney",
    desc: "Text-to-image AI tools like Midjourney, Dalle-2, and Stable Diffusion can generate images from plain text. These days the internet is full of AI-generated images, but the question is, “Can text-to-image tools can be used for UI design?”",
    content:
      "<p>Now a days, ReactJs is widely used View library worldwide. So it becomes very important to apply best architecture practices to make code reusable, maintainable and also it would help to improve code readability.</p><p>However, as React only takes care of the view layer of an application, it doesn&rsquo;t enforce any specific architecture (such as MVC or MVVM). This can make it difficult to keep your code base organized as your React project grows.</p><p>In this article, you will learn what best architecture practices you should apply to the code while using ReactJS to create reusable library.</p><p>Directory Layout Originally, the styling and the code for our components were separated. All styles lived in a shared CSS file (we use SCSS for preprocessing). The actual component (in this case FilterSlider), was decoupled from the styles:</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:598/format:webp/1*Y2IZuga2L-AW9hb5lqiTCw.jpeg",
    status: "publish",
    visibility: "public",
    username: "Suneet Bansal",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title: "Login form UI design guide",
    desc: "How to design a login form, including portfolio annotations and hierarchy strips",
    content:
      "<p>Let&rsquo;s explore a simple, minimal login form, with potential options for further improvement.</p><p>When it comes to Log-in forms there are many different UX design patterns that work for specific scenarios. There are cases where you can log in with a magic link, so only an email field is required.</p><p>There are social media account logins, Apple&rsquo;s hidden-email logins, token-based logins, and two-factor authentication ones.</p><p>Here we&rsquo;re looking at a simple one, using a Twitter handle and a password. Of course, the Twitter handle can also be an email address and it will still work.</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/0*QILgN8hbtuzuR9jt.png",
    status: "publish",
    visibility: "public",
    username: "Michal Malewicz",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title: "Painless WebGPU Programming With taichi.js",
    desc: "Modern GPU compute and rendering in JavaScript",
    content:
      "<p>As a computer graphics and programming languages geek, I am delighted to have found myself working on several GPU compilers in the past two years.</p><p>This began in 2021 when I started to contribute to taichi, a Python library that compiles Python functions into GPU kernels in CUDA, Metal, or Vulkan. Later on, I joined Meta and started working on SparkSL, which is the shader language that powers cross-platform GPU programming for AR effects on Instagram and Facebook.</p><p>Aside from personal pleasure, I have always believed, or at least hoped, that these frameworks were quite useful. They make GPU programming more accessible to non-experts, empowering people to create fascinating graphics content without having to master complex GPU concepts.</p><p>In my latest installment of compilers, I turned my eyes to WebGPU &mdash; the next-generation graphics API for the web. WebGPU promises to bring high-performance graphics via low CPU overhead and explicit GPU control, aligning with the trend started by Vulkan and D3D12 some seven years ago.</p><p>Just like Vulkan, the performance benefits of WebGPU come at the cost of a steep learning curve. Although I&rsquo;m confident this won&rsquo;t stop talented programmers worldwide from building amazing content with WebGPU, I wanted to provide people with a way to play with WebGPU without having to confront its complexity. This is how taichi.js came to be.</p><p>Under the taichi.js programming model, programmers don't have to reason about WebGPU concepts such as devices, command queues, bind groups, etc. Instead, they write plain JavaScript functions, and the compiler translates those functions into WebGPU compute or render pipelines. This means anyone can write WebGPU code via taichi.js, as long as they are familiar with basic JavaScript syntax.</p><p>The remainder of this article will demonstrate the programming model of taichi.js via a &quot;Game of Life&quot; program. As you will see, with less than 100 lines of code, we will create a fully parallel WebGPU program containing three GPU compute pipelines plus a render pipeline. The full source code of the demo can be found here, and if you want to play with the code without having to set up any local environments, go to this page.</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:640/1*BVb4Q01xLSswe6ulD-SU0A.gif",
    status: "publish",
    visibility: "public",
    username: "Dunfan Lu",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title: "The end of brands as we know them",
    desc: "The evolution of brands and creativity in the age of AI.",
    content:
      "<p>In her early thirties with two kids, Ayako Tanaka is a Japanese Instagrammer with a focus on fashion and motherhood. She has 168k followers on Instagram, a respectable but modest following compared to numerous influencers with many more followers these days.</p><p>Not too long ago, she curated a two-day pop-up shopping event during which she supposedly generated as much revenue as a flagship store of a major international apparel brand would on its opening day.</p><p>A decade ago, an individual with adequate reach selling as much as a major brand with an ample amount of awareness was inconceivable. What happened over the last decade that makes this possible now?</p><p>Back in 2013, I wrote an article called &ldquo;The End of Advertising as We Know It &mdash; and What to Do Now&rdquo; in which I observed several paradigm shifts marketers and brand builders needed to embrace in order to prepare for the impact we would see in the near future. In the subsequent years, those shifts drove a structural change in how we perceived brands.</p><p>Now in 2023, when individuals can outsell institutions, it may be the end of brands as we know them.</p><p>With the arrival of generative AI, we find ourselves in the midst of another structural change. Put another way, it&rsquo;s as if the operating system of human civilization is going through an upgrade right before our eyes.</p><p>Upgrades to Our Cognitive OS Japanese historian and podcaster Ryunosuke Fukai argues that &ldquo;the Cognitive OS of human society&rdquo; goes through an upgrade when there is an advancement in information communications technology:</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*KSt6Gc-hQRhCnCDp.jpeg",
    status: "publish",
    visibility: "public",
    username: "Rei Inamoto",
    userId: "647dbd8c183cc8cb777a456b",
  },
  {
    title:
      "Uploading Multiple Images on Cloudinary using Express Js and MongoDB",
    desc: "This is part three from the series of REST API with Express and MongoDB, in this part, we will discuss how to upload multiple images to Cloudinary using Express and MongoDB.",
    content:
      "<p>This is just the beginning for style queries. In the future, we&rsquo;ll have Boolean queries to determine if a custom property value exists and reduce code repetition, and currently in discussion are range queries to apply styles based on a range of values. This would make it possible to apply the styles shown here using a percent value for the chance of rain or cloud cover.</p><p>You can learn more and see more demos in blog post on style queries.</p><p>&#55357;&#56393; :has() Speaking of powerful, dynamic features, the :has() selector is one of the most powerful new CSS capabilities landing in modern browsers. With :has(), you can apply styles by checking to see if a parent element contains the presence of specific children, or if those children are in a specific state. This means, we essentially now have a parent selector.</p><p>Building on the container query example, you can use :has() to make the components even more dynamic. In it, an item with a &quot;star&quot; element gets a gray background applied to it, and an item with a checked checkbox a blue background.</p><p>But this API isn&rsquo;t limited to parent selection. You can also style any children within the parent. For example, the title is bold when the item has the star element present. This is accomplished with .item:has(.star) .title. Using the :has() selector gives you access to parent elements, child elements, and even sibling elements, making this a really flexible API, with new use cases popping up every day.</p><p>To prevent rendering performance slowdowns in large DOM trees, we recommend that you scope this selector as closely as possible. For example, using :has() to check for matches on the root html element would be slower than checking for matches in a nav bar or in a card element with a smaller tree.</p><p>&#55357;&#56393;nth-of syntax The web platform now has more advanced nth-child selection. The advanced nth-child syntax gives a new keyword (&ldquo;of&rdquo;), which lets you use the existing micro syntax of An+B, with a more specific subset within which to search.</p><p>If you use regular nth-child, such as :nth-child(2) on the special class, the browser will select the element that has the class special applied to it, and also is the second child. This is in contrast to :nth-child(2 of .special) which will first pre-filter all .special elements, and then pick the second one from that list.</p>",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*JVbC-_VRp4LUbBYp9g_cjg.png",
    status: "publish",
    visibility: "public",
    username: "Ermias Asmare",
    userId: "647dbd8c183cc8cb777a456b",
  },
];

module.exports = dummyBlog;
