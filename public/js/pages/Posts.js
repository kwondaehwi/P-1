// export default class {
//   constructor() {
//     document.title = "Posts";
//   }
//   async getHtml() {
//     return `
//         <ul class="post-cotainer">
//         <li class="post">
//           <span class="date">12/18</span>
//           <span class="post__title">아주 비기너에 참여하시는...</span>
//           <span class="author">익명</span>
//         </li>
//         <li class="post">
//           <span class="date">12/18</span>
//           <span class="post__title">아주 비기너에 참여하시는...</span>
//           <span class="author">익명</span>
//         </li>
//         <li class="post">
//           <span class="date">12/18</span>
//           <span class="post__title">아주 비기너에 참여하시는...</span>
//           <span class="author">익명</span>
//         </li>
//         <li class="post">
//           <span class="date">12/18</span>
//           <span class="post__title">아주 비기너에 참여하시는...</span>
//           <span class="author">익명</span>
//         </li>
//         <li class="post">
//           <span class="date">12/18</span>
//           <span class="post__title">아주 비기너에 참여하시는...</span>
//           <span class="author">익명</span>
//         </li>
//         <li class="post">
//           <span class="date">12/18</span>
//           <span class="post__title">아주 비기너에 참여하시는...</span>
//           <span class="author">익명</span>
//         </li>
//       </ul>
//         `;
//   }
// }

const $ = document;

export default function Post(root) {
  const post = $.createElement("ul");
  post.innerHTML = `
          <li class="post">
            <span class="date">12/18</span>
            <span class="post__title">아주 비기너에 참여하시는...</span>
            <span class="author">익명</span>
          </li>
          <li class="post">
            <span class="date">12/18</span>
            <span class="post__title">아주 비기너에 참여하시는...</span>
            <span class="author">익명</span>
          </li>
          <li class="post">
            <span class="date">12/18</span>
            <span class="post__title">아주 비기너에 참여하시는...</span>
            <span class="author">익명</span>
          </li>
          <li class="post">
            <span class="date">12/18</span>
            <span class="post__title">아주 비기너에 참여하시는...</span>
            <span class="author">익명</span>
          </li>
          <li class="post">
            <span class="date">12/18</span>
            <span class="post__title">아주 비기너에 참여하시는...</span>
            <span class="author">익명</span>
          </li>
          <li class="post">
            <span class="date">12/18</span>
            <span class="post__title">아주 비기너에 참여하시는...</span>
            <span class="author">익명</span>
          </li>`;
  post.classList.add("post-cotainer");
  root.appendChild(post);
}
