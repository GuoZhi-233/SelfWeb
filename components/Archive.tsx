import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Play,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { PROJECTS, CATEGORY_LABELS } from "../constants";
import { PHOTOGRAPHY_GALLERY } from "../src/data/photography";
import covers from "../src/data/cover-cache.json";
import { Category, Language, Project } from "../types";
const GlassGeometry = lazy(() => import("./GlassGeometry"));
export const categories = [
  Category.ALL,
  Category.DESIGN,
  Category.PHOTO,
  Category.VIDEO,
  Category.DEV,
];
export function GeometryPanel({ reduced = false }: { reduced?: boolean }) {
  const panel = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setNear(true); observer.disconnect(); }
    }, { rootMargin: "160px" });
    if (panel.current) observer.observe(panel.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="geometry-panel" ref={panel}>
      <div className="geometry-cross cross-a">+</div>
      <div className="geometry-cross cross-b">+</div>
      <span className="geometry-caption">
        FORM / 001
        <br />
        SQUARE ∩ CIRCLE
      </span>
      <Suspense fallback={<div className="geometry-loading" />}>
        {near && <GlassGeometry reduced={reduced} />}
      </Suspense>
      <span className="geometry-foot">IDEAS IN A DIFFERENT DIMENSION</span>
    </div>
  );
}

