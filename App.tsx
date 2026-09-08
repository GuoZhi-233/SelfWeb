import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, MoveUpRight, RotateCcw, Sparkles } from "lucide-react";
import { useReducedMotion } from "motion/react";
import BootSequence, { BrandMark } from "./components/BootSequence";
import Showreel from "./components/Showreel";
import Archive, { GeometryPanel, ProjectDetail } from "./components/Archive";
import { AboutPage, ContactPage } from "./components/PersonalPages";
import SoundDock from "./components/SoundDock";
import { Language } from "./types";

const readRoute = () => {
  try {
    return decodeURIComponent(location.hash.slice(1) || "home");
  } catch {
    return "not-found";
  }
};
const stored = (key: string, fallback: string) => {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
};
export default function App() {
  const [language, setLanguage] = useState<Language>(() =>
    stored("pz-language", "zh") === "en" ? "en" : "zh",
  );
  const [dark, setDark] = useState(
    () => stored("pz-theme", "light") === "dark",
  );
  const [less, setLess] = useState(
    () => stored("pz-motion", "full") === "less",
  );
  const systemReduced = useReducedMotion(),
    reduced = !!systemReduced || less;
  const [boot, setBoot] = useState(
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [target, setTarget] = useState(readRoute),
    [route, setRoute] = useState(readRoute),
    [transition, setTransition] = useState("");
  const current = useRef(route),
    main = useRef<HTMLElement>(null),
    works = useRef<HTMLDivElement>(null);
  const zh = language === "zh";
  const finishBoot = useCallback(() => setBoot(false), []);
  useEffect(() => {
    const hash = () => setTarget(readRoute());
    window.addEventListener("hashchange", hash);
    return () => window.removeEventListener("hashchange", hash);
  }, []);
  useEffect(() => {
    if (target === current.current) {
      setTransition("");
      return;
    }
    const apply = () => {
      current.current = target;
      setRoute(target);
      window.scrollTo({ top: 0, behavior: "instant" });
      requestAnimationFrame(() => main.current?.focus({ preventScroll: true }));
    };
    if (reduced) {
      setTransition("");
      apply();
      return;
    }
    setTransition("cover");
    const swap = setTimeout(() => {
      apply();
      setTransition("reveal");
    }, 360);
    const end = setTimeout(() => setTransition(""), 880);
    return () => {
      clearTimeout(swap);
      clearTimeout(end);
    };
  }, [target, reduced]);
  useEffect(() => {
    document.documentElement.lang = zh ? "zh-CN" : "en";
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.dataset.reduced = String(reduced);
    try {
      localStorage.setItem("pz-language", language);
      localStorage.setItem("pz-theme", dark ? "dark" : "light");
      localStorage.setItem("pz-motion", less ? "less" : "full");
    } catch {}
  }, [language, dark, less, reduced, zh]);
  useEffect(() => {
    document.body.style.overflow = boot ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [boot]);
  useEffect(() => {
    const titles: Record<string, string> = {
      home: zh ? "主页" : "Home",
      works: zh ? "作品" : "Works",
      about: zh ? "经历" : "Experience",
      contact: zh ? "联系" : "Contact",
    };
    document.title = `PENG ZHOU — ${titles[route] || (zh ? "作品详情" : "Project")}`;
  }, [route, zh]);
  const navigate = (to: string) => {
    if (to === readRoute()) {
      window.scrollTo({ top: 0, behavior: reduced ? "instant" : "smooth" });
      return;
    }
    location.hash = to;
  };
  const openProject = (id: string) => navigate(`project/${id}`);
  const explore = () =>
    works.current?.scrollIntoView({
      behavior: reduced ? "instant" : "smooth",
      block: "start",
    });
  const nav = [
    { id: "home", label: zh ? "主页" : "Home" },
    { id: "works", label: zh ? "作品" : "Works" },
    { id: "about", label: zh ? "经历" : "Experience" },
    { id: "contact", label: zh ? "联系" : "Contact" },
  ];
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          main.current?.focus();
        }}
      >
        {zh ? "跳至正文" : "Skip to content"}
      </a>
      {boot && <BootSequence onFinish={finishBoot} reduced={reduced} />}
      <div className="site-shell" inert={boot || undefined}>
        <header className="masthead">
          <a className="brand" href="#home" aria-label="PENG ZHOU — Home">
            <BrandMark />
            <span>
              PENG ZHOU<small>CREATIVE PORTFOLIO</small>
            </span>
          </a>
          <nav aria-label={zh ? "主导航" : "Main navigation"}>
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={
                  route === n.id ||
                  (n.id === "works" && route.startsWith("project/"))
                    ? "active"
                    : ""
                }
                aria-current={route === n.id ? "page" : undefined}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="header-tools">
            <button
              onClick={() => setLanguage(zh ? "en" : "zh")}
              aria-label={zh ? "Switch to English" : "切换中文"}
            >
              {zh ? "EN" : "中"}
            </button>
            <span />
            <button
              className="theme-toggle"
              onClick={() => setDark(!dark)}
              aria-label={zh ? "切换明暗主题" : "Toggle color theme"}
              aria-pressed={dark}
            >
              <i />
            </button>
          </div>
        </header>
        <main
          id="main-content"
          ref={main}
          tabIndex={-1}
          key={route}
          className={`route-content ${transition === "reveal" ? "route-enter" : ""}`}
        >
          {route === "home" ? (
            <>
              <Showreel
                language={language}
                reduced={reduced}
                enabled={!boot}
                onExplore={explore}
              />
              <div ref={works} id="work-section" className="home-archive">
                <div className="identity-grid">
                  <div className="identity-name">
                    PENG
                    <br />
                    ZHOU
                    <span className="identity-cutout" />
                  </div>
                  <div className="identity-copy">
                    <span className="eyebrow">
                      IMAGES / IDEAS / INTERACTIONS
                    </span>
                    <h2>
                      {zh ? (
                        <>
                          在秩序之间，
                          <br />
                          创造可能。
                        </>
                      ) : (
                        <>
                          Make room
                          <br />
                          for possibility.
                        </>
                      )}
                    </h2>
                    <p>
                      {zh
                        ? "摄影摄像 · 艺术设计 · 应用开发"
                        : "Photography · Design · Development"}
                    </p>
                    <button
                      onClick={() => navigate("about")}
                      className="identity-link"
                    >
                      {zh ? "关于我" : "About me"}
                      <ArrowUpRight size={24} />
                    </button>
                  </div>
                  <GeometryPanel reduced={reduced} />
                </div>
                <Archive
                  language={language}
                  reduced={reduced}
                  onProject={openProject}
                  compact
                />
                <button
                  className="all-works-button"
                  onClick={() => navigate("works")}
                >
                  <span>{zh ? "打开全部作品" : "Explore all work"}</span>
                  <span className="eyebrow">VIEW ALL ARCHIVES</span>
                  <MoveUpRight />
                </button>
              </div>
            </>
          ) : route === "works" ? (
            <>
              <div className="works-banner">
                <div>
                  <p className="eyebrow">PENG ZHOU / PORTFOLIO</p>
                  <h1>
                    {zh ? (
                      <>
                        让灵感，
                        <br />
                        有迹可循。
                      </>
                    ) : (
                      <>
                        A collection
                        <br />
                        of possibilities.
                      </>
                    )}
                  </h1>
                </div>
                <GeometryPanel reduced={reduced} />
              </div>
              <Archive
                language={language}
                reduced={reduced}
                onProject={openProject}
              />
            </>
          ) : route === "about" ? (
            <AboutPage language={language} reduced={reduced} />
          ) : route === "contact" ? (
            <ContactPage language={language} reduced={reduced} />
          ) : route.startsWith("project/") ? (
            <ProjectDetail
              id={route.slice(8)}
              language={language}
              reduced={reduced}
              onBack={() => navigate("works")}
              onProject={openProject}
            />
          ) : (
            <section className="page-content">
              <h1>404</h1>
              <button onClick={() => navigate("home")}>
                {zh ? "返回主页" : "Return home"}
              </button>
            </section>
          )}
        </main>
        <footer className="site-footer">
          <a href="#home" className="footer-brand">
            PENG ZHOU <ArrowUpRight size={17} />
          </a>
          <span>
            © 2026 /{" "}
            {zh
              ? "人生如逆旅，我亦是行人。"
              : "And miles to go before I sleep."}
          </span>
          <div>
            <button onClick={() => setLess(!less)} aria-pressed={reduced}>
              <Sparkles size={14} />
              {reduced
                ? zh
                  ? "动效已简化"
                  : "Reduced motion"
                : zh
                  ? "简化动效"
                  : "Reduce motion"}
            </button>
            <button onClick={() => setBoot(true)}>
              <RotateCcw size={13} />
              {zh ? "重播开场" : "Replay intro"}
            </button>
          </div>
        </footer>
        <SoundDock language={language} />
      </div>
      {transition && (
        <div className={`page-transition ${transition}`} aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} style={{ "--i": i } as React.CSSProperties} />
          ))}
          <span>
            <BrandMark /> PENG ZHOU
          </span>
        </div>
      )}
    </>
  );
}
