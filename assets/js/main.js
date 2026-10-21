document.addEventListener("DOMContentLoaded", () => {
  // 1. Inisialisasi Ikon Lucide
  lucide.createIcons();

  // ================= BOUNCY SMOOTH CURSOR (DESKTOP ONLY) =================
  const isTouchDevice = () => window.matchMedia("(pointer: coarse)").matches;
  const cursorDot = document.getElementById("cursor-dot");
  const cursorOutline = document.getElementById("cursor-outline");

  if (isTouchDevice()) {
    if (cursorDot) cursorDot.style.display = "none";
    if (cursorOutline) cursorOutline.style.display = "none";
  } else {
    let mouseX = -100;
    let mouseY = -100;
    let outlineX = -100;
    let outlineY = -100;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    function animateBouncyCursor() {
      outlineX += (mouseX - outlineX) * 0.16;
      outlineY += (mouseY - outlineY) * 0.16;

      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;

      requestAnimationFrame(animateBouncyCursor);
    }
    animateBouncyCursor();
  }

  function attachCursorHoverEvents() {
    if (isTouchDevice()) return;
    const interactables = document.querySelectorAll("a, button, input, textarea, .filter-btn, .khs-tab-btn");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursorOutline.classList.add("cursor-hover");
        cursorDot.classList.add("cursor-hover");
      });
      el.addEventListener("mouseleave", () => {
        cursorOutline.classList.remove("cursor-hover");
        cursorDot.classList.remove("cursor-hover");
      });
    });
  }
  attachCursorHoverEvents();

  // ================= 2. RENDER PROJEK =================
  const projectsGrid = document.getElementById("projectsGrid");

  function renderProjects(category = "all") {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = "";
    
    const filtered = category === "all" 
      ? projectsData 
      : projectsData.filter(p => p.category === category);

    filtered.forEach(item => {
      const card = document.createElement("div");
      card.className = "p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 flex flex-col justify-between transition-all group shadow-sm";
      
      card.innerHTML = `
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="font-mono text-xs font-semibold text-cyan-400">${item.num}</span>
            <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-mono">${item.categoryLabel}</span>
          </div>

          <h3 class="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">${item.title}</h3>
          <p class="text-xs text-slate-400 leading-relaxed">${item.desc}</p>
        </div>

        <div class="pt-5 space-y-4">
          <div class="flex flex-wrap gap-1.5">
            ${item.tags.map(t => `<span class="px-2 py-0.5 rounded bg-slate-800/80 text-[10px] font-mono text-slate-400">${t}</span>`).join('')}
          </div>

          <div class="flex items-center justify-between pt-3 border-t border-slate-800/60">
            <button onclick="openProjectDetail('${item.id}')" class="text-xs text-cyan-400 hover:underline font-mono flex items-center gap-1 py-1">
              <span>Detail Fitur</span>
              <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            </button>
            <div class="flex items-center gap-3">
              <a href="${item.githubUrl}" class="p-1.5 text-slate-400 hover:text-white" title="Source Code">
                <i data-lucide="github" class="w-4 h-4"></i>
              </a>
              <a href="${item.demoUrl}" class="p-1.5 text-slate-400 hover:text-cyan-400" title="Live Preview">
                <i data-lucide="external-link" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
        </div>
      `;
      projectsGrid.appendChild(card);
    });

    lucide.createIcons();
    attachCursorHoverEvents();
  }
  renderProjects();

  // Filter Tombol Projek
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.className = "filter-btn shrink-0 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white transition-all";
      });
      btn.className = "filter-btn shrink-0 px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 font-medium transition-all";
      
      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });

  // ================= 3. INISIALISASI GRAFIK IPK (CHART.JS) =================
  const canvasElement = document.getElementById("gpaChart");
  if (canvasElement) {
    const ctx = canvasElement.getContext("2d");
    const semesterLabels = ["Semester 1", "Semester 2", "Semester 3", "Semester 4"];
    const gpaData = [3.78, 3.68, 4.00, 3.74];

    const gradient = ctx.createLinearGradient(0, 0, 0, 240);
    gradient.addColorStop(0, "rgba(6, 182, 212, 0.45)");
    gradient.addColorStop(1, "rgba(6, 182, 212, 0.0)");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: semesterLabels,
        datasets: [{
          label: "IP Semester",
          data: gpaData,
          borderColor: "#06b6d4",
          borderWidth: 3,
          backgroundColor: gradient,
          fill: true,
          tension: 0.35,
          pointBackgroundColor: "#06b6d4",
          pointBorderColor: "#020617",
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: "#ffffff",
          pointHoverBorderColor: "#06b6d4",
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#0f172a",
            titleColor: "#94a3b8",
            bodyColor: "#06b6d4",
            titleFont: { family: "Inter", size: 12 },
            bodyFont: { family: "JetBrains Mono", size: 13, weight: "bold" },
            borderColor: "#1e293b",
            borderWidth: 1,
            padding: 10,
            displayColors: false,
            callbacks: {
              label: (context) => `IPS: ${context.parsed.y.toFixed(2)}`
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              color: "#94a3b8",
              font: { family: "Inter", size: 11 }
            }
          },
          y: {
            min: 3.5,
            max: 4.05,
            grid: { color: "rgba(255, 255, 255, 0.05)" },
            ticks: {
              stepSize: 0.1,
              color: "#64748b",
              font: { family: "JetBrains Mono", size: 11 },
              callback: (value) => value.toFixed(2)
            }
          }
        }
      }
    });
  }

  // ================= 4. LOGIKA KHS TABEL =================
  const khsTableBody = document.getElementById("khsTableBody");
  const khsIps = document.getElementById("khsIps");
  const khsSks = document.getElementById("khsSks");
  const downloadKhsBtn = document.getElementById("downloadKhsBtn");
  const khsTabBtns = document.querySelectorAll(".khs-tab-btn");

  function renderKhs(semester) {
    if (!khsTableBody || !khsData[semester]) return;
    const data = khsData[semester];

    khsIps.textContent = data.ips;
    khsSks.textContent = `${data.sks} SKS`;
    downloadKhsBtn.href = data.pdfUrl;

    khsTableBody.innerHTML = data.courses.map(course => {
      let gradeBadge = "bg-slate-800 text-slate-300";
      if (course.grade === "A") gradeBadge = "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30";
      else if (course.grade === "B" || course.grade === "B+") gradeBadge = "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30";
      else if (course.grade === "C") gradeBadge = "bg-amber-500/10 text-amber-400 border border-amber-500/30";

      return `
        <tr class="hover:bg-slate-900/50 transition-colors">
          <td class="py-2.5 px-3 sm:px-4 font-mono text-slate-400 text-[11px]">${course.code}</td>
          <td class="py-2.5 px-3 sm:px-4 font-medium text-white">${course.name}</td>
          <td class="py-2.5 px-3 text-center font-mono text-slate-400">${course.sks}</td>
          <td class="py-2.5 px-3 sm:px-4 text-center">
            <span class="inline-block px-2 py-0.5 rounded font-mono font-bold text-[11px] ${gradeBadge}">
              ${course.grade}
            </span>
          </td>
        </tr>
      `;
    }).join('');

    lucide.createIcons();
  }

  khsTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      khsTabBtns.forEach(b => {
        b.className = "khs-tab-btn px-3 py-1.5 rounded-lg text-slate-400 hover:text-white transition-all";
      });
      btn.className = "khs-tab-btn px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 font-bold transition-all";

      const sem = btn.getAttribute("data-sem");
      renderKhs(sem);
    });
  });

  // Tampilkan default Semester 3
  renderKhs(3);

  // ================= 5. MODAL DETAIL PROJEK =================
  const modal = document.getElementById("projectModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modalContent = document.getElementById("modalContent");

  window.openProjectDetail = function(id) {
    const item = projectsData.find(p => p.id === id);
    if (!item) return;

    modalContent.innerHTML = `
      <div class="space-y-4 pt-1">
        <div class="flex items-center justify-between pr-8">
          <span class="font-mono text-xs text-cyan-400 font-bold">${item.num}</span>
          <span class="text-xs px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">${item.categoryLabel}</span>
        </div>
        <h3 class="text-lg font-bold text-white leading-snug">${item.title}</h3>
        <p class="text-xs text-slate-300 leading-relaxed">${item.desc}</p>
        
        <div class="space-y-2 pt-2 border-t border-slate-800">
          <h4 class="text-xs font-mono uppercase text-slate-400">Fitur Utama:</h4>
          <ul class="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
            ${item.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>

        <div class="pt-2 text-xs font-mono text-slate-400">
          <span class="text-cyan-400">Tech Stack:</span> ${item.techStack}
        </div>
      </div>
    `;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  };

  function closeModal() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  }

  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // ================= 6. MOBILE MENU & CV DOWNLOAD =================
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  const downloadCvBtn = document.getElementById("downloadCvBtn");
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener("click", () => {
      window.open("docs/cv-raditya.pdf", "_blank");
    });
  }
});