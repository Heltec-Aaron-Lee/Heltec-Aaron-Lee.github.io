(function () {
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

      activeElm.setAttribute(
        "rel",
        (activeElm.rel || "").replace(/\s*alternate/g, "").trim()
      );

      activeElm.disabled = true;
      activeElm.disabled = false;

      sessionStorage.setItem(sessionStorageKey, activeHref);

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

      if ((window.$docsify || {}).themeable) {
        window.$docsify.themeable.util.cssVars();
      }
    }

    if (!isInitialzed) {
      isInitialzed = true;

      document.addEventListener("DOMContentLoaded", function () {
        var activeHref = sessionStorage.getItem(sessionStorageKey);

        if (activeHref) {
          handleSwitch(activeHref);
        }
      });

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

    const mdPaths = tree
      ?.filter(
        (i) =>
          i.type === "blob" &&
          i.path.startsWith("en/products/") &&
          i.path.endsWith(".md")
      )
      ?.map((i) => i.path);

    const directoryTree = {};
    mdPaths.forEach((path) => {
      const parts = path.replace(/^en\/products\//, "").split("/");
      let current = directoryTree;

      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (!current[part]) {
          current[part] = { type: "folder", files: [], subdirs: {} };
        }
        current = current[part].subdirs;
      }

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

    const navElement = document.getElementById("product-folders");
    navElement.innerHTML = "<h3>产品分类</h3><ul></ul>";
    const ulElement = navElement.querySelector("ul");

    function hasSubFolders(node) {
      return Object.values(node.subdirs).some((item) => item.type === "folder");
    }

    function renderDirectory(dir, parentElement, level = 0) {
      Object.entries(dir).forEach(([name, data]) => {
        const li = document.createElement("li");
        li.className = "category-item";
        li.style.paddingLeft = `${level * 2}em`;

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

          folderName.addEventListener("click", () => {
            document.querySelectorAll(".category-item").forEach((item) => {
              item.classList.remove("active");
            });

            li.classList.add("active");

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
          return;
        }

        parentElement.appendChild(li);
      });
    }

    renderDirectory(directoryTree, ulElement);

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

      const metadata = extractMetadata(md);

      // 渲染内容
      html += `
        <div class="md-card" ${
          metadata.link ? `data-link="${metadata.link}"` : ""
        }>
          <div class="md-header">
            <h2>${metadata.title || name}</h2>
            ${
              metadata.bgImage
                ? `<img src="${metadata.bgImage}" alt="${
                    metadata.title || name
                  }" class="md-bg-image">`
                : ""
            }
          </div>
          <div class="md-description">
            ${metadata.description || "暂无描述"}
          </div>
          ${
            metadata.link
              ? `<div class="md-link"><a href="${metadata.link}" target="_blank">查看详情</a></div>`
              : ""
          }
        </div>
      `;
    }
    mdContent.innerHTML = html;


    const cards = document.getElementsByClassName("md-card");
    Array.from(cards).forEach((card) => {
      const link = card.getAttribute("data-link");
      if (link) {
        card.style.cursor = "pointer";
        card.addEventListener("click", (e) => {

          if (e.target.tagName === "A") {
            return;
          }
          window.open(link, "_blank");
        });
      }
    });

    initMasonry();
  } catch (error) {
    console.error("加载文件内容失败:", error);
    mdContent.innerHTML = "<p>加载失败，请重试</p>";
  }
}

function initMasonry() {
  const container = document.getElementById("md-content");
  const cards = container.getElementsByClassName("md-card");
  const cardWidth = 400;
  const gap = 20;

  function calculateLayout() {
    const containerWidth = container.clientWidth;
    const columnCount = Math.floor((containerWidth + gap) / (cardWidth + gap));
    return columnCount;
  }

  function layout() {
    const columnCount = calculateLayout();
    const columns = Array(columnCount)
      .fill()
      .map(() => []);
    const columnHeights = Array(columnCount).fill(0);

    container.style.position = "relative";
    container.style.height = "auto";

    Array.from(cards).forEach((card) => {
      const minHeightIndex = columnHeights.indexOf(Math.min(...columnHeights));
      columns[minHeightIndex].push(card);
      columnHeights[minHeightIndex] += card.offsetHeight + gap;
    });

    let currentX = 0;
    columns.forEach((column, columnIndex) => {
      let currentY = 0;
      column.forEach((card) => {
        card.style.position = "absolute";
        card.style.width = `${cardWidth}px`;
        card.style.left = `${currentX}px`;
        card.style.top = `${currentY}px`;
        currentY += card.offsetHeight + gap;
      });
      currentX += cardWidth + gap;
    });

    container.style.height = `${Math.max(...columnHeights)}px`;
  }

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layout, 100);
  });

  const images = container.getElementsByTagName("img");
  Array.from(images).forEach((img) => {
    img.addEventListener("load", layout);
  });

  layout();
}

function extractMetadata(md) {
  const metadata = {
    title: null,
    description: null,
    bgImage: null,
    link: null,
  };

  const yamlMatch = md.match(/^---\s*\n([\s\S]*?)\n---/);
  if (yamlMatch) {
    const yamlContent = yamlMatch[1];

    // 提取 title
    const titleMatch = yamlContent.match(
      /title:\s*"([^"]*)"|title:\s*'([^']*)'|title:\s*([^\n]*)/
    );
    if (titleMatch) {
      metadata.title = titleMatch[1] || titleMatch[2] || titleMatch[3];
    }

    // 提取 description
    const descMatch = yamlContent.match(
      /description:\s*\|([\s\S]*?)(?=\n\w|$)/
    );
    if (descMatch) {
      metadata.description = descMatch[1].trim();
    }

    // 提取 bgImage
    const bgImageMatch = yamlContent.match(
      /bgImage:\s*"([^"]*)"|bgImage:\s*'([^']*)'|bgImage:\s*([^\n]*)/
    );
    if (bgImageMatch) {
      metadata.bgImage = bgImageMatch[1] || bgImageMatch[2] || bgImageMatch[3];
    }

    // 提取 link
    const linkMatch = yamlContent.match(
      /link:\s*"([^"]*)"|link:\s*'([^']*)'|link:\s*([^\n]*)/
    );
    if (linkMatch) {
      metadata.link = linkMatch[1] || linkMatch[2] || linkMatch[3];
    }
  }

  return metadata;
}

document.addEventListener("DOMContentLoaded", () => {
  loadAllMd();
});
