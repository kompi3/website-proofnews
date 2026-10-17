---
title: "Incognito Mode Won't Keep You Anonymous Online. Here's What It Actually Does"
description: "Millions open a private window expecting invisibility. We checked the research, a $5 billion lawsuit against Google, and what Mozilla and the EFF say — incognito hides your tracks from people who share your device, and almost nobody else."
pubDate: 2026-07-29T15:00:00+07:00
category: 'Technology'
verdict: 'False'
---

Open a private window in Chrome and you are greeted by a small spy in a trench coat and hat — the mascot of Incognito mode — along with the reassuring line that you can now "browse privately." For years, that darkened window has felt like an invisibility cloak: no history, no cookies, no traces. Sensitive searches, surprise gifts, medical questions, job hunting on a work computer — all of it supposedly vanished into the dark.

It never did. Incognito mode deletes traces from your own device, and that is essentially where its power ends. Your internet provider, your employer or school, the websites you visit, and the advertising machinery embedded in them can still see what you do. Browser fingerprinting can identify you without any cookies at all. And the gap between what users believe and what the feature does became expensive enough to end up in a federal courtroom, where Google agreed to delete billions of data records collected from people browsing "privately." The claim that incognito mode keeps you anonymous online is false — and understanding why matters more than ever, because the misunderstanding is one of the most widely held myths on the internet.

<picture>
<source srcset="/img/1550751827-4bd374c3f58b-1000.avif" type="image/avif">
<source srcset="/img/1550751827-4bd374c3f58b-700.webp" type="image/webp">
<img src="/img/1550751827-4bd374c3f58b-700.webp" alt="A padlock resting on a computer circuit board, symbolizing cybersecurity" width="1000" height="563" fetchpriority="high" decoding="async">
</picture>
*Illustration: a padlock on a circuit board. Incognito mode locks the diary on your own device — it does not lock the doors anyone else looks through.*

## Where the claim comes from

The myth did not arrive by accident. The very name of the feature — "Incognito," "Private Browsing," "InPrivate" — plus the spy iconography suggests secrecy. Browser makers reinforced the impression for years with splash pages promising that "other people who use this device won't see your activity," a sentence that is technically true and psychologically misleading, because most readers hear "nobody will see my activity."

The research on what people actually believe is sobering. In a 2018 study by researchers at the University of Chicago and Leibniz University Hannover, 460 volunteers were shown a fictional browser using thirteen real private-browsing modes taken from actual browsers such as Chrome, Firefox, Edge, and Brave, and asked what the mode would protect. The results, reported by The Register: 56.3 percent of participants thought that logging into a Google account in private mode would prevent searches from being saved to the account's history, 46.5 percent thought bookmarks saved in private mode would not show up in standard mode, 40.2 percent mistakenly believed private mode would prevent a website from tracking their location, 27.1 percent believed it offered better protection against malware, and 25.2 percent believed it would obscure their public IP address.

That confusion has proven stubbornly durable. A 2019 Pew Research Center digital-knowledge survey found that only 24 percent of American adults knew private browsing can only hide history from other users of the same device — while 49 percent admitted they were simply unsure what it did at all. A UK survey from February 2023 found that 40 percent of users had activated incognito mode specifically to prevent advertisers from tracking them, something the feature does not do once its local cookie store is considered in context. A 2023 study by Norton, cited by security analysts, found that over 60 percent of users believed incognito mode hides them from websites. And 25 percent of American adults surveyed by Pew thought private browsing hid the websites they visited from their internet service provider — which, as we will see, is precisely the party it never hides anything from.

It is worth pausing on why the belief matters. People change their behavior inside the dark window. Researchers at University College Dublin found that over 90 percent of the incognito users they surveyed employed private browsing to hide their activities — searches they would never run in the open. People research medical conditions, visit sensitive sites, and log into accounts on shared or monitored networks while feeling protected. The feeling is the product. The protection is not.

