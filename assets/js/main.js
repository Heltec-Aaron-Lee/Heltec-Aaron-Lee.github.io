(function () {
  // Functions
  // =========================================================================
  /**
   * Adds event listeners to change active stylesheet and restore previously
   * activated stylesheet on reload.
   *
   * @example
   *
   * This link:
   *   <a href="#" data-link-title="Foo">Foo</a>
   * Will active this existing link:
   *   <link rel="stylesheet alternate" title="Foo" href="..." >
   *
   * @example
   *
   * This link:
   *   <a href="#" data-link-href="path/to/file.css">Bar</a>
   * Will activate this existing link:
   *   <link rel="stylesheet alternate" title="[someID]" href="path/to/file.css" >
   * Or generate this active link:
   *   <link rel="stylesheet" title="Bar" href="path/to/file.css" >
   */
  function initStyleSwitcher() {
    var isInitialzed = false;
    var sessionStorageKey = "activeStylesheetHref";

    function handleSwitch(activeHref, activeTitle) {
      var activeElm = document.querySelector(
        'link[href*="' + activeHref + '"],link[title="' + activeTitle + '"]'
      );

      if (!activeElm && activeHref) {
        activeElm = document.createElement("link");
        activeElm.setAttribute("href", activeHref);
        activeElm.setAttribute("rel", "stylesheet");
        activeElm.setAttribute("title", activeTitle);

        document.head.appendChild(activeElm);

        activeElm.addEventListener("load", function linkOnLoad() {
          activeElm.removeEventListener("load", linkOnLoad);
          setActiveLink(activeElm);
        });
      } else if (activeElm) {
        setActiveLink(activeElm);
      }
    }

    function setActiveLink(activeElm) {
      var activeHref = activeElm.getAttribute("href");
      var activeTitle = activeElm.getAttribute("title");
      var inactiveElms = document.querySelectorAll(
        'link[title]:not([href*="' +
          activeHref +
          '"]):not([title="' +
          activeTitle +
          '"])'
      );

      // Remove "alternate" keyword
      activeElm.setAttribute(
        "rel",
        (activeElm.rel || "").replace(/\s*alternate/g, "").trim()
      );

      // Force enable stylesheet (required for some browsers)
      activeElm.disabled = true;
      activeElm.disabled = false;

      // Store active style sheet
      sessionStorage.setItem(sessionStorageKey, activeHref);

      // Disable other elms
      for (var i = 0; i < inactiveElms.length; i++) {
        var elm = inactiveElms[i];

        elm.disabled = true;

        if (window.browsersyncObserver) {
          var linkRel = elm.getAttribute("rel") || "";
          var linkRelAlt =
            linkRel.indexOf("alternate") > -1
              ? linkRel
              : (linkRel + " alternate").trim();

          elm.setAttribute("rel", linkRelAlt);
        }
      }

      // CSS custom property ponyfil
      if ((window.$docsify || {}).themeable) {
        window.$docsify.themeable.util.cssVars();
      }
    }

    // Event listeners
    if (!isInitialzed) {
      isInitialzed = true;

      // Restore active stylesheet
      document.addEventListener("DOMContentLoaded", function () {
        var activeHref = sessionStorage.getItem(sessionStorageKey);

        if (activeHref) {
          handleSwitch(activeHref);
        }
      });

      // Update active stylesheet
      document.addEventListener("click", function (evt) {
        var dataHref = evt.target.getAttribute("data-link-href");
        var dataTitle = evt.target.getAttribute("data-link-title");

        if (dataHref || dataTitle) {
          dataTitle =
            dataTitle ||
            evt.target.textContent ||
            "_" + Math.random().toString(36).substr(2, 9); // UID

          handleSwitch(dataHref, dataTitle);
          evt.preventDefault();
        }
      });
    }
  }

  initStyleSwitcher();
})();



