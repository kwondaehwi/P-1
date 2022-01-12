const $ = document;

export default function Post(root) {
  const post = $.createElement("ul");
  // history.pushState({ data: `${purpose}` }, null, `${purpose}`);
  post.innerHTML = `
          <li class="post click">
            <span class="date">12/18</span>
            <span class="post__title">아주 비기너에 참여하시는...</span>
            <span class="author">익명</span>
          </li>
          <li class="post click">
            <span class="date">12/18</span>
            <span class="post__title">아주 비기너에 참여하시는...</span>
            <span class="author">익명</span>
          </li>
          <li class="post click">
            <span class="date">12/18</span>
            <span class="post__title">아주 비기너에 참여하시는...</span>
            <span class="author">익명</span>
          </li>
          <li class="post click">
            <span class="date">12/18</span>
            <span class="post__title">아주 비기너에 참여하시는...</span>
            <span class="author">익명</span>
          </li>
          <li class="post click">
            <span class="date">12/18</span>
            <span class="post__title">아주 비기너에 참여하시는...</span>
            <span class="author">익명</span>
          </li>
          <li class="post click">
            <span class="date">12/18</span>
            <span class="post__title">아주 비기너에 참여하시는...</span>
            <span class="author">익명</span>
          </li>`;

  // 대체해야할 페이지가 존재하면 지워버리고 새 것을 삽입한다.
  const toBeReplaced = $.querySelector(".replace");
  if (toBeReplaced) {
    toBeReplaced.remove();
  }
  post.classList.add("post-cotainer", "replace");
  root.appendChild(post);
}