## What incognito mode actually does

Strip away the spy mascot and the feature is almost boringly simple. Opening an incognito window starts a temporary browsing session that is isolated from your main browser profile. When you close the window, the browser discards the session: the list of sites you visited is not written to your history, the cookies set during the session are deleted, cached files are cleared, and form entries and autofill data are forgotten. Sites you visit during the session still work normally — they can set cookies while the window is open — but those cookies are thrown away when it closes.

That is the complete job description. As one security explainer puts it, incognito mode is "a local privacy tool, not an anonymity solution." It hides your tracks from the next person who sits at your computer. Nothing about the feature changes how your traffic crosses the network, what the websites you visit record, or who watches the connection in between.

A few housekeeping details underline the point. Files you download during a private session stay on your disk after the window closes. Bookmarks you save stay saved. Most browsers disable extensions in private windows by default, and while you can enable them manually, doing so hands those extensions visibility into the very session you wanted to keep quiet. And even the local cleanup has limits that forensics researchers have demonstrated for years: a 2016 study by Magnet Forensics found that 63 percent of users' private browsing sessions could be reconstructed from RAM snapshots, because session data can linger in memory, swap files, temporary caches, and crash reports. One analysis notes that on Windows, DNS lookups made during an incognito session may remain visible in the operating system's DNS cache — though its authors caution that this behavior should be treated as plausible but unverified rather than documented. The curtain closes, but the room was never empty.

## Who can still watch: your ISP, your employer, the websites

Here is the part that surprises people most. Incognito mode operates entirely inside the browser. It does not create a separate or encrypted network connection. So your internet service provider still sees every domain you visit, with timestamps and traffic volumes, exactly as it does in a normal window. Your employer or school — anyone who administers the network you are on — retains full visibility through firewalls, proxies, and monitoring systems that operate independently of anything your browser does. Mozilla says this explicitly about Firefox's private browsing: it does not make you anonymous to your internet service provider, your employer, or the websites you visit.

The websites themselves are equally unaffected. Every request your browser sends still carries your public IP address, and incognito mode does nothing to change the connection your ISP assigned you — it cannot, since it never reroutes traffic. That is the job of a VPN, which sends your traffic through the VPN provider's server so that websites see the server's address instead of yours. Incognito mode is not a VPN and was never designed to be one.

Then there is the account problem. If you log into Google, Facebook, your email, or any other service while in an incognito window, that service ties the session's activity to your profile — precisely the misunderstanding that tripped up 56.3 percent of the participants in the Chicago/Hannover study. Google's own help pages state directly that sites using Google's services share information about your activity on their sites with Google, including for advertising purposes. The browser forgot you. The account did not.

Search engines, ad networks, and analytics platforms embedded in the pages you visit keep receiving data during the session, too. Deleting cookies at the end does not retroactively unsend the information those services collected while the window was open. And governments and law enforcement can still obtain records from ISPs and websites through ordinary legal processes — no browser mode has ever stood in the way of a subpoena.

<picture>
<source srcset="/img/1526374965328-7f61d4dc18c5-1000.avif" type="image/avif">
<source srcset="/img/1526374965328-7f61d4dc18c5-700.webp" type="image/webp">
<img src="/img/1526374965328-7f61d4dc18c5-700.webp" alt="Green computer code cascading down a screen, Matrix style" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Illustration: streaming code. Tracking systems do not need your cookies — they read the machine you are typing on.*

## The $5 billion lesson: Brown v. Google

If the misunderstanding were merely academic, it would be a curiosity. But it was expensive enough to produce one of the most consequential privacy cases in browser history. In 2020, consumers filed a class action — Brown v. Google — alleging that Google's analytics, advertising technology, cookies, and apps allowed the company to track users' activity even when they browsed in Chrome's Incognito mode or other browsers' private modes. The plaintiffs argued that Google had turned itself into an "unaccountable trove of information" about users' friends, hobbies, preferences, and even intimate searches, "no matter what safeguards consumers undertake to protect their data privacy." They sought at least $5 billion in damages.

