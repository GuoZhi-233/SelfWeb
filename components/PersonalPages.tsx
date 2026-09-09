import React from "react";
import { ArrowUpRight } from "lucide-react";
import { EDUCATION_DATA } from "../src/data/education";
import { CONTACT_DATA } from "../src/data/contact";
import { Language } from "../types";
import { GeometryPanel } from "./Archive";

export function AboutPage({
  language,
  reduced,
}: {
  language: Language;
  reduced: boolean;
}) {
  const d = EDUCATION_DATA[language],
    zh = language === "zh";
  return (
    <section className="page-content about-page">
      <div className="about-intro">
        <div>
          <p className="eyebrow">02 / BACKGROUND & EXPERIENCE</p>
          <h1>
            {zh ? (
              <>
                艺术思考。
                <br />
                技术实践。
              </>
            ) : (
              <>
                Art in mind.
                <br />
                Tech in hand.
              </>
            )}
          </h1>
        </div>
        <GeometryPanel reduced={reduced} language={language} />
      </div>
      <div className="about-statement">
        <span className="eyebrow">ABOUT / PENG ZHOU</span>
        <p>{d.about}</p>
      </div>
      <h2 className="subheading">{d.title}</h2>
      {d.experiences.map((e) => (
        <div className="experience-row" key={e.id}>
          <span>{e.year}</span>
          <div>
            <h3>{e.institution}</h3>
            <h4>{e.title}</h4>
            <p>{e.description}</p>
          </div>
          <span className="experience-dot" />
        </div>
      ))}
      <h2 className="subheading">{d.honorsTitle}</h2>
      <div className="honors-grid">
        <div>
          <span className="eyebrow">01</span>
          <h3>{d.scholarshipsLabel}</h3>
          {d.honors.scholarships.map((s) => (
            <p key={s}>{s}</p>
          ))}
        </div>
        <div>
          <span className="eyebrow">02</span>
          <h3>{d.titlesLabel}</h3>
          {d.honors.titles.map((s) => (
            <p key={s}>{s}</p>
          ))}
        </div>
        <div>
          <span className="eyebrow">03</span>
          <h3>{d.competitionsTitle}</h3>
          {d.honors.competitions.map((c) => (
            <div key={c.level}>
              <h4>{c.level}</h4>
              {c.awards.map((s) => (
                <p key={s}>{s}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ContactPage({
  language,
  reduced,
}: {
  language: Language;
  reduced: boolean;
}) {
  const d = CONTACT_DATA[language],
    zh = language === "zh";
  const links = [
    {
      name: "Bilibili",
      value: d.socials.bilibili,
      url: "https://space.bilibili.com/547350986",
    },
    {
      name: zh ? "小红书" : "RED",
      value: d.socials.xiaohongshu,
      url: "https://www.xiaohongshu.com/user/profile/5d10bb650000000010024c03",
    },
    {
      name: "LinkedIn",
      value: d.socials.linkedin,
      url: "https://www.linkedin.com/in/pengzhou233/",
    },
    {
      name: "GitHub",
      value: "GuoZhi-233",
      url: "https://github.com/GuoZhi-233",
    },
    {
      name: zh ? "微信 / 公众号" : "WeChat",
      value: d.socials.wechat,
      url: "https://mp.weixin.qq.com/s/s2himlWgHigqdcScAUeQkg",
    },
  ];
  return (
    <section className="page-content contact-page">
      <p className="eyebrow">03 / LET’S CONNECT</p>
      <div className="contact-heading">
        <div>
          <h1>
            {d.hello}
            <span>。</span>
          </h1>
          <p>{d.intro}</p>
          <a className="email-link" href={`mailto:${d.email}`}>
            {d.email}
            <ArrowUpRight />
          </a>
          <p className="contact-base">
            {d.baseLabel} / {d.locationValue}
          </p>
        </div>
        <GeometryPanel reduced={reduced} language={language} />
      </div>
      <div className="social-grid">
        {links.map((l, i) => (
          <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
            <span className="eyebrow">0{i + 1}</span>
            <h2>{l.name}</h2>
            <span>{l.value}</span>
            <ArrowUpRight className="social-arrow" />
          </a>
        ))}
      </div>
    </section>
  );
}