async function loadAllMd() {
  const owner = "HelTecAutomation";
  const repo = "HelTecAutomation.github.io";
  const branch = "master";
  const treeUrl = `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`;

  try {
    // 1. 获取完整文件树
    const response = await fetch(treeUrl);
    const { tree } = await response.json();

    // 2. 过滤 en/products/**/.md
    const mdPaths = tree
      ?.filter(
        (i) =>
          i.type === "blob" &&
          i.path.startsWith("en/products/") &&
          i.path.endsWith(".md")
      )
      ?.map((i) => i.path);

    // 3. 构建目录树
    const directoryTree = {};
    mdPaths.forEach((path) => {
      const parts = path.replace(/^en\/products\//, "").split("/");
      let current = directoryTree;

      // 构建目录结构
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (!current[part]) {
          current[part] = { type: "folder", files: [], subdirs: {} };
        }
        current = current[part].subdirs;
      }

      // 添加文件
      const fileName = parts[parts.length - 1];
      const parentDir = parts
        .slice(0, -1)
        .reduce((obj, part) => obj[part].subdirs, directoryTree);
      if (!parentDir[fileName]) {
        parentDir[fileName] = { type: "file", files: [path], subdirs: {} };
      } else {
        parentDir[fileName].files.push(path);
      }
    });

    // 4. 渲染导航
    const navElement = document.getElementById("product-folders");
    navElement.innerHTML = "<h3>产品分类</h3><ul></ul>";
    const ulElement = navElement.querySelector("ul");

    // 检查目录是否包含子文件夹
    function hasSubFolders(node) {
      return Object.values(node.subdirs).some((item) => item.type === "folder");
    }

    // 递归渲染目录
    function renderDirectory(dir, parentElement, level = 0) {
      Object.entries(dir).forEach(([name, data]) => {
        const li = document.createElement("li");
        li.className = "category-item";
        li.style.paddingLeft = `${level * 2}em`; // 每层增加2个字符宽度的缩进

        if (data.type === "folder") {
          // 这是一个目录
          const hasSubdirs = hasSubFolders(data);
          li.innerHTML = `
            <div class="folder-item">
              <span class="folder-name">${name}</span>
              ${hasSubdirs ? '<span class="folder-icon">▶</span>' : ""}
            </div>
            ${
              hasSubdirs
                ? '<div class="subfolder-wrapper"><ul class="subfolder"></ul></div>'
                : ""
            }
          `;

          const folderName = li.querySelector(".folder-name");
          const folderIcon = li.querySelector(".folder-icon");
          const subfolderWrapper = li.querySelector(".subfolder-wrapper");
          const subfolder = li.querySelector(".subfolder");

          // 点击文件夹名称时加载该文件夹下的所有 md 文件
          folderName.addEventListener("click", () => {
            // 移除所有选中状态
            document.querySelectorAll(".category-item").forEach((item) => {
              item.classList.remove("active");
            });
            // 添加当前选中状态
            li.classList.add("active");

            // 收集当前文件夹及其子文件夹下的所有 md 文件
            const allFiles = [];
            function collectFiles(node) {
              if (node.type === "file") {
                allFiles.push(...node.files);
              } else if (node.type === "folder") {
                Object.values(node.subdirs).forEach(collectFiles);
              }
            }
            collectFiles(data);
            showAllMd(allFiles);

            // 如果有子文件夹，处理展开/折叠
            if (hasSubdirs) {
              const isExpanded =
                subfolderWrapper.classList.contains("expanded");
              subfolderWrapper.classList.toggle("expanded");
              folderIcon.textContent = isExpanded ? "▶" : "▼";
            }
          });

          if (hasSubdirs) {
            renderDirectory(data.subdirs, subfolder, level + 1);
          }
        } else {
          // 这是一个文件，不显示在导航中
          return;
        }

        parentElement.appendChild(li);
      });
    }

    renderDirectory(directoryTree, ulElement);

    // 自动展开并选中第一个目录
    const firstFolder = ulElement.querySelector(".folder-item");
    if (firstFolder) {
      const folderName = firstFolder.querySelector(".folder-name");
      if (folderName) {
        folderName.click();
      }
    }
  } catch (error) {
    console.error("加载文件列表失败:", error);
    document.getElementById("product-folders").innerHTML =
      "<p>加载失败，请刷新重试</p>";
  }
}


async function showAllMd(paths) {
  const owner = "HelTecAutomation";
  const repo = "HelTecAutomation.github.io";
  const branch = "master";

  const mdContent = document.getElementById("md-content");
  mdContent.innerHTML = "<p>加载中…</p>";
  let html = "";

  try {
    for (const p of paths) {
      const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${p}`;
      const md = await fetch(rawUrl).then((r) => r.text());
      const name = p.split("/").pop();
      html += `<h4>${name}</h4>\n<pre style="white-space:pre-wrap;">${md.replace(
        /</g,
        "&lt;"
      )}</pre>\n<hr/>`;
    }
    mdContent.innerHTML = html;
  } catch (error) {
    console.error("加载文件内容失败:", error);
    mdContent.innerHTML = "<p>加载失败，请重试</p>";
  }
}

// 页面加载完成后执行
document.addEventListener("DOMContentLoaded", () => {
  loadAllMd();
});