Google disagreed with the claims — and, notably, argued that Google, internet providers, and employers have always been able to potentially view and collect data from browsing sessions, even in Incognito mode. But in December 2023 the company agreed to settle, with the deal finalized in April 2024. Under the settlement, Google committed to destroying billions of data records reflecting users' private-browsing activity — data going back years — and to revising its disclosures to clarify that using incognito or another private mode does not prevent data collection by third-party websites that use Google's services. For the next five years, Chrome users can block third-party cookies by default in Incognito mode.

The settlement involved no cash payment to consumers — individuals retained the right to file their own claims in state courts instead, and dozens have done so. Google's position, in a statement to reporters: "We are pleased to settle this lawsuit, which we always believed was meritless. The plaintiffs originally wanted US$5 billion and are receiving zero. We never associate data with users when they use Incognito mode. We are happy to delete old technical data that was never associated with an individual and was never used for any form of personalisation."

Settlements do not establish liability, and this one is best read as a document about disclosure rather than guilt. But as Forrester senior analyst Stephanie Liu observed, the case captured something real about consumer expectations: "The heart of this lawsuit was about Incognito Mode's claim of 'Now you can browse privately.' Users argued they weren't expecting Google to capture volumes of data on these allegedly private browsing sessions." Around 136 million users were covered by the proposed relief. Chrome's incognito splash page has since been rewritten to spell out the limits more plainly — journalists spotted a more explicit disclaimer in test builds as early as January 2024. The spy is still on the page. The fine print got longer.

## Fingerprinting: the tracker incognito can't touch

There is one more reason private browsing cannot deliver anonymity, and it is the most technically decisive. Websites do not need cookies to recognize you. They can use browser fingerprinting: collecting dozens of signals your browser volunteers with every request — the user-agent string naming your browser and operating system, screen resolution and color depth, the set of installed fonts, how your graphics card renders a hidden canvas image, WebGL renderer details revealing your GPU model, timezone, language, installed extensions, CPU core count, audio-processing quirks — and combining them into an identifier stable enough to follow you across sessions.

The numbers are striking. The Electronic Frontier Foundation's Panopticlick project, now called Cover Your Tracks, tested the idea empirically on hundreds of thousands of real browsers. Of 470,161 visitors in its landmark study, 83.6 percent had a fingerprint unique enough to identify them — and among browsers with Flash or Java installed, 94.2 percent were unique. Later analyses found that combining thirteen or more fingerprint signals produces a profile statistically unique for 83 to 90 percent of users, no cookies required.

Fingerprinting is incognito mode's blind spot by design. Clearing cookies does not change your fingerprint, because the fingerprint is derived from your hardware and software configuration, not from stored data. Commercial fingerprint vendors collect 30 to 100 signals, hash the combination, and return a visitor ID that survives browser restarts, cookie deletion, and IP changes — and it works identically inside a private window. It is invisible: no cookie banner, no permission prompt, nothing to decline. Researchers have even demonstrated techniques that can identify users across different browsers on the same machine by focusing on hardware-level attributes.

This is why the 25.2 percent of study participants who believed private mode obscured their IP address, and the 40.2 percent who believed it blocked location tracking, were wrong in two directions at once: the address is unchanged, and even if it changed, the machine behind it is still recognizable. In 2026 the tracking industry has moved even further in this direction. As third-party cookies crumble, fingerprinting has become the dominant identification method for ad networks and fraud-prevention systems — and Google itself announced it would no longer prohibit advertising customers from fingerprinting users, a move the UK's Information Commissioner's Office sharply criticized. The industry is not abandoning tracking as cookies die. It is switching to methods that never needed cookies in the first place.