function ProjectCover({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const cache = (covers as Record<string, string>)[project.id];
  return (
    <div className="project-cover">
      {project.image && !failed ? (
        <img
          src={cache ? `${import.meta.env.BASE_URL}${cache}` : project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="project-placeholder">
          <Code2 size={55} strokeWidth={1} />
          <span>{project.subtitle || project.title}</span>
        </div>
      )}
      <span className="cover-arrow">
        <ArrowUpRight size={23} />
      </span>
    </div>
  );
}

export default function Archive({
  language,
  reduced,
  onProject,
  compact = false,
  initialCategory = Category.ALL,
}: {
  language: Language;
  reduced: boolean;
  onProject: (id: string) => void;
  compact?: boolean;
  initialCategory?: Category;
}) {
  const [filter, setFilter] = useState<Category>(initialCategory),
    [transition, setTransition] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const zh = language === "zh";
  const sorted = [...PROJECTS[language]].sort(
    (a, b) =>
      Number(b.category === Category.DESIGN) -
      Number(a.category === Category.DESIGN),
  );
  const filtered = sorted.filter(
    (p) => filter === Category.ALL || p.category === filter,
  );
  const list =
    compact && filter === Category.ALL ? filtered.slice(0, 6) : filtered;
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => setFilter(initialCategory), [initialCategory]);
  const change = (cat: Category) => {
    clearTimeout(timer.current);
    if (reduced) {
      setFilter(cat);
      return;
    }
    setTransition(true);
    timer.current = setTimeout(() => {
      setFilter(cat);
      setTransition(false);
    }, 180);
  };
  return (
    <section className="archive-section" aria-labelledby="archive-title">
      <div className="section-head">
        <div>
          <p className="eyebrow">01 / CREATIVE ARCHIVE</p>
          <h2 id="archive-title">
            {compact
              ? zh
                ? "精选作品"
                : "Selected works"
              : zh
                ? "作品档案"
                : "Work archive"}
            <span>。</span>
          </h2>
        </div>
        <p className="section-note">
          {zh
            ? "记录视觉、技术与想象的交汇点。"
            : "Where images, technology and imagination meet."}
          <br />
          <span>2022 — 2026</span>
        </p>
      </div>
      <div className="archive-toolbar">
        <div
          className="filter-list"
          aria-label={zh ? "作品分类" : "Work categories"}
        >
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => change(cat)}
              className={filter === cat ? "selected" : ""}
              aria-pressed={filter === cat}
            >
              <span>0{i}</span>
              {CATEGORY_LABELS[language][cat]}
            </button>
          ))}
        </div>
        <span className="archive-count" aria-live="polite">
          {String(list.length).padStart(2, "0")} {zh ? "份档案" : "FILES"}
        </span>
      </div>
      <div
        className={`project-grid ${transition ? "filter-changing" : ""}`}
        key={filter}
      >
        {list.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.id}
            initial={reduced ? false : { opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{
              duration: 0.55,
              delay: Math.min((index % 3) * 0.075, 0.15),
              ease: [0.2, 0.65, 0.25, 1],
            }}
          >
            <button
              className="project-open"
              onClick={() => onProject(project.id)}
            >
              <div className="project-meta">
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{CATEGORY_LABELS[language][project.category!]}</span>
                <span>↗</span>
              </div>
              <ProjectCover project={project} />
              <h3>{project.title}</h3>
            </button>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags?.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function ProjectDetail({
  id,
  language,
  onBack,
  onProject,
  reduced,
}: {
  id: string;
  language: Language;
  onBack: () => void;
  onProject: (id: string) => void;
  reduced: boolean;
}) {
  const project = PROJECTS[language].find((p) => p.id === id),
    zh = language === "zh";
  const [embed, setEmbed] = useState(false),
    [photo, setPhoto] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    setEmbed(false);
    setPhoto(null);
  }, [id]);
  useEffect(() => {
    if (photo !== null) dialog.current?.showModal();
  }, [photo]);
  if (!project)
    return (
      <section className="page-content">
        <h1>{zh ? "未找到这份档案" : "Archive not found"}</h1>
        <button onClick={onBack}>{zh ? "返回作品集" : "Back to works"}</button>
      </section>
    );
  const gallery = (
    project.gallery?.filter(Boolean).length
      ? project.gallery
      : PHOTOGRAPHY_GALLERY[project.id] || []
  )!.filter(Boolean);
  const links = [
    project.bilibiliId && {
      label: zh ? "在哔哩哔哩观看" : "Watch on Bilibili",
      url: `https://www.bilibili.com/video/${project.bilibiliId}/`,
    },
    project.figmaUrl && {
      label: zh ? "查看 Figma 作品" : "View on Figma",
      url: project.figmaUrl,
    },
    project.websiteUrl && {
      label: zh ? "打开网站" : "Open website",
      url: project.websiteUrl,
    },
    project.githubUrl && { label: "GitHub", url: project.githubUrl },
    project.externalLink && {
      label: zh ? "查看完整作品" : "View original work",
      url: project.externalLink,
    },
  ].filter(Boolean) as { label: string; url: string }[];
  const index = PROJECTS[language].findIndex((p) => p.id === id),
    next = PROJECTS[language][(index + 1) % PROJECTS[language].length];
  const close = () => {
    dialog.current?.close();
    setPhoto(null);
  };
  return (
    <section className="detail-page page-content">
      <button className="back-link" onClick={onBack}>
        <ArrowLeft size={18} />
        {zh ? "返回作品档案" : "Back to archive"}
      </button>
      <div className="detail-heading">
        <p className="eyebrow">
          {id.toUpperCase()} / {CATEGORY_LABELS[language][project.category!]}
        </p>
        <h1>{project.title}</h1>
        <p className="detail-subtitle">{project.subtitle}</p>
      </div>
      <div className="detail-media">
        {project.videoUrl ? (
          <video src={project.videoUrl} controls playsInline />
        ) : embed && project.bilibiliId ? (
          <iframe
            title={project.title}
            src={`https://player.bilibili.com/player.html?bvid=${project.bilibiliId}&high_quality=1&autoplay=0`}
            allow="fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            referrerPolicy="no-referrer"
          />
        ) : (
          <>
            <ProjectCover project={project} />
            {project.bilibiliId && (
              <button className="detail-play" onClick={() => setEmbed(true)}>
                <Play size={22} />
                {zh ? "播放作品" : "Play film"}
              </button>
            )}
          </>
        )}
      </div>
      <div className="detail-body">
        <div className="detail-sidebar">
          <span className="eyebrow">ROLE / {zh ? "我的角色" : "MY ROLE"}</span>
          <p>{project.role}</p>
          <div className="project-tags">
            {project.tags?.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          {project.awards?.filter(Boolean).map((a) => (
            <p className="award" key={a}>
              ↗ {a}
            </p>
          ))}
          <div className="external-links">
            {links.map((l) => (
              <a href={l.url} key={l.url} target="_blank" rel="noreferrer">
                {l.label}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </div>
        </div>
        <div className="detail-writing">
          <h2>{zh ? "项目概述" : "Overview"}</h2>
          <p>{project.description}</p>
          {project.concept && (
            <>
              <h2>{zh ? "创作思路" : "Concept"}</h2>
              <p>{project.concept}</p>
            </>
          )}
          {project.roleDetail && (
            <>
              <h2>{zh ? "工作内容" : "Contribution"}</h2>
              <p>{project.roleDetail}</p>
            </>
          )}
        </div>
      </div>
      {gallery.length > 0 && (
        <div className="gallery">
          <h2>
            {zh ? "影像记录" : "Gallery"} <span>{gallery.length}</span>
          </h2>
          <div className="gallery-grid">
            {gallery.map((src, i) => (
              <button
                key={`${src}-${i}`}
                onClick={() => setPhoto(i)}
                aria-label={`${zh ? "放大照片" : "Enlarge photo"} ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`${project.title} · ${i + 1}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      )}
      <button className="next-project" onClick={() => onProject(next.id)}>
        <span className="eyebrow">
          NEXT / {zh ? "下一份档案" : "NEXT ARCHIVE"}
        </span>
        <span>{next.title}</span>
        <ArrowRight />
      </button>
      <dialog
        ref={dialog}
        className="lightbox"
        onCancel={() => setPhoto(null)}
        onClose={() => setPhoto(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={(e) => {
          if (photo !== null && e.key === "ArrowRight")
            setPhoto((photo + 1) % gallery.length);
          if (photo !== null && e.key === "ArrowLeft")
            setPhoto((photo - 1 + gallery.length) % gallery.length);
        }}
      >
        <button
          className="lightbox-close round-button"
          onClick={close}
          aria-label={zh ? "关闭照片" : "Close photo"}
        >
          <X />
        </button>
        {photo !== null && (
          <>
            <img
              src={gallery[photo]}
              alt={`${project.title} · ${photo + 1}`}
              referrerPolicy="no-referrer"
            />
            <div className="lightbox-controls">
              <button
                className="round-button"
                onClick={() =>
                  setPhoto((photo - 1 + gallery.length) % gallery.length)
                }
                aria-label={zh ? "上一张" : "Previous photo"}
              >
                <ArrowLeft />
              </button>
              <span>
                {photo + 1} / {gallery.length}
              </span>
              <button
                className="round-button"
                onClick={() => setPhoto((photo + 1) % gallery.length)}
                aria-label={zh ? "下一张" : "Next photo"}
              >
                <ArrowRight />
              </button>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
