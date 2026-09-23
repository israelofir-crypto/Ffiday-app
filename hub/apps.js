// רשימת הפרויקטים שמוצגים בפורטל.
// כדי להוסיף פרויקט: מוסיפים אובייקט למערך. השדה repo (אם קיים) מאפשר
// לפורטל למשוך מ-GitHub בזמן אמת את תאריך העדכון, מספר הקומיטים וה-PRs הפתוחים.
// status: live | wip | tool | missing
window.APPS = [
  {
    id: "friday",
    name: "שישי בבוקר",
    tagline: "מה עושים ביום שישי בבוקר, לפי עיר, אווירה ותקציב",
    status: "live",
    kind: "אפליקציה אישית",
    icon: "sun",
    started: "2026-07-17",
    updated: "2026-09-03",
    progress: 90,
    stack: ["HTML/JS", "PWA ניתנת להתקנה", "OpenStreetMap", "GitHub Pages"],
    facts: "8 שיפורים שמוזגו · 4 ערים · שאלון טבע וטבילה",
    next: "לסגור את השאלה הפתוחה על timeout לנתונים החיים, ולהחליט אם לחבר ל-Vercel.",
    repo: "israelofir-crypto/Ffiday-app",
    links: [
      { label: "פתח את האפליקציה", url: "https://israelofir-crypto.github.io/Ffiday-app/", primary: true },
      { label: "קוד", url: "https://github.com/israelofir-crypto/Ffiday-app" },
      { label: "דוח הרצה", url: "https://claude.ai/artifact/KoEuTyGFq6thH48tWNTRya" }
    ],
    business: 1
  },
  {
    id: "miluim",
    name: "מילואים־זכויות",
    tagline: "פלטפורמת SaaS לבדיקת החזר מס למשרתי מילואים, עם משרד אחורי למייצג",
    status: "wip",
    kind: "SaaS",
    icon: "shield",
    started: "2026-07-27",
    updated: "2026-07-27",
    progress: 60,
    stack: ["Next.js 15", "TypeScript", "Supabase", "Claude API", "41 טסטים"],
    facts: "~3,800 שורות · מנוע מס · 9 עילות החזר · חילוץ טופס 106",
    next: "לאמת ערכי מס שמסומנים VERIFY, לחבר Supabase אמיתי, להצפין ת״ז ולהחליף את ה-Mock של חתימה, סליקה ו-SMS.",
    repo: "israelofir-crypto/tax-returns",
    private: true,
    links: [{ label: "קוד", url: "https://github.com/israelofir-crypto/tax-returns" }],
    business: 3
  },
  {
    id: "landing",
    name: "דף נחיתה, אופיר ישראל רו״ח",
    tagline: "אתר אישי דו־לשוני לרו״ח וחשב בכיר, בכמה כיווני עיצוב",
    status: "wip",
    kind: "אתר תדמית",
    icon: "page",
    started: "2026-08-19",
    updated: "2026-08-19",
    progress: 70,
    stack: ["HTML/CSS", "עברית/אנגלית", "Petrol · Emerald · Azure"],
    facts: "~5,300 שורות · 9 גרסאות עיצוב",
    next: "לבחור עיצוב אחד, להפוך אותו ל-index.html ולפרסם בכתובת קבועה.",
    repo: "israelofir-crypto/ofir-landing",
    links: [{ label: "קוד", url: "https://github.com/israelofir-crypto/ofir-landing" }],
    business: 2
  },
  {
    id: "game1942",
    name: "1942, משחק יריות רטרו",
    tagline: "משחק ארקייד בדפדפן, העמוד הראשון שפרסמת",
    status: "tool",
    kind: "משחק",
    icon: "star",
    started: "2026-07-16",
    updated: "2026-07-16",
    stack: ["Canvas", "claude.ai"],
    links: [{ label: "שחק", url: "https://claude.ai/artifact/EH6rTwjuwKqb5ZkG3E2cca", primary: true }],
    business: 0
  },
  {
    id: "agents",
    name: "מצבת הסוכנים",
    tagline: "מיפוי של סוכני Claude Code והתפקיד של כל אחד",
    status: "tool",
    kind: "כלי עבודה",
    icon: "people",
    started: "2026-08-19",
    updated: "2026-08-19",
    stack: ["claude.ai", "סוכנים"],
    links: [{ label: "פתח", url: "https://claude.ai/artifact/SG4VUjLPj6UtHZkHCidi4V", primary: true }],
    business: 0
  },
  {
    id: "course",
    name: "קורס Claude Code לכספים",
    tagline: "מפת יישום של Claude Code לצוות פיננסי",
    status: "tool",
    kind: "הדרכה",
    icon: "cap",
    started: "2026-09-22",
    updated: "2026-09-22",
    stack: ["claude.ai", "הדרכה"],
    links: [{ label: "פתח", url: "https://claude.ai/artifact/3CWThPLRnZz8KEGc1BpFwK", primary: true }],
    business: 2
  },
  {
    id: "academy",
    name: "AI Academy לצוות פיננסי",
    tagline: "תוכנית הכשרה ב-AI לצוות כספים. הבסיס לקורס Claude Code",
    status: "missing",
    kind: "הדרכה",
    icon: "cap",
    started: "2026-08-06",
    updated: "2026-08-06",
    stack: ["קבצים מקומיים"],
    next: "לא נמצא מאגר ב-GitHub. כדאי להעלות את הקבצים מהמחשב כדי שלא יאבדו.",
    links: [],
    business: 2
  }
];