<picture>
<source srcset="/img/1518770660439-4636190af475-1000.avif" type="image/avif">
<source srcset="/img/1518770660439-4636190af475-700.webp" type="image/webp">
<img src="/img/1518770660439-4636190af475-700.webp" alt="Close-up of a computer circuit board with electronic components" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Illustration: the hardware inside every device. Fingerprinting reads your machine's configuration — and incognito mode does not change a single chip of it.*

## What incognito is genuinely good for

None of this makes incognito mode useless. It makes it specific — and used as designed, it is genuinely valuable. On a shared or public computer, private browsing prevents your logins, history, and form data from persisting after you walk away. It lets you sign into two accounts on the same service at once, or test what a website looks like without your cookies and extensions interfering. Journalists and developers use it daily for exactly that kind of clean-slate testing.

It is also the right tool for the most common personal scenario: keeping sensitive searches out of the history on a device other people use. Researching a medical condition, shopping for a surprise, or reading something you would rather not have suggested back to you by autocomplete — private browsing handles all of that, because it was built to defeat one specific adversary: the next person who picks up your device. That is a real and common threat model. It is just not the internet.

What it is not good for is the list people keep bringing to it. It does not stop your employer from seeing what you do on the work network. It does not protect you from malware or phishing — 27.1 percent of the Chicago/Hannover participants believed it did, and browsers offer no such shield. It does not hide downloads, bookmarks, or anything a logged-in account records. And it does not make you anonymous, to anyone, anywhere outside your own keyboard.

If anonymity is the actual goal, the tools are different and the trade-offs are real: a reputable VPN hides your traffic's destination from your ISP (while shifting that trust to the VPN provider), privacy-focused browsers and extensions can blunt fingerprinting, and the Tor Browser routes traffic through multiple relays specifically to separate identity from activity. Each of these has costs in speed, convenience, or trust. None of them is a single darkened window.

<picture>
<source srcset="/img/1511707171634-5f897ff02aa9-1000.avif" type="image/avif">
<source srcset="/img/1511707171634-5f897ff02aa9-700.webp" type="image/webp">
<img src="/img/1511707171634-5f897ff02aa9-700.webp" alt="A hand holding a smartphone against a bright sky" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Illustration: the phone in your hand. Private browsing suits personal scenarios — shared devices, second accounts, sensitive searches — but it was never built for the open internet.*

## The Verdict

The claim is **False**. Incognito and private browsing modes do not keep you anonymous online. They do exactly one thing well: they prevent your browser from saving history, cookies, site data, and form entries on your own device after the session ends. Everything beyond the device — your ISP, your employer or school network, the websites you visit, search engines, ad networks, analytics platforms, and any account you log into — can still see, log, and tie activity to you. Browser fingerprinting can identify the vast majority of users without a single cookie, and it works identically inside a private window.

The evidence is consistent across every angle ProofNews examined: the browser makers' own documentation, Mozilla's explicit statements, the Electronic Frontier Foundation's fingerprinting research, multiple independent surveys of user misunderstanding, and a federal class action that cost Google billions of data records and five years of mandated cookie blocking. The misunderstanding is so widespread — majorities of users in study after study — that it has become a public-policy problem, not just a trivia question.

Use incognito mode for what it is: a clean, forgetful window on a shared computer, a second login, a fresh look at a website. But when the stakes involve your employer, your provider, a government, or anyone with network-level visibility, the dark window is a costume, not a cloak. The spy on the splash page was always marketing. The fine print — finally, after a $5 billion lawsuit — is the truth.

<picture>
<source srcset="/img/1594663653925-365bcbf7ef86-1000.avif" type="image/avif">
<source srcset="/img/1594663653925-365bcbf7ef86-700.webp" type="image/webp">
<img src="/img/1594663653925-365bcbf7ef86-700.webp" alt="A smartphone displaying a web search on its screen" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Illustration: searching in a private window. Your browser will forget the search — your account, your provider, and the search engine will not.*
